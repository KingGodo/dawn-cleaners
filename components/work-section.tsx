import { Container } from "@/components/container"
import { MediaFrame } from "@/components/media-frame"
import { QuoteChip } from "@/components/quote-chip"
import { Reveal } from "@/components/reveal"
import { SplitHeader } from "@/components/split-header"
import { work } from "@/lib/site"

export function WorkSection() {
  const [featured, ...rest] = work

  return (
    <section id="work" className="site-section scroll-mt-20">
      <Container width="frame">
        <Reveal>
          <SplitHeader
            eyebrow="Proof of work"
            heading="Finished spaces, not a pitch deck."
            body="Rooms, kitchens and workplaces handed over the way a guest or a household should find them."
            action={<QuoteChip href="/contact">Book this standard</QuoteChip>}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <figure>
              <MediaFrame
                src={featured.image}
                alt={featured.title}
                ratio="4 / 5"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="rounded-[var(--radius-frame)]"
              />
              <figcaption className="mt-3 flex items-baseline justify-between gap-3 px-1">
                <span className="t-label">{featured.title}</span>
                <span className="t-caption">{featured.meta}</span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.slice(0, 4).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <figure>
                  <MediaFrame
                    src={item.image}
                    alt={item.title}
                    ratio="4 / 3"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="rounded-[var(--radius-frame)]"
                  />
                  <figcaption className="mt-3 px-1">
                    <span className="t-label block">{item.title}</span>
                    <span className="t-caption">{item.meta}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
