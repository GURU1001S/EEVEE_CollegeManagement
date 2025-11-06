'use client';

import { Book, Calendar, ClipboardList, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AcademicsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Academics</h1>
        <p className="text-muted-foreground">
          Your academic journey at a glance.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Courses</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4 Courses</div>
            <p className="text-xs text-muted-foreground">Enrolled for this semester</p>
            <Button variant="outline" size="sm" className="mt-4">
              View Courses
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Grades</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">GPA: 3.8/4.0</div>
            <p className="text-xs text-muted-foreground">Overall academic performance</p>
            <Button variant="outline" size="sm" className="mt-4">
              View Gradebook
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Registration</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Open</div>
            <p className="text-xs text-muted-foreground">Register for next semester</p>
            <Button variant="outline" size="sm" className="mt-4">
              Register Now
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exam Schedule</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Finals Week</div>
            <p className="text-xs text-muted-foreground">Upcoming exams</p>
            <Button variant="outline" size="sm" className="mt-4">
              View Schedule
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
