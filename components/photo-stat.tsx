import Image from "next/image"
import { cn } from "@/lib/utils"

type PhotoStatProps = {
  src: string
  alt: string
  index?: string
  value?: string
  label?: string
  copy?: string
  sizes?: string
  className?: string
  ratio?: string
}

export function PhotoStat({
  src,
  alt,
  index,
  value,
  label,
  copy,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  className,
  ratio = "4 / 5",
}: PhotoStatProps) {
  const hasCaption = Boolean(value || label || copy)

  return (
    <figure
      className={cn(
        "relative isolate overflow-hidden rounded-[var(--radius-frame)] bg-mist",
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover object-center"
      />
      {hasCaption ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/15 to-transparent"
        />
      ) : (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 shadow-[var(--inset-image)]"
        />
      )}
      {index ? (
        <span className="absolute right-5 top-5 font-mono text-[12px] tabular-nums tracking-[-0.02em] text-white/70">
          {index}
        </span>
      ) : null}
      {hasCaption ? (
        <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          {value ? (
            <p className="text-[clamp(1.35rem,1.15rem+0.5vw,1.75rem)] font-semibold leading-none tracking-[-0.03em] text-white">
              {value}
            </p>
          ) : null}
          {label ? (
            <p className="t-eyebrow mt-2 text-white/70">{label}</p>
          ) : null}
          {copy ? (
            <p className="t-caption mt-2 max-w-[28ch] text-white/75">{copy}</p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  )
}
