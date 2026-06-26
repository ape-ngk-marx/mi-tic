"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Code2,
  GitBranch,
  Layers,
  Smartphone,
  Server,
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimeHeroShapes } from "@/components/anime/AnimeHeroShapes";
import { AnimeStaggerGrid } from "@/components/anime/AnimeStaggerGrid";
import { AnimeStats } from "@/components/anime/AnimeStats";

const capabilityIcons = [Code2, Cloud, Layers, Smartphone, Server, GitBranch];

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg" />
      <AnimeStaggerGrid />
      <AnimeHeroShapes />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-light px-4 py-2 text-sm text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {t.hero.available}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-4 text-2xl font-bold tracking-widest text-accent md:text-3xl"
          >
            {t.hero.companyName}
          </motion.div>

          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {t.hero.titleLine1}
            <br />
            <span className="gradient-text">{t.hero.titleHighlight}</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-medium text-white transition-all hover:bg-accent-secondary hover:shadow-lg hover:shadow-accent/20"
            >
              {t.hero.viewCaseStudies}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#founder"
              className="rounded-xl border border-card-border bg-card px-8 py-4 font-medium transition-all hover:border-accent/40 hover:bg-accent-light"
            >
              {t.hero.meetFounder}
            </a>
          </div>

          <AnimeStats stats={t.hero.stats} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {t.hero.capabilities.map((cap, i) => {
              const Icon = capabilityIcons[i];
              return (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.05 }}
                  className="flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-2 text-sm text-muted shadow-sm"
                >
                  <Icon className="h-4 w-4 text-accent-secondary" />
                  {cap}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
