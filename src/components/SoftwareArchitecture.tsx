"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  Box,
  Cloud,
  Container,
  Database,
  GitBranch,
  Globe,
  Lock,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection, SectionHeader } from "./AnimatedSection";

const layerIcons = [Globe, Shield, Server, Lock, Box, Database, Zap, Container, Box, Cloud, Activity, GitBranch];
const layerColors = [
  "#005151", "#1a6b6b", "#588c7e", "#3d7a6e", "#6b9e8e",
  "#005151", "#588c7e", "#1a6b6b", "#3d7a6e", "#6b9e8e", "#005151", "#588c7e",
];

function ArchitectureLayer({
  label,
  description,
  icon: Icon,
  color,
  index,
  total,
  isInView,
}: {
  label: string;
  description: string;
  icon: typeof Globe;
  color: string;
  index: number;
  total: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, scale: 1 }
          : { opacity: 0, x: index % 2 === 0 ? -60 : 60, scale: 0.9 }
      }
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center"
    >
      <motion.div
        animate={
          isInView
            ? {
                boxShadow: [
                  `0 0 0px ${color}00`,
                  `0 0 20px ${color}30`,
                  `0 0 0px ${color}00`,
                ],
              }
            : {}
        }
        transition={{ duration: 2, delay: index * 0.12 + 0.5, repeat: Infinity, repeatDelay: 3 }}
        className="group relative w-full max-w-md rounded-xl border border-card-border bg-card p-4 shadow-sm transition-all hover:shadow-md"
        style={{ borderColor: `${color}40` }}
      >
        <div className="flex items-center gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon className="h-6 w-6" style={{ color }} />
          </div>
          <div>
            <h4 className="font-semibold">{label}</h4>
            <p className="text-sm text-muted">{description}</p>
          </div>
        </div>
      </motion.div>

      {index < total - 1 && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.3 }}
          className="flex flex-col items-center py-2"
          style={{ originY: 0 }}
        >
          <svg width="24" height="32" viewBox="0 0 24 32" className="text-accent-secondary">
            <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="2" className="flow-line" />
            <polygon points="6,20 12,32 18,20" fill="currentColor" opacity="0.6" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
}

export function SoftwareArchitecture() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <AnimatedSection id="architecture" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/60 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t.architecture.label}
          title={t.architecture.title}
          description={t.architecture.description}
        />

        <div ref={ref} className="mx-auto flex max-w-lg flex-col items-center">
          {t.architecture.layers.map((layer, index) => (
            <ArchitectureLayer
              key={layer.label}
              label={layer.label}
              description={layer.description}
              icon={layerIcons[index]}
              color={layerColors[index]}
              index={index}
              total={t.architecture.layers.length}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
