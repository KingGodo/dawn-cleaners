import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { ArrowRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "group/button inline-flex w-fit shrink-0 items-center justify-center",
    "h-11 rounded-full pl-5 pr-1.5",
    "border border-transparent bg-clip-padding whitespace-nowrap select-none",
    "font-medium outline-none",
    "transition-[color,background-color,border-color,transform,opacity] duration-[var(--duration-ui)] ease-[var(--ease-out)]",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "motion-safe:active:scale-[0.97]",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-navy text-white hover:bg-[color-mix(in_srgb,var(--navy),white_8%)] focus-visible:ring-navy/30 focus-visible:ring-offset-background",
        navy:
          "bg-navy text-white hover:bg-[color-mix(in_srgb,var(--navy),white_8%)] focus-visible:ring-navy/30 focus-visible:ring-offset-background",
        white:
          "bg-white text-navy hover:bg-white/90 focus-visible:ring-white/40 focus-visible:ring-offset-navy",
      },
      size: {
        default: "h-11",
        cta: "h-11",
        icon: "size-11 px-0 pl-0 pr-0",
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
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  const withArrow = size !== "icon"

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {withArrow ? (
        <>
          <span className="pr-3 text-[14px] tracking-[-0.011em]">{children}</span>
          <span
            className={cn(
              "flex size-8 items-center justify-center rounded-full",
              variant === "white" ? "bg-navy/8" : "bg-white/10"
            )}
          >
            <ArrowRight className="size-3.5 transition-transform duration-[var(--duration-ui)] ease-[var(--ease-out)] group-hover/button:translate-x-0.5" />
          </span>
        </>
      ) : (
        children
      )}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
