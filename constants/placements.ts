import type { JourneyStep, KpiItem, PlacementTrendPoint } from "@/types";

/**
 * DATA STATUS: mixed — see per-record `status` fields below.
 * Year-wise "No. of Recruiters over the year", "MAX. Package in LPA" and
 * "AVG. Package in LPA" figures are VERIFIED, read directly off the
 * labelled bar/line charts on the "Placement Stats" pages of the ECA
 * Placement Brochure 2026-27. The brochure's "No. of Placement Offered"
 * line chart, by contrast, has NO numeric labels on its data points
 * (only an unlabelled 0–300 axis) — so `studentsPlaced` below is left as
 * an unverified placeholder rather than a number read off a ruler
 * against the chart. Once the T&P Office supplies the exact offers-per-year
 * register, replace `studentsPlaced` and flip each record's `status` to
 * "verified".
 */

export const placementsCopy = {
  eyebrow: "Placement Statistics",
  heading: "Placement Record, 2017–2026",
  subheading:
    "Figures compiled by the Training & Placement Cell, Engineering College Ajmer (ECA), from campus recruitment drives held across the last ten academic sessions.",
} as const;

/**
 * KPI cards — the primary visual anchor of the section.
 * `Recruiters On Campus`, `Highest Package` and `Average Package` use the
 * VERIFIED 2026 figures from the brochure. `Students Placed`,
 * `Placement Rate` and `Internships Converted` are not published in the
 * brochure as single headline numbers, so they remain DEMO placeholders.
 */
export const placementKpis: KpiItem[] = [
  {
    id: "students-placed",
    label: "Students Placed",
    value: 612,
    suffix: "+",
    supportingText: "Across CSE, ECE, ME, CE & EE branches",
    trend: { direction: "up", label: "+14% YoY" },
    icon: "offers",
    status: "demo",
  },
  {
    id: "highest-package",
    label: "Highest Package",
    value: 10.16,
    prefix: "₹",
    suffix: " LPA",
    decimals: 2,
    supportingText: "Highest package offered, 2026 placement cycle",
    trend: { direction: "up", label: "+56% YoY" },
    icon: "package",
    status: "verified",
  },
  {
    id: "average-package",
    label: "Average Package",
    value: 6.25,
    prefix: "₹",
    suffix: " LPA",
    decimals: 2,
    supportingText: "Average package across all placed students, 2026",
    trend: { direction: "up", label: "+40% YoY" },
    icon: "average",
    status: "verified",
  },
  {
    id: "placement-rate",
    label: "Placement Rate",
    value: 96,
    suffix: "%",
    supportingText: "Of eligible final-year students",
    trend: { direction: "up", label: "+3 pts YoY" },
    icon: "rate",
    status: "demo",
  },
  {
    id: "recruiters",
    label: "Recruiters On Campus",
    value: 38,
    supportingText: "Companies that recruited on campus, 2026 cycle",
    trend: { direction: "up", label: "+8 vs 2025" },
    icon: "recruiters",
    status: "verified",
  },
  {
    id: "internships",
    label: "Internships Converted",
    value: 340,
    suffix: "+",
    supportingText: "Pre-placement offers from internship cohorts",
    trend: { direction: "flat", label: "Stable YoY" },
    icon: "internships",
    status: "demo",
  },
];

/**
 * Year-wise placement trend, driving the interactive chart.
 * `averagePackage` and `highestPackage` are VERIFIED, read off the
 * brochure's labelled "MAX. Package in LPA" / "AVG. Package in LPA"
 * bar charts (2017–2026). `studentsPlaced` is NOT published with exact
 * per-year numbers in the brochure (the offers chart has no data labels)
 * and is left as a rough placeholder — records stay `status: "demo"`
 * as a whole until that figure is confirmed.
 */
export const placementTrend: PlacementTrendPoint[] = [
  { id: "trend-2017", year: "2017", studentsPlaced: 50, averagePackage: 2.65, highestPackage: 4.05, status: "demo" },
  { id: "trend-2018", year: "2018", studentsPlaced: 68, averagePackage: 3.5, highestPackage: 5.0, status: "demo" },
  { id: "trend-2019", year: "2019", studentsPlaced: 132, averagePackage: 5.1, highestPackage: 9.0, status: "demo" },
  { id: "trend-2020", year: "2020", studentsPlaced: 125, averagePackage: 4.45, highestPackage: 6.5, status: "demo" },
  { id: "trend-2021", year: "2021", studentsPlaced: 195, averagePackage: 6.2, highestPackage: 10.0, status: "demo" },
  { id: "trend-2022", year: "2022", studentsPlaced: 275, averagePackage: 8.7, highestPackage: 15.0, status: "demo" },
  { id: "trend-2023", year: "2023", studentsPlaced: 222, averagePackage: 5.6, highestPackage: 9.0, status: "demo" },
  { id: "trend-2024", year: "2024", studentsPlaced: 190, averagePackage: 5.7, highestPackage: 9.0, status: "demo" },
  { id: "trend-2025", year: "2025", studentsPlaced: 215, averagePackage: 4.45, highestPackage: 6.5, status: "demo" },
  { id: "trend-2026", year: "2026", studentsPlaced: 268, averagePackage: 6.25, highestPackage: 10.16, status: "demo" },
];

/**
 * Year-wise number of recruiters — VERIFIED, read directly off the
 * brochure's labelled "No. of Recruiters over the year" bar chart.
 * Not yet consumed by an existing chart component (the current UI only
 * plots `placementTrend`), kept here as the authoritative verified
 * dataset for when a recruiters-per-year chart is added.
 */
export const recruitersPerYear = [
  { year: "2017", recruiters: 16 },
  { year: "2018", recruiters: 20 },
  { year: "2019", recruiters: 32 },
  { year: "2020", recruiters: 22 },
  { year: "2021", recruiters: 41 },
  { year: "2022", recruiters: 73 },
  { year: "2023", recruiters: 58 },
  { year: "2024", recruiters: 32 },
  { year: "2025", recruiters: 30 },
  { year: "2026", recruiters: 38 },
] as const;

/**
 * "Student Journey" — the five-stage placement timeline shown beneath the
 * recruiter wall. Procedural/descriptive copy, not a statistic, so it
 * carries no data-status flag — verify wording against the current
 * T&P Cell process document before publishing.
 */
export const journeySteps: JourneyStep[] = [
  {
    id: "first-year",
    label: "1st Year",
    description: "Orientation, communication skills and aptitude classes conducted alongside the regular curriculum.",
    icon: "year",
  },
  {
    id: "training",
    label: "Pre-Placement Training",
    description: "Branch-wise technical training and group discussion/personal interview practice from the 5th semester onward.",
    icon: "training",
  },
  {
    id: "internship",
    label: "Internship",
    description: "Summer internship of 6–8 weeks with an industry mentor, evaluated through a report and viva.",
    icon: "internship",
  },
  {
    id: "mock-interview",
    label: "Mock Interview",
    description: "Practice interviews conducted by alumni and faculty before the placement season begins.",
    icon: "interview",
  },
  {
    id: "placement",
    label: "Placement",
    description: "Campus recruitment drives, offer letter issuance and pre-joining formalities coordinated by the Cell.",
    icon: "placement",
  },
];
