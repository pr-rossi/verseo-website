import Link from "next/link";
import { characters } from "@/lib/bible-data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Characters | TL;DR Bible",
  description: "Explore profiles of key biblical figures from Adam to Paul",
};

export default function CharactersPage() {
  const otCharacters = characters.filter((c) => c.testament === "old");
  const ntCharacters = characters.filter((c) => c.testament === "new");
  const bothCharacters = characters.filter((c) => c.testament === "both");

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7B7B7B] mb-4">
          50+ Characters
        </p>
        <h1 className="text-4xl md:text-5xl tracking-tight">
          The people who shaped the story
        </h1>
        <p className="mt-4 text-[#7B7B7B] text-lg">
          From Adam to Paul. Profiles of the figures behind Scripture.
        </p>
      </div>

      {/* Old Testament */}
      <section className="mb-16">
        <div className="flex items-baseline gap-4 mb-8">
          <h2 className="text-xl">Old Testament</h2>
          <span className="text-sm text-[#7B7B7B]">{otCharacters.length} people</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {otCharacters.map((character) => (
            <Link
              key={character.id}
              href={`/characters/${character.id}`}
              className="group bg-white border border-[#e8e6dc] rounded-2xl p-5 hover:border-[#cdc4a8] hover-lift transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium">{character.name}</h3>
                <ArrowRight className="h-4 w-4 text-[#7B7B7B] group-hover:text-black transition-colors" />
              </div>
              <p className="text-sm text-[#7B7B7B] line-clamp-2">
                {character.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* New Testament */}
      <section className="mb-16">
        <div className="flex items-baseline gap-4 mb-8">
          <h2 className="text-xl">New Testament</h2>
          <span className="text-sm text-[#7B7B7B]">{ntCharacters.length} people</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ntCharacters.map((character) => (
            <Link
              key={character.id}
              href={`/characters/${character.id}`}
              className="group bg-white border border-[#e8e6dc] rounded-2xl p-5 hover:border-[#cdc4a8] hover-lift transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium">{character.name}</h3>
                <ArrowRight className="h-4 w-4 text-[#7B7B7B] group-hover:text-black transition-colors" />
              </div>
              <p className="text-sm text-[#7B7B7B] line-clamp-2">
                {character.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Both Testaments */}
      {bothCharacters.length > 0 && (
        <section>
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-xl">Both Testaments</h2>
            <span className="text-sm text-[#7B7B7B]">{bothCharacters.length} people</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {bothCharacters.map((character) => (
              <Link
                key={character.id}
                href={`/characters/${character.id}`}
                className="group bg-white border border-[#e8e6dc] rounded-2xl p-5 hover:border-[#cdc4a8] hover-lift transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium">{character.name}</h3>
                  <ArrowRight className="h-4 w-4 text-[#7B7B7B] group-hover:text-black transition-colors" />
                </div>
                <p className="text-sm text-[#7B7B7B] line-clamp-2">
                  {character.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
