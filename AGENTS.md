# AGENTS.md

Operating guide for AI coding agents working in this repository. Read this
before making changes — it captures the conventions humans expect here.

## 1. Project snapshot

Personal CV / portfolio site for Tsiorintsoa Andriamihamina (DevOps consultant).

- **Framework**: SvelteKit 2 + Svelte 5 (runes API — `$props`, `$derived`, `$state`)
- **Adapter**: `@sveltejs/adapter-static` — fully prerendered, no SSR at runtime
- **Styling**: Tailwind CSS 4 (via `@tailwindcss/vite`) + Flowbite Svelte components
- **Language**: TypeScript (strict via `@tsconfig/svelte`)
- **Tests**: Vitest (unit) + Playwright (integration / UI)
- **Lint / format**: ESLint flat config + Prettier (tab width 4, single quotes,
  no trailing commas)

Data lives in [src/lib/data/](src/lib/data/) as JSON (`experiences.json`,
`schools.json`, `technologies.json`) and is loaded through SvelteKit
`+page.ts` / `+layout.ts` load functions.

## 2. Atomic design

Components in [src/lib/](src/lib/) follow atomic design. When adding or moving
a component, place it at the layer that matches its responsibility — not at
the layer where it happens to be used first.

| Layer | Definition | Lives in | Examples |
|---|---|---|---|
| **Atoms** | Single-purpose, stateless, no app data. Wrap a Flowbite primitive or a raw HTML element. | `src/lib/atoms/` | `Button`, `Avatar`, `Heading`, `Tooltip` wrappers |
| **Molecules** | 2–5 atoms composed for one small job. Still domain-agnostic. | `src/lib/molecules/` | `TechnologyIcon` (Avatar + Tooltip), labelled field, icon-with-label |
| **Organisms** | Domain-aware composites that own a chunk of the UI. May fetch derived data via `$derived`. | `src/lib/resume/<organism>/` | `experienceList`, `educationList`, `expertise`, `identity` |
| **Templates** | Page-shaped layouts with slots — no real data, only shape. | `src/routes/+layout.svelte` and any future `templates/` | the root layout chrome |
| **Pages** | Route entry points. Wire load data to organisms. Keep markup thin. | `src/routes/**/+page.svelte` | `/`, `/experience`, `/education` |

### Folder convention per component

Each non-trivial component is its own folder containing:

```
<componentName>/
  index.svelte            ← the component
  <componentName>.svelte.ts ← types and pure helpers (when needed)
  <componentName>.test.ts ← unit tests for the helpers (when there are any)
```

See [src/lib/resume/experienceList/](src/lib/resume/experienceList/) as the
canonical example. Co-locate types and helpers next to the component that
owns them; only promote shared types into `src/lib/` when a second consumer
appears.

### Rules of thumb

- An atom never imports a molecule or organism.
- A molecule never imports an organism.
- Organisms never reach into another organism's internals — recompose via
  atoms / molecules instead.
- If a component needs route data, it is an organism rendered by a page; it
  must receive that data through `$props()`, never call `load` itself.
- One default export per `.svelte` file (the component). Helpers go in the
  sibling `.svelte.ts`.

## 3. Clean code guidelines

- **Names earn comments**. Prefer a descriptive identifier over a comment
  explaining a vague one. Only write a comment when the *why* is non-obvious
  (a workaround, a constraint, a subtle invariant).
- **Pure helpers in `.ts` files**. Anything that can be expressed without
  Svelte (string formatting, date logic, data shaping) lives in a `.ts` or
  `.svelte.ts` file and is unit-tested.
- **`$derived` over manual reactivity**. Compute view-state with `$derived`;
  don't mutate `$state` in response to props.
- **Props are typed and destructured**. Follow the existing pattern:
  ```ts
  interface Props { firstname: string; lastname: string; jobTitle: string; }
  const { firstname, lastname, jobTitle }: Props = $props();
  ```
- **No dead code**. Don't leave commented-out blocks, `console.log`, or
  TODOs without an owner.
- **No premature abstraction**. Three similar lines beat a one-use generic.
  Extract on the third occurrence, not the second.
- **Imports**: ordered by `@trivago/prettier-plugin-sort-imports` —
  `^svelte` first, then `^[./]`, with separation. Don't fight the formatter.
- **Use `$lib` and `$app/paths`**. Never write `../../lib/...` or hardcode
  the base path; use `resolve()` from `$app/paths` for static asset URLs so
  the static adapter rewrites them correctly.
- **Accessibility is non-negotiable**. Every `<Img>` needs a meaningful
  `alt`; every external link needs `rel="noopener noreferrer"` (see
  [src/routes/+page.svelte](src/routes/+page.svelte)). Use semantic headings
  in order (`h1` → `h2` → `h3`).

## 4. TDD workflow

Default to test-first. Concretely:

1. **Pick the seam**. Pure logic → Vitest unit test. UI behaviour the user
   sees → Playwright test. If a piece of UI logic is complex enough to
   warrant a test on its own, *extract it* into a `.svelte.ts` helper and
   unit-test the helper.
2. **Red**: write the failing test first. For unit work, add a `*.test.ts`
   next to the source. For UI work, add a spec under [tests/](tests/).
3. **Green**: implement the smallest change that turns the test green.
4. **Refactor**: clean up names, extract helpers, delete duplication — with
   the test still green.

### Unit tests — Vitest

- Location: co-located, `*.test.ts` next to the source (see
  [src/lib/string.test.ts](src/lib/string.test.ts)).
- Config: [vite.config.ts](vite.config.ts) — `include: ['src/**/*.{test,spec}.{js,ts}']`.
- Run: `npm run test:unit` (watch by default — `vitest run` for CI mode).
- Cover: pure helpers, derivation logic, data-shaping functions. One
  `describe` per unit, one `test` per behaviour, AAA inside.

What to unit-test in this repo:
- string / date formatters (`toCamelCase`, `buildDate`, `buildTitle`)
- data-mapping in load functions and `$derived` expressions when extracted
  into helpers
- any branching logic (e.g. `schoolDetails`' `degree || programType` fallback)

### UI tests — Playwright

- Location: [tests/](tests/) (e.g. [tests/navigation.test.ts](tests/navigation.test.ts)).
- Config: [playwright.config.ts](playwright.config.ts) — runs against
  `npm run build && npm run preview` on port 4173.
- Run: `npm run test:integration`.
- Cover: page-level behaviour — what a user can see, read, and click.

Conventions:
- Query by **role** (`getByRole('heading', { level: 1, name: ... })`,
  `getByRole('link', { name: ... })`), not by CSS selector. Selectors are
  brittle; roles enforce accessibility.
- One `test()` per user-visible behaviour. Parameterise with a loop (see
  [tests/navigation.test.ts](tests/navigation.test.ts)) for table-driven
  cases.
- A page is "tested" when its `<title>`, primary headings, and navigation
  affordances are asserted. Add specs for each new route or interactive
  organism.

### Running everything

```bash
npm run test              # integration then unit
npm run test:unit         # vitest, watch mode
npm run test:integration  # playwright
npm run check             # svelte-check (type errors)
npm run lint              # prettier + eslint
npm run format            # prettier --write
```

Before declaring work done: `npm run check && npm run lint && npm run test`
must all pass. For any UI change, also start `npm run dev` and exercise the
flow in a browser — type checks confirm correctness, not feature behaviour.

## 5. Adding a new component (recipe)

1. Decide its layer (atom / molecule / organism). Justify it in one sentence.
2. Create `src/lib/<layer>/<name>/index.svelte` and, if needed,
   `<name>.svelte.ts` for types and pure helpers.
3. **Red**: write `<name>.test.ts` for any helper, and a Playwright spec for
   any user-visible behaviour the component introduces.
4. **Green**: implement the component using `$props()`, `$derived`, and
   typed interfaces.
5. **Refactor**: collapse duplication, ensure imports follow the ordering
   plugin, run `npm run format`.
6. Consume it from the page or higher-layer component — never let a lower
   layer reach upward.

## 6. Adding a new route

1. Create `src/routes/<slug>/+page.svelte` and (if it needs data)
   `+page.ts` that imports from [src/lib/data/](src/lib/data/) and returns
   typed data.
2. Add a `<svelte:head>` with route-specific `<title>` and
   `<meta name="description">` — SEO is part of "done" here (see
   [src/routes/+page.svelte](src/routes/+page.svelte) for the pattern).
3. Add the route to `menuItems` in [src/routes/+layout.ts](src/routes/+layout.ts).
4. Add a Playwright spec under [tests/](tests/) that loads the route and
   asserts its heading + that the nav link reaches it.

## 7. Things to never do

- Don't introduce a runtime backend — the site is statically prerendered
  (`prerender = true` in [src/routes/+layout.ts](src/routes/+layout.ts)).
- Don't add a new global CSS file; extend [src/app.css](src/app.css) or use
  Tailwind utilities.
- Don't bypass Flowbite primitives by writing bespoke styled components for
  something already in the library (Heading, P, A, List, Timeline, …).
- Don't commit `console.log`, `.only` / `.skip` in tests, or unused imports
  — `eslint-plugin-unused-imports` and lint will catch the last one.
- Don't widen scope. A bug fix changes the minimum needed; a feature ships
  its own tests.
