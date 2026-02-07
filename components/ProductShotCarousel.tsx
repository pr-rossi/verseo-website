"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const AUTO_ADVANCE_MS = 2400;
const SLIDE_DURATION_MS = 380;

interface ProductShotCarouselProps {
  images: string[];
}

export function ProductShotCarousel({ images }: ProductShotCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="flex justify-center">
      <div className="w-[200px] md:w-[260px] rounded-[2.5rem] shadow-2xl border-[10px] border-[#1a1a1a] overflow-hidden bg-[#1a1a1a] relative">
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 z-10 w-20 h-6 bg-[#1a1a1a] rounded-full"
          aria-hidden
        />
        <div
          className="flex transition-transform ease-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transitionDuration: `${SLIDE_DURATION_MS}ms`,
          }}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="w-[200px] md:w-[260px] flex-shrink-0 aspect-[9/19] relative overflow-hidden"
            >
              <Image
                src={src}
                alt={`Verseo app screenshot ${i + 1} of ${images.length}`}
                width={520}
                height={1040}
                className="absolute inset-0 w-full h-full object-cover object-top"
                sizes="(max-width: 768px) 200px, 260px"
                priority={i < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
