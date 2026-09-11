import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const widths = {
  copy: "max-w-[40rem]",
  content: "max-w-[72rem]",
  wide: "max-w-[80rem]",
  frame: "max-w-[90rem]",
} as const

type ContainerProps = {
  width?: keyof typeof widths
  className?: string
  children: ReactNode
}

export function Container({
  width = "content",
  className,
  children,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full site-gutter",
        widths[width],
        className
      )}
    >
      {children}
    </div>
  )
}
