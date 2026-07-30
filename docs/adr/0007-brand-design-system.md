# ADR-0007: Logo-derived brand palette and page shell

- **Status**: Accepted
- **Date**: 2026-07-30

## Context

The site shipped with Tailwind's stock teal as `primary` and stock green as
`secondary`, neither of which matches the Blaccorek logo. Text colours were
declared as loose `--text-*-light` / `--text-*-dark` variables that Tailwind 4
never turns into utilities, so they were dead weight, and components reached for
whichever shade looked right — some of them below the WCAG AA contrast floor on
white.

Layout had the same drift: each page carried its own `p-8` wrapper and its own
`<main>`, so the shell (width, padding, card surface) was re-decided per route
and diverged between them. Dark mode was wired to a `.dark` class that nothing
ever sets, so it was unreachable in a site with no theme toggle.

The visual refresh needed a single place to answer "which green, which surface,
how wide" — otherwise every new component re-litigates it.

## Decision

**One palette, derived from the logo.** `primary` is generated from the logo
green `#00c26c` (kept as `primary-500`), `secondary` from the logo's ink as a
desaturated slate. Both live in the `@theme` block of
[src/app.css](../../src/app.css) and are the only source of brand colour —
components use `primary-*` / `secondary-*` utilities, never raw hex.

Contrast is fixed by convention rather than checked case by case:

- on light surfaces, brand text uses `primary-700` (or `600`);
- on dark surfaces, brand text uses `primary-400` (or `300`);
- `primary-500` is for non-text marks — rules, markers, focus rings, dot
  indicators — where contrast rules don't apply.

**Dark mode follows the OS.** The `dark` variant is redefined to match both a
`.dark` ancestor and `prefers-color-scheme: dark` (unless a `.light` ancestor
opts out). No toggle, no persisted preference, nothing to hydrate — consistent
with the no-backend stance of [ADR-0003](0003-static-prerendered-site.md).

**The shell lives in the layout, not the pages.** `+layout.svelte` owns the
header, the nav, the `max-w-5xl` measure, the horizontal padding, and the single
`<main>` card. Route components render content sections only — no `<main>`, no
width, no page padding.

**Global base rules over repeated utilities.** `::selection` and
`:focus-visible` are styled once in `@layer base` so focus is visible on every
interactive element, whatever renders it, and a reduced-motion block neutralises
transitions for visitors who ask for it.

## Consequences

- **A brand change is one edit**: re-deriving the palette in `@theme` repaints
  the site; no component holds a colour of its own.
- **Contrast stops being a judgement call**: the shade-per-surface rule is short
  enough to follow without a checker, and reviewers can spot a violation by
  reading the class name.
- **Dark mode is now live for most visitors**, which means every new surface has
  to declare its `dark:` counterpart — a light-only component is now a visible
  bug rather than dormant code.
- **Pages get shorter but less autonomous**: a route that genuinely needs a
  different measure or a full-bleed section has to change the layout or opt out
  of the card, and should say why.
- **`secondary` is currently near-unused**. It is defined so accents have
  somewhere to go that doesn't compete with the green; if it stays unused it
  should be deleted rather than kept "just in case".
- **The palette is only as good as its consumers**: with the components now
  written in-repo ([ADR-0008](0008-own-component-library.md)), a shade chosen by
  hand in one component is the failure mode to watch for in review.
