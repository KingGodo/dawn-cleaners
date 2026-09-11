import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react"
import { cn } from "@/lib/utils"

const fieldClass =
  "h-11 w-full rounded-md border border-hairline bg-white px-3.5 text-[15px] tracking-[-0.011em] text-ink outline-none transition-[border-color,box-shadow] duration-[var(--duration-ui)] ease-[var(--ease-out)] placeholder:text-faint focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring/25 disabled:opacity-50"

export function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string
  htmlFor: string
  hint?: string
  children: ReactNode
}) {
  return (
    <label className="block" htmlFor={htmlFor}>
      <span className="t-label mb-2 block">{label}</span>
      {children}
      {hint ? <span className="t-caption mt-1.5 block">{hint}</span> : null}
    </label>
  )
}

export function TextInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClass, className)} {...props} />
}

export function TextArea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldClass, "h-32 resize-y py-3", className)}
      {...props}
    />
  )
}

export function SelectInput({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(fieldClass, "appearance-none pr-10", className)}
      {...props}
    >
      {children}
    </select>
  )
}
