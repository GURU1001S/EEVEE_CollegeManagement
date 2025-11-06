'use client';

import { Bell, Search } from 'lucide-react';
import { SidebarNav } from '@/components/sidebar-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserNav } from '@/components/user-nav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTaskbarVisible, setTaskbarVisible] = useState(false);

  return (
    <div
      className="flex flex-col h-screen"
      onMouseEnter={() => setTaskbarVisible(true)}
      onMouseLeave={() => setTaskbarVisible(false)}
    >
      <main className="flex-1 overflow-auto p-4 sm:px-6">{children}</main>
      <footer
        className={`sticky bottom-0 z-30 flex h-16 items-center gap-4 border-t bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ease-in-out ${
          isTaskbarVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <SidebarNav />
        <div className="flex-1" />
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-secondary pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <UserNav />
      </footer>
    </div>
  );
}
