import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { menuSections } from "@/lib/site";

/** A taste of the menu: one editorial image + the signature dishes list. */
export default function FeaturedMenu() {
  const signatures = menuSections.flatMap((s) => s.items.slice(0, 2)).slice(0, 6);

  return (
    <section className="mx-auto grid max-w-7xl items-start gap-14 px-5 py-24 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:py-36">
      <div className="lg:sticky lg:top-28">
        <SectionHeading
          eyebrow="From the Kitchen"
          title={
            <>
              Purely vegetarian. <em className="text-gold">Never</em> predictable.
            </>
          }
          lede="Slow dals, charcoal-kissed paneer, wood-fired pizzas and a mocktail bar that takes itself seriously — all of it meat-free by conviction, not compromise."
        />
        <div data-reveal data-reveal-delay="220" className="mt-9">
          <Link href="/menu" className="btn btn-gold">
            Explore the Menu
          </Link>
        </div>
        <figure data-reveal data-reveal-delay="280" className="mt-12 hidden overflow-hidden rounded-2xl lg:block">
          <Image
            src="/media/gallery-b8.jpg"
            alt="The Bamboo Nation food menu on a hand-crafted wooden table"
            width={720}
            height={1280}
            sizes="(min-width: 1024px) 38vw, 92vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </figure>
      </div>

      <ul className="divide-y divide-line border-y hairline">
        {signatures.map((item, i) => (
          <li key={item.name} data-reveal data-reveal-delay={String(i * 60)}>
            <div className="group flex items-baseline gap-4 py-6">
              <h3 className="font-display text-2xl text-cream transition-colors group-hover:text-gold md:text-3xl">
                {item.name}
              </h3>
              <span className="grow border-b border-dotted border-cream/20" aria-hidden />
              <span className="font-ui text-sm text-gold">{item.price}</span>
            </div>
            <p className="lede -mt-4 pb-6 text-sm">{item.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
