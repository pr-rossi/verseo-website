import Link from "next/link";
import { stories, getStoryCategories } from "@/lib/bible-data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Stories | TL;DR Bible",
  description: "Explore summaries of key biblical stories and narratives",
};

export default function StoriesPage() {
  const categories = getStoryCategories();

  const storiesByCategory = categories.map((category) => ({
    category,
    stories: stories.filter((s) => s.category === category),
  }));

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7B7B7B] mb-4">
          65+ Stories
        </p>
        <h1 className="text-4xl md:text-5xl tracking-tight">
          The stories that shaped everything
        </h1>
        <p className="mt-4 text-[#7B7B7B] text-lg">
          From Creation to the early church. The narratives you need to know.
        </p>
      </div>

      {storiesByCategory.map(({ category, stories: categoryStories }) => (
        <section key={category} className="mb-16">
          <h2 className="text-xl mb-6">{category}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categoryStories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.id}`}
                className="group bg-white border border-[#e8e6dc] rounded-2xl p-5 hover:border-[#cdc4a8] hover-lift transition-all duration-200"
              >
                <h3 className="font-medium mb-1">{story.title}</h3>
                <p className="text-sm text-[#7B7B7B] mb-3 line-clamp-2">
                  {story.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#7B7B7B] bg-[#f5f4f0] px-2 py-1 rounded-full">
                    {story.reference}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#7B7B7B] group-hover:text-black transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
