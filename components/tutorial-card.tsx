import Link from "next/link"
import { Clock } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TutorialCardProps {
  title: string
  description: string
  category: string
  readTime: string
  href: string
}

export default function TutorialCard({ title, description, category, readTime, href }: TutorialCardProps) {
  return (
    <Link href={href} className="block h-full">
      <Card className="h-full transition-all hover:shadow-md">
        <CardContent className="p-6">
          <div className="mb-4">
            <Badge variant="secondary">{category}</Badge>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
        </CardContent>
        <CardFooter className="px-6 py-4 border-t flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-2" />
          {readTime}
        </CardFooter>
      </Card>
    </Link>
  )
}

