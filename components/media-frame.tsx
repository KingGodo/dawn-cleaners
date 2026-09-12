import Image from "next/image"
import { cn } from "@/lib/utils"

type MediaFrameProps = {
  src: string
  alt: string
  ratio?: string
  priority?: boolean
  sizes?: string
  className?: string
  radius?: "image" | "none"
}

export function MediaFrame({
  src,
  alt,
  ratio = "3 / 2",
  priority = false,
  sizes = "(min-width: 1024px) 52vw, 100vw",
  className,
  radius = "image",
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden bg-mist",
        radius === "image" ? "rounded-[var(--radius-frame)]" : "rounded-none",
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center transition-transform duration-[var(--duration-story)] ease-[var(--ease-out)] motion-safe:group-hover:scale-[1.03]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 shadow-[var(--inset-image)]"
      />
    </div>
  )
}
