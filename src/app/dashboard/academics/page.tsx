'use client';

import {
  Book,
  Calendar,
  ClipboardList,
  GraduationCap,
  Download,
  Clock,
  FileText,
  Percent,
  PlusCircle,
  TrendingUp,
  BookOpen,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const courses = [
  {
    name: 'Quantum Physics',
    faculty: 'Dr. Evelyn Reed',
    schedule: 'Mon, Wed, Fri | 10:00 AM',
    nextClass: 'Tomorrow, 10:00 AM',
  },
  {
    name: 'General Relativity',
    faculty: 'Dr. Alan Grant',
    schedule: 'Tue, Thu | 1:00 PM',
    nextClass: 'Tomorrow, 1:00 PM',
  },
];

const assignments = [
  {
    title: 'Problem Set 5',
    course: 'Quantum Physics',
    dueDate: '3 days remaining',
    status: 'Pending',
  },
  {
    title: 'Lab Report 2',
    course: 'General Relativity',
    dueDate: '5 days remaining',
    status: 'Pending',
  },
];

const exams = [
    { name: "Mid-Term: Quantum Physics", date: "2024-09-15", time: "10:00 AM" },
    { name: "Mid-Term: General Relativity", date: "2024-09-17", time: "01:00 PM" },
]

const grades = [
    { course: "Literary Analysis", type: "Mid-Term", score: "85/100", grade: "A" },
    { course: "Advanced Algorithms", type: "Assignment 1", score: "92/100", grade: "A+" },
]

export default function AcademicsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold font-headline">Academics</h1>
            <p className="text-muted-foreground">
            Your academic journey at a glance.
            </p>
        </div>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Register for Courses
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>My Courses</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible defaultValue="item-1">
                        {courses.map((course, index) => (
                        <AccordionItem value={`item-${index+1}`} key={course.name}>
                            <AccordionTrigger className="font-bold">{course.name}</AccordionTrigger>
                            <AccordionContent className="space-y-2">
                                <p className="text-sm text-muted-foreground">Faculty: {course.faculty}</p>
                                <p className="text-sm text-muted-foreground">Schedule: {course.schedule}</p>
                                <p className="text-sm text-muted-foreground">Next Class: <span className="text-primary font-semibold">{course.nextClass}</span></p>
                                <div className="flex gap-2 pt-2">
                                    <Button variant="outline" size="sm">Course Materials</Button>
                                    <Button variant="outline" size="sm">View Attendance</Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Assignments & Quizzes</CardTitle>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Due In</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {assignments.map((item) => (
                            <TableRow key={item.title}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.course}</TableCell>
                                <TableCell>
                                    <Badge variant="destructive">{item.dueDate}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button size="sm">Submit</Button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Grades & Marks</CardTitle>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Course</TableHead>
                            <TableHead>Evaluation</TableHead>
                            <TableHead>Score</TableHead>
                            <TableHead className="text-right">Grade</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {grades.map((item) => (
                            <TableRow key={item.course}>
                                <TableCell>{item.course}</TableCell>
                                <TableCell>{item.type}</TableCell>
                                <TableCell className="font-medium">{item.score}</TableCell>
                                <TableCell className="text-right font-bold text-primary">{item.grade}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="ml-auto">View Full Gradebook</Button>
                </CardFooter>
            </Card>

        </div>
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Overall GPA</span>
                        <span className="font-bold text-xl text-primary">3.8 / 4.0</span>
                    </div>
                     <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Attendance</span>
                        <span className="font-bold text-xl text-emerald-500">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Credits Earned</span>
                        <span className="font-bold text-xl">110 / 150</span>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Upcoming Exams</CardTitle>
                    <CardDescription>Finals are 2 weeks away!</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {exams.map(exam => (
                            <li key={exam.name} className="flex items-start gap-3">
                                <Calendar className="h-5 w-5 mt-1 text-muted-foreground" />
                                <div>
                                    <p className="font-semibold">{exam.name}</p>
                                    <p className="text-sm text-muted-foreground">{exam.date} at {exam.time}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2">
                     <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Download Hall Ticket
                     </Button>
                     <Button variant="outline" className="w-full">View Full Schedule</Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
