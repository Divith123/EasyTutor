import Link from "next/link"
import { ArrowLeft, ArrowRight, Bookmark, Share2, ThumbsUp, MessageSquare, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TutorialPage({ params }: { params: { id: string } }) {
  // Mock tutorial data
  const tutorial = {
    id: params.id,
    title: "Understanding Big O Notation",
    description: "Learn how to analyze algorithm efficiency with Big O notation",
    content: `
      <h2>Introduction to Big O Notation</h2>
      <p>Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.</p>
      
      <h2>Why Big O Notation Matters</h2>
      <p>Understanding Big O notation is crucial for several reasons:</p>
      <ul>
        <li>It helps you analyze the efficiency of your algorithms</li>
        <li>It allows you to compare different approaches to solving a problem</li>
        <li>It's a common topic in technical interviews</li>
        <li>It guides you in making performance optimizations</li>
      </ul>
      
      <h2>Common Time Complexities</h2>
      <p>Here are some common time complexities you'll encounter:</p>
      
      <h3>O(1) - Constant Time</h3>
      <p>An algorithm that will always execute in the same time regardless of the size of the input data set.</p>
      
      <pre><code>
function getFirstElement(array) {
  return array[0];
}
      </code></pre>
      
      <h3>O(log n) - Logarithmic Time</h3>
      <p>An algorithm that reduces the size of the input data in each step (usually by half). Binary search is a common example.</p>
      
      <pre><code>
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (array[mid] === target) {
      return mid;
    }
    
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}
      </code></pre>
      
      <h3>O(n) - Linear Time</h3>
      <p>An algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.</p>
      
      <pre><code>
function findMax(array) {
  let max = array[0];
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  
  return max;
}
      </code></pre>
      
      <h3>O(n²) - Quadratic Time</h3>
      <p>An algorithm whose performance is directly proportional to the square of the size of the input data set. Common in algorithms with nested iterations.</p>
      
      <pre><code>
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
      </code></pre>
      
      <h2>Space Complexity</h2>
      <p>In addition to time complexity, Big O notation is also used to describe the space complexity of an algorithm, which is the amount of memory it needs to run.</p>
      
      <h2>Conclusion</h2>
      <p>Understanding Big O notation is essential for writing efficient code. By analyzing the time and space complexity of your algorithms, you can make informed decisions about which approach to use for a given problem.</p>
    `,
    category: "Algorithms",
    level: "Intermediate",
    readTime: "8 min read",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg",
      title: "Senior Algorithm Engineer",
    },
    date: "May 15, 2023",
    tags: ["algorithms", "time-complexity", "computer-science", "interview-prep"],
    relatedTutorials: [
      {
        id: "2",
        title: "Sorting Algorithms Explained",
        description: "A comprehensive guide to common sorting algorithms and their time complexity analysis.",
        category: "Algorithms",
      },
      {
        id: "3",
        title: "Dynamic Programming Fundamentals",
        description: "Learn the basics of dynamic programming and how to apply it to solve complex problems.",
        category: "Algorithms",
      },
      {
        id: "4",
        title: "Space Complexity Analysis",
        description: "Understanding how to analyze the memory usage of algorithms.",
        category: "Algorithms",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <Link href="/tutorials" className="hover:text-primary">
            Tutorials
          </Link>
          <span className="mx-2">/</span>
          <Link href="/tutorials/algorithms" className="hover:text-primary">
            Algorithms
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Big O Notation</span>
        </div>

        {/* Tutorial Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>{tutorial.category}</Badge>
            <Badge variant="outline">{tutorial.level}</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{tutorial.title}</h1>

          <p className="text-xl text-muted-foreground mb-6">{tutorial.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={tutorial.author.avatar} alt={tutorial.author.name} />
                <AvatarFallback>{tutorial.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{tutorial.author.name}</div>
                <div className="text-sm text-muted-foreground">{tutorial.author.title}</div>
              </div>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {tutorial.readTime} • {tutorial.date}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Tutorial Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: tutorial.content }} />
        </div>

        {/* Tutorial Actions */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-12">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <ThumbsUp className="h-4 w-4 mr-2" />
              Helpful
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4 mr-2" />
              Bookmark
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          <div className="flex space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/tutorials/prev-tutorial">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/tutorials/next-tutorial">
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tutorial.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Related Tutorials */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Related Tutorials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tutorial.relatedTutorials.map((related) => (
              <Card key={related.id}>
                <CardContent className="p-4">
                  <Badge className="mb-2">{related.category}</Badge>
                  <h4 className="font-semibold mb-2">
                    <Link href={`/tutorials/${related.id}`} className="hover:underline">
                      {related.title}
                    </Link>
                  </h4>
                  <p className="text-sm text-muted-foreground">{related.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Comments</h3>
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <textarea className="w-full p-3 border rounded-md" rows={3} placeholder="Add a comment..." />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>
                <MessageSquare className="h-4 w-4 mr-2" />
                Comment
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">Alice Brown</span>
                    <span className="text-sm text-muted-foreground ml-2">2 days ago</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    12
                  </Button>
                </div>
                <p className="mt-2">
                  This was really helpful! I've been struggling with understanding Big O notation for a while, and this
                  explanation made it click for me.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">Mike Smith</span>
                    <span className="text-sm text-muted-foreground ml-2">5 days ago</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="h-3 w-3 mr-1" />8
                  </Button>
                </div>
                <p className="mt-2">
                  Could you add more examples of O(n log n) algorithms? That's the complexity I encounter most often in
                  practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

