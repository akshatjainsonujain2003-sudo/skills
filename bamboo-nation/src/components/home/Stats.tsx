"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

/** Animated counters — numbers count up once when scrolled into view. */
export default function Stats() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        if (reduce) {
          el.textContent = String(target);
          return;
        }
        const state = { v: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(state, {
              v: target,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = String(Math.round(state.v));
              },
            }),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="mx-auto max-w-7xl px-5 md:px-8">
      <dl className="grid grid-cols-2 gap-y-10 border-y hairline py-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} data-reveal data-reveal-delay={String(i * 80)} className="text-center">
            <dd className="font-display text-5xl text-cream">
              <span data-count={s.value}>0</span>
              <span className="text-gold">{s.suffix}</span>
            </dd>
            <dt className="mt-2 font-ui text-[0.6875rem] tracking-[0.24em] text-muted uppercase">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
