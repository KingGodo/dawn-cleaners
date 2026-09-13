import { Container } from "@/components/container"
import { Reveal } from "@/components/reveal"
import { SplitHeader } from "@/components/split-header"
import { testimonials } from "@/lib/site"
import { cn } from "@/lib/utils"

const columns = [0, 1, 2].map((column) =>
  testimonials.filter((_, index) => index % 3 === column)
)

const speeds = ["38s", "52s", "44s"] as const

function TestimonialCard({
  quote,
  name,
  role,
  context,
}: (typeof testimonials)[number]) {
  return (
    <blockquote className="rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-8">
      <p className="t-body text-ink">“{quote}”</p>
      <footer className="mt-5">
        <p className="t-label">{name}</p>
        <p className="t-caption">
          {role}, {context}
        </p>
      </footer>
    </blockquote>
  )
}

function MarqueeColumn({
  items,
  reverse,
  duration,
}: {
  items: readonly (typeof testimonials)[number][]
  reverse?: boolean
  duration: string
}) {
  const loop = [...items, ...items]

  return (
    <div
      className="relative h-[26rem] overflow-hidden sm:h-[38rem] lg:h-[42rem]"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          reverse ? "animate-marquee-down" : "animate-marquee-up",
          "motion-safe:hover:[animation-play-state:paused]"
        )}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {loop.map((item, index) => (
          <TestimonialCard key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="site-section scroll-mt-20">
      <Container width="frame">
        <Reveal>
          <SplitHeader
            eyebrow="Testimonials"
            heading="Quiet confidence from the people we work with."
            body="Homes, offices and hospitality properties. The same finish, said in their own words."
          />
        </Reveal>

        <div className="mt-14 md:hidden">
          <MarqueeColumn items={testimonials} duration="40s" />
        </div>
        <div className="mt-14 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {columns.map((items, index) => (
            <MarqueeColumn
              key={index}
              items={items}
              reverse={index === 1}
              duration={speeds[index]}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
