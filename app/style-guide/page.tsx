"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { MediaFrame } from "@/components/media-frame"
import { QuoteChip } from "@/components/quote-chip"
import { cn } from "@/lib/utils"

const NAV = [
  { id: "direction", label: "Direction" },
  { id: "color", label: "Color" },
  { id: "type", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "buttons", label: "Buttons" },
  { id: "navigation", label: "Navigation" },
  { id: "containers", label: "Containers" },
  { id: "images", label: "Images" },
  { id: "radius", label: "Radius" },
  { id: "shadows", label: "Shadows" },
  { id: "motion", label: "Motion" },
]

const COLORS = [
  { name: "Dawn Blue", hex: "#155EEF", className: "bg-primary", light: true },
  { name: "Hover", hex: "#0E4ED8", className: "bg-primary-hover", light: true },
  { name: "Navy", hex: "#0B1F3A", className: "bg-navy", light: true },
  { name: "Mist", hex: "#EAF2FF", className: "bg-mist" },
  { name: "Canvas", hex: "#F8FAFC", className: "bg-canvas", border: true },
  { name: "White", hex: "#FFFFFF", className: "bg-white", border: true },
  { name: "Ink", hex: "#0F172A", className: "bg-ink", light: true },
  { name: "Lead", hex: "#334155", className: "bg-lead", light: true },
  { name: "Slate", hex: "#64748B", className: "bg-slate", light: true },
  { name: "Faint", hex: "#94A3B8", className: "bg-faint", light: true },
]

const SPACES = [4, 8, 12, 16, 24, 32, 48, 64, 80, 96]

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <header className="sticky top-0 z-40 border-b border-hairline bg-[var(--nav-material)] backdrop-blur-[20px] backdrop-saturate-150">
        <div className="mx-auto flex h-14 max-w-[72rem] items-center justify-between site-gutter">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="t-caption hidden sm:inline">Design system</span>
          </div>
          <Link
            href="/"
            className="t-caption transition-colors duration-[var(--duration-ui)] hover:text-ink"
          >
            Back to site
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-[72rem] site-gutter lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-16">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] py-10 lg:block">
          <p className="t-eyebrow mb-5">Index</p>
          <nav className="flex flex-col gap-2">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[13px] font-medium tracking-[-0.011em] text-lead transition-colors duration-[var(--duration-ui)] hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="py-12 pb-32 lg:py-16">
          <section id="direction" className="max-w-copy">
            <p className="t-eyebrow">Dawn Cleaners</p>
            <h1 className="t-display mt-4">Visual language</h1>
            <p className="t-lead mt-6">
              Clean, calm, precise. Inspired by Apple&apos;s principles, not
              Apple&apos;s website. Blue is an accent. Photography and type do
              the work.
            </p>
          </section>

          <Rule id="color" title="Color">
            <p className="t-caption mb-8 max-w-copy">
              Four-level contrast. One accent. Navy is the conversion control
              and the closing band. Dawn Blue is not a button color.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {COLORS.map((color) => (
                <div key={color.hex} className="min-w-0">
                  <div
                    className={cn(
                      "h-20 rounded-[var(--radius-md)]",
                      color.className,
                      color.border && "border border-hairline"
                    )}
                  />
                  <p className="t-label mt-2.5">{color.name}</p>
                  <p className="font-mono text-[11px] text-faint">{color.hex}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-2">
              <p className="text-sm font-medium text-ink">Primary ink</p>
              <p className="text-sm text-lead">Secondary lead</p>
              <p className="text-sm text-slate">Muted slate</p>
              <p className="text-sm text-faint">Faint index</p>
            </div>
          </Rule>

          <Rule id="type" title="Typography">
            <p className="t-caption mb-8 max-w-copy">
              Geist Sans. Tracking tightens as size grows. Display stays inside
              24 to 38px. Body is 14px.
            </p>
            <div className="space-y-8">
              <Specimen label="Eyebrow">
                <p className="t-eyebrow">Dawn Cleaners</p>
              </Specimen>
              <Specimen label="Display">
                <p className="t-display">Professional cleaning.</p>
              </Specimen>
              <Specimen label="Heading 2">
                <p className="t-h2">Cleaning for every kind of space.</p>
              </Specimen>
              <Specimen label="Heading 3">
                <p className="t-h3">Residential Cleaning</p>
              </Specimen>
              <Specimen label="Lead">
                <p className="t-lead max-w-copy">
                  Reliable cleaning for homes, offices, BnBs, lodges and hotels.
                </p>
              </Specimen>
              <Specimen label="Caption">
                <p className="t-caption">Property manager · BnB</p>
              </Specimen>
            </div>
          </Rule>

          <Rule id="spacing" title="Spacing">
            <p className="t-caption mb-8 max-w-copy">
              4px grid. Section padding is generous for a brand site, not a
              dashboard.
            </p>
            <div className="flex flex-wrap items-end gap-4">
              {SPACES.map((value) => (
                <div key={value} className="text-center">
                  <div
                    className="bg-primary/80"
                    style={{ width: value, height: 36 }}
                  />
                  <p className="mt-2 font-mono text-[10px] text-faint">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Rule>

          <Rule id="buttons" title="Buttons">
            <p className="t-caption mb-8 max-w-copy">
              One control. Navy pill, 44px, circle arrow. White on dark bands.
              Press scale 0.97.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <QuoteChip href="#buttons">Get a Quote</QuoteChip>
              <QuoteChip disabled>Sending</QuoteChip>
            </div>
            <div className="mt-8 rounded-[var(--radius-frame)] bg-navy p-8">
              <div className="flex flex-wrap items-center gap-3">
                <QuoteChip href="#buttons" tone="white">
                  Request a Quote
                </QuoteChip>
                <QuoteChip href="#buttons" tone="white">
                  WhatsApp the team
                </QuoteChip>
              </div>
            </div>
          </Rule>

          <Rule id="navigation" title="Navigation">
            <p className="t-caption mb-8 max-w-copy">
              Compact on scroll. Translucent material. Quote remains the only
              filled control.
            </p>
            <div className="overflow-hidden rounded-[var(--radius-frame)] border border-hairline bg-white">
              <div className="flex h-16 items-center justify-between px-5">
                <Logo href="/style-guide" />
                <div className="hidden items-center gap-6 sm:flex">
                  {["Services", "Industries", "About", "Contact"].map((item) => (
                    <span
                      key={item}
                      className="text-[13.5px] font-medium text-lead"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <QuoteChip href="/contact" className="pointer-events-none">
                  Get a Quote
                </QuoteChip>
              </div>
              <div className="flex h-14 items-center justify-between border-t border-hairline bg-canvas/80 px-5">
                <Logo href="/style-guide" />
                <p className="t-caption">Compact · 56px · blur</p>
              </div>
            </div>
          </Rule>

          <Rule id="containers" title="Containers">
            <p className="t-caption mb-8 max-w-copy">
              Copy 640. Content 1152. Wide 1280. Frame 1440. Gutters fluid.
            </p>
            <div className="space-y-3">
              {[
                ["copy", "40rem", "w-[40%]"],
                ["content", "72rem", "w-[70%]"],
                ["wide", "80rem", "w-[82%]"],
                ["frame", "90rem", "w-full"],
              ].map(([name, size, width]) => (
                <div key={name} className="flex items-center gap-3">
                  <div
                    className={cn("h-8 rounded-md bg-mist", width)}
                  />
                  <p className="t-caption shrink-0">
                    {name} · {size}
                  </p>
                </div>
              ))}
            </div>
          </Rule>

          <Rule id="images" title="Images">
            <p className="t-caption mb-8 max-w-copy">
              12px radius when contained. Inset hairline. Hover scale 1.03
              inside a still frame.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <MediaFrame
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80"
                alt="Hotel room with white linens"
                ratio="4 / 5"
                sizes="40vw"
              />
              <div className="flex flex-col gap-4">
                <MediaFrame
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
                  alt="Quiet modern office"
                  ratio="16 / 10"
                  sizes="40vw"
                />
                <div className="min-h-[8rem] flex-1 rounded-[var(--radius-image)] bg-mist shadow-[var(--inset-image)]" />
              </div>
            </div>
          </Rule>

          <Rule id="radius" title="Radius">
            <p className="t-caption mb-8 max-w-copy">
              Chrome 6 / 8 / 12. Frames 24. Conversion chips are fully round.
            </p>
            <div className="flex flex-wrap items-end gap-6">
              {[
                ["sm", "6px", "rounded-sm"],
                ["md", "8px", "rounded-md"],
                ["lg", "12px", "rounded-lg"],
                ["frame", "24px", "rounded-[24px]"],
                ["chip", "pill", "rounded-full"],
              ].map(([name, value, radius]) => (
                <div key={name} className="text-center">
                  <div className={cn("size-16 bg-navy", radius)} />
                  <p className="t-caption mt-2">
                    {name} · {value}
                  </p>
                </div>
              ))}
            </div>
          </Rule>

          <Rule id="shadows" title="Shadows">
            <p className="t-caption mb-8 max-w-copy">
              Quiet. Hairlines do more work than drop shadows.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                ["xs", "shadow-xs"],
                ["sm", "shadow-sm"],
                ["md", "shadow-md"],
              ].map(([name, shadow]) => (
                <div
                  key={name}
                  className={cn(
                    "flex h-24 items-end rounded-[var(--radius-lg)] bg-white p-4",
                    shadow
                  )}
                >
                  <p className="t-caption">{name}</p>
                </div>
              ))}
            </div>
          </Rule>

          <Rule id="motion" title="Motion">
            <p className="t-caption mb-8 max-w-copy">
              Critically damped. Feedback on press. Same path in and out.
              Reduced motion becomes a cross-fade.
            </p>
            <ul className="max-w-copy space-y-3 t-body">
              <li>Micro 150ms · UI 220ms · enter 500ms · story 800ms</li>
              <li>Ease: cubic-bezier(0.23, 1, 0.32, 1)</li>
              <li>Spring bounce 0 · response 0.4</li>
              <li>Press scale 0.97 on pointer-down</li>
              <li>No parallax or image reveal until the hero pass</li>
            </ul>
            <QuoteChip href="#motion" className="mt-8">
              Press me
            </QuoteChip>
          </Rule>
        </main>
      </div>
    </div>
  )
}

function Rule({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mt-20 border-t border-hairline pt-10">
      <h2 className="t-h2 mb-6">{title}</h2>
      {children}
    </section>
  )
}

function Specimen({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div>
      <p className="t-caption mb-3">{label}</p>
      {children}
    </div>
  )
}
