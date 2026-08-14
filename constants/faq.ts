import type { FaqItem } from "@/types";

/**
 * Procedural/structural copy, not a statistic — no DataStatus flag,
 * same convention as `journeySteps`. Verify wording against the current
 * T&P Cell policy document before publishing. Written to close the
 * specific gaps the five-perspective homepage review surfaced: eligibility
 * and re-attempt rules for students, the recruiter onboarding path (JAF),
 * and the safety/support questions a parent has no other section to ask.
 */
export const faqItems: FaqItem[] = [
  {
    id: "eligibility",
    question: "What is the eligibility criteria to register for placements?",
    answer:
      "Baseline eligibility (minimum CGPA, active backlog limit and branch-wise exceptions set by individual recruiters) is published each cycle in the Placement Policy document under Downloads. Students register through the placement portal after the T&P Office announces the registration window.",
    audience: "student",
  },
  {
    id: "not-placed",
    question: "What if a student is not placed in the first drive?",
    answer:
      "Students remain eligible for every subsequent on-campus and off-campus drive for the rest of the placement season. The Cell also shares off-campus openings directly with students who have not yet received an offer.",
    audience: "student",
  },
  {
    id: "recruiter-process",
    question: "How can a company recruit from campus?",
    answer:
      "Companies submit a Job Announcement Form (JAF) through the For Recruiters page or by emailing the T&P Office, after which the Cell coordinates a drive date, shortlisting criteria and on-campus logistics. There is no fee for on-campus recruitment.",
    audience: "recruiter",
  },
  {
    id: "recruiter-verification",
    question: "How is student data verified before a drive?",
    answer:
      "Resumes and academic records are cross-checked against official transcripts by the T&P Office before being shared with a recruiter, and eligibility (CGPA, backlogs, branch) is filtered to the recruiter's stated criteria in advance.",
    audience: "recruiter",
  },
  {
    id: "parent-contact",
    question: "Who can a parent contact with a placement-related concern?",
    answer:
      "The Training & Placement Officer (named under Meet the Team, above) is the first point of contact, reachable by phone or email during office hours. Concerns about conduct, safety or harassment during a recruitment process can additionally be raised through the Grievance Redressal or Internal Complaints Committee links in the footer.",
    audience: "parent",
  },
  {
    id: "parent-safety",
    question: "Are off-campus interview locations verified before students are sent?",
    answer:
      "The Cell shares only recruiter-initiated drives coordinated directly with the T&P Office; students are advised to route any off-campus interview location or travel request through the Office for verification before attending.",
    audience: "parent",
  },
];
