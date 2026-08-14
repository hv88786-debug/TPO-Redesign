import { Mail, Phone } from "lucide-react";
import { tpoTeam } from "@/constants/team";
import { DemoDataNotice } from "@/components/home/shared/demo-data-notice";
import { PersonAvatar } from "@/components/home/shared/person-avatar";
import { SectionHeading } from "@/components/home/shared/section-heading";

/**
 * "Meet the Team" — named, contactable people behind every "the Cell
 * will coordinate..." sentence elsewhere on the page. A student wants to
 * know who to ask; a recruiter wants a named point of contact, not a
 * general office line; a parent wants a person, not a department, when
 * something goes wrong. None of that existed on the previous homepage.
 */
export function TeamGrid() {
  return (
    <div className="mt-16">
      <SectionHeading
        as="h3"
        eyebrow="Who to Contact"
        heading="Meet the Training & Placement Team"
        subheading="Named coordinators for each branch — reach out directly instead of a general office line."
      />

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tpoTeam.map((member) => (
          <li
            key={member.id}
            className="flex items-start gap-4 rounded-card border border-border bg-surface p-5 shadow-xs"
          >
            <PersonAvatar photo={member.photo} name={member.name} size="lg" />
            <div className="min-w-0">
              <p className="font-heading text-body-md font-semibold text-text-primary">{member.name}</p>
              <p className="text-body-sm text-text-secondary">{member.designation}</p>
              {member.branch ? <p className="text-caption text-text-secondary">{member.branch}</p> : null}
              <div className="mt-2 space-y-1">
                {member.email ? (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 text-caption text-primary hover:text-accent-ink"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
                    {member.email}
                  </a>
                ) : null}
                {member.phone ? (
                  <a
                    href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-1.5 text-caption text-primary hover:text-accent-ink"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
                    {member.phone}
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <DemoDataNotice items={tpoTeam} className="mt-6" />
    </div>
  );
}
