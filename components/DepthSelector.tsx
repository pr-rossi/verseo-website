"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Depth } from "@/lib/types";

interface DepthSelectorProps {
  value: Depth;
  onChange: (depth: Depth) => void;
}

const depths: { value: Depth; label: string; description: string }[] = [
  { value: "brief", label: "Brief", description: "2-3 sentences" },
  { value: "medium", label: "Medium", description: "Short paragraph" },
  { value: "detailed", label: "Detailed", description: "Full context" },
];

export function DepthSelector({ value, onChange }: DepthSelectorProps) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as Depth)}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select depth" />
      </SelectTrigger>
      <SelectContent>
        {depths.map((depth) => (
          <SelectItem key={depth.value} value={depth.value}>
            <div className="flex flex-col">
              <span>{depth.label}</span>
              <span className="text-xs text-muted-foreground">{depth.description}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
