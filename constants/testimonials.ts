import type { Testimonial } from "@/types";

/**
 * DATA STATUS: DEMO.
 * Sample testimonials written to match how students actually describe
 * the placement process; not statements collected from real students.
 * Every entry carries `status: "demo"` — replace with quotes the Cell
 * has collected and the named student has consented to publish, ideally
 * with a signed consent record kept alongside (see ASSET_GUIDE.md for
 * the equivalent policy on student photographs). Photos are original
 * flat-illustration placeholder avatars for this demo build, not
 * photographs of real students.
 */
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Ankit Sharma",
    branch: "Computer Science & Engineering",
    batch: "2025",
    company: "Tata Consultancy Services",
    quote:
      "The mock interviews conducted by the Cell in December helped more than I expected. I was asked almost the same kind of questions in my actual interview a month later.",
    photo: {
      src: "/images/students/testimonial-1.jpg",
      alt: "Portrait of Ankit Sharma",
      status: "verified",
    },
    rating: 5,
    status: "demo",
  },
  {
    id: "testimonial-2",
    name: "Priya Choudhary",
    branch: "Electronics & Communication Engineering",
    batch: "2025",
    company: "Wipro",
    quote:
      "I was hesitant about the group discussion round, but the weekend sessions gave enough practice that I wasn't nervous during the actual selection process.",
    photo: {
      src: "/images/students/testimonial-2.jpg",
      alt: "Portrait of Priya Choudhary",
      status: "verified",
    },
    rating: 5,
    status: "demo",
  },
  {
    id: "testimonial-3",
    name: "Rahul Meena",
    branch: "Mechanical Engineering",
    batch: "2024",
    company: "Larsen & Toubro Construction",
    quote:
      "Most placement preparation online is written for computer science students. The department-level workshop on AutoCAD and design software was more useful for those of us in core branches.",
    photo: {
      src: "/images/students/testimonial-3.jpg",
      alt: "Portrait of Rahul Meena",
      status: "verified",
    },
    rating: 4,
    status: "demo",
  },
  {
    id: "testimonial-4",
    name: "Sneha Gehlot",
    branch: "Civil Engineering",
    batch: "2024",
    quote:
      "I did not get placed in the first drive of my final year, but the Cell kept sharing off-campus openings and I was selected through one of those in the second semester.",
    photo: {
      src: "/images/students/testimonial-4.jpg",
      alt: "Portrait of Sneha Gehlot",
      status: "verified",
    },
    rating: 5,
    status: "demo",
  },
  {
    id: "testimonial-5",
    name: "Vikram Singh Rathore",
    branch: "Electrical Engineering",
    batch: "2025",
    company: "Rajasthan Rajya Vidyut Utpadan Nigam",
    quote:
      "For students aiming at PSU and state government recruitment, the aptitude classes in the third year built the base needed for the written exam later.",
    photo: {
      src: "/images/students/testimonial-5.jpg",
      alt: "Portrait of Vikram Singh Rathore",
      status: "verified",
    },
    rating: 4,
    status: "demo",
  },
];
