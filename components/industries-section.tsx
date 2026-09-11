"use client"

import { useState } from "react"
import { Container } from "@/components/container"
import { MediaFrame } from "@/components/media-frame"
import { Reveal } from "@/components/reveal"
import { SplitHeader } from "@/components/split-header"
import { industries } from "@/lib/site"
import { cn } from "@/lib/utils"

export function IndustriesSection() {
  const [active, setActive] = useState(0)
  const current = industries[active]

  return (
    <section id="industries" className="site-section">
      <Container width="frame">
        <Reveal>
          <SplitHeader
            eyebrow="Industries"
            heading="Wherever people gather, the space should already be ready."
            body="Households, workplaces and hospitality properties. Each with a different clock, the same standard."
          />
        </Reveal>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <ul>
            {industries.map((item, index) => (
              <li key={item.name}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex w-full items-baseline justify-between gap-6 border-b border-hairline py-5 text-left transition-colors duration-[var(--duration-ui)] ease-[var(--ease-out)] first:border-t",
                    index === active ? "text-ink" : "text-slate hover:text-ink"
                  )}
                >
                  <span className="text-[clamp(1.75rem,1.2rem+1.6vw,2.75rem)] font-semibold tracking-[-0.03em]">
                    {item.name}
                  </span>
                  <span className="t-caption hidden max-w-[22ch] sm:block">
                    {item.copy}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="lg:sticky lg:top-20">
            <MediaFrame
              src={current.image}
              alt={current.name}
              ratio="4 / 5"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="rounded-[var(--radius-frame)]"
            />
            <p className="t-caption mt-3 sm:hidden">{current.copy}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
