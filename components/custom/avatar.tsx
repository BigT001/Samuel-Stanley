"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
}

interface AvatarImageProps extends Omit<React.ComponentPropsWithoutRef<typeof Image>, "alt"> {
  alt?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || "Avatar"}
          className="aspect-square h-full w-full"
          width={40}
          height={40}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted">
          <span className="font-medium text-muted-foreground">
            {fallback || alt?.charAt(0) || "?"}
          </span>
        </div>
      )}
    </div>
  )
)
Avatar.displayName = "Avatar"

export { Avatar }
export type { AvatarProps }