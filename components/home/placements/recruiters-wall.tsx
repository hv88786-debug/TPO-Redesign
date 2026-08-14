"use client";

import { useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { featuredRecruiters } from "@/constants/recruiters";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { cn } from "@/lib/utils";
import type { Recruiter } from "@/types";

const TIER_SIZE: Record<NonNullable<Recruiter["tier"]>, string> = {
  platinum: "px-6 py-4 gap-4",
  gold: "px-5 py-4 gap-3.5",
  standard: "px-4 py-3.5 gap-3",
};

function RecruiterCard({ recruiter }: { recruiter: Recruiter }) {
  const tier = recruiter.tier ?? "standard";

  return (
    <div
      className={cn(
        "group flex shrink-0 items-center rounded-xl border border-border bg-surface shadow-xs transition-all duration-300 ease-brand hover:-translate-y-1 hover:scale-[1.015] hover:border-accent/30 hover:shadow-lg",
        TIER_SIZE[tier]
      )}
    >
      <span
        aria-hidden="true"
        className="relative flex h-10 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-border"
      >
        {recruiter.logoSrc ? (
          <Image
            src={recruiter.logoSrc}
            alt={`${recruiter.name} logo`}
            fill
            sizes="64px"
            className="object-contain p-1.5"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 font-heading text-body-sm font-bold tracking-tight text-primary">
            {recruiter.name
              .split(" ")
              .filter((word) => word[0]?.toUpperCase() === word[0])
              .slice(0, 2)
              .map((word) => word[0])
              .join("") || recruiter.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </span>
      <span className="flex flex-col">
        <span className="whitespace-nowrap text-body-sm font-semibold text-text-primary">{recruiter.name}</span>
        {tier === "platinum" ? (
          <span className="text-caption font-medium uppercase tracking-wide text-accent-ink">
            Platinum Partner
          </span>
        ) : null}
      </span>
    </div>
  );
}

function MarqueeRow({
  recruiters,
  reverse,
  durationClass,
  isPaused,
}: {
  recruiters: Recruiter[];
  reverse?: boolean;
  durationClass: string;
  isPaused: boolean;
}) {
  return (
    <div className="group/row relative overflow-hidden">
      <div
        style={isPaused ? { animationPlayState: "paused" } : undefined}
        className={cn(
          "flex w-max gap-4 animate-marquee group-hover/row:[animation-play-state:paused] motion-reduce:animate-none",
          reverse && "[animation-direction:reverse]",
          durationClass
        )}
      >
        <ul className="flex gap-4">
          {recruiters.map((recruiter) => (
            <li key={recruiter.id}>
              <RecruiterCard recruiter={recruiter} />
            </li>
          ))}
        </ul>
        <ul className="flex gap-4" aria-hidden="true">
          {recruiters.map((recruiter) => (
            <li key={`dup-${recruiter.id}`}>
              <RecruiterCard recruiter={recruiter} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * "Top Recruiters" — a richer, two-row counterpart to the Hero's thin
 * TrustedCompanies strip. Rows scroll in opposite directions at different
 * speeds for visual depth; each row pauses on hover, and an explicit
 * pause/play control (WCAG 2.2.2) covers keyboard and touch users who
 * can't trigger a hover state.
 */
export function RecruitersWall() {
  const reversed = [...featuredRecruiters].reverse();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <SectionHeading
          as="h3"
          eyebrow="Top Recruiters"
          heading="Companies that hire from GEC Ajmer"
          subheading="A snapshot of the technology leaders that recruit from GEC Ajmer year after year."
        />

        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          aria-pressed={isPaused}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-caption font-semibold text-text-secondary transition-colors hover:text-text-primary"
        >
          {isPaused ? (
            <>
              <Play className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
              Play scrolling
            </>
          ) : (
            <>
              <Pause className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
              Pause scrolling
            </>
          )}
        </button>
      </div>

      <div className="relative mt-10 space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-muted to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-muted to-transparent sm:w-32" />

        <MarqueeRow recruiters={featuredRecruiters} durationClass="[animation-duration:75s]" isPaused={isPaused} />
        <MarqueeRow recruiters={reversed} reverse durationClass="[animation-duration:60s]" isPaused={isPaused} />
      </div>
    </div>
  );
}
