import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p data-reveal className="eyebrow">
        {eyebrow}
      </p>
      <h2 data-reveal data-reveal-delay="80" className="h-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-cream">
        {title}
      </h2>
      {lede ? (
        <p data-reveal data-reveal-delay="160" className="lede mt-5">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
