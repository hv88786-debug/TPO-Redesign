"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Download } from "lucide-react";
import type { Notice } from "@/types";
import { cn, formatDate } from "@/lib/utils";
import { motion as motionTokens } from "@/constants/theme";
import { Button } from "@/components/ui/button";

const CATEGORY_LABEL: Record<NonNullable<Notice["category"]>, string> = {
  placement: "Placement",
  internship: "Internship",
  academic: "Academic",
  general: "General",
};

const CATEGORY_STYLE: Record<NonNullable<Notice["category"]>, string> = {
  placement: "bg-primary/10 text-primary",
  internship: "bg-accent/10 text-accent-ink",
  academic: "bg-success/10 text-success",
  general: "bg-muted text-text-secondary",
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease },
  },
};

export function NoticeCard({ notice }: { notice: Notice }) {
  const prefersReducedMotion = useReducedMotion();
  const category = notice.category ?? "general";

  return (
    <motion.li
      variants={prefersReducedMotion ? undefined : item}
      whileHover={prefersReducedMotion ? undefined : { y: -5 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease }}
      className={cn(
        "flex h-full flex-col rounded-card border bg-surface p-6 shadow-xs transition-[box-shadow,border-color] duration-300 hover:shadow-md",
        notice.isImportant
          ? "border-accent/35 bg-accent/[0.03] hover:border-accent/55"
          : "border-border hover:border-primary/20"
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-caption font-semibold",
            CATEGORY_STYLE[category]
          )}
        >
          {CATEGORY_LABEL[category]}
        </span>
        {notice.isNew ? (
          <span className="inline-flex items-center rounded-full bg-destructive/10 px-2.5 py-0.5 text-caption font-semibold text-destructive">
            New
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 text-body-md font-semibold leading-snug text-text-primary">{notice.title}</h3>
      <p className="mt-2 flex-1 text-body-sm leading-relaxed text-text-secondary">{notice.description}</p>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
        <span className="inline-flex items-center gap-1.5 text-caption font-medium text-text-secondary">
          <CalendarDays className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
          {formatDate(notice.date)}
        </span>

        <Button asChild variant="outline" size="sm">
          <a href={notice.href} download aria-label={`Download notice: ${notice.title}`}>
            <Download className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
            Download
          </a>
        </Button>
      </div>
    </motion.li>
  );
}
