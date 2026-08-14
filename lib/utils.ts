import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class lists safely (handles conflicting utility classes).
 * Standard shadcn/ui convention — used by every component in components/ui.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Derives a 1–2 letter monogram from a company/recruiter name for the
 * fallback badge shown until real logo assets exist. Single source of
 * truth — was previously copy-pasted into every recruiter card component.
 */
export function getInitials(name: string) {
  return (
    name
      .split(" ")
      .filter((w) => /^[A-Z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join("") || name.slice(0, 2).toUpperCase()
  );
}

/**
 * Formats an ISO date ("2026-07-28") the way notices/circulars are dated
 * on the college's official site, e.g. "28 Jul 2026". Single source of
 * truth so NoticesSection and GallerySection don't each format dates
 * slightly differently.
 */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
