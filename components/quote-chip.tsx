import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type QuoteChipProps = {
  href: string
  children: string
  className?: string
  tone?: "navy" | "white"
}

export function QuoteChip({
  href,
  children,
  className,
  tone = "navy",
}: QuoteChipProps) {
  const dark = tone === "navy"

  return (
    <Link
      href={href}
      className={cn(
        "group/chip inline-flex h-11 items-center rounded-full pl-5 pr-1.5 motion-safe:active:scale-[0.97]",
        "transition-colors duration-[var(--duration-ui)] ease-[var(--ease-out)]",
        dark
          ? "bg-navy text-white hover:bg-[color-mix(in_srgb,var(--navy),white_8%)]"
          : "bg-white text-navy hover:bg-white/90",
        className
      )}
    >
      <span className="pr-3 text-[14px] font-medium tracking-[-0.011em]">
        {children}
      </span>
      <span
        className={cn(
          "flex size-8 items-center justify-center rounded-full",
          dark ? "bg-white/10" : "bg-navy/8"
        )}
      >
        <ArrowRight className="size-3.5 transition-transform duration-[var(--duration-ui)] ease-[var(--ease-out)] group-hover/chip:translate-x-0.5" />
      </span>
    </Link>
  )
}
