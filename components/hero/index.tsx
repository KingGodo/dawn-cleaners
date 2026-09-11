"use client"

import { HeroCaption } from "@/components/hero/caption"
import { HeroFrame } from "@/components/hero/frame"
import { HeroMedia } from "@/components/hero/media"
import { HeroOffer } from "@/components/hero/offer"
import { HeroOverlay } from "@/components/hero/overlay"
import { HeroStills } from "@/components/hero/stills"
import { HeroWordmark } from "@/components/hero/wordmark"
import { photos } from "@/lib/site"

export function Hero() {
  return (
    <HeroFrame
      media={
        <HeroMedia
          src={photos.heroWide}
          alt="A hotel room finished and made, ready for the next guest"
        />
      }
      overlay={<HeroOverlay />}
      stills={<HeroStills />}
      offer={<HeroOffer />}
    >
      <HeroWordmark />
      <HeroCaption />
    </HeroFrame>
  )
}
