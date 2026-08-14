import type { FooterColumn, NavItem } from "@/types";

/**
 * Link columns for the premium site footer. Deliberately a separate file
 * from `constants/nav.ts` rather than an edit to it — `nav.ts` drives the
 * header/mobile-nav (`primaryNav`) and the old placeholder footer
 * (`footerNav`), and this sprint's brief is additive (build the footer),
 * not a rework of header navigation. `footerNav` in `nav.ts` is left
 * exactly as-is.
 */
export const footerColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Placements", href: "/placements" },
      { label: "Training Programs", href: "/training" },
      { label: "Notices & Circulars", href: "/notices" },
    ],
  },
  {
    title: "Students",
    links: [
      { label: "Student Portal", href: "/students" },
      { label: "Success Stories", href: "/#success-stories" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Placement Statistics", href: "/placements#statistics" },
    ],
  },
  {
    title: "Recruiters",
    links: [
      { label: "For Recruiters", href: "/for-recruiters" },
      { label: "Recruitment Process", href: "/for-recruiters#process" },
      { label: "Register as Recruiter", href: "/for-recruiters#register" },
      { label: "Our Recruiters", href: "/placements#recruiters" },
    ],
  },
  {
    title: "Downloads",
    links: [
      { label: "Placement Brochure", href: "/downloads/brochure.pdf" },
      { label: "Annual Placement Report", href: "/downloads/annual-report.pdf" },
      { label: "MoU Template", href: "/downloads/mou-template.pdf" },
      { label: "Registration Form", href: "/downloads/registration-form.pdf" },
    ],
  },
];

/**
 * Legal / compliance row shown in the footer's bottom bar, next to
 * copyright. Anti-Ragging, ICC/POSH and Accessibility Statement added
 * after the five-perspective committee review — a government engineering
 * college's official site is expected to carry these regardless of
 * whether the T&P Cell homepage specifically discusses them, and their
 * absence was the single biggest parent-trust gap the review found.
 */
export const footerLegalLinks: NavItem[] = [
  { label: "Grievance Redressal", href: "/grievance" },
  { label: "Anti-Ragging Committee", href: "/anti-ragging" },
  { label: "ICC / POSH", href: "/icc-posh" },
  { label: "RTI", href: "/rti" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Accessibility Statement", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];
