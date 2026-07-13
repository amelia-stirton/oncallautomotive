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
2. **Set up the quote form** — sign up free at https://formspree.io, create a form, and paste your form endpoint into `formspreeEndpoint` in `app/site-config.ts`. No backend code needed.
3. **Review `app/terms/page.tsx`** — the Terms & Conditions are a placeholder structure only. Have them checked/written properly for your business before going live.
4. **Confirm the suburb list** in `app/site-config.ts` (`suburbs`) matches where you actually want to be found in local search — this list drives the "Areas We Service" section, the footer, and the structured data Google reads.
5. **Update services** in `components/Services.tsx` to match what you actually offer.

## SEO built in

- Page title, meta description, and keywords targeting: mobile mechanic, mobile mechanic Sydney, mechanic near me, emergency mechanic, and suburb-specific searches (Bexley, Hurstville, Rockdale, etc.)
- `AutoRepair` structured data (JSON-LD) in `app/layout.tsx` — helps Google understand this is a local business, its service area, phone, and email
- Auto-generated `robots.txt` and `sitemap.xml` (`app/robots.ts`, `app/sitemap.ts`)
- A dedicated "Areas We Service" section (`components/ServiceAreas.tsx`) naming suburbs directly on the page, not just in metadata
- Open Graph tags so links shared on social/Instagram show a proper preview

Worth doing next (not included here): setting up Google Business Profile with the same name/address/phone, and getting a handful of Google reviews — for a local trade business these matter as much as on-page SEO.

## Deploying

The easiest option is [Vercel](https://vercel.com) (made by the Next.js team) — push this to a GitHub repo and import it there, or run `npx vercel` from this folder.

## Structure

- `app/page.tsx` — assembles the homepage sections in order
- `app/terms/page.tsx` — standalone Ts & Cs page
- `app/robots.ts` / `app/sitemap.ts` — technical SEO file generation
- `components/` — Header, Hero, Services, ServiceAreas, WhyUs, QuoteForm, Faq, Footer
- `app/site-config.ts` — all editable business details in one place
- `app/globals.css` — color palette, fonts, and design tokens
- `public/logo-on-call-automotive.png` — logo used in the header and footer
- `public/favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `site.webmanifest` — favicon set
