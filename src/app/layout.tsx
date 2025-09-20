import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SummaryFlash - AI Text Summarizer Online Free',
  description:
    'Instantly summarize long texts, articles, and documents with our free AI-powered summarizer tool. Get short, medium, or detailed summaries in seconds.',
  keywords: [
    'text summarizer',
    'ai summarizer',
    'summarize long text',
    'summarize pdf free',
    'online summarizer',
    'free summarizer tool',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
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
