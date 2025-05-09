"use client"

import Image from "next/image"
import { Button } from "@/components/custom/button"
import { Badge } from "@/components/custom/badge"
import Link from "next/link"
import { ArrowRight, Download, ExternalLink } from "@/components/icons/icons"

export function HeroSection() {
  return (
    <section className="border-b">
      <div className="container py-10 md:py-16 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side: Hero content */}
          <div className="flex flex-col space-y-4">
            <div className="inline-flex">
              <Badge className="rounded-lg px-3 py-1 text-sm">
                Available for hire
              </Badge>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm Samuel Stanley
            </h1>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Full-stack web developer passionate about building robust, efficient,
                and modern web applications. Focused on creating beautiful, responsive,
                and user-friendly interfaces.
              </p>
              <Link
                href="/docs"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Read more about me
                <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex items-start gap-4 pt-4">
              <Button asChild>
                <a href="#contact">Contact Me Now</a>
              </Button>
            </div>
          </div>
          {/* Right side: Profile image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-48 w-48 md:h-64 md:w-64 overflow-hidden border-2 border-primary">
              <Image
                src="/Samuel.jpg"
                alt="Samuel Stanley"
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
