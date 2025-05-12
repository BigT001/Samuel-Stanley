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
    <section id="projects" className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black transition-colors duration-300">
      <div className="container py-12 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black dark:text-white transition-colors duration-300">Featured Projects</h2>
          <p className="max-w-[900px] text-zinc-600 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors duration-300">
            Check out some of my recent work
          </p>
        </div>
        <div className="mt-10">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center w-full">
              <TabsList className="inline-flex justify-center gap-4 border-b border-zinc-200 dark:border-zinc-800 px-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg transition-colors duration-300">
                <TabsTrigger 
                  value="all" 
                  className="flex items-center gap-2 px-3 py-3 text-black dark:text-white hover:scale-105 data-[state=active]:scale-95 data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:shadow-inner rounded-md transition-all duration-200"
                >
                  <Layers className="h-4 w-4" />
                  <span className="font-medium">All</span>
                </TabsTrigger>
                {[
                  { value: "landing", icon: Globe, label: "Landing Pages" },
                  { value: "dashboards", icon: Layout, label: "Dashboards" },
                  { value: "auth", icon: Lock, label: "Authentication" },
                  { value: "apps", icon: Code, label: "Apps" },
                  { value: "components", icon: Component, label: "Components" },
                  { value: "icons", icon: Package, label: "Icons" }
                ].map(({ value, icon: Icon, label }) => (
                  <TabsTrigger 
                    key={value}
                    value={value} 
                    className="flex items-center gap-2 px-3 py-3 text-black dark:text-white hover:scale-105 data-[state=active]:scale-95 data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:shadow-inner rounded-md transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
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
