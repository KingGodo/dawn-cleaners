import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  eyebrow: string
  title: string
  lead: string
  action?: { href: string; label: string }
}

export function PageHero({ eyebrow, title, lead, action }: PageHeroProps) {
  return (
    <section className="border-b border-hairline pb-14 pt-10 sm:pb-16 sm:pt-14">
      <Container className="max-w-[44rem]">
        <p className="t-eyebrow">{eyebrow}</p>
        <h1 className="t-display mt-5">{title}</h1>
        <p className="t-lead mt-6">{lead}</p>
        {action ? (
          <Link
            href={action.href}
            className={cn(buttonVariants({ size: "cta" }), "mt-8")}
          >
            {action.label}
            <ArrowRight className="size-4 transition-transform duration-[var(--duration-ui)] ease-[var(--ease-out)] group-hover/button:translate-x-1" />
          </Link>
        ) : null}
      </Container>
    </section>
  )
}
