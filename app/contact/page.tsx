import type { Metadata } from "next"
import { Container } from "@/components/container"
import { PageHero } from "@/components/page-hero"
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

      <section className="site-section pt-12">
        <Container className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <h2 className="t-h3">Request a quote</h2>
            <p className="t-caption mt-2 mb-8">
              We typically reply the same day with availability and a clear
              scope.
            </p>
            <QuoteForm />
          </div>

          <aside className="space-y-8 lg:pt-12">
            <div>
              <p className="t-label">Phone</p>
              <a
                href={site.contact.phoneHref}
                className="t-body mt-2 block text-ink"
              >
                {site.contact.phone}
              </a>
            </div>
            <div>
              <p className="t-label">Email</p>
              <a
                href={`mailto:${site.contact.email}`}
                className="t-body mt-2 block text-ink"
              >
                {site.contact.email}
              </a>
            </div>
            <div>
              <p className="t-label">WhatsApp</p>
              <a
                href={site.contact.whatsapp}
                className="t-body mt-2 block text-ink"
              >
                Message the team
              </a>
            </div>
            <div>
              <p className="t-label">Location</p>
              <p className="t-body mt-2 text-ink">{site.contact.location}</p>
              <p className="t-caption mt-1">{site.contact.region}</p>
            </div>
            <div>
              <p className="t-label">Hours</p>
              <p className="t-body mt-2 text-ink">{site.contact.hours}</p>
            </div>
          </aside>
        </Container>
      </section>
    </SiteShell>
  )
}
