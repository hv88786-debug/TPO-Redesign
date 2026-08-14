import type { GalleryItem } from "@/types";

/**
 * DATA STATUS: DEMO — built for a comparison/demo video, not a live
 * gallery. `src` values point at original flat-illustration placeholder
 * graphics (public/images/gallery/gallery-demo-*.jpg), not real event
 * photographs — reused across a few entries so the masonry grid reads
 * as full for the video. Captions/dates/companies below are illustrative.
 * Before this becomes a live site: replace every entry with a real
 * photograph per public/images/ASSET_GUIDE.md, and confirm consent was
 * obtained for any identifiable student in the frame.
 */
const PLACEHOLDER = {
  orientation: "/images/gallery/gallery-demo-orientation-01.jpg",
  panel: "/images/gallery/gallery-demo-panel-01.jpg",
  workshop: "/images/gallery/gallery-demo-workshop-01.jpg",
  celebration: "/images/gallery/gallery-demo-celebration-01.jpg",
} as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-tcs-drive-2025",
    src: PLACEHOLDER.panel,
    caption: "Written test for the Tata Consultancy Services campus drive in progress at the college seminar hall, October 2025.",
    alt: "Rows of students seated at desks writing a test in a seminar hall.",
    date: "2025-10-14",
    category: "drive",
    status: "verified",
  },
  {
    id: "gallery-mock-interview-panel",
    src: PLACEHOLDER.panel,
    caption: "Alumni panel conducting mock interviews for final-year students during the pre-placement preparation week.",
    alt: "Three panellists seated at a table interviewing a student across from them.",
    date: "2025-09-02",
    category: "training",
    status: "verified",
  },
  {
    id: "gallery-lnt-ppt-2025",
    src: PLACEHOLDER.workshop,
    caption: "Pre-placement talk by Larsen & Toubro Construction for final-year Civil and Mechanical Engineering students.",
    alt: "A recruiter presenting slides to students seated in a lecture hall.",
    date: "2025-08-20",
    category: "drive",
    status: "verified",
  },
  {
    id: "gallery-gd-session",
    src: PLACEHOLDER.workshop,
    caption: "Group discussion practice session conducted as part of the Communication Skills training program.",
    alt: "Students seated in a circle during a group discussion exercise.",
    date: "2025-08-05",
    category: "training",
    status: "verified",
  },
  {
    id: "gallery-internship-orientation",
    src: PLACEHOLDER.orientation,
    caption: "Orientation session for third-year students ahead of the summer internship placement cycle.",
    alt: "A faculty coordinator addressing students from the front of a classroom.",
    date: "2025-04-18",
    category: "internship",
    status: "verified",
  },
  {
    id: "gallery-offer-letter-distribution",
    src: PLACEHOLDER.celebration,
    caption: "Offer letters being handed over to selected students at the end of the 2024-25 placement season.",
    alt: "A staff member handing a printed offer letter to a student.",
    date: "2025-06-10",
    category: "event",
    status: "verified",
  },
  {
    id: "gallery-autocad-workshop",
    src: PLACEHOLDER.workshop,
    caption: "Students during the AutoCAD and design software workshop held in the Civil Engineering department laboratory.",
    alt: "Students working at computer workstations in a laboratory.",
    date: "2025-01-08",
    category: "training",
    status: "verified",
  },
  {
    id: "gallery-hdfc-crd-2026",
    src: PLACEHOLDER.panel,
    caption: "Interview round of the HDFC Bank campus recruitment drive held in July 2026.",
    alt: "A student in an interview room seated across from an interviewer.",
    date: "2026-07-04",
    category: "drive",
    status: "verified",
  },
  {
    id: "gallery-resume-workshop-2025",
    src: PLACEHOLDER.workshop,
    caption: "Resume-building workshop conducted by the Training & Placement Cell ahead of the placement season.",
    alt: "Students working on laptops at tables during a workshop session.",
    date: "2025-07-15",
    category: "training",
    status: "verified",
  },
  {
    id: "gallery-aptitude-test-2025",
    src: PLACEHOLDER.orientation,
    caption: "Aptitude and reasoning test conducted as part of the pre-placement training schedule.",
    alt: "Students seated in rows at desks during a written aptitude test.",
    date: "2025-05-22",
    category: "training",
    status: "verified",
  },
  {
    id: "gallery-alumni-meet-2025",
    src: PLACEHOLDER.celebration,
    caption: "Alumni interaction session with final-year students, sharing placement and career experiences.",
    alt: "A group of people seated together in conversation in a hall.",
    date: "2025-11-09",
    category: "event",
    status: "verified",
  },
  {
    id: "gallery-internship-briefing-2026",
    src: PLACEHOLDER.orientation,
    caption: "Pre-departure briefing for students heading into their summer 2026 internships.",
    alt: "A coordinator addressing a group of seated students holding notebooks.",
    date: "2026-03-12",
    category: "internship",
    status: "verified",
  },
];
