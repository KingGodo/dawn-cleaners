"use client"

import { useRef, type ReactNode } from "react"
import { useHeroMotion } from "@/components/hero/use-hero-motion"

type HeroFrameProps = {
  media: ReactNode
  overlay: ReactNode
  stills: ReactNode
  offer: ReactNode
  children: ReactNode
}

export function HeroFrame({
  media,
  overlay,
  stills,
  offer,
  children,
}: HeroFrameProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useHeroMotion(sectionRef, frameRef, mediaRef)

  return (
    <section ref={sectionRef} className="relative pt-3 sm:pt-4">
      <div className="mx-auto w-full max-w-frame site-gutter">
        <div className="relative">
          <div
            ref={frameRef}
            className="relative h-[min(78vh,46rem)] min-h-[32rem] overflow-hidden rounded-[var(--radius-frame)] bg-navy sm:min-h-[36rem]"
          >
            <div
              ref={mediaRef}
              className="absolute inset-0 origin-center will-change-transform"
            >
              {media}
            </div>
            {overlay}
            {children}
            {stills}
            {offer}
          </div>
        </div>
      </div>
    </section>
  )
}
