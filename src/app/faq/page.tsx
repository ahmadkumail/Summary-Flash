
import Header from '@/components/app/header';
import Footer from '@/components/app/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Faq() {
  const faqs = [
    {
      question: 'What is SummaryFlash?',
      answer:
        'SummaryFlash is a free online tool that uses advanced AI to summarize any piece of text quickly and accurately. It helps you save time by providing concise summaries of long articles, documents, or reports.',
    },
    {
      question: 'Is SummaryFlash free to use?',
      answer:
        'Yes, SummaryFlash is completely free to use. There are no hidden charges or subscriptions required to use our summarization service.',
    },
    {
      question: 'What file types are supported for upload?',
      answer:
        'Currently, you can paste text directly or upload files in .txt, .pdf, .doc, and .docx formats. We are working on adding support for more file types in the future.',
    },
    {
      question: 'What is the maximum text length for summarization?',
      answer:
        'You can summarize texts up to 2,000 characters long. For texts longer than that, we recommend breaking them into smaller parts for the best results.',
    },
    {
      question: 'How does the AI summarization work?',
      answer:
        "Our tool uses state-of-the-art natural language processing (NLP) models to understand the context and main points of your text. It then generates a summary that captures the essential information in a 'short', 'medium', or 'detailed' format, as per your selection.",
    },
    {
      question: 'Do you store my data?',
      answer:
        'No, we do not store your text or summaries. Your privacy is our priority. All processing is done in real-time, and your data is discarded immediately after the summary is generated. Please see our Privacy Policy for more details.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to common questions about our AI summarizer tool.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}
