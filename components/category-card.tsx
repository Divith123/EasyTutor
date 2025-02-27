import Link from "next/link"
import { Database, Code2, Globe, LayoutGrid, Server, Cpu, BrainCircuit, Terminal, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  description: string
  icon: string
  color: string
  href: string
}

export default function CategoryCard({ title, description, icon, color, href }: CategoryCardProps) {
  const iconMap: Record<string, LucideIcon> = {
    Database,
    Code2,
    Globe,
    LayoutGrid,
    Server,
    Cpu,
    BrainCircuit,
    Terminal,
  }

  const IconComponent = iconMap[icon] || Database

  return (
    <Link href={href} className="block h-full">
      <Card className="h-full transition-all hover:shadow-md">
        <CardContent className="p-6 flex flex-col h-full">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

