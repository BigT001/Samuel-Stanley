"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import styles from "../styles.module.css"

interface CaseStudyCardProps {
  title: string
  stats: string
  description: string
  image: string
}

function CaseStudyCard({ title, stats, description, image }: CaseStudyCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg border bg-background",
      styles["gradient-border"],
      styles["case-study-card"]
    )}>
      <div className="relative h-64 bg-muted overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={cn(
            "object-cover transition-transform duration-500",
            "group-hover:scale-110"
          )} 
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50",
          "transition-opacity duration-300",
          "group-hover:opacity-30"
        )} />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className={cn(
          "text-primary font-semibold mb-2",
          styles["text-glow"]
        )}>{stats}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary",
        "transform translate-y-full transition-transform duration-300",
        "group-hover:translate-y-0"
      )} />
    </div>
  )
}

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container">
        <h2 className={cn(
          "text-3xl font-bold text-center mb-16",
          styles["animate-slide-up"]
        )}>Success Stories</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <CaseStudyCard
            title="E-commerce Revolution"
            stats="+150% Revenue Growth"
            description="Transformed a traditional retailer into a digital powerhouse with a modern e-commerce platform."
            image="/placeholder.svg"
          />
          <CaseStudyCard
            title="SaaS Platform Launch"
            stats="1M+ Active Users"
            description="Designed and developed a scalable SaaS platform that attracted over a million users in 6 months."
            image="/placeholder.svg"
          />
        </div>
      </div>
    </section>
  )
}
