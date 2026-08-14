# Architecture — GEC Ajmer T&P Cell Website

This document explains the *why* behind the scaffold, not just the *what*.
Read this before adding homepage sections.

## 1. Folder structure

```
app/                      Next.js App Router routes only. No components live here
                          except route-level files (layout.tsx, page.tsx, loading.tsx…)
components/
  layout/                 Structural primitives: Container, Section, SiteLayout,
                          SiteHeader, SiteFooter. These are NOT content — they define
                          rhythm, width, and page chrome that every route reuses.
  ui/                     shadcn/ui-style primitives (Button, and future Card, Dialog,
                          NavigationMenu…). Installed/extended via `components.json`.
  home/                   Empty on purpose. Homepage-specific sections (Hero, Stats,
                          Recruiters, Notices…) are a build-phase task, not architecture.
  providers/              App-wide context providers (ThemeProvider today).
lib/                      Framework glue: fonts.ts, metadata.ts, utils.ts. Anything that
                          talks to Next.js APIs or third-party SDKs belongs here.
hooks/                    Client-side hooks (use-media-query, use-mounted…).
types/                    Shared TypeScript contracts used by constants + components.
constants/                Static/config data: site.ts, nav.ts, theme.ts. This is the
                          project's "content config" layer — no JSX, no side effects.
public/                   Static assets (images/, icons/).
```

**Rule of thumb:** if a file exports JSX, it goes in `components/`. If it exports data
or config, it goes in `constants/`. If it exports a hook, it goes in `hooks/`. Anything
touching Next.js internals (fonts, metadata) goes in `lib/`.

## 2. Design tokens — single source of truth

Colors are defined **once**, as HSL CSS variables in `app/globals.css`, and consumed in
two ways:

1. **Tailwind classes** — `tailwind.config.ts` maps `bg-primary`, `text-accent`, etc. to
   `hsl(var(--primary))`. This is how 95% of the UI should reference color.
2. **Raw JS values** — `constants/theme.ts` mirrors the same palette as literal `hsl()`
   strings, for the handful of cases that need a real value in JS (Recharts `stroke`,
   Framer Motion variants, canvas). Keep these two files in sync manually if colors ever
   change — do not import Tailwind's resolved config into a client bundle just to read
   one color.

Palette rationale: a deep academic **navy** as primary (authority/trust, consistent with
Indian public-institution branding — not a generic SaaS blue), a muted **gold** accent
used sparingly for achievement markers (placement stats, primary CTAs), and near-white
surfaces so content reads as calm and official rather than "startup landing page."

## 3. Typography

- **Poppins** (`--font-poppins`) — headings only, loaded via `next/font/google` with a
  restrained weight set (500/600/700).
- **Inter** (`--font-inter`) — body copy, UI chrome, data tables.
- The type *scale* (display-lg → caption) lives in `tailwind.config.ts` under
  `theme.extend.fontSize`, not scattered as one-off `text-[32px]` values.

## 4. Layout primitives

- `<Container width="narrow|content|wide|full">` — controls max-width + gutters.
- `<Section spacing="sm|md|lg" surface="background|surface|muted|primary">` — controls
  vertical rhythm and background alternation between sections. Wraps its children in
  `<Container>` by default (`withContainer={false}` to opt out for custom layouts).
- `<SiteLayout>` — composes `<SiteHeader>` + `children` + `<SiteFooter>`, used once in
  `app/layout.tsx`. Homepage sections should never re-implement header/footer logic.

Header/footer markup currently shipped is **structural only** — real visual design
(mega-menu, sticky behavior, mobile drawer, emblem bar) is a homepage-build task.

## 5. Dark mode

Architected, **disabled by default**: `ThemeProvider` (wrapping `next-themes`) is
configured with `defaultTheme="light"` and `enableSystem={false}` — a government site
should render identically for every first-time visitor regardless of OS preference.
Every color token already has a `.dark` counterpart in `globals.css`, so flipping it on
later is a one-line change plus adding a toggle control, not a redesign.

## 6. Responsive breakpoints

`xs 420 · sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1440` — defined once in
`tailwind.config.ts` (`theme.screens`) and mirrored in `constants/theme.ts` for the
`useBreakpoint()` hook, so Tailwind classes and JS-side conditionals never drift apart.

## 7. SEO

`lib/metadata.ts` exports `baseMetadata` (used in the root layout) and a
`buildMetadata()` helper each route can call to extend title/description/canonical
while inheriting OpenGraph/Twitter/robots defaults. Update `constants/site.ts` once —
name, description, contact — and it propagates everywhere.

## 8. What's intentionally NOT built yet

- Homepage sections (`components/home/*`)
- Real header navigation UX (mega-menu, mobile drawer)
- Data fetching layer (`lib/data/*` — placements, notices, recruiters)
- Additional shadcn/ui primitives beyond Button (Card, Badge, Dialog, NavigationMenu,
  Tabs — add via `npx shadcn add <component>`, respecting `components.json`)

## 9. Getting it running

```bash
npm install
npm run dev
```

`app/page.tsx` currently renders an architecture-verification stub (typography, color,
Button variants, layout rhythm) — replace it once homepage sections are built.
