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
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-black dark:data-[state=on]:bg-white data-[state=on]:text-white dark:data-[state=on]:text-black",
      {
        "h-9 px-3": size === "default",
        "h-7 px-2": size === "sm",
        "h-11 px-4": size === "lg",
        "border-2 border-black dark:border-white bg-transparent": variant === "outline",
        "hover:bg-zinc-100 dark:hover:bg-zinc-900": variant === "ghost",
      },
      className
    )}
    {...props}
  />
))

Toggle.displayName = "Toggle"

export { Toggle }