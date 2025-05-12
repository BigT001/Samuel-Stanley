"use client"

import * as React from "react"
import { Button } from "@/components/custom/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/custom/dropdown-menu"
import { CURRENCY_SYMBOLS, type CurrencyCode } from "@/lib/currency-converter"

interface CurrencySelectorProps {
  value: CurrencyCode
  onChange: (currency: CurrencyCode) => void
}

export function CurrencySelector({ value, onChange }: CurrencySelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="px-4 py-2 text-lg font-medium rounded-lg bg-red-900/10 text-red-900 hover:bg-red-900/20 transition-colors">
          {CURRENCY_SYMBOLS[value]} {value}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 bg-white/95 backdrop-blur-md border border-red-100">
        {(Object.keys(CURRENCY_SYMBOLS) as CurrencyCode[]).map((currency) => (
          <DropdownMenuItem
            key={currency}
            onClick={() => onChange(currency)}
          >
            <div className="flex items-center justify-between w-full py-1">
              <span className="text-lg font-medium">
                {CURRENCY_SYMBOLS[currency]} {currency}
              </span>
              {currency === value && (
                <svg
                  className="h-4 w-4 text-red-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
