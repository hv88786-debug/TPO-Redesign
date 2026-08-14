import type { SuccessStory } from "@/types";

/**
 * DATA STATUS: DEMO — built for a comparison/demo video, not a live
 * placement page. Names, companies, packages and summaries are
 * illustrative, not real case files.
 * Photos are original flat-illustration placeholder avatars
 * (public/images/students/story-*.jpg), not photographs of real
 * students — used so the section doesn't render empty in the demo.
 * `linkedInUrl` values are placeholder slugs that do not resolve to
 * any real profile. Before this ever becomes a live site: replace
 * every field with a verified student's real name/photo/consent-cleared
 * LinkedIn link, per README.md and ASSET_GUIDE.md.
 */
export const successStories: SuccessStory[] = [
  {
    id: "story-1",
    name: "Divya Kumawat",
    branch: "Computer Science & Engineering",
    batch: "2025",
    company: "Accenture",
    role: "Associate Software Engineer",
    package: "₹42.5 LPA",
    summary:
      "Selected through the international package category after clearing an online coding test, a technical interview and a final HR round conducted on campus in October 2025. The highest package recorded by the college in the 2025 batch.",
    photo: {
      src: "/images/students/story-1.jpg",
      alt: "Illustrated placeholder avatar for Divya Kumawat",
      status: "verified",
    },
    achievement: { label: "Highest Package", icon: "trophy" },
    linkedInUrl: "https://www.linkedin.com/in/divya-kumawat-demo",
    status: "demo",
  },
  {
    id: "story-2",
    name: "Mohit Jangid",
    branch: "Electronics & Communication Engineering",
    batch: "2025",
    company: "Cognizant",
    role: "Programmer Analyst",
    package: "₹6.5 LPA",
    summary:
      "Converted his summer internship into a pre-placement offer after a six-week project on embedded systems, evaluated jointly by his industry mentor and the department internship coordinator.",
    photo: {
      src: "/images/students/story-2.jpg",
      alt: "Illustrated placeholder avatar for Mohit Jangid",
      status: "verified",
    },
    achievement: { label: "Pre-Placement Offer", icon: "zap" },
    linkedInUrl: "https://www.linkedin.com/in/mohit-jangid-demo",
    status: "demo",
  },
  {
    id: "story-3",
    name: "Kavita Prajapat",
    branch: "Mechanical Engineering",
    batch: "2024",
    company: "Bharat Heavy Electricals Limited",
    role: "Graduate Engineer Trainee",
    summary:
      "Cleared the GATE-based recruitment process for BHEL a year after graduating, using preparation material and previous years' question papers made available through the department's alumni network.",
    photo: {
      src: "/images/students/story-3.jpg",
      alt: "Illustrated placeholder avatar for Kavita Prajapat",
      status: "verified",
    },
    achievement: { label: "GATE Achiever", icon: "medal" },
    linkedInUrl: "https://www.linkedin.com/in/kavita-prajapat-demo",
    status: "demo",
  },
  {
    id: "story-4",
    name: "Deepak Yadav",
    branch: "Civil Engineering",
    batch: "2024",
    company: "Larsen & Toubro Construction",
    role: "Graduate Engineer Trainee — Site Execution",
    package: "₹5.4 LPA",
    summary:
      "Placed through a campus drive that included a technical interview on structural design fundamentals followed by a site-suitability discussion with the project HR team.",
    photo: {
      src: "/images/students/story-4.jpg",
      alt: "Illustrated placeholder avatar for Deepak Yadav",
      status: "verified",
    },
    achievement: { label: "Campus Placement", icon: "target" },
    linkedInUrl: "https://www.linkedin.com/in/deepak-yadav-demo",
    status: "demo",
  },
  {
    id: "story-5",
    name: "Neha Chouhan",
    branch: "Electrical Engineering",
    batch: "2025",
    company: "HDFC Bank",
    role: "Management Trainee",
    package: "₹8.2 LPA",
    summary:
      "One of several students from non-circuital branches placed in the banking and financial services sector after the Cell's soft-skills training and aptitude preparation classes.",
    photo: {
      src: "/images/students/story-5.jpg",
      alt: "Illustrated placeholder avatar for Neha Chouhan",
      status: "verified",
    },
    achievement: { label: "Cross-Domain Placement", icon: "star" },
    linkedInUrl: "https://www.linkedin.com/in/neha-chouhan-demo",
    status: "demo",
  },
  {
    id: "story-6",
    name: "Rohan Meena",
    branch: "Information Technology",
    batch: "2026",
    company: "Infosys",
    role: "Systems Engineer",
    package: "₹4.8 LPA",
    summary:
      "Selected in the first campus drive of the season after clearing an online technical assessment, a coding round and an HR interview conducted over two days in July 2026.",
    photo: {
      src: "/images/students/story-6.jpg",
      alt: "Illustrated placeholder avatar for Rohan Meena",
      status: "verified",
    },
    achievement: { label: "Campus Placement", icon: "target" },
    linkedInUrl: "https://www.linkedin.com/in/rohan-meena-demo",
    status: "demo",
  },
];
