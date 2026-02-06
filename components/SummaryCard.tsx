"use client";

import { useState } from "react";
import type { Tone, Depth, ContentType } from "@/lib/types";

interface SummaryCardProps {
  title: string;
  type: ContentType;
  contentKey: string;
  reference?: string;
}

const tones: { value: Tone; label: string; emoji: string }[] = [
  { value: "casual", label: "Casual", emoji: "☕" },
  { value: "balanced", label: "Balanced", emoji: "📖" },
  { value: "scholarly", label: "Scholarly", emoji: "🎓" },
];

const depths: { value: Depth; label: string }[] = [
  { value: "brief", label: "Brief" },
  { value: "medium", label: "Medium" },
  { value: "detailed", label: "Detailed" },
];

export function SummaryCard({
  title,
  type,
  contentKey,
  reference,
}: SummaryCardProps) {
  const [tone, setTone] = useState<Tone>("balanced");
  const [depth, setDepth] = useState<Depth>("medium");
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSummary = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, key: contentKey, tone, depth, reference }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch summary");
      }

      const data = await response.json();
      setSummary(data.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleToneChange = (newTone: Tone) => {
    setTone(newTone);
    if (summary) {
      setSummary(null);
    }
  };

  const handleDepthChange = (newDepth: Depth) => {
    setDepth(newDepth);
    if (summary) {
      setSummary(null);
    }
  };

  return (
    <div className="bg-white border border-[#e8e6dc] rounded-3xl p-6 md:p-8 animate-fade-in">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
        {/* Tone selector */}
        <div className="flex items-center gap-1 p-1 bg-[#f5f4f0] rounded-full">
          {tones.map((t) => (
            <button
              key={t.value}
              onClick={() => handleToneChange(t.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                tone === t.value
                  ? "bg-white shadow-sm text-black scale-105"
                  : "text-[#7B7B7B] hover:text-black"
              }`}
            >
              <span className="mr-1.5">{t.emoji}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Depth selector */}
        <div className="flex items-center gap-1 p-1 bg-[#f5f4f0] rounded-full">
          {depths.map((d) => (
            <button
              key={d.value}
              onClick={() => handleDepthChange(d.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                depth === d.value
                  ? "bg-white shadow-sm text-black scale-105"
                  : "text-[#7B7B7B] hover:text-black"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[200px]">
        {loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 rounded-full bg-[#DDE3D7] animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-5 h-5 rounded-full bg-[#e8e6dc] animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-5 h-5 rounded-full bg-[#cdc4a8] animate-bounce" style={{ animationDelay: '300ms' }} />
              <span className="text-sm text-[#7B7B7B] ml-2">Generating your summary...</span>
            </div>
            <div className="h-4 bg-[#f5f4f0] rounded-full w-full animate-shimmer" />
            <div className="h-4 bg-[#f5f4f0] rounded-full w-full animate-shimmer" style={{ animationDelay: '100ms' }} />
            <div className="h-4 bg-[#f5f4f0] rounded-full w-5/6 animate-shimmer" style={{ animationDelay: '200ms' }} />
            <div className="h-4 bg-[#f5f4f0] rounded-full w-4/6 animate-shimmer" style={{ animationDelay: '300ms' }} />
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-[200px] gap-4 animate-fade-in">
            <p className="text-red-600 text-sm">{error}</p>
            <button
              onClick={fetchSummary}
              className="text-sm text-[#7B7B7B] hover:text-black transition-colors"
            >
              Try again
            </button>
          </div>
        ) : summary ? (
          <div className="animate-fade-in">
            <p className="text-[17px] leading-relaxed text-[#333] whitespace-pre-wrap">
              {summary}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
            <p className="text-[#7B7B7B] text-center max-w-sm">
              Ready to get the TL;DR? Pick your tone and depth above, then hit the button.
            </p>
            <button
              onClick={fetchSummary}
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#333] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>✨</span>
              Generate summary
            </button>
          </div>
        )}
      </div>

      {/* Regenerate button */}
      {summary && (
        <div className="mt-6 pt-6 border-t border-[#e8e6dc] animate-fade-in">
          <button
            onClick={fetchSummary}
            disabled={loading}
            className="text-sm text-[#7B7B7B] hover:text-black transition-colors inline-flex items-center gap-2 hover:gap-3"
          >
            <span className="transition-transform hover:rotate-180 duration-300">↻</span>
            Regenerate
          </button>
        </div>
      )}
    </div>
  );
}
