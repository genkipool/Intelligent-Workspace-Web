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
 * NOT PASSING `payment_method_types` IS DELIBERATE. Omitting it enables dynamic payment
 * methods, so which wallets appear is decided in the Stripe Dashboard rather than here.
 * Hardcoding `['card']` is the classic way to make Google Pay and PayPal disappear.
 */

import type { APIRoute } from 'astro';
import { donationCurrency } from '@/data/site';

export const prerender = false;

const STRIPE_API = 'https://api.stripe.com/v1/payment_intents';

/** Whole euros. A donation outside this range is a mistake or an attack, not a gift. */
const MIN_AMOUNT = 1;
const MAX_AMOUNT = 500;
const ALLOWED_CURRENCIES = new Set([donationCurrency]);

function clampAmount(raw: unknown): number | null {
    const amount = Number(raw);
    if (!Number.isFinite(amount)) return null;
    const whole = Math.floor(amount);
    if (whole < MIN_AMOUNT || whole > MAX_AMOUNT) return null;
    return whole;
}

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
    if (!ALLOWED_CURRENCIES.has(currency)) {
        return json({ error: 'Unsupported currency.' }, 400);
    }

    const form = new URLSearchParams({
        // Stripe counts in the currency's smallest unit.
        amount: String(amount * 100),
        currency,
        'automatic_payment_methods[enabled]': 'true',
        description: 'Intelligent Workspace donation',
    });

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
