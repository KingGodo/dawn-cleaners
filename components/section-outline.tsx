import type { ReactNode } from "react"
import { Container } from "@/components/container"
import { cn } from "@/lib/utils"

type SectionOutlineProps = {
  id: string
  index: string
  label: string
  heading: string
  note?: string
  children?: ReactNode
  className?: string
}

export function SectionOutline({
  id,
  index,
  label,
  heading,
  note,
  children,
  className,
}: SectionOutlineProps) {
  return (
    <section
      id={id}
      className={cn(
        "site-section border-t border-hairline",
        className
      )}
    >
      <Container>
        <div className="flex items-baseline justify-between gap-6">
          <p className="t-eyebrow">
            {index}
            <span className="mx-3 text-faint">/</span>
            {label}
          </p>
        </div>
        <h2 className="t-h2 mt-6 max-w-[18ch]">{heading}</h2>
        {note ? <p className="t-caption mt-4 max-w-copy">{note}</p> : null}
        {children}
      </Container>
    </section>
  )
}
