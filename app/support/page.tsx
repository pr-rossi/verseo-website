import { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Support - Verseo",
  description: "Get help with Verseo. Find answers to common questions or contact our support team.",
};

const faqs = [
  {
    question: "Is Verseo free to use?",
    answer: "Yes! Verseo is free to download and use. You can explore books, stories, themes, and characters, and use the AI study feature without any cost.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No account is required to start using Verseo. However, creating a free account allows you to save your study conversations, join groups, and sync your progress across devices.",
  },
  {
    question: "What Bible translation does Verseo use?",
    answer: "Verseo references the NASB (New American Standard Bible) translation for Scripture quotes. Our AI-powered summaries are designed to help you understand the text, but we always encourage reading the full Scripture.",
  },
  {
    question: "How does the AI study feature work?",
    answer: "Simply type any question about the Bible, and Verseo will provide thoughtful, contextual answers with Scripture references. The AI understands context and can help with everything from simple verse lookups to complex theological questions.",
  },
  {
    question: "Can I use Verseo offline?",
    answer: "Some features like browsing books and saved content work offline. However, the AI study feature and group messaging require an internet connection.",
  },
  {
    question: "How do I join or create a study group?",
    answer: "Tap the Groups tab in the app, then either browse existing groups or tap 'Create Group' to start your own. You can invite friends by sharing your group or searching for their username.",
  },
  {
    question: "Is my data private?",
    answer: "Yes, we take your privacy seriously. Your study conversations and personal data are encrypted and never shared with third parties. See our Privacy Policy for full details.",
  },
  {
    question: "How do I report a bug or suggest a feature?",
    answer: "We'd love to hear from you! Send us an email at support@verseo.app with details about the issue or your feature suggestion.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-6 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            How can we help?
          </h1>
          <p className="text-lg text-[#7B7B7B] leading-relaxed">
            Find answers to common questions or reach out to our team for support.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
          <a
            href="mailto:support@verseo.app"
            className="group flex items-start gap-4 bg-[#DDE3D7] rounded-2xl p-6 hover-lift"
          >
            <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="h-5 w-5 text-[#5c6857]" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Email Support</h3>
              <p className="text-sm text-[#5a5a5a]">support@verseo.app</p>
              <p className="text-xs text-[#7B7B7B] mt-1">We typically respond within 24 hours</p>
            </div>
          </a>

          <a
            href="#faqs"
            className="group flex items-start gap-4 bg-[#e8e6dc] rounded-2xl p-6 hover-lift"
          >
            <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <MessageCircle className="h-5 w-5 text-[#5c6857]" />
            </div>
            <div>
              <h3 className="font-medium mb-1">FAQs</h3>
              <p className="text-sm text-[#5a5a5a]">Quick answers to common questions</p>
              <p className="text-xs text-[#7B7B7B] mt-1">Browse below</p>
            </div>
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="border-t border-[#e8e6dc]">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-[#e8e6dc] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-[#faf9f5] transition-colors">
                  <span className="font-medium pr-4">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-[#7B7B7B] flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="text-[#7B7B7B] leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Still need help */}
      <section className="bg-[#5c6857] text-white">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl mb-4">Still need help?</h2>
            <p className="text-white/80 mb-8">
              Can&apos;t find what you&apos;re looking for? Our team is here to help.
            </p>
            <a
              href="mailto:support@verseo.app"
              className="inline-flex items-center gap-2 bg-white text-[#5c6857] px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e6dc]">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <Link href="/" className="text-lg font-medium mb-2 block">Verseo</Link>
              <p className="text-sm text-[#7B7B7B]">
                Scripture, simplified.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-6 text-sm">
              <Link href="/" className="hover:text-[#7B7B7B] transition-colors">Home</Link>
              <Link href="/support" className="hover:text-[#7B7B7B] transition-colors">Support</Link>
              <Link href="/privacy" className="hover:text-[#7B7B7B] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[#7B7B7B] transition-colors">Terms</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#e8e6dc] text-sm text-[#7B7B7B]">
            <p>&copy; {new Date().getFullYear()} Verseo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
