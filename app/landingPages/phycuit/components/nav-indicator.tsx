"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
}

export function NavIndicator({ items }: { items: NavItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="hidden md:flex items-center gap-8 text-gray-400 relative">
      {items.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          className={cn(
            "hover:text-white transition-colors py-2 relative",
            activeIndex === index && "text-white"
          )}
          onMouseEnter={() => setActiveIndex(index)}
        >
          {item.label}
          {activeIndex === index && (
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lime-400 animate-[width] origin-left">
              <div className="absolute top-0 right-0 h-full w-1 bg-lime-400 rounded-full animate-pulse" />
            </div>
          )}
        </a>
      ))}
    </div>
  )
}
