"use client"

import { HeroSection } from "./components/hero-section"
import { SearchSection } from "./components/search-section"
import { FeaturedProperties } from "./components/featured-properties"
import { UniqueFeatures } from "./components/unique-features"
import { ContactSection } from "./components/contact-section"
import { Navigation } from "./components/navigation"
import { FooterSection } from "./components/footer-section"
import { CurrencyProvider } from "@/lib/currency-context"

export function LuxuryCityHomes() {
  return (
    <CurrencyProvider>
      <main className="relative min-h-screen bg-white overflow-x-hidden">
        <div className="relative z-10">
          <Navigation />
        </div>
        <div className="relative z-0">
          <HeroSection />
          <SearchSection />
          <FeaturedProperties />
          <UniqueFeatures />
          <ContactSection />
        </div>
      </main>
      <FooterSection />
    </CurrencyProvider>
  )
}
