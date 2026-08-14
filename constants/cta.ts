import type { CtaCopy } from "@/types";

/**
 * Static copy for the homepage's Final Call-To-Action band — the
 * emotional close of the page, deliberately separate from
 * `constants/hero.ts` even though both open with similar language, so
 * the two can be edited independently once real copywriting passes over
 * either one.
 */
export const ctaCopy: CtaCopy = {
  eyebrow: "Ready When You Are",
  heading: "Start Your Career Journey With Confidence",
  subheadingLines: ["Official Training & Placement Cell", "Government Engineering College, Ajmer"],
  primaryCta: { label: "View Opportunities", href: "/placements", variant: "accent" },
  secondaryCta: { label: "Contact T&P Cell", href: "#contact", variant: "outline" },
  trustIndicators: ["Industry Partnerships", "Career Guidance", "Internship Support", "Placement Assistance"],
};
