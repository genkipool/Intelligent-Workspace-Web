/**
 * Wires Stripe into the donation sheet.
 *
 * The sheet's markup and every visible string are rendered at build time by
 * `PaySheet.astro`; this file only mounts the Elements and talks to the panel. If you
 * find a sentence here that a person reads, it is in the wrong file — the dictionary in
 * `src/i18n/ui.ts` is the only place copy lives.
 *
 * THE FOUR BUTTONS ARE ONE INTEGRATION. The Express Checkout Element paints Google Pay,
 * Apple Pay, PayPal and Link; the Payment Element paints the card form. `method` in the
 * query string only ranks them — there is no per-gateway code path, and there must not
 * be one, because that is how a wallet silently goes missing.
 *
 * TALKING BACK TO THE PANEL: postMessage carrying the nonce the panel minted. Without a
 * matching nonce the panel drops the message, so never invent one here.
 */

import { donationAmounts, defaultDonationAmount, donationCurrency } from '@/data/site';

/**
 * The publishable key of the account that receives the donations. Public by design — it
 * identifies the account and can do nothing on its own. The secret key lives only in the
 * deployment environment, never here.
 */
const PUBLISHABLE_KEY =
    'pk_test_51U86TYRqJ0CJGtLi1Bsuse2u2AGyMH55cZU2GeszRCaGkbYtSiULOVejpFglyuk6L7j2GnVmD1LDK2z0E1lqx2bv00KGx0bvpD';

/** Which wallet the clicked tile asked for. Only used to rank the buttons. */
const WALLET_FOR_METHOD: Record<string, string> = {
    paypal: 'paypal',
    google_pay: 'googlePay',
    apple_pay: 'applePay',
};

interface PayStrings {
    donateNow: string;
    failed: string;
    badAmount: string;
}

declare const Stripe: (key: string, options?: Record<string, unknown>) => any;

const params = new URLSearchParams(window.location.search);
const NONCE = params.get('nonce');
const METHOD = params.get('method') ?? 'card';
const CURRENCY = (params.get('currency') ?? donationCurrency).toLowerCase();
const LANG = document.documentElement.lang === 'es' ? 'es' : 'en';

const strings: PayStrings = JSON.parse(document.getElementById('pay-strings')?.textContent ?? '{}');

/**
 * Currency goes before the number in English and after it in Spanish. Intl knows that;
 * a template literal does not, and produced "Donar €5" on the Spanish sheet.
 */
const money = new Intl.NumberFormat(LANG === 'es' ? 'es-ES' : 'en-IE', {
    style: 'currency',
    currency: CURRENCY.toUpperCase(),
    maximumFractionDigits: 0,
});

// ─── The panel bridge ────────────────────────────────────────────

/**
 * The panel's origin, taken from the browser rather than guessed. Falling back to '*' is
 * safe because none of these messages carries anything private — and the panel still
 * checks our origin and the nonce before believing any of them.
 */
const PANEL_ORIGIN = window.location.ancestorOrigins?.[0] ?? '*';

function notifyPanel(type: string, extra: Record<string, unknown> = {}): void {
    if (!NONCE || window.parent === window) return;
    window.parent.postMessage({ type, nonce: NONCE, ...extra }, PANEL_ORIGIN);
}

// ─── Theme ───────────────────────────────────────────────────────

/**
 * The panel hands over the tokens of whatever theme the user picked, so the form is
 * painted in their colours instead of Stripe's defaults. A broken or absent `theme`
 * parameter must never stop the page rendering — then a theme bug becomes a payment bug.
 */
function applyTheme(): void {
    let tokens: unknown;
    try {
        tokens = JSON.parse(params.get('theme') ?? '{}');
    } catch {
        return;
    }
    if (!tokens || typeof tokens !== 'object') return;

    for (const [name, value] of Object.entries(tokens as Record<string, unknown>)) {
        // Only plain colour-ish values. Anything with a bracket or a semicolon is not a
        // token we sent, and has no business in a style attribute.
        if (typeof value !== 'string' || /[;{}()<>]/.test(value)) continue;
        document.documentElement.style.setProperty(`--${name}`, value);
    }
}

applyTheme();

function readToken(token: string, fallback: string): string {
    const value = getComputedStyle(document.documentElement).getPropertyValue(`--${token}`).trim();
    return value || fallback;
}

/**
 * Dresses Stripe's own fields as the extension's.
 *
 * Everything Stripe renders — the card fields, the country dropdown, the error text —
 * lives inside an iframe on Stripe's origin, so no stylesheet of ours can reach it. The
 * Appearance API is the only way in, and `rules` is the part that matters: `variables`
 * alone leaves the inputs with Stripe's own border and radius, which is what made the
 * sheet look like a different application wearing our palette.
 *
 * The values are the ones `rules.css` uses in the extension, so a field here and a field
 * on the rules page are the same control.
 */
function stripeAppearance() {
    const border = readToken('border-color', '#e3e6ea');
    const focus = readToken('action-color', readToken('interactive-color', '#635bff'));
    const ground = readToken('bg-color', '#ffffff');
    const text = readToken('text-color', '#1a1a1a');
    const muted = readToken('muted-color', '#6b7280');

    return {
        theme: 'stripe' as const,
        variables: {
            colorPrimary: readToken('interactive-color', '#635bff'),
            colorBackground: ground,
            colorText: text,
            colorDanger: readToken('error-color', '#df1b41'),
            borderRadius: '7px',
            fontFamily: 'system-ui, sans-serif',
            fontSizeBase: '0.95rem',
        },
        rules: {
            // One hairline, the panel's ground, the extension's radius.
            '.Input, .Block, .CheckboxInput, .CodeInput': {
                border: `1px solid ${border}`,
                boxShadow: 'none',
                backgroundColor: ground,
            },
            // Focus changes the border colour and nothing else — no glow ring, which is
            // what the extension's own inputs do.
            '.Input:focus, .CheckboxInput:focus, .CodeInput:focus': {
                border: `1px solid ${focus}`,
                boxShadow: 'none',
                outline: 'none',
            },
            '.Input::placeholder': { color: muted },
            '.Label': {
                color: muted,
                fontSize: '0.85rem',
                fontWeight: '500',
            },
            '.Tab, .TabLabel': {
                border: `1px solid ${border}`,
                boxShadow: 'none',
                backgroundColor: ground,
            },
            '.Tab:hover': { border: `1px solid ${focus}` },
            '.Tab--selected, .Tab--selected:focus': {
                border: `1px solid ${focus}`,
                boxShadow: 'none',
                color: focus,
            },
            // The country dropdown. Same dress as the extension's own selects: the panel
            // ground, one hairline, the small radius, no inner shadow.
            '.Dropdown': {
                border: `1px solid ${border}`,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                backgroundColor: readToken('bg-panel-color', ground),
            },
            '.DropdownItem': { color: text },
            '.DropdownItem--highlight': {
                backgroundColor: `color-mix(in srgb, ${focus} 15%, transparent)`,
                color: focus,
            },
            '.Error': { fontSize: '0.85rem' },
        },
    };
}

// ─── Elements ────────────────────────────────────────────────────

const $ = <T extends HTMLElement>(id: string): T => document.getElementById(id) as T;

let amount: number = defaultDonationAmount;
let elements: any = null;
let submitting = false;

function syncChips(): void {
    for (const chip of document.querySelectorAll<HTMLButtonElement>('.chip')) {
        const selected = Number(chip.dataset.amount) === amount;
        chip.classList.toggle('is-selected', selected);
        chip.setAttribute('aria-checked', String(selected));
    }
}

function updateSubmitLabel(): void {
    $('submit-label').textContent = `${strings.donateNow} ${money.format(amount)}`;
}

function setAmount(value: number, { fromChip = false } = {}): void {
    amount = value;
    if (fromChip) $<HTMLInputElement>('custom-amount').value = '';
    syncChips();
    // Stripe re-evaluates which wallets are eligible for the new total, which is why
    // this is not just a label change.
    elements?.update({ amount: amount * 100 });
    updateSubmitLabel();
}

function setStatus(message: string, kind: 'error' | 'success' = 'error'): void {
    const status = $('status');
    status.textContent = message;
    status.className = `status ${message ? kind : ''}`;
}

function setBusy(busy: boolean): void {
    submitting = busy;
    const button = $<HTMLButtonElement>('submit');
    button.disabled = busy;
    button.classList.toggle('is-busy', busy);
}

async function createIntent(): Promise<string> {
    const response = await fetch('/api/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency: CURRENCY, nonce: NONCE }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || strings.failed);
    return data.clientSecret;
}

const stripe = Stripe(PUBLISHABLE_KEY, { locale: LANG });

/**
 * Finishes a payment. Shared by both Elements.
 *
 * `redirect: 'if_required'` keeps card and Google Pay inside this frame. PayPal is the
 * exception the whole architecture bends around: it cannot authenticate in a
 * third-party frame, so Stripe hands back a redirect and the browser leaves.
 */
async function finish(): Promise<void> {
    if (submitting) return;
    setBusy(true);
    setStatus('');

    try {
        const { error: submitError } = await elements.submit();
        if (submitError) throw new Error(submitError.message);

        const clientSecret = await createIntent();
        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: { return_url: window.location.href },
            redirect: 'if_required',
        });
        if (error) throw new Error(error.message);

        notifyPanel('pay:success', { amount });
        setStatus('', 'success');
    } catch (error) {
        const message = (error as Error).message || strings.failed;
        setStatus(message, 'error');
        notifyPanel('pay:error', { message });
    } finally {
        setBusy(false);
    }
}

function mount(): void {
    elements = stripe.elements({
        mode: 'payment',
        amount: amount * 100,
        currency: CURRENCY,
        appearance: stripeAppearance(),
    });

    const wanted = WALLET_FOR_METHOD[METHOD];

    const express = elements.create('expressCheckout', {
        buttonType: { googlePay: 'donate', applePay: 'donate', paypal: 'pay' },
        paymentMethodOrder: wanted ? [wanted] : [],
    });

    express.on(
        'ready',
        ({ availablePaymentMethods }: { availablePaymentMethods?: Record<string, boolean> }) => {
            const hasWallets = Boolean(availablePaymentMethods);
            $('express').hidden = !hasWallets;
            $('divider').hidden = !hasWallets;

            // The tile the user pressed named a wallet. If that one is not available, say so
            // rather than leaving them hunting for a button that will never appear — the
            // Apple Pay tile on a Linux machine, typically.
            $('wallet-note').hidden = !(wanted && !availablePaymentMethods?.[wanted]);
        },
    );

    express.on('confirm', finish);
    express.mount('#express');

    const payment = elements.create('payment', { layout: 'tabs' });
    payment.on('ready', () => {
        $<HTMLButtonElement>('submit').disabled = false;
        notifyPanel('pay:ready');
    });
    payment.mount('#payment-element');

    $('payment-form').addEventListener('submit', (event) => {
        event.preventDefault();
        void finish();
    });
}

// ─── Boot ────────────────────────────────────────────────────────

for (const chip of document.querySelectorAll<HTMLButtonElement>('.chip')) {
    const value = Number(chip.dataset.amount);
    chip.textContent = money.format(value);
    chip.addEventListener('click', () => setAmount(value, { fromChip: true }));
}

$('custom-amount').addEventListener('input', (event) => {
    const raw = Number((event.target as HTMLInputElement).value);
    const [min, max] = [donationAmounts[0]!, 500];
    if (!Number.isFinite(raw) || raw < min || raw > max) {
        setStatus(strings.badAmount);
        $<HTMLButtonElement>('submit').disabled = true;
        return;
    }
    setStatus('');
    $<HTMLButtonElement>('submit').disabled = false;
    setAmount(Math.floor(raw));
});

syncChips();
updateSubmitLabel();
mount();
