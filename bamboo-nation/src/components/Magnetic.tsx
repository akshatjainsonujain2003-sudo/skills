"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";

/**
 * Magnetic hover wrapper — the child drifts a few pixels toward the pointer.
 * Pointer-fine devices only; decorative, so it stays subtle.
 */
export default function Magnetic({ children, strength = 0.25 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - r.left - r.width / 2) * strength,
      y: (e.clientY - r.top - r.height / 2) * strength,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    if (ref.current) gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
  };

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className="inline-block">
      {children}
    </div>
  );
}
