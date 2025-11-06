'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, UserCheck } from 'lucide-react';
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

export default function LoginPage() {
  const [role, setRole] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    switch (role) {
      case 'student':
        router.push('/dashboard/student');
        break;
      case 'faculty':
        router.push('/dashboard/faculty');
        break;
      case 'admin':
        router.push('/dashboard');
        break;
      default:
        // Optional: handle case where no role is selected
        break;
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950 p-4">
      <Card className="w-full max-w-md bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl shadow-2xl rounded-2xl border-white/20 dark:border-slate-800/50">
        <CardHeader className="items-center text-center p-6">
          <Logo />
          <CardTitle className="font-headline text-3xl mt-4">Welcome Back</CardTitle>
          <CardDescription>One Connected Campus — One Smart Platform</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 p-6">
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
              <Select onValueChange={setRole} value={role}>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 p-6">
          <Button className="w-full" onClick={handleLogin} disabled={!role}>
            Login
          </Button>
          <div className="text-sm text-center">
            <Link href="#" className="underline text-muted-foreground hover:text-primary">
              Forgot your password?
            </Link>
          </div>
          <div className="text-sm text-center text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline font-medium text-primary hover:text-primary/80">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}