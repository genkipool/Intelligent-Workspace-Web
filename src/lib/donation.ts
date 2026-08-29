/**
 * The rules a donation amount has to satisfy, as a pure function.
 *
 * It lives here rather than inside the endpoint so it can be tested without a server,
 * a request or a Stripe key — and so the one place that decides what a valid amount is
 * cannot drift from the one place that tests it.
 *
 * The server is the only authority on this. The chips and the number input in the
 * browser are a convenience; a framed page's query string is user input like any other,
 * so whatever arrives is re-checked here before a charge is created.
 */

import { donationCurrency } from '@/data/site';

/** Whole euros. Outside this range is a mistake or an attack, not a gift. */
export const MIN_AMOUNT = 1;
export const MAX_AMOUNT = 500;

const SUPPORTED_CURRENCIES = new Set([donationCurrency]);

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
