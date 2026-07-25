import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ReserveCta from "@/components/home/ReserveCta";
import { menuSections, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "A purely vegetarian menu at The Bamboo Nation, Jaipur — slow dals, charcoal paneer, wood-fired pizzas, pan-Asian plates and an ambitious mocktail bar.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Kitchen"
        title={
          <>
            Vegetarian by <em className="text-gold">conviction</em>.
          </>
        }
        lede="Indian classics given time, pan-Asian plates given fire, and a mocktail bar given free rein. A taste of the current menu — the full carte waits at your table."
      />

      <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8 lg:pb-36">
        <figure data-reveal className="overflow-hidden rounded-2xl">
          <Image
            src="/media/gallery-a12.jpg"
            alt="Lagoon-side tables seen from above at night"
            width={720}
            height={1280}
            sizes="92vw"
            priority
            className="aspect-[21/9] w-full object-cover object-[50%_30%]"
          />
        </figure>

        <div className="mt-20 grid gap-16 lg:grid-cols-3 lg:gap-10">
          {menuSections.map((section, si) => (
            <section key={section.name} aria-labelledby={`menu-${si}`}>
              <h2 id={`menu-${si}`} data-reveal className="flex items-baseline gap-4">
                <span className="font-display text-3xl text-cream">{section.name}</span>
                <span className="grow border-b hairline" aria-hidden />
              </h2>
              <ul className="mt-8 space-y-7">
                {section.items.map((item, i) => (
                  <li key={item.name} data-reveal data-reveal-delay={String(i * 60)}>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl text-cream">{item.name}</h3>
                      <span className="font-ui text-sm whitespace-nowrap text-gold">{item.price}</span>
                    </div>
                    <p className="lede mt-1 text-sm">{item.note}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p data-reveal className="lede mx-auto mt-20 max-w-xl text-center text-sm">
          Dishes change with the seasons and the market. For allergies or Jain preparations, call{" "}
          <a href={`tel:${site.phoneHref}`} className="text-gold hover:underline">
            {site.phone}
          </a>{" "}
          and the kitchen will cook around you.
        </p>
      </div>

      <ReserveCta />
    </>
  );
}
