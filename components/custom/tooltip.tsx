"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  delayDuration?: number
}

export function Tooltip({
  children,
  content,
  side = "top",
  align = "center",
  delayDuration = 200,
}: TooltipProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [coords, setCoords] = React.useState({ x: 0, y: 0 })
  const triggerRef = React.useRef<HTMLDivElement>(null)
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const timeoutRef = React.useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect()
        setCoords({ x: rect.left, y: rect.top })
        setIsOpen(true)
      }
    }, delayDuration)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(false)
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const getTooltipPosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return {}

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()

    const positions = {
      top: {
        x:
          triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
        y: triggerRect.top - tooltipRect.height - 5,
      },
      bottom: {
        x:
          triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
        y: triggerRect.bottom + 5,
      },
      left: {
        x: triggerRect.left - tooltipRect.width - 5,
        y:
          triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
      },
      right: {
        x: triggerRect.right + 5,
        y:
          triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
      },
    }

    const alignments = {
      start: 0,
      center: 0,
      end: 0,
    }

    if (side === "top" || side === "bottom") {
      alignments.start = triggerRect.left
      alignments.center = positions[side].x
      alignments.end = triggerRect.right - tooltipRect.width
    } else {
      alignments.start = triggerRect.top
      alignments.center = positions[side].y
      alignments.end = triggerRect.bottom - tooltipRect.height
    }

    const position = positions[side]
    if (side === "top" || side === "bottom") {
      position.x = alignments[align]
    } else {
      position.y = alignments[align]
    }

    return {
      left: `${position.x}px`,
      top: `${position.y}px`,
    }
  }

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>
      {isOpen && (
        <div
          ref={tooltipRef}
          role="tooltip"
          style={getTooltipPosition()}
          className={cn(
            "fixed z-50 max-w-xs rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95",
            side === "top" && "slide-in-from-bottom-2",
            side === "right" && "slide-in-from-left-2",
            side === "bottom" && "slide-in-from-top-2",
            side === "left" && "slide-in-from-right-2"
          )}
        >
          {content}
        </div>
      )}
    </>
  )
}