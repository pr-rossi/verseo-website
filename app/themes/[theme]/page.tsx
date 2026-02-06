import { notFound } from "next/navigation";
import Link from "next/link";
import { SummaryCard } from "@/components/SummaryCard";
import { getThemeById } from "@/lib/bible-data";
import { ArrowLeft } from "lucide-react";

interface ThemePageProps {
  params: Promise<{ theme: string }>;
}

export async function generateMetadata({ params }: ThemePageProps) {
  const { theme: themeId } = await params;
  const theme = getThemeById(themeId);
  if (!theme) return { title: "Theme Not Found" };

  return {
    title: `${theme.name} | TL;DR Bible`,
    description: theme.description,
  };
}

export default async function ThemePage({ params }: ThemePageProps) {
  const { theme: themeId } = await params;
  const theme = getThemeById(themeId);

  if (!theme) {
    notFound();
  }

  const relatedThemes = theme.relatedThemes.map(getThemeById).filter(Boolean);

  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/themes"
        className="inline-flex items-center gap-2 text-sm text-[#7B7B7B] hover:text-black transition-colors mb-12"
      >
        <ArrowLeft className="h-4 w-4" />
        All themes
      </Link>

      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
          {theme.name}
        </h1>

        <p className="text-lg text-[#7B7B7B] mb-12">
          {theme.description}
        </p>

        <SummaryCard
          title={theme.name}
          type="theme"
          contentKey={theme.id}
        />

        {/* Key Verses */}
        <section className="mt-16">
          <h2 className="text-xl mb-6">Key verses</h2>
          <div className="flex flex-wrap gap-2">
            {theme.keyVerses.map((verse) => (
              <span
                key={verse}
                className="px-4 py-2 bg-[#f5f4f0] rounded-full text-sm"
              >
                {verse}
              </span>
            ))}
          </div>
        </section>

        {/* Related Themes */}
        {relatedThemes.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl mb-6">Related themes</h2>
            <div className="flex flex-wrap gap-2">
              {relatedThemes.map(
                (related) =>
                  related && (
                    <Link
                      key={related.id}
                      href={`/themes/${related.id}`}
                      className="px-4 py-2 bg-[#e8e6dc] rounded-full text-sm hover:bg-[#cdc4a8] transition-colors"
                    >
                      {related.name}
                    </Link>
                  )
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
