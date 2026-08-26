# On Call Automotive — Mobile Mechanic Site

A single-page Next.js (App Router) site for On Call Automotive, built with Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you launch

1. **Set the real domain** in `app/site-config.ts` (`siteUrl`) — this feeds the sitemap, robots.txt, canonical URL, and Open Graph tags. It's currently a placeholder.
2. **Set up email quote form routing**


## SEO built in

- Page title, meta description, and keywords targeting: mobile mechanic, mobile mechanic Sydney, mechanic near me, emergency mechanic, and suburb-specific searches (Bexley, Hurstville, Rockdale, etc.)
- `AutoRepair` structured data (JSON-LD) in `app/layout.tsx` — helps Google understand this is a local business, its service area, phone, and email
- Auto-generated `robots.txt` and `sitemap.xml` (`app/robots.ts`, `app/sitemap.ts`)
- A dedicated "Areas We Service" section (`components/ServiceAreas.tsx`) naming suburbs directly on the page, not just in metadata
- Open Graph tags so links shared on social/Instagram show a proper preview


## Deploying to vercel

push this to a GitHub repo and import it to vercel from there. 

## Structure

- `app/page.tsx` — assembles the homepage sections in order
- `app/terms/page.tsx` — standalone Ts & Cs page
- `app/robots.ts` / `app/sitemap.ts` — technical SEO file generation
- `components/` — Header, Hero, Services, ServiceAreas, WhyUs, QuoteForm, Faq, Footer
- `app/site-config.ts` — all editable business details in one place
- `app/globals.css` — color palette, fonts, and design tokens
- `public/favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `site.webmanifest` — favicon set
