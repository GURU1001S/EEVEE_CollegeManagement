'use client';

import {
  Briefcase,
  Calendar,
  Search,
  Users,
  GraduationCap,
  MapPin,
  Building,
  MessageSquare,
  Bookmark,
  CheckCircle,
  Clock,
  ExternalLink,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const alumni = [
  {
    name: 'Priya Sharma',
    batch: 2018,
    company: 'Google',
    role: 'Software Engineer',
    location: 'Bengaluru',
    avatar: 'https://i.pravatar.cc/150?u=a01',
    isMentor: true,
  },
  {
    name: 'Rohan Verma',
    batch: 2016,
    company: 'Microsoft',
    role: 'Product Manager',
    location: 'Hyderabad',
    avatar: 'https://i.pravatar.cc/150?u=a02',
    isMentor: false,
  },
  {
    name: 'Anjali Singh',
    batch: 2020,
    company: 'Amazon',
    role: 'Data Scientist',
    location: 'Remote',
    avatar: 'https://i.pravatar.cc/150?u=a03',
    isMentor: true,
  },
  {
    name: 'Vikram Reddy',
    batch: 2015,
    company: 'Startup Inc.',
    role: 'Founder & CEO',
    location: 'Pune',
    avatar: 'https://i.pravatar.cc/150?u=a04',
    isMentor: true,
  },
];

const events = [
  {
    title: 'Annual Alumni Reunion 2024',
    date: '2024-09-15',
    mode: 'Offline',
    location: 'University Campus',
  },
  {
    title: 'Webinar: AI in Modern Tech',
    date: '2024-08-25',
    mode: 'Online',
    speaker: 'Priya Sharma (Google)',
  },
];

const jobs = [
    {
        postedBy: "Rohan Verma",
        company: "Microsoft",
        role: "Cloud Solutions Architect",
        location: "Hyderabad",
    },
    {
        postedBy: "Anjali Singh",
        company: "Amazon",
        role: "Jr. Data Scientist",
        location: "Bengaluru",
    }
];

const discussions = [
    {
        title: "Career advice for shifting from SWE to PM role?",
        author: "Aisha Khan (2019)",
        replies: 5,
        category: "Career Advice"
    },
    {
        title: "Best resources for system design interviews?",
        author: "Siddharth Jain (2021)",
        replies: 12,
        category: "Interview Prep"
    }
]

const AlumniCard = ({ person }: { person: (typeof alumni)[0] }) => (
  <Card>
    <CardContent className="p-4 flex flex-col items-center text-center">
      <Avatar className="h-20 w-20 mb-4">
        <AvatarImage src={person.avatar} />
        <AvatarFallback>{person.name.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <p className="font-bold">{person.name}</p>
      <p className="text-sm text-muted-foreground">Batch of {person.batch}</p>
      <p className="text-sm font-semibold text-primary">
        {person.role} at {person.company}
      </p>
      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
        <MapPin className="h-3 w-3" /> {person.location}
      </div>
      {person.isMentor && <Badge variant="secondary" className="mt-2">Mentor</Badge>}
      <Button size="sm" className="mt-4 w-full">Connect</Button>
    </CardContent>
  </Card>
);

const AlumniDirectory = () => (
  <div className="space-y-6">
    <Card>
      <CardContent className="p-4 flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by name, company, year..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="mech">Mechanical</SelectItem>
              <SelectItem value="ece">Electronics</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Search</Button>
        </div>
      </CardContent>
    </Card>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {alumni.map((person) => (
        <AlumniCard key={person.name} person={person} />
      ))}
    </div>
  </div>
);

const MentorshipSection = () => (
    <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Find a Mentor</h2>
            <div className="space-y-4">
                {alumni.filter(a => a.isMentor).map(mentor => (
                    <Card key={mentor.name} className="flex items-center p-4 justify-between">
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={mentor.avatar} />
                                <AvatarFallback>{mentor.name.slice(0,2)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold">{mentor.name}</p>
                                <p className="text-sm text-muted-foreground">{mentor.role} at {mentor.company}</p>
                            </div>
                        </div>
                        <Button>Request Mentorship</Button>
                    </Card>
                ))}
            </div>
        </div>
        <div>
            <h2 className="text-xl font-semibold mb-4">My Requests</h2>
             <Card>
                <CardContent className="p-4 space-y-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Vikram Reddy</p>
                            <p className="text-sm text-muted-foreground">Topic: Startup Advice</p>
                        </div>
                        <Badge variant="secondary" className="bg-amber-100 text-amber-800">Pending</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
);

const EventsSection = () => (
    <div className="space-y-6">
         {events.map(event => (
            <Card key={event.title}>
                <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Badge>{event.mode}</Badge>
                    <p className="text-sm text-muted-foreground mt-2">{event.mode === 'Offline' ? `Location: ${event.location}` : `Speaker: ${event.speaker}`}</p>
                </CardContent>
                <CardFooter>
                    <Button>Register Now</Button>
                </CardFooter>
            </Card>
         ))}
    </div>
)

const JobReferralSection = () => (
    <div className="space-y-4">
        {jobs.map(job => (
            <Card key={job.role}>
                <CardHeader>
                    <CardTitle>{job.role}</CardTitle>
                    <CardDescription>{job.company} - {job.location}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                     <p className="text-sm text-muted-foreground">Referred by: <span className="font-semibold text-primary">{job.postedBy}</span></p>
                     <Button>Apply for Referral</Button>
                </CardFooter>
            </Card>
        ))}
    </div>
);

const DiscussionForum = () => (
    <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
             {discussions.map(d => (
                <Card key={d.title}>
                    <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2">{d.category}</Badge>
                        <p className="font-bold mb-1">{d.title}</p>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span>by {d.author}</span>
                            <span>{d.replies} replies</span>
                        </div>
                    </CardContent>
                </Card>
             ))}
        </div>
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>New Post</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input placeholder="Question Title..." />
                     <Select>
                        <SelectTrigger><SelectValue placeholder="Select Category" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="advice">Career Advice</SelectItem>
                            <SelectItem value="prep">Interview Prep</SelectItem>
                        </SelectContent>
                    </Select>
                    <Textarea placeholder="What's on your mind?"/>
                    <Button className="w-full">Post to Forum</Button>
                </CardContent>
            </Card>
        </div>
    </div>
)


export default function AlumniPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Alumni Network</h1>
        <p className="text-muted-foreground">
          Connect with graduates and expand your professional network.
        </p>
      </div>

      <Tabs defaultValue="directory">
        <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="directory"><Search className="mr-2 h-4 w-4" /> Directory</TabsTrigger>
            <TabsTrigger value="mentorship"><Users className="mr-2 h-4 w-4" /> Mentorship</TabsTrigger>
            <TabsTrigger value="events"><Calendar className="mr-2 h-4 w-4" /> Events</TabsTrigger>
            <TabsTrigger value="jobs"><Briefcase className="mr-2 h-4 w-4" /> Job Board</TabsTrigger>
            <TabsTrigger value="discussions"><MessageSquare className="mr-2 h-4 w-4" /> Discussions</TabsTrigger>
        </TabsList>
        <TabsContent value="directory" className="mt-6">
            <AlumniDirectory />
        </TabsContent>
         <TabsContent value="mentorship" className="mt-6">
            <MentorshipSection />
        </TabsContent>
        <TabsContent value="events" className="mt-6">
            <EventsSection />
        </TabsContent>
         <TabsContent value="jobs" className="mt-6">
            <JobReferralSection />
        </TabsContent>
         <TabsContent value="discussions" className="mt-6">
            <DiscussionForum />
        </TabsContent>
      </Tabs>
    </div>
  );
}
