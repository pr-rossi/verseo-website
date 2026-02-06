"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#download", label: "Download" },
  { href: "/support", label: "Support" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setMobileMenuOpen(false);
        }
      } else {
        // Navigate to home page with hash
        e.preventDefault();
        window.location.href = "/" + href;
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf9f5]/80 backdrop-blur-md border-b border-[#e8e6dc]">
      <div className="container mx-auto flex h-16 items-center justify-between gap-8 px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-lg font-medium tracking-tight">
            Verseo
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-[#7B7B7B] hover:text-black transition-colors link-underline cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#download"
            onClick={(e) => handleNavClick(e, "#download")}
            className="inline-flex items-center gap-2 bg-[#000] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors cursor-pointer"
          >
            Get the App
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e8e6dc] bg-[#faf9f5]">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-[#7B7B7B] hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={(e) => handleNavClick(e, "#download")}
              className="inline-flex items-center justify-center gap-2 bg-[#000] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors mt-2"
            >
              Get the App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
