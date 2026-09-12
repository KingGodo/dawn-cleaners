import Link from "next/link"
import { Container } from "@/components/container"
import { MediaFrame } from "@/components/media-frame"
import { QuoteChip } from "@/components/quote-chip"
import { Reveal } from "@/components/reveal"
import { SplitHeader } from "@/components/split-header"
import { services } from "@/lib/site"

export function ServicesSection() {
  const featured = services.find((service) => service.featured) ?? services[0]
  const others = services.filter((service) => service.slug !== featured.slug)

  return (
    <section id="services" className="site-section">
      <Container width="frame">
        <Reveal>
          <SplitHeader
            eyebrow="Services"
            heading="Cleaning for every kind of space, from homes through to hotels."
            body="The same guest standard, whether it is a weekly house, an office after hours, or a same day BnB turnover."
            action={<QuoteChip href="/services">View services</QuoteChip>}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4">
          <Reveal>
            <Link href="/services" className="group block">
              <MediaFrame
                src={featured.image}
                alt={featured.name}
                ratio="4 / 5"
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="rounded-[var(--radius-frame)]"
              />
              <p className="t-eyebrow mt-5">{featured.eyebrow}</p>
              <h3 className="t-h3 mt-2">{featured.name}</h3>
              <p className="t-body mt-2 max-w-[36ch]">{featured.intent}</p>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-4">
            {others.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.05}>
                <Link
                  href="/services"
                  className="group grid grid-cols-[7.5rem_minmax(0,1fr)] gap-4 rounded-[var(--radius-frame)] bg-white p-3 shadow-[var(--inset-image)] sm:grid-cols-[9rem_minmax(0,1fr)] sm:p-4"
                >
                  <MediaFrame
                    src={service.image}
                    alt={service.name}
                    ratio="1 / 1"
                    sizes="160px"
                    className="rounded-[16px]"
                  />
                  <div className="flex flex-col justify-center pr-2">
                    <p className="t-eyebrow">{service.eyebrow}</p>
                    <h3 className="t-h3 mt-2">{service.name}</h3>
                    <p className="t-caption mt-1.5">{service.intent}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
