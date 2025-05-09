"use client"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"
import { HeroSection } from "@/components/sections/hero-section"

export function MainContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 items-center px-4 border-b">
        <SidebarTrigger />
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>
      <footer className="border-t py-4 px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Samuel Stanley. All rights reserved.
      </footer>
    </div>
  )
}
