# Website Release Checklist

## Website implementation complete

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

## External release gates still required

- [ ] Populate every referenced `public/product-shots/*.png` from verified Veya live-runtime/product snapshot sources.
- [ ] Run `npm install && npm run build` once on a release environment.
- [ ] Connect `/login` and `/register` to the real Veya Auth endpoint after that public endpoint is frozen.
- [ ] Add production domain/canonical/social metadata after the official domain is frozen.

These unchecked items must not be reported as completed until they have real evidence.
