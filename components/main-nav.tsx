"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Trophy, Briefcase, Users, Menu, Moon, Sun } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()

  const routes = [
    {
      href: "/tutorials",
      label: "Tutorials",
      icon: BookOpen,
      active: pathname === "/tutorials",
    },
    {
      href: "/practice",
      label: "Practice",
      icon: Code,
      active: pathname === "/practice",
    },
    {
      href: "/contests",
      label: "Contests",
      icon: Trophy,
      active: pathname === "/contests",
    },
    {
      href: "/interview-prep",
      label: "Interview Prep",
      icon: Briefcase,
      active: pathname === "/interview-prep",
    },
    {
      href: "/community",
      label: "Community",
      icon: Users,
      active: pathname === "/community",
    },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex justify-between items-center">
      <div className="hidden md:flex gap-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              route.active ? "text-primary" : "text-muted-foreground",
            )}
          >
            <route.icon className="w-4 h-4 mr-2" />
            {route.label}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="px-2 py-6">
              <Link href="/" className="flex items-center mb-6" onClick={() => setIsOpen(false)}>
                <span className="font-bold text-xl">EasyTutor</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center py-2 text-sm font-medium transition-colors hover:text-primary",
                      route.active ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <route.icon className="w-4 h-4 mr-3" />
                    {route.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}

