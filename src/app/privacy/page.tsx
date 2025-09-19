
import Header from '@/components/app/header';
import Footer from '@/components/app/footer';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1>Privacy Policy for SummaryFlash</h1>

          <p>
            At SummaryFlash, accessible from summaryflash.com, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by SummaryFlash and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2>Log Files</h2>
          <p>
            SummaryFlash follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </p>

          <h2>Information We Collect</h2>
          <p>
            The text you provide for summarization is sent to our servers for processing. We do not store your text or summaries on our servers after the summarization process is complete. We are committed to ensuring that your data is secure and used solely for the purpose of providing you with the summarization service.
          </p>
          
          <h2>Third-Party Services</h2>
          <p>
            We use Google's Generative AI models to power our summarization service. Your use of our service is also subject to Google's privacy policy. We do not share your text with any other third parties.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do
            not hesitate to contact us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
