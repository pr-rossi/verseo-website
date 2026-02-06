import { NextRequest, NextResponse } from "next/server";
import { generateSummary } from "@/lib/ai";
import type { SummaryRequest, SummaryResponse, ContentType, Tone, Depth } from "@/lib/types";

// Only import db/cache if configured
const hasDatabase = !!process.env.DATABASE_URL;
const hasCache = !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SummaryRequest;
    const { type, key, tone, depth, reference } = body;

    // Validate input
    if (!type || !key || !tone || !depth) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const validTypes: ContentType[] = ["book", "chapter", "story", "theme", "character"];
    const validTones: Tone[] = ["casual", "balanced", "scholarly"];
    const validDepths: Depth[] = ["brief", "medium", "detailed"];

    if (!validTypes.includes(type)) {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }
    if (!validTones.includes(tone)) {
      return NextResponse.json({ error: "Invalid tone" }, { status: 400 });
    }
    if (!validDepths.includes(depth)) {
      return NextResponse.json({ error: "Invalid depth" }, { status: 400 });
    }

    // 1. Check Redis cache first (if configured)
    if (hasCache) {
      try {
        const { getCachedSummary } = await import("@/lib/cache");
        const cached = await getCachedSummary(type, key, tone, depth);
        if (cached) {
          return NextResponse.json({
            content: cached,
            cached: true,
          } as SummaryResponse);
        }
      } catch (e) {
        console.warn("Cache check failed, continuing without cache");
      }
    }

    // 2. Check database for pre-generated summary (if configured)
    if (hasDatabase) {
      try {
        const { prisma } = await import("@/lib/db");
        const dbSummary = await prisma.summary.findUnique({
          where: {
            type_key_tone_depth: { type, key, tone, depth },
          },
        });

        if (dbSummary) {
          // Cache it for faster access next time
          if (hasCache) {
            try {
              const { setCachedSummary } = await import("@/lib/cache");
              await setCachedSummary(type, key, tone, depth, dbSummary.content);
            } catch (e) {
              // Ignore cache errors
            }
          }

          return NextResponse.json({
            content: dbSummary.content,
            cached: true,
          } as SummaryResponse);
        }
      } catch (e) {
        console.warn("Database check failed, continuing to AI generation");
      }
    }

    // 3. Generate new summary via AI
    const content = await generateSummary({ type, key, tone, depth, reference });

    // Store in cache (if configured)
    if (hasCache) {
      try {
        const { setCachedSummary } = await import("@/lib/cache");
        await setCachedSummary(type, key, tone, depth, content);
      } catch (e) {
        // Ignore cache errors
      }
    }

    return NextResponse.json({
      content,
      cached: false,
      generatedAt: new Date().toISOString(),
    } as SummaryResponse);
  } catch (error) {
    console.error("Summary API error:", error);
    return NextResponse.json(
      { error: "Failed to generate summary" },
      { status: 500 }
    );
  }
}
