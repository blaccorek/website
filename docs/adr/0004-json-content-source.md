# ADR-0004: JSON files as content source

- **Status**: Accepted
- **Date**: 2026-05-17

## Context

Content (work experiences, schools, technologies) is curated by the owner and
changes infrequently. A headless CMS or remote API would add operational surface
(auth, fetching, caching, downtime) for no real editorial gain at this scale,
and would conflict with the static build model in
[ADR-0003](0003-static-prerendered-site.md).

## Decision

Store content as JSON files in [src/lib/data/](../../src/lib/data/):

- `experiences.json`, `schools.json`, `technologies.json`.
- Loaded through SvelteKit `+page.ts` / `+layout.ts` `load` functions, then
  passed to organisms via `$props()`.
- Schemas live as TypeScript types co-located with the consuming component (see
  [ADR-0002](0002-component-folder-layout.md)).

## Consequences

- **Edits are reviewable**: content changes go through PR, just like code.
- **Strong typing end-to-end**: JSON is consumed by typed load functions and
  typed component props; `svelte-check` catches shape mismatches at build time.
- **No remote dependencies**: builds are reproducible offline.
- **Friction for non-engineers**: editing JSON requires git workflow literacy.
  Acceptable while the site has one author; revisit if contributors without git
  access need to edit content.
