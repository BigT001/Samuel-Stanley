"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsContext = React.createContext<{
  value: string
  onValueChange: (value: string) => void
}>({
  value: "",
  onValueChange: () => {},
})

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: TabsProps) {
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue || "")

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      if (value === undefined) {
        setSelectedValue(newValue)
      }
      onValueChange?.(newValue)
    },
    [value, onValueChange]
  )

  return (
    <TabsContext.Provider
      value={{ value: value ?? selectedValue, onValueChange: handleValueChange }}
    >
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, ...props }: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center justify-start w-full",
        className
      )}
      {...props}
    />
  )
}

export function TabsTrigger({ className, value, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext)
  const isActive = context.value === value

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isActive}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm transition-all",
        "hover:bg-muted/60 hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground",
        className
      )}
      onClick={() => context.onValueChange(value)}
      {...props}
    />
  )
}

export function TabsContent({ value, className, ...props }: TabsContentProps) {
  const context = React.useContext(TabsContext)

  if (context.value !== value) {
    return null
  }

  return (
    <div
      role="tabpanel"
      className={cn(
        "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  )
}