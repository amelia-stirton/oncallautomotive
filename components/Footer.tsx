import Link from "next/link";
import Image from "next/image";
import { site } from "@/app/site-config";

export default function Footer() {
  return (
    <footer className="bg-paper text-ink mt-auto">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <Image
            src="/logo.png"
            alt={`${site.businessName} logo`}
            width={220}
            height={64}
            className="h-15 w-auto mb-3"
          />
          <p className="text-ink/60 text-sm">{site.tagline}</p>
        </div>

        <div className="font-mono text-sm space-y-2">
          <p className="uppercase tracking-widest text-ink/40 text-xs mb-2">
            Contact
          </p>
          <a
            href={site.phoneHref}
            className="block hover:text-hazard transition-colors focus-ring rounded"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="block hover:text-hazard transition-colors focus-ring rounded"
          >
            E: {site.email}
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-hazard transition-colors focus-ring rounded"
          >
            {site.instagramHandle} on Instagram
          </a>

          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-hazard transition-colors focus-ring rounded"
          >
            @oncallautomotive on Facebook
          </a>
        </div>

       <div className="font-mono text-sm space-y-2 sm:text-right">
          <p className="uppercase tracking-widest text-ink/40 text-xs mb-2">
            Hours
          </p>
          <p className="text-ink/60">{site.hours}</p>
          <div className="flex flex-col sm:items-end gap-1 mt-2">
            <Link
              href="/terms"
              className="inline-block underline text-ink/60 hover:text-hazard transition-colors focus-ring rounded"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              className="inline-block underline text-ink/60 hover:text-hazard transition-colors focus-ring rounded"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-ink/10 py-4 px-5 sm:px-8 text-center text-ink/40 text-xs font-mono space-y-1">
        <p>
          Mobile mechanic servicing {site.suburbs.slice(0, -1).join(", ")} and{" "}
          {site.suburbs[site.suburbs.length - 1]}.
        </p>
        <p>
          &copy; {new Date().getFullYear()} {site.businessName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
