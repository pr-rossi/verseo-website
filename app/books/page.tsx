import Link from "next/link";
import { getBooksByTestament } from "@/lib/bible-data";

export const metadata = {
  title: "Books | TL;DR Bible",
  description: "Explore summaries of all 66 books of the Bible",
};

export default function BooksPage() {
  const oldTestament = getBooksByTestament("old");
  const newTestament = getBooksByTestament("new");

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7B7B7B] mb-4">
          66 Books
        </p>
        <h1 className="text-4xl md:text-5xl tracking-tight">
          Every book, summarized
        </h1>
        <p className="mt-4 text-[#7B7B7B] text-lg">
          From Genesis to Revelation. Click any book to get the TL;DR.
        </p>
      </div>

      {/* Old Testament */}
      <section className="mb-20">
        <div className="flex items-baseline gap-4 mb-8">
          <h2 className="text-2xl">Old Testament</h2>
          <span className="text-sm text-[#7B7B7B]">39 books</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {oldTestament.map((book) => (
            <Link
              key={book.id}
              href={`/books/${book.id}`}
              className="group relative bg-white border border-[#e8e6dc] rounded-2xl p-4 hover:border-[#cdc4a8] hover-lift transition-all duration-200"
            >
              <h3 className="font-medium text-[15px] leading-tight group-hover:text-black transition-colors">
                {book.name}
              </h3>
              <p className="text-xs text-[#7B7B7B] mt-1">
                {book.chapters} chapters
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* New Testament */}
      <section>
        <div className="flex items-baseline gap-4 mb-8">
          <h2 className="text-2xl">New Testament</h2>
          <span className="text-sm text-[#7B7B7B]">27 books</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {newTestament.map((book) => (
            <Link
              key={book.id}
              href={`/books/${book.id}`}
              className="group relative bg-white border border-[#e8e6dc] rounded-2xl p-4 hover:border-[#cdc4a8] hover-lift transition-all duration-200"
            >
              <h3 className="font-medium text-[15px] leading-tight group-hover:text-black transition-colors">
                {book.name}
              </h3>
              <p className="text-xs text-[#7B7B7B] mt-1">
                {book.chapters} chapters
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
