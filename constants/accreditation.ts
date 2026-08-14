import type { Accreditation } from "@/types";

/**
 * DATA STATUS: mostly DEMO — see per-item note.
 * Approval/affiliation numbers are exactly the kind of detail a parent
 * or a recruiter's compliance team checks before trusting a college
 * placement page — and exactly the kind of detail that must never be
 * guessed. The AICTE approval number, NAAC grade/cycle and exact
 * affiliating-university order are NOT printed anywhere in the ECA
 * Placement Brochure 2026-27, so those entries stay `status: "demo"`
 * with a bracketed placeholder until the College confirms them. The
 * `teqip` entry below IS verified — the brochure's "Message From The
 * Principal" explicitly states the College contributes to the World
 * Bank-funded Technical Education Quality Improvement Program (TEQIP)
 * Phase III.
 */
export const accreditations: Accreditation[] = [
  {
    id: "aicte",
    label: "AICTE Approved",
    detail: "Approval No. [confirm current F. No.]",
    status: "demo",
  },
  {
    id: "naac",
    label: "NAAC Accredited",
    detail: "[Grade — confirm current cycle]",
    status: "demo",
  },
  {
    id: "affiliation",
    label: "Affiliated University",
    detail: "[confirm affiliating university/order]",
    status: "demo",
  },
  {
    id: "govt",
    label: "Government Institution",
    detail: "Dept. of Technical Education, Govt. of Rajasthan",
    status: "demo",
  },
  {
    id: "teqip",
    label: "TEQIP Phase III",
    detail: "World Bank-funded Technical Education Quality Improvement Program, contributing toward SDG IV",
    status: "verified",
  },
];
