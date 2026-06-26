"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface NavGroup {
  label: string;
  items: NavLink[];
}

function NavDropdown({
  group,
  onNavigate,
}: {
  group: NavGroup;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm text-muted transition-colors hover:bg-accent-light hover:text-accent"
      >
        {group.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute top-full left-0 z-50 mt-1 min-w-[200px] rounded-xl border border-card-border bg-card py-2 shadow-lg"
          >
            {group.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className="block px-4 py-2.5 text-sm text-muted transition-colors hover:bg-accent-light hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DesktopNav({
  primaryLinks,
  groups,
}: {
  primaryLinks: NavLink[];
  groups: NavGroup[];
}) {
  return (
    <>
      {primaryLinks.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-lg px-2.5 py-2 text-sm text-muted transition-colors hover:bg-accent-light hover:text-accent"
        >
          {item.label}
        </a>
      ))}
      {groups.map((group) => (
        <NavDropdown key={group.label} group={group} />
      ))}
    </>
  );
}

export function MobileNavGroups({
  primaryLinks,
  groups,
  onNavigate,
}: {
  primaryLinks: NavLink[];
  groups: NavGroup[];
  onNavigate: () => void;
}) {
  return (
    <>
      {primaryLinks.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="rounded-lg px-3 py-3 text-muted transition-colors hover:bg-accent-light hover:text-accent"
        >
          {item.label}
        </a>
      ))}
      {groups.map((group) => (
        <div key={group.label} className="pt-2">
          <div className="px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase">
            {group.label}
          </div>
          {group.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="block rounded-lg px-3 py-2.5 pl-5 text-sm text-muted transition-colors hover:bg-accent-light hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
      ))}
    </>
  );
}
