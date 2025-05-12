"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/custom/button"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { CurrencySelector } from "@/components/currency-selector"
import { useCurrency } from "@/lib/currency-context"

interface NavigationItem {
  title: string;
  tag?: string;
  items: {
    title: string;
    href: string;
    description: string;
    availability?: number;
    viewCount?: number;
  }[];
}

const navigationItems: NavigationItem[] = [
  {
    title: "Properties",
    items: [
      {
        title: "All Properties",
        href: "#properties",
        description: "Browse our complete collection of luxury properties",
        viewCount: 2453,
      },
      {
        title: "Penthouses",
        href: "#penthouses",
        description: "Exclusive penthouses with stunning city views",
        availability: 3,
      },
      {
        title: "Villas",
        href: "#villas",
        description: "Luxurious villas in prime locations",
        availability: 5,
      },
      {
        title: "Apartments",
        href: "#apartments",
        description: "High-end apartments in prestigious buildings",
        availability: 8,
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: "Property Search",
        href: "#search",
        description: "Let us help you find your perfect property",
      },
      {
        title: "Virtual Tours",
        href: "#virtual-tours",
        description: "Experience properties from anywhere in the world",
      },
      {
        title: "Concierge",
        href: "#concierge",
        description: "24/7 personalized assistance for all your needs",
      },
    ],
  },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const { currency, setCurrency } = useCurrency()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.navigation-menu')) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      setOpenMenu(null) // Close menu on scroll

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId)
        }
      })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left */}
          <Link href="/landingPages/luxuryCityHomes" className={cn(
            "text-2xl font-bold transition-colors",
            isScrolled ? "text-gray-900" : "text-white"
          )}>
            Luxury City Homes
          </Link>

          {/* Navigation - Center */}
          <div className="hidden md:flex-1 md:flex md:justify-center navigation-menu">
            <nav className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.title} className="relative">
                  <button
                    onClick={() => setOpenMenu(openMenu === item.title ? null : item.title)}
                    className={cn(
                      "group flex items-center space-x-1 px-4 py-2 rounded-md font-medium transition-all duration-200",
                      isScrolled 
                        ? "text-gray-900 hover:bg-gray-100" 
                        : "text-white hover:bg-white/10",
                      openMenu === item.title && (isScrolled ? "bg-gray-100" : "bg-white/10")
                    )}
                  >
                    <span className="relative">
                      {item.title}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-800 transition-all duration-200 
                      group-hover:w-full"/>
                    </span>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 top-full z-50 mt-2 w-[600px] rounded-lg border bg-white/95 backdrop-blur-sm p-4 shadow-lg",
                      "transition-all duration-200 transform origin-top",
                      openMenu === item.title 
                        ? "opacity-100 scale-100 translate-y-0" 
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="grid gap-3 md:grid-cols-2 p-2">
                      {item.items.map((subItem) => (
                        <button
                          key={subItem.title}
                          onClick={() => {
                            const element = document.querySelector(subItem.href)
                            if (element) {
                              const yOffset = -100
                              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                              window.scrollTo({ top: y, behavior: "smooth" })
                              setOpenMenu(null)
                            }
                          }}
                          className="group relative rounded-lg p-4 hover:bg-red-50 transition-colors border border-transparent hover:border-red-100"
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-900">{subItem.title}</div>
                            {subItem.availability && (
                              <span className="ml-2 rounded-full bg-red-900/10 px-2 py-1 text-xs font-medium text-red-900">
                                Only {subItem.availability} left
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{subItem.description}</p>
                          {subItem.viewCount && (
                            <div className="mt-2 flex items-center text-xs text-gray-500">
                              <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              {subItem.viewCount.toLocaleString()} people viewing
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Currency Selector */}
            <CurrencySelector value={currency} onChange={setCurrency} />

            {/* Contact Button */}
            <Button 
              size="lg"
              className={cn(
                "bg-gradient-to-r from-red-800 to-red-900 text-white hover:from-red-900 hover:to-red-950 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-800/20",
                isScrolled 
                  ? "bg-gradient-to-r from-red-800 to-red-900" 
                  : "from-red-800 to-red-900/90"
              )}
              onClick={() => {
                const contactSection = document.querySelector("#contact")
                if (contactSection) {
                  const yOffset = -100
                  const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className={cn(
              "md:hidden transition-colors",
              isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => {
              const nav = document.querySelector(".mobile-nav")
              nav?.classList.toggle("hidden")
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "mobile-nav hidden md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t",
        isScrolled ? "border-gray-200" : "border-white/10"
      )}>
        <nav className="container mx-auto px-4 py-6">
          <ul className="space-y-6">
            {navigationItems.map((item) => (
              <li key={item.title} className="relative">
                <button
                  onClick={() => setOpenMenu(openMenu === item.title ? null : item.title)}
                  className="w-full flex items-center justify-between py-2 font-semibold text-gray-900"
                >
                  {item.title}
                  <svg
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      openMenu === item.title ? "rotate-180" : ""
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={cn(
                    "mt-2 space-y-2 transition-all duration-200",
                    openMenu === item.title ? "block" : "hidden"
                  )}
                >
                  {item.items.map((subItem) => (
                    <button
                      key={subItem.title}
                      onClick={() => {
                        const element = document.querySelector(subItem.href)
                        if (element) {
                          const yOffset = -100
                          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                          window.scrollTo({ top: y, behavior: "smooth" })
                          setOpenMenu(null)
                          document.querySelector(".mobile-nav")?.classList.add("hidden")
                        }
                      }}
                      className="w-full rounded-lg bg-gray-50 p-4 text-left transition-colors hover:bg-red-50"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">{subItem.title}</div>
                        {subItem.availability && (
                          <span className="ml-2 rounded-full bg-red-900/10 px-2 py-1 text-xs font-medium text-red-900">
                            Only {subItem.availability} left
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{subItem.description}</p>
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
