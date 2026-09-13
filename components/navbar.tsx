"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { Container } from "@/components/container"
import { QuoteChip } from "@/components/quote-chip"
import { duration, springCalm } from "@/lib/animations"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const overHero = pathname === "/" && !compact && !open

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
        "sticky top-0 z-50 transition-[height,background-color,box-shadow,backdrop-filter] duration-[var(--duration-ui)] ease-[var(--ease-out)]",
        overHero
          ? "h-16 bg-transparent"
          : compact
            ? "h-14 bg-canvas shadow-[inset_0_-1px_0_var(--hairline)]"
            : "h-16 bg-canvas"
      )}
    >
      <Container width="frame" className="flex h-full items-center justify-between">
        <Logo inverted={overHero} />

        <nav
          className={cn(
            "hidden items-center gap-5 xl:gap-7 lg:flex",
            overHero &&
              "rounded-full bg-navy/45 px-5 py-2 backdrop-blur-[20px] backdrop-saturate-150"
          )}
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] font-medium tracking-[-0.011em] transition-colors duration-[var(--duration-ui)] ease-[var(--ease-out)]",
                overHero
                  ? "text-white/80 hover:text-white"
                  : pathname === item.href
                    ? "text-ink hover:text-ink"
                    : "text-lead hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <QuoteChip
            href="/contact"
            tone={overHero ? "white" : "navy"}
            className="hidden md:inline-flex"
          >
            Get a Quote
          </QuoteChip>

          <button
            type="button"
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-md lg:hidden motion-safe:active:scale-[0.97]",
              overHero
                ? "border border-white/30 text-white"
                : "border border-hairline text-ink"
            )}
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
              className={cn(
                "fixed inset-0 z-40 bg-navy/20 lg:hidden",
                compact ? "top-14" : "top-16"
              )}
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
                    className="rounded-md px-2 py-3 text-[15px] font-medium tracking-[-0.02em] text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
                <QuoteChip href="/contact" className="mt-6" onClick={() => setOpen(false)}>
                  Get a Quote
                </QuoteChip>
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
