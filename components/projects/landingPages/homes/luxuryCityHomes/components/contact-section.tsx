"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/custom/card"
import { Input } from "@/components/custom/input"
import { Button } from "@/components/custom/button"
import { Textarea } from "@/components/custom/textarea"
import { motion } from "framer-motion"
import { Badge } from "@/components/custom/badge"
import { EmailIcon, PhoneIcon, MapIcon } from "./contact-icons"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    propertyType: "",
    budget: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const propertyTypes = [
    "Luxury Apartment",
    "Penthouse",
    "Villa",
    "Waterfront Property",
    "Historic Estate"
  ]

  const budgetRanges = [
    "$1M - $2M",
    "$2M - $5M",
    "$5M - $10M",
    "$10M+"
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:radial-gradient(ellipse_at_center,white_50%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            CONTACT US
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Begin Your Luxury Living Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our luxury real estate specialists are here to provide personalized assistance in finding your perfect residence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg backdrop-blur-sm bg-white/90">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className="h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className="h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="propertyType" className="text-sm font-medium">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full h-12 rounded-md border border-input bg-white/90 px-3 py-2 text-sm ring-offset-background"
                        required
                      >
                        <option value="">Select property type</option>
                        {propertyTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full h-12 rounded-md border border-input bg-white/90 px-3 py-2 text-sm ring-offset-background"
                        required
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Requirements
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream property"
                      className="min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 bg-primary text-white hover:bg-primary/90">
                    Request Private Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
                  <p className="text-gray-600">123 Luxury Avenue</p>
                  <p className="text-gray-600">City Center, ST 10001</p>
                  <Button variant="link" className="text-primary p-0 h-auto mt-2">
                    Get Directions →
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                  <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                  <p className="text-gray-600">Email: concierge@luxurycityhomes.com</p>
                  <p className="text-sm text-primary mt-2">
                    VIP line available for premium clients
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <EmailIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sunday: By Appointment</p>
                </div>
              </div>

              {/* VIP Service Card */}
              <Card className="mt-8 bg-gradient-to-r from-primary to-primary/90 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Client Services</h3>
                  <p className="mb-4 text-white/90">
                    Unlock exclusive benefits with our VIP membership:
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                      24/7 Dedicated Concierge
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                      Private Property Previews
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                      Luxury Transportation
                    </li>
                  </ul>                  <Button variant="outline" className="w-full bg-white/10 hover:bg-white/20 border-white/20">
                    Learn About VIP Benefits
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-4 sm:px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-full shadow-sm">
            <span className="text-sm text-gray-500">
              Certified Luxury Home Specialists
            </span>
            <div className="hidden sm:block h-4 w-px bg-gray-200" />
            <span className="text-sm text-gray-500">
              Privacy Guaranteed
            </span>
            <div className="hidden sm:block h-4 w-px bg-gray-200" />
            <span className="text-sm text-primary font-medium">
              Discreet Service
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
