# Website Release Checklist

- [x] Independent `veya-site` project boundary
- [x] Home, Product, Student, Teacher, AI Harness, Learning Evidence
- [x] Solutions, Trust, Platform, Pilot/Outcomes, Work with Veya, About
- [x] Login and registration entry UI
- [x] Responsive desktop/mobile layout
- [x] Auto/light/dark theme with manual override
- [x] Product truth contract documented
- [x] Screenshot paths reserved for verified live-runtime captures only
- [x] Local typecheck/build scripts available
- [x] SEO description and page titles
- [x] No per-commit GitHub Actions workflow added

## Before public deployment

- Populate every referenced `public/product-shots/*.png` from verified Veya live-runtime/product snapshot sources.
- Run `npm install && npm run build` once on the release environment.
- Connect `/login` and `/register` to the real Veya Auth endpoint when that public endpoint is frozen.
- Add production domain/canonical/social metadata only after the official domain is frozen.
