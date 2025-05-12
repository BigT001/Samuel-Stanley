"use client"

import { ProjectCard } from "@/components/project-card"
import { BentoGrid } from "@/components/bento-grid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom/tabs"
import { HomeProjects, homeProjects } from "./homes/home-projects"
import { BusinessProjects, businessProjects } from "./business/business-projects"
import { Layers, Layout } from "@/components/icons/icons"

// Combined projects array for the "All" tab
export const landingPageProjects = [...homeProjects, ...businessProjects]

export function LandingPageProjects() {
  return (
    <div className="rounded-lg">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="inline-flex w-full justify-start gap-4 border-b border-border/40">
          <TabsTrigger value="all" className="flex items-center gap-2 px-1 py-3">
            <Layers className="h-4 w-4" />
            <span className="font-medium">All</span>
          </TabsTrigger>
          <TabsTrigger value="homes" className="flex items-center gap-2 px-1 py-3">
            <Layout className="h-4 w-4" />
            <span className="font-medium">Homes</span>
          </TabsTrigger>
          <TabsTrigger value="business" className="flex items-center gap-2 px-1 py-3">
            <Layout className="h-4 w-4" />
            <span className="font-medium">Business</span>
          </TabsTrigger>
          <TabsTrigger value="automotive" className="flex items-center gap-2 px-1 py-3">
            <Layout className="h-4 w-4" />
            <span className="font-medium">Automotive</span>
          </TabsTrigger>
        </TabsList>

        <div className="mt-6 w-full">
          <TabsContent value="all">
            <BentoGrid>
              {[...homeProjects, ...businessProjects].map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </BentoGrid>
          </TabsContent>

          <TabsContent value="homes">
            <HomeProjects />
          </TabsContent>

          <TabsContent value="business">
            <BusinessProjects />
          </TabsContent>

          <TabsContent value="automotive">
            <BentoGrid>
              <div className="col-span-full text-center py-8 text-muted-foreground">
                Coming soon - Automotive landing page templates
              </div>
            </BentoGrid>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}