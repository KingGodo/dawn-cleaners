import { Sparkle } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SplitHeaderProps = {
  eyebrow: string
  heading: string
  body?: string
  action?: ReactNode
  className?: string
}

export function SplitHeader({
  eyebrow,
  heading,
  body,
  action,
  className,
}: SplitHeaderProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-16",
        className
      )}
    >
      <p className="t-eyebrow flex items-center gap-2.5 text-ink">
        <Sparkle className="size-3.5 text-navy" aria-hidden />
        {eyebrow}
      </p>
      <div>
        <h2 className="t-h2 max-w-[22ch]">{heading}</h2>
        {body ? <p className="t-lead mt-3 max-w-[48ch]">{body}</p> : null}
        {action ? <div className="mt-7">{action}</div> : null}
      </div>
    </div>
  )
}
