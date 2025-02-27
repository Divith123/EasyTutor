import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InterviewPrepPage() {
  const topics = [
    { id: 1, title: "Data Structures", description: "Arrays, Linked Lists, Trees, Graphs, etc." },
    { id: 2, title: "Algorithms", description: "Sorting, Searching, Dynamic Programming, etc." },
    { id: 3, title: "System Design", description: "Scalability, Database Design, Caching, etc." },
    { id: 4, title: "Behavioral Questions", description: "Common interview questions and how to answer them" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Interview Preparation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic) => (
          <Card key={topic.id}>
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/interview-prep/${topic.id}`} className="text-primary hover:underline">
                Start Preparing
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

