import { Container } from "@/components/container"
import { Reveal } from "@/components/reveal"
import { SplitHeader } from "@/components/split-header"
import { testimonials } from "@/lib/site"

export function TestimonialsSection() {
  const [featured, ...rest] = testimonials

  return (
    <section id="proof" className="site-section">
      <Container width="frame">
        <Reveal>
          <SplitHeader
            eyebrow="Clients"
            heading="Quiet confidence from the people we work with."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4">
          <Reveal>
            <blockquote className="rounded-[var(--radius-frame)] bg-white p-8 shadow-[var(--inset-image)] sm:p-12">
              <p className="text-[clamp(1.35rem,1.1rem+0.8vw,1.75rem)] font-medium leading-snug tracking-[-0.025em] text-ink">
                “{featured.quote}”
              </p>
              <footer className="mt-8">
                <p className="t-label">{featured.name}</p>
                <p className="t-caption">
                  {featured.role} · {featured.context}
                </p>
              </footer>
            </blockquote>
          </Reveal>
          <div className="grid gap-4">
            {rest.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.06}>
                <blockquote className="rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-8">
                  <p className="t-body text-ink">“{item.quote}”</p>
                  <footer className="mt-4">
                    <p className="t-label">{item.name}</p>
                    <p className="t-caption">
                      {item.role} · {item.context}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
