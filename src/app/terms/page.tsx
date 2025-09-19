
import Header from '@/components/app/header';
import Footer from '@/components/app/footer';

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Terms of Service for SummaryFlash</h1>

          <h2 className="text-3xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to SummaryFlash ("we", "our", "us"). These Terms of Service
            govern your use of our website located at summaryflash.com (the
            "Service").
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">2. Use of Service</h2>
          <p>
            Our Service provides AI-powered text summarization. You agree to use
            the Service in compliance with all applicable laws and regulations.
            You are solely responsible for the text and content you submit.
          </p>
          <p>
            You agree not to use the service to summarize content that is illegal, hateful, or infringes on the intellectual property rights of others. We reserve the right to refuse service to anyone for any reason at any time.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
          <p>
            The content you submit for summarization remains your intellectual property. We claim no ownership over it. By using our service, you grant us a temporary, non-exclusive license to process your content to provide you with a summary.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">4. Disclaimer of Warranties</h2>
          <p>
            The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the summaries generated will be accurate, complete, or reliable.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall SummaryFlash, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">6. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
