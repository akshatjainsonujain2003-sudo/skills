import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { gallery } from "@/lib/site";

export default function GalleryPreview() {
  const picks = [gallery[0], gallery[1], gallery[3], gallery[6]];

  return (
    <section className="border-y hairline bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The Gallery"
            title={
              <>
                Bring a camera. <em className="text-gold">Everyone</em> does.
              </>
            }
          />
          <div data-reveal>
            <Link href="/gallery" className="btn btn-ghost">
              View Full Gallery
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {picks.map((g, i) => (
            <Link
              key={g.src}
              href="/gallery"
              data-reveal
              data-reveal-delay={String(i * 90)}
              className={`group relative overflow-hidden rounded-xl ${i % 2 === 1 ? "lg:translate-y-10" : ""}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                width={720}
                height={1280}
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
