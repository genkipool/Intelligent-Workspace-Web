/**
 * The error pages are the two screens nobody opens on purpose and therefore nobody
 * proof-reads. A missing key here throws at build time; a key that exists in English
 * and not in Spanish is caught by the parity test in `utils.test.ts`. What is left, and
 * what this file covers, is the copy itself: present, in the right language, and
 * obeying the same house rules as the rest of the site.
 */
import { describe, it, expect } from 'vitest';
import { ui } from '@/i18n/ui';
import type { Lang, TranslationKey } from '@/i18n/ui';

const errorKeys = [
    'errors.badge',
    'errors.notFound.title',
    'errors.notFound.desc',
    'errors.notFound.cta',
    'errors.notFound.meta',
    'errors.server.title',
    'errors.server.desc',
    'errors.server.retry',
    'errors.server.cta',
    'errors.server.meta',
    'errors.contribute',
    'errors.source',
] as const satisfies readonly TranslationKey[];

const languages = Object.keys(ui) as Lang[];

describe('the error page dictionary', () => {
    it('carries every string both pages render, in every language', () => {
        for (const lang of languages) {
            for (const key of errorKeys) {
                expect(ui[lang][key]?.trim(), `${lang}.${key} is missing or empty`).toBeTruthy();
            }
        }
    });

    it('says something different in each language', () => {
        // A copy-paste from the English block is the usual way a translation goes
        // missing, and it looks perfectly fine in review. `String()` widens the literal
        // types, which TypeScript would otherwise compare at compile time and reject as
        // a question already answered.
        const translated = errorKeys.filter((key) => String(ui.en[key]) !== String(ui.es[key]));
        expect(translated).toEqual([...errorKeys]);
    });

    it('uses no em dash, as everywhere else on the site', () => {
        for (const lang of languages) {
            for (const key of errorKeys) {
                expect(ui[lang][key], `${lang}.${key} contains an em dash`).not.toMatch(/—/);
            }
        }
    });

    it('never promises the visitor a status code in words instead of the figure', () => {
        // The badge is composed as `${badge}: ${status}` by the component, so the string
        // itself must not already contain a number.
        for (const lang of languages) {
            expect(ui[lang]['errors.badge']).not.toMatch(/\d/);
        }
    });
});
