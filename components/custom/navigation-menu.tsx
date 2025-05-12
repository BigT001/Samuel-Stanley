"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface NavigationMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface NavigationMenuListProps extends React.HTMLAttributes<HTMLUListElement> {}

interface NavigationMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {}

interface NavigationMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface NavigationMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {}

interface NavigationMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
}

const NavigationMenuContext = React.createContext<{
  activeItem: string | null
  setActiveItem: (item: string | null) => void
}>({
  activeItem: null,
  setActiveItem: () => {},
})

export function NavigationMenu({ className, children, ...props }: NavigationMenuProps) {
  const [activeItem, setActiveItem] = React.useState<string | null>(null)

  return (
    <NavigationMenuContext.Provider value={{ activeItem, setActiveItem }}>
      <div
        className={cn(
          "relative z-10 flex max-w-max flex-1 items-center justify-center",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </NavigationMenuContext.Provider>
  )
}

export function NavigationMenuList({ className, ...props }: NavigationMenuListProps) {
  return (
    <ul
      className={cn(
        "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      {...props}
    />
  )
}

export function NavigationMenuItem({ className, ...props }: NavigationMenuItemProps) {
  return (
    <li className={cn("relative", className)} {...props} />
  )
}

export function NavigationMenuTrigger({ className, children, ...props }: NavigationMenuTriggerProps) {
  const { activeItem, setActiveItem } = React.useContext(NavigationMenuContext)
  const id = React.useId()

  return (
    <button
      className={cn(
        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        className
      )}
      onClick={() => setActiveItem(activeItem === id ? null : id)}
      data-active={activeItem === id}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[active]:rotate-180"
      >
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </button>
  )
}

export function NavigationMenuContent({ className, children, ...props }: NavigationMenuContentProps) {  
  return (
    <div
      className={cn(
        "absolute left-0 top-full z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-4 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface NavigationMenuLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  active?: boolean;
  asChild?: boolean;
}

export function NavigationMenuLink({ 
  className, 
  active,
  asChild,
  children,
  ...props 
}: NavigationMenuLinkProps) {
  const Comp = asChild ? React.Fragment : "a"
  return (
    <Comp
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        active && "bg-accent text-accent-foreground",
        className
      )}
      {...(!asChild && props)}
    >
      {children}
    </Comp>
  )
}