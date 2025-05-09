"use client"



import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar } from "@/components/custom/avatar"
import { Button } from "@/components/custom/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code, Contact, FileText, Github, Home, Layers, Linkedin, Twitter, User } from "./icons/icons"

export function PortfolioSidebar() {
  const pathname = usePathname()

  const mainNavItems = [
    { title: "Home", icon: Home, url: "/" },
    { title: "About", icon: User, url: "/about" },
    { title: "Projects", icon: Layers, url: "/projects" },
    { title: "Skills", icon: Code, url: "/skills" },
    { title: "Contact", icon: Contact, url: "/contact" },
    { title: "Documentation", icon: FileText, url: "/docs" },
  ]

  const socialLinks = [
    { title: "GitHub", icon: Github, url: "https://github.com" },
    { title: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { title: "Twitter", icon: Twitter, url: "https://twitter.com" },
  ]

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="flex flex-col items-center justify-center p-4">
        <Avatar
          src="/avatar.jpg"
          alt="Samuel Stanley"
          className="h-16 w-16"
          fallback="SS"
        />
        <h2 className="mt-2 text-lg font-semibold">Samuel Stanley</h2>
        <p className="text-sm text-muted-foreground">Full Stack Developer</p>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url} tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>Connect</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex justify-around">
              {socialLinks.map((link) => (
                <Button key={link.title} variant="ghost" size="icon" asChild className="h-9 w-9">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" title={link.title}>
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </a>
                </Button>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
