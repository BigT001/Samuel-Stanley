"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, value, onChange, placeholder, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value)
    }

    return (
      <select
        ref={ref}
        value={value}
        onChange={handleChange}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {  options.map((option) => {
          // Extract text content from React elements
          const getTextContent = (node: React.ReactNode): string => {
            if (typeof node === 'string') return node
            if (typeof node === 'number') return node.toString()
            if (Array.isArray(node)) return node.map(getTextContent).join('')
            if (React.isValidElement(node)) {
              return getTextContent(node.props.children)
            }
            return ''
          }
          
          const label = getTextContent(option.label)
          
          return (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {label}
            </option>
          )
        })}
      </select>
    )
  }
)
Select.displayName = "Select"

export { Select }
export type { SelectOption, SelectProps }