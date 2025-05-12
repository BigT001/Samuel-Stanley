"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/custom/card"
import { motion } from "framer-motion"
import { Button } from "@/components/custom/button"
import { Badge } from "@/components/custom/badge"
import { cn } from "@/lib/utils"
import { BedIcon, BathIcon, AreaIcon } from "./property-icons"
import { useCurrency } from "@/lib/currency-context"
import { convertPrice, formatCurrency } from "@/lib/currency-converter"

// Custom hook for media queries
function useMedia(query: string): boolean {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(query)
		if (media.matches !== matches) {
			setMatches(media.matches)
		}
		const listener = () => setMatches(media.matches)
		window.addEventListener("resize", listener)
		return () => window.removeEventListener("resize", listener)
	}, [matches, query])

	return matches
}

interface Property {
	id: string
	title: string
	location: string
	priceUSD: number
	image: string
	beds: number
	baths: number
	area: string
	type: string
	status: "available" | "reserved" | "sold"
	features: string[]
	viewCount: number
	lastViewed: string
	trending?: boolean
	exclusive?: boolean
}

const featuredProperties: Property[] = [
	{
		id: "p1",
		title: "Skyline Penthouse",
		location: "Downtown",
		priceUSD: 2500000,
		image: "/luxuryCityHomes/home1.jpg",
		beds: 3,
		baths: 3.5,
		area: "3,200 sq.ft",
		type: "Penthouse",
		status: "available",
		features: ["Private Elevator", "Rooftop Terrace", "Wine Cellar"],
		viewCount: 234,
		lastViewed: "2 mins ago",
		trending: true,
		exclusive: true,
	},
	{
		id: "p2",
		title: "Waterfront Villa",
		location: "Beach Front",
		priceUSD: 4800000,
		image: "/luxuryCityHomes/home2.jpg",
		beds: 5,
		baths: 5.5,
		area: "5,500 sq.ft",
		type: "Villa",
		status: "reserved",
		features: ["Infinity Pool", "Private Beach Access", "Smart Home"],
		viewCount: 189,
		lastViewed: "5 mins ago",
		exclusive: true,
	},
	{
		id: "p3",
		title: "Modern Oasis",
		location: "Suburban",
		priceUSD: 1850000,
		image: "/luxuryCityHomes/home4.jpg",
		beds: 4,
		baths: 3,
		area: "3,800 sq.ft",
		type: "House",
		status: "available",
		features: ["Home Theater", "Zen Garden", "EV Charging"],
		viewCount: 167,
		lastViewed: "Just now",
		trending: true,
	},
]

export function FeaturedProperties() {
	const [activeProperty, setActiveProperty] = useState<string>("p1")
	const isMobile = useMedia("(max-width: 639px)")
	const [viewCounts, setViewCounts] = useState<{ [key: string]: number }>(
		Object.fromEntries(featuredProperties.map((p) => [p.id, p.viewCount]))
	)
	const { currency } = useCurrency()
	const maxFeatures = isMobile ? 2 : 3

	// Simulate real-time view count updates
	useEffect(() => {
		const interval = setInterval(() => {
			setViewCounts((prev) => {
				const updates = { ...prev }
				const randomProperty =
					featuredProperties[Math.floor(Math.random() * featuredProperties.length)]
				updates[randomProperty.id] = prev[randomProperty.id] + Math.floor(Math.random() * 3)
				return updates
			})
		}, 8000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section id="properties" className="py-12 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-8"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Featured Luxury Properties
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto mb-8">
						Discover our handpicked selection of premium properties, each offering unparalleled luxury and sophistication.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
					{featuredProperties.map((property) => (
						<motion.div
							key={property.id}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="h-full"
						>
							<Card
								className={cn(
									"group overflow-hidden bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full",
									activeProperty === property.id && "ring-2 ring-primary"
								)}
								onMouseEnter={() => setActiveProperty(property.id)}
							>
								<div className="relative aspect-[4/3] overflow-hidden">
									{/* Property Image */}
									<img
										src={property.image}
										alt={property.title}
										className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
									/>
									{/* Status Badge */}
									<Badge
										className={cn(
											"absolute top-4 right-4",
											property.status === "available" &&
												"bg-green-500/90 hover:bg-green-500",
											property.status === "reserved" &&
												"bg-amber-500/90 hover:bg-amber-500",
											property.status === "sold" && "bg-red-500/90 hover:bg-red-500"
										)}
									>
										{property.status.charAt(0).toUpperCase() + property.status.slice(1)}
									</Badge>
									{/* Exclusive/Trending Badge */}
									{(property.exclusive || property.trending) && (
										<Badge
											className={cn(
												"absolute top-4 left-4",
												property.exclusive
													? "bg-primary/90 hover:bg-primary"
													: "bg-purple-500/90 hover:bg-purple-500"
											)}
										>
											{property.exclusive ? "Exclusive" : "Trending"}
										</Badge>
									)}
								</div>

								<div className="flex-1 p-6">
									<div className="flex justify-between items-start gap-2 mb-4">
										<div>
											<h3 className="text-xl font-bold text-gray-900 mb-1">
												{property.title}
											</h3>
											<p className="text-gray-600">
												{property.location} • {property.type}
											</p>
										</div>
										<div className="text-right">
											<div className="text-lg font-bold text-gray-900">
												{formatCurrency(convertPrice(property.priceUSD, "USD", currency), currency)}
											</div>
											<div className="text-xs text-gray-500">{viewCounts[property.id]} views</div>
										</div>
									</div>

									<div className="flex items-center gap-4 mb-4 text-gray-600">
										<div className="flex items-center gap-1">
											<BedIcon className="w-4 h-4" />
											<span className="text-sm">{property.beds} beds</span>
										</div>
										<div className="flex items-center gap-1">
											<BathIcon className="w-4 h-4" />
											<span className="text-sm">{property.baths} baths</span>
										</div>
										<div className="flex items-center gap-1">
											<AreaIcon className="w-4 h-4" />
											<span className="text-sm">{property.area}</span>
										</div>
									</div>

									<div className="mb-6">
										<div className="flex flex-wrap gap-2">
											{property.features.slice(0, maxFeatures).map((feature, index) => (
												<Badge
													key={index}
													variant="secondary"
													className="bg-gray-100 text-gray-600 hover:bg-gray-200"
												>
													{feature}
												</Badge>
											))}
											{property.features.length > maxFeatures && (
												<Badge variant="secondary" className="bg-gray-100 text-gray-600">
													+{property.features.length - maxFeatures} more
												</Badge>
											)}
										</div>
									</div>

									<div className="flex items-center justify-between mt-auto">
										<Button variant="ghost" className="text-gray-600">
											View Details
										</Button>
										<div className="text-xs text-gray-400">
											Last viewed {property.lastViewed}
										</div>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>

				<div className="text-center mt-12">
					<Button size="lg" variant="outline" className="bg-white">
						View All Properties
					</Button>
				</div>
			</div>
		</section>
	)
}
