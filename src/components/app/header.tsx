import { Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-card border-b sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline">SummaryFlash</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/blogs" passHref>
            <Button variant="ghost">Blogs</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="ghost">Contact Us</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
