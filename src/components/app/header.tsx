import { Zap } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-card border-b sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline">SummaryFlash</span>
        </Link>
      </div>
    </header>
  );
}
