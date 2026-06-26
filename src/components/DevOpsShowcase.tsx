"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Activity,
  Cloud,
  Container,
  GitBranch,
  FolderGit2,
  Package,
  Server,
  User,
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection, SectionHeader } from "./AnimatedSection";
import { AnimePipelineSvg } from "@/components/anime/AnimePipelineSvg";

const stepIcons = [User, FolderGit2, GitBranch, Container, Package, Server, Cloud, Activity];
const stepColors = ["#005151", "#588c7e", "#1a6b6b", "#3d7a6e", "#6b9e8e", "#005151", "#588c7e", "#2d8a6e"];

export function DevOpsShowcase() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(-1);
  const [deployProgress, setDeployProgress] = useState(0);
  const [isDeploying, setIsDeploying] = useState(false);

  const steps = t.devops.steps;

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      setIsDeploying(true);
      setActiveStep(0);
    }, 800);
    return () => clearTimeout(timer);
  }, [isInView]);

  useEffect(() => {
    if (!isDeploying || activeStep < 0) return;
    const stepTimer = setTimeout(() => {
      if (activeStep < steps.length - 1) {
        setActiveStep((prev) => prev + 1);
        setDeployProgress(((activeStep + 2) / steps.length) * 100);
      }
    }, 1200);
    return () => clearTimeout(stepTimer);
  }, [activeStep, isDeploying, steps.length]);

  const restartPipeline = () => {
    setActiveStep(-1);
    setDeployProgress(0);
    setIsDeploying(false);
    setTimeout(() => {
      setIsDeploying(true);
      setActiveStep(0);
    }, 300);
  };

  return (
    <AnimatedSection id="devops" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-light/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t.devops.label}
          title={t.devops.title}
          description={t.devops.description}
        />

        <AnimePipelineSvg />

        <div ref={ref} className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-muted">{t.devops.deploymentProgress}</span>
            <button
              onClick={restartPipeline}
              className="rounded-lg border border-card-border bg-card px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {t.devops.replayPipeline}
            </button>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-accent-light">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
              animate={{ width: `${deployProgress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="mt-2 text-right text-sm text-muted">
            {Math.round(deployProgress)}% {t.devops.complete}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-8">
          {steps.map((step, index) => {
            const StepIcon = stepIcons[index];
            const color = stepColors[index];
            const isActive = index === activeStep;
            const isComplete = index < activeStep;

            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center"
              >
                <motion.div
                  animate={
                    isActive
                      ? {
                          scale: [1, 1.1, 1],
                          boxShadow: [`0 0 0px ${color}00`, `0 0 20px ${color}40`, `0 0 0px ${color}00`],
                        }
                      : {}
                  }
                  transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                  className={`relative mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all ${
                    isComplete
                      ? "border-success/50 bg-success/10"
                      : isActive
                        ? "border-accent bg-accent-light"
                        : "border-card-border bg-card"
                  }`}
                >
                  <StepIcon
                    className="h-7 w-7"
                    style={{ color: isComplete ? "#2d8a6e" : isActive ? color : "#5a7570" }}
                  />
                  {isActive && (
                    <motion.div
                      className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                  {isComplete && (
                    <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-success text-xs text-white">
                      ✓
                    </div>
                  )}
                </motion.div>
                <h4
                  className={`mb-1 text-center text-sm font-medium ${
                    isActive ? "text-accent" : isComplete ? "text-success" : "text-muted"
                  }`}
                >
                  {step.label}
                </h4>
                <p className="text-center text-xs text-muted">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {deployProgress >= 100 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-2xl border border-success/30 bg-success/10 p-6 text-center"
            >
              <div className="mb-2 text-lg font-semibold text-success">
                {t.devops.deploymentSuccess}
              </div>
              <p className="text-sm text-muted">{t.devops.deploymentSuccessDesc}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.devops.metrics.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="rounded-xl border border-card-border bg-card p-6 text-center shadow-sm"
            >
              <div className="mb-1 text-3xl font-bold text-accent">{item.metric}</div>
              <div className="mb-1 font-medium">{item.label}</div>
              <div className="text-sm text-muted">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
