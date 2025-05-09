import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/custom/button"
import { ArrowLeft } from "@/components/icons/icons"


export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Samuel Stanley</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="/#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="/#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="/#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
              <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground">
                Docs
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="ghost" size="icon" asChild className="mr-2 md:hidden">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back to home</span>
                </Link>
              </Button>
              <span className="md:hidden font-bold">Documentation</span>
            </div>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-start">
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
            <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl mb-6">Documentation</h1>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="structure">Project Structure</TabsTrigger>
                <TabsTrigger value="setup">Setup Guide</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h2 className="font-heading text-xl mb-4">Project Overview</h2>
                  <p className="leading-7 mb-4">
                    This project is a personal portfolio website built with Next.js (App Router), TypeScript, React, and
                    Tailwind CSS. It showcases personal information, projects, and contact options in a modern,
                    responsive design.
                  </p>
                  <p className="leading-7">
                    The website features a responsive design with mobile and desktop navigation, animated components,
                    project showcase with cards and badges, and a contact form.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h2 className="font-heading text-xl mb-4">Features</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Responsive design with mobile and desktop navigation</li>
                    <li>Bento grid layout for project cards</li>
                    <li>Project showcase with categorized tabs</li>
                    <li>Skills section with categorized badges</li>
                    <li>Contact form with validation</li>
                    <li>Dark/light mode toggle</li>
                    <li>Documentation section</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="structure" className="space-y-6">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h2 className="font-heading text-xl mb-4">Project Structure</h2>
                  <pre className="p-4 bg-muted rounded-md overflow-auto text-sm">
                    {`- app/: Contains main application files, pages, and components.
  - docs/: Documentation pages
  - globals.css: Global styles.
  - layout.tsx: Root layout for the app.
  - page.tsx: Main landing page.
- components/: React components
  - bento-grid.tsx: Grid layout for cards
  - project-card.tsx: Card component for projects
  - skills-section.tsx: Skills display component
  - contact-form.tsx: Contact form with validation
  - mode-toggle.tsx: Theme toggle component
- public/: Static assets (images, profile pictures, project screenshots).`}
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="setup" className="space-y-6">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h2 className="font-heading text-xl mb-4">Setup Guide</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Prerequisites</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Node.js 18.0.0 or later</li>
                        <li>npm or yarn package manager</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Installation</h3>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>
                          <p>Clone the repository:</p>
                          <pre className="p-2 bg-muted rounded-md mt-1 text-sm">
                            git clone https://github.com/username/portfolio.git
                          </pre>
                        </li>
                        <li>
                          <p>Navigate to the project directory:</p>
                          <pre className="p-2 bg-muted rounded-md mt-1 text-sm">cd portfolio</pre>
                        </li>
                        <li>
                          <p>Install dependencies:</p>
                          <pre className="p-2 bg-muted rounded-md mt-1 text-sm">npm install</pre>
                        </li>
                        <li>
                          <p>Start the development server:</p>
                          <pre className="p-2 bg-muted rounded-md mt-1 text-sm">npm run dev</pre>
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Configuration</h3>
                      <p className="leading-7">
                        The project uses Next.js App Router and shadcn/ui components. No additional configuration is
                        required to get started.
                      </p>
                      <p className="leading-7 mt-2">
                        To customize the portfolio content, edit the components in the respective files.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              Samuel Stanley
            </a>
            . The source code is available on{" "}
            <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
