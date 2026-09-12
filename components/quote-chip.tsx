import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type QuoteChipProps = {
  href?: string
  children: string
  className?: string
  tone?: "navy" | "white"
  type?: "button" | "submit"
  disabled?: boolean
  onClick?: () => void
}

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/i.test(href)
}

export function QuoteChip({
  href,
  children,
  className,
  tone = "navy",
  type = "button",
  disabled,
  onClick,
}: QuoteChipProps) {
  const dark = tone === "navy"
  const classes = cn(
    "group/chip inline-flex h-11 w-fit items-center rounded-full pl-5 pr-1.5",
    "text-left motion-safe:active:scale-[0.97]",
    "transition-colors duration-[var(--duration-ui)] ease-[var(--ease-out)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    dark
      ? "bg-navy text-white hover:bg-[color-mix(in_srgb,var(--navy),white_8%)] focus-visible:ring-navy/30 focus-visible:ring-offset-background"
      : "bg-white text-navy hover:bg-white/90 focus-visible:ring-white/40 focus-visible:ring-offset-navy",
    className
  )

  const inner = (
    <>
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
    </>
  )

  if (!href || disabled) {
    return (
      <button type={type} disabled={disabled} className={classes} onClick={onClick}>
        {inner}
      </button>
    )
  }

  if (isExternalHref(href)) {
    const newTab = href.startsWith("http")
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(newTab
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {inner}
    </Link>
  )
}
