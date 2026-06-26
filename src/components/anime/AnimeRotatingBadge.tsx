"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function AnimeRotatingBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const square = badgeRef.current;
    if (!square) return;

    const animation = animate(square, {
      rotate: 360,
      duration: 8000,
      loop: true,
      ease: "linear",
    });

    return () => {
      animation.revert();
    };
  }, []);

  return (
    <div
      ref={badgeRef}
      className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent-light shadow-sm"
      aria-hidden
    >
      <div className="h-4 w-4 rounded-sm bg-accent/40" />
    </div>
  );
}
