import { ArrowUpRight } from "lucide-react"
import { heroStats } from "@/lib/site"

export function HeroOffer() {
  return (
    <div className="absolute inset-x-5 bottom-6 z-[3] sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <h1 className="min-w-0 text-[clamp(1.85rem,1.1rem+3.2vw,4.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-white">
          <span className="block md:whitespace-nowrap">Check in ready.</span>
          <span className="inline-flex items-center gap-3 md:whitespace-nowrap">
            Every time.
            <span
              aria-hidden
              className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-white/30 sm:size-8 lg:size-9"
            >
              <ArrowUpRight className="size-3.5 sm:size-4" />
            </span>
          </span>
        </h1>
        <dl className="grid min-w-0 grid-cols-2 gap-4 sm:min-w-[20rem] sm:gap-8 lg:gap-10">
          {heroStats.map((stat, index) => (
            <div
              key={stat.value}
              className={
                index > 0
                  ? "border-l border-white/20 pl-4 sm:pl-8 lg:pl-10"
                  : undefined
              }
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="max-w-[14ch] text-[clamp(0.95rem,0.8rem+0.5vw,1.5rem)] font-semibold uppercase leading-[1.08] tracking-[-0.03em] text-white">
                {stat.value}
              </dd>
              <p className="mt-2 max-w-[18ch] text-[12px] leading-relaxed tracking-[-0.01em] text-white/60">
                {stat.copy}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
