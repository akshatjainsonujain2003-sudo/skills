import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/site";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="border-y hairline bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-36">
        <SectionHeading
          align="center"
          eyebrow="Word of Mouth"
          title={
            <>
              1,200+ five-star evenings, <em className="text-gold">and counting</em>.
            </>
          }
        />

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name} data-reveal data-reveal-delay={String(i * 100)} className="card flex flex-col p-8">
              <Stars count={t.rating} />
              <blockquote className="mt-5 grow">
                <p className="font-display text-xl leading-snug text-cream">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <footer className="mt-6 border-t hairline pt-5">
                <p className="font-ui text-sm text-cream">{t.name}</p>
                <p className="mt-1 text-xs text-muted">{t.context}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
