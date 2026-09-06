/**
 * Wires Stripe into the contribution sheet.
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

import { contributionAmounts, defaultContributionAmount, contributionCurrency } from '@/data/site';
import { CARD_FORM_METHODS, clampAmount } from '@/lib/contribution';

/**
 * The publishable key of the account that receives the contributions.
 *
 * NO KEY IS WRITTEN HERE, AND NONE MAY BE. There used to be a `pk_test_` in this file as
 * a fallback so a fresh clone ran with no configuration, and that convenience had a
 * failure mode worth more than it: with the variable missing or misspelt in production
 * the site did not break, it quietly took contributions in TEST MODE. Nobody is charged,
 * nothing arrives, and every screen — the sheet, the wallets, the thank-you — looks
 * exactly as it does when it works.
 *
 * A publishable key is not a secret; it is meant to be read by anyone and it ends up in
 * the client bundle whatever we do. This is not about hiding it. It is about there being
 * ONE place that decides which account and which mode this page charges against, and that
 * place being the environment, so test and live are the same build with a different value
 * and neither can be reached by accident.
 *
 * Set `PUBLIC_STRIPE_PUBLISHABLE_KEY` in `.env` for local work and in the host's
 * environment for a deployment. Astro only exposes `PUBLIC_`-prefixed variables to the
 * browser, which is the check that keeps `STRIPE_SECRET_KEY` from being reached for here
 * by mistake.
 *
 * IT MUST BELONG TO THE SAME ACCOUNT AS THE SECRET KEY. The account is the segment after
 * `pk_test_`/`sk_test_`, and this pair has disagreed before: the page identified one
 * account while `/api/intent` minted the PaymentIntent on another, so every
 * `client_secret` was for an intent this key had never heard of and confirming could not
 * work.
 */
const PUBLISHABLE_KEY = import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY;

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

/**
 * The card form's tabs, with the one that was asked for first.
 *
 * The Payment Element opens on the first entry of `paymentMethodOrder`, so this is the
 * only way to say which tab the sheet should already be on.
 *
 * IT IS WHAT MAKES THE HAND-OFF WINDOW WORK. Choosing Revolut Pay in the panel cannot be
 * finished in the frame, so `finish` asks the panel to reopen this same page in a window
 * with `method=revolut_pay`. That window used to be built from a fixed
 * `['card', 'revolut_pay']`, so it opened on Tarjeta — the reader pressed Revolut Pay,
 * got a second copy of the card form, and reasonably read that as "Revolut Pay does not
 * open". The window now opens on the tab they chose, and one press of the button finishes it.
 *
 * A method the card form does not collect (a wallet, or nothing at all) leaves the order
 * as it is, which is the list's own order.
 */
function cardFormOrder(): string[] {
    const asked = (CARD_FORM_METHODS as readonly string[]).includes(METHOD) ? METHOD : null;
    if (!asked) return [...CARD_FORM_METHODS];
    return [asked, ...CARD_FORM_METHODS.filter((type) => type !== asked)];
}

/**
 * The types the card form's `elements()` instance is created with, which is also the list
 * `/api/intent` has to build the PaymentIntent from.
 *
 * A hand-off window gets exactly one, so Stripe draws the form on its own with no tab
 * strip above it — there is nothing to choose between when the choice was already made in
 * the panel. Everywhere else it is the whole list, and the tabs come back.
 */
function cardFormTypes(): string[] {
    return FOCUSED ? [METHOD] : [...CARD_FORM_METHODS];
}

interface PayStrings {
    contributeNow: string;
    failed: string;
    badAmount: string;
    opensOutside: string;
    redirecting: string;
    thanks: string;
    notConfigured: string;
}

declare const Stripe: (key: string, options?: Record<string, unknown>) => any;

const params = new URLSearchParams(window.location.search);
const NONCE = params.get('nonce');
const METHOD = params.get('method') ?? 'card';
const CURRENCY = (params.get('currency') ?? contributionCurrency).toLowerCase();

/**
 * Whether this page is the window the panel opened, rather than the sheet itself or the
 * tab the about page opens.
 *
 * The panel adds it in `handOff`, and it is what turns the full sheet into the single
 * method the reader already chose: the amount is settled, the wallets were on offer in
 * the panel, and a second copy of all of it in a 480px window is a second decision to
 * make about something already decided.
 */
const HANDOFF = params.get('handoff') === '1';

/**
 * A hand-off window that opened on one of the card form's own methods, which is the case
 * that gets the stripped-down sheet. A wallet hand-off — PayPal, Klarna, Amazon Pay from
 * the express row — still needs the full page, because what finishes it is the wallet
 * button and not this form.
 */
const FOCUSED = HANDOFF && (CARD_FORM_METHODS as readonly string[]).includes(METHOD);

/**
 * Methods that finish by leaving this page for the provider's own.
 *
 * For these the window is not a form to fill in, it is a doorway: the reader pressed
 * Revolut Pay in the panel and expects Revolut, so the window confirms by itself and the
 * redirect happens without a second press of a button that says the same thing again.
 */
const REDIRECTS_AWAY = new Set(['revolut_pay']);

/**
 * [AI INSTRUCTION]
 * HOW A HAND-OFF WINDOW TELLS THE PANEL IT IS DONE.
 *
 * The window is opened by `chrome.windows.create`, which deliberately leaves it with no
 * `window.opener`, so it cannot postMessage the sheet the way the sheet postMessages the
 * panel. And it must not be given the panel's nonce: that is the token the panel trusts.
 *
 * A `BroadcastChannel` solves it without either. It is scoped to the origin, so only this
 * site's own documents can hear it — the extension cannot, and neither can any other
 * site — and it survives what an opener does not: the window navigates away to Revolut
 * and back, and COOP puts the returning document in a fresh browsing context group with
 * `opener` severed. The channel does not care.
 *
 * The framed sheet listens, and relays what it hears to the panel over the bridge it
 * already has. So the panel's trust boundary is unchanged: it still only believes
 * messages that come from its own iframe carrying its own nonce.
 */
const CHANNEL_PREFIX = 'iw-pay-';

/** Present only in a hand-off window: the channel the sheet that opened it is listening on. */
const CHANNEL = params.get('channel');
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

/**
 * Says what happened, to whoever can hear it.
 *
 * In the panel's sheet that is the panel, over postMessage. In a hand-off window it is
 * the sheet that opened it, over the BroadcastChannel, and the sheet relays it on. One
 * call site either way, so a new outcome cannot be reported to one and not the other.
 */
function report(type: string, extra: Record<string, unknown> = {}): void {
    notifyPanel(type, extra);
    if (!CHANNEL) return;
    try {
        const channel = new BroadcastChannel(CHANNEL_PREFIX + CHANNEL);
        channel.postMessage({ type, ...extra });
        channel.close();
    } catch {
        // No BroadcastChannel: the window stays open showing its own result, which is
        // the same place the reader would have been left before any of this existed.
    }
}

/**
 * Listens for the hand-off window this sheet is about to open, and relays it to the panel.
 *
 * Held so a second hand-off replaces the first rather than leaving an orphan listening
 * for a window nobody is looking at any more.
 */
let handoffChannel: BroadcastChannel | null = null;

function listenForHandoff(token: string): void {
    try {
        handoffChannel?.close();
        handoffChannel = new BroadcastChannel(CHANNEL_PREFIX + token);
        handoffChannel.onmessage = (event: MessageEvent) => {
            const data = event.data;
            if (!data || typeof data !== 'object') return;
            if (data.type === 'pay:success') {
                notifyPanel('pay:success', { amount: Number(data.amount) || amount });
            } else if (data.type === 'pay:error') {
                notifyPanel('pay:error', { message: String(data.message ?? '').slice(0, 300) });
            }
        };
    } catch {
        // Without it the payment still completes; the panel just is not told.
    }
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

/**
 * The amount, from the query string when there is one.
 *
 * `buildPaymentUrl` has always put it there and this file never read it, so a hand-off
 * window opened after choosing 10 € charged the default instead. `clampAmount` is the
 * same function the endpoint validates with, so the button cannot show a number the
 * server would refuse.
 */
let amount: number = clampAmount(params.get('amount')) ?? defaultContributionAmount;
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
 * Methods that a FRAMED CARD FORM cannot finish, because confirming one navigates the
 * frame to a page that then refuses to be framed and the reader gets a blank rectangle.
 *
 * IT IS ABOUT THE CARD FORM, NOT ABOUT THE METHOD. The same names pressed as buttons in
 * the express row behave completely differently: there PayPal, Klarna and Amazon Pay open
 * their provider's own window and the customer PRE-AUTHORISES the amount there, so by the
 * time `confirm` fires there is nothing left to redirect to and `confirmPayment` settles
 * in place. Stripe says as much for the Express Checkout Element — "for Amazon Pay,
 * Klarna, and PayPal, the amount you confirm in the PaymentIntent must match the amount
 * the customer pre-authorized" — and `redirect: 'if_required'` "only redirects customers
 * that check out with redirect-based payment methods", which a pre-authorised wallet is
 * no longer.
 *
 * Treating them as frame-leavers is what broke PayPal: the reader authorised in PayPal's
 * own window, and the panel answered by throwing that authorisation away and opening a
 * fresh sheet asking them to do it again — which never closed and never reported
 * anything, because nobody ever finished it.
 *
 * So this set is consulted for `kind === 'card-form'` only. See the guard in `finish`.
 * The panel has no card form left, so today it never fires there at all; it stays for the
 * unframed sheet and for anything that frames a card form again.
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
 *
 * It starts on whatever tab the element will open on rather than on a fixed `'card'`, so
 * a submit that happens before the first `change` event still names the right method.
 */
let selectedType: string = cardFormOrder()[0]!;

function syncChips(): void {
    for (const chip of document.querySelectorAll<HTMLButtonElement>('.chip')) {
        const selected = Number(chip.dataset.amount) === amount;
        chip.classList.toggle('is-selected', selected);
        chip.setAttribute('aria-checked', String(selected));
    }
}

function updateSubmitLabel(): void {
    $('submit-label').textContent = `${strings.contributeNow} ${money.format(amount)}`;
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
 * Turns the way out of this sheet on or off, whichever of the two it is.
 *
 * The amount validator used to reach for `#submit` by name. In the panel that button is
 * not on screen, so an amount of 900 left the hand-off buttons live and the reader could
 * carry a rejected amount into the window, where the endpoint refuses it and the error
 * arrives a screen too late.
 */
function setPayEnabled(enabled: boolean): void {
    $<HTMLButtonElement>('submit').disabled = !enabled;
    for (const option of document.querySelectorAll<HTMLButtonElement>('.handoff-option')) {
        option.disabled = !enabled;
    }
}

/**
 * Reopens this same sheet outside the frame, on the method the reader chose.
 *
 * The window is the panel's job — `pay:external` is the only message that asks it to act
 * rather than telling it what happened — and the panel checks the address against its own
 * `PAYMENT_ORIGIN` before opening anything.
 *
 * The nonce and the theme are stripped: there is no bridge to authenticate to out there,
 * and the window paints in the site's own colours.
 */
function handOff(method: string): void {
    const away = new URL(window.location.href);
    away.searchParams.set('amount', String(amount));
    away.searchParams.set('method', method);
    // What tells the window it is a hand-off and not the whole sheet. See `HANDOFF`.
    away.searchParams.set('handoff', '1');
    /*
     * The way back. Minted here rather than reusing the panel's nonce: this one only has
     * to be unguessable enough to keep two sheets in two windows from hearing each other,
     * and the nonce is a different secret with a different job.
     */
    const token = crypto.randomUUID();
    away.searchParams.set('channel', token);
    listenForHandoff(token);
    away.searchParams.delete('nonce');
    away.searchParams.delete('theme');
    notifyPanel('pay:external', { url: away.toString(), method });
    setStatus(strings.opensOutside, 'success');
}

/**
 * `source` is not decoration. Stripe refuses to confirm details collected by an Element
 * configured with `paymentMethodTypes` against an intent created with automatic payment
 * methods, so the endpoint has to build a different intent for each of this sheet's two
 * elements and this is how it knows which.
 *
 * `methods` is the second half of the same requirement. The card form does not always
 * carry both types any more — a hand-off window restricts itself to the one it opened
 * on — and Stripe rejects a confirmation whose intent names a type the Element was not
 * configured with. The endpoint filters the list down to `CARD_FORM_METHODS`, so this
 * can narrow what may be charged and never widen it.
 */
async function createIntent(source: 'card-form' | 'wallet'): Promise<string> {
    const response = await fetch('/api/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            amount,
            currency: CURRENCY,
            nonce: NONCE,
            source,
            methods: source === 'card-form' ? cardFormTypes() : undefined,
        }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || strings.failed);
    return data.clientSecret;
}

/**
 * No key, no sheet — and it says so.
 *
 * This is the other half of removing the committed fallback. Without a key the page must
 * fail where a person can see it, not fall through to a mode where everything looks right
 * and no money moves. Thrown at module scope, so nothing below runs and no Element is
 * ever mounted against an account we cannot name.
 */
if (!PUBLISHABLE_KEY) {
    $('payment-loading').hidden = true;
    $('payment-form').hidden = true;
    $('handoff').hidden = true;
    $('handoff-note').hidden = true;
    setStatus(strings.notConfigured);
    report('pay:error', { message: strings.notConfigured });
    throw new Error('PUBLIC_STRIPE_PUBLISHABLE_KEY is not set');
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
async function finish(
    source: any,
    methodType: string,
    kind: 'card-form' | 'wallet',
    /** What to say while it runs. Empty clears the line, which is the usual case. */
    announce = '',
): Promise<void> {
    if (submitting) return;

    /*
     * A framed CARD FORM cannot redirect, so it hands off instead. A wallet never does:
     * it was pre-authorised in the provider's own window and confirming it here is the
     * last step, not the first. See `LEAVES_THE_FRAME`.
     */
    if (FRAMED && kind === 'card-form' && LEAVES_THE_FRAME.has(methodType)) {
        handOff(methodType);
        return;
    }

    setBusy(true);
    setStatus(announce, 'success');

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

        report('pay:success', { amount });
        setStatus(strings.thanks, 'success');
        askToClose();
    } catch (error) {
        const message = (error as Error).message || strings.failed;
        setStatus(message, 'error');
        report('pay:error', { message });
    } finally {
        setBusy(false);
    }
}

/**
 * [AI INSTRUCTION]
 * THE PANEL DOES NOT DRAW CARD FIELDS. DO NOT PUT THEM BACK.
 *
 * Chrome decides whether a payment form is in a secure context from the URL of the
 * TOP-LEVEL document, not from the frame the fields are in:
 *
 *     bool ChromeAutofillClient::IsContextSecure() const {
 *       content::NavigationEntry* entry =
 *           web_contents()->GetController().GetVisibleEntry();
 *       return entry && entry->GetURL().SchemeIsCryptographic() && …;
 *     }
 *
 * The panel's top-level document is `chrome-extension://<id>/…/listGroup.html`, and
 * `chrome-extension:` is not a cryptographic scheme. So `CreditCardSuggestionGenerator`
 * replaces every suggestion with `IDS_AUTOFILL_WARNING_INSECURE_CONNECTION` — "automatic
 * payment methods filling is disabled because this form does not use a secure
 * connection" — for anyone who has a card saved in Chrome. Measured, not assumed: with
 * this page framed in the panel `Autofill.QueriedCreditCardFormIsSecure` recorded 2 of 2
 * samples in bucket 0; the same page in an ordinary https tab recorded 3 of 3 in bucket 1.
 *
 * NOTHING THIS PAGE CAN SEND CHANGES THAT VERDICT. It is already HTTPS with a valid
 * certificate, a strict CSP and `frame-ancestors` naming the extension. The scheme being
 * read is the panel's, not ours.
 *
 * So the framed sheet offers the amount, the wallets that finish in place, and a button
 * per card-form method that reopens this page in a window. There the top-level document
 * is https, the verdict flips, and Chrome fills a saved card as it would anywhere else.
 * `cardFormOrder` makes that window open on the method that was pressed.
 */
function mountHandoff(): void {
    $('payment-form').hidden = true;
    $('handoff').hidden = false;
    $('handoff-note').hidden = false;

    for (const option of document.querySelectorAll<HTMLButtonElement>('.handoff-option')) {
        option.addEventListener('click', () => handOff(option.dataset.method!));
    }
}

/**
 * Asks for this window to go away, now that it has nothing left to show.
 *
 * `window.close()` only works on a window a script opened, and this one was opened by
 * `chrome.windows.create`, so the call is refused here and the panel does the real
 * closing when the success reaches it. It is still worth making: the same page opened as
 * an ordinary popup — from the about page, or by a future caller — closes itself.
 */
function askToClose(): void {
    if (!HANDOFF) return;
    try {
        window.close();
    } catch {
        // Refused, as expected in a window the extension opened. The panel closes it.
    }
}

/**
 * Finishes a payment that came back from the provider's own page.
 *
 * Stripe appends `payment_intent_client_secret` to the `return_url`, and until now this
 * page ignored it: after authorising on Revolut the window came back, mounted the form
 * again, and said nothing — which is why the panel never showed a thank-you for Revolut
 * Pay. The intent is retrieved rather than trusting `redirect_status`, because that
 * parameter is in a URL the reader can edit.
 *
 * @returns whether this load was a return, in which case there is no form to mount.
 */
async function settleRedirectReturn(): Promise<boolean> {
    const secret = params.get('payment_intent_client_secret');
    if (!secret) return false;

    $('payment-form').hidden = true;
    $('handoff').hidden = true;
    $('handoff-note').hidden = true;
    $('amounts').hidden = true;

    try {
        const { paymentIntent, error } = await stripe.retrievePaymentIntent(secret);
        if (error) throw new Error(error.message);

        const paid = paymentIntent?.status === 'succeeded' || paymentIntent?.status === 'processing';
        if (paid) {
            const settled = Number(paymentIntent.amount) / 100 || amount;
            report('pay:success', { amount: settled });
            setStatus(strings.thanks, 'success');
            askToClose();
        } else {
            const message = paymentIntent?.last_payment_error?.message || strings.failed;
            setStatus(message, 'error');
            report('pay:error', { message });
        }
    } catch (caught) {
        const message = (caught as Error).message || strings.failed;
        setStatus(message, 'error');
        report('pay:error', { message });
    }
    return true;
}

/**
 * Sends a redirect-only method on its way, without asking a second time.
 *
 * Revolut Pay has nothing to fill in: pressing it in the panel already said everything,
 * and a window that then shows one button saying the same word is a step that exists only
 * because the code needed somewhere to put it. So the window confirms as soon as Stripe
 * is ready and the reader lands on Revolut.
 *
 * ONCE PER TAB, AND THAT IS WHY THIS TOUCHES sessionStorage. `confirmPayment` navigates
 * away; pressing Back comes straight back here, and firing again would bounce them out of
 * their own cancellation with no way to stop. The mark survives that Back — same tab,
 * same session — and when it is found the sheet simply stays put with its button, so
 * going again is a deliberate press. A browser that refuses the storage (private mode,
 * blocked site data) loses only the guard, never the payment.
 */
function autoRedirect(): void {
    if (!REDIRECTS_AWAY.has(METHOD)) return;

    const key = `pay:auto:${METHOD}:${amount}:${CURRENCY}`;
    try {
        if (sessionStorage.getItem(key) === '1') return;
        sessionStorage.setItem(key, '1');
    } catch {
        // No storage: the redirect still runs, it just is not guarded against Back.
    }
    void finish(cardElements, METHOD, 'card-form', strings.redirecting);
}

function mount(): void {
    const appearance = stripeAppearance();
    const base = { mode: 'payment' as const, amount: amount * 100, currency: CURRENCY, appearance };

    /*
     * The amount was settled in the panel and travels in the query string, so the chips
     * and the free field would only offer to change a decision this window cannot carry
     * back. The figure is still on screen: the button says "Support 5 €".
     */
    if (FOCUSED) $('amounts').hidden = true;

    if (FRAMED) {
        /*
         * Nothing to wait for — there is no Element here to report ready — so the panel
         * is told at once and the wallets are built immediately rather than off the card
         * form's `ready`, which is where that call used to hang.
         */
        mountHandoff();
        notifyPanel('pay:ready');
        mountWallets();
        return;
    }

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
     * panel is a scrolling menu in front of a contribution. Two entries is the whole list.
     *
     * It is an option of the instance, not of the element, which is why this is its own
     * instance: putting it on the shared one would strip PayPal out of the wallet buttons
     * as well.
     */
    cardElements = stripe.elements({ ...base, paymentMethodTypes: cardFormTypes() });

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
        // The tab the query string asked for, first — see `cardFormOrder`.
        paymentMethodOrder: cardFormOrder(),
        /*
         * The wallets are already buttons above the divider, so the card form must not
         * offer them again — and it does by default, which is how Google Pay ended up
         * sitting in the tab strip where Revolut Pay should be, pushing it out of view.
         *
         * Stripe removes the wallets from the Payment Element by itself when both elements
         * share one `elements()` instance. These deliberately do not share one, so this
         * page has to say it.
         */
        wallets: {
            applePay: 'never',
            googlePay: 'never',
            /*
             * Link's inline signup — "Save my information for faster checkout", with its
             * email, phone and full-name fields — is the largest thing on the sheet and it
             * is not part of paying. `wallets.link` is Stripe's own switch for it; there is
             * no other, and hiding it with an appearance rule does not work because
             * `display` is not a property the Appearance API accepts.
             *
             * Off only in the hand-off window, where the reader asked for one method and
             * should get that method and nothing else. The full sheet keeps Link, because
             * there it is a way to pay rather than an interruption.
             */
            link: FOCUSED ? 'never' : 'auto',
        },
        /*
         * Only the address fields the payment actually needs.
         *
         * `if_required` differs from `never` in the way that matters here: it drops the
         * optional ones — the country dropdown, the postcode — and keeps anything the
         * method or the account genuinely requires, so nothing has to be passed back at
         * confirmation time and no payment can fail for a field we hid.
         */
        fields: FOCUSED ? { billingDetails: { address: 'if_required' } } : undefined,
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

        if (FOCUSED) {
            // The wallets belong to the panel's sheet. This window is one method.
            autoRedirect();
            return;
        }
        // Only now: see `mountWallets`.
        mountWallets();
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

    /*
     * THE WALLETS ARE BUILT AFTER THE CARD FORM IS ON SCREEN, NOT BEFORE.
     *
     * The Express Checkout Element has to ask the browser which wallets this device can
     * use before it paints anything, and with `always` it asks about Apple Pay even where
     * the answer is slow or never comes — inside the panel, where Chrome declines the
     * Payment Request probe outright, that wait was the whole "Loading the secure payment
     * form" hang.
     *
     * Creating it only once the card form has reported ready unties the two. The sheet is
     * usable in about a second, and the wallet row appears above the divider whenever
     * Stripe has an answer — which is what `always` is for, and why it can now stay on
     * everywhere instead of being switched off in the panel.
     */
    function mountWallets(): void {
        /*
         * THE ROW'S HEIGHT IS RESERVED BEFORE STRIPE HAS ANSWERED.
         *
         * The wallets are built after the card form on purpose (see above), so they land
         * about a second after the sheet is already readable — and they used to land by
         * un-hiding themselves, which pushed the divider, the card options and the small
         * print down the page under the reader's eyes. In the panel that is the whole
         * visible behaviour of the sheet: it looks finished, and then it jumps.
         *
         * So the space is taken now and settled later. `is-pending` holds a blank row the
         * exact height a wallet button occupies; `settle` either fills it or takes it back,
         * and does so once — whichever of `ready`, `availablepaymentmethodschange` or the
         * deadline gets there first.
         */
        const expressEl = $('express');
        const dividerEl = $('divider');
        expressEl.hidden = false;
        dividerEl.hidden = false;
        expressEl.classList.add('is-pending');
        dividerEl.classList.add('is-pending');

        let settled = false;
        let pendingTimer = 0;
        const settle = (any: boolean) => {
            if (settled) return;
            settled = true;
            window.clearTimeout(pendingTimer);
            expressEl.classList.remove('is-pending');
            dividerEl.classList.remove('is-pending');
            expressEl.hidden = !any;
            dividerEl.hidden = !any;
        };

        /*
         * If no answer ever comes — a blocked probe, a dead network — the reservation has
         * to be given back rather than left as a permanent gap. Shorter than the card
         * form's twenty seconds because this one is only holding a row of buttons, not the
         * form itself.
         */
        pendingTimer = window.setTimeout(() => settle(false), 8000);

        walletElements = stripe.elements(base);

        const wanted = WALLET_FOR_METHOD[METHOD];
        const express = walletElements.create('expressCheckout', {
            buttonType: { googlePay: 'plain', applePay: 'plain', paypal: 'pay' },
            paymentMethodOrder: wanted ? [wanted] : [],
            /*
             * `always`, everywhere.
             *
             * Stripe's browser table says Apple Pay works on desktop Chrome, Edge, Firefox and
             * Opera "only when `paymentMethods.applePay` is set to `always`" — the default
             * offers it solely where the device already has it configured, which off Apple
             * hardware is nowhere. Google Pay is the same story on Safari and iOS browsers.
             *
             * It used to be off inside the panel, because asking for a wallet the frame cannot
             * probe is what made the sheet hang. That is fixed by building this element after
             * the card form rather than before it, so the waiting costs nobody anything — and
             * switching it off cost the panel its Apple Pay button, which was the wrong trade.
             */
            paymentMethods: { applePay: 'always', googlePay: 'always' },
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
            settle(any);

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
}

// ─── Boot ────────────────────────────────────────────────────────

for (const chip of document.querySelectorAll<HTMLButtonElement>('.chip')) {
    const value = Number(chip.dataset.amount);
    chip.textContent = money.format(value);
    chip.addEventListener('click', () => setAmount(value, { fromChip: true }));
}

$('custom-amount').addEventListener('input', (event) => {
    const raw = Number((event.target as HTMLInputElement).value);
    const [min, max] = [contributionAmounts[0]!, 500];
    if (!Number.isFinite(raw) || raw < min || raw > max) {
        setStatus(strings.badAmount);
        setPayEnabled(false);
        return;
    }
    setStatus('');
    setPayEnabled(true);
    setAmount(Math.floor(raw));
});

syncChips();
updateSubmitLabel();

/*
 * A return from the provider is not a sheet to fill in, so it is settled first and the
 * Elements are never built. Anything else mounts as before — and a failure here must not
 * stop that, or one bad `return_url` would take the whole page down.
 */
void settleRedirectReturn()
    .catch(() => false)
    .then((handled) => {
        if (!handled) mount();
    });
