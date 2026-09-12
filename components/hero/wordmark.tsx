export function HeroWordmark() {
  return (
    <p
      aria-hidden
      className="hero-wordmark pointer-events-none absolute inset-x-5 top-24 z-[2] flex justify-center gap-[0.12em] text-[clamp(2.85rem,18vw,11.5rem)] sm:inset-x-8 sm:top-[18%] sm:justify-between sm:gap-0 sm:text-[clamp(3.75rem,18vw,11.5rem)] lg:inset-x-10"
    >
      {"DAWN".split("").map((letter) => (
        <span key={letter}>{letter}</span>
      ))}
    </p>
  )
}
