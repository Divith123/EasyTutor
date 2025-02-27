"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Bookmark,
  Share2,
  ThumbsUp,
  Play,
  CheckCircle,
  RotateCcw,
  Save,
  Download,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CodeEditor from "@/components/code-editor"

export default function ProblemPage({ params }: { params: { id: string } }) {
  const [language, setLanguage] = useState("javascript")
  const [activeTab, setActiveTab] = useState("description")

  // Mock problem data
  const problem = {
    id: params.id,
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "45%",
    likes: 25642,
    dislikes: 812,
    description: `
      <h2>Problem Description</h2>
      <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
      <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
      <p>You can return the answer in any order.</p>
      
      <h3>Example 1:</h3>
      <pre>
      Input: nums = [2,7,11,15], target = 9
      Output: [0,1]
      Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
      </pre>
      
      <h3>Example 2:</h3>
      <pre>
      Input: nums = [3,2,4], target = 6
      Output: [1,2]
      </pre>
      
      <h3>Example 3:</h3>
      <pre>
      Input: nums = [3,3], target = 6
      Output: [0,1]
      </pre>
      
      <h3>Constraints:</h3>
      <ul>
        <li>2 <= nums.length <= 10<sup>4</sup></li>
        <li>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></li>
        <li>-10<sup>9</sup> <= target <= 10<sup>9</sup></li>
        <li>Only one valid answer exists.</li>
      </ul>
      
      <h3>Follow-up:</h3>
      <p>Can you come up with an algorithm that is less than O(n²) time complexity?</p>
    `,
    hints: [
      "A really brute force way would be to search for all possible pairs of numbers but that would be too slow.",
      "Try to use the fact that the complement of the current element is what we're looking for, and checking if that complement exists in the array.",
      "We can use a hash table to map each element to its index for O(1) lookups.",
    ],
    solution: `
      <h2>Approach 1: Brute Force</h2>
      <p>The brute force approach is simple. Loop through each element x and find if there is another value that equals to target - x.</p>
      
      <pre><code>
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
  return [];
}
      </code></pre>
      
      <p>Time complexity: O(n²). For each element, we try to find its complement by looping through the rest of the array which takes O(n) time. Therefore, the time complexity is O(n²).</p>
      <p>Space complexity: O(1).</p>
      
      <h2>Approach 2: One-pass Hash Table</h2>
      <p>We can reduce the time complexity to O(n) by using a hash table. While we iterate through the array, we check if the current element's complement (target - nums[i]) exists in the hash table. If it exists, we've found a solution. If not, we add the current element to the hash table.</p>
      
      <pre><code>
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}
      </code></pre>
      
      <p>Time complexity: O(n). We traverse the list containing n elements only once. Each lookup in the hash table costs only O(1) time.</p>
      <p>Space complexity: O(n). The extra space required depends on the number of items stored in the hash table, which stores at most n elements.</p>
    `,
    tags: ["Array", "Hash Table"],
    companies: ["Amazon", "Google", "Facebook", "Apple", "Microsoft"],
    testCases: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    starterCode: {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Your code here
  
}`,
      python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Your code here
        pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
        
    }
}`,
    },
    relatedProblems: [
      {
        id: "15",
        title: "3Sum",
        difficulty: "Medium",
      },
      {
        id: "18",
        title: "4Sum",
        difficulty: "Medium",
      },
      {
        id: "167",
        title: "Two Sum II - Input Array Is Sorted",
        difficulty: "Medium",
      },
      {
        id: "170",
        title: "Two Sum III - Data structure design",
        difficulty: "Easy",
      },
    ],
  }

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Problem Description Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/practice" className="text-sm text-muted-foreground hover:text-primary flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Problems
            </Link>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight mb-2">
              {problem.id}. {problem.title}
            </h1>
            <div className="flex items-center space-x-2 mb-4">
              <Badge className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
              <span className="text-sm text-muted-foreground">Acceptance: {problem.acceptance}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Button variant="ghost" size="sm" className="gap-1">
                <ThumbsUp className="h-4 w-4" />
                {problem.likes}
              </Button>
              <Button variant="ghost" size="sm" className="gap-1">
                <ThumbsUp className="h-4 w-4 rotate-180" />
                {problem.dislikes}
              </Button>
            </div>
          </div>

          <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full">
              <TabsTrigger value="description" className="flex-1">
                Description
              </TabsTrigger>
              <TabsTrigger value="hints" className="flex-1">
                Hints
              </TabsTrigger>
              <TabsTrigger value="solution" className="flex-1">
                Solution
              </TabsTrigger>
              <TabsTrigger value="submissions" className="flex-1">
                Submissions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: problem.description }} />
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Companies</h3>
                    <div className="flex flex-wrap gap-2">
                      {problem.companies.map((company) => (
                        <Badge key={company} variant="outline">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Related Problems</h3>
                    <div className="space-y-2">
                      {problem.relatedProblems.map((related) => (
                        <div key={related.id} className="flex items-center justify-between">
                          <Link href={`/practice/problems/${related.id}`} className="text-sm hover:underline">
                            {related.id}. {related.title}
                          </Link>
                          <Badge className={getDifficultyColor(related.difficulty)}>{related.difficulty}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hints" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {problem.hints.map((hint, index) => (
                      <div key={index} className="p-4 bg-muted rounded-md">
                        <h3 className="font-semibold mb-2">Hint {index + 1}</h3>
                        <p>{hint}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solution" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: problem.solution }} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="submissions" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-100 dark:bg-green-900/20 rounded-md">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                        <div>
                          <p className="font-medium">Accepted</p>
                          <p className="text-sm text-muted-foreground">Runtime: 76 ms, Memory: 42.5 MB</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">2 days ago</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-red-100 dark:bg-red-900/20 rounded-md">
                      <div className="flex items-center">
                        <div className="h-5 w-5 text-red-600 dark:text-red-400 mr-2">✗</div>
                        <div>
                          <p className="font-medium">Wrong Answer</p>
                          <p className="text-sm text-muted-foreground">Failed on test case 2</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">3 days ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Code Editor Panel */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          <Card className="h-[calc(100vh-300px)] min-h-[400px]">
            <CardContent className="p-0 h-full">
              <CodeEditor language={language} value={problem.starterCode[language]} onChange={() => {}} />
            </CardContent>
          </Card>

          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Play className="h-4 w-4 mr-2" />
                Run
              </Button>
              <Button size="sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                Submit
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader className="py-3">
              <CardTitle className="text-base">Test Cases</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {problem.testCases.map((testCase, index) => (
                  <div key={index} className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">Test Case {index + 1}</div>
                      <Button variant="ghost" size="sm">
                        Run
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium mb-1">Input:</div>
                        <div className="text-sm bg-muted p-2 rounded-md font-mono">{testCase.input}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">Expected Output:</div>
                        <div className="text-sm bg-muted p-2 rounded-md font-mono">{testCase.output}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

