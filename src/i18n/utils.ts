/**
 * The helpers every page uses. Nothing else should read `ui` directly.
 */

import { ui, defaultLang, type Lang, type TranslationKey } from '@/i18n/ui';

/** Every published language, the default first, in the order the switcher lists them. */
export const langs = Object.keys(ui) as Lang[];

/** The languages that live under a prefix, which is every one but the default. */
export const prefixedLangs = langs.filter((lang) => lang !== defaultLang);

/**
 * Reads the language out of the URL Astro is rendering.
 *
 * Astro also exposes `Astro.currentLocale`, but that is `string | undefined`; this
 * narrows to the `Lang` union so a typo in a route cannot reach a component.
 */
export function getLangFromUrl(url: URL): Lang {
    const [, segment] = url.pathname.split('/');
    return segment && segment in ui ? (segment as Lang) : defaultLang;
}

/** `const t = useTranslations(lang)`, then `t('hero.title')`. */
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

/** The path a page has in every language: the current URL with its prefix taken off. */
export function barePath(lang: Lang, pathname: string): string {
    return lang === defaultLang ? pathname : pathname.replace(`/${lang}`, '') || '/';
}

/** `getStaticPaths` for a page that exists once per prefixed language. */
export function prefixedLangPaths() {
    return prefixedLangs.map((lang) => ({ params: { lang }, props: { lang } }));
}
