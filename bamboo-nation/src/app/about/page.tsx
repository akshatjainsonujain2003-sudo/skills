import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/home/Stats";
import ReserveCta from "@/components/home/ReserveCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of The Bamboo Nation — Jaipur's first bamboo-themed, woman-led vegetarian restaurant, built by hand around a lagoon and a guardian sculpture.",
  alternates: { canonical: "/about" },
};

const chapters = [
  {
    kicker: "Why bamboo",
    title: "A material with a memory",
    body: "Bamboo is the fastest-growing plant on earth — it bends without breaking and regrows what it gives. Long before it was a theme, it was the point: build a place that treads lightly and ages warmly. Every pole in our two-storey pavilion was lashed and pegged by artisan hands, the way Rajasthan has always built things that last.",
    image: "/media/gallery-a21.jpg",
    alt: "Aerial view of the two-storey bamboo pavilion above the lagoon at night",
  },
  {
    kicker: "Why this architecture",
    title: "A guardian in the lagoon",
    body: "At the centre of the Nation rests a hand-sculpted guardian — palms open, eyes closed — rising from an illuminated lagoon. She isn't decoration; she sets the tempo. Tables ring the water, cane cabanas hang like nests, swings drift under the trees, and the rooftop looks over all of it. The architecture does what a menu can't: it slows you down.",
    image: "/media/gallery-a33.jpg",
    alt: "Top-down view of the hand-sculpted guardian rising from the illuminated lagoon",
  },
  {
    kicker: "Why this experience",
    title: "Woman-led, wholly vegetarian",
    body: "Jaipur's first bamboo-themed restaurant is also proudly woman-led. Our kitchen is 100% vegetarian by conviction — slow dals, charcoal paneer, wood-fired pizzas, pan-Asian classics — and our evenings are scored by live musicians, not playlists. Come once for the photographs; you'll come back for how it feels.",
    image: "/media/gallery-b12.jpg",
    alt: "Woven cane lanterns glowing across the pavilion ceiling",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={
          <>
            Built by hand. <em className="text-gold">Grown</em> from an idea.
          </>
        }
        lede="The Bamboo Nation began with a question: what would dining feel like if a restaurant were grown instead of constructed?"
      />

      <div className="mx-auto max-w-7xl space-y-24 px-5 pb-24 md:px-8 lg:space-y-36 lg:pb-36">
        {chapters.map((c, i) => (
          <section
            key={c.title}
            className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-24 ${i % 2 === 1 ? "lg:[&>figure]:order-first" : ""}`}
          >
            <div>
              <p data-reveal className="eyebrow">
                {c.kicker}
              </p>
              <h2 data-reveal data-reveal-delay="80" className="h-display mt-4 text-[clamp(1.875rem,4vw,3rem)] text-cream">
                {c.title}
              </h2>
              <p data-reveal data-reveal-delay="160" className="lede mt-5">
                {c.body}
              </p>
            </div>
            <figure data-reveal data-reveal-delay="140" className="overflow-hidden rounded-2xl">
              <Image
                src={c.image}
                alt={c.alt}
                width={720}
                height={1280}
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          </section>
        ))}
      </div>

      <div className="pb-24 lg:pb-36">
        <Stats />
      </div>

      <section className="mx-auto max-w-4xl px-5 pb-24 text-center md:px-8 lg:pb-36">
        <p data-reveal className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-snug text-cream text-balance italic">
          &ldquo;We didn&rsquo;t want to open a restaurant. We wanted to plant one.&rdquo;
        </p>
        <p data-reveal data-reveal-delay="100" className="eyebrow mt-6">
          The Bamboo Nation team
        </p>
        <div data-reveal data-reveal-delay="180" className="mt-10">
          <Link href="/gallery" className="btn btn-ghost">
            See the Space
          </Link>
        </div>
      </section>

      <ReserveCta />
    </>
  );
}
