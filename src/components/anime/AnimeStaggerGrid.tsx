"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, stagger } from "animejs";

const GRID_SIZE = 11;

export function AnimeStaggerGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dots = gridRef.current?.querySelectorAll(".anime-dot");
    if (!dots?.length) return;

    const options = { grid: [GRID_SIZE, GRID_SIZE], from: "center" as const };

    const timeline = createTimeline({ loop: true, alternate: true })
      .add(
        dots,
        {
          scale: stagger([1.15, 0.7], options),
          opacity: stagger([1, 0.35], options),
          ease: "inOutQuad",
          duration: 600,
        },
        stagger(80, options),
      )
      .add(
        dots,
        {
          scale: 1,
          opacity: 0.5,
          ease: "outQuad",
          duration: 800,
        },
        stagger(60, { ...options, from: "last" }),
      );

    return () => {
      timeline.revert();
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40"
      aria-hidden
    >
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
          <div
            key={i}
            className="anime-dot h-1.5 w-1.5 rounded-full bg-accent-secondary/60"
          />
        ))}
      </div>
    </div>
  );
}
