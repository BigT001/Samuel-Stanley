"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    const [height, setHeight] = React.useState<number | undefined>(undefined)
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)

    React.useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement)

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      const target = e.target as HTMLTextAreaElement
      target.style.height = "auto"  // Reset height to recalculate
      target.style.height = `${target.scrollHeight}px`
      setHeight(target.scrollHeight)
    }

    React.useEffect(() => {
      if (textareaRef.current) {
        handleInput({ target: textareaRef.current } as unknown as React.FormEvent<HTMLTextAreaElement>)
      }
    }, [props.value])

    return (
      <textarea
        ref={textareaRef}
        onInput={handleInput}
        style={{ height: height ? `${height}px` : "auto" }}
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }