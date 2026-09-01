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
import { CARD_FORM_METHODS } from '@/lib/donation';

/**
 * The publishable key of the account that receives the donations.
 *
 * WHY THIS IS AN ENVIRONMENT VARIABLE AND NOT A SECRET. A publishable key is meant to be
 * read by anyone: it identifies the account and can do nothing on its own, and it ends up
 * in the client bundle whatever we do — `.env` cannot hide it, and nothing here is trying
 * to. What the variable buys is the other thing `.env` is for: test and live are the same
 * build with a different value, so going live stops being a code edit that someone has to
 * remember, review and deploy.
 *
 * Astro only exposes variables prefixed `PUBLIC_` to the browser, which is the check that
 * keeps a secret from being reached for here by mistake: `STRIPE_SECRET_KEY` is simply not
 * visible from this file.
 *
 * IT MUST BELONG TO THE SAME ACCOUNT AS THE SECRET KEY. The account is the segment after
 * `pk_test_`/`sk_test_`, and this pair used to disagree: the page identified one account
 * while `/api/intent` minted the PaymentIntent on another, so every `client_secret` was
 * for an intent this key had never heard of, and confirming could not work. The test key
 * below is the fallback so a fresh clone runs with no configuration; production sets the
 * variable.
 */
const PUBLISHABLE_KEY =
    import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    'pk_test_51U86TNRxpp4Vcyc0qjfgquKeor0aCVQYGTiOlHlSZOBNMvxpxqw8YN0b3nf7QdtuofTGdhoAeGink2NeJ4dzjMYY00YgqqL9yl';

/**
 * Which wallet the clicked tile asked for. Only used to rank the buttons.
 *
 * `card` is here deliberately. The Stripe tile sends `method=card`, which used to map to
 * nothing, so the order was left empty and Stripe led with whatever it preferred — and
 * from the moment PayPal was switched on in the Dashboard, that was PayPal. Pressing the
 * Stripe tile and being offered PayPal is the tile lying about where it goes. Link is
 * Stripe's own wallet, so that is what the Stripe tile ranks first.
 */
const WALLET_FOR_METHOD: Record<string, string> = {
    card: 'link',
    paypal: 'paypal',
    google_pay: 'googlePay',
    apple_pay: 'applePay',
};

interface PayStrings {
    donateNow: string;
    failed: string;
    badAmount: string;
    opensOutside: string;
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

/**
 * A theme token, as a value Stripe can actually use.
 *
 * The guard matters. Stripe's Appearance API is handed these as plain strings and applies
 * them inside its own iframes, where our custom properties do not exist — so a token whose
 * value is still an expression, `color-mix(in srgb, var(--text-color) 60%, transparent)`,
 * arrives as nonsense and the rule is dropped. That is what left the labels and
 * placeholders in Stripe's default grey while the rest of the sheet wore the panel's
 * colours: `--muted-color` is derived in `pay.css` and never resolves to a literal here.
 *
 * `getComputedStyle` does not resolve custom properties for us, so anything still holding
 * a `var()` or a colour function is treated as absent and the caller's fallback is used.
 */
function readToken(token: string, fallback: string): string {
    const value = getComputedStyle(document.documentElement).getPropertyValue(`--${token}`).trim();
    if (!value || /var\(|color-mix\(/.test(value)) return fallback;
    return value;
}

/**
 * Blends two hex colours. Used for the muted ink, which has to be a literal for Stripe
 * and therefore cannot be the `color-mix` the stylesheet uses for the same purpose.
 */
function blend(from: string, to: string, ratio: number): string {
    const parse = (hex: string): [number, number, number] | null => {
        const clean = hex.trim().replace('#', '');
        const full = clean.length === 3 ? [...clean].map((c) => c + c).join('') : clean;
        if (!/^[0-9a-f]{6}$/i.test(full)) return null;
        return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)) as [number, number, number];
    };
    const a = parse(from);
    const b = parse(to);
    if (!a || !b) return from;
    const mix = a.map((channel, i) => Math.round(channel + (b[i]! - channel) * ratio));
    return `#${mix.map((c) => c.toString(16).padStart(2, '0')).join('')}`;
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
    /*
     * The panel's own dim ink when it sends one, otherwise the text colour faded towards
     * the ground — which is what `pay.css` does for the same job, computed here so Stripe
     * receives a literal rather than an expression it cannot evaluate.
     */
    const muted = readToken('text-dim', blend(text, ground, 0.4));

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
            /*
             * NO RULE HERE HIDES THE MANDATE, AND NONE CAN.
             *
             * `.Block { display: none }` sat here and did nothing: `display` is not one of
             * the properties the Appearance API accepts, so Stripe dropped the rule
             * without a word. `.FadeWrapper` is not one of its selectors either. Both
             * looked like they worked and neither did, which is why the block kept coming
             * back after each attempt.
             *
             * `terms` above is the only supported way to switch these off, and it is
             * already set to `never` for every key it takes. Whatever is still on screen
             * is either Link's own legal agreement — which Stripe states cannot be
             * removed — or a method with no `terms` key of its own.
             */
        },
    };
}

// ─── Elements ────────────────────────────────────────────────────

const $ = <T extends HTMLElement>(id: string): T => document.getElementById(id) as T;

let amount: number = defaultDonationAmount;
let submitting = false;

/**
 * TWO SETS OF ELEMENTS, AND IT HAS TO BE TWO.
 *
 * The sheet is a short list of ways to pay with the available wallets as buttons above
 * it. Keeping that list short needs `paymentMethodTypes`, and that option belongs to the
 * `elements()` instance rather than to the element — so setting it on a shared instance
 * would take PayPal, Klarna and Amazon Pay out of the wallet buttons too.
 *
 * I collapsed these into one instance once, chasing Stripe's "reuse an instance to save
 * time" advice, and it put the method list straight back: Card, Revolut Pay, Bancontact,
 * MB WAY, Satispay, EPS, in tabs. The advice is about a page that wants the same set of
 * methods in both places. This one does not.
 *
 * The cost is one extra element frame, and it is paid where it does not show: the card
 * form mounts first and reports ready, and the wallets follow.
 */
let walletElements: any = null;
let cardElements: any = null;

/**
 * Methods whose provider refuses to authenticate inside someone else's frame, so Stripe
 * has to send the browser away to finish them.
 *
 * PayPal is the one that matters — it has always been the exception this architecture
 * bends around — and Klarna, Amazon Pay and Revolut Pay behave the same way. Confirming one of these
 * inside the panel navigates the panel's iframe to a page that then refuses to be framed,
 * and the reader gets a blank rectangle with no idea what happened.
 *
 * Card, Link, Google Pay and Apple Pay are NOT here: they finish in place. The wallets
 * use the browser's own payment sheet, which is drawn over the panel rather than in it,
 * so they need no window of their own either.
 */
const LEAVES_THE_FRAME = new Set(['paypal', 'klarna', 'amazon_pay', 'revolut_pay']);

/** Whether this page is being framed, i.e. it is the panel's sheet and not a tab. */
const FRAMED = window.parent !== window;

/**
 * Which tab of the card form is selected. Watched, because the form can collect more than
 * one method and only the element knows which is showing.
 *
 * Losing this is what put "Failed to redirect to pm-redirects.stripe.com" in front of
 * anyone choosing Revolut Pay: the submit handler passed a hardcoded `'card'`, so the
 * check below never recognised a method that has to leave the frame, `confirmPayment` ran,
 * and Stripe tried to navigate a sandboxed iframe to Revolut's authorisation page.
 */
let selectedType: string = 'card';

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
    // this is not just a label change. Both sets, always: a wallet left on the old amount
    // would charge the old amount.
    // Both, always: a wallet left on the old amount would charge the old amount.
    walletElements?.update({ amount: amount * 100 });
    cardElements?.update({ amount: amount * 100 });
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

/**
 * `source` is not decoration. Stripe refuses to confirm details collected by an Element
 * configured with `paymentMethodTypes` against an intent created with automatic payment
 * methods, so the endpoint has to build a different intent for each of this sheet's two
 * elements and this is how it knows which.
 */
async function createIntent(source: 'card-form' | 'wallet'): Promise<string> {
    const response = await fetch('/api/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency: CURRENCY, nonce: NONCE, source }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || strings.failed);
    return data.clientSecret;
}

const stripe = Stripe(PUBLISHABLE_KEY, { locale: LANG });

/**
 * Finishes a payment.
 *
 * `source` is the element set the reader actually used, and it has to be that one:
 * confirming with the other set submits fields nobody filled in. `methodType` is what
 * they picked — `'card'` from the form, or the wallet's own name from the buttons.
 *
 * `redirect: 'if_required'` keeps card and the browser-sheet wallets inside this frame.
 */
async function finish(source: any, methodType: string, kind: 'card-form' | 'wallet'): Promise<void> {
    if (submitting) return;

    /*
     * Nothing can be confirmed here for these, so do not try. The panel is asked to open
     * this same sheet as an ordinary tab, carrying the amount and the method, and there
     * the redirect is just a redirect. `pay:external` is the only message that asks the
     * panel to do something rather than telling it what happened.
     */
    if (FRAMED && LEAVES_THE_FRAME.has(methodType)) {
        const away = new URL(window.location.href);
        away.searchParams.set('amount', String(amount));
        away.searchParams.set('method', methodType);
        away.searchParams.delete('nonce');
        away.searchParams.delete('theme');
        notifyPanel('pay:external', { url: away.toString(), method: methodType });
        setStatus(strings.opensOutside, 'success');
        return;
    }

    setBusy(true);
    setStatus('');

    try {
        const { error: submitError } = await source.submit();
        if (submitError) throw new Error(submitError.message);

        const clientSecret = await createIntent(kind);
        const { error } = await stripe.confirmPayment({
            elements: source,
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
    const appearance = stripeAppearance();
    const base = { mode: 'payment' as const, amount: amount * 100, currency: CURRENCY, appearance };

    // ── The card form first ──
    /*
     * MOUNTED BEFORE THE WALLETS, ON PURPOSE. The Express Checkout Element is the slow
     * half: it has to ask the browser and the account which wallets this device can
     * actually use before it can paint anything. The card form has nothing to ask. Doing
     * it first is what takes the sheet off "Loading" sooner — the wallets then appear
     * above it a moment later, which reads as the page filling in rather than the page
     * being stuck.
     *
     * `paymentMethodTypes` is what keeps the list short. Left to itself the account
     * offers Revolut Pay, Bancontact, MB WAY, Satispay and EPS as well, which in a 400px
     * panel is a scrolling menu in front of a donation. Two entries is the whole list.
     *
     * It is an option of the instance, not of the element, which is why this is its own
     * instance: putting it on the shared one would strip PayPal out of the wallet buttons
     * as well.
     */
    cardElements = stripe.elements({ ...base, paymentMethodTypes: [...CARD_FORM_METHODS] });

    /*
     * Tabs, because two of them fit across the panel on one row.
     *
     * A tab strip is one horizontal row that Stripe will not wrap, which is why the long
     * list had to be an accordion: six entries do not fit and the last ones are simply cut
     * off. Two do fit, and two tabs read faster than two stacked rows with radios beside
     * them. If a third method is ever added here, check it still fits before leaving this
     * as tabs.
     */
    const payment = cardElements.create('payment', {
        layout: { type: 'tabs' },
        paymentMethodOrder: [...CARD_FORM_METHODS],
        /*
         * The wallets are already buttons above the divider, so the card form must not
         * offer them again — and it does by default, which is how Google Pay ended up
         * sitting in the tab strip where Revolut Pay should be, pushing it out of view.
         *
         * Stripe removes the wallets from the Payment Element by itself when both elements
         * share one `elements()` instance. These deliberately do not share one, so this
         * page has to say it.
         */
        wallets: { applePay: 'never', googlePay: 'never' },
        /*
         * The mandate block, off.
         *
         * `terms` is Stripe's own switch for this — the alternative, an appearance rule
         * hiding `.Block`, fights the element's layout and breaks whenever they reshape
         * it. Stripe shows these "only when necessary", so switching them off is a
         * decision about your own disclosures rather than a cosmetic one; Link's own legal
         * agreement is not covered by this option and cannot be removed.
         */
        terms: {
            card: 'never',
            applePay: 'never',
            googlePay: 'never',
            paypal: 'never',
            sepaDebit: 'never',
            bancontact: 'never',
            ideal: 'never',
            sofort: 'never',
            cashapp: 'never',
            auBecsDebit: 'never',
            usBankAccount: 'never',
        },
    });
    payment.on('change', (event: { value?: { type?: string } }) => {
        selectedType = event?.value?.type ?? selectedType;
        setStatus('');
    });
    payment.on('ready', () => {
        $('payment-loading').hidden = true;
        $<HTMLButtonElement>('submit').disabled = false;
        notifyPanel('pay:ready');
    });
    /*
     * If Stripe never reports ready — blocked script, dead network, a frame that hangs —
     * the sheet must say so rather than spin for ever. Twenty seconds is longer than the
     * worst cold load measured in the panel and shorter than anyone's patience.
     */
    const readyTimeout = window.setTimeout(() => {
        if (!$('payment-loading').hidden) {
            $('payment-loading').hidden = true;
            setStatus(strings.failed);
            notifyPanel('pay:error', { message: strings.failed });
        }
    }, 20_000);
    payment.on('ready', () => window.clearTimeout(readyTimeout));
    payment.on('loaderror', (event: { error?: { message?: string } }) => {
        window.clearTimeout(readyTimeout);
        $('payment-loading').hidden = true;
        setStatus(event?.error?.message || strings.failed);
    });
    payment.mount('#payment-element');

    $('payment-form').addEventListener('submit', (event) => {
        event.preventDefault();
        void finish(cardElements, selectedType, 'card-form');
    });

    // ── Then the wallets, above the divider ──
    walletElements = stripe.elements(base);

    const wanted = WALLET_FOR_METHOD[METHOD];
    const express = walletElements.create('expressCheckout', {
        buttonType: { googlePay: 'donate', applePay: 'donate', paypal: 'pay' },
        paymentMethodOrder: wanted ? [wanted] : [],
        /*
         * `always` ONLY WHERE THE PAYMENT REQUEST API EXISTS, which is not inside the
         * panel.
         *
         * Stripe's browser table says Apple Pay works on desktop Chrome, Edge, Firefox
         * and Opera "only when `paymentMethods.applePay` is set to `always`" — the default
         * offers it solely where the device already has it configured. So `always` is
         * right in a tab.
         *
         * In the panel it is worse than useless. Chrome refuses the Payment Request API
         * to a frame whose ancestor is a `chrome-extension://` page and says so:
         *
         *     Only localhost, file://, and cryptographic scheme origins allowed.
         *     No UI will be shown. CanMakePayment and hasEnrolledInstrument will
         *     always return false. Show will be rejected with NotSupportedError.
         *
         * `always` tells Stripe to offer a wallet anyway, so it goes on waiting for an
         * answer the browser has already refused to give — that is the hang.
         *
         * DO NOT ANSWER THAT WARNING WITH `never`. I tried, to silence the console line,
         * and it took Google Pay and Apple Pay out of the panel — where they had been
         * working. The warning is Chrome describing one probe it declined; it is not a
         * statement that the wallets are unavailable, and the buttons prove it. Leaving
         * the option off lets Stripe decide from what it can actually reach, which is the
         * only party here with the full picture.
         */
        ...(FRAMED ? {} : { paymentMethods: { applePay: 'always', googlePay: 'always' } }),
    });

    /*
     * The two events hand the same answer under different names: `ready` calls it
     * `availablePaymentMethods`, `availablepaymentmethodschange` calls it
     * `paymentMethods`. Reading only one of them hid the buttons even when a wallet was
     * available, because the handler received `undefined` and concluded there was nothing
     * to show.
     */
    const showWallets = (event: {
        paymentMethods?: Record<string, boolean>;
        availablePaymentMethods?: Record<string, boolean>;
    }) => {
        const available = event?.paymentMethods ?? event?.availablePaymentMethods;
        const any = Boolean(available && Object.values(available).some(Boolean));
        $('express').hidden = !any;
        $('divider').hidden = !any;

        // The tile the reader pressed named a wallet. If that one is not available, say so
        // rather than leaving them hunting for a button that will never appear.
        $('wallet-note').hidden = !(wanted && !available?.[wanted]);
    };
    express.on('availablepaymentmethodschange', showWallets);
    express.on('ready', showWallets);

    /*
     * The wallet reports which of itself was pressed, and that is the only way to know: a
     * wallet button is not a form field and there is nothing to read afterwards.
     */
    express.on('confirm', (event: { expressPaymentType?: string }) =>
        finish(walletElements, event?.expressPaymentType ?? 'wallet', 'wallet'),
    );
    express.mount('#express');
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
