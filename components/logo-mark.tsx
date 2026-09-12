import { cn } from "@/lib/utils"

export function LogoMark({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={cn("size-8 shrink-0", className)}
    >
      <circle cx="16" cy="13.25" r="8" fill="#155EEF" />
      <rect
        x="5"
        y="19.5"
        width="22"
        height="2.75"
        rx="1.375"
        fill={inverted ? "#ffffff" : "#0B1F3A"}
      />
      <rect
        x="9.5"
        y="24.75"
        width="13"
        height="1.6"
        rx="0.8"
        fill={inverted ? "#ffffff" : "#0B1F3A"}
        opacity="0.38"
      />
    </svg>
  )
}
