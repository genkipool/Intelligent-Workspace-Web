# genkipool-site

The marketing site for **Intelligent Workspace**, plus the donation form the extension
frames in its side panel. Deployed to Vercel.

This is a separate repository from the extension on purpose: different deploy target,
different lifecycle, and — the reason that actually matters — nothing here can ever end
up inside the Web Store `.zip` by accident.

```
index.html      the landing page
styles.css      its stylesheet (Chrome's tab-group palette as the colour system)
site.js         language toggle + footer year, nothing else
pay/            the donation form: the page the extension frames
api/intent.js   creates the PaymentIntent — the only code that sees the secret key
vercel.json     per-route security headers
```

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

1. `/pay` and anything under it — the strict CSP: `script-src` limited to `js.stripe.com`,
   `frame-ancestors` limited to the extension, `form-action 'none'`.
2. Everything except `/pay` — the landing page's CSP, with `frame-ancestors 'none'`.
3. Everything — `Referrer-Policy`, `nosniff`, HSTS.

Giving both routes one shared policy would mean the payment page inherits whatever the
marketing page needs, which is always the looser of the two. Keep them separate.

## Deploy

```bash
vercel link
vercel domains add genkipool.com
vercel env add STRIPE_SECRET_KEY production     # sk_live_…
vercel env add STRIPE_SECRET_KEY preview        # sk_test_…
vercel --prod
```

`STRIPE_SECRET_KEY` is the only secret. It is never committed, never returned, never
logged. `api/intent.js` gives the browser one thing: the PaymentIntent's `client_secret`,
which is scoped to a single payment.

The publishable key lives in `pay/pay.js` as `PUBLISHABLE_KEY` and is public by design.
Swap `pk_test_…` for `pk_live_…` when going live.

## Before it works

**Extension IDs.** `frame-ancestors` currently allows two:

| ID                                 | Which build                                                   |
| ---------------------------------- | ------------------------------------------------------------- |
| `ahdppjdbnhpnkphnmogldfgcngekhfgb` | The Web Store listing                                          |
| `lblolblfmhglgakodagcifikmpfppbib` | The unpacked build loaded from `…/Intelligent_Tab_Group_Svelte/dist` |

The second is derived from the SHA-256 of that absolute path, so **it changes if the
folder moves or if you build on another machine**. Read the real one at
`chrome://extensions` and update `vercel.json` if it differs. The symptom of a mismatch
is a blank frame in the panel and a console message about the ancestor violating the CSP
directive — that is the guard working, not a bug.

The proper fix is to put the extension's real RSA public key in the extension's
`manifest.json` `key` field, so unpacked and Web Store builds share one ID. What is in
there today is the *ID* in the field that expects a *key*, which Chrome quietly ignores.

**Register the domain with Stripe.** Dashboard → Settings → **Payment method domains** →
add `genkipool.com`, in test mode and in live mode. Google Pay and Apple Pay both refuse
to render on an unregistered domain, and Stripe's registration is also what handles
Apple's domain-association file. Then enable Google Pay, Apple Pay, PayPal and Link under
**Payment methods**.

## Local development

```bash
vercel dev        # http://localhost:3000
```

Then in the extension, `src/config/payments.js`:

```js
export const PAYMENT_ORIGIN = 'http://localhost:3000';
```

and rebuild. `localhost` counts as a secure origin, so Stripe.js and the framing both
work. Note `vercel dev` does not enforce `vercel.json` headers the way production does,
so `frame-ancestors` is not applied locally — convenient for development, and exactly why
the production check above matters. **Put the production origin back before committing.**

The landing page alone needs no server features:

```bash
python3 -m http.server 8899
```

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
