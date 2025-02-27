import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CommunityPage() {
  const discussions = [
    { id: 1, title: "Tips for mastering Dynamic Programming", author: "Alice", replies: 23 },
    { id: 2, title: "How to prepare for Google interviews?", author: "Bob", replies: 45 },
    { id: 3, title: "Best resources for learning System Design", author: "Charlie", replies: 12 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Community</h1>
      <Button className="mb-6">Start a New Discussion</Button>
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <Card key={discussion.id}>
            <CardHeader>
              <CardTitle>{discussion.title}</CardTitle>
              <CardDescription>Started by {discussion.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{discussion.replies} replies</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

