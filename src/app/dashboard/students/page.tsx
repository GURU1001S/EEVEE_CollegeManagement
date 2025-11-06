'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, PlusCircle, File } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const students = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1080',
    id: 'STU-001',
    course: 'Computer Science',
    year: 3,
    status: 'Active',
  },
  {
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1080',
    id: 'STU-002',
    course: 'Mechanical Engineering',
    year: 4,
    status: 'Active',
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1080',
    id: 'STU-003',
    course: 'Business Administration',
    year: 2,
    status: 'On-Hold',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1080',
    id: 'STU-004',
    course: 'Fine Arts',
    year: 1,
    status: 'Active',
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1080',
    id: 'STU-005',
    course: 'Physics',
    year: 3,
    status: 'Graduated',
  },
];

export default function StudentsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Manage Students</h1>
        <p className="text-muted-foreground">
          View, edit, and manage all student records.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Student Roster</CardTitle>
              <CardDescription>
                A list of all students in the university.
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
                <Input placeholder="Search students..." className="w-64" />
                <Button variant="outline">
                    <File className="mr-2 h-4 w-4" /> Export
                </Button>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Student
                </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <Image src={student.avatar} alt={student.name} width={40} height={40} className="rounded-full" />
                        <AvatarFallback>
                          {student.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {student.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        student.status === 'Active'
                          ? 'default'
                          : student.status === 'On-Hold'
                          ? 'secondary'
                          : 'outline'
                      }
                      className={
                        student.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-800'
                          : student.status === 'On-Hold'
                          ? 'bg-amber-100 text-amber-800'
                          : ''
                      }
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{student.year}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

    