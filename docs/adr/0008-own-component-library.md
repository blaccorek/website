# ADR-0008: Own component library instead of Flowbite Svelte

- **Status**: Accepted
- **Date**: 2026-07-30
- **Supersedes**: [ADR-0005](0005-flowbite-svelte-primitives.md)

## Context

[ADR-0005](0005-flowbite-svelte-primitives.md) adopted Flowbite Svelte to avoid
hand-writing primitives. In practice this site uses eleven of its components,
each of them a thin wrapper over one or two HTML tags — `Heading`, `P`, `A`,
`Img`, `List`, `Li`, `Blockquote`, `Footer`, `Listgroup`, `Timeline`, `Avatar`,
`Tooltip`. What the library actually bought us was small, and the cost was
visible:

- **Styling by override.** Every visual decision arrived as a long `class`
  string fighting the component's defaults (`me-0 md:me-0`, `rounded-none`,
  `bg-transparent p-0 shadow-none`) — the exact "don't override internals" rule
  ADR-0005 set was impossible to keep.
- **Markup we couldn't shape.** `Timeline` dictated its rail, marker offsets and
  date format; matching the design in [ADR-0007](0007-brand-design-system.md)
  meant working against it.
- **Weight and coupling for a static CV site.** Flowbite's CSS plugin plus two
  `@source` globs pulled the library's whole utility surface into the build, and
  every upgrade risked prop/slot migrations on components we barely used.
- **A11y we didn't control.** `Avatar` + `Tooltip` produced a hover-only,
  JS-driven label for each technology, where a plain visible label is better.

## Decision

Drop `flowbite`, `flowbite-svelte` and `flowbite-svelte-icons`. Build the
primitives in-repo, under the layers of [ADR-0001](0001-atomic-design.md):

| Layer     | Component                                                                       |
| --------- | ------------------------------------------------------------------------------- |
| Atoms     | `heading`, `text`, `link`, `image`, `bulletList`, `icon`, `quote`               |
| Molecules | `navBar`, `timeline` (+ `timelineItem`), `technologyChip`, `identity`, `footer` |

Rules that keep this from growing into a framework:

- **An atom is one tag plus classes.** If it needs state or effects, it isn't an
  atom.
- **Variants are named, not free-form.** A component exposes a small union
  (`variant="accent" | "quiet"`, `level={1..4}`, `size`), resolved by a pure
  function in the sibling `.svelte.ts` and unit-tested
  ([ADR-0002](0002-component-folder-layout.md),
  [ADR-0006](0006-test-strategy.md)). Callers pass `class` only for layout
  (spacing, width), never to repaint.
- **Icons are local paths.** `icon.svelte.ts` holds stroke paths on a 24×24
  grid; no icon package.
- **Every anchor goes through the `link` atom.** It is the one place that adds
  `rel="noopener noreferrer"` to external URLs and the only file exempt from
  `svelte/no-navigation-without-resolve` — so a raw `<a href>` elsewhere fails
  lint, which is how the base-path bugs get caught.
- **Build a component when the third duplicate appears**, not on the first.

`@tailwindcss/forms` and `@tailwindcss/typography` were removed at the same
time: the site has no form and no `prose` block.

## Consequences

- **The design system is ours end to end**:
  [ADR-0007](0007-brand-design-system.md) now describes markup we control, so a
  visual change is an edit, not an override.
- **Fewer dependencies to track**: five packages left the manifest, and with
  them the Flowbite plugin and its `@source` globs; the CSS bundle is ~32 kB
  unminified for the whole site.
- **We own the a11y**: focus rings, `aria-current`, decorative-vs-labelled
  images and the skip link are now explicit choices in our own markup — and
  nothing hides a mistake, so role-based Playwright specs matter more than
  before.
- **We also own the gaps**: anything Flowbite would have given us for free
  (modals, dropdowns, carousels, focus trapping) is work if the site ever needs
  it. If several such components pile up, revisit this decision rather than
  hand-rolling them one by one.
- **More files**: seven atom folders where there used to be one import line.
  Justified by ADR-0002's co-location; not justified if atoms start wrapping
  atoms wrapping atoms.
