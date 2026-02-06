import type { Tone, Depth, ContentType } from "./types";

export const toneDescriptions: Record<Tone, string> = {
  casual: `Witty, modern, and relatable. Use contemporary analogies, occasional humor, and accessible language.
Think "explaining to a friend over coffee." Examples: "Noah basically ran the world's first animal Airbnb"
or "Job's friends were like those people who give unsolicited advice when you're going through it."`,

  balanced: `Clear, accessible, and respectful. Use straightforward modern English that's easy to understand
while maintaining reverence for the content. Avoid slang but don't be overly formal.
Example: "Noah built an ark at God's command, preserving his family and animal pairs through a catastrophic flood."`,

  scholarly: `Formal, contextual, and nuanced. Include historical context, literary analysis, and theological
significance. Reference ancient Near Eastern parallels where relevant. Use proper terminology.
Example: "The Noahic narrative presents a covenant renewal theme, with flood typology echoing Mesopotamian parallels
while establishing unique monotheistic theology."`,
};

export const depthDescriptions: Record<Depth, string> = {
  brief: "2-3 sentences. Just the essential gist - what happened and why it matters.",
  medium: "A short paragraph (4-6 sentences). Key events, main message, and relevance.",
  detailed:
    "2-3 paragraphs. Include historical context, key details, theological significance, and connections to other passages.",
};

interface PromptContext {
  type: ContentType;
  key: string;
  tone: Tone;
  depth: Depth;
  reference?: string;
  additionalContext?: string;
}

export function generateSummaryPrompt(context: PromptContext): string {
  const { type, key, tone, depth, reference, additionalContext } = context;

  const typeInstructions: Record<ContentType, string> = {
    book: `Summarize the entire book of the Bible. Cover the main narrative arc, key themes,
major characters, and the book's significance in the biblical canon.`,

    chapter: `Summarize this specific chapter. Focus on the main events or teachings,
how it connects to the surrounding chapters, and its key takeaways.`,

    story: `Summarize this biblical narrative/story. Cover what happened, who was involved,
why it matters, and what lessons or themes emerge from it.`,

    theme: `Explain this biblical theme. Cover how it appears throughout Scripture,
key passages that illustrate it, and its theological significance.`,

    character: `Provide a profile of this biblical figure. Cover their story arc,
key events they were involved in, their significance, and lessons from their life.`,
  };

  return `You are a Bible scholar creating summaries for a "TL;DR Bible" website.
Your goal is to make biblical content accessible and engaging while remaining accurate to the NASB translation.

## Your Task
Create a ${depth} summary for: ${formatKey(key, type)}
${reference ? `Reference: ${reference}` : ""}

## Content Type
${typeInstructions[type]}

## Tone
${toneDescriptions[tone]}

## Length
${depthDescriptions[depth]}

${additionalContext ? `## Additional Context\n${additionalContext}` : ""}

## Guidelines
- Be accurate to the biblical text (NASB translation)
- Match the requested tone consistently
- Focus on what's most important and memorable
- Avoid denominational bias - stick to what the text says
- Don't include verse numbers in the summary unless specifically relevant
- Make it engaging and memorable

Write only the summary content, no preamble or meta-commentary.`;
}

function formatKey(key: string, type: ContentType): string {
  const formatted = key
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  switch (type) {
    case "book":
      return `The Book of ${formatted}`;
    case "chapter":
      return formatted.replace(/(\d+)$/, " Chapter $1");
    case "story":
      return `The Story of ${formatted}`;
    case "theme":
      return `The Theme of ${formatted}`;
    case "character":
      return formatted;
    default:
      return formatted;
  }
}
