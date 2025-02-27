"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PracticePage() {
  const [sortBy, setSortBy] = useState("popularity")

  // Mock data for problems
  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      acceptance: "45%",
      tags: ["Array", "Hash Table"],
      companies: ["Amazon", "Google", "Facebook"],
      solved: true,
    },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
      acceptance: "32%",
      tags: ["Linked List", "Math", "Recursion"],
      companies: ["Microsoft", "Amazon"],
      solved: false,
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      acceptance: "29%",
      tags: ["Hash Table", "String", "Sliding Window"],
      companies: ["Amazon", "Bloomberg", "Facebook"],
      solved: false,
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      acceptance: "28%",
      tags: ["Array", "Binary Search", "Divide and Conquer"],
      companies: ["Google", "Amazon", "Facebook"],
      solved: false,
    },
    {
      id: 5,
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      acceptance: "28%",
      tags: ["String", "Dynamic Programming"],
      companies: ["Amazon", "Microsoft", "Facebook"],
      solved: true,
    },
    {
      id: 6,
      title: "Valid Parentheses",
      difficulty: "Easy",
      acceptance: "38%",
      tags: ["String", "Stack"],
      companies: ["Google", "Facebook", "Microsoft", "Amazon"],
      solved: true,
    },
    {
      id: 7,
      title: "Merge Two Sorted Lists",
      difficulty: "Easy",
      acceptance: "51%",
      tags: ["Linked List", "Recursion"],
      companies: ["Amazon", "Apple", "Microsoft"],
      solved: false,
    },
    {
      id: 8,
      title: "Maximum Subarray",
      difficulty: "Easy",
      acceptance: "45%",
      tags: ["Array", "Divide and Conquer", "Dynamic Programming"],
      companies: ["LinkedIn", "Amazon", "Microsoft"],
      solved: false,
    },
  ]

  // Difficulty filters
  const difficulties = [
    { id: "easy", label: "Easy" },
    { id: "medium", label: "Medium" },
    { id: "hard", label: "Hard" },
  ]

  // Topic filters
  const topics = [
    { id: "array", label: "Array" },
    { id: "string", label: "String" },
    { id: "hash-table", label: "Hash Table" },
    { id: "dynamic-programming", label: "Dynamic Programming" },
    { id: "math", label: "Math" },
    { id: "sorting", label: "Sorting" },
    { id: "greedy", label: "Greedy" },
    { id: "depth-first-search", label: "Depth-First Search" },
    { id: "binary-search", label: "Binary Search" },
    { id: "tree", label: "Tree" },
  ]

  // Company filters
  const companies = [
    { id: "google", label: "Google" },
    { id: "amazon", label: "Amazon" },
    { id: "facebook", label: "Facebook" },
    { id: "microsoft", label: "Microsoft" },
    { id: "apple", label: "Apple" },
    { id: "bloomberg", label: "Bloomberg" },
    { id: "uber", label: "Uber" },
  ]

  // Get badge color based on difficulty
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "Hard":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return ""
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 md:space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Practice Problems</h1>
          <p className="text-muted-foreground">
            Sharpen your coding skills with our collection of programming challenges.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search problems..." className="w-full pl-9" />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="acceptance">Acceptance Rate</SelectItem>
              <SelectItem value="difficulty">Difficulty</SelectItem>
            </SelectContent>
          </Select>
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
              {/* Status */}
              <div className="space-y-4">
                <h3 className="font-medium">Status</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="status-todo" />
                    <Label htmlFor="status-todo" className="text-sm font-normal">
                      Todo
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="status-solved" />
                    <Label htmlFor="status-solved" className="text-sm font-normal">
                      Solved
                    </Label>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Difficulty */}
              <div className="space-y-4">
                <h3 className="font-medium">Difficulty</h3>
                <div className="space-y-2">
                  {difficulties.map((difficulty) => (
                    <div key={difficulty.id} className="flex items-center space-x-2">
                      <Checkbox id={`difficulty-${difficulty.id}`} />
                      <Label htmlFor={`difficulty-${difficulty.id}`} className="text-sm font-normal">
                        {difficulty.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Topics */}
              <div className="space-y-4">
                <h3 className="font-medium">Topics</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                  {topics.map((topic) => (
                    <div key={topic.id} className="flex items-center space-x-2">
                      <Checkbox id={`topic-${topic.id}`} />
                      <Label htmlFor={`topic-${topic.id}`} className="text-sm font-normal">
                        {topic.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Companies */}
              <div className="space-y-4">
                <h3 className="font-medium">Companies</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                  {companies.map((company) => (
                    <div key={company.id} className="flex items-center space-x-2">
                      <Checkbox id={`company-${company.id}`} />
                      <Label htmlFor={`company-${company.id}`} className="text-sm font-normal">
                        {company.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>

          {/* Problems List */}
          <div className="md:col-span-3 space-y-6">
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Problems</TabsTrigger>
                <TabsTrigger value="easy">Easy</TabsTrigger>
                <TabsTrigger value="medium">Medium</TabsTrigger>
                <TabsTrigger value="hard">Hard</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">Status</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead className="w-24">Difficulty</TableHead>
                          <TableHead className="w-24 text-right">Acceptance</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {problems.map((problem) => (
                          <TableRow key={problem.id}>
                            <TableCell>
                              {problem.solved ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : (
                                <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/20" />
                              )}
                            </TableCell>
                            <TableCell>
                              <Link href={`/practice/problems/${problem.id}`} className="font-medium hover:underline">
                                {problem.title}
                              </Link>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {problem.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
                            </TableCell>
                            <TableCell className="text-right">{problem.acceptance}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="flex justify-between py-4">
                    <div className="text-sm text-muted-foreground">Showing 1-8 of 1,200 problems</div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Other tabs would follow the same pattern */}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

