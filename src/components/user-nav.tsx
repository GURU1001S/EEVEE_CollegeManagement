'use client';

import { useEffect, useState } from 'react';
import { CreditCard, LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const roleDetails = {
  admin: { name: 'Admin', email: 'admin@example.com', fallback: 'AD' },
  faculty: { name: 'Faculty', email: 'faculty@example.com', fallback: 'FC' },
  student: { name: 'Student', email: 'student@example.com', fallback: 'ST' },
};

export function UserNav() {
  const [role, setRole] = useState<keyof typeof roleDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as keyof typeof roleDetails | null;
    if (storedRole && roleDetails[storedRole]) {
      setRole(storedRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    router.push('/');
  };

  const user = role ? roleDetails[role] : null;
  const initial = user ? user.name.charAt(0).toUpperCase() : '';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarFallback>{user ? user.fallback : ''}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {user && (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
