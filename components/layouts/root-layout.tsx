"use client"

import { MainNav } from "@/components/nav/main-nav"

export function RootLayoutInner({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="show-main-nav">
        <MainNav />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}
