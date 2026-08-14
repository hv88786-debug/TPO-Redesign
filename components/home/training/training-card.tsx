"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Brain,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  MessagesSquare,
  Users2,
  type LucideIcon,
} from "lucide-react";
import type { TrainingProgram, TrainingProgramStatus } from "@/types";
import { cn } from "@/lib/utils";
import { motion as motionTokens } from "@/constants/theme";

const CATEGORY_ICON: Record<TrainingProgram["category"], LucideIcon> = {
  technical: Code2,
  aptitude: Brain,
  "soft-skills": MessagesSquare,
  certification: BadgeCheck,
};

const CATEGORY_LABEL: Record<TrainingProgram["category"], string> = {
  technical: "Technical",
  aptitude: "Aptitude",
  "soft-skills": "Soft Skills",
  certification: "Certification",
};

const STATUS_LABEL: Record<TrainingProgramStatus, string> = {
  upcoming: "Upcoming",
  ongoing: "Ongoing",
  completed: "Completed",
};

const STATUS_STYLE: Record<TrainingProgramStatus, string> = {
  upcoming: "bg-accent/10 text-accent-ink",
  ongoing: "bg-primary/10 text-primary",
  completed: "bg-success/10 text-success",
};

const PROGRESS_LABEL: Record<TrainingProgramStatus, string> = {
  upcoming: "Seats filled",
  ongoing: "Batch progress",
  completed: "Completed",
};

const PROGRESS_BAR_STYLE: Record<TrainingProgramStatus, string> = {
  upcoming: "bg-accent",
  ongoing: "bg-primary",
  completed: "bg-success",
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease },
  },
};

interface TrainingCardProps {
  program: TrainingProgram;
  /** Staggers this card's column downward on desktop for the two-column offset layout. Ignored below lg. */
  offset?: boolean;
}

export function TrainingCard({ program, offset = false }: TrainingCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = CATEGORY_ICON[program.category];

  return (
    <motion.li
      variants={prefersReducedMotion ? undefined : item}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease }}
      className={cn(
        "group flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-xs transition-[box-shadow,border-color] duration-300 hover:border-primary/20 hover:shadow-lg sm:p-7",
        offset && "lg:mt-14"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
        </span>

        <div className="flex flex-col items-end gap-1.5">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 text-caption font-semibold text-accent-ink">
            {CATEGORY_LABEL[program.category]}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-caption font-semibold",
              STATUS_STYLE[program.programStatus]
            )}
          >
            {program.programStatus === "completed" ? (
              <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
            ) : null}
            {STATUS_LABEL[program.programStatus]}
          </span>
        </div>
      </div>

      <h3 className="mt-5 font-heading text-heading-sm font-semibold text-text-primary">{program.title}</h3>
      <p className="mt-2.5 flex-1 text-body-sm leading-relaxed text-text-secondary">{program.description}</p>

      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-caption">
        <div className="flex items-start gap-2">
          <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-secondary" strokeWidth={2.2} aria-hidden="true" />
          <div>
            <dt className="font-semibold text-text-secondary">Duration</dt>
            <dd className="mt-0.5 text-text-primary">{program.duration}</dd>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Users2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-secondary" strokeWidth={2.2} aria-hidden="true" />
          <div>
            <dt className="font-semibold text-text-secondary">Eligibility</dt>
            <dd className="mt-0.5 text-text-primary">{program.eligibility}</dd>
          </div>
        </div>
      </dl>

      {program.conductedBy ? (
        <p className="mt-3 flex items-center gap-1.5 text-caption text-text-secondary">
          <Calendar className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
          Conducted by {program.conductedBy}
        </p>
      ) : null}

      <div className="mt-5">
        <div className="flex items-center justify-between text-caption font-medium text-text-secondary">
          <span>{PROGRESS_LABEL[program.programStatus]}</span>
          <span className="tabular-nums text-text-primary">{program.progressPercent}%</span>
        </div>
        <div
          role="progressbar"
          aria-valuenow={program.progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${PROGRESS_LABEL[program.programStatus]} for ${program.title}`}
          className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted"
        >
          <motion.div
            initial={prefersReducedMotion ? { width: `${program.progressPercent}%` } : { width: 0 }}
            whileInView={{ width: `${program.progressPercent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: motionTokens.ease, delay: 0.15 }}
            className={cn("h-full rounded-full", PROGRESS_BAR_STYLE[program.programStatus])}
          />
        </div>
      </div>
    </motion.li>
  );
}
