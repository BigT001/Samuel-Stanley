import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils"
import { RootLayoutInner } from "@/components/layouts/root-layout";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samuel Stanley | web developer | software engineer",
  description: "Portfolio website of Samuel Stanley, a web developer and software engineer",
  keywords: [
    "Samuel Stanley",
    "web developer",
    "software engineer",
    "software developer",
    "portfolio",
    "projects",
    "contact",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootLayoutInner>
            {children}
          </RootLayoutInner>
        </ThemeProvider>
      </body>
    </html>
  );
}
