"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Stat {
  value: number
  label: string
}

export function AnimatedStats({ stats }: { stats: Stat[] }) {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000 // 2 seconds animation
    const steps = 60
    const interval = duration / steps

    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.value / steps
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timer)
        }
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = Math.round(current)
          return newCounts
        })
      }, interval)
    })
  }, [stats])

  return (
    <div className="flex items-center gap-12 pt-8">
      {stats.map((stat, index) => (
        <div key={stat.label} className="space-y-1 group">
          <div className="text-4xl font-bold text-white relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:to-lime-400 transition-all duration-300">
              {counts[index]}K
            </span>
            <div className="absolute -inset-2 bg-lime-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
