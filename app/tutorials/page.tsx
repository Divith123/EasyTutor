import Link from "next/link"
import { Search, Filter, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function TutorialsPage() {
  // Mock data for tutorials
  const tutorials = [
    {
      id: 1,
      title: "Introduction to Data Structures",
      description: "Learn about the fundamental data structures used in computer science and programming.",
      category: "Data Structures",
      level: "Beginner",
      readTime: "10 min read",
      author: "Jane Smith",
      date: "May 15, 2023",
      tags: ["arrays", "linked-lists", "stacks", "queues"],
    },
    {
      id: 2,
      title: "Sorting Algorithms Explained",
      description: "A comprehensive guide to common sorting algorithms and their time complexity analysis.",
      category: "Algorithms",
      level: "Intermediate",
      readTime: "15 min read",
      author: "John Doe",
      date: "June 2, 2023",
      tags: ["sorting", "algorithms", "time-complexity"],
    },
    {
      id: 3,
      title: "Graph Traversal Techniques",
      description: "Explore different methods for traversing graphs, including BFS and DFS.",
      category: "Data Structures",
      level: "Advanced",
      readTime: "12 min read",
      author: "Alex Johnson",
      date: "July 10, 2023",
      tags: ["graphs", "bfs", "dfs", "algorithms"],
    },
    {
      id: 4,
      title: "Dynamic Programming Patterns",
      description: "Master common dynamic programming patterns to solve complex problems efficiently.",
      category: "Algorithms",
      level: "Advanced",
      readTime: "20 min read",
      author: "Sarah Williams",
      date: "August 5, 2023",
      tags: ["dynamic-programming", "algorithms", "optimization"],
    },
    {
      id: 5,
      title: "Introduction to React Hooks",
      description: "Learn how to use React Hooks to manage state and side effects in functional components.",
      category: "Web Development",
      level: "Intermediate",
      readTime: "15 min read",
      author: "Michael Brown",
      date: "September 12, 2023",
      tags: ["react", "javascript", "hooks", "frontend"],
    },
    {
      id: 6,
      title: "Database Indexing Fundamentals",
      description: "Understand how database indexing works and how to optimize query performance.",
      category: "Database Management",
      level: "Intermediate",
      readTime: "12 min read",
      author: "Emily Chen",
      date: "October 8, 2023",
      tags: ["database", "indexing", "sql", "performance"],
    },
  ]

  // Categories for filtering
  const categories = [
    { id: "data-structures", label: "Data Structures" },
    { id: "algorithms", label: "Algorithms" },
    { id: "web-development", label: "Web Development" },
    { id: "database", label: "Database Management" },
    { id: "system-design", label: "System Design" },
    { id: "programming-languages", label: "Programming Languages" },
  ]

  // Levels for filtering
  const levels = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 md:space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Tutorials</h1>
          <p className="text-muted-foreground">
            Explore our comprehensive collection of tutorials on programming, data structures, algorithms, and more.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search tutorials..." className="w-full pl-9" />
          </div>
          <Button>
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <Card className="md:col-span-1 h-fit">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Categories */}
              <div className="space-y-4">
                <h3 className="font-medium">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category.id}`} />
                      <Label htmlFor={`category-${category.id}`} className="text-sm font-normal">
                        {category.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Levels */}
              <div className="space-y-4">
                <h3 className="font-medium">Level</h3>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <div key={level.id} className="flex items-center space-x-2">
                      <Checkbox id={`level-${level.id}`} />
                      <Label htmlFor={`level-${level.id}`} className="text-sm font-normal">
                        {level.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Reading Time */}
              <div className="space-y-4">
                <h3 className="font-medium">Reading Time</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="time-short" />
                    <Label htmlFor="time-short" className="text-sm font-normal">
                      Short (&lt; 10 min)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="time-medium" />
                    <Label htmlFor="time-medium" className="text-sm font-normal">
                      Medium (10-20 min)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="time-long" />
                    <Label htmlFor="time-long" className="text-sm font-normal">
                      Long (&gt; 20 min)
                    </Label>
                  </div>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>

          {/* Tutorials List */}
          <div className="md:col-span-3 space-y-6">
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Tutorials</TabsTrigger>
                <TabsTrigger value="data-structures">Data Structures</TabsTrigger>
                <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
                <TabsTrigger value="web-dev">Web Development</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tutorials.map((tutorial) => (
                    <Card key={tutorial.id} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <Badge className="mb-2">{tutorial.category}</Badge>
                          <Badge variant="outline">{tutorial.level}</Badge>
                        </div>
                        <CardTitle className="text-xl">
                          <Link href={`/tutorials/${tutorial.id}`} className="hover:underline">
                            {tutorial.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>{tutorial.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex flex-wrap gap-2">
                          {tutorial.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between text-sm text-muted-foreground border-t pt-3">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {tutorial.readTime}
                        </div>
                        <div>
                          By {tutorial.author} • {tutorial.date}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="data-structures" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tutorials
                    .filter((t) => t.category === "Data Structures")
                    .map((tutorial) => (
                      <Card key={tutorial.id} className="overflow-hidden">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <Badge className="mb-2">{tutorial.category}</Badge>
                            <Badge variant="outline">{tutorial.level}</Badge>
                          </div>
                          <CardTitle className="text-xl">
                            <Link href={`/tutorials/${tutorial.id}`} className="hover:underline">
                              {tutorial.title}
                            </Link>
                          </CardTitle>
                          <CardDescription>{tutorial.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-3">
                          <div className="flex flex-wrap gap-2">
                            {tutorial.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between text-sm text-muted-foreground border-t pt-3">
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {tutorial.readTime}
                          </div>
                          <div>
                            By {tutorial.author} • {tutorial.date}
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              {/* Other tabs would follow the same pattern */}
            </Tabs>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-2">
                Previous
              </Button>
              <Button variant="outline" className="mx-2">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

