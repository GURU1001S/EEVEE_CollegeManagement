'use client';

import {
  Briefcase,
  Building,
  MapPin,
  Calendar,
  Filter,
  List,
  LayoutGrid,
  Search,
  ChevronDown,
  Bookmark,
  ExternalLink,
  DollarSign,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const jobPostings = [
  {
    company: 'Google',
    role: 'Software Engineer Intern',
    type: 'Internship',
    location: 'Remote',
    stipend: '₹80,000/month',
    posted: '2 days ago',
    deadline: '2024-08-15',
    eligibility: 'CS/IT, 7+ CGPA',
    status: 'Not Applied',
  },
  {
    company: 'Microsoft',
    role: 'Product Manager',
    type: 'Full-time',
    location: 'Hyderabad',
    salary: '₹18-22 LPA',
    posted: '5 days ago',
    deadline: '2024-08-10',
    eligibility: 'All Branches, 8+ CGPA',
    status: 'Applied',
  },
  {
    company: 'Amazon',
    role: 'Data Analyst',
    type: 'Full-time',
    location: 'Bengaluru',
    salary: '₹12-15 LPA',
    posted: '1 week ago',
    deadline: '2024-07-30',
    eligibility: 'CS/IT/ECE, 6.5+ CGPA',
    status: 'Not Applied',
  },
   {
    company: 'Netflix',
    role: 'Frontend Developer',
    type: 'Internship',
    location: 'Remote',
    stipend: '₹90,000/month',
    posted: '1 day ago',
    deadline: '2024-08-20',
    eligibility: 'All Branches, 7.5+ CGPA',
    status: 'Not Applied',
  },
  {
    company: 'Tesla',
    role: 'Mechanical Engineer',
    type: 'Full-time',
    location: 'Pune',
    salary: '₹14-18 LPA',
    posted: '10 days ago',
    deadline: '2024-08-01',
    eligibility: 'Mech Engg, 8+ CGPA',
    status: 'Ineligible',
  },
];

const JobCard = ({ job } : { job: typeof jobPostings[0] }) => {
    const getStatusBadge = (status: string) => {
        switch(status) {
            case 'Applied': return 'bg-emerald-100 text-emerald-800';
            case 'Ineligible': return 'bg-red-100 text-red-800';
            default: return 'bg-blue-100 text-blue-800';
        }
    }

    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 text-lg">
                             <AvatarFallback className="bg-muted-foreground/10 text-foreground font-bold">
                                {job.company.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-xl">{job.role}</CardTitle>
                            <CardDescription className="font-semibold text-primary">{job.company}</CardDescription>
                        </div>
                    </div>
                     <Badge 
                        variant={job.type === 'Internship' ? 'secondary' : 'default'}
                        className={job.type === 'Internship' ? 'bg-amber-100 text-amber-800' : ''}
                    >
                        {job.type}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {job.location}</div>
                    <div className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> {job.salary || job.stipend}</div>
                </div>
                 <Separator />
                <div className="text-sm">
                    <p className="font-semibold">Eligibility: <span className="font-normal text-muted-foreground">{job.eligibility}</span></p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                 <div className="text-xs text-muted-foreground">
                    Posted: {job.posted} <br/>
                    Apply by: {new Date(job.deadline).toLocaleDateString()}
                 </div>
                 <div className="flex gap-2">
                    <Button variant="ghost" size="icon"><Bookmark className="h-5 w-5" /></Button>
                    <Button>Apply Now</Button>
                 </div>
            </CardFooter>
        </Card>
    )
}


export default function PlacementsPage() {
    const [viewMode, setViewMode] = useState('grid');
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">Placements</h1>
                <p className="text-muted-foreground">
                Your gateway to a successful career.
                </p>
            </div>

            <Card>
                <CardContent className="p-4 flex flex-col md:flex-row items-center gap-4">
                    <div className="relative w-full md:flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search roles, companies..." className="pl-10"/>
                    </div>
                    <div className="flex gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem>Full-time</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Internship</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Remote</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Eligible Only</DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Sort By <ChevronDown className="ml-2 h-4 w-4" /></Button>
                            </DropdownMenuTrigger>
                             <DropdownMenuContent>
                                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem>Newest First</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Deadline Approaching</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Highest Salary</DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className="flex items-center rounded-md bg-muted p-1">
                            <Button variant={viewMode === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('grid')}>
                                <LayoutGrid className="h-5 w-5" />
                            </Button>
                             <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('list')}>
                                <List className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobPostings.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </div>
        </div>
    );
}