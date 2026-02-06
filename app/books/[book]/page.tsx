import { notFound } from "next/navigation";
import Link from "next/link";
import { SummaryCard } from "@/components/SummaryCard";
import { getBookById, getStoriesByBook, getCharactersByBook } from "@/lib/bible-data";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface BookPageProps {
  params: Promise<{ book: string }>;
}

export async function generateMetadata({ params }: BookPageProps) {
  const { book: bookId } = await params;
  const book = getBookById(bookId);
  if (!book) return { title: "Book Not Found" };

  return {
    title: `${book.name} | TL;DR Bible`,
    description: `Summary of the book of ${book.name}`,
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { book: bookId } = await params;
  const book = getBookById(bookId);

  if (!book) {
    notFound();
  }

  const relatedStories = getStoriesByBook(bookId);
  const relatedCharacters = getCharactersByBook(bookId);

  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/books"
        className="inline-flex items-center gap-2 text-sm text-[#7B7B7B] hover:text-black transition-colors mb-12"
      >
        <ArrowLeft className="h-4 w-4" />
        All books
      </Link>

      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B7B7B] mb-4">
          <span>{book.testament === "old" ? "Old Testament" : "New Testament"}</span>
          <span>&middot;</span>
          <span>{book.category}</span>
          <span>&middot;</span>
          <span>{book.chapters} chapters</span>
        </div>

        <h1 className="text-4xl md:text-5xl tracking-tight mb-12">
          {book.name}
        </h1>

        <SummaryCard
          title={book.name}
          type="book"
          contentKey={book.id}
        />

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <section className="mt-20">
            <h2 className="text-xl mb-6">Stories in {book.name}</h2>
            <div className="space-y-3">
              {relatedStories.map((story) => (
                <Link
                  key={story.id}
                  href={`/stories/${story.id}`}
                  className="group flex items-center justify-between p-4 bg-white border border-[#e8e6dc] rounded-2xl hover:border-[#cdc4a8] transition-all"
                >
                  <div>
                    <h3 className="font-medium">{story.title}</h3>
                    <p className="text-sm text-[#7B7B7B]">{story.reference}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#7B7B7B] group-hover:text-black transition-colors" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Characters */}
        {relatedCharacters.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl mb-6">Key characters</h2>
            <div className="flex flex-wrap gap-2">
              {relatedCharacters.map((character) => (
                <Link
                  key={character.id}
                  href={`/characters/${character.id}`}
                  className="px-4 py-2 bg-[#e8e6dc] rounded-full text-sm hover:bg-[#cdc4a8] transition-colors"
                >
                  {character.name}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
