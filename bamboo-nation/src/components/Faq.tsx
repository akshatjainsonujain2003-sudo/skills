"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/site";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <ul className="mx-auto max-w-3xl divide-y divide-line border-y hairline">
      {faqs.map((f, i) => {
        const open = openIdx === i;
        return (
          <li key={f.q} data-reveal data-reveal-delay={String(i * 60)}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-${i}`}
                onClick={() => setOpenIdx(open ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-xl text-cream md:text-2xl">{f.q}</span>
                <span
                  className={`shrink-0 font-display text-2xl text-gold transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${open ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`faq-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden"
                >
                  <p className="lede pb-6 text-sm md:text-base">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
