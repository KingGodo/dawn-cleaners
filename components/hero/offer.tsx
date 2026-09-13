import { ArrowUpRight } from "lucide-react"
import { HeroCaption } from "@/components/hero/caption"
import { heroStats } from "@/lib/site"

export function HeroOffer() {
  return (
    <div className="absolute inset-x-4 bottom-[max(1.75rem,env(safe-area-inset-bottom))] z-[3] sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
      <div className="flex flex-col gap-5 sm:gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="min-w-0">
          <HeroCaption />
          <h1 className="mt-3 min-w-0 text-[clamp(1.5rem,3.8vw,2.35rem)] font-semibold uppercase leading-[1.12] tracking-[-0.03em] text-white sm:mt-4">
            <span className="block md:whitespace-nowrap">Check in ready.</span>
            <span className="inline-flex items-center gap-2.5 md:whitespace-nowrap">
              Every time.
              <span
                aria-hidden
                className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/30 sm:size-8 lg:size-9"
              >
                <ArrowUpRight className="size-3 sm:size-4" />
              </span>
            </span>
          </h1>
        </div>
        <dl className="grid min-w-0 grid-cols-2 gap-3 sm:min-w-[20rem] sm:gap-8 lg:gap-10">
          {heroStats.map((stat, index) => (
            <div
              key={stat.value}
              className={
                index > 0
                  ? "border-l border-white/20 pl-3 sm:pl-8 lg:pl-10"
                  : undefined
              }
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="max-w-[12ch] text-[clamp(0.9375rem,2vw,1.25rem)] font-semibold uppercase leading-[1.15] tracking-[-0.03em] text-white sm:max-w-[14ch]">
                {stat.value}
              </dd>
              <p className="mt-1.5 text-[12px] leading-relaxed tracking-[-0.01em] text-white/60 sm:hidden">
                {stat.label}
              </p>
              <p className="mt-2 hidden max-w-[18ch] text-[12px] leading-relaxed tracking-[-0.01em] text-white/60 sm:block">
                {stat.copy}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
