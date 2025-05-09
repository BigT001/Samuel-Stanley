import { ProjectCard } from "@/components/project-card"
import { BentoGrid } from "@/components/bento-grid"

const iconsLibProjects = [
  {
    title: "SVG Icon System",
    description: "A customizable icon system with dynamic color themes and size variations",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["SVG", "React", "TypeScript", "CSS-in-JS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Icon Generator CLI",
    description: "Command-line tool to convert and optimize SVG icons for web use",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Node.js", "SVGO", "CLI", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  }
]

export function IconsLibProjects() {
  return (
    <BentoGrid>
      {iconsLibProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </BentoGrid>
  )
}

export { iconsLibProjects }