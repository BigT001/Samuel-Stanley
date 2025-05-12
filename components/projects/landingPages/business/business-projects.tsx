import { ProjectCard } from "@/components/project-card"
import { BentoGrid } from "@/components/bento-grid"

export const businessProjects = [
  {
    title: "Phycuit",
    description: "High-conversion digital agency landing page with golden and red patterns",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "Color Psychology"],
    demoUrl: "/landingPages/phycuit",
    githubUrl: "#",
  },
  {
    title: "Digital Agency",
    description: "Modern agency landing page with service showcases and case studies",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Three.js", "Tailwind CSS", "Motion"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Platform",
    description: "Feature-rich SaaS product landing page with pricing tables",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Stripe", "shadcn/ui", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  }
]

export function BusinessProjects() {
  return (
    <BentoGrid>
      {businessProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </BentoGrid>
  )
}