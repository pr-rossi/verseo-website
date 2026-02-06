"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Scroll, Sparkles, Users } from "lucide-react";

const views = [
  { value: "books", label: "Books", icon: BookOpen, href: "/books" },
  { value: "stories", label: "Stories", icon: Scroll, href: "/stories" },
  { value: "themes", label: "Themes", icon: Sparkles, href: "/themes" },
  { value: "characters", label: "Characters", icon: Users, href: "/characters" },
];

export function ViewSwitcher() {
  const pathname = usePathname();

  const getCurrentView = () => {
    for (const view of views) {
      if (pathname.startsWith(view.href)) {
        return view.value;
      }
    }
    return "books";
  };

  return (
    <Tabs value={getCurrentView()} className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        {views.map((view) => (
          <TabsTrigger key={view.value} value={view.value} asChild>
            <Link href={view.href} className="flex items-center gap-2">
              <view.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{view.label}</span>
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
