
import Header from '@/components/app/header';
import Footer from '@/components/app/footer';

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="font-bold">Terms of Service</h1>

          <h2>1. Use of Service</h2>
          <p>
            Welcome to SummaryFlash. By using our service, you agree to these terms. You are responsible for the content you submit for summarization. You agree not to use our service for any illegal or prohibited activities.
          </p>

          <h2>2. Your Content</h2>
          <p>
            You retain intellectual property rights to the content you submit. We are granted a temporary license to process your content solely for the purpose of providing a summary.
          </p>

          <h2>3. Disclaimers</h2>
          <p>
            The service is provided "as is." We do not guarantee the accuracy or reliability of the summaries generated.
          </p>

          <h2>4. Changes to Terms</h2>
          <p>
            We may update these terms occasionally. Please review this page for the latest version.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
