# ADR-0006: Vitest + Playwright test split

- **Status**: Accepted
- **Date**: 2026-05-17

## Context

Tests need to cover two distinct concerns: (a) pure logic — formatters,
date / title builders, data shaping — where fast feedback and many tiny
cases matter, and (b) user-visible behaviour across whole pages — what the
visitor sees and can click. Conflating them in one tool either makes unit
feedback slow or makes UI assertions brittle and shallow.

## Decision

Use two tools, each for one purpose:

- **Vitest** for unit tests on pure functions, co-located as
  `*.test.ts` next to the source. Config in [vite.config.ts](../../vite.config.ts):
  `include: ['src/**/*.{test,spec}.{js,ts}']`. Run with `npm run test:unit`.
- **Playwright** for integration / UI tests, kept under
  [tests/](../../tests/). Config in [playwright.config.ts](../../playwright.config.ts) —
  runs against `npm run build && npm run preview` on port 4173.
  Run with `npm run test:integration`.

Conventions:

- Complex inline logic in a `<script>` block is **extracted into a
  `.svelte.ts` helper** and unit-tested. This is enabled by the folder
  layout in [ADR-0002](0002-component-folder-layout.md).
- Playwright tests query by **accessible role** (`getByRole`, `getByText`),
  never by CSS class or test-id — selectors are brittle and roles double
  as accessibility checks.
- A page is "tested" when its `<title>`, primary headings, and navigation
  affordances are asserted.

## Consequences

- **TDD on pure logic is cheap**: Vitest watch mode gives sub-second
  feedback; tests live next to code so they don't rot.
- **UI tests stay shallow but meaningful**: Playwright covers user-visible
  behaviour, not implementation details — refactors that preserve UX don't
  break tests.
- **Accessibility is a side-effect of testability**: role-based queries
  fail when ARIA / semantics are wrong, so a11y regressions surface as
  test failures.
- **Two runners**: contributors must know both tools; the `npm run test`
  script bundles them so CI and local "is it green?" stays one command.
