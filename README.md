# Plāns B — plans-b.lv

Static website for the band **Plāns B** (Liepāja). Anomaly dark theme.

## Pages
- `/` — homepage (auto-switches to a mobile-first layout under 768px)
- `/galerija/` — band photo gallery
- `/bildes/` — downloadable event photos (JPG + PNG)

## Tech
Plain static HTML + React (UMD) + Babel-in-browser. No build step.
Just static files — deploy the whole folder as-is.

## Deploy (Cloudflare Pages)
1. Push this repo to GitHub.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
3. Build settings: **Framework preset: None**, **Build command: (empty)**, **Output directory: `/`**.
4. Add custom domain `plans-b.lv` (+ `www.plans-b.lv`).

## Editing content
- Copy/text lives in `shared.jsx` (COPY object, LV + EN).
- Homepage layout: `concept-anomaly.jsx` (desktop) + `mobile-anomaly.jsx` (mobile).
- Gallery: `concept-anomaly-gallery.jsx`. Add images to the `photos` array.
- Event downloads: `concept-anomaly-photos.jsx`. Add entries to the `photos` array (needs .jpg + .png in /photos).
- Booking form posts to Web3Forms (key in `concept-anomaly.jsx` / `mobile-anomaly.jsx`), delivers to info@plans-b.lv.

## Photos
All images live in `/photos`.
