"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"
import { duration, easeOut } from "@/lib/animations"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: duration.enter, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
}

export function Stagger({ children, className }: StaggerProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function FadeItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      variants={
        reduce
          ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
          : { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }
      }
      transition={{ duration: duration.enter, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}
