import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import ReserveCta from "@/components/home/ReserveCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of The Bamboo Nation, Jaipur — the guardian sculpture, illuminated lagoon, bamboo pavilion, cabanas and rooftop after dark.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Gallery"
        title={
          <>
            Golden hour lasts <em className="text-gold">all night</em> here.
          </>
        }
        lede={
          <>
            A walk through the Nation after dark. For today&rsquo;s stories, find us on{" "}
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              Instagram
            </a>
            .
          </>
        }
      />

      <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8 lg:pb-36">
        <GalleryGrid />
      </div>

      <ReserveCta />
    </>
  );
}
