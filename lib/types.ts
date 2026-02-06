export type Tone = "casual" | "balanced" | "scholarly";
export type Depth = "brief" | "medium" | "detailed";
export type ContentType = "book" | "chapter" | "story" | "theme" | "character";
export type ViewType = "books" | "stories" | "themes" | "characters";

export interface BibleBook {
  id: string;
  name: string;
  shortName: string;
  testament: "old" | "new";
  chapters: number;
  category: string;
}

export interface BibleStory {
  id: string;
  title: string;
  reference: string;
  books: string[];
  category: string;
  description: string;
}

export interface BibleTheme {
  id: string;
  name: string;
  description: string;
  keyVerses: string[];
  relatedThemes: string[];
}

export interface BibleCharacter {
  id: string;
  name: string;
  description: string;
  testament: "old" | "new" | "both";
  books: string[];
  keyEvents: string[];
}

export interface SummaryRequest {
  type: ContentType;
  key: string;
  tone: Tone;
  depth: Depth;
  reference?: string;
}

export interface SummaryResponse {
  content: string;
  cached: boolean;
  generatedAt?: string;
}

export interface UserPreferences {
  tone: Tone;
  depth: Depth;
  view: ViewType;
}
