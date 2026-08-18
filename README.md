# Veya Site

Official website for Veya.

This repository is intentionally independent from the Veya product repository (`veya163/veya`). Product runtime code and website code must not be mixed.

## Local development

```bash
npm install
npm run dev
```

Default development URL: `http://localhost:4173`

## Build

```bash
npm run build
```

Build output is generated under `dist/`.

## Architecture boundary

- This repository owns the Veya public website and marketing surface.
- Do not import source code from the Veya product repository.
- Integrations with the product must use explicit public URLs or documented APIs/contracts.
- Website deployment is independent from product deployment.
