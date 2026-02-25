import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "accent"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-primary text-white": variant === "default",
          "bg-secondary text-white": variant === "secondary",
          "border border-primary text-primary": variant === "outline",
          "bg-accent text-white": variant === "accent",
        },
        className
      )}
      {...props}
    />
  )
)
Badge.displayName = "Badge"

export { Badge }
