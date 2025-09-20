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
  title: 'Free Online Summarizer | AI Summary Tool for Any Language',
  description:
    'Instantly summarize text in any language with our free online AI summarizer. SummaryFlash is a fast and accurate tool for summarizing articles, documents, and more.',
  keywords: [
    'text summarizer',
    'ai summarizer',
    'summarize long text',
    'summarize in any language',
    'multilingual summarizer',
    'free summarizer tool',
    'instant summary',
    'online summarizer',
    'free ai summarizer',
    'summarize online',
    'summary generator',
    'ai summary',
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
