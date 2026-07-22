import Image from "next/image";
import { site } from "@/app/site-config";

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink overflow-hidden">
      {/* Mobile: single full-bleed background photo */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/heroimage.png"
          alt="Mobile mechanic servicing a vehicle beside the van"
          fill
          priority
          className="object-cover object-[left_40%]"
          sizes="100vw"
        />
      </div>

      {/* Desktop: two photos side by side as the full-bleed background */}
      <div className="hidden md:flex absolute inset-0">
        <div className="relative flex-[1.4]">
          <Image
            src="/heroimage.png"
            alt="Mobile mechanic standing beside the service van"
            fill
            priority
            className="object-cover object-[center_15%]"
            sizes="55vw"
          />
        </div>
        <div className="relative flex-1">
          <Image
            src="/herodesktop.png"
            alt="Tools in the van"
            fill
            className="object-cover object-center"
            sizes="45vw"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/10" />

      {/* Content */}
      <div className="hero-content relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-32 lg:py-40 min-h-[92svh] sm:min-h-[75svh] flex flex-col justify-end sm:justify-center">
        <p className="font-mono text-xs sm:text-sm tracking-wide sm:tracking-widest uppercase text-hazard mb-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
          Mobile Mechanic &mdash; Sydney Wide
        </p>

        <h1 className="font-display uppercase font-semibold leading-[0.95] text-4xl sm:text-6xl lg:text-7xl text-paper max-w-3xl [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
          {site.tagline}
        </h1>

        <p className="mt-6 text-lg text-paper/90 max-w-lg [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
          Honest repairs, transparent pricing and quality workmanship you can trust.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center bg-signal text-paper font-display uppercase tracking-wide font-semibold px-6 py-3.5 rounded-sm shadow-lg shadow-black/30 hover:brightness-110 transition focus-ring"
          >
            Call Chris {site.phoneDisplay}
          </a>

          <a
            href="#quote"
            className="inline-flex items-center justify-center border-2 border-paper text-paper font-display uppercase tracking-wide font-semibold px-6 py-3.5 rounded-sm hover:bg-paper hover:text-ink transition focus-ring"
          >
            Enquire now
          </a>
        </div>
      </div>
    </section>
  );
}