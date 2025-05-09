"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom/tabs"
import { BentoGrid } from "@/components/bento-grid"
import { DashboardProjects, dashboardProjects } from "@/components/projects/dashboards/dashboard-projects"
import { LandingPageProjects, landingPageProjects } from "@/components/projects/landingPages/landing-page-projects"
import { AuthenticationProjects, authenticationProjects } from "@/components/projects/authentication/authentication-projects"
import { AppsProjects, appsProjects } from "@/components/projects/apps/apps-projects"
import { ComponentsLibProjects, componentsLibProjects } from "@/components/projects/componentsLib/components-lib-projects"
import { IconsLibProjects, iconsLibProjects } from "@/components/projects/iconsLib/icons-lib-projects"
import { ProjectCard } from "@/components/project-card"
import { Layers, Layout, Globe, Lock, Code, Component, Package } from "@/components/icons/icons"

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b">
      <div className="container py-12 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Check out some of my recent work
          </p>
        </div>
        <div className="mt-10">
          <Tabs defaultValue="all">
            <TabsList className="flex justify-center mb-8">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                All
              </TabsTrigger>
              <TabsTrigger value="dashboards" className="flex items-center gap-2">
                <Layout className="h-4 w-4" />
                Dashboards
              </TabsTrigger>
              <TabsTrigger value="landing" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Landing Pages
              </TabsTrigger>
              <TabsTrigger value="auth" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Authentication
              </TabsTrigger>
              <TabsTrigger value="apps" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Apps
              </TabsTrigger>
              <TabsTrigger value="components" className="flex items-center gap-2">
                <Component className="h-4 w-4" />
                Components
              </TabsTrigger>
              <TabsTrigger value="icons" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Icons
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <BentoGrid>
                {[
                  ...dashboardProjects,
                  ...landingPageProjects,
                  ...authenticationProjects,
                  ...appsProjects,
                  ...componentsLibProjects,
                  ...iconsLibProjects
                ].map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </BentoGrid>
            </TabsContent>
            <TabsContent value="dashboards">
              <DashboardProjects />
            </TabsContent>
            <TabsContent value="landing">
              <LandingPageProjects />
            </TabsContent>
            <TabsContent value="auth">
              <AuthenticationProjects />
            </TabsContent>
            <TabsContent value="apps">
              <AppsProjects />
            </TabsContent>
            <TabsContent value="components">
              <ComponentsLibProjects />
            </TabsContent>
            <TabsContent value="icons">
              <IconsLibProjects />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
