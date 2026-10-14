/**
 * What the site needs to know about each language beyond its strings: what to call it in
 * the switcher, which locale `Intl` formats dates and money with, which `og:locale` a
 * share card declares, and which way the text runs.
 *
 * The set is the one `public/llms-*.txt` is published in, so the site and its
 * specification are readable in the same languages.
 */

import type { Lang } from '@/i18n/ui';

export interface LanguageInfo {
    /** The language's name in itself, which is how a reader looks for it in a list. */
    name: string;
    /** BCP 47 tag for `Intl`. */
    locale: string;
    /** OpenGraph wants `ll_CC`. */
    ogLocale: string;
    dir: 'ltr' | 'rtl';
}

export const languages: Record<Lang, LanguageInfo> = {
    en: { name: 'English', locale: 'en-GB', ogLocale: 'en_GB', dir: 'ltr' },
    es: { name: 'Español', locale: 'es-ES', ogLocale: 'es_ES', dir: 'ltr' },
    zh: { name: '简体中文', locale: 'zh-CN', ogLocale: 'zh_CN', dir: 'ltr' },
    hi: { name: 'हिन्दी', locale: 'hi-IN', ogLocale: 'hi_IN', dir: 'ltr' },
    fr: { name: 'Français', locale: 'fr-FR', ogLocale: 'fr_FR', dir: 'ltr' },
    ar: { name: 'العربية', locale: 'ar', ogLocale: 'ar_AR', dir: 'rtl' },
    bn: { name: 'বাংলা', locale: 'bn-BD', ogLocale: 'bn_BD', dir: 'ltr' },
    pt: { name: 'Português (Brasil)', locale: 'pt-BR', ogLocale: 'pt_BR', dir: 'ltr' },
    ru: { name: 'Русский', locale: 'ru-RU', ogLocale: 'ru_RU', dir: 'ltr' },
    ur: { name: 'اردو', locale: 'ur-PK', ogLocale: 'ur_PK', dir: 'rtl' },
    id: { name: 'Bahasa Indonesia', locale: 'id-ID', ogLocale: 'id_ID', dir: 'ltr' },
    de: { name: 'Deutsch', locale: 'de-DE', ogLocale: 'de_DE', dir: 'ltr' },
    ja: { name: '日本語', locale: 'ja-JP', ogLocale: 'ja_JP', dir: 'ltr' },
    mr: { name: 'मराठी', locale: 'mr-IN', ogLocale: 'mr_IN', dir: 'ltr' },
    te: { name: 'తెలుగు', locale: 'te-IN', ogLocale: 'te_IN', dir: 'ltr' },
    tr: { name: 'Türkçe', locale: 'tr-TR', ogLocale: 'tr_TR', dir: 'ltr' },
    ta: { name: 'தமிழ்', locale: 'ta-IN', ogLocale: 'ta_IN', dir: 'ltr' },
    vi: { name: 'Tiếng Việt', locale: 'vi-VN', ogLocale: 'vi_VN', dir: 'ltr' },
    tl: { name: 'Filipino', locale: 'fil-PH', ogLocale: 'tl_PH', dir: 'ltr' },
    ko: { name: '한국어', locale: 'ko-KR', ogLocale: 'ko_KR', dir: 'ltr' },
    ha: { name: 'Hausa', locale: 'ha-NG', ogLocale: 'ha_NG', dir: 'ltr' },
    sw: { name: 'Kiswahili', locale: 'sw-KE', ogLocale: 'sw_KE', dir: 'ltr' },
    it: { name: 'Italiano', locale: 'it-IT', ogLocale: 'it_IT', dir: 'ltr' },
    pa: { name: 'ਪੰਜਾਬੀ', locale: 'pa-IN', ogLocale: 'pa_IN', dir: 'ltr' },
};
