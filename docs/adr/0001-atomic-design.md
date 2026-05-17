# ADR-0001: Atomic design for component organization

- **Status**: Accepted
- **Date**: 2026-05-17

## Context

The site is small but growing, and components mix in responsibility:
some wrap a single Flowbite primitive, others compose domain-aware sections
(work experience, education, expertise). Without a stated convention,
files drift into `src/lib/` flat and dependencies between them become
unprincipled — molecules importing organisms, organisms reaching into each
other's internals — which makes reuse and refactoring expensive.

## Decision

Organize `src/lib/` and `src/routes/` by **atomic design** layers:

| Layer       | Definition                                                          | Location                              |
|-------------|---------------------------------------------------------------------|---------------------------------------|
| Atoms       | Single-purpose, stateless wrappers around a primitive or HTML tag.  | `src/lib/atoms/`                      |
| Molecules   | 2–5 atoms composed for one small, domain-agnostic job.              | `src/lib/molecules/`                  |
| Organisms   | Domain-aware composites that own a chunk of UI.                     | `src/lib/<domain>/<organism>/`        |
| Templates   | Page-shaped layouts with slots — no real data, only shape.          | `src/routes/+layout.svelte`           |
| Pages       | Route entry points; wire load data to organisms.                    | `src/routes/**/+page.svelte`          |

Dependency direction is strictly downward: a component may only import from
its own layer or below.

## Consequences

- **Predictable placement**: contributors know where a new component goes
  before writing it; reviewers can flag mis-layered code.
- **Reusable atoms / molecules**: by forbidding upward imports, the lower
  layers stay domain-agnostic and reusable.
- **Organisms own their domain**: they may receive load data via `$props()`
  but must not call `load` themselves — that responsibility stays with the
  page (see [ADR-0003](0003-static-prerendered-site.md)).
- **Cost**: introduces directory boilerplate even for small components, and
  requires occasional refactoring when a "molecule" grows enough domain
  awareness to become an organism.
