"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { placementTrend } from "@/constants/placements";
import { colors, motion as motionTokens } from "@/constants/theme";
import { cn } from "@/lib/utils";

type MetricKey = "studentsPlaced" | "averagePackage" | "highestPackage";

const METRICS: { key: MetricKey; label: string; prefix?: string; suffix: string; color: string }[] = [
  { key: "studentsPlaced", label: "Students Placed", suffix: "", color: colors.primary },
  { key: "averagePackage", label: "Average Package", prefix: "₹", suffix: " LPA", color: colors.accent },
  { key: "highestPackage", label: "Highest Package", prefix: "₹", suffix: " LPA", color: "hsl(152, 55%, 30%)" },
];

interface CustomTooltipProps {
  active?: boolean;
  label?: string;
  payload?: readonly { value?: unknown }[];
  metric: (typeof METRICS)[number];
}

function CustomTooltip({ active, payload, label, metric }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const point = payload[0];
  if (!point || typeof point.value !== "number") return null;

  return (
    <div className="rounded-lg border border-border bg-surface px-3.5 py-2.5 shadow-lg">
      <p className="text-caption font-semibold uppercase tracking-wide text-text-secondary">{label}</p>
      <p className="mt-0.5 font-heading text-body-lg font-semibold text-text-primary">
        {metric.prefix}
        {point.value.toLocaleString("en-IN")}
        {metric.suffix}
      </p>
    </div>
  );
}

/**
 * Metric-switchable area chart sitting directly under the KPI grid. Tabs
 * swap which PlacementTrendPoint field drives the chart; the gradient fill
 * and line color re-key to the active metric's palette entry.
 */
export function PlacementChart() {
  const [activeKey, setActiveKey] = useState<MetricKey>("studentsPlaced");
  const activeMetric = useMemo(() => METRICS.find((m) => m.key === activeKey) ?? METRICS[0]!, [activeKey]);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
      className="rounded-card border border-border bg-surface p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-heading text-heading-sm font-semibold text-text-primary">Five-year placement trend</h3>
          <p className="mt-1 text-body-sm text-text-secondary">Hover the chart to inspect any placement cycle.</p>
        </div>

        <div className="inline-flex w-full gap-1 rounded-lg bg-muted p-1 sm:w-auto" role="group" aria-label="Chart metric">
          {METRICS.map((metric) => (
            <button
              key={metric.key}
              type="button"
              aria-pressed={metric.key === activeKey}
              onClick={() => setActiveKey(metric.key)}
              className={cn(
                "flex-1 rounded-md px-3 py-2 text-caption font-semibold transition-colors duration-300 ease-brand sm:flex-none sm:px-4",
                metric.key === activeKey
                  ? "bg-surface text-text-primary shadow-xs"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {metric.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 h-[320px] w-full" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={placementTrend} margin={{ top: 10, right: 8, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="placementTrendFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={activeMetric.color} stopOpacity={0.28} />
                <stop offset="100%" stopColor={activeMetric.color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={colors.border} strokeDasharray="4 8" />
            <XAxis
              dataKey="year"
              axisLine={false}
              tickLine={false}
              tick={{ fill: colors.textSecondary, fontSize: 12 }}
              dy={8}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: colors.textSecondary, fontSize: 12 }} width={40} />
            <Tooltip
              cursor={{ stroke: colors.border, strokeWidth: 1 }}
              content={(props) => <CustomTooltip {...props} metric={activeMetric} />}
            />
            <Area
              key={activeMetric.key}
              type="monotone"
              dataKey={activeMetric.key}
              stroke={activeMetric.color}
              strokeWidth={2.5}
              fill="url(#placementTrendFill)"
              isAnimationActive
              animationDuration={700}
              animationEasing="ease-out"
              activeDot={{ r: 5, strokeWidth: 2, stroke: colors.surface }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Text equivalent of the chart above (WCAG 1.1.1) — the SVG itself is
          hidden from assistive tech since this table conveys the same data
          without depending on hover/color to interpret trend direction. */}
      <table className="sr-only">
        <caption>Five-year placement trend by year</caption>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Students Placed</th>
            <th scope="col">Average Package (₹ LPA)</th>
            <th scope="col">Highest Package (₹ LPA)</th>
          </tr>
        </thead>
        <tbody>
          {placementTrend.map((point) => (
            <tr key={point.year}>
              <th scope="row">{point.year}</th>
              <td>{point.studentsPlaced}</td>
              <td>{point.averagePackage}</td>
              <td>{point.highestPackage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
