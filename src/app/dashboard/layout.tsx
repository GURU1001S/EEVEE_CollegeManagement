'use client';

import { Bell, Search, Minus, Square, X } from 'lucide-react';
import { SidebarNav } from '@/components/sidebar-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserNav } from '@/components/user-nav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/logo';

const getPageTitle = (pathname: string) => {
  if (pathname.includes('/dashboard/academics')) return 'Academics';
  if (pathname.includes('/dashboard/alumni')) return 'Alumni Network';
  if (pathname.includes('/dashboard/canteen')) return 'Canteen';
  if (pathname.includes('/dashboard/faculty')) return 'Faculty Dashboard';
  if (pathname.includes('/dashboard/finance')) return 'Finance';
  if (pathname.includes('/dashboard/health')) return 'Health Services';
  if (pathname.includes('/dashboard/hostel')) return 'Hostel Management';
  if (pathname.includes('/dashboard/library')) return 'Library';
  if (pathname.includes('/dashboard/placements')) return 'Placements';
  if (pathname.includes('/dashboard/settings')) return 'Settings';
  if (pathname.includes('/dashboard/student')) return 'Student Dashboard';
  return 'Admin Dashboard';
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTaskbarVisible, setTaskbarVisible] = useState(false);
  const pathname = usePathname();
  const pageTitle = useMemo(() => getPageTitle(pathname), [pathname]);

  return (
    <div
      className="flex flex-col h-screen bg-slate-100 dark:bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: 'url(/background.png)'}}
      onMouseEnter={() => setTaskbarVisible(true)}
      onMouseLeave={() => setTaskbarVisible(false)}
    >
       <ThemeToggle className="absolute top-4 right-4 z-50" />
      <main className="flex-1 overflow-auto p-4 sm:p-8 md:p-12">
        <div className="mx-auto h-full w-full max-w-7xl rounded-xl border border-white/20 bg-clip-padding backdrop-filter backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-2xl">
          <div className="flex items-center justify-between p-2 pl-4 bg-black/10 dark:bg-black/20 rounded-t-xl">
             <h2 className="font-headline text-lg font-medium">{pageTitle}</h2>
             <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:bg-white/20">
                  <Minus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:bg-white/20">
                  <Square className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive-foreground hover:bg-red-500/80 hover:text-white">
                  <X className="h-4 w-4" />
                </Button>
              </div>
          </div>
          <div className="p-4 sm:px-6 h-[calc(100%-48px)] overflow-auto">
            {children}
          </div>
        </div>
      </main>
      <footer
        className={`sticky bottom-0 z-30 flex justify-center w-full transition-transform duration-300 ease-in-out ${
          isTaskbarVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex h-16 items-center gap-4 border-t border-white/20 bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/30 dark:bg-black/30 px-6 rounded-t-2xl shadow-2xl">
          <Logo />
          <SidebarNav />
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-white/50 dark:bg-black/50 pl-8 md:w-[200px] lg:w-[320px] border-none"
            />
          </div>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <UserNav />
        </div>
      </footer>
    </div>
  );
}
