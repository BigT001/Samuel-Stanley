"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CollapsibleContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
  contentId: string
  triggerId: string
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | undefined>(
  undefined
)

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
}

export function Collapsible({
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  children,
  className,
  ...props
}: CollapsibleProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const triggerId = React.useId()
  const contentId = React.useId()

  const open = controlledOpen ?? uncontrolledOpen
  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      setUncontrolledOpen(newOpen)
      onOpenChange?.(newOpen)
    },
    [onOpenChange]
  )

  return (
    <CollapsibleContext.Provider
      value={{
        open,
        onOpenChange: handleOpenChange,
        triggerId,
        contentId,
      }}
    >
      <div
        className={cn("relative", className)}
        {...props}
        data-state={open ? "open" : "closed"}
      >
        {children}
      </div>
    </CollapsibleContext.Provider>
  )
}

export function CollapsibleTrigger({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = React.useContext(CollapsibleContext)
  if (!context) {
    throw new Error("CollapsibleTrigger must be used within a Collapsible")
  }

  return (
    <button
      type="button"
      aria-expanded={context.open}
      aria-controls={context.contentId}
      id={context.triggerId}
      onClick={() => context.onOpenChange(!context.open)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function CollapsibleContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(CollapsibleContext)
  if (!context) {
    throw new Error("CollapsibleContent must be used within a Collapsible")
  }

  return context.open ? (
    <div
      id={context.contentId}
      aria-labelledby={context.triggerId}
      className={cn(
        "animate-collapsible-down overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  ) : null
}