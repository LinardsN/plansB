# Plāns B — plans-b.lv

Static website for the band **Plāns B** (Liepāja). Anomaly dark theme.

## Pages

- `/` — homepage (auto-switches to a mobile-first layout under 768px)
- `/galerija/` — band photo gallery
- `/bildes/` — downloadable event photos (JPG + PNG)
- `/privatums/` — GDPR privacy notice (LV + EN)
- `/404.html` — not-found page

## Stack

- **Vite** build (multi-page) outputs static HTML/CSS/JS to `dist/`
- **React 18** (bundled, not loaded from a CDN)
- **Self-hosted variable fonts** — Inter, Archivo, JetBrains Mono (no Google requests)
- **Contact form** posts to Web3Forms → delivers to info@plans-b.lv

No server runtime. No analytics. No cookies. No tracking.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve dist/ locally (http://localhost:4173)
```

Node 22 recommended.

## Deploy to Cloudflare Pages

Cloudflare Pages is free for static sites — unlimited bandwidth, unlimited requests, 500 builds/month on the free tier. Custom domain and SSL cert are included.

### One-time setup

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pick this repo.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty)
   - **Node version:** `22` (set in env var `NODE_VERSION` if Cloudflare picks an older default)
4. Save and deploy. First build takes ~1 minute.

Cloudflare automatically picks up `public/_headers` and `public/_redirects` for security headers and the www → apex redirect.

### Custom domain

1. In the Pages project → **Custom domains** → **Set up a custom domain** → `plans-b.lv`.
2. Repeat for `www.plans-b.lv`.
3. Cloudflare handles DNS, SSL cert, and HSTS automatically. The `_redirects` file forwards `www.plans-b.lv/*` to `plans-b.lv/:splat` (301).

## Web3Forms hardening (do this before going public)

The Web3Forms access key in `src/shared/config.js` is public by design — Web3Forms keys identify the form, they don't authenticate the sender. The real anti-abuse lives in the Web3Forms dashboard:

1. Log into [web3forms.com](https://web3forms.com) with the email that owns the key (info@plans-b.lv).
2. **Allowed Domains** → add `plans-b.lv` and `www.plans-b.lv`. Submissions from any other origin will be rejected.
3. **Enable Cloudflare Turnstile** (free) for strong bot protection. Web3Forms documents the integration — it's a single hidden input on the form. (The current build relies on the hidden `botcheck` honeypot plus a 2-second submit-time guard. Turnstile is stronger.)
4. (Optional) Configure **Auto-Reply** so the person who filled the form gets a "we received your message" confirmation in their inbox.

If you ever need to rotate the key:

1. Generate a new key at web3forms.com.
2. Replace `WEB3FORMS_KEY` in `src/shared/config.js`.
3. Commit + push → Cloudflare rebuilds automatically.

## Security baseline

Already in place via this repo:

- **CSP, HSTS, X-Content-Type-Options, Permissions-Policy, X-Frame-Options, Referrer-Policy** — see `public/_headers`.
- **No third-party requests at page load** — fonts self-hosted, React bundled, no analytics.
- **Form honeypots** — Web3Forms `botcheck` hidden checkbox + 2-second submit-time guard.
- **GDPR privacy notice** at `/privatums/`.
- **External links** use `rel="noopener noreferrer"`.

Things to be aware of:

- The Web3Forms key was committed in the very first commit (and shipped in the old hand-built JSX). If that's a concern, rotate it as described above.
- `npm audit` reports an esbuild dev-server CVE — it only affects `npm run dev` on a local machine, never the deployed site. Vite's production build doesn't run esbuild at runtime.

## Editing content

| What | Where |
| ---- | ----- |
| All copy (LV + EN) | `src/shared/copy.js` |
| Homepage desktop layout | `src/pages/ConceptAnomaly.jsx` |
| Homepage mobile layout | `src/pages/MobileAnomaly.jsx` |
| Gallery (`/galerija/`) | `src/pages/Gallery.jsx` |
| Event photos (`/bildes/`) | `src/pages/Photos.jsx` |
| Privacy notice | `src/pages/Privacy.jsx` |
| 404 | `src/pages/NotFound.jsx` |
| Web3Forms key | `src/shared/config.js` |
| Security headers | `public/_headers` |
| `www → apex` redirect | `public/_redirects` |
| Sitemap | `public/sitemap.xml` |

Photos live in `public/photos/` — referenced as `/photos/X.jpg` from components.

## Optional: strip EXIF from photos

Photos shot on phones often carry GPS coordinates, camera serial, owner name etc. in EXIF metadata. To remove all of it:

```bash
brew install exiftool   # one-time
bash scripts/strip-exif.sh
```

The script is idempotent — safe to re-run after adding new photos.

## File layout

```
plansB/
├── index.html               entry: /
├── galerija/index.html      entry: /galerija/
├── bildes/index.html        entry: /bildes/
├── privatums/index.html     entry: /privatums/
├── 404.html                 entry: /404.html
├── public/                  copied verbatim to dist/
│   ├── _headers             Cloudflare security + cache headers
│   ├── _redirects           www → apex
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── fonts/               self-hosted woff2 (Inter, Archivo, JetBrains Mono)
│   └── photos/              band photos
├── src/
│   ├── entries/             one per HTML page, mounts the React root
│   ├── pages/                page components
│   └── shared/              copy, config, fonts.css, global.css, responsive.css
├── scripts/strip-exif.sh
├── vite.config.js
├── package.json
└── README.md
```
