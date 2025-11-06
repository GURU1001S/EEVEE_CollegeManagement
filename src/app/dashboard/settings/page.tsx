'use client';

import { Bell, Lock, User, Palette, Edit, Upload, Save, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ThemeToggle } from '@/components/theme-toggle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const ProfileSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>Manage your personal, contact, and academic details.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Basic Details */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Basic Details</h3>
            <Button variant="outline" size="sm"><Edit className="mr-2 h-4 w-4" />Edit</Button>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24">
                
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="outline" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                <Upload className="h-4 w-4"/>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
              <div className="space-y-1">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" defaultValue="Student Name" readOnly />
              </div>
              <div className="space-y-1">
                <Label htmlFor="studentId">Student ID</Label>
                <Input id="studentId" defaultValue="STU-001" readOnly />
              </div>
              <div className="space-y-1">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" defaultValue="2002-05-10" type="date" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="gender">Gender</Label>
                <Input id="gender" defaultValue="Female" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <Input id="bloodGroup" defaultValue="O+" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="nationality">Nationality</Label>
                <Input id="nationality" defaultValue="Indian" />
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Contact Information</h3>
            <Button variant="outline" size="sm"><Edit className="mr-2 h-4 w-4" />Edit</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-1">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input id="mobile" defaultValue="+91 9876543210" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="altMobile">Alternate Mobile</Label>
                <Input id="altMobile" defaultValue="+91 9123456789" />
              </div>
               <div className="space-y-1">
                <Label htmlFor="email">Personal Email</Label>
                <Input id="email" defaultValue="student.personal@email.com" />
              </div>
               <div className="space-y-1">
                <Label htmlFor="instEmail">Institutional Email</Label>
                <Input id="instEmail" defaultValue="student@example.com" readOnly />
              </div>
               <div className="space-y-1 md:col-span-2">
                <Label htmlFor="currentAddress">Current Address</Label>
                <Input id="currentAddress" defaultValue="Room 301, C-Block, University Hostel, Bengaluru" />
              </div>
               <div className="space-y-1 md:col-span-2">
                <Label htmlFor="permAddress">Permanent Address</Label>
                <Input id="permAddress" defaultValue="123, Main Street, Mumbai, Maharashtra" />
              </div>
          </div>
        </div>

        <Separator />
        
        {/* Academic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Academic Information (Read-only)</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <Label>Department</Label>
                <p className="text-sm p-2 border rounded-md bg-muted">Computer Science</p>
              </div>
              <div className="space-y-1">
                <Label>Year</Label>
                <p className="text-sm p-2 border rounded-md bg-muted">3</p>
              </div>
               <div className="space-y-1">
                <Label>CGPA</Label>
                <p className="text-sm p-2 border rounded-md bg-muted">8.5</p>
              </div>
              <div className="space-y-1">
                <Label>Graduation Date</Label>
                <p className="text-sm p-2 border rounded-md bg-muted">May 2026</p>
              </div>
           </div>
        </div>

        <Separator />
        
        {/* Emergency Contact */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Emergency Contacts</h3>
            <Button variant="outline" size="sm"><Edit className="mr-2 h-4 w-4" />Edit</Button>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 p-4 border rounded-md">
                    <h4 className="font-semibold">Contact Person 1</h4>
                     <div className="space-y-1">
                        <Label htmlFor="ec1_name">Name</Label>
                        <Input id="ec1_name" defaultValue="John Doe" />
                    </div>
                     <div className="space-y-1">
                        <Label htmlFor="ec1_relation">Relationship</Label>
                        <Input id="ec1_relation" defaultValue="Father" />
                    </div>
                     <div className="space-y-1">
                        <Label htmlFor="ec1_phone">Phone Number</Label>
                        <Input id="ec1_phone" defaultValue="+91 9988776655" />
                    </div>
                </div>
                 <div className="space-y-4 p-4 border rounded-md">
                    <h4 className="font-semibold">Contact Person 2</h4>
                     <div className="space-y-1">
                        <Label htmlFor="ec2_name">Name</Label>
                        <Input id="ec2_name" defaultValue="Jane Doe" />
                    </div>
                     <div className="space-y-1">
                        <Label htmlFor="ec2_relation">Relationship</Label>
                        <Input id="ec2_relation" defaultValue="Mother" />
                    </div>
                     <div className="space-y-1">
                        <Label htmlFor="ec2_phone">Phone Number</Label>
                        <Input id="ec2_phone" defaultValue="+91 9988776644" />
                    </div>
                </div>
           </div>
        </div>

      </CardContent>
      <CardFooter>
          <Button size="lg" className="ml-auto"><Save className="mr-2 h-4 w-4"/>Save All Changes</Button>
      </CardFooter>
    </Card>
  );
};


const SecuritySection = () => {
    return (
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Manage your security settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Lock className="h-5 w-5 text-muted-foreground" />
                <Label>Change Password</Label>
              </div>
              <Button variant="outline" size="sm">
                Change
              </Button>
            </div>
          </CardContent>
        </Card>
    );
};

const AppearanceSection = () => {
    return (
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize the look and feel.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Palette className="h-5 w-5 text-muted-foreground" />
                <Label>Toggle Theme</Label>
              </div>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>
    );
};

const NotificationsSection = () => {
    return (
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage how you receive notifications.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <Label htmlFor="email-notifications">Email Notifications</Label>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <Label htmlFor="push-notifications">Push Notifications</Label>
              </div>
              <Switch id="push-notifications" />
            </div>
          </CardContent>
        </Card>
    );
};


export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account, preferences, and privacy.
        </p>
      </div>

       <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile"><User className="mr-2 h-4 w-4" /> Profile</TabsTrigger>
            <TabsTrigger value="security"><Lock className="mr-2 h-4 w-4" /> Security</TabsTrigger>
            <TabsTrigger value="appearance"><Palette className="mr-2 h-4 w-4" /> Appearance</TabsTrigger>
            <TabsTrigger value="notifications"><Bell className="mr-2 h-4 w-4" /> Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
            <ProfileSection />
        </TabsContent>
         <TabsContent value="security" className="mt-6">
            <SecuritySection />
        </TabsContent>
        <TabsContent value="appearance" className="mt-6">
            <AppearanceSection />
        </TabsContent>
         <TabsContent value="notifications" className="mt-6">
            <NotificationsSection />
        </TabsContent>
      </Tabs>

    </div>
  );
}
