"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowRightLeft,
  Boxes,
  Cloud,
  Cog,
  Database,
  Eye,
  FileText,
  Gauge,
  GitBranch,
  Globe,
  Inbox,
  KeyRound,
  Layers,
  Radio,
  Share2,
  Shield,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { systemDesignCards } from "@/data/systemDesign";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection, SectionHeader } from "./AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Boxes,
  Layers,
  Globe,
  Share2,
  KeyRound,
  Shield,
  Zap,
  Inbox,
  Cog,
  Radio,
  ArrowRightLeft,
  GitBranch,
  Database,
  Cloud,
  Gauge,
  FileText,
  Activity,
  Eye,
};

export function SystemDesign() {
  const { t } = useTranslation();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const card = systemDesignCards.find((c) => c.id === selectedCard);

  return (
    <AnimatedSection id="system-design" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t.systemDesign.label}
          title={t.systemDesign.title}
          description={t.systemDesign.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systemDesignCards.map((item, index) => {
            const Icon = iconMap[item.icon] || Boxes;

            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCard(item.id)}
                className="group rounded-2xl border border-card-border bg-card p-6 text-left transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted">{item.summary}</p>
                <div className="mt-4 flex items-center gap-1 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  {t.systemDesign.exploreDetails}
                  <ArrowRightLeft className="h-3 w-3" />
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {card && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-card-border bg-card p-8"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20">
                      {(() => {
                        const Icon = iconMap[card.icon] || Boxes;
                        return <Icon className="h-7 w-7 text-accent" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{card.title}</h3>
                      <p className="text-muted">{card.summary}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="rounded-lg p-2 transition-colors hover:bg-background"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6 leading-relaxed text-muted"
                >
                  {card.details.description}
                </motion.p>

                <div className="space-y-6">
                  {[
                    { title: t.systemDesign.whenToUse, items: card.details.whenToUse, color: "accent" },
                    { title: t.systemDesign.tradeoffs, items: card.details.tradeoffs, color: "warning" },
                    { title: t.systemDesign.keyPatterns, items: card.details.patterns, color: "success" },
                  ].map((section, sIndex) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + sIndex * 0.1 }}
                    >
                      <h4 className="mb-3 font-semibold">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + sIndex * 0.1 + i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
