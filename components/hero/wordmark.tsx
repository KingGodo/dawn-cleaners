export function HeroWordmark() {
  return (
    <p
      aria-hidden
      className="hero-wordmark pointer-events-none absolute inset-x-4 top-[4.75rem] z-[2] flex justify-between text-[clamp(2.35rem,13.5vw,3.75rem)] sm:inset-x-8 sm:top-[18%] sm:text-[clamp(3.75rem,18vw,11.5rem)] lg:inset-x-10"
    >
      {"DAWN".split("").map((letter) => (
        <span key={letter}>{letter}</span>
      ))}
    </p>
  )
}
