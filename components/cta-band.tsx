import { Container } from "@/components/container"
import { QuoteChip } from "@/components/quote-chip"
import { site } from "@/lib/site"

export function CtaBand() {
  return (
    <section className="pb-[var(--section-y)]">
      <Container width="frame">
        <div className="rounded-[var(--radius-frame)] bg-navy px-6 py-16 text-navy-foreground sm:px-12 sm:py-20 lg:px-16">
          <p className="t-eyebrow text-white/45">Request a quote</p>
          <h2 className="t-h2 mt-5 max-w-[16ch] text-white">
            Ready for a cleaner space?
          </h2>
          <p className="t-lead mt-4 max-w-[38ch] text-white/65">
            Tell us the property and how often you need us. We’ll come back with
            a clear scope, not a generic package.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteChip href="/contact" tone="white">
              Request a Quote
            </QuoteChip>
            <a
              href={site.contact.whatsapp}
              className="text-[14px] font-medium tracking-[-0.011em] text-white/70 underline-offset-4 transition-opacity duration-[var(--duration-ui)] hover:text-white hover:underline"
            >
              WhatsApp the team
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
