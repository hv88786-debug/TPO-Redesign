import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap",
  description: "All pages on the Training & Placement Cell, GEC Ajmer website.",
  path: "/sitemap",
});

const groups = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Placements", href: "/placements" },
      { label: "For Recruiters", href: "/for-recruiters" },
      { label: "Students", href: "/students" },
      { label: "Downloads", href: "/downloads" },
      { label: "Contact", href: "/contact" },
      { label: "Apply", href: "/apply" },
      { label: "Notices & Circulars", href: "/notices" },
    ],
  },
  {
    title: "Legal & Compliance",
    links: [
      { label: "Grievance Redressal", href: "/grievance" },
      { label: "Anti-Ragging Committee", href: "/anti-ragging" },
      { label: "ICC / POSH", href: "/icc-posh" },
      { label: "RTI", href: "/rti" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Accessibility Statement", href: "/accessibility" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero eyebrow="Sitemap" title="Sitemap" />
      <Section spacing="lg" surface="background" containerWidth="narrow">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="text-body-sm font-semibold uppercase tracking-wide text-text-secondary">{group.title}</p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-body-md text-text-secondary transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Section>
    </>
  );
}
