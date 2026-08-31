/**
 * Routing and translation lookup. A bug in `localisePath` sends a Spanish reader to an
 * English page, which nobody reports because the page still works.
 */
import { describe, it, expect } from 'vitest';
import { getLangFromUrl, useTranslations, localisePath, otherLang } from '@/i18n/utils';
import { ui } from '@/i18n/ui';

describe('getLangFromUrl', () => {
    it('reads the prefix when there is one', () => {
        expect(getLangFromUrl(new URL('https://genkipool.com/es/'))).toBe('es');
        expect(getLangFromUrl(new URL('https://genkipool.com/es/pay'))).toBe('es');
    });

    it('falls back to the default for the unprefixed root', () => {
        expect(getLangFromUrl(new URL('https://genkipool.com/'))).toBe('en');
        expect(getLangFromUrl(new URL('https://genkipool.com/pay'))).toBe('en');
    });

    it('falls back rather than trusting an unknown prefix', () => {
        expect(getLangFromUrl(new URL('https://genkipool.com/fr/'))).toBe('en');
    });
});

describe('localisePath', () => {
    it('leaves the default language at the root', () => {
        expect(localisePath('en', '/pay')).toBe('/pay');
        expect(localisePath('en', '/')).toBe('/');
    });

    it('prefixes the others', () => {
        expect(localisePath('es', '/pay')).toBe('/es/pay');
        expect(localisePath('es', '/')).toBe('/es/');
    });

    it('tolerates a path without its leading slash', () => {
        expect(localisePath('es', 'pay')).toBe('/es/pay');
    });
});

describe('otherLang', () => {
    it('is its own inverse', () => {
        expect(otherLang('en')).toBe('es');
        expect(otherLang(otherLang('en'))).toBe('en');
    });
});

describe('the dictionary', () => {
    it('covers every English key in every language', () => {
        const expected = Object.keys(ui.en).sort();
        for (const lang of Object.keys(ui) as (keyof typeof ui)[]) {
            expect(Object.keys(ui[lang]).sort(), `${lang} is missing keys`).toEqual(expected);
        }
    });

    it('has no empty strings', () => {
        for (const [lang, dict] of Object.entries(ui)) {
            for (const [key, value] of Object.entries(dict)) {
                expect(value.trim(), `${lang}.${key} is empty`).not.toBe('');
            }
        }
    });

    it('returns the right language', () => {
        expect(useTranslations('es')('donate.cta')).toBe('Donar');
        expect(useTranslations('en')('donate.cta')).toBe('Donate');
    });

    it('contains zero occurrences of "Vimium" or "Vim" across all language dictionaries', () => {
        for (const [lang, dict] of Object.entries(ui)) {
            for (const [key, value] of Object.entries(dict)) {
                expect(value, `Key ${lang}.${key} contains forbidden term`).not.toMatch(/\bvim(ium)?\b/i);
            }
        }
    });

    it('contains valid translations for comparison and trust table column headers in all supported languages', () => {
        const requiredKeys = ['comp.colFeature', 'trust.colPermissions', 'trust.colPurpose'] as const;
        for (const lang of Object.keys(ui) as (keyof typeof ui)[]) {
            for (const key of requiredKeys) {
                const val = ui[lang][key];
                expect(val, `${lang}.${key} must exist`).toBeDefined();
                expect(val.trim().length, `${lang}.${key} must not be empty`).toBeGreaterThan(0);
            }
        }
        expect(ui.en['comp.colFeature']).toBe('Capability');
        expect(ui.es['comp.colFeature']).toBe('Capacidad');
        expect(ui.en['trust.colPermissions']).toBe('Manifest V3 Permissions');
        expect(ui.es['trust.colPermissions']).toBe('Permisos del Manifest V3');
        expect(ui.en['trust.colPurpose']).toBe('Purpose & Justification');
        expect(ui.es['trust.colPurpose']).toBe('Finalidad y Justificación');
    });
});
