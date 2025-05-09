"use client"

import { ProjectCard } from "@/components/project-card"
import { BentoGrid } from "@/components/bento-grid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom/tabs"
import { HomeProjects, homeProjects } from "./homes/home-projects"
import { BusinessProjects, businessProjects } from "./business/business-projects"
import { Home, Building2, ShoppingBag, Car } from "@/components/icons/icons"

// Combined projects array for the "All" tab
export const landingPageProjects = [...homeProjects, ...businessProjects]

export function LandingPageProjects() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="flex justify-center mb-8">
        <TabsTrigger value="all" className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          All
        </TabsTrigger>
        <TabsTrigger value="homes" className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          Homes
        </TabsTrigger>
        <TabsTrigger value="business" className="flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          Business
        </TabsTrigger>
        <TabsTrigger value="automotive" className="flex items-center gap-2">
          <Car className="h-4 w-4" />
          Automotive
        </TabsTrigger>
      </TabsList>

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
    </Tabs>
  )
}