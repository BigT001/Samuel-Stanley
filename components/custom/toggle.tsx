"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cn } from "@/lib/utils"

interface ToggleProps extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline" | "ghost"
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, size = "default", variant = "default", ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
      {
        "h-9 px-3": size === "default",
        "h-7 px-2": size === "sm",
        "h-11 px-4": size === "lg",
        "border border-input bg-transparent": variant === "outline",
        "hover:bg-transparent hover:text-current": variant === "ghost",
      },
      className
    )}
    {...props}
  />
))

Toggle.displayName = "Toggle"

export { Toggle }