export function HeroOverlay() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
      <div className="absolute inset-0 bg-navy/40" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy/50 to-transparent sm:h-40" />
      <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-navy/80 via-navy/45 to-transparent sm:h-[50%]" />
    </div>
  )
}
