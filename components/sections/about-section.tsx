import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/samuel.jpg"
                alt="Samuel Stanley"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </CardContent>
          </Card>
          <div className="space-y-4">
            <p className="text-lg">
              I'm a full-stack web developer with a passion for creating robust and efficient web applications. My
              journey into programming was driven by curiosity and a desire to learn, improve, and offer solutions to
              real-world issues.
            </p>
            <p className="text-lg">
              I love to build AI applications and have a strong interest in machine learning, data science, and
              artificial intelligence. I have experience with various programming languages and frameworks, including
              JavaScript, TypeScript, React, Node.js, Express, and MongoDB. I have also worked with Python and libraries
              like TensorFlow and PyTorch for machine learning projects.
            </p>
            <p className="text-lg">
              Over the years, I've cultivated a strong ability to learn quickly and adapt to new technologies. I believe
              in writing clean, maintainable code and am always looking for ways to optimize performance and improve
              user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
