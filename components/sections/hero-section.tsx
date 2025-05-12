"use client"

import Image from "next/image"
import { Button } from "@/components/custom/button"
import { Badge } from "@/components/custom/badge"
import Link from "next/link"
import { ExternalLink } from "@/components/icons/icons"

export function HeroSection() {
  return (
    <section className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black transition-colors duration-300">
      <div className="container py-10 md:py-16 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-4">
            <div className="inline-flex">
              <Badge className="rounded-lg px-3 py-1 text-sm bg-white dark:bg-black text-black dark:text-white border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
                Available for hire
              </Badge>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white transition-colors duration-300">
              Hi, I'm Samuel G. Stanley
            </h1>
            <div className="flex flex-col">
              <p className="text-zinc-600 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors duration-300">
                Full-stack web developer passionate about building robust, efficient,
                and modern web applications. Focused on creating beautiful, responsive,
                and user-friendly interfaces....  {" "}
                <Link
                  href="/docs"
                  className="text-sm inline-flex items-center text-black dark:text-white 
                  hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors 
                  duration-300"
                >
                  Read more about me
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </p>
            </div>
            <div className="flex items-start gap-4 pt-4">
              <Button 
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-200"
                asChild
              >
                <a href="#contact">Contact Me Now</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative h-48 w-48 md:h-64 md:w-64 overflow-hidden border-2 border-black dark:border-white transition-colors duration-300">
              <Image
                src="/Samuel.jpg"
                alt="Samuel Stanley"
                width={256}
                height={256}
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
