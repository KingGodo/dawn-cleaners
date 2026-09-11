import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  href = "/",
  inverted = false,
}: {
  className?: string
  href?: string
  inverted?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-baseline gap-1.5 text-[15px] font-semibold tracking-[-0.02em]",
        "transition-opacity duration-[var(--duration-ui)] ease-[var(--ease-out)] hover:opacity-70",
        inverted ? "text-white" : "text-ink",
        className
      )}
    >
      <span>Dawn</span>
      <span
        className={cn("font-medium", inverted ? "text-white/70" : "text-slate")}
      >
        Cleaners
      </span>
    </Link>
  )
}
