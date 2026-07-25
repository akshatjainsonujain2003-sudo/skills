import Link from "next/link";
import { site } from "@/lib/site";

/** Final conversion band — full-bleed still, one message, two actions. */
export default function ReserveCta() {
  return (
    <section className="grain relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/media/gallery-a42.jpg)" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center md:px-8 lg:py-40">
        <p data-reveal className="eyebrow">
          Evenings fill fast
        </p>
        <h2 data-reveal data-reveal-delay="80" className="h-display mt-5 text-[clamp(2.25rem,5.5vw,4rem)] text-cream">
          Your table by the lagoon is <em className="text-gold">waiting</em>.
        </h2>
        <p data-reveal data-reveal-delay="160" className="lede mx-auto mt-5 max-w-xl">
          Reserve in under a minute — or say hello on WhatsApp and we&rsquo;ll plan the whole evening with you.
        </p>
        <div data-reveal data-reveal-delay="240" className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/reserve" className="btn btn-gold">
            Reserve a Table
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I'd like to book a table at The Bamboo Nation.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
