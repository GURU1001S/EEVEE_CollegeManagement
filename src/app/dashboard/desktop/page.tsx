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
  Atom,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="widget glass-panel absolute top-8 left-8 p-4 rounded-2xl">
      <div className="text-5xl font-bold font-headline text-white/90">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
      <div className="text-lg text-white/70">
        {time.toLocaleDateString([], {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
    </div>
  );
};

const DesktopIcon = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <Link href={href} className="desktop-icon">
    <Icon className="h-10 w-10 text-white/90" />
    <p>{label}</p>
  </Link>
);

const menuItems = [
    { href: '/dashboard/student', label: 'Dashboard', icon: LayoutDashboard, studentOnly: true },
    { href: '/dashboard/faculty', label: 'Dashboard', icon: LayoutDashboard, facultyOnly: true },
    { href: '/dashboard', label: 'Admin', icon: Atom, adminOnly: true },
    { href: '/dashboard/academics', label: 'Academics', icon: BookOpen },
    { href: '/dashboard/students', label: 'Students', icon: Users, adminOnly: true },
    { href: '/dashboard/placements', label: 'Placements', icon: Briefcase },
    { href: '/dashboard/alumni', label: 'Alumni', icon: GraduationCap },
    { href: '/dashboard/canteen', label: 'Canteen', icon: Utensils },
    { href: '/dashboard/hostel', label: 'Hostel', icon: BedDouble },
    { href: '/dashboard/health', label: 'Health', icon: HeartPulse },
    { href: '/dashboard/library', label: 'Library', icon: Library },
    { href: '/dashboard/finance', label: 'Finance', icon: Banknote },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function DesktopPage() {
  const [role, setRole] = useState<'student' | 'faculty' | 'admin' | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as 'student' | 'faculty' | 'admin' | null;
    setRole(storedRole);
  }, []);

  const filteredMenuItems = menuItems.filter(item => {
    if (role === 'student') return !item.adminOnly && !item.facultyOnly;
    if (role === 'faculty') return !item.adminOnly && !item.studentOnly;
    if (role === 'admin') return !item.studentOnly && !item.facultyOnly;
    return false; // Default to not showing anything if role is not set
  });

  return (
    <div className="h-full w-full desktop-bg relative flex items-center justify-center p-20">
      <ClockWidget />
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-8">
        {filteredMenuItems.map((item) => (
          <DesktopIcon key={item.href} {...item} />
        ))}
      </div>
    </div>
  );
}
