"use client"

import { useLayoutEffect, type RefObject } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useHeroMotion(
  sectionRef: RefObject<HTMLElement | null>,
  frameRef: RefObject<HTMLElement | null>,
  mediaRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const section = sectionRef.current
    const frame = frameRef.current
    const media = mediaRef.current
    if (!section || !frame || !media) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const context = gsap.context(() => {
      gsap.fromTo(
        media,
        { scale: 1.08 },
        { scale: 1, duration: 1.5, ease: "power3.out" }
      )
      gsap.to(media, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, section)

    return () => context.revert()
  }, [sectionRef, frameRef, mediaRef])
}
