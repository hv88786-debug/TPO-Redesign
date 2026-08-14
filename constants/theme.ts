/**
 * JS-accessible design tokens.
 *
 * CSS variables (app/globals.css) remain the source of truth for anything
 * that renders through Tailwind classes. This file exists only for the
 * handful of contexts that need a literal color/number value in JS —
 * e.g. Recharts `stroke`/`fill` props, Framer Motion variants, or canvas.
 *
 * Keep these two files in sync manually; do not import Tailwind config
 * into client bundles just to read a color.
 */

export const colors = {
  primary: "hsl(212, 70%, 24%)",
  primaryHover: "hsl(212, 65%, 32%)",
  accent: "hsl(38, 68%, 47%)",
  accentHover: "hsl(38, 68%, 41%)",
  background: "hsl(210, 20%, 98%)",
  surface: "hsl(0, 0%, 100%)",
  border: "hsl(214, 18%, 88%)",
  textPrimary: "hsl(215, 28%, 15%)",
  textSecondary: "hsl(215, 14%, 40%)",
  success: "hsl(152, 55%, 30%)",
  warning: "hsl(38, 90%, 45%)",
  destructive: "hsl(0, 65%, 45%)",
} as const;

export const motion = {
  duration: {
    fast: 0.15,
    base: 0.3,
    slow: 0.5,
    /** Slightly longer than `slow` — reserved for card/stat pop-in entrances
     *  (StatCard, KpiCard) so both use one shared value instead of each
     *  hardcoding its own 0.6. */
    pop: 0.6,
  },
  ease: [0.22, 1, 0.36, 1] as const, // easeOutExpo-ish — the ONE reveal curve
  // for the whole site. Import this rather than re-typing the array — it was
  // previously duplicated verbatim in hero-content, site-header, and stat-card.
} as const;

export const breakpoints = {
  xs: 420,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1440,
} as const;
