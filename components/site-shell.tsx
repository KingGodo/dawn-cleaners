import type { ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  )
}
