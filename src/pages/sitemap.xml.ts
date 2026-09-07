/**
 * The sitemap, written by hand rather than pulled from `@astrojs/sitemap`.
 *
 * The integration would work, but it would also be a dependency to earn its keep against
 * a site of four pages in two languages. What it gives that a generated list does not is
 * the `xhtml:link` alternates, and those are twelve lines here.
 *
 * WHAT IS DELIBERATELY MISSING: `/pay` and `/es/pay`. They are served `Cache-Control:
 * no-store`, they carry a per-open nonce in the query string, and there is nothing on them
 * to rank — a payment sheet in a search result is a worse answer than the page that links
 * to it. They stay crawlable, they are simply not advertised.
 *
 * `Astro.site` is the origin from `astro.config.mjs`, so a domain change moves this with
 * it. Prerendered like everything except `api/intent`, so it ships as a static file.
 */

import type { APIRoute } from 'astro';

/** The page types, each of which exists once per language. */
const PATHS = ['/', '/privacy', '/support', '/terms'] as const;

/** `en` lives at the root and `es` under its prefix — the same rule as `localisePath`. */
const LANGS = [
    { code: 'en', prefix: '' },
    { code: 'es', prefix: '/es' },
] as const;

function localised(prefix: string, path: string): string {
    if (path === '/') return prefix === '' ? '/' : `${prefix}/`;
    return `${prefix}${path}`;
}

export const GET: APIRoute = ({ site }) => {
    const origin = site?.origin ?? 'https://intelligentworkspace.genkipool.com';
    const url = (prefix: string, path: string) => `${origin}${localised(prefix, path)}`;

    const entries = PATHS.flatMap((path) =>
        LANGS.map(({ prefix }) => {
            /* Every URL declares the whole language set, itself included, which is what
               Google asks for: a page that lists alternates but not itself is ignored. */
            const alternates = LANGS.map(
                (alt) =>
                    `        <xhtml:link rel="alternate" hreflang="${alt.code}" href="${url(alt.prefix, path)}"/>`,
            ).join('\n');

            return [
                '    <url>',
                `        <loc>${url(prefix, path)}</loc>`,
                alternates,
                `        <xhtml:link rel="alternate" hreflang="x-default" href="${url('', path)}"/>`,
                '    </url>',
            ].join('\n');
        }),
    );

    const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        ...entries,
        '</urlset>',
        '',
    ].join('\n');

    return new Response(xml, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
};
