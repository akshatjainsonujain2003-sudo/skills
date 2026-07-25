import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { events, site, gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private Events",
  description:
    "Host birthdays, corporate evenings, kitty parties and anniversaries at The Bamboo Nation, Jaipur — lawns, pavilions and rooftop for 20 to 200+ guests.",
  alternates: { canonical: "/events" },
};

const steps = [
  { title: "Tell us the occasion", body: "Date, guest count and the mood you're after — one WhatsApp message is enough to start." },
  { title: "Walk the space", body: "We'll show you the lawn, lagoon deck, pavilions and rooftop, and hold the one that fits." },
  { title: "We stage it", body: "Menus, florals, music and a run-of-show handled by a dedicated events host." },
  { title: "You take the credit", body: "Arrive with your guests. Leave with the photographs. We'll handle everything between." },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Private Events"
        title={
          <>
            Occasions worth a <em className="text-gold">venue</em> this dramatic.
          </>
        }
        lede="A lagoon that glows, a guardian that watches over the party and spaces that scale from twenty guests to two hundred."
      />

      <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8 lg:pb-36">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {[gallery[7], gallery[3], gallery[2]].map((g, i) => (
            <figure key={g.src} data-reveal data-reveal-delay={String(i * 90)} className="overflow-hidden rounded-xl">
              <Image
                src={g.src}
                alt={g.alt}
                width={720}
                height={1280}
                sizes="(min-width: 768px) 30vw, 92vw"
                className={`w-full object-cover ${i === 1 ? "aspect-[3/4]" : "aspect-[3/4] md:mt-12"}`}
              />
            </figure>
          ))}
        </div>

        <section className="mt-24 lg:mt-36">
          <div className="mx-auto max-w-2xl text-center">
            <p data-reveal className="eyebrow">
              What we host
            </p>
            <h2 data-reveal data-reveal-delay="80" className="h-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-cream">
              Five kinds of unforgettable.
            </h2>
          </div>
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => (
              <li key={e.title} data-reveal data-reveal-delay={String((i % 3) * 90)} className="card p-8">
                <span className="font-ui text-xs text-gold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-3 text-2xl text-cream">{e.title}</h3>
                <p className="lede mt-2.5 text-sm">{e.body}</p>
              </li>
            ))}
            <li data-reveal data-reveal-delay="180" className="card flex flex-col justify-between bg-forest p-8">
              <div>
                <h3 className="font-display text-2xl text-cream">Something else?</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream/80">
                  Proposals, reunions, product launches — if it deserves a stage, we&rsquo;ll build one.
                </p>
              </div>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I'd like to plan an event at The Bamboo Nation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold mt-8 self-start !px-6 !py-3"
              >
                Talk to Events
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-24 lg:mt-36">
          <div className="mx-auto max-w-2xl text-center">
            <p data-reveal className="eyebrow">
              How it works
            </p>
            <h2 data-reveal data-reveal-delay="80" className="h-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-cream">
              Four steps to the big night.
            </h2>
          </div>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} data-reveal data-reveal-delay={String(i * 90)} className="border-t hairline pt-6">
                <span className="font-display text-4xl text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-4 text-xl text-cream">{s.title}</h3>
                <p className="lede mt-2 text-sm">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <div data-reveal className="mt-20 text-center">
          <Link href="/reserve" className="btn btn-gold">
            Start Planning
          </Link>
        </div>
      </div>
    </>
  );
}
