import { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "next-themes"

type ThemeColors = {
  background: string
  foreground: string
  primary: string
  border: string
  accent: string
}

const lightColors: ThemeColors = {
  background: "#FFFFFF",
  foreground: "#000000",
  primary: "#000000",
  border: "#E5E5E5",
  accent: "#1A1A1A"
}

const darkColors: ThemeColors = {
  background: "#000000",
  foreground: "#FFFFFF",
  primary: "#FFFFFF",
  border: "#262626",
  accent: "#E5E5E5"
}

type MinimalThemeContextType = {
  colors: ThemeColors
  toggleTheme: () => void
}

const MinimalThemeContext = createContext<MinimalThemeContextType | undefined>(undefined)

export function MinimalThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()
  const [colors, setColors] = useState<ThemeColors>(theme === "dark" ? darkColors : lightColors)

  useEffect(() => {
    setColors(theme === "dark" ? darkColors : lightColors)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <MinimalThemeContext.Provider value={{ colors, toggleTheme }}>
      {children}
    </MinimalThemeContext.Provider>
  )
}

export function useMinimalTheme() {
  const context = useContext(MinimalThemeContext)
  if (context === undefined) {
    throw new Error("useMinimalTheme must be used within a MinimalThemeProvider")
  }
  return context
}
