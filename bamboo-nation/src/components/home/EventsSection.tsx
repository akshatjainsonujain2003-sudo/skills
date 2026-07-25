import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { events } from "@/lib/site";

export default function EventsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-36">
      <SectionHeading
        align="center"
        eyebrow="Celebrations"
        title={
          <>
            The backdrop your <em className="text-gold">occasion</em> deserves.
          </>
        }
        lede="From a table for two to a takeover for two hundred — our events team stages it, hosts it and photographs beautifully."
      />

      <ol className="mx-auto mt-16 max-w-3xl">
        {events.map((e, i) => (
          <li key={e.title} data-reveal data-reveal-delay={String(i * 60)} className="group border-b hairline">
            <div className="flex items-baseline gap-6 py-7 md:gap-10">
              <span className="font-ui text-xs text-gold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-2xl text-cream transition-colors group-hover:text-gold md:text-3xl">
                  {e.title}
                </h3>
                <p className="lede mt-2 text-sm">{e.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-12 text-center">
        <Link href="/events" className="btn btn-gold">
          Plan Your Event
        </Link>
      </div>
    </section>
  );
}
