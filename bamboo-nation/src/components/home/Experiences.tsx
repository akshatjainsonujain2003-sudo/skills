import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/lib/site";

export default function Experiences() {
  return (
    <section className="border-y hairline bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-36">
        <SectionHeading
          eyebrow="Signature Experiences"
          title={
            <>
              One address, <em className="text-gold">six</em> reasons to stay late.
            </>
          }
          lede="Every corner of the Nation is staged for a different kind of evening — pick yours, or drift between all six."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((x, i) => (
            <li
              key={x.title}
              data-reveal
              data-reveal-delay={String((i % 3) * 90)}
              className="card group transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={x.image}
                  alt={x.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-cream">{x.title}</h3>
                <p className="lede mt-2.5 text-sm">{x.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
