import type { Notice } from "@/types";

/**
 * DATA STATUS: DEMO.
 * Sample notices matching the format used on the college's notice board,
 * not a live feed. Every entry carries `status: "demo"` — replace with
 * verified entries maintained by the T&P Office (or wire to a future
 * lib/data/notices fetcher) before publishing.
 * Ordered newest first.
 */
export const notices: Notice[] = [
  {
    id: "notice-2026-021",
    title: "Pre-Placement Talk & Online Test — Larsen & Toubro Construction (7th & 8th Semester, CE/ME)",
    description: "Recruiter briefing followed by an online screening test for 7th & 8th semester Civil and Mechanical students.",
    date: "2026-07-28",
    href: "/downloads/notices/lnt-construction-ppt-2026.pdf",
    isNew: true,
    isImportant: true,
    category: "placement",
    status: "demo",
  },
  {
    id: "notice-2026-020",
    title: "Revised Schedule: Aptitude & Reasoning Test for 2026-27 Placement Registration",
    description: "Aptitude and reasoning test date moved — all registered students must check the revised slot allotment.",
    date: "2026-07-22",
    href: "/downloads/notices/aptitude-test-revised-schedule.pdf",
    isNew: true,
    isImportant: true,
    category: "placement",
    status: "demo",
  },
  {
    id: "notice-2026-019",
    title: "Last Date for Submission of Placement Registration Form and Resume — 3rd August 2026",
    description: "Final window to submit the placement registration form and updated resume before the portal locks.",
    date: "2026-07-18",
    href: "/downloads/notices/placement-registration-last-date.pdf",
    isImportant: true,
    category: "placement",
    status: "demo",
  },
  {
    id: "notice-2026-018",
    title: "Summer Internship Report Submission — Format and Deadline for 3rd Year Students",
    description: "Format, page limit and submission deadline for the mandatory summer internship report.",
    date: "2026-07-10",
    href: "/downloads/notices/internship-report-format.pdf",
    category: "internship",
    status: "demo",
  },
  {
    id: "notice-2026-017",
    title: "Campus Recruitment Drive — HDFC Bank (Deputy Manager, All Branches)",
    description: "HDFC Bank campus drive for the Deputy Manager role, open to students from all branches.",
    date: "2026-07-02",
    href: "/downloads/notices/hdfc-bank-crd-2026.pdf",
    category: "placement",
    status: "demo",
  },
  {
    id: "notice-2026-016",
    title: "Notice: Mandatory Attendance for Pre-Placement Training, Batch 2027, from 6th July 2026",
    description: "Attendance at the pre-placement training sessions is mandatory for all Batch 2027 students from this date.",
    date: "2026-06-25",
    href: "/downloads/notices/ppt-mandatory-attendance.pdf",
    isImportant: true,
    category: "general",
    status: "demo",
  },
  {
    id: "notice-2026-015",
    title: "Circular — Updation of Student Placement Data on Portal Before 30th June",
    description: "Students must update placement-related details on the portal before the stated deadline.",
    date: "2026-06-15",
    href: "/downloads/notices/portal-data-updation.pdf",
    category: "academic",
    status: "demo",
  },
  {
    id: "notice-2026-014",
    title: "Selected Candidates List — Tata Consultancy Services (Ninja & Digital), June 2026 Drive",
    description: "Final selected candidates for the TCS Ninja and Digital roles from the June 2026 drive.",
    date: "2026-06-12",
    href: "/downloads/notices/tcs-selected-list-june-2026.pdf",
    category: "placement",
    status: "demo",
  },
];
