import { site } from "@/app/site-config";

const serviceAreas = [
  {
    label: "St George",
    suburbs: [
      "Hurstville",
      "Kogarah",
      "Rockdale",
      "Brighton-Le-Sands",
      "Sans Souci",
      "Ramsgate",
      "Beverley Hills",
      "Peakhurst",
      "Mortdale",
      "Oatley",
    ],
  },
  {
    label: "Sutherland",
    suburbs: [
      "Sutherland",
      "Cronulla",
      "Miranda",
      "Caringbah",
      "Menai",
      "Engadine",
      "Gymea",
      "Sylvania",
      "Jannali",
      "Woronora",
    ],
  },
  {
    label: "Eastern Suburbs",
    suburbs: [
      "Bondi",
      "Coogee",
      "Randwick",
      "Maroubra",
      "Paddington",
      "Double Bay",
      "Vaucluse",
      "Bronte",
      "Woollahra",
      "Rose Bay",
    ],
  },
  {
    label: "North Sydney",
    suburbs: [
      "North Sydney",
      "Mosman",
      "Chatswood",
      "Neutral Bay",
      "Cremorne",
      "Crows Nest",
      "Lane Cove",
      "Willoughby",
      "Artarmon",
      "St Leonards",
    ],
  },
  {
    label: "Western Sydney",
    suburbs: [
      "Parramatta",
      "Penrith",
      "Blacktown",
      "Liverpool",
      "Bankstown",
      "Castle Hill",
      "Baulkham Hills",
      "Fairfield",
      "Campbelltown",
      "Auburn",
    ],
  },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-paper-dim">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
        <p className="font-mono text-signal text-sm uppercase tracking-widest mb-3">
          Where we work
        </p>
        <h2 className="font-display uppercase font-semibold text-3xl sm:text-4xl mb-4">
          Mobile Mechanic Sydney &mdash; Areas We Service
        </h2>
        <p className="text-ink/70 max-w-2xl mb-8">
          We proudly service the St George, Sutherland, Eastern Suburbs, North Sydney and Western Sydney regions. If you're located outside these areas, please don't hesitate to get in touch. We'll do our best to accommodate your location whenever possible.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {serviceAreas.map((area) => (
            <details
              key={area.label}
              className="group border-2 border-ink/15 rounded-sm px-4 py-3 open:pb-4"
            >
              <summary className="font-mono text-sm uppercase tracking-widest cursor-pointer list-none flex items-center justify-between">
                {area.label}
                <span className="ml-3 text-ink/40 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <p className="text-ink/70 text-sm mt-3 leading-relaxed">
                {area.suburbs.join(", ")}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}