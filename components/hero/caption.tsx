import { cn } from "@/lib/utils"

export function HeroCaption({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "max-w-[28ch] text-[13px] leading-relaxed tracking-[-0.011em] text-white/80 sm:text-[14px]",
        className
      )}
    >
      Professional cleaning to a guest standard, so you are not inspecting the
      room before anyone arrives.
    </p>
  )
}
