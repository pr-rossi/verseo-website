import { notFound } from "next/navigation";
import Link from "next/link";
import { SummaryCard } from "@/components/SummaryCard";
import { getStoryById, getBookById } from "@/lib/bible-data";
import { ArrowLeft } from "lucide-react";

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStoryById(slug);
  if (!story) return { title: "Story Not Found" };

  return {
    title: `${story.title} | TL;DR Bible`,
    description: story.description,
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStoryById(slug);

  if (!story) {
    notFound();
  }

  const relatedBooks = story.books.map(getBookById).filter(Boolean);

  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/stories"
        className="inline-flex items-center gap-2 text-sm text-[#7B7B7B] hover:text-black transition-colors mb-12"
      >
        <ArrowLeft className="h-4 w-4" />
        All stories
      </Link>

      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B7B7B] mb-4">
          <span>{story.category}</span>
          <span>&middot;</span>
          <span>{story.reference}</span>
        </div>

        <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
          {story.title}
        </h1>

        <p className="text-lg text-[#7B7B7B] mb-12">
          {story.description}
        </p>

        <SummaryCard
          title={story.title}
          type="story"
          contentKey={story.id}
          reference={story.reference}
        />

        {/* Found In */}
        {relatedBooks.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl mb-6">Found in</h2>
            <div className="flex flex-wrap gap-2">
              {relatedBooks.map(
                (book) =>
                  book && (
                    <Link
                      key={book.id}
                      href={`/books/${book.id}`}
                      className="px-4 py-2 bg-[#e8e6dc] rounded-full text-sm hover:bg-[#cdc4a8] transition-colors"
                    >
                      {book.name}
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
