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
import { Logo } from '@/components/logo';
import { useToast } from '@/hooks/use-toast';

const credentials = {
  student: { email: 'student@example.com', password: 'password' },
  faculty: { email: 'faculty@example.com', password: 'password' },
  admin: { email: 'admin@example.com', password: 'password' },
};

type Role = 'student' | 'faculty' | 'admin';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = () => {
    setError('');
    let loggedIn = false;
    let role: Role | '' = '';

    if (
      email === credentials.student.email &&
      password === credentials.student.password
    ) {
      role = 'student';
      loggedIn = true;
    } else if (
      email === credentials.faculty.email &&
      password === credentials.faculty.password
    ) {
      role = 'faculty';
      loggedIn = true;
    } else if (
      email === credentials.admin.email &&
      password === credentials.admin.password
    ) {
      role = 'admin';
      loggedIn = true;
    }

    if (loggedIn) {
      localStorage.setItem('userRole', role);
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
          break;
      }
    } else {
      setError('Invalid email or password.');
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Invalid email or password.',
      });
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
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </CardContent>
        <CardFooter className="flex flex-col gap-4 p-6">
          <Button className="w-full" onClick={handleLogin}>
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
