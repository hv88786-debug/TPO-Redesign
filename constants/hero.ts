import type { StatItem } from "@/types";

/**
 * Static copy for the homepage Hero. Kept out of the component so the
 * section stays a thin presentational layer, per ARCHITECTURE.md.
 */
export const heroCopy = {
  eyebrow: "Official Placement Portal",
  headingPrimary: "Training & Placement Cell",
  headingSecondary: "Government Engineering College, Ajmer",
  subheading:
    "Connecting students with industry through placements, internships, skill development and career guidance.",
  primaryCta: { label: "Explore Placements", href: "/placements" },
  secondaryCta: { label: "Recruiters", href: "/for-recruiters" },
} as const;

/**
 * Floating placement-dashboard cards on the right side of the Hero.
 * DATA STATUS: mixed — kept in sync manually with constants/placements.ts
 * (once a lib/data/placements fetcher exists both should read from the
 * same source instead of two literals). `highest` and `recruiters` are
 * VERIFIED, read directly off the brochure's labelled "MAX. Package in
 * LPA" and "No. of Recruiters over the year" charts for the 2026 cycle.
 * `offers` and `rate` are not published as single headline numbers in
 * the brochure, so they remain DEMO placeholders.
 *
 * Deliberately a 4-item TEASER, not the full breakdown: the Placement
 * Statistics section (constants/placements.ts → placementKpis) covers all
 * six figures below the fold with trend deltas and supporting copy. Mirroring
 * every number here as well made the two sections feel like the same card
 * repeated — Hero now shows only the four headline figures with no trend
 * badges, so the KPI grid remains the place you go for the full picture.
 */
export const heroStats: (StatItem & { icon: "offers" | "package" | "recruiters" | "rate" })[] = [
  { id: "offers", label: "Placement Offers", value: 612, suffix: "+", icon: "offers", status: "demo" },
  { id: "highest", label: "Highest Package", value: 10.16, prefix: "₹", suffix: " LPA", decimals: 2, icon: "package", status: "verified" },
  { id: "recruiters", label: "Recruiters", value: 38, icon: "recruiters", status: "verified" },
  { id: "rate", label: "Placement Rate", value: 96, suffix: "%", icon: "rate", status: "demo" },
];
