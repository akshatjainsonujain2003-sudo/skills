import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find The Bamboo Nation in Nirman Nagar, Jaipur — directions, opening hours, phone, WhatsApp and Instagram.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Come find the <em className="text-gold">lanterns</em>.
          </>
        }
        lede="Just off Ajmer Road in Nirman Nagar — ten minutes from Vaishali Nagar, with parking at the gate."
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 md:px-8 lg:grid-cols-2 lg:gap-20 lg:pb-36">
        <div className="space-y-10">
          <div data-reveal>
            <h2 className="eyebrow">Address</h2>
            <address className="font-display mt-4 text-2xl leading-snug text-cream not-italic md:text-3xl">
              {site.address.street},<br />
              {site.address.locality}, {site.address.city} — {site.address.postalCode}
            </address>
          </div>

          <div data-reveal data-reveal-delay="80">
            <h2 className="eyebrow">Hours</h2>
            <p className="lede mt-4">{site.hours.label}</p>
            <p className="lede mt-1 text-sm">Live music on weekend evenings — arrive before sundown for the lagoon lighting.</p>
          </div>

          <div data-reveal data-reveal-delay="160">
            <h2 className="eyebrow">Talk to us</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:${site.phoneHref}`} className="font-display text-2xl text-cream transition-colors hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lede underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                >
                  Message us on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lede underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                >
                  @thebamboonation_ on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div data-reveal data-reveal-delay="140" className="flex flex-col overflow-hidden rounded-2xl border hairline bg-raised">
          <iframe
            title="Map to The Bamboo Nation, Nirman Nagar, Jaipur"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
            className="min-h-[26rem] w-full grow grayscale-[0.4] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-t hairline px-5 py-3.5 text-center font-ui text-xs tracking-[0.18em] text-cream/75 uppercase transition-colors hover:text-gold"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>
    </>
  );
}
