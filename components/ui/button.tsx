import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center gap-2",
    "border border-transparent bg-clip-padding whitespace-nowrap select-none",
    "font-medium outline-none",
    "transition-[color,background-color,border-color,transform,opacity] duration-[var(--duration-ui)] ease-[var(--ease-out)]",
    "focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-40",
    "motion-safe:active:scale-[0.97]",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover",
        outline:
          "border-hairline bg-transparent text-foreground hover:bg-white hover:border-[rgb(15_23_42/0.14)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_srgb,var(--secondary),var(--ink)_4%)]",
        ghost:
          "bg-transparent text-foreground hover:bg-secondary",
        navy:
          "bg-navy text-navy-foreground hover:bg-[color-mix(in_srgb,var(--navy),white_8%)]",
        link: "h-auto rounded-none px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 rounded-md px-3.5 text-[13px] tracking-[-0.01em]",
        default: "h-10 rounded-md px-4 text-[14px] tracking-[-0.011em]",
        cta: "h-11 rounded-md px-5 text-[15px] tracking-[-0.011em]",
        icon: "size-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "cta",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "cta",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
