import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Verseo",
  description: "Privacy Policy for Verseo. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-[#7B7B7B] mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Introduction</h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                Verseo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
              </p>
              <p className="text-[#5a5a5a] leading-relaxed">
                Please read this privacy policy carefully. By using Verseo, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Information We Collect</h2>

              <h3 className="text-lg font-medium mb-2 mt-6">Personal Information</h3>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                When you create an account, we may collect:
              </p>
              <ul className="list-disc list-inside text-[#5a5a5a] space-y-2 mb-4">
                <li>Email address</li>
                <li>Display name</li>
                <li>Username</li>
                <li>Profile picture (if you choose to add one)</li>
              </ul>

              <h3 className="text-lg font-medium mb-2 mt-6">Usage Data</h3>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                We automatically collect certain information when you use the app:
              </p>
              <ul className="list-disc list-inside text-[#5a5a5a] space-y-2">
                <li>Study conversations and questions you ask</li>
                <li>Books, stories, and themes you explore</li>
                <li>Group memberships and messages</li>
                <li>Device information and app version</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">How We Use Your Information</h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-[#5a5a5a] space-y-2">
                <li>Provide and maintain our service</li>
                <li>Save your study conversations and progress</li>
                <li>Enable group features and messaging</li>
                <li>Improve and personalize your experience</li>
                <li>Respond to your support requests</li>
                <li>Send important updates about the service</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Data Storage and Security</h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                Your data is stored securely using industry-standard encryption. We use trusted third-party services for authentication and data storage:
              </p>
              <ul className="list-disc list-inside text-[#5a5a5a] space-y-2">
                <li>Authentication is handled by Clerk</li>
                <li>Data is stored in secure cloud databases</li>
                <li>All data transmission uses HTTPS encryption</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Third-Party Services</h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                We use third-party services that may collect information:
              </p>
              <ul className="list-disc list-inside text-[#5a5a5a] space-y-2">
                <li>Clerk (authentication)</li>
                <li>OpenAI/Anthropic (AI-powered study responses)</li>
                <li>Analytics services (to improve the app)</li>
              </ul>
              <p className="text-[#5a5a5a] leading-relaxed mt-4">
                These services have their own privacy policies governing the use of your information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Data Sharing</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-[#5a5a5a] space-y-2 mt-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist our operations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Your Rights</h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-[#5a5a5a] space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and data</li>
                <li>Export your data</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="text-[#5a5a5a] leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@verseo.app" className="text-[#5c6857] underline">privacy@verseo.app</a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Children&apos;s Privacy</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                Verseo is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Changes to This Policy</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
              <p className="text-[#5a5a5a] leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-[#5a5a5a] mt-4">
                Email: <a href="mailto:privacy@verseo.app" className="text-[#5c6857] underline">privacy@verseo.app</a>
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
