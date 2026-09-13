"use client"

import { HeroFrame } from "@/components/hero/frame"
import { HeroMedia } from "@/components/hero/media"
import { HeroOffer } from "@/components/hero/offer"
import { HeroOverlay } from "@/components/hero/overlay"
import { HeroStills } from "@/components/hero/stills"
import { HeroWordmark } from "@/components/hero/wordmark"

export function Hero() {
  return (
    <HeroFrame
      media={<HeroMedia />}
      overlay={<HeroOverlay />}
      stills={<HeroStills />}
      offer={<HeroOffer />}
    >
      <HeroWordmark />
    </HeroFrame>
  )
}
