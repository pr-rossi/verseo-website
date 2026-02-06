import { notFound } from "next/navigation";
import Link from "next/link";
import { SummaryCard } from "@/components/SummaryCard";
import { getCharacterById, getBookById } from "@/lib/bible-data";
import { ArrowLeft } from "lucide-react";

interface CharacterPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CharacterPageProps) {
  const { slug } = await params;
  const character = getCharacterById(slug);
  if (!character) return { title: "Character Not Found" };

  return {
    title: `${character.name} | TL;DR Bible`,
    description: character.description,
  };
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { slug } = await params;
  const character = getCharacterById(slug);

  if (!character) {
    notFound();
  }

  const relatedBooks = character.books.map(getBookById).filter(Boolean);

  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/characters"
        className="inline-flex items-center gap-2 text-sm text-[#7B7B7B] hover:text-black transition-colors mb-12"
      >
        <ArrowLeft className="h-4 w-4" />
        All characters
      </Link>

      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B7B7B] mb-4">
          <span>
            {character.testament === "old"
              ? "Old Testament"
              : character.testament === "new"
                ? "New Testament"
                : "Both Testaments"}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
          {character.name}
        </h1>

        <p className="text-lg text-[#7B7B7B] mb-12">
          {character.description}
        </p>

        <SummaryCard
          title={character.name}
          type="character"
          contentKey={character.id}
        />

        {/* Key Events */}
        <section className="mt-16">
          <h2 className="text-xl mb-6">Key moments</h2>
          <div className="flex flex-wrap gap-2">
            {character.keyEvents.map((event) => (
              <span
                key={event}
                className="px-4 py-2 bg-[#f5f4f0] rounded-full text-sm"
              >
                {event}
              </span>
            ))}
          </div>
        </section>

        {/* Appears In */}
        {relatedBooks.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl mb-6">Appears in</h2>
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
