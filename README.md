# On Call Automotive — Mobile Mechanic Site
Includes a spam protected quote request form and local SEO targeting for Sydney suburbs. 

## Tech stack
 - Next.js (App Router)
 - Tailwind CSS v4
 - Vercel (hosting)
 - Google reCAPTCHA (form spam protection)


## SEO built in

- Page title, meta description, and keywords targeting: mobile mechanic, mobile mechanic Sydney, mechanic near me, emergency mechanic, and suburb-specific searches (Bexley, Hurstville, Rockdale, etc.)
- `AutoRepair` structured data (JSON-LD) in `app/layout.tsx` — helps Google understand this is a local business, its service area, phone, and email
- Auto-generated `robots.txt` and `sitemap.xml` (`app/robots.ts`, `app/sitemap.ts`)
- A dedicated "Areas We Service" section (`components/ServiceAreas.tsx`) naming suburbs directly on the page, not just in metadata
- Open Graph tags so links shared on social/Instagram show a proper preview

## Project structure

- `app/page.tsx` — assembles the homepage sections in order
- `app/terms/page.tsx` — standalone Ts & Cs page
- `app/robots.ts` / `app/sitemap.ts` — technical SEO file generation
- `components/` — Header, Hero, Services, ServiceAreas, WhyUs, QuoteForm, Faq, Footer
- `app/site-config.ts` — all editable business details in one place
- `app/globals.css` — color palette, fonts and design tokens
- `public/` — favicon set (favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, site.webmanifest)

## Deploying to vercel

pushed this to GitHub repo and import it to vercel from there. 


