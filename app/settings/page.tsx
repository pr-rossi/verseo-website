"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TonePicker } from "@/components/TonePicker";
import { DepthSelector } from "@/components/DepthSelector";
import type { Tone, Depth, ViewType } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingsPage() {
  const [tone, setTone] = useState<Tone>("balanced");
  const [depth, setDepth] = useState<Depth>("medium");
  const [defaultView, setDefaultView] = useState<ViewType>("books");

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Settings</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Default Tone</CardTitle>
            <CardDescription>
              Choose the default tone for summaries. You can always change this per summary.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TonePicker value={tone} onChange={setTone} />
            <div className="mt-4 rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">
                {tone === "casual" && (
                  <>
                    <strong>Casual:</strong> Witty, modern, and relatable. Think explaining to a
                    friend over coffee.
                  </>
                )}
                {tone === "balanced" && (
                  <>
                    <strong>Balanced:</strong> Clear, accessible, and respectful. Straightforward
                    modern English.
                  </>
                )}
                {tone === "scholarly" && (
                  <>
                    <strong>Scholarly:</strong> Formal, contextual, and nuanced. Includes historical
                    context and theological significance.
                  </>
                )}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Default Depth</CardTitle>
            <CardDescription>
              Choose how detailed summaries should be by default.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DepthSelector value={depth} onChange={setDepth} />
            <div className="mt-4 rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">
                {depth === "brief" && (
                  <>
                    <strong>Brief:</strong> 2-3 sentences. Just the essential gist.
                  </>
                )}
                {depth === "medium" && (
                  <>
                    <strong>Medium:</strong> A short paragraph. Key events, main message, and
                    relevance.
                  </>
                )}
                {depth === "detailed" && (
                  <>
                    <strong>Detailed:</strong> 2-3 paragraphs. Historical context, key details,
                    theological significance.
                  </>
                )}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Default View</CardTitle>
            <CardDescription>
              Choose which view to show when you visit the site.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={defaultView} onValueChange={(v) => setDefaultView(v as ViewType)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select default view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="books">Books</SelectItem>
                <SelectItem value="stories">Stories</SelectItem>
                <SelectItem value="themes">Themes</SelectItem>
                <SelectItem value="characters">Characters</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>
              TL;DR Bible provides AI-generated summaries based on the NASB translation.
              Summaries are designed to make Scripture accessible and engaging while
              remaining faithful to the text.
            </p>
            <p className="mt-4">
              <strong>Note:</strong> These summaries are for study purposes only.
              Always refer to the full Scripture for complete understanding.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
