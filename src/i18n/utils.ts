/**
 * The two helpers every page uses. Nothing else should read `ui` directly.
 */

import { ui, defaultLang, type Lang, type TranslationKey } from '@/i18n/ui';

/**
 * Reads the language out of the URL Astro is rendering.
 *
 * Astro also exposes `Astro.currentLocale`, but that is `string | undefined`; this
 * narrows to the `Lang` union so a typo in a route cannot reach a component.
 */
export function getLangFromUrl(url: URL): Lang {
    const [, segment] = url.pathname.split('/');
    return segment in ui ? (segment as Lang) : defaultLang;
}

/** `const t = useTranslations(lang)` — then `t('hero.title')`. */
export function useTranslations(lang: Lang) {
    return function t(key: TranslationKey): string {
        return ui[lang][key];
    };
}

/**
 * Prefixes a path with the language, except for the default one, which lives at the
 * root. Every internal link goes through this: a hardcoded `/pay` would send a Spanish
 * reader to the English page, and that mistake is invisible until someone reports it.
 */
export function localisePath(lang: Lang, path: string): string {
    const clean = path.startsWith('/') ? path : `/${path}`;
    return lang === defaultLang ? clean : `/${lang}${clean}`;
}

/** The other language, for the switcher. Extend when a third language arrives. */
export function otherLang(lang: Lang): Lang {
    return lang === 'en' ? 'es' : 'en';
}
