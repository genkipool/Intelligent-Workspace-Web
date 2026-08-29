// @ts-check
import { defineConfig } from 'astro/config';
import { passthroughImageService } from 'astro/config';
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

    image: {
        /**
         * The site has exactly one image: a 10 KB logo. Astro's default image service
         * needs `sharp`, a large native dependency, to transcode it — which is a lot of
         * install surface for a file that is already small and already a PNG.
         *
         * Passthrough keeps what `astro:assets` is actually worth here: the import is
         * type-checked, a missing file is a build error rather than a 404, the asset is
         * hashed for caching, and the intrinsic dimensions are read from the file so the
         * markup cannot shift the layout while it loads. It just does not re-encode.
         */
        service: passthroughImageService(),
    },

    build: {
        // One stylesheet instead of a <style> block per component. The page is small
        // enough that a single request beats a dozen inlined ones.
        inlineStylesheets: 'never',
    },
});
