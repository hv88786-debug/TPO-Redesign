import Link from "next/link";
import { ArrowRight, FileText, MessageSquareWarning, Scale, ScrollText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const importantLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Notices & Circulars", href: "/notices", icon: ScrollText },
  { label: "Placement Brochure", href: "/downloads/brochure.pdf", icon: FileText },
  { label: "Grievance Redressal", href: "/grievance", icon: MessageSquareWarning },
  { label: "RTI", href: "/rti", icon: Scale },
];

/**
 * "Important Links" quick-reference row — the handful of destinations a
 * visitor to the Contact section is most likely to need next (circulars,
 * the brochure, grievance, RTI), separate from the full footer sitemap
 * below.
 */
export function ImportantLinksCard() {
  return (
    <div className="rounded-card border border-border bg-surface p-6 shadow-xs sm:p-7">
      <h3 className="font-heading text-heading-sm font-semibold text-text-primary">Important Links</h3>
      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {importantLinks.map(({ label, href, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-body-sm font-medium text-text-primary transition-colors hover:border-primary/25 hover:bg-primary/5"
            >
              <Icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.2} aria-hidden="true" />
              <span className="flex-1">{label}</span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                strokeWidth={2.2}
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
