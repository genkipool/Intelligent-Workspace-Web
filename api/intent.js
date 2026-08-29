/**
 * [AI INSTRUCTION]
 * CREATES THE PAYMENT INTENT. THE ONLY CODE THAT EVER SEES THE SECRET KEY.
 *
 * SECURITY, all of it load-bearing:
 *   - The amount arriving from the browser is a *request*, not a fact. A framed page's
 *     query string is user input like any other, so the amount is clamped here and the
 *     charge is created from the clamped value. Never echo the client's number back
 *     into `amount`.
 *   - `STRIPE_SECRET_KEY` is a Vercel environment variable and must never be committed,
 *     logged, or returned. Only the PaymentIntent's `client_secret` goes back, which is
 *     scoped to that one payment and is safe in the browser.
 *   - The CORS allowlist is the payment page's own origin. The extension never calls
 *     this endpoint directly — it talks to the page, and the page talks to us.
 *
 * NOT PASSING `payment_method_types` IS DELIBERATE. Omitting it is what turns on
 * dynamic payment methods, so which wallets appear is decided in the Stripe Dashboard
 * rather than in this file. Hardcoding `['card']` here is the classic way to make
 * Google Pay and PayPal silently disappear.
 */

const STRIPE_API = 'https://api.stripe.com/v1/payment_intents';

/** Whole euros. A donation outside this range is a mistake or an attack, not a gift. */
const MIN_AMOUNT = 1;
const MAX_AMOUNT = 500;
const ALLOWED_CURRENCIES = new Set(['eur']);

const ALLOWED_ORIGIN = process.env.PAYMENT_PAGE_ORIGIN || 'https://pay.genkipool.com';

function clampAmount(raw) {
    const amount = Number(raw);
    if (!Number.isFinite(amount)) return null;
    const whole = Math.floor(amount);
    if (whole < MIN_AMOUNT || whole > MAX_AMOUNT) return null;
    return whole;
}

export default async function handler(request, response) {
    response.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
    response.setHeader('Vary', 'Origin');

    if (request.method === 'OPTIONS') {
        response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return response.status(204).end();
    }

    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
        // Deliberately vague to the caller, specific in the log the operator reads.
        console.error('[intent] STRIPE_SECRET_KEY is not configured');
        return response.status(500).json({ error: 'Payments are not configured yet.' });
    }

    const body = typeof request.body === 'string' ? safeParse(request.body) : request.body || {};
    const amount = clampAmount(body.amount);
    const currency = String(body.currency || 'eur').toLowerCase();

    if (amount === null) {
        return response.status(400).json({ error: `Choose an amount between ${MIN_AMOUNT} and ${MAX_AMOUNT}.` });
    }
    if (!ALLOWED_CURRENCIES.has(currency)) {
        return response.status(400).json({ error: 'Unsupported currency.' });
    }

    const form = new URLSearchParams({
        // Stripe counts in the currency's smallest unit.
        amount: String(amount * 100),
        currency,
        'automatic_payment_methods[enabled]': 'true',
        description: 'Intelligent Workspace donation',
    });

    try {
        const stripeResponse = await fetch(STRIPE_API, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${secretKey}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                // Two clicks on the same chip must not become two charges.
                'Idempotency-Key': `${amount}-${currency}-${body.nonce || cryptoRandom()}`,
            },
            body: form,
        });

        const intent = await stripeResponse.json();

        if (!stripeResponse.ok) {
            console.error('[intent] Stripe rejected the request:', intent?.error?.message);
            return response.status(502).json({ error: 'The payment provider refused the request.' });
        }

        // `client_secret` only. The rest of the PaymentIntent is none of the browser's
        // business and would leak details of the account.
        return response.status(200).json({ clientSecret: intent.client_secret, amount });
    } catch (error) {
        console.error('[intent] Unexpected failure:', error.message);
        return response.status(502).json({ error: 'The payment could not be started.' });
    }
}

function safeParse(raw) {
    try {
        return JSON.parse(raw);
    } catch {
        return {};
    }
}

function cryptoRandom() {
    return globalThis.crypto.randomUUID();
}
