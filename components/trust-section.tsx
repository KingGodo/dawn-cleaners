import { Container } from "@/components/container"
import { PhotoStat } from "@/components/photo-stat"
import { QuoteChip } from "@/components/quote-chip"
import { Reveal } from "@/components/reveal"
import { SplitHeader } from "@/components/split-header"
import { photos } from "@/lib/site"

export function TrustSection() {
  return (
    <section className="site-section">
      <Container width="frame">
        <Reveal>
          <SplitHeader
            eyebrow="Why people stay"
            heading="Choose a team that treats the space the way a guest will see it."
            body="We clean to a hospitality standard so you are not inspecting bathrooms, linens, or the last look before anyone arrives."
            action={<QuoteChip href="/contact">Get a Quote</QuoteChip>}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Reveal>
            <PhotoStat
              src={photos.bathroom}
              alt="A bathroom finished to a hospitality standard"
              index="01"
              value="Guest ready"
              label="Bathrooms"
              copy="The rooms guests notice first, finished before they put the bags down."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <PhotoStat
              src={photos.hotelSuite}
              alt="A hotel suite made and ready for check in"
              index="02"
              ratio="4 / 5"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <article className="flex min-h-[22rem] flex-col justify-between rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-8">
              <span className="font-mono text-[12px] tabular-nums tracking-[-0.02em] text-faint">
                03
              </span>
              <div>
                <p className="text-[clamp(1.85rem,1.4rem+1vw,2.25rem)] font-semibold leading-none tracking-[-0.03em] text-ink">
                  5
                </p>
                <p className="t-eyebrow mt-4">Spaces we serve</p>
                <p className="t-caption mt-3 max-w-[28ch]">
                  Homes, offices, BnBs, lodges and hotels. One standard, from
                  the household to the front desk.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
