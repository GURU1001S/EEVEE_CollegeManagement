'use client';

import {
  Briefcase,
  Building,
  MapPin,
  Calendar as CalendarIcon,
  Filter,
  List,
  LayoutGrid,
  Search,
  ChevronDown,
  Bookmark,
  ExternalLink,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  BookOpen,
  FileText,
  Download
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const jobPostings = [
  {
    id: 'GP1',
    company: 'Google',
    role: 'Software Engineer Intern',
    type: 'Internship',
    location: 'Remote',
    stipend: '₹80,000/month',
    posted: '2 days ago',
    deadline: '2024-08-15',
    eligibility: 'CS/IT, 7+ CGPA',
    status: 'Not Applied',
    cgpa: 7.0,
    backlogs: 0,
    branches: ['CS', 'IT']
  },
  {
    id: 'MS2',
    company: 'Microsoft',
    role: 'Product Manager',
    type: 'Full-time',
    location: 'Hyderabad',
    salary: '₹18-22 LPA',
    posted: '5 days ago',
    deadline: '2024-08-10',
    eligibility: 'All Branches, 8+ CGPA',
    status: 'Applied',
    cgpa: 8.0,
    backlogs: 0,
    branches: ['CS', 'IT', 'ECE', 'MECH']
  },
  {
    id: 'AM3',
    company: 'Amazon',
    role: 'Data Analyst',
    type: 'Full-time',
    location: 'Bengaluru',
    salary: '₹12-15 LPA',
    posted: '1 week ago',
    deadline: '2024-07-30',
    eligibility: 'CS/IT/ECE, 6.5+ CGPA',
    status: 'Not Applied',
    cgpa: 6.5,
    backlogs: 0,
    branches: ['CS', 'IT', 'ECE']
  },
   {
    id: 'NF4',
    company: 'Netflix',
    role: 'Frontend Developer',
    type: 'Internship',
    location: 'Remote',
    stipend: '₹90,000/month',
    posted: '1 day ago',
    deadline: '2024-08-20',
    eligibility: 'All Branches, 7.5+ CGPA',
    status: 'Not Applied',
    cgpa: 7.5,
    backlogs: 0,
    branches: ['CS', 'IT', 'ECE', 'MECH']
  },
  {
    id: 'TS5',
    company: 'Tesla',
    role: 'Mechanical Engineer',
    type: 'Full-time',
    location: 'Pune',
    salary: '₹14-18 LPA',
    posted: '10 days ago',
    deadline: '2024-08-01',
    eligibility: 'Mech Engg, 8+ CGPA',
    status: 'Ineligible',
    cgpa: 8.0,
    backlogs: 0,
    branches: ['MECH']
  },
];

const JobCard = ({ job } : { job: typeof jobPostings[0] }) => {
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

const JobBoard = () => {
    const [viewMode, setViewMode] = useState('grid');
    return(
        <div className="flex flex-col gap-6">
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
    )
};

const MockInterviewScheduler = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Book a Mock Interview</CardTitle>
                        <CardDescription>Select an available slot with a mentor.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                             <Calendar
                                mode="single"
                                selected={new Date()}
                                className="rounded-md border"
                            />
                        </div>
                        <div className="flex-1 space-y-4">
                            <Select>
                                <SelectTrigger><SelectValue placeholder="Select Interview Type" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="technical">Technical</SelectItem>
                                    <SelectItem value="hr">HR</SelectItem>
                                    <SelectItem value="gd">Group Discussion</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger><SelectValue placeholder="Select Mentor" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="mentor1">Dr. Alan Grant (System Design)</SelectItem>
                                    <SelectItem value="mentor2">Dr. Evelyn Reed (Algorithms)</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="space-y-2">
                                <p className="text-sm font-medium">Available Slots (for today)</p>
                                <div className="grid grid-cols-3 gap-2">
                                    <Button variant="outline">10:00 AM</Button>
                                    <Button variant="outline" disabled>11:00 AM</Button>
                                    <Button variant="outline">02:00 PM</Button>
                                    <Button variant="outline">04:00 PM</Button>
                                </div>
                            </div>
                            <Button className="w-full">Confirm Booking</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Interviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <ul className="space-y-4">
                            <li className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">Technical with Dr. Evelyn Reed</p>
                                    <p className="text-sm text-muted-foreground">Tomorrow, 4:00 PM</p>
                                </div>
                                <Button variant="ghost" size="sm">Cancel</Button>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Past Interviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <ul className="space-y-4">
                            <li className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">HR with Prof. Smith</p>
                                    <p className="text-sm text-muted-foreground">Last week</p>
                                </div>
                                <Button variant="outline" size="sm">View Feedback</Button>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const CareerResourceCenter = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Career Resource Center</CardTitle>
                <CardDescription>All the materials you need to ace your interviews.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Technical Topics</AccordionTrigger>
                        <AccordionContent>
                           <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Data Structures & Algorithms Notes</li>
                                <li>System Design Case Studies</li>
                                <li>DBMS & SQL Cheat Sheet</li>
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Aptitude Practice</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                               <li>Quantitative Aptitude Test 1</li>
                               <li>Logical Reasoning Puzzles</li>
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Resume & HR Prep</AccordionTrigger>
                        <AccordionContent>
                           <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                               <li>Sample Resume Templates (SDE, PM, Analyst)</li>
                               <li>Common HR Interview Questions & Answers</li>
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}

const EligibilityChecker = () => {
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
    const [eligibilityResult, setEligibilityResult] = useState<{eligible: boolean; reasons: string[]} | null>(null);

    const myProfile = { cgpa: 7.8, backlogs: 0, branch: 'CS' };

    const checkEligibility = () => {
        if (!selectedJobId) {
            setEligibilityResult(null);
            return;
        }
        const job = jobPostings.find(j => j.id === selectedJobId);
        if (!job) {
            setEligibilityResult(null);
            return;
        }

        const reasons: string[] = [];
        let eligible = true;

        if (myProfile.cgpa < job.cgpa) {
            eligible = false;
            reasons.push(`Requires CGPA >= ${job.cgpa} (Your CGPA: ${myProfile.cgpa})`);
        }
        if (myProfile.backlogs > job.backlogs) {
            eligible = false;
            reasons.push(`Requires ${job.backlogs} backlogs (You have: ${myProfile.backlogs})`);
        }
        if (!job.branches.includes(myProfile.branch)) {
             eligible = false;
            reasons.push(`Requires one of: ${job.branches.join(', ')} (Your branch: ${myProfile.branch})`);
        }
        setEligibilityResult({ eligible, reasons });
    }

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Eligibility Checker</CardTitle>
                    <CardDescription>Check if you're eligible for a job posting.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <Select onValueChange={setSelectedJobId}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a Job Posting" />
                        </SelectTrigger>
                        <SelectContent>
                            {jobPostings.map(job => (
                                <SelectItem key={job.id} value={job.id}>{job.company} - {job.role}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Your Profile</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                            <p><strong>CGPA:</strong> {myProfile.cgpa}</p>
                            <p><strong>Backlogs:</strong> {myProfile.backlogs}</p>
                            <p><strong>Branch:</strong> {myProfile.branch}</p>
                        </CardContent>
                    </Card>
                </CardContent>
                <CardFooter>
                    <Button onClick={checkEligibility} className="w-full">Check Eligibility</Button>
                </CardFooter>
            </Card>
            {eligibilityResult && (
                 <Card className={eligibilityResult.eligible ? 'border-emerald-500' : 'border-destructive'}>
                    <CardHeader>
                       {eligibilityResult.eligible ? (
                         <CardTitle className="flex items-center gap-2 text-emerald-500"><CheckCircle /> You are Eligible!</CardTitle>
                       ) : (
                         <CardTitle className="flex items-center gap-2 text-destructive"><XCircle /> You are Not Eligible</CardTitle>
                       )}
                    </CardHeader>
                    <CardContent>
                         {!eligibilityResult.eligible && (
                             <div>
                                 <p className="font-semibold mb-2">Reasons:</p>
                                 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    {eligibilityResult.reasons.map((reason, i) => <li key={i}>{reason}</li>)}
                                 </ul>
                             </div>
                         )}
                         {eligibilityResult.eligible && <p>You meet all the requirements for this position. Good luck!</p>}
                    </CardContent>
                 </Card>
            )}
        </div>
    )
}


export default function PlacementsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">Placements & Careers</h1>
                <p className="text-muted-foreground">
                Your gateway to a successful career.
                </p>
            </div>

            <Tabs defaultValue="board">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="board"><Briefcase className="mr-2 h-4 w-4" /> Job Board</TabsTrigger>
                    <TabsTrigger value="interviews"><Users className="mr-2 h-4 w-4" /> Mock Interviews</TabsTrigger>
                    <TabsTrigger value="resources"><BookOpen className="mr-2 h-4 w-4" /> Resources</TabsTrigger>
                    <TabsTrigger value="eligibility"><CheckCircle className="mr-2 h-4 w-4" /> Eligibility</TabsTrigger>
                </TabsList>
                <TabsContent value="board" className="mt-6">
                    <JobBoard />
                </TabsContent>
                <TabsContent value="interviews" className="mt-6">
                    <MockInterviewScheduler />
                </TabsContent>
                <TabsContent value="resources" className="mt-6">
                    <CareerResourceCenter />
                </TabsContent>
                <TabsContent value="eligibility" className="mt-6">
                    <EligibilityChecker />
                </TabsContent>
            </Tabs>

        </div>
    );
}
