const items = [
  "Jaipur's first bamboo-themed restaurant",
  "Woman-led kitchen",
  "100% vegetarian",
  "Live music weekends",
  "Rooftop & lagoon seating",
  "Private events for 20–200",
];

/** Slow marquee of trust signals directly under the hero. Decorative motion, duplicated for a seamless loop. */
export default function TrustStrip() {
  return (
    <section aria-label="Highlights" className="overflow-hidden border-y hairline bg-forest/40 py-5">
      <div className="marquee-track flex w-max items-center motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {items.map((t) => (
              <li key={t} className="flex items-center gap-8 pr-8 pl-8">
                <span className="font-ui text-[0.75rem] tracking-[0.24em] whitespace-nowrap text-cream/80 uppercase">
                  {t}
                </span>
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
