"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Cloud,
  Code,
  Container,
  Layers,
  Rocket,
  Search,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection, SectionHeader } from "./AnimatedSection";

const phaseIcons = [Search, Layers, Code, Container, Cloud, Rocket, TrendingUp];
const phaseColors = ["#005151", "#1a6b6b", "#588c7e", "#3d7a6e", "#6b9e8e", "#005151", "#588c7e"];

export function EngineeringProcess() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <AnimatedSection id="process" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t.process.label}
          title={t.process.title}
          description={t.process.description}
        />

        <div ref={containerRef} className="relative mx-auto max-w-4xl">
          <div className="absolute top-0 left-8 h-full w-0.5 bg-card-border md:left-1/2 md:-ml-px">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-accent to-accent-secondary"
            />
          </div>

          <div className="space-y-12">
            {t.process.phases.map((phase, index) => {
              const PhaseIcon = phaseIcons[index];
              const isEven = index % 2 === 0;
              const color = phaseColors[index];

              return (
                <ProcessPhase
                  key={phase.phase}
                  phase={phase}
                  index={index}
                  isEven={isEven}
                  PhaseIcon={PhaseIcon}
                  color={color}
                  phaseLabel={t.process.phase}
                />
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProcessPhase({
  phase,
  index,
  isEven,
  PhaseIcon,
  color,
  phaseLabel,
}: {
  phase: { phase: string; description: string; items: string[] };
  index: number;
  isEven: boolean;
  PhaseIcon: typeof Search;
  color: string;
  phaseLabel: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex items-center gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`hidden flex-1 md:block ${isEven ? "text-right" : "text-left"}`} />

      <motion.div
        animate={isInView ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 bg-card shadow-sm"
        style={{ borderColor: color }}
      >
        <PhaseIcon className="h-7 w-7" style={{ color }} />
      </motion.div>

      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-card-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
          style={{ borderColor: `${color}30` }}
        >
          <div className="mb-1 text-sm font-medium" style={{ color }}>
            {phaseLabel} {index + 1}
          </div>
          <h3 className="mb-1 text-xl font-bold">{phase.phase}</h3>
          <p className="mb-4 text-muted">{phase.description}</p>
          <div className="flex flex-wrap gap-2">
            {phase.items.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-card-border bg-accent-light/50 px-3 py-1.5 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
