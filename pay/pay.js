/**
 * [AI INSTRUCTION]
 * THE DONATION FORM. RUNS ON pay.genkipool.com, NEVER INSIDE THE EXTENSION.
 *
 * WHY THIS FILE EXISTS AT ALL: Manifest V3 pins the extension's `script-src` to
 * `'self'`, so Stripe.js cannot load in a panel page. This is an ordinary web page, so
 * it can — and the panel frames it. Do not try to move any of this into the extension.
 *
 * THE THREE BUTTONS ARE ONE INTEGRATION. The Express Checkout Element paints Google
 * Pay, PayPal and Link; the Payment Element paints the card form. `method` in the query
 * string only decides which of the two gets focus first — there is no separate PayPal
 * or Google Pay code path, and there must not be one.
 *
 * TALKING BACK TO THE PANEL: `postMessage` carrying the nonce the panel minted. Without
 * a matching nonce the panel drops the message, so never invent one here.
 */

/* global Stripe */

const params = new URLSearchParams(window.location.search);
const NONCE = params.get('nonce');
const METHOD = params.get('method') || 'card';
const CURRENCY = (params.get('currency') || 'eur').toLowerCase();
const LOCALE = (params.get('locale') || 'en').slice(0, 2);

const AMOUNTS = [1, 5, 10];

/**
 * Which wallet the clicked tile asked for. Only used to rank the buttons — an
 * ineligible wallet still will not render, which is the point: Apple Pay simply is not
 * there on a non-Apple device, and forcing it with `applePay: 'always'` would produce a
 * button that cannot complete a payment.
 */
const WALLET_FOR_METHOD = {
    paypal: 'paypal',
    google_pay: 'googlePay',
    apple_pay: 'applePay',
};
const DEFAULT_AMOUNT = 5;

/**
 * Set this to the publishable key of the account that receives the donations. It is
 * public by design — it identifies the account and can do nothing on its own. The
 * secret key lives only in the Vercel environment, never here.
 */
const PUBLISHABLE_KEY =
    'pk_test_51U86TYRqJ0CJGtLi1Bsuse2u2AGyMH55cZU2GeszRCaGkbYtSiULOVejpFglyuk6L7j2GnVmD1LDK2z0E1lqx2bv00KGx0bvpD';

const STRINGS = {
    en: {
        title: 'Support Intelligent Workspace',
        chooseAmount: 'Choose an amount',
        otherAmount: 'Other amount',
        or: 'or pay by card',
        donateNow: 'Donate',
        securedBy: 'Payments are processed by Stripe. This page never stores your card.',
        failed: 'The payment could not be completed.',
        badAmount: 'Choose an amount between 1 and 500 euros.',
        walletUnavailable: 'That wallet is not available on this device, so the card form is shown instead.',
    },
    es: {
        title: 'Apoya Intelligent Workspace',
        chooseAmount: 'Elige un importe',
        otherAmount: 'Otro importe',
        or: 'o paga con tarjeta',
        donateNow: 'Donar',
        securedBy: 'Los pagos los procesa Stripe. Esta página nunca guarda tu tarjeta.',
        failed: 'No se ha podido completar el pago.',
        badAmount: 'Elige un importe entre 1 y 500 euros.',
        walletUnavailable: 'Ese monedero no está disponible en este dispositivo, así que se muestra el formulario de tarjeta.',
    },
};

const text = STRINGS[LOCALE] || STRINGS.en;

/**
 * Currency goes before the number in English and after it in Spanish, with a space.
 * Intl knows that; hardcoding `€${n}` does not, and produced "Donar €5" on the Spanish
 * sheet. Fractions are dropped because every amount here is a whole euro.
 */
const money = new Intl.NumberFormat(LOCALE === 'es' ? 'es-ES' : 'en-IE', {
    style: 'currency',
    currency: CURRENCY.toUpperCase(),
    maximumFractionDigits: 0,
});

// ─── The panel bridge ────────────────────────────────────────────

/**
 * The panel's origin, taken from the browser rather than guessed. `ancestorOrigins` is
 * what Chrome reports for the framing document; falling back to '*' is safe because
 * none of these messages carries anything private — but the panel still checks our
 * origin and the nonce before believing any of them.
 */
const PANEL_ORIGIN = window.location.ancestorOrigins?.[0] || '*';

function notifyPanel(type, extra = {}) {
    if (!NONCE || window.parent === window) return;
    window.parent.postMessage({ type, nonce: NONCE, ...extra }, PANEL_ORIGIN);
}

// ─── Theme ───────────────────────────────────────────────────────

/**
 * The panel hands over the tokens of whatever theme the user picked, so the form is
 * painted in their colours instead of Stripe's defaults. Anything missing simply falls
 * back to the stylesheet — a broken or absent `theme` parameter must never stop the
 * page rendering, because then a theme bug becomes a payment bug.
 */
function applyTheme() {
    let tokens = {};
    try {
        tokens = JSON.parse(params.get('theme') || '{}');
    } catch {
        return {};
    }
    if (!tokens || typeof tokens !== 'object') return {};

    for (const [name, value] of Object.entries(tokens)) {
        // Only plain colour-ish values. Anything with a bracket or a semicolon is not
        // a token we sent, and has no business in a style attribute.
        if (typeof value !== 'string' || /[;{}()<>]/.test(value)) continue;
        document.documentElement.style.setProperty(`--${name}`, value);
    }
    return tokens;
}

// The tokens land as custom properties; `stripeAppearance` reads them back off the
// computed style so the stylesheet's fallbacks apply to anything that did not arrive.
applyTheme();

function stripeAppearance() {
    const read = (token, fallback) => {
        const value = getComputedStyle(document.documentElement).getPropertyValue(`--${token}`).trim();
        return value || fallback;
    };
    return {
        theme: 'stripe',
        variables: {
            colorPrimary: read('interactive-color', '#635bff'),
            colorBackground: read('bg-panel-color', '#ffffff'),
            colorText: read('text-color', '#1a1a1a'),
            colorDanger: read('error-color', '#df1b41'),
            borderRadius: '8px',
            fontFamily: 'system-ui, sans-serif',
        },
    };
}

// ─── Amount ──────────────────────────────────────────────────────

let amount = DEFAULT_AMOUNT;

function renderChips() {
    const chips = document.getElementById('chips');
    chips.replaceChildren(
        ...AMOUNTS.map((value) => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'chip';
            chip.dataset.amount = String(value);
            chip.setAttribute('role', 'radio');
            chip.textContent = money.format(value);
            chip.addEventListener('click', () => setAmount(value, { fromChip: true }));
            return chip;
        }),
    );
    syncChips();
}

function syncChips() {
    for (const chip of document.querySelectorAll('.chip')) {
        const selected = Number(chip.dataset.amount) === amount;
        chip.classList.toggle('is-selected', selected);
        chip.setAttribute('aria-checked', String(selected));
    }
}

function setAmount(value, { fromChip = false } = {}) {
    amount = value;
    if (fromChip) document.getElementById('custom-amount').value = '';
    syncChips();
    // The Element group is told the new total; Stripe re-evaluates which wallets are
    // eligible, which is why this is not just a label change.
    elements?.update({ amount: amount * 100 });
    updateSubmitLabel();
}

function updateSubmitLabel() {
    document.getElementById('submit-label').textContent = `${text.donateNow} ${money.format(amount)}`;
}

// ─── Stripe ──────────────────────────────────────────────────────

const stripe = Stripe(PUBLISHABLE_KEY, { locale: LOCALE });
let elements = null;
let submitting = false;

function setStatus(message, kind = 'error') {
    const status = document.getElementById('status');
    status.textContent = message || '';
    status.className = `status ${message ? kind : ''}`;
}

function setBusy(busy) {
    submitting = busy;
    const button = document.getElementById('submit');
    button.disabled = busy;
    button.classList.toggle('is-busy', busy);
}

async function createIntent() {
    const response = await fetch('/api/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency: CURRENCY, nonce: NONCE }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || text.failed);
    return data.clientSecret;
}

/**
 * Finishes a payment that both Elements share.
 *
 * `redirect: 'if_required'` keeps card and Google Pay inside this frame. PayPal is the
 * exception the whole architecture bends around: it cannot authenticate in a
 * third-party frame, so Stripe hands back a redirect and the browser leaves. That is
 * expected — see the note in `config/payments.js`.
 */
async function finish(confirm) {
    if (submitting) return;
    setBusy(true);
    setStatus('');

    try {
        const { error: submitError } = await elements.submit();
        if (submitError) throw new Error(submitError.message);

        const clientSecret = await createIntent();
        const { error } = await confirm(clientSecret);
        if (error) throw new Error(error.message);

        notifyPanel('pay:success', { amount });
        setStatus('', 'success');
    } catch (error) {
        setStatus(error.message || text.failed, 'error');
        notifyPanel('pay:error', { message: error.message || text.failed });
    } finally {
        setBusy(false);
    }
}

function mount() {
    elements = stripe.elements({
        mode: 'payment',
        amount: amount * 100,
        currency: CURRENCY,
        appearance: stripeAppearance(),
    });

    /**
     * The wallets. Which ones appear is decided by Stripe from the device, the country
     * and what is enabled in the Dashboard — there is no list of payment methods in
     * this file on purpose, because hardcoding one is how wallets go missing.
     */
    const express = elements.create('expressCheckout', {
        buttonType: { googlePay: 'donate', paypal: 'pay', applePay: 'donate' },
        // PayPal first when PayPal was the icon that was clicked, and so on. Ordering
        // is a hint: an ineligible wallet still will not render.
        paymentMethodOrder: WALLET_FOR_METHOD[METHOD] ? [WALLET_FOR_METHOD[METHOD]] : [],
    });

    express.on('ready', ({ availablePaymentMethods }) => {
        const hasWallets = Boolean(availablePaymentMethods);
        document.getElementById('express').hidden = !hasWallets;
        document.getElementById('divider').hidden = !hasWallets;

        // The tile the user pressed named a wallet. If that one is not among the
        // available methods, say so rather than leaving them looking for a button that
        // is never going to appear — the Apple Pay tile on a Linux machine, typically.
        const wanted = WALLET_FOR_METHOD[METHOD];
        const missing = wanted && !availablePaymentMethods?.[wanted];
        const note = document.getElementById('wallet-note');
        if (note) note.hidden = !missing;
    });

    express.on('confirm', () =>
        finish((clientSecret) =>
            stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: { return_url: window.location.href },
                redirect: 'if_required',
            }),
        ),
    );

    express.mount('#express');

    const payment = elements.create('payment', { layout: 'tabs' });
    payment.on('ready', () => {
        document.getElementById('submit').disabled = false;
        notifyPanel('pay:ready');
    });
    payment.mount('#payment-element');

    document.getElementById('payment-form').addEventListener('submit', (event) => {
        event.preventDefault();
        finish((clientSecret) =>
            stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: { return_url: window.location.href },
                redirect: 'if_required',
            }),
        );
    });
}

// ─── Boot ────────────────────────────────────────────────────────

function applyStrings() {
    for (const node of document.querySelectorAll('[data-i18n]')) {
        const value = text[node.dataset.i18n];
        if (value) node.textContent = value;
    }
    document.documentElement.lang = LOCALE;
}

function readCustomAmount(event) {
    const raw = Number(event.target.value);
    if (!Number.isFinite(raw) || raw < 1 || raw > 500) {
        setStatus(text.badAmount);
        document.getElementById('submit').disabled = true;
        return;
    }
    setStatus('');
    document.getElementById('submit').disabled = false;
    setAmount(Math.floor(raw));
}

applyStrings();
renderChips();
updateSubmitLabel();
document.getElementById('custom-amount').addEventListener('input', readCustomAmount);
mount();
