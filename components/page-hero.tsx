import { Sparkle } from "lucide-react"
import { QuoteChip } from "@/components/quote-chip"
import { Container } from "@/components/container"

type PageHeroProps = {
  eyebrow: string
  title: string
  lead: string
  action?: { href: string; label: string }
}

export function PageHero({ eyebrow, title, lead, action }: PageHeroProps) {
  return (
    <section className="pt-8 pb-4 sm:pt-14 sm:pb-6">
      <Container width="frame">
        <div className="grid gap-4 sm:gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-16">
          <p className="t-eyebrow flex items-center gap-2.5 text-ink">
            <Sparkle className="size-3.5 text-navy" aria-hidden />
            {eyebrow}
          </p>
          <div>
            <h1 className="t-display max-w-[13ch] sm:max-w-[16ch]">{title}</h1>
            <p className="t-lead mt-6 max-w-[48ch]">{lead}</p>
            {action ? (
              <div className="mt-8">
                <QuoteChip href={action.href}>{action.label}</QuoteChip>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
