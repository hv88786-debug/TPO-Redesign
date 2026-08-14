"use client";

import dynamic from "next/dynamic";

/**
 * Recharts (~130KB gzipped) has no reason to sit in the initial page
 * bundle when the chart it renders is below the fold behind the KPI grid.
 * This client boundary lets next/dynamic split it into its own chunk,
 * fetched only once this component mounts, instead of blocking the
 * critical request chain for content that renders above it.
 */
const PlacementChart = dynamic(
  () => import("@/components/home/placements/placement-chart").then((mod) => mod.PlacementChart),
  {
    ssr: false,
    loading: () => <ChartSkeleton />,
  }
);

function ChartSkeleton() {
  return (
    <div className="rounded-card border border-border bg-surface p-6 shadow-sm sm:p-8" role="status">
      <span className="sr-only">Loading placement trend chart…</span>
      <div aria-hidden="true">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="h-5 w-56 animate-pulse rounded bg-muted" />
            <div className="h-4 w-72 animate-pulse rounded bg-muted" />
          </div>
          <div className="h-10 w-full animate-pulse rounded-lg bg-muted sm:w-64" />
        </div>
        <div className="mt-6 h-[320px] w-full animate-pulse rounded-lg bg-muted" />
      </div>
    </div>
  );
}

export { PlacementChart as LazyPlacementChart };
