import { Atom, Lock, Mail, User, UserCheck } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Logo } from '@/components/logo';

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950 p-4">
      <Card className="w-full max-w-md bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl shadow-2xl rounded-2xl border-white/20 dark:border-slate-800/50">
        <CardHeader className="items-center text-center p-6">
          <Logo />
          <CardTitle className="font-headline text-3xl mt-4">Create an Account</CardTitle>
          <CardDescription>Join our connected campus platform.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 p-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="name" placeholder="John Doe" className="pl-10" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="email" type="email" placeholder="m@example.com" className="pl-10" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <div className="relative">
              <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Select>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 p-6">
          <Button className="w-full" asChild>
            <Link href="/dashboard">Create Account</Link>
          </Button>
          <div className="text-sm text-center text-muted-foreground">
            Already have an account?{' '}
            <Link href="/" className="underline font-medium text-primary hover:text-primary/80">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
