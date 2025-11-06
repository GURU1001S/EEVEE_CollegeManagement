'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Download, Percent, FileText, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Calendar } from '@/components/ui/calendar';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const attendanceData = [
  { subject: 'Quantum Physics', attended: 25, total: 30 },
  { subject: 'General Relativity', attended: 28, total: 30 },
  { subject: 'Organic Chemistry', attended: 22, total: 30 },
  { subject: 'Literary Analysis', attended: 29, total: 30 },
  { subject: 'Advanced Algorithms', attended: 26, total: 30 },
];

const overallAttendance =
  attendanceData.reduce((acc, curr) => acc + curr.attended, 0) /
  attendanceData.reduce((acc, curr) => acc + curr.total, 0);

const pieData = [
    { name: 'Present', value: Math.round(overallAttendance * 100) },
    { name: 'Absent', value: 100 - Math.round(overallAttendance * 100) - 2 },
    { name: 'Leave', value: 2 },
];
const COLORS = ['#10b981', '#ef4444', '#f59e0b'];


export default function AttendancePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-headline">Attendance</h1>
          <p className="text-muted-foreground">
            Track your class attendance and records.
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Overall Attendance</CardTitle>
              <CardDescription>
                Your attendance summary across all subjects.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="text-5xl font-bold text-emerald-500">
                        {Math.round(overallAttendance * 100)}%
                    </div>
                    <p className="text-muted-foreground">
                        Great standing! Keep it up.
                    </p>
                </div>
                 <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Subject-wise Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Attended</TableHead>
                    <TableHead>Total Classes</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceData.map((item) => (
                    <TableRow key={item.subject}>
                      <TableCell>{item.subject}</TableCell>
                      <TableCell>{item.attended}</TableCell>
                      <TableCell>{item.total}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <span>{((item.attended / item.total) * 100).toFixed(1)}%</span>
                          <Progress
                            value={(item.attended / item.total) * 100}
                            className="w-24 h-2"
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Leave Applications</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-emerald-500" />
                                <div>
                                    <p className="font-medium">Medical Leave</p>
                                    <p className="text-xs text-muted-foreground">May 20 - May 22</p>
                                </div>
                            </div>
                            <span className="text-sm text-emerald-500 font-medium">Approved</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-amber-500" />
                                <div>
                                    <p className="font-medium">Family Function</p>
                                    <p className="text-xs text-muted-foreground">June 5</p>
                                </div>
                            </div>
                            <span className="text-sm text-amber-500 font-medium">Pending</span>
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Apply for Leave</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Calendar View</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <Calendar
                    mode="single"
                    selected={new Date()}
                    className="rounded-md border"
                    />
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
