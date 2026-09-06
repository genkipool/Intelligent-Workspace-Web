/**
 * The amount rules. These are the guard between a query string and a card charge, so
 * the cases below are the ones that would cost real money if they regressed.
 */
import { describe, it, expect } from 'vitest';
import {
    clampAmount,
    isSupportedCurrency,
    toMinorUnits,
    MIN_AMOUNT,
    MAX_AMOUNT,
    CARD_FORM_METHODS,
    CARD_FORM_METHOD_LABEL,
    cardFormMethodsFrom,
    isCardFormSource,
} from '@/lib/contribution';

describe('clampAmount', () => {
    it('accepts the presets the sheet offers', () => {
        expect(clampAmount(1)).toBe(1);
        expect(clampAmount(5)).toBe(5);
        expect(clampAmount(10)).toBe(10);
    });

    it('accepts the numbers the input sends as strings', () => {
        expect(clampAmount('7')).toBe(7);
    });

    it('floors fractions rather than rejecting them', () => {
        expect(clampAmount(5.9)).toBe(5);
        expect(clampAmount('5.5')).toBe(5);
    });

    it('holds the boundaries', () => {
        expect(clampAmount(MIN_AMOUNT)).toBe(MIN_AMOUNT);
        expect(clampAmount(MAX_AMOUNT)).toBe(MAX_AMOUNT);
        expect(clampAmount(MIN_AMOUNT - 1)).toBeNull();
        expect(clampAmount(MAX_AMOUNT + 1)).toBeNull();
    });

    it('refuses everything that is not a payable number', () => {
        for (const bad of [0, -5, NaN, Infinity, -Infinity, 'abc', '', null, undefined, {}, [], true]) {
            expect(clampAmount(bad)).toBeNull();
        }
    });

    it('refuses a fraction that floors below the minimum', () => {
        // 0.9 floors to 0, which must not become a charge of nothing.
        expect(clampAmount(0.9)).toBeNull();
    });
});

describe('isSupportedCurrency', () => {
    it('accepts the site currency in any case', () => {
        expect(isSupportedCurrency('eur')).toBe(true);
        expect(isSupportedCurrency('EUR')).toBe(true);
    });

    it('refuses anything else', () => {
        for (const bad of ['usd', 'gbp', '', null, 5]) {
            expect(isSupportedCurrency(bad)).toBe(false);
        }
    });
});

describe('toMinorUnits', () => {
    it('converts euros to cents', () => {
        expect(toMinorUnits(5)).toBe(500);
        expect(toMinorUnits(1)).toBe(100);
    });
});

/**
 * The pair that broke every payment.
 *
 * `pay.ts` gives the card form `paymentMethodTypes: CARD_FORM_METHODS`, and Stripe then
 * refuses to confirm those details against a PaymentIntent created with automatic payment
 * methods — it says so in as many words and only at confirmation, so the sheet looks
 * perfect until the moment it matters. The endpoint therefore has to branch on which
 * element collected, and these are the rules that branch reads.
 */
describe('which shape of PaymentIntent a request needs', () => {
    it('treats the card form as the restricted branch', () => {
        expect(isCardFormSource('card-form')).toBe(true);
    });

    it('treats a wallet, and anything unrecognised, as the automatic branch', () => {
        // Automatic can confirm more, not less, so it is the safe default for a value
        // that arrives from the browser.
        for (const source of ['wallet', 'card', '', null, undefined, 42, {}]) {
            expect(isCardFormSource(source)).toBe(false);
        }
    });

    it('offers card first, because that is the tab the sheet opens on', () => {
        expect(CARD_FORM_METHODS[0]).toBe('card');
    });

    it('names only methods the sheet is built to show', () => {
        // A method added here has to fit the tab strip, which Stripe will not wrap.
        expect(CARD_FORM_METHODS.length).toBeLessThanOrEqual(2);
    });
});

describe('cardFormMethodsFrom', () => {
    it('honours a hand-off window that opened on one method', () => {
        expect(cardFormMethodsFrom(['revolut_pay'])).toEqual(['revolut_pay']);
        expect(cardFormMethodsFrom(['card'])).toEqual(['card']);
    });

    it('cannot be used to charge a method the card form does not collect', () => {
        expect(cardFormMethodsFrom(['paypal', 'klarna'])).toEqual([...CARD_FORM_METHODS]);
        expect(cardFormMethodsFrom(['card', 'sepa_debit'])).toEqual(['card']);
    });

    it('falls back to the whole list for anything that is not a list of methods', () => {
        for (const raw of [undefined, null, 'card', 42, {}, [], [null, 7, {}]]) {
            expect(cardFormMethodsFrom(raw)).toEqual([...CARD_FORM_METHODS]);
        }
    });

    it('drops duplicates, because Stripe rejects a repeated type', () => {
        expect(cardFormMethodsFrom(['card', 'card'])).toEqual(['card']);
    });

    it('gives every method a label, so no button can render nameless', () => {
        for (const method of CARD_FORM_METHODS) {
            expect(CARD_FORM_METHOD_LABEL[method]).toMatch(/^pay\.method\./);
        }
    });
});
