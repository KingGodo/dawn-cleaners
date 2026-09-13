import Image from "next/image"
import { photos } from "@/lib/site"

export function HeroMedia() {
  return (
    <Image
      src={photos.heroWide}
      alt="A hotel room finished and made, ready for the next guest"
      fill
      priority
      sizes="100vw"
      className="object-cover object-[center_58%]"
    />
  )
}
