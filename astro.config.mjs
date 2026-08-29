// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

/**
 * The site is static except for one endpoint.
 *
 * Everything a visitor reads is pre-rendered at build time — there is no reason for a
 * marketing page to run a server. The single exception is `/api/intent`, which needs the
 * Stripe secret key and therefore has `export const prerender = false`. The Vercel
 * adapter turns exactly that one route into a function and leaves the rest as files.
 */
export default defineConfig({
    site: 'https://genkipool.com',
    adapter: vercel(),

    /**
     * English is the default and lives at the root; Spanish is prefixed. Astro renders
     * both at build time from one set of components, so a translation is a dictionary
     * entry rather than a second copy of the page — and each language gets a real URL
     * that search engines can index, which a client-side toggle never does.
     */
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
        routing: {
            prefixDefaultLocale: false,
        },
    },

    build: {
        // One stylesheet instead of a <style> block per component. The page is small
        // enough that a single request beats a dozen inlined ones.
        inlineStylesheets: 'never',
    },
});
