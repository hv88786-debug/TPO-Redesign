"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { flagshipRecruiters } from "@/constants/recruiters";
import { Section } from "@/components/layout/section";
import { getInitials } from "@/lib/utils";

function RecruiterCard({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-surface px-5 py-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md">
      <span
        aria-hidden="true"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-caption font-bold text-primary-foreground"
      >
        {getInitials(name)}
      </span>
      <span className="whitespace-nowrap text-body-sm font-medium text-text-secondary">{name}</span>
    </div>
  );
}

/**
 * Sits directly beneath the Hero (still part of the Hero build task, per
 * spec's "Bottom Hero" section) — a quick-flash strip of flagship recruiter
 * chips. Deliberately shows only the platinum-tier subset (see
 * constants/recruiters.ts) rather than the full 12-company roster, since the
 * complete tiered breakdown already lives in RecruitersWall further down —
 * showing the same 12 chips scrolling twice on one page read as a repeated
 * card. This strip's job is a fast credibility signal before the scroll,
 * not the full list.
 *
 * The list is rendered twice back-to-back and the wrapper animates exactly
 * -50%, so the loop is seamless. Only the first copy is exposed to
 * assistive tech. An explicit pause/play control (WCAG 2.2.2) mirrors the
 * one on RecruitersWall so both auto-scrolling strips behave identically.
 */
export function TrustedCompanies() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Section spacing="sm" surface="surface" aria-label="Trusted recruiters">
      <div className="flex items-center justify-center gap-4">
        <p className="text-center text-caption font-semibold uppercase tracking-[0.14em] text-text-secondary">
          Trusted by leading recruiters
        </p>
        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          aria-pressed={isPaused}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-caption font-semibold text-text-secondary transition-colors hover:text-text-primary"
        >
          {isPaused ? (
            <>
              <Play className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
              Play
            </>
          ) : (
            <>
              <Pause className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
              Pause
            </>
          )}
        </button>
      </div>

      <div className="group relative mt-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-28" />

        <div
          style={isPaused ? { animationPlayState: "paused" } : undefined}
          className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          <ul className="flex gap-4">
            {flagshipRecruiters.map((recruiter) => (
              <li key={recruiter.id}>
                <RecruiterCard name={recruiter.name} />
              </li>
            ))}
          </ul>
          <ul className="flex gap-4" aria-hidden="true">
            {flagshipRecruiters.map((recruiter) => (
              <li key={`dup-${recruiter.id}`}>
                <RecruiterCard name={recruiter.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
