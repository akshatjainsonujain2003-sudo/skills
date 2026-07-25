"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/**
 * Floating WhatsApp bubble (always) + sticky "Reserve" pill on mobile once
 * the visitor has scrolled past the hero. Hidden on the reserve page itself.
 */
export default function FloatingCtas() {
  const [past, setPast] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onReservePage = pathname === "/reserve";

  return (
    <>
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I'd like to enquire about The Bamboo Nation.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with The Bamboo Nation on WhatsApp"
        className="fixed right-5 bottom-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#1faf57] text-white shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5L9.5 7.1c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.1-.6 3.5a11 11 0 0 0 4.3 4.6c1.6.9 2.6 1.1 3.5.9.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.2-.5Z" />
        </svg>
      </a>

      {!onReservePage && (
        <div
          className={`fixed inset-x-5 bottom-5 z-30 transition-all duration-300 lg:hidden ${
            past ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <Link href="/reserve" className="btn btn-gold w-[calc(100%-4rem)] shadow-[0_8px_28px_rgba(0,0,0,0.45)]">
            Reserve a Table
          </Link>
        </div>
      )}
    </>
  );
}
