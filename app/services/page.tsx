import type { Metadata } from "next"
import { CtaBand } from "@/components/cta-band"
import { Container } from "@/components/container"
import { MediaFrame } from "@/components/media-frame"
import { PageHero } from "@/components/page-hero"
import { QuoteChip } from "@/components/quote-chip"
import { SiteShell } from "@/components/site-shell"
import { services } from "@/lib/site"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential, office, BnB, lodge and hotel cleaning from Dawn Cleaners. Hospitality grade finish, on a schedule you can trust.",
}

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Cleaning built around the space, not a generic checklist."
        lead="Homes, offices, BnBs, lodges and hotels each need a different pace. We match the team and the finish to how the room is actually used."
        action={{ href: "/contact", label: "Get a Quote" }}
      />

      <section className="site-section">
        <Container width="frame" className="space-y-16">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <MediaFrame
                src={service.image}
                alt={service.name}
                ratio="4 / 5"
                className={index % 2 === 1 ? "lg:order-2" : undefined}
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="max-w-[36rem]">
                <p className="t-eyebrow">{service.eyebrow}</p>
                <h2 className="t-h2 mt-4">{service.name}</h2>
                <p className="t-lead mt-5">{service.summary}</p>
                <ul className="mt-8 space-y-3">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="rounded-[var(--radius-frame)] bg-white px-5 py-4 shadow-[var(--inset-image)] t-body"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <QuoteChip href="/contact">Request this service</QuoteChip>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <CtaBand />
    </SiteShell>
  )
}
