"use client"

import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface BentoGridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
