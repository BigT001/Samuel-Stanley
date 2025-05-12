"use client"

import { Button } from "@/components/custom/button"
import { ChevronRight, ArrowRight } from "@/components/icons/icons"
import { cn } from "@/lib/utils"
import styles from "../styles.module.css"
import { WorkflowPreview } from "./workflow-preview"
import { NavIndicator } from "./nav-indicator"
import { AnimatedStats } from "./animated-stats"
import { EmailCTA } from "./email-cta"
import { WorkflowSlider } from "./workflow-slider"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black">
      {/* Background dots and lines effect */}
      <div className={cn("absolute inset-0 opacity-20", styles["flow-lines"])} />
      
      <div className="container relative pt-20 md:pt-32">
        <nav className="absolute top-8 left-0 right-0 flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-lime-400" />
            <span className="text-white font-medium">FlowGuide</span>
          </div>          <NavIndicator
            items={[
              { label: "About Us", href: "#" },
              { label: "Solutions", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Workspace", href: "#" }
            ]}
          />
          <Button variant="outline" className="bg-zinc-800/50 text-white border-zinc-700 hover:bg-zinc-800">
            CREATE FLOW
          </Button>
        </nav>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
          {/* Left content */}
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-white">
              <span>Streamline</span>{' '}
              <span className="text-gray-400">Your Workflow:</span>{' '}
              <span>Design,</span>{' '}
              <div className="inline-flex flex-col">
                <span>Automate</span>
                <div className={cn("h-1 w-full bg-lime-400 mt-1", styles["slide-in-left"])} />
              </div>
              {', and '}
              <span>Manage with </span>
              <span className="text-lime-400">FlowGuide</span>
              {'!'}
            </h1>
            
            <p className="text-gray-400 text-lg max-w-2xl">
              This comprehensive tool empowers you to optimize your work routines, boosting
              productivity and organization in every step of your projects.
            </p>            <EmailCTA /><AnimatedStats
              stats={[
                { value: 58, label: "People with us" },
                { value: 32, label: "Tasks solved" }
              ]}
            />
          </div>

          {/* Right content - Flow preview */}
          <div className="flex-1 w-full lg:w-auto">
            <div className={cn("relative rounded-lg bg-zinc-800/50 border border-zinc-700/50 p-6", styles["flow-preview"])}>              <WorkflowSlider />
              <div className="mt-4">
                <WorkflowPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
