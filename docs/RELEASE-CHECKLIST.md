# Website Release Checklist

## Website source implementation complete
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

## Production-release gates still required
- [ ] Populate every referenced `public/product-shots/*.png` from verified Veya live-runtime/product snapshot sources.
- [ ] Run `npm install && npm run build` once on a release environment.
- [ ] Connect `/login` and `/register` to the real Veya Auth endpoint after that public endpoint is frozen.
- [ ] Add production domain/canonical/social metadata after the official domain is frozen.

Unchecked items must not be reported as completed without real evidence. They do not block source implementation closure, but they do block a production-release claim. Release verification should be batched to conserve GitHub Actions.
