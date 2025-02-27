"use client"
import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, Trophy, Users, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ContestsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  // Mock data for upcoming contests
  const upcomingContests = [
    {
      id: 1,
      title: "Weekly Coding Challenge #42",
      description: "Solve 5 algorithmic problems in 2 hours",
      startDate: "2023-06-15T18:00:00Z",
      duration: "2 hours",
      participants: 245,
      difficulty: "Medium",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Dynamic Programming Contest",
      description: "Test your DP skills with 4 challenging problems",
      startDate: "2023-06-18T15:00:00Z",
      duration: "3 hours",
      participants: 189,
      difficulty: "Hard",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Beginner Friendly Challenge",
      description: "Perfect for newcomers to competitive programming",
      startDate: "2023-06-20T17:00:00Z",
      duration: "1.5 hours",
      participants: 312,
      difficulty: "Easy",
      status: "upcoming",
    },
  ]

  // Mock data for ongoing contests
  const ongoingContests = [
    {
      id: 4,
      title: "Graph Theory Special",
      description: "Focus on graph algorithms and data structures",
      startDate: "2023-06-10T16:00:00Z",
      endDate: "2023-06-17T16:00:00Z",
      duration: "7 days",
      participants: 567,
      difficulty: "Medium",
      status: "ongoing",
      progress: 70,
    },
  ]

  // Mock data for past contests
  const pastContests = [
    {
      id: 5,
      title: "Weekly Coding Challenge #41",
      description: "Solve 5 algorithmic problems in 2 hours",
      date: "June 8, 2023",
      participants: 412,
      difficulty: "Medium",
      status: "completed",
      winners: [
        { rank: 1, name: "Alex Johnson", avatar: "/placeholder.svg", score: 500 },
        { rank: 2, name: "Sarah Williams", avatar: "/placeholder.svg", score: 480 },
        { rank: 3, name: "Michael Brown", avatar: "/placeholder.svg", score: 450 },
      ],
    },
    {
      id: 6,
      title: "String Manipulation Contest",
      description: "Focus on string algorithms and techniques",
      date: "June 1, 2023",
      participants: 356,
      difficulty: "Hard",
      status: "completed",
      winners: [
        { rank: 1, name: "Emily Chen", avatar: "/placeholder.svg", score: 600 },
        { rank: 2, name: "David Kim", avatar: "/placeholder.svg", score: 580 },
        { rank: 3, name: "Jessica Lee", avatar: "/placeholder.svg", score: 550 },
      ],
    },
    {
      id: 7,
      title: "Array Manipulation Challenge",
      description: "Test your skills with array problems",
      date: "May 25, 2023",
      participants: 289,
      difficulty: "Medium",
      status: "completed",
      winners: [
        { rank: 1, name: "Robert Taylor", avatar: "/placeholder.svg", score: 450 },
        { rank: 2, name: "Lisa Wang", avatar: "/placeholder.svg", score: 430 },
        { rank: 3, name: "James Wilson", avatar: "/placeholder.svg", score: 410 },
      ],
    },
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

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 md:space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Coding Contests</h1>
          <p className="text-muted-foreground">
            Participate in coding competitions to test your skills and compete with others.
          </p>
        </div>

        {/* Featured Contest */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Badge className="bg-primary-foreground text-primary">Featured</Badge>
                <h2 className="text-2xl font-bold">Monthly Championship</h2>
                <p>
                  Our flagship monthly contest with prizes for top performers. Solve challenging problems and compete for the championship title.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>June 30, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>3 hours</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    <span>$500 in prizes</span>
                  </div>
                </div>
                <Button className="mt-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Register Now
                </Button>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Trophy className="h-16 w-16" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contest Tabs */}
        <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Upcoming Contests */}
          <TabsContent value="upcoming" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingContests.map((contest) => (
                <Card key={contest.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge className={getDifficultyColor(contest.difficulty)}>
                        {contest.difficulty}
                      </Badge>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="text-sm">{contest.participants}</span>
                      </div>
                    </div>
                    <CardTitle>{contest.title}</CardTitle>
                    <CardDescription>{contest.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{formatDate(contest.startDate)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Duration: {contest.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/contests/${contest.id}`}>Register</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Ongoing Contests */}
          <TabsContent value="ongoing" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingContests.map((contest) => (
                <Card key={contest.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge className={getDifficultyColor(contest.difficulty)}>
                        {contest.difficulty}
                      </Badge>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="text-sm">{contest.participants}</span>
                      </div>
                    </div>
                    <CardTitle>{contest.title}</CardTitle>
                    <CardDescription>{contest.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Ends: {formatDate(contest.endDate)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Progress: {contest.progress}%</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="secondary" asChild>
                      <Link href={`/contests/${contest.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Past Contests */}
          <TabsContent value="past" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastContests.map((contest) => (
                <Card key={contest.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge className={getDifficultyColor(contest.difficulty)}>
                        {contest.difficulty}
                      </Badge>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="text-sm">{contest.participants}</span>
                      </div>
                    </div>
                    <CardTitle>{contest.title}</CardTitle>
                    <CardDescription>{contest.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Date: {contest.date}</span>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <p className="text-sm font-medium">Winners:</p>
                        <ul className="space-y-1">
                          {contest.winners.map((winner) => (
                            <li key={winner.rank} className="flex items-center space-x-2">
                              <span className="font-bold">{winner.rank}.</span>
                              <img src={winner.avatar} alt={`${winner.name}'s avatar`} className="w-6 h-6 rounded-full" />
                              <span>{winner.name}</span>
                              <span className="ml-auto text-sm text-muted-foreground">Score: {winner.score}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href={`/contests/${contest.id}`}>View Results</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}