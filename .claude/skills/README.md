# Project Design Skills

Claude Code project skills for design and frontend craft. These load automatically for anyone working in this repository with Claude Code.

| Skill | What it does | Source |
| --- | --- | --- |
| [emil-kowalski-design](./emil-kowalski-design/SKILL.md) | Emil Kowalski's design engineering philosophy: animation decisions, easing/duration values, component polish, and the invisible details that make UI feel right. | This repo (`skills/emil-design-eng`), by [Emil Kowalski](https://animations.dev/) |
| [impeccable-design](./impeccable-design/SKILL.md) | Full design-direction toolkit: craft, shape, audit, critique, polish, typeset, colorize, animate, and more, with bundled detector scripts and companion agents (in `../agents/`). | Vendored from [pbakaus/impeccable](https://github.com/pbakaus/impeccable) v4.0.2 (Apache 2.0, see `impeccable-design/LICENSE` and `NOTICE.md`) |
| [taste](./taste/SKILL.md) | Anti-slop frontend skill for landing pages, portfolios, and redesigns: reads the brief, infers the design direction, ships non-templated interfaces. | Vendored from [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) (`design-taste-frontend`, MIT, see `taste/LICENSE`) |
| [premium-website-designer](./premium-website-designer/SKILL.md) | End-to-end premium website workflow: brand discovery → strategy → creative direction → UX → copy → visual design → motion → development → performance → QA, with a fixed output order. | Authored for this repo |
| [frontend-design](./frontend-design/SKILL.md) | Anthropic's guidance for distinctive, intentional visual design — aesthetic direction, typography, and avoiding templated defaults. | Vendored from [anthropics/skills](https://github.com/anthropics/skills) (Apache 2.0, see `frontend-design/LICENSE.txt`) |
| [theme-factory](./theme-factory/SKILL.md) | Toolkit for styling artifacts (slides, docs, landing pages) with 10 pre-set themes or on-the-fly generated ones. | Vendored from [anthropics/skills](https://github.com/anthropics/skills) (Apache 2.0, see `theme-factory/LICENSE.txt`) |
| [web-artifacts-builder](./web-artifacts-builder/SKILL.md) | Tooling for elaborate multi-component claude.ai HTML artifacts (React, Tailwind, shadcn/ui) with state management and routing. | Vendored from [anthropics/skills](https://github.com/anthropics/skills) (Apache 2.0, see `web-artifacts-builder/LICENSE.txt`) |
| [web-design-guidelines](./web-design-guidelines/SKILL.md) | Reviews UI code against Vercel's Web Interface Guidelines: accessibility, UX, and best-practice compliance. | Vendored from [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT per repo README) |
| [writing-guidelines](./writing-guidelines/SKILL.md) | Vercel's guidelines for clear, confident interface and marketing copy. | Vendored from [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT per repo README) |
| [react-view-transitions](./react-view-transitions/SKILL.md) | Using the View Transitions API in React for page and element transitions. | Vendored from [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT per repo README; renamed from `vercel-react-view-transitions`) |
| [gsap-core](./gsap-core/SKILL.md), [gsap-timeline](./gsap-timeline/SKILL.md), [gsap-scrolltrigger](./gsap-scrolltrigger/SKILL.md), [gsap-react](./gsap-react/SKILL.md), [gsap-frameworks](./gsap-frameworks/SKILL.md), [gsap-plugins](./gsap-plugins/SKILL.md), [gsap-utils](./gsap-utils/SKILL.md), [gsap-performance](./gsap-performance/SKILL.md) | GreenSock's official GSAP skills: core tweens, timelines, ScrollTrigger, React integration, framework setups, plugins, utility methods, and performance. | Vendored from [greensock/gsap-skills](https://github.com/greensock/gsap-skills) (MIT, LICENSE in each directory) |
| [modern-web-design](./modern-web-design/SKILL.md) | Modern web design patterns and trends for polished, production sites. | Vendored from [freshtechbro/claudedesignskills](https://github.com/freshtechbro/claudedesignskills) (MIT, LICENSE in directory) |
| [motion-framer](./motion-framer/SKILL.md) | Motion (Framer Motion) patterns: variants, gestures, layout animations, springs. | Vendored from [freshtechbro/claudedesignskills](https://github.com/freshtechbro/claudedesignskills) (MIT, LICENSE in directory) |

## MCP servers

`.mcp.json` at the repo root registers two design-focused MCP servers:

- **shadcn-ui** ([Jpisnice/shadcn-ui-mcp-server](https://github.com/Jpisnice/shadcn-ui-mcp-server)) — fetches shadcn/ui component source, demos, and metadata. Works without configuration; set `GITHUB_PERSONAL_ACCESS_TOKEN` to raise GitHub rate limits.
- **magic** ([21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp)) — AI UI component generation from 21st.dev. Requires a `TWENTYFIRST_API_KEY` environment variable ([get one here](https://21st.dev/magic/console)).

## Considered but not vendored

- [get-convex/agent-skills](https://github.com/get-convex/agent-skills) — Convex backend skills (quickstart, auth, components, performance). Backend rather than design, and the repo carries no license, so install it into a Convex project directly: `npx skills add get-convex/agent-skills`.
- The rest of [freshtechbro/claudedesignskills](https://github.com/freshtechbro/claudedesignskills) — 20 more skills covering Three.js, React Three Fiber, Babylon.js, WebXR, Lottie, Rive, Spline, and other 3D/motion libraries. Installable per-skill via its plugin marketplace: `/plugin marketplace add freshtechbro/claudedesignskills`.
- `canvas-design`, `algorithmic-art`, `brand-guidelines` from [anthropics/skills](https://github.com/anthropics/skills) — poster/generative art and Anthropic-specific branding, off-theme for website/UI work.

## Notes on the vendored copies

- Each skill's `name` frontmatter was renamed to match its directory (`impeccable`→`impeccable-design`, `design-taste-frontend`→`taste`, `emil-design-eng`→`emil-kowalski-design`).
- All internal `…skills/impeccable/…` path references in the impeccable scripts, reference docs, and agents were rewritten to `…skills/impeccable-design/…` to match the renamed directory.
- Upstream licenses are preserved inside each vendored skill directory. To update a vendored skill, re-vendor from upstream and re-apply the renames above.

## Rough division of labor

- Building a complete website from a business brief → `premium-website-designer` for the full agency-style process.
- Setting an aesthetic direction that doesn't look templated → `frontend-design`; theming an existing artifact/deck/page → `theme-factory`; complex React/shadcn claude.ai artifacts → `web-artifacts-builder`.
- Implementing animation with a specific library → the `gsap-*` skills (GreenSock official) or `motion-framer`; React View Transitions API → `react-view-transitions`.
- Auditing a finished UI against best practices → `web-design-guidelines`; reviewing site copy → `writing-guidelines`.
- Component sourcing → the `shadcn-ui` and `magic` MCP servers in `.mcp.json`.
- Building something new and want a strong direction → `impeccable-design` (or `taste` for landing pages/portfolios specifically).
- Polishing motion, animation values, and interaction feel → `emil-kowalski-design` (plus the repo's standalone skills in `/skills` for reviews and audits).
