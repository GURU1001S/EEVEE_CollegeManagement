import { Atom } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2" aria-label="EEVEE OS Home">
      <Atom className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold font-headline text-primary">EEVEE OS</span>
    </Link>
  );
}
