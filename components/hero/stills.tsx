import Image from "next/image"
import { photos } from "@/lib/site"

const stills = [
  {
    src: photos.bathroom,
    alt: "A bathroom finished to a hospitality standard",
    className: "right-8 top-[32%] size-28 lg:right-12 lg:size-36",
  },
  {
    src: photos.kitchen,
    alt: "A kitchen reset and ready",
    className:
      "right-36 top-[46%] h-24 w-32 lg:right-44 lg:h-32 lg:w-40",
  },
] as const

export function HeroStills() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[4] hidden md:block">
      {stills.map((still) => (
        <div
          key={still.src}
          className={`absolute overflow-hidden rounded-[1.25rem] shadow-[var(--elevation-md)] ring-[3px] ring-white ${still.className}`}
        >
          <Image
            src={still.src}
            alt={still.alt}
            fill
            sizes="180px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}
