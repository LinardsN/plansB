# Plāns B — plans-b.lv

Static website for the band **Plāns B** (Liepāja). Anomaly dark theme.

## Pages

- `/` — homepage (auto-switches to a mobile-first layout under 768px)
- `/galerija/` — band photo gallery (click to open lightbox)
- `/bildes/` — downloadable event photos (JPG + PNG)
- `/privatums/` — GDPR privacy notice (LV + EN, follows language toggle)
- `/paldies/` — thank-you page after form submission
- `/404.html` — not-found page

## Stack

- **Vite** build (multi-page) outputs static HTML/CSS/JS to `dist/`
- **React 18** (bundled, not loaded from a CDN)
- **Self-hosted variable fonts** — Inter, Archivo, JetBrains Mono (no Google requests)
- **Contact form** posts to FormSubmit → forwards to the address in `src/shared/config.js`

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

Cloudflare Pages is free with no credit caps: unlimited bandwidth, unlimited requests, 500 builds/month on the free tier. Custom domain, SSL cert, DDoS protection, CDN — all included.

### One-time setup

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pick this repo.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty)
   - **Environment variable** `NODE_VERSION` = `22`
4. Save and deploy. First build takes ~1 minute.

Cloudflare automatically picks up `public/_headers` and `public/_redirects` for security headers and the www → apex redirect.

### Custom domain

For the apex domain (`plans-b.lv`), Cloudflare Pages requires the domain to use Cloudflare DNS. One-time migration:

1. Cloudflare dashboard → **Connect a domain** → enter `plans-b.lv`.
2. Cloudflare scans the current NIC.LV DNS and imports the records. **Verify all 5 MX records and 2 TXT records (google-site-verification + DKIM at `google._domainkey`) are present** before continuing — these are Kristaps's Google Workspace email and must not be lost.
3. Cloudflare gives you two nameservers. Update them at NIC.LV → save.
4. Propagation takes 1–24 hours; Cloudflare's dashboard shows "Active" when ready.
5. In the Pages project → **Custom domains** → add `plans-b.lv` and `www.plans-b.lv`. SSL provisions automatically. The `_redirects` file forwards `www.plans-b.lv/*` to `plans-b.lv/:splat`.

### Auto-deploy

Every push to `main` triggers a Cloudflare build and redeploys in ~60 seconds. No CLI, no dashboard clicks.

## Contact form — first-time activation

The form posts to FormSubmit at the address configured in `src/shared/config.js` (`FORM_RECIPIENT`). FormSubmit requires a one-time activation:

1. Deploy the site.
2. Submit the form once with any test data.
3. The first submission triggers a confirmation email from FormSubmit to the address in `FORM_RECIPIENT`.
4. Open that email, click the activation link, done — all future submissions land in that inbox.

To change the recipient later (e.g. switch from a tester address to `info@plans-b.lv`): edit `FORM_RECIPIENT` in `src/shared/config.js`, commit, push. Cloudflare auto-rebuilds. The new recipient gets a fresh activation email on the next submission.

## Security baseline

Already in place:

- **CSP, HSTS, X-Content-Type-Options, Permissions-Policy, X-Frame-Options, Referrer-Policy** — see `public/_headers`.
- **No third-party requests at page load** — fonts self-hosted, React bundled, no analytics, no Google Fonts.
- **Form spam protection** — visually-hidden honeypot (`_honey`) + 2-second submit-time guard + FormSubmit's own filtering.
- **GDPR privacy notice** at `/privatums/`, language follows the LV/EN toggle.
- **External links** use `rel="noopener noreferrer"`.

`npm audit` reports an esbuild dev-server CVE — it only affects `npm run dev` on a local machine, never the deployed site.

## Editing content

| What | Where |
| ---- | ----- |
| All copy (LV + EN) | `src/shared/copy.js` |
| Homepage desktop layout | `src/pages/ConceptAnomaly.jsx` |
| Homepage mobile layout | `src/pages/MobileAnomaly.jsx` |
| Gallery (`/galerija/`) | `src/pages/Gallery.jsx` |
| Event photos (`/bildes/`) | `src/pages/Photos.jsx` |
| Privacy notice | `src/pages/Privacy.jsx` |
| Thank-you (`/paldies/`) | `src/pages/ThankYou.jsx` |
| 404 | `src/pages/NotFound.jsx` |
| Form recipient address | `src/shared/config.js` (`FORM_RECIPIENT`) |
| Security headers | `public/_headers` |
| `www → apex` redirect | `public/_redirects` |
| Sitemap | `public/sitemap.xml` |

Photos live in `public/photos/` — referenced as `/photos/X.jpg` from components.

## Optional: prepare new photos for the web

When dropping new full-size photos into `public/photos/`, run:

```bash
bash scripts/optimize-photos.sh   # resize + recompress, ~1800px max edge
bash scripts/strip-exif.sh         # remove GPS / camera serial metadata (needs `brew install exiftool`)
```

Both scripts are idempotent — safe to re-run.

## File layout

```
plansB/
├── index.html               entry: /
├── galerija/index.html      entry: /galerija/
├── bildes/index.html        entry: /bildes/
├── privatums/index.html     entry: /privatums/
├── paldies/index.html       entry: /paldies/
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
│   ├── pages/               page components
│   └── shared/              copy, config, fonts.css, global.css, responsive.css, useLang
├── scripts/
│   ├── optimize-photos.sh
│   └── strip-exif.sh
├── vite.config.js
├── package.json
└── README.md
```
