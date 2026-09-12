export function HeroOverlay() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
      <div className="absolute inset-0 bg-navy/15" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-navy/75 via-navy/25 to-transparent" />
    </div>
  )
}
