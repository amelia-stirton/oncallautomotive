
"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  { code: "1", name: "Logbook Servicing", desc: "Description" },
  { code: "2", name: "Pre-purchase Inspections", desc: "Description" },
  { code: "3", name: "Fault Diagnostics", desc: "Description" },
  { code: "4", name: "Batteries", desc: "Description" },
  { code: "5", name: "Mechanical and Cooling System Repairs", desc: "Description" },
  { code: "6", name: "Breakdown assistance", desc: "Description" },

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
      <span className="font-mono text-hazard text-sm tracking-widest">
        {s.code}
      </span>
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
            <ServiceCard key={s.code} s={s} index={index} />
          ))}
        </div>

        <p className="mt-8 text-paper/60 text-sm">
          Don&rsquo;t see your issue listed? Give Chris a call &mdash; if it&rsquo;s
          on four wheels, he's probably fixed it.
        </p>
      </div>
    </section>
  );
}