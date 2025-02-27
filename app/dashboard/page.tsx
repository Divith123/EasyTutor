"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, BookOpen, CheckCircle, Clock, Code, Bookmark, Trophy, ArrowRight, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import TutorialCard from "@/components/tutorial-card"
import ChallengeCard from "@/components/challenge-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for learning paths
  const learningPaths = [
    {
      id: 1,
      title: "Data Structures Mastery",
      progress: 65,
      totalModules: 12,
      completedModules: 8,
    },
    {
      id: 2,
      title: "Algorithms Deep Dive",
      progress: 30,
      totalModules: 15,
      completedModules: 4,
    },
    {
      id: 3,
      title: "Web Development Fundamentals",
      progress: 85,
      totalModules: 10,
      completedModules: 8,
    },
  ]

  // Mock data for recent activity
  const recentActivity = [
    {
      id: 1,
      type: "tutorial",
      title: "Binary Search Trees",
      timestamp: "2 hours ago",
      icon: BookOpen,
    },
    {
      id: 2,
      type: "problem",
      title: "Valid Parentheses",
      timestamp: "Yesterday",
      icon: Code,
    },
    {
      id: 3,
      type: "achievement",
      title: "Completed 5 Easy Problems",
      timestamp: "2 days ago",
      icon: Trophy,
    },
    {
      id: 4,
      type: "tutorial",
      title: "Introduction to React Hooks",
      timestamp: "3 days ago",
      icon: BookOpen,
    },
  ]

  // Mock data for bookmarks
  const bookmarks = [
    {
      id: 1,
      title: "Dynamic Programming Patterns",
      type: "tutorial",
      category: "Algorithms",
    },
    {
      id: 2,
      title: "Merge K Sorted Lists",
      type: "problem",
      difficulty: "Hard",
    },
    {
      id: 3,
      title: "System Design: Designing a URL Shortener",
      type: "tutorial",
      category: "System Design",
    },
  ]

  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      title: "Problem Solver",
      description: "Solved 10 coding problems",
      icon: "🏆",
      earned: true,
    },
    {
      id: 2,
      title: "Fast Learner",
      description: "Completed 5 tutorials in a week",
      icon: "🚀",
      earned: true,
    },
    {
      id: 3,
      title: "Consistency King",
      description: "Logged in for 7 consecutive days",
      icon: "👑",
      earned: true,
    },
    {
      id: 4,
      title: "Algorithm Master",
      description: "Solved 20 algorithm problems",
      icon: "🧠",
      earned: false,
    },
    {
      id: 5,
      title: "Contest Winner",
      description: "Ranked in the top 10 in a contest",
      icon: "🥇",
      earned: false,
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Goal
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="learning-paths">Learning Paths</TabsTrigger>
          <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* User Welcome Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Welcome back, John!</CardTitle>
                  <CardDescription>Continue your learning journey</CardDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  Level 3
                </Badge>
                <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                  15 Problems Solved
                </Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Stats Overview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">58%</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
                <Progress value={58} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Problems Solved</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15/50</div>
                <p className="text-xs text-muted-foreground">+5 problems this week</p>
                <Progress value={30} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tutorials Completed</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+3 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7 days</div>
                <p className="text-xs text-muted-foreground">Keep it up!</p>
              </CardContent>
            </Card>
          </div>

          {/* Learning Paths Preview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {learningPaths.map((path) => (
              <Card key={path.id}>
                <CardHeader>
                  <CardTitle>{path.title}</CardTitle>
                  <CardDescription>
                    {path.completedModules} of {path.totalModules} modules completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={path.progress} className="mb-2" />
                  <p className="text-sm text-muted-foreground">{path.progress}% complete</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/learning-paths/${path.id}`}>Continue Learning</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest learning activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center">
                    <div className="mr-4 rounded-full bg-primary/10 p-2">
                      <activity.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>

          {/* Recommended Content */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended For You</CardTitle>
              <CardDescription>Based on your learning history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TutorialCard
                  title="Advanced Sorting Algorithms"
                  description="Learn about merge sort, quick sort, and heap sort"
                  category="Algorithms"
                  readTime="15 min read"
                  href="/tutorials/algorithms/advanced-sorting"
                />
                <ChallengeCard
                  title="Longest Substring Without Repeating Characters"
                  difficulty="Medium"
                  description="Find the length of the longest substring without repeating characters."
                  href="/practice/problems/longest-substring"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning-paths" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Learning Paths</CardTitle>
              <CardDescription>Track your progress through structured learning paths</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {learningPaths.map((path) => (
                  <div key={path.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{path.title}</h3>
                      <span className="text-sm text-muted-foreground">
                        {path.completedModules}/{path.totalModules} modules
                      </span>
                    </div>
                    <Progress value={path.progress} />
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm text-muted-foreground">{path.progress}% complete</span>
                      <Button size="sm" asChild>
                        <Link href={`/learning-paths/${path.id}`}>Continue</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Explore More Learning Paths
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="bookmarks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Bookmarks</CardTitle>
              <CardDescription>Tutorials and problems you've saved for later</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookmarks.map((bookmark) => (
                  <div
                    key={bookmark.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center space-x-4">
                      <Bookmark className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{bookmark.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {bookmark.type === "tutorial"
                            ? `Tutorial • ${bookmark.category}`
                            : `Problem • ${bookmark.difficulty}`}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Remove All</Button>
              <Button>View All Bookmarks</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
              <CardDescription>Badges and rewards you've earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <Card
                    key={achievement.id}
                    className={`border ${achievement.earned ? "bg-primary/5" : "bg-muted/50 opacity-70"}`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-2">{achievement.icon}</div>
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      {achievement.earned ? (
                        <Badge className="mt-4 bg-green-100 text-green-800 hover:bg-green-100">Earned</Badge>
                      ) : (
                        <Badge variant="outline" className="mt-4">
                          In Progress
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

