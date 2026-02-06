/**
 * Seed Script for Pre-generating Popular Summaries
 *
 * This script pre-generates summaries for popular content in all tones
 * to ensure fast load times for common requests.
 *
 * Usage: npm run seed
 *
 * Prerequisites:
 * - DATABASE_URL environment variable set
 * - ANTHROPIC_API_KEY environment variable set
 */

import { PrismaClient } from "@prisma/client";
import Anthropic from "@anthropic-ai/sdk";
import { generateSummaryPrompt } from "../lib/prompts";
import type { Tone, Depth, ContentType } from "../lib/types";

// Import data
import booksData from "../data/seed/books.json";
import storiesData from "../data/seed/stories.json";
import themesData from "../data/seed/themes.json";
import charactersData from "../data/seed/characters.json";

const prisma = new PrismaClient();
const anthropic = new Anthropic();

const tones: Tone[] = ["casual", "balanced", "scholarly"];
const defaultDepth: Depth = "medium";

// Rate limiting
const DELAY_MS = 1000; // 1 second between API calls

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateAndSave(
  type: ContentType,
  key: string,
  tone: Tone,
  depth: Depth,
  reference?: string
) {
  // Check if already exists
  const existing = await prisma.summary.findUnique({
    where: {
      type_key_tone_depth: { type, key, tone, depth },
    },
  });

  if (existing) {
    console.log(`  Skipping ${type}/${key}/${tone}/${depth} (already exists)`);
    return;
  }

  const prompt = generateSummaryPrompt({ type, key, tone, depth, reference });

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    });

    const textBlock = message.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("No text response");
    }

    await prisma.summary.create({
      data: {
        type,
        key,
        tone,
        depth,
        content: textBlock.text,
      },
    });

    console.log(`  Created ${type}/${key}/${tone}/${depth}`);
  } catch (error) {
    console.error(`  Error generating ${type}/${key}/${tone}/${depth}:`, error);
  }

  await delay(DELAY_MS);
}

async function seedBooks() {
  console.log("\n=== Seeding Book Summaries ===");

  for (const book of booksData.books) {
    console.log(`\nProcessing: ${book.name}`);
    for (const tone of tones) {
      await generateAndSave("book", book.id, tone, defaultDepth);
    }
  }
}

async function seedStories() {
  console.log("\n=== Seeding Story Summaries ===");

  // Top 30 most popular stories
  const popularStories = storiesData.stories.slice(0, 30);

  for (const story of popularStories) {
    console.log(`\nProcessing: ${story.title}`);
    for (const tone of tones) {
      await generateAndSave("story", story.id, tone, defaultDepth, story.reference);
    }
  }
}

async function seedThemes() {
  console.log("\n=== Seeding Theme Summaries ===");

  for (const theme of themesData.themes) {
    console.log(`\nProcessing: ${theme.name}`);
    for (const tone of tones) {
      await generateAndSave("theme", theme.id, tone, defaultDepth);
    }
  }
}

async function seedCharacters() {
  console.log("\n=== Seeding Character Summaries ===");

  // Top 30 most popular characters
  const popularCharacters = charactersData.characters.slice(0, 30);

  for (const character of popularCharacters) {
    console.log(`\nProcessing: ${character.name}`);
    for (const tone of tones) {
      await generateAndSave("character", character.id, tone, defaultDepth);
    }
  }
}

async function main() {
  console.log("Starting seed process...");
  console.log("This will pre-generate summaries for popular content.");
  console.log("Estimated time: Several hours (due to rate limiting)\n");

  try {
    await seedBooks();
    await seedStories();
    await seedThemes();
    await seedCharacters();

    console.log("\n=== Seed Complete ===");

    const count = await prisma.summary.count();
    console.log(`Total summaries in database: ${count}`);
  } catch (error) {
    console.error("Seed failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
