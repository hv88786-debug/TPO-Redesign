import { placementRoster2026 } from "@/constants/placement-roster-2026";

/** Number of students shown on the homepage roster — a fixed 3x2 highlight grid, not the full roster (kept in the data file for a future dedicated placements page). */
const HOMEPAGE_ROSTER_LIMIT = 6;

/**
 * Grid of named 2026 placement students, straight off the brochure's
 * "Placements 2026" photo pages — company badge only, no invented role
 * or package (see PlacedStudent in types/index.ts).
 *
 * Deliberately a neutral illustrated silhouette, not a photo: fabricating
 * an AI face against a real, named student's brochure entry would
 * misrepresent a real person, so every card carries the same generic
 * person icon inside a lettered-ring crest instead. Fixed at a true 3x2
 * on desktop — a curated highlight, not a responsive reflow — collapsing
 * to 2 columns only below `sm`.
 */
export function PlacementRosterGrid() {
  const featured = placementRoster2026.slice(0, HOMEPAGE_ROSTER_LIMIT);

  return (
    <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3">
      {featured.map((student) => (
        <li
          key={student.id}
          className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-card border border-border bg-surface px-6 py-8 text-center shadow-xs transition-all duration-300 ease-brand hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 scale-x-0 bg-accent transition-transform duration-300 ease-brand group-hover:scale-x-100"
          />
          <span className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover shadow-sm ring-1 ring-border">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-10 w-10 text-white/90"
              aria-hidden="true"
            >
              <circle cx="12" cy="8.5" r="3.6" fill="currentColor" />
              <path
                d="M4.5 20c0-4.14 3.36-7 7.5-7s7.5 2.86 7.5 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          <span className="text-body-sm font-semibold text-text-primary">{student.name}</span>
          <span className="inline-flex items-center gap-1.5 text-caption font-medium uppercase tracking-wide text-accent-ink">
            <span className="h-px w-3 bg-accent-ink/50" aria-hidden="true" />
            {student.company}
          </span>
        </li>
      ))}
    </ul>
  );
}
