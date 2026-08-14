import { Send } from "lucide-react";
import { enquiryFormCopy } from "@/constants/contact";
import { siteConfig } from "@/constants/site";
import { Button } from "@/components/ui/button";

/**
 * Quick Enquiry card. Deliberately NOT a client-side form with a fake
 * "Message sent!" success state — there's no backend behind this build
 * to actually receive it, and pretending otherwise would be dishonest
 * UX. Instead this is a plain HTML `<form action="mailto:…" method="post"
 * enctype="text/plain">`: submitting opens the visitor's own email app
 * with the fields laid out in the body, addressed to the T&P Office. It
 * works with JavaScript fully disabled and needs no `"use client"`
 * boundary, which is also why this card is a straightforward win for the
 * "no unnecessary JS" performance note on this sprint's brief.
 */
export function QuickEnquiryCard() {
  return (
    <div className="flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-xs sm:p-7">
      <h3 className="font-heading text-heading-sm font-semibold text-text-primary">{enquiryFormCopy.heading}</h3>
      <p className="mt-1.5 text-body-sm text-text-secondary">{enquiryFormCopy.description}</p>

      <form
        action={`mailto:${siteConfig.contact.email}`}
        method="post"
        encType="text/plain"
        className="mt-6 flex flex-1 flex-col gap-4"
      >
        {enquiryFormCopy.fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={`enquiry-${field.id}`} className="text-body-sm font-medium text-text-primary">
              {field.label}
              {field.required ? (
                <span aria-hidden="true" className="ml-0.5 text-destructive">
                  *
                </span>
              ) : (
                <span className="ml-1.5 text-caption font-normal text-text-secondary">(optional)</span>
              )}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={`enquiry-${field.id}`}
                name={field.label}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
                className="mt-1.5 w-full resize-none rounded-md border border-border bg-background px-3.5 py-2.5 text-body-sm text-text-primary placeholder:text-text-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              />
            ) : (
              <input
                id={`enquiry-${field.id}`}
                name={field.label}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3.5 text-body-sm text-text-primary placeholder:text-text-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              />
            )}
          </div>
        ))}

        <Button type="submit" variant="primary" className="mt-2 w-full">
          <Send className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
          {enquiryFormCopy.submitLabel}
        </Button>
      </form>
    </div>
  );
}
