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
        "w-full h-full overflow-hidden transition-all hover:scale-105 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black",
        className
      )}
      {...props}
    >
      <CardContent className="flex h-full flex-col justify-between gap-6 p-6">
        <div className="space-y-3">
          <CardTitle className="line-clamp-1 text-xl text-black dark:text-white transition-colors duration-300">{title}</CardTitle>
          <CardDescription className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
            {description}
          </CardDescription>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="px-2.5 py-0.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white border border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              asChild 
              className="flex-1 h-9 border-zinc-200 dark:border-zinc-800 text-black dark:text-white hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <Link 
                href={demoUrl} 
                target={title === "Luxury City Homes" ? "_self" : "_blank"} 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <ExternalLink className="mr-2 h-3.5 w-3.5" />
                Demo
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              asChild 
              className="flex-1 h-9 border-zinc-200 dark:border-zinc-800 text-black dark:text-white hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <Link 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github className="mr-2 h-3.5 w-3.5" />
                Code
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
