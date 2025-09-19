
import Header from '@/components/app/header';
import Footer from '@/components/app/footer';

export default function Blogs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">
            Our Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Insights, tips, and articles on AI, productivity, and summarization.
          </p>
        </div>
        <div className="text-center">
            <p className="text-muted-foreground">Blog posts coming soon!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
