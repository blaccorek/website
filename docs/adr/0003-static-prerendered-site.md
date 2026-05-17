# ADR-0003: Static prerendered SvelteKit site

- **Status**: Accepted
- **Date**: 2026-05-17

## Context

The site is a personal CV / portfolio. Content is owned by a single author and
updates ship through the same workflow as code (PR + review). There is no need
for per-request rendering, user accounts, sessions, or a database. Choosing the
deployment model up front avoids accidental coupling to server-only APIs
(cookies, request, locals).

## Decision

Build and deploy as a fully prerendered static site:

- Use `@sveltejs/adapter-static`.
- Set `export const prerender = true` at the root layout
  ([src/routes/+layout.ts](../../src/routes/+layout.ts)), so every route is
  generated at build time.
- All data sources must be resolvable at build time (see
  [ADR-0004](0004-json-content-source.md)).

## Consequences

- **No runtime backend**: no server routes, hooks, or APIs. Anything that would
  need one must be reconsidered against this ADR first.
- **Cheap, fast hosting**: deploys are static assets, cacheable on any CDN.
- **No SSR-only APIs**: `event.request`, `cookies`, `locals`, and form actions
  are off-limits. Interactivity must be client-side only.
- **Build-time data only**: data refreshes require a rebuild + redeploy.
  Acceptable given the content cadence; revisit this ADR if real-time data
  becomes a requirement.
