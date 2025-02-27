import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  const user = {
    name: "John Doe",
    username: "johndoe",
    avatar: "/placeholder.svg",
    problemsSolved: 127,
    rank: 1542,
    badges: ["Problem Solver", "30-Day Streak", "Contest Winner"],
    recentActivity: [
      { type: "Solved Problem", name: "Two Sum", date: "2 days ago" },
      { type: "Completed Contest", name: "Weekly Contest 295", date: "1 week ago" },
      { type: "Earned Badge", name: "100 Problems Solved", date: "2 weeks ago" },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-4 mb-6">
        <Avatar className="h-20 w-20">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground">@{user.username}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">Problems Solved</p>
                <p className="text-2xl font-bold">{user.problemsSolved}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Rank</p>
                <p className="text-2xl font-bold">#{user.rank}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Progress to Next Rank</p>
                <Progress value={33} className="mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {user.badges.map((badge) => (
                <Button key={badge} variant="outline" size="sm">
                  {badge}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {user.recentActivity.map((activity, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{activity.type}</p>
                    <p className="text-sm text-muted-foreground">{activity.name}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

