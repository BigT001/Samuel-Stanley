"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(  ({ className, variant = "default", size = "default", asChild, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50";    const variants = {
      default: "bg-black dark:bg-white text-white dark:text-black shadow hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300",
      outline: "border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900",
      ghost: "text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900",
      link: "text-black dark:text-white hover:text-zinc-800 dark:hover:text-zinc-200 underline-offset-4 hover:underline"
    }
    
    const sizes = {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }