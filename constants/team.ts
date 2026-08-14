import type { TeamMember } from "@/types";

/**
 * DATA STATUS: VERIFIED — names, designations, phone numbers, branch tags
 * AND photos below are taken directly from the "From the desk of the
 * Head, Training & Placement (TPO)", "Training & Placement Cell" and
 * "Faculty Coordinators (TPO)" pages of the ECA Placement Brochure
 * 2026-27 (TP26-27.pdf). Deliberately trimmed to teacher/faculty entries
 * only (through Dr. Atul Sharma) — the "Student Coordinators (TPO)"
 * entries are omitted from this list by request. Photos were cropped
 * directly from the brochure's own portrait images (public/images/students/
 * team-*.jpg) and visually cross-checked against the source page —
 * they are brochure assets reused for this official T&P Cell site, not
 * third-party stock. The Principal is intentionally omitted from this
 * team list: the brochure's "Message From The Principal" page does not
 * print the Principal's name, so it is left out rather than guessed.
 */
export const tpoTeam: TeamMember[] = [
  {
    id: "tpo-head",
    name: "Dr. Jyoti Gajrani",
    designation: "Head, Training & Placement",
    email: "placements@ecajmer.ac.in",
    phone: "+91 94600 31242",
    photo: { src: "/images/students/team-tpo-head.jpg", alt: "Portrait of Dr. Jyoti Gajrani", status: "verified" },
    status: "verified",
  },
  {
    id: "tpo-cell",
    name: "Mr. Sameer Mehrish",
    designation: "Training & Placement Cell",
    phone: "+91 98290 07713",
    photo: { src: "/images/students/team-sameer-mehrish.jpg", alt: "Portrait of Mr. Sameer Mehrish", status: "verified" },
    status: "verified",
  },
  {
    id: "coordinator-amit-sharma",
    name: "Dr. Amit Sharma",
    designation: "Faculty Coordinator (TPO)",
    photo: { src: "/images/students/team-amit-sharma.jpg", alt: "Portrait of Dr. Amit Sharma", status: "verified" },
    status: "verified",
  },
  {
    id: "coordinator-vinod-verma",
    name: "Dr. Vinod Kumar Verma",
    designation: "Faculty Coordinator (TPO)",
    photo: { src: "/images/students/team-vinod-verma.jpg", alt: "Portrait of Dr. Vinod Kumar Verma", status: "verified" },
    status: "verified",
  },
  {
    id: "coordinator-mukesh-gupta",
    name: "Sh. Mukesh Gupta",
    designation: "Faculty Coordinator (TPO)",
    photo: { src: "/images/students/team-mukesh-gupta.jpg", alt: "Portrait of Sh. Mukesh Gupta", status: "verified" },
    status: "verified",
  },
  {
    id: "coordinator-atul-sharma",
    name: "Dr. Atul Sharma",
    designation: "Faculty Member (TPO)",
    photo: { src: "/images/students/team-atul-sharma.jpg", alt: "Portrait of Dr. Atul Sharma", status: "verified" },
    status: "verified",
  },
];
