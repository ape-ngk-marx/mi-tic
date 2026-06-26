"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Code, Container, Rocket, Server, Zap } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection, SectionHeader } from "./AnimatedSection";

const areaIcons = [Code, Server, Container];
const areaColors = ["#005151", "#588c7e", "#3d7a6e"];

export function PerformanceEngineering() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <AnimatedSection id="performance" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-light/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t.performance.label}
          title={t.performance.title}
          description={t.performance.description}
        />

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {t.performance.areas.map((area, areaIndex) => {
            const AreaIcon = areaIcons[areaIndex];
            const color = areaColors[areaIndex];
            return (
              <motion.div
                key={area.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: areaIndex * 0.15 }}
                className="rounded-2xl border border-card-border bg-card p-6 shadow-sm"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <AreaIcon className="h-6 w-6" style={{ color }} />
                  </div>
                  <h3 className="text-lg font-semibold">{area.category}</h3>
                </div>
                <div className="space-y-4">
                  {area.principles.map((principle, i) => (
                    <motion.div
                      key={principle.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: areaIndex * 0.15 + i * 0.08 }}
                      className="rounded-lg border border-card-border bg-accent-light/30 p-4 transition-all hover:border-accent/30"
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <Zap className="h-3.5 w-3.5 text-accent" />
                        <span className="text-sm font-medium">{principle.name}</span>
                      </div>
                      <p className="text-xs text-muted">{principle.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div ref={ref} className="rounded-2xl border border-card-border bg-card p-8 shadow-sm">
          <div className="mb-8 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-accent" />
            <h3 className="text-xl font-bold">{t.performance.realImprovements}</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.performance.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl border border-card-border bg-background p-5"
              >
                <div className="mb-3 text-sm font-medium text-muted">{metric.label}</div>
                <div className="mb-3 flex items-end gap-3">
                  <div>
                    <div className="text-xs text-muted">{t.performance.before}</div>
                    <div className="text-lg text-red-500 line-through">{metric.before}</div>
                  </div>
                  <Rocket className="mb-1 h-4 w-4 text-accent" />
                  <div>
                    <div className="text-xs text-muted">{t.performance.after}</div>
                    <div className="text-lg font-bold text-success">{metric.after}</div>
                  </div>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  className="relative h-2 overflow-hidden rounded-full bg-accent-light"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: metric.improvement } : { width: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                  />
                </motion.div>
                <div className="mt-2 text-right text-sm font-bold text-success">
                  {metric.improvement} {t.performance.faster}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
