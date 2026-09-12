import type { Metadata } from "next"
import { Container } from "@/components/container"
import { PageHero } from "@/components/page-hero"
import { QuoteChip } from "@/components/quote-chip"
import { QuoteForm } from "@/components/quote-form"
import { SiteShell } from "@/components/site-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a Dawn Cleaners quote for home, office, BnB, lodge or hotel cleaning. Harare, Zimbabwe.",
}

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Tell us the space. We’ll come back with a clear plan."
        lead="Share the property type, how often you need us, and any check in or office hours. We reply with scope and availability, not a brochure."
      />

      <section className="site-section pt-10">
        <Container
          width="frame"
          className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]"
        >
          <div className="rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-10">
            <h2 className="t-h3">Request a quote</h2>
            <p className="t-caption mt-2 mb-8">
              We typically reply the same day with availability and a clear
              scope.
            </p>
            <QuoteForm />
          </div>

          <aside className="space-y-4">
            <div className="rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-8">
              <p className="t-label">Phone</p>
              <p className="t-body mt-2 text-ink">{site.contact.phone}</p>
              <div className="mt-5">
                <QuoteChip href={site.contact.phoneHref}>Call the team</QuoteChip>
              </div>
            </div>
            <div className="rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-8">
              <p className="t-label">Email</p>
              <p className="t-body mt-2 text-ink">{site.contact.email}</p>
              <div className="mt-5">
                <QuoteChip href={`mailto:${site.contact.email}`}>
                  Email the team
                </QuoteChip>
              </div>
            </div>
            <div className="rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-8">
              <p className="t-label">WhatsApp</p>
              <p className="t-body mt-2 text-ink">Message the team</p>
              <div className="mt-5">
                <QuoteChip href={site.contact.whatsapp}>
                  WhatsApp the team
                </QuoteChip>
              </div>
            </div>
            <div className="rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-8">
              <p className="t-label">Location</p>
              <p className="t-body mt-2 text-ink">{site.contact.location}</p>
              <p className="t-caption mt-1">{site.contact.region}</p>
            </div>
            <div className="rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-8">
              <p className="t-label">Hours</p>
              <p className="t-body mt-2 text-ink">{site.contact.hours}</p>
            </div>
          </aside>
        </Container>
      </section>
    </SiteShell>
  )
}
