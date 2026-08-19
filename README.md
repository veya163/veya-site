# Veya Official Website

Veya 官网独立工程，与 `veya163/veya` 产品仓库分离。

## Current implementation

- Static official website: `index.html + assets/styles.css + assets/app.js`
- Full official site routes: Home / Product / Student / Teacher / AI Harness / Learning Evidence / Solutions / Trust / Platform / Pilot / Pricing / About / Login / Register
- Light / Dark / Auto theme; Auto uses visitor local time
- Student and Teacher are explained independently
- Website product screenshots are restricted to verified Veya live-runtime / product-snapshot sources

## Verified screenshot locations

The canonical runtime assets used by the static website live in:

- `assets/product-shots/student-home.webp`
- `assets/product-shots/teacher-home.webp`

A compatibility mirror is also maintained under:

- `public/product-shots/student-home.webp`
- `public/product-shots/teacher-home.webp`

The `public/product-shots/` directory must not be left empty and must never contain generated concept dashboards.

## Deployment

GitHub Pages deployment remains manual via `.github/workflows/deploy-pages.yml` to avoid unnecessary Actions usage.
