"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { searchAll } from "@/lib/bible-data";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof searchAll> | null>(null);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = searchAll(query);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults(null);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (type: string, id: string) => {
    setQuery("");
    setIsOpen(false);
    router.push(`/${type}/${id}`);
  };

  const hasResults =
    results &&
    (results.books.length > 0 ||
      results.stories.length > 0 ||
      results.themes.length > 0 ||
      results.characters.length > 0);

  return (
    <div ref={containerRef} className="relative w-full max-w-xs">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7B7B7B]" />
        <input
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#e8e6dc] rounded-full focus:outline-none focus:border-[#cdc4a8] transition-colors"
        />
      </div>

      {isOpen && results && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-[#e8e6dc] rounded-2xl shadow-lg overflow-hidden animate-scale-in origin-top">
          {!hasResults ? (
            <p className="text-sm text-[#7B7B7B] p-4">No results found</p>
          ) : (
            <div className="max-h-80 overflow-auto">
              {results.books.length > 0 && (
                <div className="p-2">
                  <p className="text-xs uppercase tracking-wider text-[#7B7B7B] px-3 py-2">
                    Books
                  </p>
                  {results.books.slice(0, 3).map((book) => (
                    <button
                      key={book.id}
                      onClick={() => handleSelect("books", book.id)}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-[#f5f4f0] transition-colors"
                    >
                      {book.name}
                    </button>
                  ))}
                </div>
              )}

              {results.stories.length > 0 && (
                <div className="p-2 border-t border-[#e8e6dc]">
                  <p className="text-xs uppercase tracking-wider text-[#7B7B7B] px-3 py-2">
                    Stories
                  </p>
                  {results.stories.slice(0, 3).map((story) => (
                    <button
                      key={story.id}
                      onClick={() => handleSelect("stories", story.id)}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-[#f5f4f0] transition-colors"
                    >
                      {story.title}
                    </button>
                  ))}
                </div>
              )}

              {results.themes.length > 0 && (
                <div className="p-2 border-t border-[#e8e6dc]">
                  <p className="text-xs uppercase tracking-wider text-[#7B7B7B] px-3 py-2">
                    Themes
                  </p>
                  {results.themes.slice(0, 3).map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => handleSelect("themes", theme.id)}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-[#f5f4f0] transition-colors"
                    >
                      {theme.name}
                    </button>
                  ))}
                </div>
              )}

              {results.characters.length > 0 && (
                <div className="p-2 border-t border-[#e8e6dc]">
                  <p className="text-xs uppercase tracking-wider text-[#7B7B7B] px-3 py-2">
                    Characters
                  </p>
                  {results.characters.slice(0, 3).map((character) => (
                    <button
                      key={character.id}
                      onClick={() => handleSelect("characters", character.id)}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-[#f5f4f0] transition-colors"
                    >
                      {character.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
