"use client"

import { useState } from "react"
import { Button } from "@/components/custom/button"
import { ChevronRight, ChevronLeft } from "@/components/icons/icons"
import { cn } from "@/lib/utils"

interface Slide {
  title: string
  description: string
}

const slides: Slide[] = [
  {
    title: "WITH AI FLOW CREATOR",
    description: "Flexible functions interacting with the team"
  },
  {
    title: "SMART WORKFLOW ENGINE",
    description: "Automated task distribution and tracking"
  },
  {
    title: "REAL-TIME COLLABORATION",
    description: "Seamless team coordination and communication"
  },
  {
    title: "ANALYTICS DASHBOARD",
    description: "Comprehensive performance metrics and insights"
  },
  {
    title: "CUSTOM AUTOMATIONS",
    description: "Tailored workflow solutions for your needs"
  }
]

export function WorkflowSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-lime-400" />
          <span className="text-white text-sm">INCREASE PRODUCTIVITY</span>
        </div>
        <div className="text-gray-400 text-sm">
          {String(currentSlide + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          className="transition-all duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "space-y-4 absolute top-0 left-0 w-full transition-opacity duration-300",
                currentSlide === index ? "opacity-100" : "opacity-0"
              )}
              style={{ transform: `translateX(${index * 100}%)` }}
            >
              <h3 className="text-xl text-white font-medium">{slide.title}</h3>
              <p className="text-gray-400">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-4">
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
          >
            LEARN MORE
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
          >
            TRY FREE
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 px-2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 px-2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
