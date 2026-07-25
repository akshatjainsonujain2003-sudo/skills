import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Story from "@/components/home/Story";
import Experiences from "@/components/home/Experiences";
import Stats from "@/components/home/Stats";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import GalleryPreview from "@/components/home/GalleryPreview";
import EventsSection from "@/components/home/EventsSection";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/Faq";
import ReserveCta from "@/components/home/ReserveCta";
import { faqs } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <TrustStrip />
      <Story />
      <Experiences />
      <div className="py-24 lg:py-32">
        <Stats />
      </div>
      <FeaturedMenu />
      <GalleryPreview />
      <EventsSection />
      <Testimonials />
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-36">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p data-reveal className="eyebrow">
            Good to Know
          </p>
          <h2 data-reveal data-reveal-delay="80" className="h-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-cream">
            Questions, answered.
          </h2>
        </div>
        <Faq />
      </section>
      <ReserveCta />
    </>
  );
}
