import { Redis } from "@upstash/redis";
import type { ContentType, Tone, Depth } from "./types";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const CACHE_TTL = 60 * 60 * 24 * 30; // 30 days in seconds

function getCacheKey(type: ContentType, key: string, tone: Tone, depth: Depth): string {
  return `summary:${type}:${key}:${tone}:${depth}`;
}

export async function getCachedSummary(
  type: ContentType,
  key: string,
  tone: Tone,
  depth: Depth
): Promise<string | null> {
  try {
    const cacheKey = getCacheKey(type, key, tone, depth);
    const cached = await redis.get<string>(cacheKey);
    return cached;
  } catch (error) {
    console.error("Cache get error:", error);
    return null;
  }
}

export async function setCachedSummary(
  type: ContentType,
  key: string,
  tone: Tone,
  depth: Depth,
  content: string
): Promise<void> {
  try {
    const cacheKey = getCacheKey(type, key, tone, depth);
    await redis.set(cacheKey, content, { ex: CACHE_TTL });
  } catch (error) {
    console.error("Cache set error:", error);
  }
}

export async function invalidateSummary(
  type: ContentType,
  key: string,
  tone?: Tone,
  depth?: Depth
): Promise<void> {
  try {
    if (tone && depth) {
      const cacheKey = getCacheKey(type, key, tone, depth);
      await redis.del(cacheKey);
    } else {
      // Invalidate all variations
      const tones: Tone[] = ["casual", "balanced", "scholarly"];
      const depths: Depth[] = ["brief", "medium", "detailed"];

      for (const t of tones) {
        for (const d of depths) {
          const cacheKey = getCacheKey(type, key, t, d);
          await redis.del(cacheKey);
        }
      }
    }
  } catch (error) {
    console.error("Cache invalidate error:", error);
  }
}
