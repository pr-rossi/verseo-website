import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Verseo",
  description: "Terms of Service for Verseo. Please read these terms carefully before using our app.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">Terms of Service</h1>
          <p className="text-[#7B7B7B] mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Agreement to Terms</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                By accessing or using Verseo, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Description of Service</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                Verseo is a Bible study application that provides AI-powered summaries, insights, and study tools for exploring Scripture. The service includes features for reading Bible content, asking questions, joining study groups, and engaging with other users.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">User Accounts</h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                Some features of Verseo require you to create an account. When you create an account, you agree to:
              </p>
              <ul className="list-disc list-inside text-[#5a5a5a] space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update any information that changes</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Acceptable Use</h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                You agree not to use Verseo to:
              </p>
              <ul className="list-disc list-inside text-[#5a5a5a] space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Share inappropriate, offensive, or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service</li>
                <li>Use the service for commercial purposes without permission</li>
                <li>Scrape or collect data from the service without authorization</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">AI-Generated Content</h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                Verseo uses artificial intelligence to generate summaries, insights, and responses to your questions. You acknowledge that:
              </p>
              <ul className="list-disc list-inside text-[#5a5a5a] space-y-2">
                <li>AI-generated content is provided for informational and educational purposes</li>
                <li>AI responses may not always be accurate or complete</li>
                <li>AI content should not replace reading the actual Scripture</li>
                <li>AI content is not intended as professional theological or pastoral advice</li>
              </ul>
              <p className="text-[#5a5a5a] leading-relaxed mt-4">
                We encourage you to verify important information and consult appropriate religious or theological authorities for spiritual guidance.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">User Content</h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                You retain ownership of content you create within Verseo (such as group messages). By posting content, you grant us a license to use, display, and distribute that content within the service.
              </p>
              <p className="text-[#5a5a5a] leading-relaxed">
                You are responsible for ensuring your content does not violate any third-party rights or these Terms of Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Intellectual Property</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                The Verseo service, including its design, features, and content (excluding user content and Scripture quotations), is owned by us and protected by intellectual property laws. You may not copy, modify, or distribute our proprietary content without permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Scripture Content</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                Scripture quotations in Verseo are based on the New American Standard Bible (NASB). All Scripture content is used in accordance with applicable permissions and is intended for personal study purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Termination</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                We may terminate or suspend your account and access to the service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the service will cease immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Disclaimer of Warranties</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Limitation of Liability</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Changes to Terms</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                We reserve the right to modify these terms at any time. We will provide notice of significant changes by posting the new Terms on this page. Your continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Governing Law</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-[#5a5a5a] mt-4">
                Email: <a href="mailto:legal@verseo.app" className="text-[#5c6857] underline">legal@verseo.app</a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-[#e8e6dc]">
            <Link href="/" className="text-[#5c6857] hover:underline">&larr; Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
