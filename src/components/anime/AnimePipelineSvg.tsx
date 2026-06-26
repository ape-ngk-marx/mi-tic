"use client";

import { useEffect, useRef } from "react";
import { animate, createDrawable, onScroll } from "animejs";

export function AnimePipelineSvg() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const path = svgRef.current?.querySelector(".anime-pipeline-path");
    if (!path) return;

    const drawable = createDrawable(path);
    const animation = animate(drawable, {
      draw: ["0 0", "0 1", "1 1"],
      duration: 2400,
      ease: "inOut(3)",
      autoplay: onScroll({ target: svgRef.current!, sync: true }),
    });

    return () => {
      animation.revert();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 80"
      className="mx-auto mb-8 h-16 w-full max-w-2xl text-accent/40"
      aria-hidden
    >
      <path
        className="anime-pipeline-path"
        d="M 20 40 C 80 10, 120 70, 180 40 S 300 10, 380 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="20" cy="40" r="6" className="fill-accent/30" />
      <circle cx="380" cy="40" r="6" className="fill-accent-secondary/40" />
    </svg>
  );
}
