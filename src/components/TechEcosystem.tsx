"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Lightbulb, Star, Target } from "lucide-react";
import { techCategories } from "@/data/techEcosystem";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection, SectionHeader } from "./AnimatedSection";

const categoryColors: Record<string, string> = {
  frontend: "#005151",
  backend: "#588c7e",
  databases: "#3d7a6e",
  cloud: "#1a6b6b",
  devops: "#005151",
  monitoring: "#588c7e",
  architecture: "#6b9e8e",
};

export function TechEcosystem() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(techCategories[0].id);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const category = techCategories.find((c) => c.id === activeCategory)!;
  const tech = category.technologies.find((item) => item.name === hoveredTech);
  const color = categoryColors[activeCategory] || "#005151";

  return (
    <AnimatedSection id="tech-ecosystem" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-light/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t.techEcosystem.label}
          title={t.techEcosystem.title}
          description={t.techEcosystem.description}
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setHoveredTech(null);
              }}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "border border-card-border bg-card text-muted hover:border-accent/30 hover:text-accent"
              }`}
            >
              {t.techEcosystem.categories[cat.id] || cat.title}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {category.technologies.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredTech(item.name)}
                onClick={() => setHoveredTech(item.name)}
                className={`rounded-xl border px-6 py-4 text-left transition-all ${
                  hoveredTech === item.name
                    ? "border-accent bg-accent-light shadow-md"
                    : "border-card-border bg-card hover:border-accent/30"
                }`}
              >
                <div className="font-semibold">{item.name}</div>
                <div className="text-xs text-muted">{item.experience}</div>
              </motion.button>
            ))}
          </motion.div>

          <div className="min-h-[320px]">
            <AnimatePresence mode="wait">
              {tech ? (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-card-border bg-card p-6 shadow-sm"
                >
                  <h3 className="mb-6 text-2xl font-bold text-accent">{tech.name}</h3>

                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-muted" />
                      <span className="text-sm">
                        <span className="text-muted">{t.techEcosystem.experience}: </span>
                        <span className="font-medium">{tech.experience}</span>
                      </span>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <Target className="h-4 w-4 text-accent" />
                        {t.techEcosystem.useCases}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tech.useCases.map((uc) => (
                          <span
                            key={uc}
                            className="rounded-lg border border-card-border bg-accent-light/50 px-3 py-1 text-xs text-muted"
                          >
                            {uc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <Lightbulb className="h-4 w-4 text-accent-secondary" />
                        {t.techEcosystem.why}
                      </div>
                      <p className="text-sm leading-relaxed text-muted">{tech.why}</p>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <Star className="h-4 w-4 text-success" />
                        {t.techEcosystem.bestPractices}
                      </div>
                      <ul className="space-y-1.5">
                        {tech.bestPractices.map((bp) => (
                          <li key={bp} className="flex items-start gap-2 text-sm text-muted">
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary"
                            />
                            {bp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-card-border bg-card/50 p-6"
                >
                  <p className="text-center text-muted">{t.techEcosystem.hoverHint}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
