import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/custom/button"
import { useCurrency } from "@/lib/currency-context"
import { convertPrice, formatCurrency } from "@/lib/currency-converter"
import { Card } from "@/components/custom/card"
import { cn } from "@/lib/utils"

const propertyTypes = [
  { value: "all", label: "All Properties" },
  { value: "penthouse", label: "Penthouses" },
  { value: "villa", label: "Villas" },
  { value: "apartment", label: "Apartments" }
]

const locations = [
  { value: "all", label: "All Locations" },
  { value: "downtown", label: "Downtown" },
  { value: "waterfront", label: "Waterfront" },
  { value: "beach front", label: "Beach Front" }
]

const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "1000000-2000000", label: "$1M - $2M" },
  { value: "2000000-5000000", label: "$2M - $5M" },
  { value: "5000000+", label: "$5M+" }
]

const recentSearches = [
  { 
    type: "Penthouse", 
    location: "Downtown", 
    minPrice: 2000000,
    maxPrice: 5000000,
    searches: 245,
    lastViewed: "2 mins ago",
    trend: "↑ 15% more views today"
  },
  { 
    type: "Villa", 
    location: "Waterfront", 
    minPrice: 5000000,
    maxPrice: null,
    searches: 89,
    lastViewed: "Just now",
    trend: "↑ 23% more inquiries"
  },
  { 
    type: "Apartment", 
    location: "Beach Front", 
    minPrice: 1000000,
    maxPrice: 2000000,
    searches: 156,
    lastViewed: "1 min ago",
    trend: "Limited availability"
  }
]

export function SearchSection() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedPrice, setSelectedPrice] = useState("all")
  const { currency } = useCurrency()

  return (
    <section id="search" className="py-8 bg-gradient-to-b from-gray-50 to-white relative z-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Search Form */}
          <Card className="relative overflow-hidden backdrop-blur-sm border border-gray-100">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Property Type */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Property Type</label>
                  <select 
                    className="form-select w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {propertyTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <select 
                    className="form-select w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    {locations.map((location) => (
                      <option key={location.value} value={location.value}>{location.label}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Price Range</label>
                  <select 
                    className="form-select w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="mt-6 flex justify-end">
                <Button size="lg" className="w-full md:w-auto">
                  Search Properties
                </Button>
              </div>
            </div>
          </Card>

          {/* Recent Searches */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Searches</h3>
              <Button variant="ghost" className="text-sm text-gray-600">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentSearches.map((search, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col p-4 rounded-lg bg-white shadow-sm hover:shadow-md border border-gray-100 transition-all group relative overflow-hidden text-left"
                  onClick={() => {
                    setSelectedType(search.type.toLowerCase())
                    setSelectedLocation(search.location.toLowerCase())
                    const priceRange = search.maxPrice 
                      ? `${search.minPrice}-${search.maxPrice}`
                      : `${search.minPrice}+`
                    setSelectedPrice(priceRange.toLowerCase())
                  }}
                >
                  <div className="absolute top-0 right-0 p-1.5 text-[10px] bg-amber-500/10 text-amber-600 rounded-bl-lg">
                    {search.lastViewed}
                  </div>
                  <div className="text-sm font-medium text-gray-900">{search.type} in {search.location}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {search.maxPrice 
                      ? `${formatCurrency(convertPrice(search.minPrice, "USD", currency), currency)} - ${formatCurrency(convertPrice(search.maxPrice, "USD", currency), currency)}`
                      : `${formatCurrency(convertPrice(search.minPrice, "USD", currency), currency)}+`
                    }
                  </div>
                  <div className="text-xs text-amber-600 mt-2 font-medium">
                    {search.trend}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
