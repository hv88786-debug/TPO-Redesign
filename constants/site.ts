import type { SiteConfig } from "@/types";

/**
 * DATA STATUS: contact block below is VERIFIED — sourced directly from the
 * Engineering College Ajmer (ECA) Placement Brochure 2026-27 (Training &
 * Placement Cell, GEC Ajmer). `url` uses the College's real domain
 * (ecajmer.ac.in); the T&P Cell does not appear to run a separate
 * subdomain, so this points at the main site rather than a guessed
 * `tpc.` prefix. `socials` are omitted rather than guessed — the
 * brochure references only a LinkedIn page ("Training and Placement Cell
 * Government Engineering College Ajmer") without a URL, so it isn't
 * reproduced here as a clickable link until confirmed.
 */
export const siteConfig: SiteConfig = {
  name: "Training & Placement Cell",
  institute: "Government Engineering College, Ajmer",
  shortName: "GEC Ajmer — T&P Cell",
  description:
    "Official Training & Placement Cell of Government Engineering College, Ajmer (Engineering College Ajmer / ECA) — connecting industry recruiters with engineering talent through structured placement and internship programs.",
  url: "https://www.ecajmer.ac.in",
  locale: "en_IN",
  contact: {
    email: "placements@ecajmer.ac.in",
    phone: "+91 94600 31242",
    address: "Government Engineering College, Ajmer, Badliya Chouraha, N.H. 8, Ajmer, Rajasthan",
  },
  socials: {},
};
