"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { Container } from "@/components/container"
import { QuoteChip } from "@/components/quote-chip"
import { buttonVariants } from "@/components/ui/button"
import { duration, springCalm } from "@/lib/animations"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-canvas transition-[height,box-shadow,backdrop-filter] duration-[var(--duration-ui)] ease-[var(--ease-out)]",
        compact
          ? "h-14 shadow-[inset_0_-1px_0_var(--hairline)]"
          : "h-16"
      )}
    >
      <Container width="frame" className="flex h-full items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13.5px] font-medium tracking-[-0.011em] transition-colors duration-[var(--duration-ui)] ease-[var(--ease-out)]",
                pathname === item.href ||
                  (item.href.startsWith("/#") && pathname === "/")
                  ? "text-ink hover:text-ink"
                  : "text-lead hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <QuoteChip href="/contact" className="hidden md:inline-flex">
            Get a Quote
          </QuoteChip>

          <button
            type="button"
            className="flex size-10 shrink-0 items-center justify-center rounded-md border border-hairline text-ink lg:hidden motion-safe:active:scale-[0.97]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Dismiss menu"
              className="fixed inset-0 top-14 z-40 bg-navy/20 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.12 : duration.ui }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20.5rem)] flex-col bg-canvas pt-16 shadow-md lg:hidden"
              initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              transition={reduceMotion ? { duration: 0.12 } : springCalm}
            >
              <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile">
                {site.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-3 text-[17px] font-medium tracking-[-0.02em] text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "navy", size: "cta" }),
                    "mt-6 rounded-full"
                  )}
                >
                  Get a Quote
                </Link>
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
