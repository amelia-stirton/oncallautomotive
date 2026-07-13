import { site } from "@/app/site-config";

export default function Hero() {
  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-signal mb-4">
            Mobile mechanic &mdash; Bexley, Hurstville, Rockdale &amp; Sydney metro
          </p>
          <h1 className="font-display uppercase font-semibold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl">
            {site.tagline}
          </h1>
          <p className="mt-6 text-lg text-ink/80 max-w-lg">
           Honest repairs, transparent pricing and quality workmanship you can trust.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center bg-signal text-paper font-display uppercase tracking-wide font-semibold px-6 py-3 rounded-sm hover:brightness-110 transition focus-ring"
            >
              Call Chris {site.phoneDisplay}
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center border-2 border-ink text-ink font-display uppercase tracking-wide font-semibold px-6 py-3 rounded-sm hover:bg-ink hover:text-paper transition focus-ring"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* something here */}
        <p className="mt-6 text-lg text-ink/80 max-w-lg"> ****not sure what to put here yet*****
        </p>
        
      </div>
    </section>
  );
}
