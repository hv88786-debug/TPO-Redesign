"use client";

import { useRef, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Linkedin, Medal, Star, Target, Trophy, Zap, type LucideIcon } from "lucide-react";
import type { AchievementIcon, SuccessStory } from "@/types";
import { PersonAvatar } from "@/components/home/shared/person-avatar";
import { Button } from "@/components/ui/button";
import { motion as motionTokens } from "@/constants/theme";

const ACHIEVEMENT_ICON: Record<AchievementIcon, LucideIcon> = {
  trophy: Trophy,
  medal: Medal,
  star: Star,
  target: Target,
  zap: Zap,
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease },
  },
};

interface SuccessStoryCardProps {
  story: SuccessStory;
}

/**
 * Premium profile card for a placed student. The cursor-following
 * spotlight is done by writing `--spotlight-x`/`--spotlight-y` directly
 * to the element via a ref on pointer move (not React state), so the
 * highlight tracks the cursor at 60fps without re-rendering the card on
 * every mouse event. It no-ops for touch input, where there's no
 * hover/cursor to track, and skips entirely under reduced motion.
 */
export function SuccessStoryCard({ story }: SuccessStoryCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLLIElement>(null);
  const AchievementIconComp = ACHIEVEMENT_ICON[story.achievement.icon];

  function handlePointerMove(event: ReactMouseEvent<HTMLLIElement>) {
    if (prefersReducedMotion) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  }

  return (
    <motion.li
      ref={cardRef}
      variants={prefersReducedMotion ? undefined : item}
      onMouseMove={handlePointerMove}
      whileHover={prefersReducedMotion ? undefined : { y: -8 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease }}
      className="group relative flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface p-6 shadow-xs transition-[box-shadow,border-color] duration-300 hover:border-primary/25 hover:shadow-xl sm:p-7"
    >
      {/* Cursor-tracking spotlight — purely decorative, ignored by assistive tech. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--spotlight-x, 50%) var(--spotlight-y, 0%), hsl(var(--accent) / 0.10), transparent 65%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-3.5">
          <PersonAvatar photo={story.photo} name={story.name} size="lg" />
          <div className="min-w-0">
            <p className="truncate font-heading text-body-md font-semibold text-text-primary">{story.name}</p>
            <p className="truncate text-caption text-text-secondary">
              {story.branch} · Batch {story.batch}
            </p>
          </div>
        </div>
      </div>

      {/* Achievement badge — pinned like a ribbon at the card's top-right corner. */}
      <span className="absolute right-0 top-5 inline-flex items-center gap-1.5 rounded-l-full bg-accent/12 py-1.5 pl-3 pr-4 text-caption font-semibold text-accent-ink shadow-sm">
        <AchievementIconComp className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
        {story.achievement.label}
      </span>

      <div className="relative mt-5 flex items-center gap-2 rounded-lg bg-primary/5 px-3.5 py-2.5">
        <Briefcase className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.2} aria-hidden="true" />
        <span className="min-w-0 text-body-sm text-text-primary">
          <span className="font-semibold">{story.role}</span>, {story.company}
          {story.package ? <span className="ml-1 font-semibold text-accent-ink">· {story.package}</span> : null}
        </span>
      </div>

      <p className="relative mt-4 flex-1 text-body-sm leading-relaxed text-text-secondary">{story.summary}</p>

      <div className="relative mt-5 border-t border-border pt-4">
        {story.linkedInUrl ? (
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a
              href={story.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${story.name}'s LinkedIn profile`}
            >
              <Linkedin className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
              LinkedIn
            </a>
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            disabled
            className="gap-2"
            aria-label={`LinkedIn profile for ${story.name} not yet available`}
            title="Profile link pending — awaiting student consent"
          >
            <Linkedin className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
            LinkedIn
          </Button>
        )}
      </div>
    </motion.li>
  );
}
