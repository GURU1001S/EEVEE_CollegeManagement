'use client';

import {
  Calendar,
  FileText,
  HeartPulse,
  Stethoscope,
  Shield,
  Smile,
  Medal,
  FilePlus,
  Phone,
  Siren,
  BookOpen,
  Video,
  PlusCircle,
  Brain,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const AppointmentBooking = () => {
    const availableSlots = ["10:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];
    return (
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Book an Appointment</CardTitle>
                        <CardDescription>Select a service, date, and time slot.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <Select>
                                <SelectTrigger><SelectValue placeholder="Select Service" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="gp">General Physician</SelectItem>
                                    <SelectItem value="dentist">Dentist</SelectItem>
                                    <SelectItem value="counselor">Counselor</SelectItem>
                                </SelectContent>
                            </Select>
                            <CalendarComponent
                                mode="single"
                                selected={new Date()}
                                className="rounded-md border"
                            />
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="font-medium text-sm mb-2">Available Slots</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {availableSlots.map(slot => (
                                        <Button key={slot} variant="outline">{slot}</Button>
                                    ))}
                                    <Button variant="outline" disabled>12:00 PM</Button>
                                </div>
                            </div>
                            <Textarea placeholder="Reason for visit (optional)..." />
                            <Button className="w-full">Confirm Booking</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader><CardTitle>Upcoming Appointments</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-center">No upcoming appointments.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Past Appointments</CardTitle></CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center text-sm">
                                <div>
                                    <p className="font-medium">Dr. Smith (GP)</p>
                                    <p className="text-muted-foreground">2024-07-15</p>
                                </div>
                                <Button variant="ghost" size="sm">View Details</Button>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const MedicalRecords = () => (
     <Accordion type="multiple" className="w-full space-y-4">
        <AccordionItem value="vaccination" className="border rounded-lg bg-card">
            <AccordionTrigger className="p-4 font-semibold">Vaccination Records</AccordionTrigger>
            <AccordionContent className="p-4 pt-0">
                <p className="text-muted-foreground">No records found. Upload your vaccination certificate.</p>
                 <Button variant="outline" size="sm" className="mt-2"><FilePlus className="mr-2 h-4 w-4" /> Upload</Button>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="prescriptions" className="border rounded-lg bg-card">
            <AccordionTrigger className="p-4 font-semibold">Prescription Logs</AccordionTrigger>
            <AccordionContent className="p-4 pt-0">
                <p className="text-muted-foreground">No prescriptions logged.</p>
            </AccordionContent>
        </AccordionItem>
         <AccordionItem value="history" className="border rounded-lg bg-card">
            <AccordionTrigger className="p-4 font-semibold">Medical History</AccordionTrigger>
            <AccordionContent className="p-4 pt-0 space-y-2">
               <p><strong>Allergies:</strong> None reported</p>
               <p><strong>Chronic Conditions:</strong> None reported</p>
               <p><strong>Blood Group:</strong> O+</p>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
);

const EmergencySection = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="flex flex-col items-center justify-center text-center p-6 bg-destructive/10 border-destructive">
             <Siren className="h-12 w-12 text-destructive mb-4"/>
             <CardTitle className="text-destructive">Campus Security</CardTitle>
             <CardDescription>+91 12345 67890</CardDescription>
             <Button variant="destructive" className="mt-4 w-full">Call Now</Button>
        </Card>
         <Card className="flex flex-col items-center justify-center text-center p-6">
             <Phone className="h-12 w-12 text-primary mb-4"/>
             <CardTitle>Medical Center</CardTitle>
             <CardDescription>+91 98765 43210</CardDescription>
             <Button className="mt-4 w-full">Call Now</Button>
        </Card>
         <Card className="flex flex-col items-center justify-center text-center p-6">
             <Shield className="h-12 w-12 text-accent mb-4"/>
             <CardTitle>Ambulance</CardTitle>
             <CardDescription>102 / 108</CardDescription>
             <Button variant="secondary" className="mt-4 w-full">Call Now</Button>
        </Card>
        <Card className="flex flex-col items-center justify-center text-center p-6 bg-red-500 text-white">
             <HeartPulse className="h-12 w-12 mb-4"/>
             <CardTitle>Send SOS</CardTitle>
             <CardDescription>Alerts Security & Contacts</CardDescription>
             <Button variant="destructive" className="mt-4 w-full bg-white text-destructive hover:bg-white/90">SEND ALERT</Button>
        </Card>
    </div>
);

const MentalHealthHub = () => (
    <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold">Self-Help Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex-row items-center gap-4"><BookOpen className="h-6 w-6 text-primary" /><CardTitle className="text-lg">Articles</CardTitle></CardHeader>
                    <CardContent><p className="text-sm text-muted-foreground">Tips for stress management, anxiety, and more.</p></CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex-row items-center gap-4"><Video className="h-6 w-6 text-primary" /><CardTitle className="text-lg">Videos</CardTitle></CardHeader>
                    <CardContent><p className="text-sm text-muted-foreground">Guided meditations and wellness talks.</p></CardContent>
                </Card>
            </div>
             <h2 className="text-xl font-semibold">Workshops & Events</h2>
              <Card>
                <CardContent className="p-4 flex justify-between items-center">
                    <div>
                        <p className="font-medium">Mindfulness Workshop</p>
                        <p className="text-sm text-muted-foreground">Next week</p>
                    </div>
                    <Button>Register</Button>
                </CardContent>
            </Card>
        </div>
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Confidential Counseling</CardTitle>
                    <CardDescription>Your mental well-being is a priority. Book a session with a professional.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button className="w-full"><PlusCircle className="mr-2 h-4 w-4" /> Book a Session</Button>
                </CardContent>
            </Card>
        </div>
    </div>
);

const MedicalLeave = () => (
    <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>Apply for Medical Leave</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input type="date" placeholder="From Date" />
                    <Input type="date" placeholder="To Date" />
                    <Textarea placeholder="Reason for leave..." />
                    <Input type="file" />
                    <Button className="w-full">Submit</Button>
                </CardContent>
            </Card>
        </div>
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>My Leave History</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-center">No leave history found.</p>
                </CardContent>
            </Card>
        </div>
    </div>
);

const InsuranceInfo = () => (
    <Card>
        <CardHeader>
            <CardTitle>My Insurance Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p><strong>Provider:</strong> United Health</p>
            <p><strong>Policy Number:</strong> UH12345678</p>
            <p><strong>Coverage Amount:</strong> ₹5,00,000</p>
            <Button variant="outline">Download Policy</Button>
        </CardContent>
        <CardFooter>
            <Button>File a Claim</Button>
        </CardFooter>
    </Card>
)

export default function HealthPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Health & Wellness</h1>
        <p className="text-muted-foreground">
          Your health and wellness resources, all in one place.
        </p>
      </div>

       <Tabs defaultValue="appointments">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <TabsTrigger value="appointments"><Calendar className="mr-2 h-4 w-4" /> Appointments</TabsTrigger>
            <TabsTrigger value="records"><FileText className="mr-2 h-4 w-4" /> Records</TabsTrigger>
            <TabsTrigger value="emergency"><Siren className="mr-2 h-4 w-4" /> Emergency</TabsTrigger>
            <TabsTrigger value="mental-health"><Brain className="mr-2 h-4 w-4" /> Mental Health</TabsTrigger>
            <TabsTrigger value="leave"><FilePlus className="mr-2 h-4 w-4" /> Medical Leave</TabsTrigger>
            <TabsTrigger value="insurance"><Shield className="mr-2 h-4 w-4" /> Insurance</TabsTrigger>
        </TabsList>
        <TabsContent value="appointments" className="mt-6">
            <AppointmentBooking />
        </TabsContent>
         <TabsContent value="records" className="mt-6">
            <MedicalRecords />
        </TabsContent>
        <TabsContent value="emergency" className="mt-6">
            <EmergencySection />
        </TabsContent>
         <TabsContent value="mental-health" className="mt-6">
            <MentalHealthHub />
        </TabsContent>
        <TabsContent value="leave" className="mt-6">
            <MedicalLeave />
        </TabsContent>
        <TabsContent value="insurance" className="mt-6">
            <InsuranceInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
}
