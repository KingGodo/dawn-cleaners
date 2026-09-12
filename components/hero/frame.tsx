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
    <section ref={sectionRef} className="relative -mt-16">
      <div
        ref={frameRef}
        className="relative h-[100svh] min-h-[36rem] overflow-hidden bg-navy"
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
    </section>
  )
}
