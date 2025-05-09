import type React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/custom/badge"
import { Button } from "@/components/custom/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/custom/card"
import Link from "next/link"
import { ExternalLink, Github } from "./icons/icons"

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  demoUrl = "#",
  githubUrl = "#",
  className,
  ...props
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group relative h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <CardContent className="flex h-full flex-col justify-between gap-4 p-6">
        <div className="space-y-2">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-2 py-0.5 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
