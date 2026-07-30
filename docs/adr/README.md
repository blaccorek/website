# Architecture Decision Records

This directory holds the architectural decisions that shape this codebase. Each
ADR captures one decision, its context, and its consequences. Read them before
making changes that would contradict them; supersede an ADR with a new one
rather than editing history.

Format:
[Michael Nygard's template](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
— **Status / Context / Decision / Consequences**.

| #    | Title                                                                    | Status                                              |
| ---- | ------------------------------------------------------------------------ | --------------------------------------------------- |
| 0001 | [Atomic design for component organization](0001-atomic-design.md)        | Accepted                                            |
| 0002 | [Co-located component folders](0002-component-folder-layout.md)          | Accepted                                            |
| 0003 | [Static prerendered SvelteKit site](0003-static-prerendered-site.md)     | Accepted                                            |
| 0004 | [JSON files as content source](0004-json-content-source.md)              | Accepted                                            |
| 0005 | [Flowbite Svelte for UI primitives](0005-flowbite-svelte-primitives.md)  | Superseded by [0008](0008-own-component-library.md) |
| 0006 | [Vitest + Playwright test split](0006-test-strategy.md)                  | Accepted                                            |
| 0007 | [Logo-derived brand palette and page shell](0007-brand-design-system.md) | Accepted                                            |
| 0008 | [Own component library](0008-own-component-library.md)                   | Accepted                                            |

## Writing a new ADR

1. Copy the most recent ADR as a template.
2. Number it sequentially (`NNNN-kebab-case-title.md`).
3. Start in `Proposed`; promote to `Accepted` once merged.
4. To replace an existing ADR, set the old one's status to
   `Superseded by ADR-NNNN` and link the new one.
5. Add it to the table above.
