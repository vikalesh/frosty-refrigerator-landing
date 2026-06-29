# Frostify Next.js Landing Page

Production-ready Next.js App Router landing page converted from your React component.

## What changed from your original code

- `Helmet` removed and replaced with Next.js `metadata`.
- Page split into reusable components.
- Client-only interactive part kept in `components/LandingPage.tsx` using `"use client"`.
- API route added at `app/api/enquiry/route.ts`.
- SEO JSON-LD added using a safe script block.
- Responsive CSS moved to `app/globals.css`.
- Hero image included as `public/images/hero.svg` placeholder; replace it with your real image if needed.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Update contact details

Edit `lib/siteConfig.ts`.
