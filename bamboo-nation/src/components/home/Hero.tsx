"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Magnetic from "@/components/Magnetic";
import { site } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-hero-fade], .hero-headline", { opacity: 1, y: 0 });
        return;
      }

      const split = new SplitText(".hero-headline", { type: "lines", linesClass: "hero-line" });
      document.querySelectorAll(".hero-line").forEach((line) => {
        const wrap = document.createElement("div");
        wrap.style.overflow = "hidden";
        line.parentNode?.insertBefore(wrap, line);
        wrap.appendChild(line);
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.set(".hero-headline", { opacity: 1 })
        .from(".hero-line", { yPercent: 110, duration: 1.1, stagger: 0.12, delay: 0.25 })
        .to("[data-hero-fade]", { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, "-=0.55");

      // Gentle parallax: media drifts slower than the page.
      gsap.to("[data-hero-media]", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });

      return () => split.revert();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="grain relative flex min-h-svh items-end overflow-hidden">
      <div data-hero-media className="absolute inset-0 scale-[1.12]">
        <video
          className="h-full w-full object-cover"
          src="/media/hero.mp4"
          poster="/media/poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/30 to-ink" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-40 pb-24 md:px-8 md:pb-28">
        <p data-hero-fade className="eyebrow translate-y-4 opacity-0">
          {site.address.locality} · {site.address.city}
        </p>
        <h1 className="h-display hero-headline mt-5 max-w-4xl text-[clamp(2.75rem,8vw,6rem)] text-cream opacity-0">
          Jaipur&rsquo;s most iconic <em className="text-gold not-italic md:italic md:text-gold">bamboo dining</em>{" "}
          experience.
        </h1>
        <p data-hero-fade className="lede mt-6 max-w-xl translate-y-4 text-base opacity-0 md:text-lg">
          Where architecture, handcrafted vegetarian cuisine, rooftop dining, live music and unforgettable celebrations
          come together.
        </p>
        <div data-hero-fade className="mt-10 flex translate-y-4 flex-wrap items-center gap-4 opacity-0">
          <Magnetic>
            <Link href="/reserve" className="btn btn-gold">
              Reserve a Table
            </Link>
          </Magnetic>
          <Link href="/about" className="btn btn-ghost">
            Explore the Experience
          </Link>
        </div>
      </div>

      <div
        data-hero-fade
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 translate-y-4 opacity-0 md:block"
        aria-hidden
      >
        <div className="h-12 w-px animate-pulse bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
    </section>
  );
}
