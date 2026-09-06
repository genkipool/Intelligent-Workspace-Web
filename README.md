# Intelligent Workspace Web

The marketing site for **Intelligent Workspace**, plus the donation form the extension
frames in its side panel. Deployed to Vercel.

This is a separate repository from the extension on purpose: different deploy target,
different lifecycle, and — the reason that actually matters — nothing here can ever end
up inside the Web Store `.zip` by accident.

Built with **Astro 7**, statically generated, with one server function.

```
src/pages/            routes. index + es/index, pay + es/pay, api/intent
src/components/       one section each; Landing.astro composes them
src/layouts/Base.astro  <head>, hreflang, the skip link
src/i18n/ui.ts        every string, both languages, key-complete by type
src/i18n/utils.ts     getLangFromUrl · useTranslations · localisePath
src/data/             features, shortcuts, site facts — typed, not markup
src/scripts/pay.ts    the only client-side JavaScript on the whole site
src/styles/           global tokens and the pay sheet; the rest is scoped per component
vercel.json           per-route security headers
```

### The rules this structure enforces

- **No copy in components.** They call `t('key')`. Adding a language is one object in
  `ui.ts` and one entry in `astro.config.mjs`; a key present in English and missing in
  Spanish is a compile error, not a page that quietly renders the wrong language.
- **No content in markup.** The four features and the shortcut list are typed arrays in
  `src/data/`. `Features.astro` derives the numbering and the colour from the array, so
  inserting a fifth feature renumbers the rest by itself.
- **Styles are scoped by default.** Only tokens, the two layout primitives (`.wrap`,
  `.band`), the shared `.cta` and the breakpoints that retune several components at once
  live in `global.css`. Everything else sits in the component it belongs to, where Astro
  guarantees it cannot leak.
- **Imports are absolute.** `@/*` maps to `src/*`, so moving a page between folders never
  breaks one and nobody counts `../`.
- **Zero JavaScript by default.** The landing page ships none — the language switch is a
  link to a real URL, not a toggle. Only `/pay` loads a script, because Stripe needs one.

## Commands

Package manager is **pnpm** — the same as the extension repository, and the lockfile is
committed. `npm install` here would resolve a different tree from the one CI checks.

```bash
pnpm install     # --frozen-lockfile in CI
pnpm dev         # astro dev, on :4321
pnpm build       # static pages + one Vercel function
pnpm check       # astro check — types across .astro and .ts
pnpm test        # vitest
pnpm verify      # everything CI runs, in one command
pnpm perf        # Lighthouse against the real build, mobile and desktop
```

`pnpm perf` builds, serves the output the way the host serves it — gzipped, with
`immutable` on the hashed assets — and runs Lighthouse twice. Both of those matter. The
same build scores 91 on mobile behind a plain static server and 100 behind compression,
and the report blames a 74 KB stylesheet that is 12 KB on the wire; and a site at 100 on
desktop can sit well below it on mobile, which is the number people quote.

It also prints which audits actually count. The score is five metrics — FCP, Speed Index,
LCP, TBT, CLS — and everything else in the report carries weight zero. Unused CSS,
render-blocking resources and forced reflow are worth fixing on their own merits; they
cannot move the number by a point.

To measure something already deployed, give it a URL:

```bash
node scripts/lighthouse.mjs https://example.com
```

`pnpm-workspace.yaml` carries one setting: `allowBuilds`, pnpm's allowlist of packages
permitted to run install scripts. Only `esbuild` is on it, and it has to be — its
postinstall fetches the platform binary Astro's build needs. Adding a name there lets a
package run arbitrary code at install time, so each one needs a reason.

## Why the payment form is a web page and not part of the extension

Manifest V3 pins an extension's `script-src` to `'self'`, so Stripe.js cannot load in a
panel page, and bundling it locally is both a Web Store violation and something Stripe.js
refuses to do. `pay/` is an ordinary web page, so it can load Stripe.js, and the panel
frames it.

The framing is granted, never taken: `vercel.json` sends
`frame-ancestors chrome-extension://<id>` for `/pay`. The extension does **not** strip
any headers to make this work — it has machinery that can (for its web viewer) and that
machinery refuses payment hosts by name.

## The headers are per-route, and that is not cosmetic

`vercel.json` has three blocks, in this order:

1. `/pay` and `/es/pay` — the strict CSP: `script-src` limited to `js.stripe.com`,
   `frame-ancestors` limited to the extension, `form-action 'none'`.
2. Everything else — the landing page's CSP, with `frame-ancestors 'none'`.
3. Everything — `Referrer-Policy`, `nosniff`, HSTS.

Both language variants of the payment page are covered. Adding a third language means
adding it to the first block's pattern, or the new page inherits the landing CSP and the
panel shows a blank frame.

Giving both routes one shared policy would mean the payment page inherits whatever the
marketing page needs, which is always the looser of the two. Keep them separate.

## Deploy

```bash
vercel link
vercel domains add intelligentworkspace.genkipool.com
vercel env add STRIPE_SECRET_KEY production     # sk_live_…
vercel env add STRIPE_SECRET_KEY preview        # sk_test_…
vercel --prod
```

`STRIPE_SECRET_KEY` is the only secret. It is never committed, never returned, never
logged. `api/intent.js` gives the browser one thing: the PaymentIntent's `client_secret`,
which is scoped to a single payment.

The publishable key lives in `src/scripts/pay.ts` as `PUBLISHABLE_KEY` and is public by
design.
Swap `pk_test_…` for `pk_live_…` when going live.

## Before it works

**Extension IDs.** `frame-ancestors` currently allows two:

| ID                                 | Which build                                                     |
| ---------------------------------- | --------------------------------------------------------------- |
| `cmkbnppbnhoklenlngmbdfecgbnlojoo` | The Web Store listing — the same ID `src/data/site.ts` links to |
| `phfhghnjjimkbbmfjcjgaegjombeophi` | Any unpacked build of the extension repository                  |

Neither is derived from a path any more, and this file said for a while that the second
one was. It is not: the extension's `manifest.json` carries a `key`, the public half of
`dev-key.pem`, and Chrome takes the ID from the SHA-256 of that key. So the unpacked ID is
now the same on every machine and in every folder — which is what it is for, since the ID
is named here and a value that moved with the directory had to be chased after every
checkout.

The consequence is worth stating plainly, because it is easy to read as a leak and is not
one: that public key is committed, so **anyone who clones the extension and loads it
unpacked gets `phfhghn…` too**, and their build may frame `/pay`. It buys them nothing.
The private half is git-ignored and has never been committed, so no one else can sign an
update or touch the listing; the sheet hands its embedder only `pay:ready`, `pay:success`,
`pay:error` and `pay:external`, none of which carries card data, the client secret or
anything personal; and card fields live in Stripe's own cross-origin frames, out of an
embedder's reach. Anyone able to load an unpacked extension into someone's browser can ask
for `<all_urls>` and do far worse than frame a payment page.

What is still worth doing is making the two rows one. The `key` is a development key
rather than the Web Store item's, so the published build and a local one still have
different IDs. Put the listing's own public key in the manifest — it is in the header of
the published `.crx` — and both become `cmkbnpp…`, leaving this table with a single row
that never changes again.

The symptom of a mismatch is a blank frame in the panel and a console message about the
ancestor violating the CSP directive — that is the guard working, not a bug.

The extension's `manifest.json` used to carry
`"key": "ahdppjdbnhpnkphnmogldfgcngekhfgb"` — the extension _ID_ in the field that expects
a base64 RSA _public key_. This file used to say Chrome quietly ignored it. **It does
not**, and that mistaken belief is what kept the resulting bug invisible: the ID is
thirty-two characters of `a`–`p`, which is valid base64, so Chrome decoded it to 24 bytes
of nothing in particular and derived a third ID from them —
`hkhhkopgecahfoileckcppkkchclljoa`, which appears in neither row above. Every attempt to
frame `/pay` was refused, and the panel showed "refused to connect".

The field carries a real RSA public key now, which is why the second row is stable. The
remaining step is the one above: make it the listing's key rather than a development one.
A wrong value is worse than none, because it invents an ID no allowlist will ever
contain.

**The marketing pages name `js.stripe.com` in `script-src` too, and only for a prefetch.**
The landing page warms `js.stripe.com/v3` with `<link rel="prefetch" as="script">` so the
donation sheet finds it in cache instead of fetching it while the reader waits. A prefetch
with `as="script"` is checked against `script-src`, so without the origin there the browser
drops it — silently, which is the worst kind of not working. Nothing executes from that
origin on these pages; the file is only fetched and parked.

**The payment CSP has to name four Stripe origins, not one.** `js.stripe.com` is the
obvious one and it is not enough: Stripe stands up a controller and a metrics frame on
`m.stripe.network`, reports to `q.stripe.com`, and loads every card-brand and wallet logo
from `*.stripe.com`. Leaving those out does not produce an error anyone sees — the sheet
simply sits on "Loading the secure payment form" and never finishes, and it only happens
in production, because `astro dev` serves no headers at all and so cannot reproduce it.

| Directive     | Must include                                                                    |
| ------------- | ------------------------------------------------------------------------------- |
| `script-src`  | `https://js.stripe.com`                                                         |
| `frame-src`   | `https://js.stripe.com`, `https://hooks.stripe.com`, `https://m.stripe.network` |
| `connect-src` | `https://api.stripe.com`, `https://m.stripe.network`, `https://q.stripe.com`    |
| `img-src`     | `https://*.stripe.com`                                                          |

**Register the domain with Stripe.** Dashboard → Settings → **Payment method domains** →
add `intelligentworkspace.genkipool.com`, in test mode and in live mode. Google Pay and Apple Pay both refuse
to render on an unregistered domain, and Stripe's registration is also what handles
Apple's domain-association file. Then enable Google Pay, Apple Pay, PayPal and Link under
**Payment methods**.

## Local development

```bash
pnpm dev          # http://localhost:4321 — the pages, but /api/intent needs vercel dev
vercel dev        # http://localhost:3000 — the whole thing, with the endpoint
```

Then point the extension at it. `.env.local` in the extension repository, which git
ignores:

```
VITE_PAYMENT_ORIGIN=http://localhost:4321
```

and rebuild the extension. Production is the default in the source precisely so nobody
has to remember to switch it back. `localhost` counts as a secure origin, so Stripe.js and the
framing both work. Note `vercel dev` does not enforce `vercel.json` headers the way
production does, so `frame-ancestors` is not applied locally — convenient for
development, and exactly why the production check above matters.

**Put the production origin back before releasing the extension.** A build pointing at
localhost is a build where donations silently go nowhere.

## Brand marks

- **Google Pay**: `assets/` in the extension carries Google's official mark, taken
  verbatim from `https://www.gstatic.com/instantbuy/svg/light_gpay.svg` — the same asset
  the Google Pay API serves. It keeps its clear space and is never recoloured.
- **Apple Pay**: the tile icon is drawn to Apple's proportions in flat black on white,
  the only treatment the Human Interface Guidelines allow. Using the mark requires
  accepting Apple's Payment Mark licence in the developer account that ships the app.
- **The payment buttons themselves** are rendered by Stripe from Google's and Apple's own
  assets, so they are compliant without anything being done here.

## Not done yet

No webhook. For one-off donations the panel's own confirmation is enough, but Stripe's
guidance is that fulfilment must never depend on the user reaching a success page. Add
`payment_intent.succeeded` handling with signature verification before adding recurring
amounts.
