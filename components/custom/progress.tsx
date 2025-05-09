"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  determinate?: boolean
  size?: "default" | "sm" | "lg"
  variant?: "default" | "success" | "destructive"
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      determinate = true,
      size = "default",
      variant = "default",
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={determinate ? value : undefined}
        data-state={determinate ? "determinate" : "indeterminate"}
        data-size={size}
        data-variant={variant}
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-secondary",
          {
            "h-4": size === "default",
            "h-2": size === "sm",
            "h-6": size === "lg",
          },
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "h-full w-full flex-1 transition-all",
            {
              "bg-primary": variant === "default",
              "bg-green-500": variant === "success",
              "bg-red-500": variant === "destructive",
              "animate-progress-indeterminate": !determinate,
              "animate-none": determinate,
            }
          )}
          style={{
            transform: determinate ? `translateX(-${100 - percentage}%)` : undefined,
          }}
        />
      </div>
    )
  }
)

Progress.displayName = "Progress"

export { Progress }