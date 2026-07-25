import type { ReactNode } from "react";

/** Interior-page opener: eyebrow, oversized serif title, optional lede. */
export default function PageHeader({ eyebrow, title, lede }: { eyebrow: string; title: ReactNode; lede?: ReactNode }) {
  return (
    <header className="mx-auto max-w-7xl px-5 pt-40 pb-16 md:px-8 lg:pt-48 lg:pb-24">
      <p data-reveal className="eyebrow">
        {eyebrow}
      </p>
      <h1 data-reveal data-reveal-delay="80" className="h-display mt-5 max-w-4xl text-[clamp(2.5rem,7vw,5rem)] text-cream">
        {title}
      </h1>
      {lede ? (
        <p data-reveal data-reveal-delay="160" className="lede mt-6 max-w-2xl text-base md:text-lg">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
