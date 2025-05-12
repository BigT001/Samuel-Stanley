"use client"

import { Button } from "@/components/custom/button"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDownIcon } from "./icons"

const heroImages = [
  "/luxuryCityHomes/home1.jpg",
  "/luxuryCityHomes/home2.jpg",
  "/luxuryCityHomes/home4.jpg",
  "/luxuryCityHomes/home5.jpg",
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [viewCount, setViewCount] = useState(1342)
  const [activeInquiries, setActiveInquiries] = useState(8)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Parallax effect with reduced scroll range
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
  // Image carousel and stats update effects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const statsInterval = setInterval(() => {
      setViewCount(prev => prev + Math.floor(Math.random() * 3))
      setActiveInquiries(prev => Math.max(6, Math.min(12, prev + Math.floor(Math.random() * 3) - 1)))
    }, 3000)
    return () => clearInterval(statsInterval)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-black/90 overflow-hidden">
      <div className="absolute inset-0 w-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt="Luxury property"
              fill
              priority
              className="object-cover"
              style={{ opacity: 0.6 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4"
      >
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Discover Your Perfect<br />Luxury Residence
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Experience unparalleled luxury living in the world's most prestigious locations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View Properties
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                Schedule Viewing
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-white/90">
              <div>
                <p className="text-2xl font-bold">{viewCount.toLocaleString()}</p>
                <p className="text-sm text-gray-300">Active Viewers</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <p className="text-2xl font-bold">{activeInquiries}</p>
                <p className="text-sm text-gray-300">Properties Viewed Today</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDownIcon className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
