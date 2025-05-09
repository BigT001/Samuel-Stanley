import { Button } from "@/components/custom/button";

export function CallToAction() {
  return (
    <section className="border-b">
      <div className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Ready to take your project to the next level? Samuel is available for new opportunities and collaborations. Reach out today and let's create something impactful!
          </p>
          <Button asChild>
            <a href="#contact">Contact Samuel</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
