import { CallToAction } from "@/components/sections/call-to-action"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <ProjectsSection />
      <CallToAction />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}

