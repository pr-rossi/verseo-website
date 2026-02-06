import type { Metadata } from "next";
import { Inria_Serif, Figtree } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verseo - Scripture, Simplified",
  description:
    "Study the Bible with AI-powered insights. Explore books, stories, themes, and characters with personalized summaries. Download for iOS and Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inriaSerif.variable} ${figtree.variable} antialiased`}>
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </body>
    </html>
  );
}
