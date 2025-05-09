import { ProjectCard } from "@/components/project-card"
import { BentoGrid } from "@/components/bento-grid"

const appsProjects = [
  {
    title: "Task Management App",
    description: "A full-featured task management application with real-time updates",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather App",
    description: "A modern weather application with location-based forecasts",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "OpenWeather API", "Tailwind CSS", "Context API"],
    demoUrl: "#",
    githubUrl: "#",
  }
]

export function AppsProjects() {
  return (
    <BentoGrid>
      {appsProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </BentoGrid>
  )
}

export { appsProjects }