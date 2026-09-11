import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Design System",
  description: "Dawn Cleaners visual language: type, color, motion, and components.",
}

export default function StyleGuideLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
