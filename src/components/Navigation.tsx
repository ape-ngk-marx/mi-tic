"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Code2,
  Layers,
  GitBranch,
  Cpu,
  Gauge,
  Heart,
  Network,
  Briefcase,
  Image,
  Video,
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navigation() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.nav.projects, href: "#projects", icon: Briefcase },
    { label: t.nav.architecture, href: "#architecture", icon: Layers },
    { label: t.nav.process, href: "#process", icon: GitBranch },
    { label: t.nav.devops, href: "#devops", icon: Cpu },
    { label: t.nav.systemDesign, href: "#system-design", icon: Network },
    { label: t.nav.performance, href: "#performance", icon: Gauge },
    { label: t.nav.values, href: "#values", icon: Heart },
    { label: t.nav.gallery, href: "#gallery", icon: Image },
    { label: t.nav.tiktok, href: "#tiktok", icon: Video },
    { label: t.nav.techStack, href: "#tech-ecosystem", icon: Code2 },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-card-border bg-card/90 shadow-sm backdrop-blur-xl"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15">
            <Code2 className="h-5 w-5 text-accent" />
          </div>
          <span className="text-lg font-bold text-accent">MI-TIC</span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-2 text-sm text-muted transition-colors hover:bg-accent-light hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#contact"
            className="ml-2 rounded-lg bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-secondary"
          >
            {t.nav.letsTalk}
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2"
            aria-label={t.nav.toggleMenu}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-card-border bg-card/95 backdrop-blur-xl xl:hidden"
          >
            <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted transition-colors hover:bg-accent-light hover:text-accent"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg bg-accent px-5 py-3 text-center text-sm font-medium text-white"
              >
                {t.nav.letsTalk}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
