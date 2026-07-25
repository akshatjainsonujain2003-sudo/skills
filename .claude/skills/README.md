# Project Design Skills

Claude Code project skills for design and frontend craft. These load automatically for anyone working in this repository with Claude Code.

| Skill | What it does | Source |
| --- | --- | --- |
| [emil-kowalski-design](./emil-kowalski-design/SKILL.md) | Emil Kowalski's design engineering philosophy: animation decisions, easing/duration values, component polish, and the invisible details that make UI feel right. | This repo (`skills/emil-design-eng`), by [Emil Kowalski](https://animations.dev/) |
| [impeccable-design](./impeccable-design/SKILL.md) | Full design-direction toolkit: craft, shape, audit, critique, polish, typeset, colorize, animate, and more, with bundled detector scripts and companion agents (in `../agents/`). | Vendored from [pbakaus/impeccable](https://github.com/pbakaus/impeccable) v4.0.2 (Apache 2.0, see `impeccable-design/LICENSE` and `NOTICE.md`) |
| [taste](./taste/SKILL.md) | Anti-slop frontend skill for landing pages, portfolios, and redesigns: reads the brief, infers the design direction, ships non-templated interfaces. | Vendored from [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) (`design-taste-frontend`, MIT, see `taste/LICENSE`) |

## Notes on the vendored copies

- Each skill's `name` frontmatter was renamed to match its directory (`impeccable`→`impeccable-design`, `design-taste-frontend`→`taste`, `emil-design-eng`→`emil-kowalski-design`).
- All internal `…skills/impeccable/…` path references in the impeccable scripts, reference docs, and agents were rewritten to `…skills/impeccable-design/…` to match the renamed directory.
- Upstream licenses are preserved inside each vendored skill directory. To update a vendored skill, re-vendor from upstream and re-apply the renames above.

## Rough division of labor

- Building something new and want a strong direction → `impeccable-design` (or `taste` for landing pages/portfolios specifically).
- Polishing motion, animation values, and interaction feel → `emil-kowalski-design` (plus the repo's standalone skills in `/skills` for reviews and audits).
