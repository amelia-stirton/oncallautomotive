import { site } from "@/app/site-config";

export default function ServiceAreas() {
  return (
    <section className="bg-paper-dim">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
        <p className="font-mono text-signal text-sm uppercase tracking-widest mb-3">
          Where we work
        </p>
        <h2 className="font-display uppercase font-semibold text-3xl sm:text-4xl mb-4">
          Mobile Mechanic Sydney &mdash; Areas We Service
        </h2>
        <p className="text-ink/70 max-w-2xl mb-8">
          Based in the St George area, On Call Automotive covers Bexley,
          Hurstville, Rockdale and the surrounding Sydney metro suburbs. Not
          sure if you&rsquo;re in range? Send your suburb through the quote
          form below and we&rsquo;ll confirm.
        </p>
        <ul className="flex flex-wrap gap-3">
          {site.suburbs.map((suburb) => (
            <li
              key={suburb}
              className="font-mono text-sm uppercase tracking-wide border-2 border-ink/15 rounded-sm px-4 py-2"
            >
              {suburb}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
