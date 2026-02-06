import Link from "next/link";
import { themes } from "@/lib/bible-data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Themes | TL;DR Bible",
  description: "Explore major biblical themes like love, grace, redemption, and more",
};

export default function ThemesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7B7B7B] mb-4">
          30 Themes
        </p>
        <h1 className="text-4xl md:text-5xl tracking-tight">
          The ideas that run through it all
        </h1>
        <p className="mt-4 text-[#7B7B7B] text-lg">
          Love, grace, redemption, justice &mdash; the threads that connect Scripture.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <Link
            key={theme.id}
            href={`/themes/${theme.id}`}
            className="group bg-white border border-[#e8e6dc] rounded-2xl p-6 hover:border-[#cdc4a8] hover-lift transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-medium">{theme.name}</h3>
              <ArrowRight className="h-4 w-4 text-[#7B7B7B] group-hover:text-black transition-colors mt-1" />
            </div>
            <p className="text-sm text-[#7B7B7B] mb-4 line-clamp-2">
              {theme.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {theme.keyVerses.slice(0, 2).map((verse) => (
                <span
                  key={verse}
                  className="text-xs text-[#7B7B7B] bg-[#f5f4f0] px-2 py-1 rounded-full"
                >
                  {verse}
                </span>
              ))}
              {theme.keyVerses.length > 2 && (
                <span className="text-xs text-[#7B7B7B] bg-[#f5f4f0] px-2 py-1 rounded-full">
                  +{theme.keyVerses.length - 2}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
