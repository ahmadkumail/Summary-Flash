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
  title: 'SummaryFlash - AI Summarizer for Any Language',
  description:
    'Instantly summarize long texts, articles, and documents in any language with our free AI-powered summarizer tool. Get short, medium, or detailed summaries in seconds.',
  keywords: [
    'text summarizer',
    'ai summarizer',
    'summarize long text',
    'summarize in any language',
    'multilingual summarizer',
    'free summarizer tool',
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
