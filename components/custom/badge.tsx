"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive'
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {    const variants = {
      default: "border-transparent bg-primary/90 text-primary-foreground shadow-sm",
      secondary: "border-transparent bg-secondary/90 text-secondary-foreground backdrop-blur-sm",
      outline: "border-2 border-primary/20 text-primary hover:bg-primary/5",
      destructive: "border-transparent bg-destructive text-destructive-foreground"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }