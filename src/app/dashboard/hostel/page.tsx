'use client';

import {
  BedDouble,
  Ticket,
  Wrench,
  Shield,
  Users,
  MessageSquare,
  FileText,
  Calendar,
  Clock,
  PlusCircle,
  Download,
  Utensils,
  BookOpen,
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const roommates = [
    { name: 'Ajay', contact: '+91 9876543210', avatarSeed: 'roomie1' },
    { name: 'Rohith', contact: '+91 9123456789', avatarSeed: 'roomie2' },
    { name: 'Gold', contact: '+91 9988776655', avatarSeed: 'roomie3' },
]

const MyRoomSection = () => (
  <div className="grid md:grid-cols-3 gap-8">
    <div className="md:col-span-1 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>My Room Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Block</p>
            <p className="font-semibold">C</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Room Number</p>
            <p className="font-semibold text-lg">301</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Bed Number</p>
            <p className="font-semibold">B</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Contact Info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
           <p><span className="font-semibold">Warden:</span> Mr. John Smith</p>
           <p><span className="font-semibold">Caretaker:</span> David Lee</p>
        </CardContent>
      </Card>
    </div>
    <div className="md:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Roommates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {roommates.map(roommate => (
            <Card key={roommate.name} className="flex items-center p-4 gap-4">
                <Avatar className="h-12 w-12">
                <AvatarImage src={`https://picsum.photos/seed/${roommate.avatarSeed}/100/100`} data-ai-hint="person portrait"/>
                <AvatarFallback>{roommate.name.slice(0,2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                <p className="font-bold">{roommate.name}</p>
                <p className="text-sm text-muted-foreground">Contact: {roommate.contact}</p>
                </div>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
);

const MaintenanceSection = () => {
    const { toast } = useToast();
    const complaints = [
        { id: 'TKT001', type: 'Electrical', issue: 'Fan not working', status: 'In Progress', date: '2024-07-20'},
        { id: 'TKT002', type: 'Plumbing', issue: 'Leaky faucet in washroom', status: 'Resolved', date: '2024-07-18'},
    ]

    const handleSubmit = () => {
        toast({
            title: 'Ticket Submitted!',
            description: 'Your maintenance request has been sent.',
        })
    }

    return (
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>New Complaint</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Select Issue Type" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="electrical">Electrical</SelectItem>
                                <SelectItem value="plumbing">Plumbing</SelectItem>
                                <SelectItem value="furniture">Furniture</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <Textarea placeholder="Describe the issue in detail..." />
                        <Input type="file" />
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={handleSubmit}>Submit Ticket</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="md:col-span-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>My Tickets</CardTitle>
                        <CardDescription>Track your maintenance requests.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Ticket ID</TableHead>
                                    <TableHead>Issue</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {complaints.map(c => (
                                    <TableRow key={c.id}>
                                        <TableCell>{c.id}</TableCell>
                                        <TableCell>{c.issue}</TableCell>
                                        <TableCell>
                                            <Badge variant={c.status === 'Resolved' ? 'default' : 'secondary'} className={c.status === 'Resolved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}>{c.status}</Badge>
                                        </TableCell>
                                        <TableCell>{c.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const GatePassSection = () => {
    const passes = [
        { type: 'Leave', from: '2024-07-25', to: '2024-07-28', status: 'Approved' },
        { type: 'Gate Pass', from: '2024-07-22', to: '2024-07-22', status: 'Used' },
    ];
    return (
        <div className="grid md:grid-cols-3 gap-8">
             <div className="md:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Apply for Pass</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Select Pass Type" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="leave">Leave Pass</SelectItem>
                                <SelectItem value="gate">Gate Pass (Outing)</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input type="date" placeholder="From Date" />
                        <Input type="date" placeholder="To Date" />
                        <Textarea placeholder="Reason..." />
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Submit Request</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="md:col-span-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>My Passes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                             <TableHeader>
                                <TableRow>
                                    <TableHead>Type</TableHead>
                                    <TableHead>From</TableHead>
                                    <TableHead>To</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {passes.map((p, i) => (
                                     <TableRow key={i}>
                                        <TableCell>{p.type}</TableCell>
                                        <TableCell>{p.from}</TableCell>
                                        <TableCell>{p.to}</TableCell>
                                        <TableCell>
                                            <Badge variant={p.status === 'Approved' ? 'default' : 'outline'} className={p.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : ''}>{p.status}</Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const VisitorManagementSection = () => (
     <div className="grid md:grid-cols-3 gap-8">
             <div className="md:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Register a Visitor</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input placeholder="Visitor Name" />
                        <Input placeholder="Visitor Phone" />
                        <Input type="date" placeholder="Date of Visit" />
                        <Input type="time" placeholder="Time of Visit" />
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Register Visitor</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="md:col-span-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>My Visitor History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-muted-foreground">No visitor history found.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
);

const MessSection = () => {
    const menu = {
        Monday: { Breakfast: 'Bread, Salad', Lunch: 'Meals', Dinner: 'Dosa & Veg Gravy'},
        Tuesday: { Breakfast: 'Upma', Lunch: 'Meals', Dinner: 'Idly Sambar'},
        Wednesday: { Breakfast: 'Pongal & Vadai', Lunch: 'Veg Briyani & Ice Cream', Dinner: 'Dosa & Chicken Gravy'},
    }
    return (
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>Weekly Mess Menu</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Day</TableHead>
                                    <TableHead>Breakfast</TableHead>
                                    <TableHead>Lunch</TableHead>
                                    <TableHead>Dinner</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Object.entries(menu).map(([day, meals]) => (
                                    <TableRow key={day}>
                                        <TableCell className="font-semibold">{day}</TableCell>
                                        <TableCell>{meals.Breakfast}</TableCell>
                                        <TableCell>{meals.Lunch}</TableCell>
                                        <TableCell>{meals.Dinner}</TableCell>
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
                        <CardTitle>Mess Bill</CardTitle>
                    </CardHeader>
                     <CardContent>
                        <p className="text-sm text-muted-foreground">Current Month Bill</p>
                        <p className="text-3xl font-bold">₹4,500</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" className="w-full">Download Bill</Button>
                    </CardFooter>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Apply for Mess Leave</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input type="date" />
                        <Input type="date" />
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Apply</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default function HostelPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Hostel Management</h1>
        <p className="text-muted-foreground">
          Your home away from home on campus.
        </p>
      </div>
      <Tabs defaultValue="room">
        <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="room"><BedDouble className="mr-2 h-4 w-4" /> My Room</TabsTrigger>
            <TabsTrigger value="maintenance"><Wrench className="mr-2 h-4 w-4" /> Maintenance</TabsTrigger>
            <TabsTrigger value="gatepass"><Ticket className="mr-2 h-4 w-4" /> Gate Pass</TabsTrigger>
            <TabsTrigger value="visitors"><Users className="mr-2 h-4 w-4" /> Visitors</TabsTrigger>
            <TabsTrigger value="mess"><Utensils className="mr-2 h-4 w-4" /> Mess</TabsTrigger>
        </TabsList>
        <TabsContent value="room" className="mt-6">
            <MyRoomSection />
        </TabsContent>
        <TabsContent value="maintenance" className="mt-6">
            <MaintenanceSection />
        </TabsContent>
         <TabsContent value="gatepass" className="mt-6">
            <GatePassSection />
        </TabsContent>
        <TabsContent value="visitors" className="mt-6">
            <VisitorManagementSection />
        </TabsContent>
        <TabsContent value="mess" className="mt-6">
            <MessSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
