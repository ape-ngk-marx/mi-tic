"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

interface AnimeStatsProps {
  stats: { value: string; label: string }[];
}

export function AnimeStats({ stats }: AnimeStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".anime-stat-card");
    if (!cards?.length) return;

    const animation = animate(cards, {
      translateY: [24, 0],
      opacity: [0, 1],
      delay: stagger(120),
      duration: 900,
      ease: "outExpo",
    });

    return () => {
      animation.revert();
    };
  }, [stats]);

  return (
    <div
      ref={containerRef}
      className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="anime-stat-card rounded-xl border border-card-border bg-card p-4 opacity-0 shadow-sm"
        >
          <div className="text-2xl font-bold text-accent md:text-3xl">
            {stat.value}
          </div>
          <div className="text-sm text-muted">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
