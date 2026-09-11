"use client"

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Clock, Sparkles } from "lucide-react"
import { Container } from "@/components/container"
import { QuoteChip } from "@/components/quote-chip"
import { SplitHeader } from "@/components/split-header"
import { photos, principles, testimonials } from "@/lib/site"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const features = [
  { icon: Clock, ...principles[0] },
  { icon: Sparkles, ...principles[1] },
] as const

export function WhySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const quote = testimonials[0]

  useLayoutEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    if (!section || !image) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const context = gsap.context(() => {
      gsap.fromTo(
        image,
        { scale: 1.08 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      )
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="site-section">
      <Container width="frame">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <SplitHeader
            eyebrow="Why Dawn Cleaners"
            heading="More than clean. It’s the feeling of walking into a space that’s ready."
            body="We work the way hospitality teams work: a brief, a standard, and a handover you can trust. Homes get the same care as lodges and hotels."
            action={<QuoteChip href="/contact">Get a Quote</QuoteChip>}
            className="lg:grid-cols-1"
          />
          <div
            className="relative overflow-hidden rounded-[var(--radius-frame)] bg-mist"
            style={{ aspectRatio: "16 / 10" }}
          >
            <div
              ref={imageRef}
              className="absolute inset-0 origin-center will-change-transform"
            >
              <Image
                src={photos.lodge}
                alt="A lodge room finished and ready for guests"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-8"
            >
              <item.icon className="size-5 text-navy" strokeWidth={1.75} />
              <h3 className="t-h3 mt-8">{item.title}</h3>
              <p className="t-caption mt-3 max-w-[32ch]">{item.copy}</p>
            </article>
          ))}
          <figure
            className="relative min-h-[18rem] overflow-hidden rounded-[var(--radius-frame)] bg-mist"
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image
              src={photos.linens}
              alt="Linens presented for a guest arrival"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/25 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <p className="max-w-[28ch] text-[15px] font-medium leading-snug tracking-[-0.02em] text-white">
                “{quote.quote}”
              </p>
              <p className="t-caption mt-3 text-white/60">
                {quote.name} · {quote.context}
              </p>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}
