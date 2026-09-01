/**
 * Creates the PaymentIntent. The only code on this site that sees the secret key.
 *
 * `prerender = false` is what makes this the site's single server function — everything
 * else is a static file. The Vercel adapter reads that flag.
 *
 * SECURITY, all of it load-bearing:
 *   - The amount arriving from the browser is a *request*, not a fact. A framed page's
 *     query string is user input like any other, so it is clamped here and the charge is
 *     created from the clamped value. Never echo the client's number back into `amount`.
 *   - `STRIPE_SECRET_KEY` is an environment variable and must never be committed,
 *     logged, or returned. Only the PaymentIntent's `client_secret` goes back, which is
 *     scoped to that one payment and is safe in the browser.
 *
 * WHICH ELEMENT COLLECTED THE DETAILS DECIDES HOW THE INTENT IS BUILT, and it is not a
 * preference. Stripe refuses to confirm details gathered by an Element that was given
 * `paymentMethodTypes` against an intent created with automatic payment methods, and says
 * so in as many words. The sheet has two elements with two different configurations, so
 * this has two branches:
 *
 *   - the card form restricts itself to `CARD_FORM_METHODS`, so its intent names exactly
 *     those types;
 *   - the wallet buttons are unrestricted, so theirs omits the list and lets dynamic
 *     payment methods pick — which is what keeps Google Pay, Apple Pay and PayPal
 *     appearing or not according to the Dashboard rather than to a hardcoded array here.
 *
 * `source` therefore has to be trusted only as far as choosing between those two shapes.
 * It cannot widen what may be charged: the amount is still clamped, the currency is still
 * checked, and both branches create an intent on the same account.
 */

import type { APIRoute } from 'astro';
import { donationCurrency } from '@/data/site';
// The rules live in a pure module so they can be tested without a server or a Stripe
// key. See `src/lib/donation.test.ts` — those cases are the guard between a query
// string and a card charge.
import {
    clampAmount,
    isSupportedCurrency,
    toMinorUnits,
    MIN_AMOUNT,
    MAX_AMOUNT,
    CARD_FORM_METHODS,
    isCardFormSource,
} from '@/lib/donation';

export const prerender = false;

const STRIPE_API = 'https://api.stripe.com/v1/payment_intents';

function json(body: unknown, status: number): Response {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
}

export const POST: APIRoute = async ({ request }) => {
    const secretKey = import.meta.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
        // Deliberately vague to the caller, specific in the log the operator reads.
        console.error('[intent] STRIPE_SECRET_KEY is not configured');
        return json({ error: 'Payments are not configured yet.' }, 500);
    }

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return json({ error: 'Malformed request.' }, 400);
    }

    const amount = clampAmount(body.amount);
    const currency = String(body.currency ?? donationCurrency).toLowerCase();

    if (amount === null) {
        return json({ error: `Choose an amount between ${MIN_AMOUNT} and ${MAX_AMOUNT}.` }, 400);
    }
    if (!isSupportedCurrency(currency)) {
        return json({ error: 'Unsupported currency.' }, 400);
    }

    const form = new URLSearchParams({
        // Stripe counts in the currency's smallest unit.
        amount: String(toMinorUnits(amount)),
        currency,
        description: 'Intelligent Workspace donation',
    });

    if (isCardFormSource(body.source)) {
        CARD_FORM_METHODS.forEach((type, index) => form.append(`payment_method_types[${index}]`, type));
    } else {
        form.append('automatic_payment_methods[enabled]', 'true');
    }

    try {
        const response = await fetch(STRIPE_API, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${secretKey}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                // Two clicks on the same chip must not become two charges.
                'Idempotency-Key': `${amount}-${currency}-${String(body.nonce ?? crypto.randomUUID())}`,
            },
            body: form,
        });

        const intent = await response.json();

        if (!response.ok) {
            console.error('[intent] Stripe rejected the request:', intent?.error?.message);
            return json({ error: 'The payment provider refused the request.' }, 502);
        }

        // `client_secret` only. The rest of the PaymentIntent is none of the browser's
        // business and would leak details of the account.
        return json({ clientSecret: intent.client_secret, amount }, 200);
    } catch (error) {
        console.error('[intent] Unexpected failure:', (error as Error).message);
        return json({ error: 'The payment could not be started.' }, 502);
    }
};
