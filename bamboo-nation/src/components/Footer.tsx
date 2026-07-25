import Link from "next/link";
import { site } from "@/lib/site";

const IconInstagram = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const IconWhatsApp = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5L9.5 7.1c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.1-.6 3.5a11 11 0 0 0 4.3 4.6c1.6.9 2.6 1.1 3.5.9.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.2-.5Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t hairline bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2 lg:pr-16">
          <p className="font-display text-2xl text-cream">
            The Bamboo <span className="italic text-gold">Nation</span>
          </p>
          <p className="lede mt-4 max-w-md text-sm">
            Bamboo architecture, a lagoon lit like festival night and a purely vegetarian kitchen — Jaipur&rsquo;s most
            photographed dining destination.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Bamboo Nation on Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border hairline text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              {IconInstagram}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border hairline text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              {IconWhatsApp}
            </a>
          </div>
        </div>

        <div>
          <h2 className="eyebrow">Visit</h2>
          <address className="lede mt-4 text-sm not-italic">
            {site.address.street}
            <br />
            {site.address.locality}, {site.address.city} {site.address.postalCode}
          </address>
          <p className="lede mt-3 text-sm">{site.hours.label}</p>
          <p className="mt-3 text-sm">
            <a href={`tel:${site.phoneHref}`} className="text-cream/90 transition-colors hover:text-gold">
              {site.phone}
            </a>
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["/about", "About"],
              ["/menu", "Menu"],
              ["/events", "Private Events"],
              ["/gallery", "Gallery"],
              ["/reserve", "Reserve a Table"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-cream/75 transition-colors hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <div className="overflow-hidden rounded-2xl border hairline bg-raised">
          <iframe
            title="Map to The Bamboo Nation, Nirman Nagar, Jaipur"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
            className="h-64 w-full grayscale-[0.4] contrast-[1.05]"
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
        <p className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t hairline pt-6 text-xs text-muted">
          <span>
            © {new Date().getFullYear()} {site.name}, {site.address.city}. All rights reserved.
          </span>
          <span className="font-ui tracking-[0.2em] uppercase">Crafted in bamboo · Lit by lanterns</span>
        </p>
      </div>
    </footer>
  );
}
