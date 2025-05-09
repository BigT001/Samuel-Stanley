import { ProjectCard } from "@/components/project-card"
import { BentoGrid } from "@/components/bento-grid"

const dashboardProjects = [
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with real-time data visualization",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Admin Panel",
    description: "A fully-featured admin panel for managing users and content",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "shadcn/ui", "Prisma"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export function DashboardProjects() {
  return (
    <BentoGrid>
      {dashboardProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </BentoGrid>
  )
}

export { dashboardProjects }