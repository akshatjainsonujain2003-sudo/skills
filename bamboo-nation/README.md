# The Bamboo Nation — Website

Premium marketing site for **The Bamboo Nation**, a bamboo-themed vegetarian restaurant, café, rooftop and events venue in Nirman Nagar, Jaipur.

Dark-luxury editorial design built around the venue's own footage: the hand-sculpted guardian, the illuminated lagoon and the two-storey bamboo pavilion.

## Stack

- **Next.js 16** (App Router, TypeScript, fully static output)
- **Tailwind CSS 4** — design tokens in `src/app/globals.css`
- **GSAP + ScrollTrigger + SplitText** — hero line reveal, scroll reveals, parallax, counters
- **Lenis** — smooth scrolling (disabled under `prefers-reduced-motion`)
- **Framer Motion** — mobile menu, FAQ accordion, gallery lightbox
- **React Hook Form** — reservation form, submitting via WhatsApp deep link (no backend needed)

## Structure

- `src/lib/site.ts` — **all content and business facts** (address, phone, hours, menu, testimonials, gallery alt text). Edit this file to update the site.
- `src/app/*` — routes: home, about, menu, events, gallery, reserve, contact (+ `sitemap.ts`, `robots.ts`)
- `src/components/*` — nav, footer, motion utilities, forms, gallery
- `public/media/*` — hero/ambience loops and stills, compressed from the venue's reels

## Develop

```bash
npm install
npm run dev
```

## Before launch

- [ ] Verify opening hours and menu items/prices in `src/lib/site.ts` (currently representative).
- [ ] Replace the curated testimonial quotes with verbatim Google reviews.
- [ ] Point the domain at the deployment and confirm `site.url`.
- [ ] Swap in higher-resolution photography/video when available — current media is extracted from 720p reels (art-directed to work at this size, but originals will look even better).

SEO ships with Restaurant + FAQ JSON-LD, Open Graph/Twitter cards, sitemap and robots.
