"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Notice } from "@/types";
import { NoticeCard } from "@/components/home/notices/notice-card";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export function NoticesGrid({ notices }: { notices: Notice[] }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.ul
      variants={prefersReducedMotion ? undefined : container}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {notices.map((notice) => (
        <NoticeCard key={notice.id} notice={notice} />
      ))}
    </motion.ul>
  );
}
