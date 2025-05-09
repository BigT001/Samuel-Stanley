import { ProjectCard } from "@/components/project-card"
import { BentoGrid } from "@/components/bento-grid"

const componentsLibProjects = [
  {
    title: "UI Component Library",
    description: "A comprehensive collection of reusable React components built with TypeScript and styled with Tailwind CSS",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Design System",
    description: "A complete design system implementation with theme customization and dark mode support",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "shadcn/ui", "Radix UI", "CSS Variables"],
    demoUrl: "#",
    githubUrl: "#",
  }
]

export function ComponentsLibProjects() {
  return (
    <BentoGrid>
      {componentsLibProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </BentoGrid>
  )
}

export { componentsLibProjects }