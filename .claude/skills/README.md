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

## Notes on the vendored copies

- Each skill's `name` frontmatter was renamed to match its directory (`impeccable`→`impeccable-design`, `design-taste-frontend`→`taste`, `emil-design-eng`→`emil-kowalski-design`).
- All internal `…skills/impeccable/…` path references in the impeccable scripts, reference docs, and agents were rewritten to `…skills/impeccable-design/…` to match the renamed directory.
- Upstream licenses are preserved inside each vendored skill directory. To update a vendored skill, re-vendor from upstream and re-apply the renames above.

## Rough division of labor

- Building a complete website from a business brief → `premium-website-designer` for the full agency-style process.
- Setting an aesthetic direction that doesn't look templated → `frontend-design`; theming an existing artifact/deck/page → `theme-factory`; complex React/shadcn claude.ai artifacts → `web-artifacts-builder`.
- Building something new and want a strong direction → `impeccable-design` (or `taste` for landing pages/portfolios specifically).
- Polishing motion, animation values, and interaction feel → `emil-kowalski-design` (plus the repo's standalone skills in `/skills` for reviews and audits).
