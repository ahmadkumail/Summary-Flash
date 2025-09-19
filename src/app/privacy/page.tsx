
import Header from '@/components/app/header';
import Footer from '@/components/app/footer';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="font-bold">Privacy Policy</h1>

          <p>
            Your privacy is important to us. This policy explains what information we collect and how we use it.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            The text you provide for summarization is processed by our servers. We do not store your text or the generated summaries after the process is complete. Your data is used only to provide the summarization service.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use Google's Generative AI models to power our service. Your use of our service is also subject to Google's privacy policy.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. We encourage you to review this page periodically for any changes.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, please feel free to contact us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
