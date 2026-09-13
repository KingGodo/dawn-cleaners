import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { PageHero } from "@/components/page-hero"
import { SiteShell } from "@/components/site-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Dawn Cleaners collects, uses and looks after your personal information.",
}

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Privacy"
        title="Your details stay with the work."
        lead="We collect only what we need to quote, schedule and look after a property. We do not sell your information."
      />
      <LegalDoc
        updated="13 September 2026"
        sections={[
          {
            title: "Who we are",
            body: [
              `Dawn Cleaners is a cleaning company based in ${site.contact.location}. This page explains how we handle personal information when you request a quote, book a visit, or contact us.`,
            ],
          },
          {
            title: "What we collect",
            body: [
              "When you use the quote form or write to us, we may collect your name, phone number, email, property type, service type, preferred date and the message you send.",
              "If we visit a property we may also keep access notes you give us, such as a gate code or the name of a host, only for as long as the work needs them.",
            ],
          },
          {
            title: "Why we use it",
            body: [
              "We use your details to reply with a scope, confirm bookings, send a team, and follow up after a visit.",
              "We may use a phone number or email to tell you about a change to a booking you already have. We will not send marketing unless you ask for it.",
            ],
          },
          {
            title: "How we share it",
            body: [
              "Your information stays with Dawn Cleaners. A named lead may see what they need to complete the visit.",
              "We do not sell your information. We share it only if the law requires it, or with a provider that helps us run email or messaging, and only for that purpose.",
            ],
          },
          {
            title: "How long we keep it",
            body: [
              "Quote and booking records are kept for as long as we work with you, and for a reasonable period after so we can answer questions about a visit.",
              "Access codes and similar notes are removed when they are no longer needed for the booking.",
            ],
          },
          {
            title: "Your choices",
            body: [
              "You can ask what we hold, ask us to correct it, or ask us to delete it when we no longer need it for a booking or a legal reason.",
              `Write to ${site.contact.email} or call ${site.contact.phone}. We will reply as soon as we can.`,
            ],
          },
          {
            title: "This site",
            body: [
              "The website may store basic technical data such as pages visited, so we can keep the site working. We do not use that data to build a profile of you.",
            ],
          },
        ]}
      />
    </SiteShell>
  )
}
