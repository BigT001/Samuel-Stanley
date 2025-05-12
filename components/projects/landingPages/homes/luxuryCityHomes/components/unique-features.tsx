"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/custom/card"
import { Button } from "@/components/custom/button"
import { motion } from "framer-motion"
import { PremiumIcon, SecurityIcon, SupportIcon, LocationIcon } from "./feature-icons"

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  stats?: string
}

const features: Feature[] = [
  {
    icon: PremiumIcon,
    title: "Premium Properties",
    description: "Exclusive access to the most prestigious properties in prime locations",
    stats: "100+ Luxury Listings"
  },
  {
    icon: SecurityIcon,
    title: "Secure Transactions",
    description: "End-to-end security for all property transactions and personal data",
    stats: "$2B+ Handled Securely"
  },
  {
    icon: SupportIcon,
    title: "24/7 VIP Support",
    description: "Round-the-clock assistance from our dedicated team of property experts",
    stats: "15min Avg. Response"
  },
  {
    icon: LocationIcon,
    title: "Prime Locations",
    description: "Carefully curated properties in the most sought-after neighborhoods",
    stats: "20+ Elite Areas"
  },
]

export function UniqueFeatures(): JSX.Element {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:radial-gradient(ellipse_at_center,white_50%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-2 block">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Unparalleled Luxury Real Estate Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the pinnacle of luxury real estate service with our exclusive benefits and personalized attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card 
                  className="h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon 
                        className="w-8 h-8 text-primary transform group-hover:scale-110 transition-transform" 
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                    {feature.stats && (
                      <div className="text-sm font-medium text-primary">
                        {feature.stats}
                      </div>
                    )}
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-sm border border-primary/10">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Your Dream Home Awaits
              </h3>
              <p className="text-gray-600 mb-6">
                Join our exclusive network of luxury property buyers and discover your perfect home today.
              </p>              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90"
                >
                  Schedule Private Viewing
                </Button>
                <span className="text-sm text-gray-500 hidden sm:inline">or</span>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Download Luxury Portfolio
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-lg flex items-center gap-6">
            <span className="text-sm text-gray-500">Trusted by</span>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-sm font-medium">Forbes</span>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-sm font-medium">Luxury Lifestyle</span>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-sm font-medium">Real Estate Weekly</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
