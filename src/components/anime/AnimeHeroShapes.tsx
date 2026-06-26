"use client";

import { useEffect, useRef } from "react";
import { animate, random } from "animejs";

const SHAPES = [
  { className: "top-[12%] left-[8%] h-14 w-14 rounded-xl bg-accent/15", delay: 0 },
  { className: "top-[20%] right-[10%] h-10 w-10 rounded-full bg-accent-secondary/20", delay: 200 },
  { className: "bottom-[30%] left-[12%] h-8 w-8 rotate-45 bg-accent/20", delay: 400 },
  { className: "bottom-[18%] right-[14%] h-16 w-16 rounded-2xl bg-accent-secondary/15", delay: 600 },
  { className: "top-[45%] left-[5%] h-6 w-6 rounded-full bg-accent/25", delay: 800 },
  { className: "top-[55%] right-[6%] h-12 w-12 rounded-lg bg-accent-secondary/18", delay: 1000 },
];

export function AnimeHeroShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = containerRef.current?.querySelectorAll(".anime-hero-shape");
    if (!shapes?.length) return;

    const animations = Array.from(shapes).map((shape) =>
      animate(shape, {
        x: () => random(-48, 48),
        y: () => random(-48, 48),
        rotate: () => random(-180, 180),
        duration: () => random(2500, 4500),
        alternate: true,
        loop: true,
        ease: "inOutExpo",
      }),
    );

    return () => {
      animations.forEach((anim) => anim.revert());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {SHAPES.map((shape, i) => (
        <div
          key={i}
          className={`anime-hero-shape absolute ${shape.className}`}
          style={{ animationDelay: `${shape.delay}ms` }}
        />
      ))}
    </div>
  );
}
