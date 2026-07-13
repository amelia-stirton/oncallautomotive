const reasons = [
  {
    title: "We come to you",
    desc: "Home, office, or roadside. No towing, no time off work.",
  },
  {
    title: "Upfront pricing",
    desc: "You get a quote before we start. No surprise call-out fees.",
  },
  {
    title: "Fully equipped van",
    desc: "Diagnostic tools and common parts carried on every job.",
  },
  {
    title: "Qualified & insured",
    desc: "Licensed mechanic, fully insured for work at your property.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
        <h2 className="font-display uppercase font-semibold text-3xl sm:text-4xl mb-10">
          Why Choose Us
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="border-t-4 border-hazard pt-4">
              <h3 className="font-display uppercase font-semibold text-lg mb-2">
                {r.title}
              </h3>
              <p className="text-ink/70 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
