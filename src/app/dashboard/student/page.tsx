'use client';

import {
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle,
  DollarSign,
  GraduationCap,
  LayoutDashboard,
  Newspaper,
  Rss,
  Target,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const attendanceData = [
  { name: 'Jan', attendance: 85 },
  { name: 'Feb', attendance: 92 },
  { name: 'Mar', attendance: 88 },
  { name: 'Apr', attendance: 95 },
  { name: 'May', attendance: 91 },
];

const gradesData = [
  { name: 'Sem 1', gpa: 3.5 },
  { name: 'Sem 2', gpa: 3.7 },
  { name: 'Sem 3', gpa: 3.6 },
  { name: 'Sem 4', gpa: 3.8 },
  { name: 'Sem 5', gpa: 3.9 },
];

export default function StudentDashboard() {
    return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline">Student Hub</h1>
          <p className="text-muted-foreground">
            Welcome to your personal dashboard.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/attendance">
              <BookOpen className="mr-2 h-4 w-4" /> Check Attendance
            </Link>
          </Button>
          <Button variant="outline" asChild>
             <Link href="/dashboard/finance">
              <DollarSign className="mr-2 h-4 w-4" /> Pay Fees
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/order-food">
              <Newspaper className="mr-2 h-4 w-4" /> Order Food
            </Link>
          </Button>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Overall GPA
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8</div>
            <p className="text-xs text-muted-foreground">+0.2 from last semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 assignments, 3 forms</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next event in 2 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Performance Overview & To-Do List */}
        <div className="lg:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Performance Overview</CardTitle>
                    <CardDescription>Your academic trends over time.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-8 md:grid-cols-2">
                     <div>
                        <h3 className="text-sm font-medium mb-2 text-center">Attendance (%)</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={attendanceData}>
                            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip />
                            <Bar dataKey="attendance" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium mb-2 text-center">GPA</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={gradesData}>
                            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} domain={[0, 4]}/>
                            <Tooltip />
                            <Bar dataKey="gpa" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Smart To-Do List</CardTitle>
                    <CardDescription>Auto-populated reminders and deadlines.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        <li className="flex items-center justify-between p-2 rounded-md hover:bg-muted"><span>Physics Assignment 3</span><span className="text-sm text-muted-foreground">Due: 2 days</span></li>
                        <li className="flex items-center justify-between p-2 rounded-md hover:bg-muted"><span>Pay Semester Fees</span><span className="text-sm text-destructive">Due: Today</span></li>
                        <li className="flex items-center justify-between p-2 rounded-md hover:bg-muted"><span>Submit Scholarship Form</span><span className="text-sm text-muted-foreground">Due: 5 days</span></li>
                    </ul>
                </CardContent>
            </Card>
        </div>

        {/* Notifications and Calendar */}
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Mini Calendar</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <CalendarComponent
                        mode="single"
                        selected={new Date()}
                        className="rounded-md"
                    />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Recent alerts and announcements.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3"><Bell className="h-4 w-4 mt-1 text-primary" /><div><p>Library books due for renewal.</p><p className="text-xs text-muted-foreground">2 hours ago</p></div></li>
                        <li className="flex items-start gap-3"><Rss className="h-4 w-4 mt-1 text-accent" /><div><p>Campus event: Tech Fest 2024 registration open.</p><p className="text-xs text-muted-foreground">1 day ago</p></div></li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
       <Card className="overflow-hidden">
            <CardHeader className="p-2 bg-muted/50">
                 <CardTitle className="text-sm p-2">Campus News</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className="relative flex overflow-x-hidden">
                    <p className="animate-marquee whitespace-nowrap p-3 text-sm">
                        Exam schedules announced for all departments. &bull; Canteen menu updated with new items. &bull; Registrations for the annual sports meet are now open.
                    </p>
                     <p className="absolute top-0 animate-marquee2 whitespace-nowrap p-3 text-sm">
                        Exam schedules announced for all departments. &bull; Canteen menu updated with new items. &bull; Registrations for the annual sports meet are now open.
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
