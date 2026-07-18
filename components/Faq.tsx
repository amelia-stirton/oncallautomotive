"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

const faqs: { q: string; a: ReactNode }[] = [
  
  {
    q: "What areas do you cover?",
    a: (
      <>
        We service St George, Sutherland Shire, Eastern Suburbs, North Sydney
        and Western Sydney. Not sure if we cover your suburb? Check our{" "}
        <Link href="/#service-areas" className="underline text-signal">
          full list of service areas
        </Link>{" "}
        or get in touch and we'll do our best to help.
      </>
    ),
  },
  {
    q: "Can you fix my car in a car park or on the street?",
    a: "In most cases, yes. We just need safe, legal access to the vehicle. If the repair needs a hoist or specialist equipment, we'll let you know upfront and point you to a workshop.",
  },
  {
    q: "How quickly can you get to me?",
    a: "Most call-outs are booked same-day or next-day. For breakdowns, call us directly \u2014 we'll always try to prioritise anyone stuck on the road.",
  },
  {
    q: "Do you take card payments?",
    a: "Yes, we accept card and digital payments on-site, as well as bank transfer.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        <h2 className="font-display uppercase font-semibold text-3xl sm:text-4xl mb-10">
          Frequently Asked Questions
        </h2>

        <div className="divide-y-2 divide-ink/10 border-y-2 border-ink/10">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left focus-ring rounded"
                >
                  <span className="font-display uppercase font-semibold text-lg">
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 font-mono text-xl text-hazard transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-ink/70">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}