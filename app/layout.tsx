import type { Metadata } from "next";
import Script from "next/script";
import { Oswald, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "./site-config";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title =
  "On Call Automotive | Mobile Mechanic Sydney \u2013 Bexley, Hurstville, Rockdale";
const description =
  "On Call Automotive is a mobile mechanic servicing Bexley, Hurstville, Rockdale and greater Sydney. Emergency call-outs, servicing, brakes, batteries and more \u2014 we come to you.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: title,
    template: `%s | ${site.businessName}`,
  },
  description,
  keywords: [
    "mobile mechanic",
    "mobile mechanic sydney",
    "mechanic near me",
    "emergency mechanic",
    "mechanic in bexley",
    "mechanic in hurstville",
    "mechanic in rockdale",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.siteUrl,
    siteName: site.businessName,
    title,
    description,
    images: [{ url: "/logo-on-call-automotive.png" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.businessName,
  image: `${site.siteUrl}/logo-on-call-automotive.png`,
  telephone: site.phoneDisplay,
  email: site.email,
  url: site.siteUrl,
  areaServed: site.suburbs,
  sameAs: [site.instagramUrl],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" data-scroll-behavior="smooth"
      className={`${oswald.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}