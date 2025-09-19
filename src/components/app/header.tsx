
import { Zap } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-card border-b sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline">SummaryFlash</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: 'ghost' }))}
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className={cn(buttonVariants({ variant: 'ghost' }))}
          >
            Blogs
          </Link>
          <Link
            href="/faq"
            className={cn(buttonVariants({ variant: 'ghost' }))}
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: 'ghost' }))}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
