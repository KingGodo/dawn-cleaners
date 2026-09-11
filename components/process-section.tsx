import Image from "next/image"
import { Container } from "@/components/container"
import { SplitHeader } from "@/components/split-header"
import { processSteps } from "@/lib/site"

export function ProcessSection() {
  const [first, ...rest] = processSteps

  return (
    <section id="process" className="site-section">
      <Container width="frame">
        <SplitHeader
          eyebrow="How it works (step by step)"
          heading="We deliver a complete process from the brief to handover. Each visit is designed to be on time and to standard."
        />

        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div
            className="relative min-h-[22rem] overflow-hidden rounded-[var(--radius-frame)] bg-mist"
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image
              src={first.image}
              alt="A workplace we can scope and schedule around"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <article className="flex flex-col justify-between rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-10">
            <span className="font-mono text-[12px] tabular-nums tracking-[-0.02em] text-faint">
              01
            </span>
            <div className="mt-16">
              <p className="t-eyebrow text-ink">Initial consultation</p>
              <h3 className="t-h2 mt-3">{first.title}</h3>
              <p className="t-lead mt-4 max-w-[38ch]">{first.copy}</p>
            </div>
          </article>
        </div>

        <ol className="mt-4 grid gap-4 sm:grid-cols-3">
          {rest.map((step, index) => (
            <li
              key={step.title}
              className="rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-8"
            >
              <p className="font-mono text-[12px] tabular-nums tracking-[-0.02em] text-faint">
                {String(index + 2).padStart(2, "0")}
              </p>
              <h3 className="t-h3 mt-8">{step.title}</h3>
              <p className="t-caption mt-3">{step.copy}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
