import type { ContactCopy, EnquiryFormCopy } from "@/types";
import { siteConfig } from "@/constants/site";

/**
 * Copy + config for the homepage Contact section. The four method cards
 * read `value`/`href` straight from `siteConfig.contact` — the same
 * verified source the previous placeholder footer used — rather than
 * duplicating the phone/email/address as fresh literals here.
 *
 * `officeHours` is the one genuinely new dataset this file introduces
 * and hasn't been confirmed against the T&P Office's actual posted
 * timings yet, so each row keeps `status: "demo"` and the section
 * renders `<DemoDataNotice>` above the table — same convention as
 * every other illustrative dataset on the site.
 */
export const contactCopy: ContactCopy = {
  eyebrow: "Get in Touch",
  heading: "Contact the Placement Cell",
  subheading:
    "Reach out for placement drives, internship coordination, campus visits, or a general enquiry — the T&P Office responds within one working day. For a named contact, see Meet the Training & Placement Team above.",
  methods: [
    {
      id: "phone",
      icon: "phone",
      label: "Phone",
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`,
      actionLabel: "Call now",
    },
    {
      id: "email",
      icon: "email",
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      actionLabel: "Send an email",
    },
    {
      id: "office",
      icon: "office",
      label: "Office",
      value: siteConfig.contact.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`,
      actionLabel: "Get directions",
    },
    {
      id: "hours",
      icon: "hours",
      label: "Working Hours",
      value: "Mon – Fri, 9:30 AM – 5:30 PM",
    },
  ],
  officeHours: [
    { days: "Monday – Friday", hours: "9:30 AM – 5:30 PM", status: "demo" },
    { days: "Saturday", hours: "9:30 AM – 1:30 PM", status: "demo" },
    { days: "Sunday & Public Holidays", hours: "Closed", status: "demo" },
  ],
  mapEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&output=embed`,
  directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`,
};

/**
 * Quick Enquiry card. Submits as a plain `mailto:` form
 * (`enctype="text/plain"`, no `onSubmit` handler) so the card works with
 * zero client-side JavaScript — see contact-section.tsx for why that
 * approach was chosen over a client-side form + fake success state.
 */
export const enquiryFormCopy: EnquiryFormCopy = {
  heading: "Quick Enquiry",
  description: "Opens in your email app, addressed to the T&P Office.",
  fields: [
    { id: "name", label: "Full Name", type: "text", required: true, placeholder: "Your name" },
    { id: "email", label: "Email Address", type: "email", required: true, placeholder: "you@example.com" },
    { id: "phone", label: "Phone Number", type: "tel", required: false, placeholder: "+91" },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      required: true,
      placeholder: "Tell us how we can help — placement drive, internship, general query…",
    },
  ],
  submitLabel: "Send Enquiry",
};
