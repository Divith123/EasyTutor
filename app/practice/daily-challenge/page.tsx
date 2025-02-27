"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Play, CheckCircle, Bookmark, Share2, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CodeEditor from "@/components/code-editor"

export default function DailyChallengePage() {
  const [language, setLanguage] = useState("javascript")
  const [activeTab, setActiveTab] = useState("description")

  // Mock data for the daily challenge
  const challenge = {
    id: "daily-001",
    title: "Two Sum",
    difficulty: "Easy",
    likes: 27149,
    dislikes: 857,
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
    `,
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
  }

  // Function to run the code (this is a mock function)
  const runCode = () => {
    console.log("Running code...")
    // In a real application, this would compile and run the code
  }

  // Function to submit the code (this is a mock function)
  const submitCode = () => {
    console.log("Submitting code...")
    // In a real application, this would submit the code for evaluation
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/practice" className="text-sm text-muted-foreground hover:text-primary flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Practice
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Problem Description Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight mb-2">Daily Challenge: {challenge.title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{challenge.difficulty}</Badge>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Button variant="ghost" size="sm" className="gap-1">
                <ThumbsUp className="h-4 w-4" />
                {challenge.likes}
              </Button>
              <Button variant="ghost" size="sm" className="gap-1">
                <ThumbsUp className="h-4 w-4 rotate-180" />
                {challenge.dislikes}
              </Button>
              <Button variant="ghost" size="sm" className="gap-1">
                <Bookmark className="h-4 w-4" />
                Save
              </Button>
              <Button variant="ghost" size="sm" className="gap-1">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full">
              <TabsTrigger value="description" className="flex-1">
                Description
              </TabsTrigger>
              <TabsTrigger value="submissions" className="flex-1">
                Submissions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: challenge.description }} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="submissions" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-center text-muted-foreground">No submissions yet.</div>
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
          </div>

          <Card className="h-[calc(100vh-400px)] min-h-[400px]">
            <CardContent className="p-0 h-full">
              <CodeEditor language={language} value={challenge.starterCode[language]} onChange={() => {}} />
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={runCode}>
              <Play className="h-4 w-4 mr-2" />
              Run
            </Button>
            <Button onClick={submitCode}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Submit
            </Button>
          </div>

          <Card>
            <CardHeader className="py-3">
              <CardTitle className="text-base">Test Cases</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {challenge.testCases.map((testCase, index) => (
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

