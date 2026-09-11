import type { Metadata } from "next"
import { Container } from "@/components/container"
import { CtaBand } from "@/components/cta-band"
import { MediaFrame } from "@/components/media-frame"
import { PageHero } from "@/components/page-hero"
import { SiteShell } from "@/components/site-shell"
import { photos, principles } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Dawn Cleaners is a professional cleaning company for homes, offices and hospitality properties across Zimbabwe.",
}

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Dawn Cleaners"
        title="A cleaning company built like a hospitality team."
        lead="We started Dawn Cleaners because too many properties were paying for hours, not a standard. The work should hold up when a guest, a client, or your family walks in."
      />

      <section className="site-section">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MediaFrame
            src={photos.linens}
            alt="Crisp bed linen, the kind of finish guests notice first"
            ratio="4 / 5"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="max-w-[36rem]">
            <h2 className="t-h2">The standard is the handover.</h2>
            <p className="t-lead mt-5">
              Anyone can busy a room. We finish it: bathrooms, linens, edges,
              and the last look before keys go back. That is the difference
              between “cleaned” and ready.
            </p>
            <p className="t-body mt-5">
              Based in Harare, we work with households, offices, BnBs, lodges
              and hotels across Zimbabwe. You get a named lead, a brief we keep,
              and a team used to live spaces, not a rotating crowd.
            </p>
          </div>
        </Container>
      </section>

      <section className="site-section border-t border-hairline">
        <Container>
          <h2 className="t-h2 max-w-[16ch]">How we work.</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="border-t border-hairline pt-5">
                <h3 className="t-h3">{item.title}</h3>
                <p className="t-caption mt-3">{item.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="site-section border-t border-hairline">
        <Container className="grid gap-10 lg:grid-cols-2">
          <MediaFrame
            src={photos.kitchen}
            alt="A kitchen after a thorough clean"
            ratio="16 / 10"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <MediaFrame
            src={photos.office}
            alt="A calm, orderly office"
            ratio="16 / 10"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </Container>
      </section>

      <CtaBand />
    </SiteShell>
  )
}
