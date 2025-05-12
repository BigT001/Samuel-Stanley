"use client"

import { ProjectCard } from "@/components/project-card"
import { BentoGrid } from "@/components/bento-grid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom/tabs"
import { Layout, PieChart, Component } from "@/components/icons/icons"

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
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<Tabs defaultValue="all" className="w-full">
				<TabsList className="inline-flex w-full justify-start gap-4 border-b border-border/40">
					<TabsTrigger value="all" className="flex items-center gap-2 px-1 py-3">
						<Layout className="h-4 w-4" />
						<span className="font-medium">All</span>
					</TabsTrigger>
					<TabsTrigger value="analytics" className="flex items-center gap-2 px-1 py-3">
						<PieChart className="h-4 w-4" />
						<span className="font-medium">Analytics</span>
					</TabsTrigger>
					<TabsTrigger value="admin" className="flex items-center gap-2 px-1 py-3">
						<Component className="h-4 w-4" />
						<span className="font-medium">Admin</span>
					</TabsTrigger>
				</TabsList>
				<div className="mt-6 w-full">
					<TabsContent value="all" className="w-full">
						<BentoGrid>
							{dashboardProjects.map((project, index) => (
								<ProjectCard key={index} {...project} />
							))}
						</BentoGrid>
					</TabsContent>
					<TabsContent value="analytics" className="w-full">
						<BentoGrid>
							{dashboardProjects
								.filter(p => p.title.toLowerCase().includes("analytics"))
								.map((project, index) => (
									<ProjectCard key={index} {...project} />
								))}
						</BentoGrid>
					</TabsContent>
					<TabsContent value="admin" className="w-full">
						<BentoGrid>
							{dashboardProjects
								.filter(p => p.title.toLowerCase().includes("admin"))
								.map((project, index) => (
									<ProjectCard key={index} {...project} />
								))}
						</BentoGrid>
					</TabsContent>
				</div>
			</Tabs>
		</div>
	)
}

export { dashboardProjects }