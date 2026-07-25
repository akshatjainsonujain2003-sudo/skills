import Link from "next/link";

/** Editorial brand-story split: text column + ambient video panel. */
export default function Story() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:px-8 lg:grid-cols-2 lg:gap-24 lg:py-36">
      <div>
        <p data-reveal className="eyebrow">
          The Philosophy
        </p>
        <h2 data-reveal data-reveal-delay="80" className="h-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-cream">
          Grown, not built.
        </h2>
        <div className="mt-6 space-y-5">
          <p data-reveal data-reveal-delay="140" className="lede">
            Bamboo bends, breathes and grows back — the opposite of concrete. We chose it as our material and our
            manifesto: a two-storey pavilion lashed by hand, cane cabanas woven like birds&rsquo; nests, and at the
            centre of it all, a guardian sculpted from the earth itself, resting in the lagoon.
          </p>
          <p data-reveal data-reveal-delay="200" className="lede">
            Everything that follows serves the same idea. A purely vegetarian kitchen. Music played live, not piped.
            Light that comes from lanterns and water, not screens. An evening here is designed to slow you down.
          </p>
        </div>
        <div data-reveal data-reveal-delay="260" className="mt-9">
          <Link href="/about" className="btn btn-ghost">
            Our Story
          </Link>
        </div>
      </div>

      <figure data-reveal data-reveal-delay="150" className="relative">
        <div className="overflow-hidden rounded-2xl">
          <video
            className="aspect-[3/4] w-full object-cover"
            src="/media/ambience.mp4"
            poster="/media/gallery-b3.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Evening ambience beside the lagoon at The Bamboo Nation"
          />
        </div>
        <figcaption className="mt-4 flex items-baseline justify-between text-xs text-muted">
          <span className="font-ui tracking-[0.2em] uppercase">The lagoon, after dark</span>
          <span className="font-display text-lg text-gold italic">est. Jaipur</span>
        </figcaption>
      </figure>
    </section>
  );
}
