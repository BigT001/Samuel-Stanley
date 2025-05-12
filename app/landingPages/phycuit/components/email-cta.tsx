"use client"

import { useState } from "react"
import { Button } from "@/components/custom/button"
import { cn } from "@/lib/utils"

export function EmailCTA() {
  const [email, setEmail] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = () => {
    const valid = validateEmail(email)
    setIsValid(valid)
    if (valid) {
      // Handle submission
      console.log("Email submitted:", email)
    }
  }

  return (
    <div className="flex items-center gap-4 relative">
      <div className="relative group flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Type your email"
          className={cn(
            "w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-4 py-2.5",
            "text-white placeholder:text-gray-500",
            "focus:outline-none focus:ring-2 focus:ring-lime-400/50",
            "transition-all duration-300",
            !isValid && "border-pink-500/50 focus:ring-pink-500/50"
          )}
        />
        <div className={cn(
          "absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-lime-400/0 via-lime-400 to-lime-400/0",
          "transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500",
          isFocused && "scale-x-100"
        )} />
      </div>
      <Button 
        onClick={handleSubmit}
        className={cn(
          "bg-pink-500 hover:bg-pink-600 text-white px-6 relative overflow-hidden group",
          "transition-all duration-300 transform hover:translate-y-[-2px]"
        )}
      >
        <span className="relative z-10">START 7-DAY TRIAL</span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
      {!isValid && (
        <div className="absolute left-0 -bottom-6 text-pink-500 text-sm">
          Please enter a valid email address
        </div>
      )}
    </div>
  )
}
