
"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  { name: "Logbook Servicing", desc: "Scheduled servicing that meets manufacturer requirements, so your new car warranty stays valid." },
  { name: "Repairs", desc: "We cover it all - brakes, suspension, power steering, cooling systems, and electrical repairs, including alternator and starter motor replacements, and much more." },
  { name: "Fault Diagnostics", desc: "Engine light on, or your car doesn’t sound or drive like it usually does? We have the latest diagnostic equipment to get to the bottom of your issue." },
  { name: "Batteries", desc: "We offer 24/7 battery roadside assistance - we’ll come to you, test your battery, and replace it on the spot." },
  { name: "Breakdown assistance", desc: "Car not starting? Flat tyre? If you’re stuck on the side of the road, 24/7 roadside assistance is available to get you back on the road." },
  { name: "Pre-purchase Inspections", desc: "Buying a used car? I'll check it over before you hand over your money. You'll get a verbal and written report, plus a full diagnostic scan." }

];

type Service = (typeof services)[number];

function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

   const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setInView(true);
      observer.disconnect();
    }
  },
  { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

function ServiceCard({ s, index }: { s: Service; index: number }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="bg-ink p-6 flex flex-col gap-3 transition-all duration-700 ease-out"
      style={{
        transitionDelay: inView ? `${(index % 2) * 120}ms` : "0ms",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
    
      <h3 className="font-display uppercase font-semibold text-xl leading-tight">
        {s.name}
      </h3>
      <p
        className="text-paper/70 text-sm"
        dangerouslySetInnerHTML={{ __html: s.desc }}
      />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
          <h2 className="font-display uppercase font-semibold text-3xl sm:text-4xl">
            Services Offered
          </h2>
         
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-paper/10">
          {services.map((s, index) => (
            <ServiceCard key={index} s={s} index={index} />
          ))}
        </div>

        <p className="mt-8 text-paper/60 text-sm">
          Don&rsquo;t see your issue listed? Give Chris a call 
        </p>
      </div>
    </section>
  );
}