import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ReservationForm from "@/components/ReservationForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reserve a Table",
  description:
    "Reserve a lagoon-side or rooftop table at The Bamboo Nation, Jaipur. Instant confirmation over WhatsApp.",
  alternates: { canonical: "/reserve" },
};

const notes = [
  { title: "Lagoon-side & rooftop", body: "Tell us where you'd like to sit — we hold the best tables for reservations." },
  { title: "Instant confirmation", body: "Requests go straight to our host desk on WhatsApp; most tables confirm within minutes." },
  { title: "Groups of 10+", body: "Larger tables and celebrations get a dedicated events host — mention it in your note." },
];

export default function ReservePage() {
  return (
    <>
      <PageHeader
        eyebrow="Reservations"
        title={
          <>
            An evening this good deserves a <em className="text-gold">confirmed</em> table.
          </>
        }
        lede={`Open every day, ${site.hours.label.replace(" · Open every day", "").toLowerCase()}. Reserve below or call ${site.phone}.`}
      />

      <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 pb-24 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:pb-36">
        <div data-reveal>
          <ReservationForm />
        </div>

        <aside className="space-y-8 lg:sticky lg:top-28">
          {notes.map((n, i) => (
            <div key={n.title} data-reveal data-reveal-delay={String(i * 90)} className="border-l-2 border-gold/50 pl-6">
              <h2 className="font-display text-xl text-cream">{n.title}</h2>
              <p className="lede mt-2 text-sm">{n.body}</p>
            </div>
          ))}
          <div data-reveal data-reveal-delay="280" className="card p-6">
            <p className="eyebrow">Find us</p>
            <address className="lede mt-3 text-sm not-italic">
              {site.address.street}, {site.address.locality}, {site.address.city} {site.address.postalCode}
            </address>
          </div>
        </aside>
      </div>
    </>
  );
}
