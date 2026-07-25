"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global scroll-reveal driver. Any element with `data-reveal` fades and rises
 * in when it enters the viewport; `data-reveal-delay` (ms) staggers siblings.
 * Runs once per element, re-scans on route change.
 */
export default function RevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = gsap.utils.toArray<HTMLElement>("[data-reveal]:not(.is-visible)");

    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const triggers = els.map((el) => {
      const delay = Number(el.dataset.revealDelay ?? 0) / 1000;
      return ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              delay,
              ease: "power3.out",
              clearProps: "transform",
              onStart: () => el.classList.add("is-visible"),
            },
          );
        },
      });
    });

    // Recalculate positions after media loads shift layout.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      triggers.forEach((t) => t.kill());
      window.removeEventListener("load", onLoad);
    };
  }, [pathname]);

  return null;
}
