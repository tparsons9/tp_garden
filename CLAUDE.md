# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Quartz v4 is a static site generator for digital gardens. It transforms markdown content (in `content/`) into an interactive website with search, graph visualization, backlinks, and Obsidian-flavored markdown support. Built with TypeScript (ESM), Preact, and the unified/remark/rehype ecosystem.

## Commands

```bash
npx quartz build              # Build static site to ./public
npx quartz build --serve      # Dev server with hot reload (HTTP :8080, WS :3001)
npm run check                 # Type-check (tsc --noEmit) + format check (prettier)
npm run format                # Auto-format with prettier
npm test                      # Run tests (tsx --test, Node.js native test runner)
npm run profile               # Performance profile with 0x
```

## Architecture

### Build Pipeline

Markdown files flow through three phases orchestrated by `quartz/build.ts`:

1. **Parse** (`quartz/processors/parse.ts`) — Uses a worker pool (`workerpool`) to process files in parallel. Each file goes through: text transforms → remark-parse → markdown plugins → remark-rehype → HTML plugins. Output: `ProcessedContent` = `[HtmlRoot, VFile]` tuples.

2. **Filter** (`quartz/processors/filter.ts`) — Plugins decide which pages to publish (e.g., `RemoveDrafts` excludes `draft: true`).

3. **Emit** (`quartz/processors/emit.ts`) — Plugins generate output files (HTML pages, search index, RSS, sitemap, OG images, static assets).

### Plugin System (`quartz/plugins/`)

Three plugin types, all following the factory pattern `(opts?) => PluginInstance`:

- **Transformers** (`plugins/transformers/`) — Transform content during parsing. Can hook into `textTransform`, `markdownPlugins` (remark), or `htmlPlugins` (rehype).
- **Filters** (`plugins/filters/`) — Boolean `shouldPublish()` gate per page.
- **Emitters** (`plugins/emitters/`) — Generate output files. Support `partialEmit()` for incremental builds.

Plugin pipeline is configured in `quartz.config.ts`. Layout is configured in `quartz.layout.ts`.

### Component System (`quartz/components/`)

Preact components rendered server-side via `renderPage.tsx`. Each `QuartzComponent` can declare:
- `css` — Component-scoped styles (SCSS)
- `beforeDOMLoaded` — Script injected before DOM ready
- `afterDOMLoaded` — Script injected after DOM ready

Client-side scripts live in `quartz/components/scripts/`. Global styles in `quartz/styles/`.

### Path Type System (`quartz/util/path.ts`)

Uses branded/nominal types to prevent path mixing at compile time:
- `FilePath` — Absolute path with file extension
- `FullSlug` — No `./` prefix, no trailing `/`, no `index` suffix (most general slug type)
- `SimpleSlug` — Can represent folders, no extension
- `RelativeURL` — Starts with `./` or `../`, used for client navigation

This file is isomorphic (no Node.js APIs) since it runs in both server and browser.

## Configuration

- `quartz.config.ts` — Plugin pipeline, site settings (title, theme, analytics, locale, baseUrl)
- `quartz.layout.ts` — Component layout for content pages, list pages, and shared elements
- `tsconfig.json` — Strict mode, Preact JSX, ESNext target
- `.prettierrc` — 100 char width, no semicolons, trailing commas, 2-space indent

## Key Patterns

- **ESM-only** — `"type": "module"` throughout. Node >= 20 required.
- **Preact, not React** — JSX configured with `jsxImportSource: "preact"`.
- **Incremental builds** — File watcher (`chokidar`) tracks changes in a `ContentMap`, emitters can implement `partialEmit()` to only rebuild affected files.
- **Mutex-guarded dev server** — `async-mutex` prevents concurrent rebuilds during watch mode.
- **Worker pool parsing** — Files are chunked (128/batch) across threads via `workerpool`.
