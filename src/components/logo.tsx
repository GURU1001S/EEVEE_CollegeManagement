import { Atom } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/dashboard/desktop" className="flex items-center gap-2" aria-label="EEVEE OS Home">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
        <Atom className="h-6 w-6 text-primary" />
      </div>
    </Link>
  );
}
