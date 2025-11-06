'use client';

import { Bell, Search, Minus, Square, X, PanelTop } from 'lucide-react';
import { SidebarNav } from '@/components/sidebar-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserNav } from '@/components/user-nav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useMemo, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import VantaBackground from '@/components/vanta-background';

const getPageTitle = (pathname: string) => {
  if (pathname.includes('/dashboard/desktop')) return 'Desktop';
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
  if (pathname.startsWith('/dashboard')) return 'Admin Dashboard';
  return 'EEVEE OS';
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTaskbarVisible, setTaskbarVisible] = useState(false);
  const [isMaximized, setIsMaximized] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isWindowVisible, setIsWindowVisible] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const pageTitle = useMemo(() => getPageTitle(pathname), [pathname]);
  const [lastOpenPage, setLastOpenPage] = useState('/dashboard/desktop');

  const isDesktop = pathname === '/dashboard/desktop';

  useEffect(() => {
    // When navigating away from desktop, store the path
    if (pathname !== '/dashboard/desktop') {
      setLastOpenPage(pathname);
      setIsWindowVisible(true);
      setIsMinimized(false);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsWindowVisible(false);
    router.push('/dashboard/desktop');
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    router.push('/dashboard/desktop');
  };

  const handleMaximizeRestore = () => {
    if (isMinimized) {
      setIsMinimized(false);
      // If we are on desktop, navigate back to the last opened page
      if (pathname === '/dashboard/desktop') {
        router.push(lastOpenPage);
      }
    } else {
      setIsMaximized(!isMaximized);
    }
  };


  return (
    <div
      className="flex flex-col h-screen bg-slate-100 dark:bg-slate-900 bg-cover bg-center"
      onMouseEnter={() => setTaskbarVisible(true)}
      onMouseLeave={() => setTaskbarVisible(false)}
    >
       <VantaBackground />
       <ThemeToggle className="absolute top-4 right-4 z-50" />
      <main className={cn(
          "flex-1 overflow-auto p-4 sm:p-8 md:p-12 transition-all duration-300 ease-in-out relative z-10",
          isDesktop && 'p-0 sm:p-0 md:p-0'
        )}>
        <div className={cn(
            "mx-auto h-full w-full rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-2xl transition-all duration-300 ease-in-out vibrant-outline",
            isMaximized ? 'max-w-full h-full' : 'max-w-7xl h-full',
            isMinimized ? 'opacity-0 translate-y-full pointer-events-none' : 'opacity-100 translate-y-0',
            (isDesktop || !isWindowVisible) && 'hidden'
        )}>
          <div className="flex items-center justify-between p-2 pl-4 bg-black/10 dark:bg-black/20 rounded-t-xl cursor-grab">
             <h2 className="font-headline text-lg font-medium">{pageTitle}</h2>
             <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:bg-white/20" onClick={handleMinimize}>
                  <Minus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:bg-white/20" onClick={handleMaximizeRestore}>
                  <Square className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive-foreground hover:bg-red-500/80 hover:text-white" onClick={handleClose}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
          </div>
          <div className="p-4 sm:px-6 h-[calc(100%-48px)] overflow-auto">
            {children}
          </div>
        </div>
        {isDesktop && children}
      </main>
      <footer
        className={`sticky bottom-0 z-30 flex justify-center w-full transition-transform duration-300 ease-in-out ${
          isTaskbarVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex h-16 items-center gap-4 border-t border-white/20 bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/30 dark:bg-black/30 px-6 rounded-t-2xl shadow-2xl">
          <Logo />
           {isMinimized && (
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-black/20 text-white"
              onClick={handleMaximizeRestore}
            >
              <PanelTop className="h-4 w-4" />
              {getPageTitle(lastOpenPage)}
            </Button>
          )}
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
