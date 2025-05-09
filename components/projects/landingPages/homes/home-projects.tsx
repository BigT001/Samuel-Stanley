import { ProjectCard } from "@/components/project-card"
import { BentoGrid } from "@/components/bento-grid"

const homeProjects = [
  {
    title: "Modern Real Estate",
    description: "A sleek real estate landing page with property listings and search",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Property API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Interior Design Studio",
    description: "Portfolio and service showcase for an interior design company",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "GSAP", "Styled Components", "Contentful"],
    demoUrl: "#",
    githubUrl: "#",
  }
]

export function HomeProjects() {
  return (
    <BentoGrid>
      {homeProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </BentoGrid>
  )
}

export { homeProjects }