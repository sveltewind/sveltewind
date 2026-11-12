# Repository rules

## Review and commit suggestions

- After every user prompt, review all changed files before responding, including staged, unstaged, and untracked files. Inspect the actual changes, not only the file list.
- Report relevant findings and validation results, distinguishing changes made for the current request from existing work.
- Always offer a suggested commit message in the final response. Every suggested or actual commit message must start with `fix: `, `feat: `, or `refactor: `.
- Make the suggested message describe the changes it would include. Suggest separate commits when unrelated changes are present.

## Component structure

Use `src/lib/components/Button/Button.svelte` as the reference for generated components. Use TypeScript and Svelte 5 runes, and follow its prop defaults, bindings, theme resolution, visibility handling, and transition wiring.

Every generated component must declare and destructure these shared props:

- `class` (aliased to `className` when destructuring, defaulting to `''`)
- `element` (typed for the component's element, defaulting to `$bindable(null)`)
- `isVisible` (defaulting to `$bindable(true)`)
- `theme` (defaulting to `globalTheme`)
- `transition` (defaulting to `[noopTransition, {}]`)
- `inTransition`
- `outTransition`
- `variants` (defaulting to `[]`)

Include `children?: Snippet` when the component accepts children, plus any component-specific props. Extend the appropriate element attributes when applicable, and forward remaining attributes through `...restProps`.

Keep imports at the top of `<script lang="ts">`. Group the remaining script into the following sections, in this order, with these exact comment labels before each section. Keep the section comments even when a section is empty.

1. `// Types`: TypeScript types and interfaces, including `Props`.
2. `// $props`: Destructure the typed `$props()` value, including defaults and bindable props.
3. `// helpers`: Functions needed by the component.
4. `// consts`: Constant values that do not change during the component's lifetime.
5. `// $state`: Variables that need Svelte 5 reactivity, declared with `$state`.
6. `// $derived`: Svelte 5 derived values, declared with `$derived` or `$derived.by`.
7. `// $effects`: Svelte 5 effects, declared with `$effect` or `$effect.pre`.

Resolve classes with the component's theme key, `variants`, and `className`. Respect `isVisible`, bind the element, and use the same incoming/outgoing transition fallbacks as `Button.svelte`. Render optional children with `{@render children()}` inside a presence check.

## Functions

Use arrow functions for all functions and callbacks unless a standard function is required, such as for dynamic `this`, a constructor, a generator, or an API requirement. When an exception is necessary, make the reason clear in a nearby comment.

## Linting and formatting

- All code must pass the repository's ESLint rules and Prettier formatting. Use the existing configuration.
- Format files changed for the request with Prettier; avoid formatting unrelated files.
- Run `npm run lint` before the final response. Fix issues introduced by the request and report any remaining pre-existing failures or execution blockers.
- For Svelte or TypeScript changes, also run `npm run check` and address errors introduced by the request.
