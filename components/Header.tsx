import Link from "next/link";
import Image from "next/image";
import { site } from "@/app/site-config";

export default function Header() {
  return (
   <header className="sticky top-0 z-50 bg-ink text-paper border-b-2 border-hazard h-20">
<div className="h-full grid md:grid-cols-3 grid-cols-2 items-center px-5">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="#top" className="rounded shrink-0">
            <Image
              src="/oncallfinallogowhite.png"
              alt={`${site.businessName} logo`}
              width={200}
              height={77}
              priority
              className="h-14 sm:h-20 md:h-20 lg:h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex justify-center items-center gap-8 font-medium text-sm --color-hazard/80">
          <a
            href="#services"
            className="hover:text-hazard transition-colors focus-ring rounded"
          >
            Services
          </a>

          <a
            href="#quote"
            className="hover:text-hazard transition-colors focus-ring rounded"
          >
            Get a Quote
          </a>

          <a
            href="#faq"
            className="hover:text-hazard transition-colors focus-ring rounded"
          >
            FAQ
          </a>
        </nav>

        {/* Call button */}
        <div className="flex justify-end">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 bg-hazard text-white font-display uppercase tracking-wide text-sm font-semibold px-4 py-2 rounded-sm hover:brightness-95 transition focus-ring"
          >
            <PhoneIcon />
            Call Now
          </a>
        </div>

      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
