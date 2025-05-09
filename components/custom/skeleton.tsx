"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "rectangular" | "circular" | "text"
  animation?: "pulse" | "wave" | "none"
}

export function Skeleton({
  className,
  variant = "text",
  animation = "pulse",
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-in fade-in-0",
        {
          "h-4 w-full": variant === "text",
          "h-12 w-12 rounded-full": variant === "circular",
          "h-full w-full": variant === "rectangular",
          "animate-pulse": animation === "pulse",
          "animate-wave": animation === "wave",
        },
        "bg-muted",
        className
      )}
      {...props}
    />
  )
}