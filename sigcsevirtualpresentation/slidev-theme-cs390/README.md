# slidev-theme-cs390

The look of the CompSci 390.05 decks (first used in `2026-08-25-intro`),
exported from `cs390/website/slides/` as a standalone Slidev theme.

## Contents

The original deck used Slidev's default theme plus three local files. This
theme bundles all of them:

  - **Default theme**: `layouts/`, `styles/{index.ts,layouts.css,prism.css}`,
    `layoutHelper.ts`, copied verbatim from `@slidev/theme-default` 0.25.0 (MIT)
  - **`styles/cs390.css`**: the deck's `style.css` (Lexend font, type scale,
    callouts, tables, opt-in classes `type-scale-two-thirds`, `type-compact`,
    `tight-bullets`)
  - **`slide-bottom.vue`**: page number, bottom right
  - **`setup/transformers.ts`**: reveals top-level bullets one click at a time
    by wrapping lists in `<v-clicks>` (opt out with `autoClicks: false`);
    tests in `setup/transformers.test.mjs`

## Use it

Install it into the deck's folder:

    pnpm add -D slidev-theme-cs390@file:<path-to-this-dir>

then in the deck headmatter:

    theme: cs390

Or skip the install and point at the directory: `theme: <path-to-this-dir>`.

## Preview

    task          # serves example.md (a copy of the intro deck) with this theme
    task test     # runs the transformer tests

## Known issues

**Doubled page number.** A deck folder that still has its own `style.css`,
`slide-bottom.vue` or `setup/transformers.ts` loads both copies. Delete the
local files when switching a deck to the theme.

**Install error.** A fresh install currently resolves `markdown-it@15`, which
breaks Slidev with `ERR_PACKAGE_PATH_NOT_EXPORTED ... markdown-it/lib/token.mjs`.
This theme's `package.json` pins it back to 14. A new deck folder needs the
same pin in its own `package.json`:

    "pnpm": { "overrides": { "markdown-it": "^14.1.0" } }

then `rm -rf node_modules pnpm-lock.yaml && pnpm install`.

## Verification

All 13 slides of the intro deck export to byte-identical PNGs with this theme
and with the original setup (Slidev 53.0.0, `slidev export --format png`).
