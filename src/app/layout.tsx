import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Instant AI Summarizer for Any Text & Language | SummaryFlash',
  description:
    'Save time with SummaryFlash! Our free AI tool instantly summarizes long texts, articles, and documents in any language. Get short, medium, or detailed summaries in seconds.',
  keywords: [
    'text summarizer',
    'ai summarizer',
    'summarize long text',
    'summarize in any language',
    'multilingual summarizer',
    'free summarizer tool',
    'instant summary',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body
        className={cn(
          'font-body antialiased min-h-screen bg-background text-foreground'
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
