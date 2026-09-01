// @ts-check
import { defineConfig } from 'astro/config';
import { passthroughImageService } from 'astro/config';
import fs from 'node:fs';
import vercel from '@astrojs/vercel';

/**
 * HTTPS in development, when the certificate is there.
 *
 * Chrome refuses to autofill a payment form served over plain HTTP — "autofill is
 * disabled because this form does not use a secure connection" — so the card fields
 * cannot be tested locally the way a reader will meet them. The deployed site is HTTPS
 * and has never had the problem; `astro dev` did.
 *
 * `pnpm run cert` writes a self-signed pair into `.certs/`, which git ignores. With it
 * present `pnpm dev` serves https://localhost:4321 and autofill works; without it,
 * nothing changes and dev stays on HTTP. Point the extension at the same scheme in its
 * `.env.local`, or the panel's frame will be blocked as mixed content.
 */
const KEY = new URL('./.certs/localhost-key.pem', import.meta.url);
const CERT = new URL('./.certs/localhost-cert.pem', import.meta.url);
const devHttps =
    fs.existsSync(KEY) && fs.existsSync(CERT)
        ? { key: fs.readFileSync(KEY), cert: fs.readFileSync(CERT) }
        : undefined;

/**
 * The site is static except for one endpoint.
 *
 * Everything a visitor reads is pre-rendered at build time — there is no reason for a
 * marketing page to run a server. The single exception is `/api/intent`, which needs the
 * Stripe secret key and therefore has `export const prerender = false`. The Vercel
 * adapter turns exactly that one route into a function and leaves the rest as files.
 */
export default defineConfig({
    /*
     * The deployed origin, and the one every canonical URL, `hreflang` and OpenGraph tag
     * is built from. It is a subdomain of its own: `genkipool.com` serves an older,
     * unrelated site, so pointing this at the parent would advertise canonicals that
     * resolve to something else entirely.
     *
     * `PAYMENT_ORIGIN` in the extension has to match it exactly — the panel frames
     * `/pay` from here and the postMessage bridge compares origins string for string.
     */
    site: 'https://intelligentworkspace.genkipool.com',
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
         * The site has exactly one image: a 10 KB logo, and it lives in `public/` because
         * the same file is the favicon and the OpenGraph card, both of which need a
         * stable URL that a content hash would take away.
         *
         * So nothing here is ever transcoded, and Astro's default image service would
         * pull in `sharp` — a large native dependency — to do nothing. Passthrough keeps
         * `astro:assets` available for a future import without paying that install cost.
         */
        service: passthroughImageService(),
    },

    build: {
        // One stylesheet instead of a <style> block per component. The page is small
        // enough that a single request beats a dozen inlined ones.
        inlineStylesheets: 'never',
    },

    vite: {
        server: { https: devHttps },
        build: {
            /**
             * Never inline a component script into the HTML.
             *
             * Astro's default is to paste any bundled script under 4 KB straight into
             * the page, and almost every script this site has is under 4 KB: the theme
             * toggle, the mobile drawer, the hero carousel, the tab strips, the bento
             * filter, the scroll reveal. Under the `script-src 'self'` policy in
             * `vercel.json` the browser refuses to run an inline script, so all of that
             * silently stops working in production while it keeps working in `dev`,
             * where no policy is served.
             *
             * The alternative is a `'sha256-…'` in the policy for each one, but those
             * hashes change every time anyone edits a component, and a stale hash fails
             * the same silent way. A file under `/_astro/` is covered by `'self'`
             * forever. The one script that is deliberately inline, the theme sync in
             * `Base.astro`, is hand-written and stable, so it gets the single hash.
             *
             * Returning `undefined` for everything else leaves images and fonts on
             * Vite's own 4 KB rule.
             */
            assetsInlineLimit: (filePath) => (filePath.endsWith('.js') ? false : undefined),
        },
    },
});
