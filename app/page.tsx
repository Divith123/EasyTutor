import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CategoryCard from "@/components/category-card"
import TutorialCard from "@/components/tutorial-card"
import ChallengeCard from "@/components/challenge-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learn, Practice, Master</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Your comprehensive platform for learning programming, data structures, algorithms, and more.
              </p>
              <div className="w-full max-w-md flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search tutorials, problems, or topics..." className="w-full pl-9" />
                </div>
                <Button type="submit">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Explore Categories</h2>
              <p className="text-muted-foreground">Dive into our comprehensive collection of technical topics</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
                <CategoryCard
                  title="Data Structures"
                  description="Arrays, Linked Lists, Trees, Graphs, and more"
                  icon="Database"
                  color="bg-blue-500"
                  href="/tutorials/data-structures"
                />
                <CategoryCard
                  title="Algorithms"
                  description="Sorting, Searching, Dynamic Programming"
                  icon="Code2"
                  color="bg-green-500"
                  href="/tutorials/algorithms"
                />
                <CategoryCard
                  title="Web Development"
                  description="HTML, CSS, JavaScript, React, and more"
                  icon="Globe"
                  color="bg-purple-500"
                  href="/tutorials/web-development"
                />
                <CategoryCard
                  title="System Design"
                  description="Architecture, Scalability, Design Patterns"
                  icon="LayoutGrid"
                  color="bg-orange-500"
                  href="/tutorials/system-design"
                />
              </div>
              <div className="flex justify-center mt-6">
                <Button variant="outline" asChild>
                  <Link href="/tutorials">View All Categories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tutorials Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Popular Tutorials</h2>
              <p className="text-muted-foreground">Most read articles and tutorials this week</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                <TutorialCard
                  title="Understanding Big O Notation"
                  description="Learn how to analyze algorithm efficiency with Big O notation"
                  category="Algorithms"
                  readTime="8 min read"
                  href="/tutorials/algorithms/big-o-notation"
                />
                <TutorialCard
                  title="Mastering React Hooks"
                  description="A comprehensive guide to React's useState, useEffect, and custom hooks"
                  category="Web Development"
                  readTime="12 min read"
                  href="/tutorials/web-development/react-hooks"
                />
                <TutorialCard
                  title="Graph Traversal Algorithms"
                  description="Explore BFS, DFS, and other graph traversal techniques"
                  category="Data Structures"
                  readTime="10 min read"
                  href="/tutorials/data-structures/graph-traversal"
                />
              </div>
              <div className="flex justify-center mt-6">
                <Button variant="outline" asChild>
                  <Link href="/tutorials">View All Tutorials</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Coding Challenge Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Daily Coding Challenge</h2>
              <p className="text-muted-foreground">Sharpen your skills with our daily programming challenge</p>
              <div className="pt-4">
                <ChallengeCard
                  title="Two Sum Problem"
                  difficulty="Medium"
                  description="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."
                  href="/practice/daily-challenge"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to start your learning journey?</h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
                Join thousands of learners mastering technical skills on EasyTutor
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">Sign Up Free</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/tutorials">Explore Tutorials</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

