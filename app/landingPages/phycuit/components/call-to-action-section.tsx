"use client"

import { Button } from "@/components/custom/button"
import { ArrowRight } from "@/components/icons/icons"
import { cn } from "@/lib/utils"
import styles from "../styles.module.css"

export function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/90 to-secondary/90 text-primary-foreground">
      <div className="container text-center">
        <h2 className={cn(
          "text-3xl font-bold mb-6",
          styles["animate-slide-up"]
        )}>Ready to Transform Your Business?</h2>
        <p className={cn(
          "mb-10 text-lg opacity-90",
          styles["animate-fade-in"]
        )}>Let's create something extraordinary together.</p>
        <Button 
          size="lg" 
          variant="outline" 
          className={cn(
            "bg-background text-primary hover:bg-accent group relative overflow-hidden",
            styles["animate-fade-in"]
          )}
          style={{ animationDelay: "0.3s" }}
        >
          <span className="relative z-10">Schedule a Consultation</span>
          <ArrowRight className={cn(
            "ml-2 h-4 w-4 transition-transform duration-300",
            "group-hover:translate-x-2"
          )} />
          <div className={cn(
            "absolute inset-0 translate-x-[-100%] bg-primary transition-transform duration-300",
            "group-hover:translate-x-0"
          )} />
        </Button>
      </div>
    </section>
  )
}
