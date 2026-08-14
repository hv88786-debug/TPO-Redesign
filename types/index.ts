export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  institute: string;
  shortName: string;
  description: string;
  url: string;
  locale: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socials: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

/**
 * Whether a record reflects data confirmed by the Training & Placement
 * Office ("verified") or illustrative content awaiting official figures
 * ("demo"). UI components should visibly flag "demo" records (e.g. a
 * small badge) so demo content is never presented to a visitor as fact.
 * Every content record below carries this field so a future CMS/admin
 * screen can filter and swap demo rows for verified ones without a
 * schema change.
 */
export type DataStatus = "verified" | "demo";

/** A single placement statistic (e.g. "Highest Package", "Students Placed"). */
export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string; // "%", "LPA", "+"
  prefix?: string; // "₹"
  decimals?: number; // for values like 42.5 LPA — defaults to 0
  status: DataStatus;
}

/** Year-wise placement data point, used by Recharts trend visualizations. */
export interface PlacementTrendPoint {
  id: string;
  year: string;
  studentsPlaced: number;
  averagePackage: number;
  highestPackage: number;
  status: DataStatus;
}

/** Recruiter logo entry for the recruiter marquee/grid. */
export interface Recruiter {
  id: string;
  name: string;
  /** Optional — omit until real logo assets are sourced; components fall back to a monogram badge. */
  logoSrc?: string;
  tier?: "platinum" | "gold" | "standard";
  status: DataStatus;
}

/** Trend direction shown on a KPI card, relative to the previous placement cycle. */
export interface KpiTrend {
  direction: "up" | "down" | "flat";
  label: string; // e.g. "+12% YoY"
}

/** A single KPI card in the placement-statistics grid. */
export interface KpiItem {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  supportingText: string;
  trend: KpiTrend;
  icon: "offers" | "package" | "recruiters" | "rate" | "internships" | "average";
  status: DataStatus;
}

/** One stage in the "Student Journey" placement timeline. */
export interface JourneyStep {
  id: string;
  label: string;
  description: string;
  icon: "year" | "training" | "internship" | "interview" | "placement";
}

/** Notice / circular entry. */
export interface Notice {
  id: string;
  title: string;
  /** One-line summary shown on the card, distinct from the full circular linked via `href`. */
  description: string;
  date: string; // ISO date
  href: string;
  isNew?: boolean;
  /** Flags a notice for the accent-border treatment — deadlines, results, mandatory circulars. */
  isImportant?: boolean;
  category?: "placement" | "internship" | "academic" | "general";
  status: DataStatus;
}

/** Lifecycle stage of a training program relative to today, drives the section's status badge. */
export type TrainingProgramStatus = "upcoming" | "ongoing" | "completed";

/** A training or skill-development program run by the T&P Cell. */
export interface TrainingProgram {
  id: string;
  title: string;
  category: "technical" | "aptitude" | "soft-skills" | "certification";
  duration: string; // e.g. "6 weeks", "40 hours"
  eligibility: string; // e.g. "3rd & 4th year, all branches"
  description: string;
  conductedBy?: string; // e.g. "in association with NIELIT Jaipur"
  /** Where this program currently stands in its own run — independent of `status` (data verification). */
  programStatus: TrainingProgramStatus;
  /** 0–100. For "ongoing" this is batch/syllabus progress; for "upcoming" it's seats filled; "completed" is always 100. */
  progressPercent: number;
  status: DataStatus;
}

/**
 * A student's photograph used by a Success Story or Testimonial card.
 * Renders the real photo only once `status: "verified"` — same
 * placeholder-over-broken-image convention as `AboutImage` and
 * `GalleryItem`. Publishing a real file additionally requires written
 * student consent on file (see public/images/students/README.md).
 */
export interface PersonPhoto {
  src: string;
  alt: string;
  status: DataStatus;
}

/**
 * Icon key for a Success Story's achievement badge. Mapped to a specific
 * lucide-react icon in the component — keep 1:1 with usage in
 * `constants/success-stories.ts`.
 */
export type AchievementIcon = "trophy" | "medal" | "star" | "target" | "zap";

/** The small ribbon badge on a Success Story card (e.g. "Highest Package"). */
export interface Achievement {
  label: string;
  icon: AchievementIcon;
}

/**
 * A named student from the brochure's "Placements 2026" photo pages.
 * Deliberately lighter than SuccessStory — the brochure prints only a
 * name, company and photo per student here (no role, package or
 * narrative), so this type does not carry those fields rather than
 * inventing them.
 */
export interface PlacedStudent {
  id: string;
  name: string;
  company: string;
  photo: PersonPhoto;
  status: DataStatus;
}

/** A student or alumni testimonial. */
export interface Testimonial {
  id: string;
  name: string;
  branch: string;
  batch: string; // graduating year, e.g. "2025"
  company?: string;
  quote: string;
  photo: PersonPhoto;
  /** 1–5. Whole-star ratings only — this is a satisfaction signal, not a precise survey score. */
  rating: number;
  status: DataStatus;
}

/** A placed student's success story, shown with slightly more detail than a testimonial. */
export interface SuccessStory {
  id: string;
  name: string;
  branch: string;
  batch: string;
  company: string;
  role: string;
  package?: string; // e.g. "₹18.4 LPA"
  summary: string;
  photo: PersonPhoto;
  achievement: Achievement;
  /**
   * Omitted until the student has shared their profile with the T&P
   * Office for publishing — never fabricate a plausible-looking URL for
   * a demo record. The card renders a disabled LinkedIn button when this
   * is absent instead of a dead or guessed link.
   */
  linkedInUrl?: string;
  status: DataStatus;
}

/** Size hint for the Gallery's asymmetric masonry layout. */
export type GalleryTileSize = "large" | "medium" | "small";

/** A captioned photograph for the placement activities gallery. */
export interface GalleryItem {
  id: string;
  src: string;
  /** Visible caption shown under the image. */
  caption: string;
  /** Screen-reader alt text — describes the image itself, not the event context already given by the caption. See public/images/ASSET_GUIDE.md. */
  alt: string;
  date: string; // ISO date
  category: "drive" | "training" | "internship" | "event";
  status: DataStatus;
}

/** The campus/office photograph used by the About band's split layout. */
export interface AboutImage {
  src: string;
  alt: string;
  status: DataStatus;
}

/**
 * Icon key for an About-section feature card. Mapped to a specific
 * lucide-react icon in the component — keep this list matched 1:1 with
 * `constants/about.ts` entries, never invent a new key without adding it
 * to the component's icon map first.
 */
export type AboutFeatureIcon = "collaboration" | "guidance" | "internship" | "placement";

/** One of the four capability cards under the About band's copy column. */
export interface AboutFeature {
  id: string;
  icon: AboutFeatureIcon;
  title: string;
  description: string;
}

/** Copy block for the "About Training & Placement Cell" homepage section. */
export interface AboutCopy {
  eyebrow: string;
  heading: string;
  /** Rendered as separate paragraphs. */
  body: string[];
  image: AboutImage;
}

export type ButtonVariant = "primary" | "accent" | "outline" | "ghost" | "link";

/** A single button in the Final CTA band. */
export interface CtaButton {
  label: string;
  href: string;
  variant: ButtonVariant;
}

/** Copy block for the homepage's closing Final Call-To-Action band. */
export interface CtaCopy {
  eyebrow: string;
  heading: string;
  /** Rendered as separate lines (institute name split from parent college line). */
  subheadingLines: string[];
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
  /** Short trust markers shown as a checklist under the buttons. */
  trustIndicators: string[];
}

/**
 * Icon key for a Contact section method card. Mapped to a specific
 * lucide-react icon in the component — keep 1:1 with usage in
 * `constants/contact.ts`.
 */
export type ContactMethodIcon = "phone" | "email" | "office" | "hours";

/**
 * One of the four quick-glance contact cards (Phone, Email, Office,
 * Working Hours). `value` is drawn from `siteConfig.contact` — same
 * verified source the old footer placeholder read from — so this isn't
 * flagged with `DataStatus` the way illustrative placement figures are.
 */
export interface ContactMethod {
  id: string;
  icon: ContactMethodIcon;
  label: string;
  value: string;
  /** tel:, mailto:, or external directions link. Omit for a non-actionable card. */
  href?: string;
  actionLabel?: string;
}

/** One row of the day-wise Office Timings table. */
export interface OfficeHoursRow {
  days: string;
  hours: string;
  status: DataStatus;
}

/** Copy + config for the homepage Contact section. */
export interface ContactCopy {
  eyebrow: string;
  heading: string;
  subheading: string;
  methods: ContactMethod[];
  officeHours: OfficeHoursRow[];
  mapEmbedSrc: string;
  directionsUrl: string;
}

/** Field config for the Quick Enquiry card's plain (JS-free) mailto form. */
export interface EnquiryFormField {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
  placeholder?: string;
}

/** Copy for the Quick Enquiry card. */
export interface EnquiryFormCopy {
  heading: string;
  description: string;
  fields: EnquiryFormField[];
  submitLabel: string;
}

/** One column of the footer's link grid (Quick Links, Students, Recruiters, Downloads). */
export interface FooterColumn {
  title: string;
  links: NavItem[];
}

/**
 * A named member of the Training & Placement team (Principal, Training &
 * Placement Officer, branch-wise faculty coordinators). Carries
 * `status: DataStatus` for the same reason `aboutCopy.image` does — the
 * name/designation shown must be confirmed by the College before
 * publishing, never invented.
 */
export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  branch?: string;
  email?: string;
  phone?: string;
  photo: PersonPhoto;
  status: DataStatus;
}

/** A regulatory approval or accreditation badge (AICTE, NAAC, university affiliation). */
export interface Accreditation {
  id: string;
  label: string;
  detail: string;
  status: DataStatus;
}

/** One entry in the homepage FAQ accordion. */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  audience: "student" | "recruiter" | "parent";
}
