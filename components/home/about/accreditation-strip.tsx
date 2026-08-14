import { ShieldCheck } from "lucide-react";
import { accreditations } from "@/constants/accreditation";
import { DemoDataNotice } from "@/components/home/shared/demo-data-notice";

/**
 * Compact approval/affiliation strip shown directly under the About
 * band's copy. Answers the "is this institution and this page actually
 * legitimate" question a parent or a recruiter's compliance team asks
 * before trusting anything else on the page — a question the previous
 * homepage never addressed anywhere.
 */
export function AccreditationStrip() {
  return (
    <div className="mt-10 rounded-card border border-border bg-surface p-5">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {accreditations.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="h-4.5 w-4.5" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-body-sm font-semibold text-text-primary">{item.label}</span>
              <span className="block text-caption text-text-secondary">{item.detail}</span>
            </span>
          </li>
        ))}
      </ul>
      <DemoDataNotice items={accreditations} className="mt-4" />
    </div>
  );
}
