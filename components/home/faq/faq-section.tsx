"use client";

import { useState } from "react";
import { ChevronDown, GraduationCap, Handshake, Users } from "lucide-react";
import { faqItems } from "@/constants/faq";
import type { FaqItem } from "@/types";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { cn } from "@/lib/utils";

const AUDIENCE_LABEL: Record<FaqItem["audience"], string> = {
  student: "Students",
  recruiter: "Recruiters",
  parent: "Parents",
};

const AUDIENCE_ICON: Record<FaqItem["audience"], typeof GraduationCap> = {
  student: GraduationCap,
  recruiter: Handshake,
  parent: Users,
};

/**
 * Homepage FAQ — closes the specific gaps the five-perspective review
 * surfaced (eligibility/re-attempt rules for students, the JAF onboarding
 * path for recruiters, a named escalation route for parents) without
 * requiring a visitor to dig through the Downloads column for a policy
 * PDF. Plain client-side accordion, no external dependency.
 */
export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <Section spacing="lg" surface="surface" containerWidth="content" aria-labelledby="faq-heading">
      <SectionHeading
        headingId="faq-heading"
        eyebrow="Common Questions"
        heading="Frequently Asked Questions"
        subheading="Quick answers for students, recruiters and parents. For anything else, reach the Placement Cell directly below."
      />

      <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-card border border-border bg-background">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          const Icon = AUDIENCE_ICON[item.audience];

          return (
            <div key={item.id}>
              <button
                type="button"
                id={`faq-trigger-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                className="flex w-full items-center gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-caption font-semibold uppercase tracking-wide text-text-secondary">
                    {AUDIENCE_LABEL[item.audience]}
                  </span>
                  <span className="block text-body-md font-semibold text-text-primary">{item.question}</span>
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ease-brand",
                    isOpen && "rotate-180"
                  )}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-trigger-${item.id}`}
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-300 ease-brand",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 pl-[3.75rem] text-body-sm leading-relaxed text-text-secondary">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
