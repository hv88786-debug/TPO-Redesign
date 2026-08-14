import type { AboutCopy, AboutFeature } from "@/types";

/**
 * DATA STATUS: image is VERIFIED — a real photograph of the ECA main
 * academic block (ECA gate/portico), supplied by the college and placed
 * at public/images/college/campus-eca-block.jpg. Body copy is still
 * illustrative editorial text (not the confirmed wording the T&P Office
 * wants published), so it is not flagged verified — only `image.status`
 * flips, per the AboutImageCard placeholder-over-broken-image
 * convention described in public/images/ASSET_GUIDE.md.
 */
export const aboutCopy: AboutCopy = {
  eyebrow: "About T&P Cell",
  heading: "Training Students for Industry Excellence",
  body: [
    "The Training & Placement Cell at Government Engineering College, Ajmer (Engineering College Ajmer / ECA) bridges the gap between classroom learning and industry expectation — coordinating recruiter relationships, structured skill-development programs, and one-on-one career guidance for every graduating batch.",
    "ECA has recorded the highest number of placements among Government Engineering Colleges in Rajasthan in recent years, and is a contributor to the World Bank-funded Technical Education Quality Improvement Program (TEQIP) Phase III.",
  ],
  image: {
    src: "/images/college/campus-eca-block.jpg",
    alt: "Main academic block (ECA) of Government Engineering College, Ajmer",
    status: "verified",
  },
};

/**
 * DATA STATUS: N/A (structural copy, not a statistic) — still follows the
 * "content lives in constants" rule. Update titles/descriptions here, not
 * inside FeatureCard.
 */
export const aboutFeatures: AboutFeature[] = [
  {
    id: "industry-collaboration",
    icon: "collaboration",
    title: "Industry Collaboration",
    description:
      "Standing partnerships with recruiters across IT, core engineering and public-sector companies, renewed and expanded every placement cycle.",
  },
  {
    id: "career-guidance",
    icon: "guidance",
    title: "Career Guidance",
    description:
      "One-on-one counselling on branch-specific career paths, higher studies and competitive exams, alongside placement preparation.",
  },
  {
    id: "internship-support",
    icon: "internship",
    title: "Internship Support",
    description:
      "Summer and pre-final-year internship sourcing, documentation and stipend coordination handled directly by the Cell.",
  },
  {
    id: "placement-assistance",
    icon: "placement",
    title: "Placement Assistance",
    description:
      "End-to-end drive coordination — registration, aptitude tests, interview scheduling and offer documentation — for every recruiter on campus.",
  },
];
