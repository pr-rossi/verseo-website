import Anthropic from "@anthropic-ai/sdk";
import { generateSummaryPrompt } from "./prompts";
import type { SummaryRequest } from "./types";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function generateSummary(request: SummaryRequest): Promise<string> {
  const prompt = generateSummaryPrompt({
    type: request.type,
    key: request.key,
    tone: request.tone,
    depth: request.depth,
    reference: request.reference,
  });

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const textBlock = message.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("No text response from AI");
  }

  return textBlock.text;
}
