import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-card border-t mt-12">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/blogs" className="hover:text-primary">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact Us
          </Link>
          <Link href="/privacy" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary">
            Terms & Conditions
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} SummaryFlash. All rights reserved.</p>
      </div>
    </footer>
  );
}
