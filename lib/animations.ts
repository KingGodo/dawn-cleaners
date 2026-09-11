/**
 * Dawn motion language.
 *
 * Critically damped by default. Instant press feedback.
 * Animate transform and opacity only. Respect reduced motion.
 */

export const easeOut = [0.23, 1, 0.32, 1] as const
export const easeInOut = [0.77, 0, 0.175, 1] as const
export const easeApple = [0.25, 1, 0.5, 1] as const

export const duration = {
  micro: 0.15,
  ui: 0.22,
  enter: 0.5,
  story: 0.8,
  cinematic: 1.2,
} as const

/** Default UI spring — no overshoot. */
export const springCalm = {
  type: "spring" as const,
  bounce: 0,
  duration: 0.4,
}

export const pressScale = 0.97

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export const reducedMotionFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
