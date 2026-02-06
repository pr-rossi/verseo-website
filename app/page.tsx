import Link from "next/link";
import { ArrowRight, BookOpen, MessageSquare, Users, Sparkles, ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7B7B7B] mb-4 animate-fade-in">
            Scripture, simplified
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight animate-fade-in-up">
            Study the Bible
            <br />
            <span className="text-[#7B7B7B]">like never before.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#7B7B7B] max-w-2xl mx-auto leading-relaxed animate-fade-in stagger-2">
            AI-powered insights for every book, story, and character.
            Ask questions, explore themes, and deepen your faith &mdash; all in one app.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in stagger-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-[#000] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#333] hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              Download Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="text-base font-medium hover:text-[#7B7B7B] transition-colors flex items-center gap-1"
            >
              See how it works <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* App Preview Placeholder */}
        <div className="mt-16 md:mt-20 max-w-5xl mx-auto animate-fade-in stagger-4">
          <div className="relative">
            {/* Phone mockup placeholder */}
            <div className="flex justify-center gap-4 md:gap-8">
              <div className="w-48 md:w-64 h-96 md:h-[500px] bg-gradient-to-b from-[#DDE3D7] to-[#e8e6dc] rounded-[2.5rem] shadow-2xl flex items-center justify-center border-8 border-[#1a1a1a] relative overflow-hidden">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#1a1a1a] rounded-full"></div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-[#5c6857] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm text-[#5a5a5a] font-medium">App Screenshot</p>
                  <p className="text-xs text-[#7B7B7B] mt-1">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white border-y border-[#e8e6dc]">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7B7B7B] mb-4">
              Everything you need
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Your personal Bible companion
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group bg-[#DDE3D7] rounded-3xl p-8 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-6 w-6 text-[#5c6857]" />
              </div>
              <h3 className="text-xl font-medium mb-3">AI-Powered Study</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                Ask anything about Scripture and get thoughtful, contextual answers powered by advanced AI.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-[#e8e6dc] rounded-3xl p-8 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-6 w-6 text-[#5c6857]" />
              </div>
              <h3 className="text-xl font-medium mb-3">66 Books Explored</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                Summaries, key themes, and insights for every book from Genesis to Revelation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-[#cdc4a8] rounded-3xl p-8 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-6 w-6 text-[#5c6857]" />
              </div>
              <h3 className="text-xl font-medium mb-3">Stories & Characters</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                Dive deep into 65+ biblical narratives and meet 50+ figures who shaped Scripture.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white border border-[#e8e6dc] rounded-3xl p-8 hover-lift hover:border-[#cdc4a8]">
              <div className="w-12 h-12 rounded-2xl bg-[#DDE3D7] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-[#5c6857]" />
              </div>
              <h3 className="text-xl font-medium mb-3">Study Groups</h3>
              <p className="text-[#7B7B7B] leading-relaxed">
                Create groups, chat with friends, and share insights from your studies together.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white border border-[#e8e6dc] rounded-3xl p-8 hover-lift hover:border-[#cdc4a8]">
              <div className="w-12 h-12 rounded-2xl bg-[#DDE3D7] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-[#5c6857]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Daily Verses</h3>
              <p className="text-[#7B7B7B] leading-relaxed">
                Start each day with a curated verse and reflection to guide your journey.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white border border-[#e8e6dc] rounded-3xl p-8 hover-lift hover:border-[#cdc4a8]">
              <div className="w-12 h-12 rounded-2xl bg-[#DDE3D7] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-[#5c6857]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">30 Themes</h3>
              <p className="text-[#7B7B7B] leading-relaxed">
                Explore love, grace, redemption, and more across the entire Bible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7B7B7B] mb-4">
            Simple & intuitive
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight">
            How Verseo works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-[#DDE3D7] flex items-center justify-center mb-5 text-lg font-medium">
              1
            </div>
            <h3 className="text-lg font-medium mb-2">Ask anything</h3>
            <p className="text-[#7B7B7B] text-[15px] leading-relaxed">
              Type any question about the Bible &mdash; from simple verses to complex theology. Verseo understands context.
            </p>
          </div>

          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-[#e8e6dc] flex items-center justify-center mb-5 text-lg font-medium">
              2
            </div>
            <h3 className="text-lg font-medium mb-2">Get thoughtful answers</h3>
            <p className="text-[#7B7B7B] text-[15px] leading-relaxed">
              Receive AI-powered responses with Scripture references, historical context, and practical applications.
            </p>
          </div>

          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-[#cdc4a8] flex items-center justify-center mb-5 text-lg font-medium">
              3
            </div>
            <h3 className="text-lg font-medium mb-2">Go deeper</h3>
            <p className="text-[#7B7B7B] text-[15px] leading-relaxed">
              Explore related stories, characters, and themes. Save conversations and share insights with your study group.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="bg-[#5c6857] text-white">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-8 opacity-50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl md:text-3xl leading-relaxed font-light">
              &ldquo;The Bible is meant to be understood. Verseo makes that possible for everyone,
              whether you&apos;re new to Scripture or have studied it for years.&rdquo;
            </p>
            <p className="mt-8 text-white/70 text-sm uppercase tracking-wider">
              Built for seekers, students, and scholars alike
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7B7B7B] mb-4">
            Available now
          </p>
          <h2 className="text-3xl md:text-5xl tracking-tight mb-6">
            Start your journey today
          </h2>
          <p className="text-lg text-[#7B7B7B] max-w-xl mx-auto mb-10">
            Download Verseo for free and discover a new way to engage with Scripture. Available on iOS and Android.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl hover:bg-[#333] transition-colors w-full sm:w-auto justify-center"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-lg font-medium -mt-0.5">App Store</div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl hover:bg-[#333] transition-colors w-full sm:w-auto justify-center"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="text-lg font-medium -mt-0.5">Google Play</div>
              </div>
            </a>
          </div>

          <p className="mt-8 text-sm text-[#7B7B7B]">
            Free to download. No account required to get started.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e6dc]">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-lg font-medium mb-2">Verseo</p>
              <p className="text-sm text-[#7B7B7B]">
                Scripture, simplified.
                <br />
                Made with faith in mind.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-6 text-sm">
              <a href="#features" className="hover:text-[#7B7B7B] transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-[#7B7B7B] transition-colors">How It Works</a>
              <a href="#download" className="hover:text-[#7B7B7B] transition-colors">Download</a>
              <Link href="/support" className="hover:text-[#7B7B7B] transition-colors">Support</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#e8e6dc] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-[#7B7B7B]">
            <p>&copy; {new Date().getFullYear()} Verseo. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
