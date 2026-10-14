/**
 * Every string on the site, in every language it is published in.
 *
 * Each language lives in its own file under `locales/`, because a single dictionary of
 * twenty-five languages is too large to read or review. English is the source; every
 * other file is typed `Dictionary`, so a key it lacks fails the build.
 *
 * Adding a language: write `locales/<code>.ts`, check it with
 * `node scripts/check-locale.mjs <code>`, import it here, and describe it in
 * `languages.ts`. Routes, the switcher, `hreflang` and the sitemap follow from this list.
 */

import { en } from '@/i18n/locales/en';
import { es } from '@/i18n/locales/es';
import { zh } from '@/i18n/locales/zh';
import { hi } from '@/i18n/locales/hi';
import { fr } from '@/i18n/locales/fr';
import { ar } from '@/i18n/locales/ar';
import { bn } from '@/i18n/locales/bn';
import { pt } from '@/i18n/locales/pt';
import { ru } from '@/i18n/locales/ru';
import { ur } from '@/i18n/locales/ur';
import { id } from '@/i18n/locales/id';
import { de } from '@/i18n/locales/de';
import { ja } from '@/i18n/locales/ja';
import { mr } from '@/i18n/locales/mr';
import { te } from '@/i18n/locales/te';
import { tr } from '@/i18n/locales/tr';
import { ta } from '@/i18n/locales/ta';
import { vi } from '@/i18n/locales/vi';
import { tl } from '@/i18n/locales/tl';
import { ko } from '@/i18n/locales/ko';
import { ha } from '@/i18n/locales/ha';
import { sw } from '@/i18n/locales/sw';
import { it } from '@/i18n/locales/it';
import { pa } from '@/i18n/locales/pa';

export const defaultLang = 'en' as const;

/** The order here is the order of the language switcher. */
export const ui = {
    en,
    es,
    zh,
    hi,
    fr,
    ar,
    bn,
    pt,
    ru,
    ur,
    id,
    de,
    ja,
    mr,
    te,
    tr,
    ta,
    vi,
    tl,
    ko,
    ha,
    sw,
    it,
    pa,
} as const;

export type Lang = keyof typeof ui;

export type { TranslationKey } from '@/i18n/types';
