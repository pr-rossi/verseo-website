"use client";

import { Button } from "@/components/ui/button";
import type { Tone } from "@/lib/types";
import { Coffee, BookOpen, GraduationCap } from "lucide-react";

interface TonePickerProps {
  value: Tone;
  onChange: (tone: Tone) => void;
}

const tones: { value: Tone; label: string; icon: React.ReactNode; description: string }[] = [
  {
    value: "casual",
    label: "Casual",
    icon: <Coffee className="h-4 w-4" />,
    description: "Witty & modern",
  },
  {
    value: "balanced",
    label: "Balanced",
    icon: <BookOpen className="h-4 w-4" />,
    description: "Clear & accessible",
  },
  {
    value: "scholarly",
    label: "Scholarly",
    icon: <GraduationCap className="h-4 w-4" />,
    description: "Formal & contextual",
  },
];

export function TonePicker({ value, onChange }: TonePickerProps) {
  return (
    <div className="flex gap-2">
      {tones.map((tone) => (
        <Button
          key={tone.value}
          variant={value === tone.value ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(tone.value)}
          className="flex items-center gap-2"
        >
          {tone.icon}
          <span className="hidden sm:inline">{tone.label}</span>
        </Button>
      ))}
    </div>
  );
}
