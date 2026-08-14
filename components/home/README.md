# components/home

Hero, About, Placements, Training, Success Stories, Testimonials, Gallery,
Notices, Cta (Final Call-To-Action) and Contact are all built — the
homepage is complete. The premium SiteFooter lives in
`components/layout/site-footer.tsx` (global chrome, not a homepage
section) — see SPRINT_8_REVIEW.md for that sprint's build notes.

Each section:
- is a server component by default; `"use client"` only where
  interactivity (Framer Motion, Recharts, carousels) requires it
- renders through `<Section>` / `<Container>` from `components/layout`
- pulls copy/data from `constants/` only — no copy is written inline in
  a component; see the file header of each constants/*.ts for its
  `status: "demo" | "verified"` policy
- shares `components/home/shared/section-heading.tsx` and
  `components/home/shared/demo-data-notice.tsx` rather than
  reimplementing heading/notice markup per section
