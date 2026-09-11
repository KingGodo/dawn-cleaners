import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CtaBand } from "@/components/cta-band"
import { Container } from "@/components/container"
import { MediaFrame } from "@/components/media-frame"
import { PageHero } from "@/components/page-hero"
import { SiteShell } from "@/components/site-shell"
import { buttonVariants } from "@/components/ui/button"
import { services } from "@/lib/site"
import { cn } from "@/lib/utils"

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
        <Container className="space-y-20">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
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
                      className="border-t border-hairline pt-3 t-body"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "cta" }), "mt-8")}
                >
                  Request this service
                  <ArrowRight className="size-4 transition-transform duration-[var(--duration-ui)] ease-[var(--ease-out)] group-hover/button:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <CtaBand />
    </SiteShell>
  )
}
