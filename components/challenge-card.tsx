import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ChallengeCardProps {
  title: string
  difficulty: string
  description: string
  href: string
}

export default function ChallengeCard({ title, difficulty, description, href }: ChallengeCardProps) {
  // Set badge color based on difficulty
  const difficultyColor =
    {
      Easy: "bg-green-100 text-green-800 hover:bg-green-100",
      Medium: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
      Hard: "bg-red-100 text-red-800 hover:bg-red-100",
    }[difficulty] || "bg-blue-100 text-blue-800 hover:bg-blue-100"

  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <Badge className={difficultyColor} variant="outline">
            {difficulty}
          </Badge>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="px-6 py-4 border-t">
        <Button asChild>
          <Link href={href} className="w-full justify-between">
            Solve Challenge <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

