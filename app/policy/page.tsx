import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { PageHero } from "@/components/page-hero"
import { SiteShell } from "@/components/site-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Policy",
  description:
    "How Dawn Cleaners books, visits, and looks after homes, offices and hospitality properties.",
}

export default function PolicyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Policy"
        title="How we work with you."
        lead="A clear standard for bookings, access, payments and the care of your space. If something is unclear, ask before the visit."
      />
      <LegalDoc
        updated="13 September 2026"
        sections={[
          {
            title: "Quotes and bookings",
            body: [
              "A quote is based on the property type, size, frequency and the finish you asked for. It is not a generic package.",
              "A booking is confirmed once we agree the scope, date and access. We will name a lead so you know who is coming.",
            ],
          },
          {
            title: "Access to the property",
            body: [
              "You provide safe access at the agreed time: keys, a code, a host, or a staff member on site.",
              "If we cannot enter, we will try to reach you. A visit that cannot start may still be charged if we arrived as booked.",
            ],
          },
          {
            title: "Changes and cancellations",
            body: [
              "Tell us as soon as a date needs to move. We will do our best to keep the slot or offer the next available one.",
              "Cancellations with less than 24 hours’ notice may be charged, especially for same day hospitality turnovers.",
            ],
          },
          {
            title: "Payments",
            body: [
              "Payment terms are confirmed with the quote. Recurring work is billed on the schedule we agree in writing.",
              "If a payment is late, we may pause future visits until the account is current.",
            ],
          },
          {
            title: "Care of the space",
            body: [
              "We work to the brief: bathrooms, linens, edges and the last look before handover. Extra rooms or a different finish should be agreed first.",
              "Please tell us about fragile items, alarms, pets and any product you do not want used. We will not move valuables unless you ask.",
            ],
          },
          {
            title: "Our team",
            body: [
              "Teams are briefed once and used to live homes and hospitality spaces. They arrive in time, work quietly and leave the space ready.",
              "If you are unhappy with a visit, write to us the same day. We will review the brief and put it right where we can.",
            ],
          },
          {
            title: "Talk to us",
            body: [
              `Questions about this policy: ${site.contact.email} or ${site.contact.phone}.`,
            ],
          },
        ]}
      />
    </SiteShell>
  )
}
