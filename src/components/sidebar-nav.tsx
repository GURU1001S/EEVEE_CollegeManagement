'use client';

import {
  Banknote,
  BedDouble,
  BookOpen,
  Briefcase,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  Library,
  Settings,
  Utensils,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useEffect, useState } from 'react';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, adminOnly: true },
  { href: '/dashboard/student', label: 'Dashboard', icon: LayoutDashboard, studentOnly: true },
  { href: '/dashboard/faculty', label: 'Dashboard', icon: LayoutDashboard, facultyOnly: true },
  { href: '/dashboard/academics', label: 'Academics', icon: BookOpen },
  { href: '/dashboard/students', label: 'Students', icon: Users, adminOnly: true },
  { href: '/dashboard/placements', label: 'Placements', icon: Briefcase },
  { href: '/dashboard/alumni', label: 'Alumni', icon: GraduationCap },
  { href: '/dashboard/canteen', label: 'Canteen', icon: Utensils },
  { href: '/dashboard/hostel', label: 'Hostel', icon: BedDouble },
  { href: '/dashboard/health', label: 'Health', icon: HeartPulse },
  { href: '/dashboard/library', label: 'Library', icon: Library },
  { href: '/dashboard/finance', label: 'Finance', icon: Banknote },
];

const settingsMenuItem = { href: '/dashboard/settings', label: 'Settings', icon: Settings };

export function SidebarNav() {
  const pathname = usePathname();
  const [role, setRole] = useState<'student' | 'faculty' | 'admin' | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as 'student' | 'faculty' | 'admin' | null;
    setRole(storedRole);
  }, [pathname]);


  const filteredMenuItems = menuItems.filter(item => {
    if (role === 'student') return !item.adminOnly && !item.facultyOnly;
    if (role === 'faculty') return !item.adminOnly && !item.studentOnly;
    if (role === 'admin') return !item.studentOnly && !item.facultyOnly;
    return !item.studentOnly && !item.facultyOnly && !item.adminOnly;
  });

  return (
    <TooltipProvider>
      <nav className="flex items-center gap-2">
        {filteredMenuItems.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground ${
                  pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top">{item.label}</TooltipContent>
          </Tooltip>
        ))}
         <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    href={settingsMenuItem.href}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground ${
                    pathname.startsWith(settingsMenuItem.href) ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                    }`}
                >
                    <settingsMenuItem.icon className="h-5 w-5" />
                    <span className="sr-only">{settingsMenuItem.label}</span>
                </Link>
            </TooltipTrigger>
            <TooltipContent side="top">{settingsMenuItem.label}</TooltipContent>
        </Tooltip>
      </nav>
    </TooltipProvider>
  );
}
