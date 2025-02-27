import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContestDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/contests" className="text-sm text-muted-foreground hover:text-primary flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Contests
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Contest Details: {params.id}</h1>
      <p className="mb-4">
        This page would show details about the specific contest, including rules, problems, and leaderboard.
      </p>
      <Button>Register for Contest</Button>
    </div>
  )
}

