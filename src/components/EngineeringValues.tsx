"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Eye,
  Gauge,
  Lock,
  RefreshCw,
  Scale,
  Shield,
  Sparkles,
  TestTube,
  Zap,
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection, SectionHeader } from "./AnimatedSection";

const valueIcons = [Sparkles, RefreshCw, Scale, Lock, Shield, Zap, Eye, BookOpen, TestTube, Gauge];
const valueColors = [
  "#005151", "#1a6b6b", "#588c7e", "#3d7a6e", "#6b9e8e",
  "#005151", "#588c7e", "#1a6b6b", "#3d7a6e", "#6b9e8e",
];

export function EngineeringValues() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <AnimatedSection id="values" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t.values.label}
          title={t.values.title}
          description={t.values.description}
        />

        <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.values.items.map((value, index) => {
            const ValueIcon = valueIcons[index];
            const color = valueColors[index];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                style={{ borderColor: `${color}30` }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${color}12, transparent 70%)`,
                  }}
                />

                <motion.div
                  animate={isInView ? { rotate: [0, 5, -5, 0] } : {}}
                  transition={{ delay: index * 0.08 + 0.5, duration: 0.5 }}
                  className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <ValueIcon className="h-7 w-7" style={{ color }} />
                </motion.div>

                <h3 className="relative mb-2 font-semibold">{value.title}</h3>
                <p className="relative text-sm leading-relaxed text-muted">
                  {value.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 h-0.5"
                  style={{ backgroundColor: color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.3, duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
