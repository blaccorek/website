# ADR-0002: Co-located component folders

- **Status**: Accepted
- **Date**: 2026-05-17

## Context

A Svelte component often has three companions: a type definition, a pure helper
or two, and its tests. Spreading these across `src/lib/types/`,
`src/lib/utils/`, and a top-level `tests/` directory makes changes expensive — a
single component change forces edits in three folders, and unused helpers /
orphan tests are easy to overlook when the component itself moves or is deleted.

## Decision

Each non-trivial component lives in its own folder, with siblings co-located:

```
<componentName>/
  index.svelte             ← the component
  <componentName>.svelte.ts ← types and pure helpers (when needed)
  <componentName>.test.ts  ← unit tests for the helpers
```

[src/lib/resume/experienceList/](../../src/lib/resume/experienceList/) is the
canonical example.

Rules:

- One default export per `.svelte` file — the component.
- Pure logic (string formatting, date logic, data shaping) lives in the sibling
  `.svelte.ts`, not inline in `<script>`.
- Types are local to the folder until a second consumer appears; only then do
  they get promoted to a shared location.

## Consequences

- **Atomic changes**: modifying, moving, or deleting a component takes the whole
  folder with it — no orphans.
- **Testable by construction**: extracting helpers into `.svelte.ts` is the
  default, which makes them trivially unit-testable (see
  [ADR-0006](0006-test-strategy.md)).
- **Discoverability**: opening the folder shows the full surface area of the
  component — markup, logic, types, tests — in one place.
- **Cost**: many small folders instead of fewer large files; requires discipline
  to move tests when the component moves.
