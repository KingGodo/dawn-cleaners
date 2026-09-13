import Image from "next/image"
import { Container } from "@/components/container"
import { QuoteChip } from "@/components/quote-chip"
import { photos, site } from "@/lib/site"

export function CtaBand() {
  return (
    <section className="pb-[var(--section-y)]">
      <Container width="frame">
        <div className="relative overflow-hidden rounded-[var(--radius-frame)] bg-navy px-6 py-16 text-navy-foreground sm:px-12 sm:py-20 lg:px-16">
          <Image
            src={photos.linens}
            alt=""
            fill
            sizes="(min-width: 1440px) 1440px, 100vw"
            className="object-cover object-[center_40%]"
          />
          <div aria-hidden className="absolute inset-0 bg-navy/70" />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/45 to-navy/25"
          />

          <div className="relative z-[1]">
            <p className="t-eyebrow text-white/55">Request a quote</p>
            <h2 className="t-h2 mt-5 max-w-[16ch] text-white">
              Ready for a cleaner space?
            </h2>
            <p className="t-lead mt-4 max-w-[38ch] text-white/75">
              Tell us the property and how often you need us. We’ll come back
              with a clear scope, not a generic package.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <QuoteChip href="/contact" tone="white">
                Request a Quote
              </QuoteChip>
              <QuoteChip href={site.contact.whatsapp} tone="white">
                WhatsApp the team
              </QuoteChip>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
