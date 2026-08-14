import type { TrainingProgram } from "@/types";

/**
 * DATA STATUS: DEMO.
 * Representative training programs based on what a T&P Cell of this kind
 * typically runs; not the confirmed current-year schedule. Every entry
 * carries `status: "demo"` — replace with the Cell's approved program
 * list (durations, eligibility, external partners) before publishing.
 */
export const trainingPrograms: TrainingProgram[] = [
  {
    id: "aptitude-reasoning",
    title: "Quantitative Aptitude & Logical Reasoning",
    category: "aptitude",
    duration: "40 hours",
    eligibility: "3rd year, all branches",
    description:
      "Covers quantitative aptitude, logical reasoning and data interpretation as tested in the first-round screening of most recruiters. Conducted on weekends over eight weeks with weekly assessment tests.",
    programStatus: "ongoing",
    progressPercent: 62,
    status: "demo",
  },
  {
    id: "communication-gd-pi",
    title: "Communication Skills and Group Discussion",
    category: "soft-skills",
    duration: "30 hours",
    eligibility: "3rd year, all branches",
    description:
      "Sessions on spoken English, group discussion technique and personal interview etiquette, conducted by the college's Training & Placement Cell in coordination with the Department of Humanities.",
    programStatus: "upcoming",
    progressPercent: 18,
    status: "demo",
  },
  {
    id: "dsa-programming",
    title: "Data Structures and Programming in C/C++/Java",
    category: "technical",
    duration: "6 weeks",
    eligibility: "3rd year, CSE/IT/ECE",
    description:
      "Problem-solving practice on arrays, linked lists, trees, graphs and standard algorithms, with daily coding assignments on an online judge. Aimed at the coding rounds conducted by IT-sector recruiters.",
    programStatus: "ongoing",
    progressPercent: 74,
    status: "demo",
  },
  {
    id: "core-branch-workshop",
    title: "AutoCAD, ETABS and Core Engineering Software Workshop",
    category: "technical",
    duration: "2 weeks",
    eligibility: "3rd & 4th year, CE/ME/EE",
    description:
      "Hands-on workshop on design and simulation software commonly required by core-sector recruiters, conducted in the respective department laboratories during the winter vacation.",
    conductedBy: "respective Departments",
    programStatus: "completed",
    progressPercent: 100,
    status: "demo",
  },
  {
    id: "nielit-certification",
    title: "Certificate Course in Web Technologies",
    category: "certification",
    duration: "45 days",
    eligibility: "2nd & 3rd year, CSE/IT/ECE (optional)",
    description:
      "An optional certificate program covering HTML, CSS, JavaScript and basic backend development, held in the computer centre outside regular class hours.",
    conductedBy: "NIELIT Jaipur",
    programStatus: "upcoming",
    progressPercent: 35,
    status: "demo",
  },
  {
    id: "resume-mock-interview",
    title: "Resume Building and Mock Interviews",
    category: "soft-skills",
    duration: "2 weeks",
    eligibility: "Final year, all branches",
    description:
      "One-to-one resume review followed by mock technical and HR interviews conducted by faculty coordinators and visiting alumni, held every year before the placement season begins.",
    programStatus: "completed",
    progressPercent: 100,
    status: "demo",
  },
];
