import Link from "next/link";
import {
  ArrowRight,
  Info,
  LineChart,
  GraduationCap,
  ImageIcon,
  Users,
  Building2,
  Download,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { overviewLinks, type OverviewLink } from "@/constants/overview-links";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";

const ICON_MAP: Record<OverviewLink["icon"], LucideIcon> = {
  about: Info,
  placements: LineChart,
  training: GraduationCap,
  gallery: ImageIcon,
  students: Users,
  recruiters: Building2,
  downloads: Download,
  contact: Mail,
};

/**
 * Replaces the old homepage pattern of stacking every section (About,
 * Placements, Training, Gallery, Testimonials, FAQ, …) on one long page.
 * Each area now has its own route — this grid is the single place on the
 * homepage that surfaces all of them, so the homepage stays a fast,
 * skimmable overview rather than a full-content dump.
 */
export function OverviewLinksGrid() {
  return (
    <Section spacing="lg" surface="background" containerWidth="wide" aria-labelledby="overview-heading">
      <SectionHeading
        headingId="overview-heading"
        eyebrow="Explore"
        heading="Everything the Placement Cell does"
        subheading="Each area below has its own dedicated page — pick where you want to go."
      />

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewLinks.map((link) => {
          const Icon = ICON_MAP[link.icon];
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                className="group flex h-full flex-col gap-3 rounded-card border border-border bg-surface p-5 shadow-xs transition-all duration-300 ease-brand hover:-translate-y-1 hover:border-primary/25 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="font-heading text-body-lg font-semibold text-text-primary">{link.title}</span>
                <span className="text-body-sm leading-relaxed text-text-secondary">{link.description}</span>
                <span className="mt-auto inline-flex items-center gap-1 pt-1 text-body-sm font-semibold text-accent-ink">
                  Explore
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
