import Link from "next/link";
import { Github, Twitter, Linkedin } from "@/components/icons/icons";
import { ModeToggle } from "@/components/mode-toggle";

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Samuel Stanley//</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium text-gray-500">
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
            <Link href="/docs" className="transition-colors hover:text-foreground/80">
              Docs
            </Link>
            <Link href="" className="transition-colors hover:text-foreground/80">
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <nav className="flex items-center md:hidden">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="font-bold">Samuel Stanley</span>
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <nav className="flex items-center space-x-1">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
