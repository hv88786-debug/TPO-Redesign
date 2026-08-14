export interface OverviewLink {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "about" | "placements" | "training" | "gallery" | "students" | "recruiters" | "downloads" | "contact";
}

/**
 * Homepage no longer stacks every section on one long scroll — each area
 * now lives on its own route (see app/*\/page.tsx). This is the data for
 * the "quick links" grid that replaced those inline sections on the
 * homepage, so visitors still land on a single overview and choose where
 * to go next.
 */
export const overviewLinks: OverviewLink[] = [
  {
    id: "about",
    title: "About the Cell",
    description: "Our mandate, accreditation, and the team behind campus placements.",
    href: "/about",
    icon: "about",
  },
  {
    id: "placements",
    title: "Placements",
    description: "Year-wise statistics, the student journey, and our recruiter wall.",
    href: "/placements",
    icon: "placements",
  },
  {
    id: "training",
    title: "Training Programs",
    description: "Aptitude, technical and soft-skills training ahead of placement season.",
    href: "/training",
    icon: "training",
  },
  {
    id: "gallery",
    title: "Gallery",
    description: "Photos from recruitment drives, training sessions and campus events.",
    href: "/gallery",
    icon: "gallery",
  },
  {
    id: "students",
    title: "For Students",
    description: "Eligibility, registration process, and how to get placement-ready.",
    href: "/students",
    icon: "students",
  },
  {
    id: "recruiters",
    title: "For Recruiters",
    description: "How to hire from our campus — process, dates, and how to get in touch.",
    href: "/for-recruiters",
    icon: "recruiters",
  },
  {
    id: "downloads",
    title: "Downloads",
    description: "Placement brochure, policy documents, and other resources.",
    href: "/downloads",
    icon: "downloads",
  },
  {
    id: "contact",
    title: "Contact Us",
    description: "Reach the Training & Placement Cell directly, or send a quick enquiry.",
    href: "/contact",
    icon: "contact",
  },
];
