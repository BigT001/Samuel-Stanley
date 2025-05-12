"use client"

import { HeroSection } from "./components/hero-section"
import { ServicesSection } from "./components/services-section"
import { CaseStudiesSection } from "./components/case-studies-section"
import { CallToActionSection } from "./components/call-to-action-section"

export default function PhycuitPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <CallToActionSection />
    </div>
  )
}
