export function HeroWordmark() {
  return (
    <p
      aria-hidden
      className="hero-wordmark pointer-events-none absolute inset-x-4 top-[4.75rem] z-[2] text-center text-[clamp(2.6rem,18vw,3.4rem)] tracking-[-0.06em] sm:inset-x-8 sm:top-[18%] sm:flex sm:justify-between sm:text-left sm:text-[clamp(3.75rem,18vw,11.5rem)] sm:tracking-[-0.05em] lg:inset-x-10"
    >
      <span className="sm:hidden">DAWN</span>
      <span className="hidden sm:contents">
        {"DAWN".split("").map((letter) => (
          <span key={letter}>{letter}</span>
        ))}
      </span>
    </p>
  )
}
