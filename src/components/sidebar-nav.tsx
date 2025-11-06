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

import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/academics', label: 'Academics', icon: BookOpen },
  { href: '/dashboard/students', label: 'Students', icon: Users },
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

  return (
    <>
      <div className="flex-1 overflow-y-auto px-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} className="block">
                <SidebarMenuButton
                  isActive={pathname.startsWith(item.href) && (item.href === '/dashboard' ? pathname === item.href : true)}
                  className="w-full justify-start"
                  tooltip={item.label}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </div>
      <div className="px-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href={settingsMenuItem.href} className="block">
              <SidebarMenuButton
                isActive={pathname.startsWith(settingsMenuItem.href)}
                className="w-full justify-start"
                tooltip={settingsMenuItem.label}
              >
                <settingsMenuItem.icon className="h-5 w-5" />
                <span>{settingsMenuItem.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>
    </>
  );
}
