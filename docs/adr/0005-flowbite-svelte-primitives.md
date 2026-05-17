# ADR-0005: Flowbite Svelte for UI primitives

- **Status**: Accepted
- **Date**: 2026-05-17

## Context

The project needs UI primitives — headings, buttons, lists, links, avatars,
timelines, footers, tooltips, list-groups — and a coherent look. Building these
from scratch costs time and is error-prone for a11y; pulling in a heavy headless
library (Radix, Headless UI) still leaves styling work. Tailwind CSS is already
adopted for utility styling.

## Decision

Use **Flowbite Svelte** (and `flowbite-svelte-icons`) as the primitive layer.
Tailwind utilities handle layout and one-off styling on top.

Operating rules:

- Atoms (see [ADR-0001](0001-atomic-design.md)) typically wrap a Flowbite
  component to give it a project-specific name and constrain its API.
- Don't write a bespoke styled component for something Flowbite already provides
  (Heading, P, A, List, Timeline, Avatar, Tooltip, …).
- Don't override Flowbite internals via deep selectors; pass props or wrap.

## Consequences

- **Faster delivery**: primitives, icons, and dark-mode support come out of the
  box and stay consistent.
- **Less design freedom**: bespoke visuals require either composing Flowbite
  parts or accepting a deviation, which must be justified.
- **Locked to the library's pace**: Flowbite Svelte upgrades may require prop or
  import migrations (e.g. `cornerStyle`, slot APIs). Track the changelog when
  bumping.
- **Bundle cost**: Flowbite ships CSS and JS for components even when only a
  subset is used; acceptable for a small static site.
