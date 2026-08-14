import { AlertTriangle } from "lucide-react";
import type { DataStatus } from "@/types";

interface DemoDataNoticeProps {
  /** Records being summarized — the notice renders only if at least one is "demo". */
  items: { status: DataStatus }[];
  className?: string;
}

/**
 * Renders a small inline notice when a section contains any `status:
 * "demo"` record, so illustrative content is never presented to a
 * visitor as verified fact. Renders nothing once every record in the
 * section has been flipped to `status: "verified"`.
 */
export function DemoDataNotice({ items, className }: DemoDataNoticeProps) {
  const hasDemoData = items.some((item) => item.status === "demo");
  if (!hasDemoData) return null;

  return (
    <p
      className={`mx-auto mt-4 inline-flex max-w-fit items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-caption font-medium text-warning ${className ?? ""}`}
    >
      <AlertTriangle className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
      Awaiting official verification from the Training & Placement Office — figures shown are illustrative.
    </p>
  );
}
