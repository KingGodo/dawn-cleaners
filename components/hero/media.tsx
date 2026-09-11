import Image from "next/image"

type HeroMediaProps = {
  src: string
  alt: string
}

export function HeroMedia({ src, alt }: HeroMediaProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="100vw"
      className="object-cover object-[center_58%]"
    />
  )
}
