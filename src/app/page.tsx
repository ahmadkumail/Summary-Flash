
import Summarizer from '@/components/app/summarizer';

export default function Home() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
          Summarize Any Text, in Any Language
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Paste any text and let our AI provide you with a quick and
          accurate summary. Free, fast, and easy to use.
        </p>
      </div>
      <Summarizer />
    </main>
  );
}
