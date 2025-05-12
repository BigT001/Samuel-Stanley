"use client"

import { Globe, Code, Brain, BarChart3 } from "@/components/icons/icons"
import { cn } from "@/lib/utils"
import styles from "../styles.module.css"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg border bg-background p-6",
      styles["gradient-border"],
      styles["service-card"],
      "hover:scale-[1.02] transition-transform duration-300"
    )}>
      <div className={cn(
        "mb-4 transform transition-transform duration-300 ease-out",
        "group-hover:scale-110 group-hover:rotate-12"
      )}>{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300",
        "group-hover:opacity-100"
      )} />
    </div>
  )
}

export function ServicesSection() {
  return (
    <section className="relative py-20 bg-background">
      <div className="container">
        <h2 className={cn(
          "text-3xl font-bold text-center mb-16",
          styles["animate-slide-up"]
        )}>Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={<Globe className="h-8 w-8 text-primary" />}
            title="Digital Strategy"
            description="Data-driven strategies that position your brand for success in the digital landscape."
          />
          <ServiceCard
            icon={<Code className="h-8 w-8 text-primary" />}
            title="Web Development"
            description="Custom web solutions that combine aesthetics with powerful functionality."
          />
          <ServiceCard
            icon={<Brain className="h-8 w-8 text-primary" />}
            title="UI/UX Design"
            description="User-centric design that creates engaging and intuitive digital experiences."
          />
          <ServiceCard
            icon={<BarChart3 className="h-8 w-8 text-primary" />}
            title="Analytics & Optimization"
            description="Continuous improvement through data analysis and performance optimization."
          />
        </div>
      </div>
    </section>
  )
}
