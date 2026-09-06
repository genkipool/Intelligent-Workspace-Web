/**
 * The rules a contribution amount has to satisfy, as a pure function.
 *
 * It lives here rather than inside the endpoint so it can be tested without a server,
 * a request or a Stripe key — and so the one place that decides what a valid amount is
 * cannot drift from the one place that tests it.
 *
 * The server is the only authority on this. The chips and the number input in the
 * browser are a convenience; a framed page's query string is user input like any other,
 * so whatever arrives is re-checked here before a charge is created.
 */

import { contributionCurrency } from '@/data/site';

/** Whole euros. Outside this range is a mistake or an attack, not a gift. */
export const MIN_AMOUNT = 1;
export const MAX_AMOUNT = 500;

const SUPPORTED_CURRENCIES = new Set([contributionCurrency]);

/**
 * @returns the amount in whole units, or `null` if it is not one we will charge.
 *   Fractions are floored rather than rejected: someone typing 5.5 meant at least 5.
 */
export function clampAmount(raw: unknown): number | null {
    if (typeof raw === 'boolean' || raw === null || raw === '') return null;
    const amount = Number(raw);
    if (!Number.isFinite(amount)) return null;
    const whole = Math.floor(amount);
    if (whole < MIN_AMOUNT || whole > MAX_AMOUNT) return null;
    return whole;
}

export function isSupportedCurrency(raw: unknown): boolean {
    return typeof raw === 'string' && SUPPORTED_CURRENCIES.has(raw.toLowerCase());
}

/** Stripe counts in the currency's smallest unit. */
export function toMinorUnits(amount: number): number {
    return amount * 100;
}

/**
 * The methods the card form is allowed to collect.
 *
 * It exists in two places by necessity: `pay.ts` passes it to `elements()` as
 * `paymentMethodTypes`, and the endpoint has to create the PaymentIntent with the same
 * list. Stripe rejects the confirmation outright if they disagree — "payment details were
 * collected through Stripe Elements using payment_method_types and cannot be confirmed
 * through the API configured with automatic payment methods" — so this is the one list
 * and both sides import it.
 */
export const CARD_FORM_METHODS = ['card', 'revolut_pay'] as const;

/**
 * What each of those is called on the hand-off buttons the panel shows in place of the
 * card form. See `pay.ts` for why the panel cannot show the form itself.
 *
 * `satisfies` is the point of writing it this way: adding a method to `CARD_FORM_METHODS`
 * without naming it here is a type error, not a button with no label on it.
 */
export const CARD_FORM_METHOD_LABEL = {
    card: 'pay.method.card',
    revolut_pay: 'pay.method.revolutPay',
} as const satisfies Record<(typeof CARD_FORM_METHODS)[number], string>;

/**
 * Whether a request is confirming from the card form or from a wallet button.
 *
 * The two need different PaymentIntents. The card form restricts itself with
 * `paymentMethodTypes`, so its intent must name the same types; the wallet buttons are
 * unrestricted, so theirs must use automatic payment methods and let the Dashboard decide.
 * Anything unrecognised is treated as a wallet, which is the safer default: an automatic
 * intent can confirm more, not less.
 */
export function isCardFormSource(source: unknown): boolean {
    return source === 'card-form';
}

/**
 * Which of the card-form methods a request may create an intent for.
 *
 * The sheet no longer always collects both. A hand-off window opens on one method and
 * gives its Elements instance only that `paymentMethodTypes`, and Stripe refuses to
 * confirm details collected by an Element whose types disagree with the intent's — so
 * the browser has to say which it used and this is where that claim is checked.
 *
 * It cannot widen anything: whatever arrives is filtered down to `CARD_FORM_METHODS`,
 * duplicates are dropped, and an empty or unrecognised list falls back to the full one,
 * which is what every caller before this parameter existed was asking for.
 */
export function cardFormMethodsFrom(raw: unknown): string[] {
    if (!Array.isArray(raw)) return [...CARD_FORM_METHODS];
    const allowed = new Set<string>(CARD_FORM_METHODS);
    const asked = [...new Set(raw.filter((type): type is string => typeof type === 'string'))].filter(
        (type) => allowed.has(type),
    );
    return asked.length > 0 ? asked : [...CARD_FORM_METHODS];
}
