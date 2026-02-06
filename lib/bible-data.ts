import booksData from "@/data/seed/books.json";
import storiesData from "@/data/seed/stories.json";
import themesData from "@/data/seed/themes.json";
import charactersData from "@/data/seed/characters.json";
import type { BibleBook, BibleStory, BibleTheme, BibleCharacter } from "./types";

export const books: BibleBook[] = booksData.books as BibleBook[];
export const stories: BibleStory[] = storiesData.stories as BibleStory[];
export const themes: BibleTheme[] = themesData.themes as BibleTheme[];
export const characters: BibleCharacter[] = charactersData.characters as BibleCharacter[];

// Helper functions
export function getBookById(id: string): BibleBook | undefined {
  return books.find((book) => book.id === id);
}

export function getStoryById(id: string): BibleStory | undefined {
  return stories.find((story) => story.id === id);
}

export function getThemeById(id: string): BibleTheme | undefined {
  return themes.find((theme) => theme.id === id);
}

export function getCharacterById(id: string): BibleCharacter | undefined {
  return characters.find((character) => character.id === id);
}

export function getBooksByTestament(testament: "old" | "new"): BibleBook[] {
  return books.filter((book) => book.testament === testament);
}

export function getBooksByCategory(category: string): BibleBook[] {
  return books.filter((book) => book.category === category);
}

export function getStoriesByCategory(category: string): BibleStory[] {
  return stories.filter((story) => story.category === category);
}

export function getStoriesByBook(bookId: string): BibleStory[] {
  return stories.filter((story) => story.books.includes(bookId));
}

export function getCharactersByTestament(testament: "old" | "new" | "both"): BibleCharacter[] {
  if (testament === "both") {
    return characters.filter((c) => c.testament === "both");
  }
  return characters.filter((c) => c.testament === testament || c.testament === "both");
}

export function getCharactersByBook(bookId: string): BibleCharacter[] {
  return characters.filter((character) => character.books.includes(bookId));
}

// Get unique categories
export function getBookCategories(): string[] {
  return [...new Set(books.map((book) => book.category))];
}

export function getStoryCategories(): string[] {
  return [...new Set(stories.map((story) => story.category))];
}

// Search functions
export function searchBooks(query: string): BibleBook[] {
  const lower = query.toLowerCase();
  return books.filter(
    (book) => book.name.toLowerCase().includes(lower) || book.shortName.toLowerCase().includes(lower)
  );
}

export function searchStories(query: string): BibleStory[] {
  const lower = query.toLowerCase();
  return stories.filter(
    (story) =>
      story.title.toLowerCase().includes(lower) ||
      story.description.toLowerCase().includes(lower)
  );
}

export function searchThemes(query: string): BibleTheme[] {
  const lower = query.toLowerCase();
  return themes.filter(
    (theme) =>
      theme.name.toLowerCase().includes(lower) ||
      theme.description.toLowerCase().includes(lower)
  );
}

export function searchCharacters(query: string): BibleCharacter[] {
  const lower = query.toLowerCase();
  return characters.filter(
    (character) =>
      character.name.toLowerCase().includes(lower) ||
      character.description.toLowerCase().includes(lower)
  );
}

export function searchAll(query: string) {
  return {
    books: searchBooks(query),
    stories: searchStories(query),
    themes: searchThemes(query),
    characters: searchCharacters(query),
  };
}
