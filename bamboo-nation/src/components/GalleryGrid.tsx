"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "@/lib/site";

/** Masonry gallery with an accessible lightbox (Esc / arrow keys / backdrop click). */
export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((a) => (a === null ? a : (a + dir + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6">
        {gallery.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setActive(i)}
            data-reveal
            data-reveal-delay={String((i % 3) * 80)}
            aria-label={`Open photo: ${g.alt}`}
            className="group block w-full overflow-hidden rounded-xl"
          >
            <Image
              src={g.src}
              alt={g.alt}
              width={720}
              height={1280}
              sizes="(min-width: 768px) 30vw, 45vw"
              className={`w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] ${
                i % 3 === 1 ? "aspect-[3/4]" : i % 3 === 2 ? "aspect-square" : "aspect-[9/13]"
              }`}
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={gallery[active].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
            onClick={close}
          >
            <motion.figure
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="relative max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Full-bleed lightbox image; dimensions come from the source file */}
              <Image
                src={gallery[active].src}
                alt={gallery[active].alt}
                width={720}
                height={1280}
                sizes="90vw"
                className="max-h-[85vh] w-auto rounded-lg object-contain"
                priority
              />
              <figcaption className="mt-3 text-center text-xs text-muted">{gallery[active].alt}</figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border hairline text-cream transition-colors hover:border-gold hover:text-gold"
            >
              ✕
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border hairline text-cream transition-colors hover:border-gold hover:text-gold"
            >
              ←
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border hairline text-cream transition-colors hover:border-gold hover:text-gold"
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
