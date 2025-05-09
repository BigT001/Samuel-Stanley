import { ProjectCard } from "@/components/project-card"
import { BentoGrid } from "@/components/bento-grid"

const authenticationProjects = [
  {
    title: "Auth System",
    description: "A complete authentication system with social login",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "NextAuth.js", "Prisma", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export function AuthenticationProjects() {
  return (
    <BentoGrid>
      {authenticationProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </BentoGrid>
  )
}

export { authenticationProjects }