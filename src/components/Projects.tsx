"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Code,
  Lightbulb,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { projects } from "@/data/projects";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection, SectionHeader } from "./AnimatedSection";

export function Projects() {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <AnimatedSection id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t.projects.label}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(i)}
              className={`rounded-xl px-5 py-3 text-sm font-medium transition-all ${
                activeProject === i
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "border border-card-border bg-card text-muted hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                {project.industry}
              </span>
              <span className="text-sm text-muted">{project.client}</span>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">{t.projects.businessProblem}</h3>
                </div>
                <p className="leading-relaxed text-muted">{project.businessProblem}</p>
              </div>

              <div className="rounded-2xl border border-accent/20 bg-accent-light p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15">
                    <Lightbulb className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{t.projects.solution}</h3>
                </div>
                <p className="mb-4 leading-relaxed text-muted">
                  {project.solution.overview}
                </p>
                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-2 text-sm font-medium text-accent">
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    {t.projects.architectureDecisions}
                  </summary>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="mb-2 text-sm font-medium">{t.projects.architecture}</h4>
                      <ul className="space-y-2">
                        {project.solution.architecture.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-medium">{t.projects.keyDecisions}</h4>
                      <ul className="space-y-2">
                        {project.solution.decisions.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <Target className="mt-0.5 h-4 w-4 shrink-0 text-accent-secondary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-card-border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Code className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold">{t.projects.technologies}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-card-border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-warning" />
                  <h3 className="font-semibold">{t.projects.challengesSolved}</h3>
                </div>
                <div className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <div key={i}>
                      <span className="mb-1 inline-block rounded bg-warning/10 px-2 py-0.5 text-xs font-medium text-warning">
                        {challenge.category}
                      </span>
                      <p className="text-sm text-muted">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-success/30 bg-green-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-success" />
                  <h3 className="font-semibold">{t.projects.results}</h3>
                </div>
                <div className="space-y-4">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <div>
                        <div className="font-semibold text-success">
                          {result.value}{" "}
                          <span className="text-sm font-normal text-foreground">
                            {result.metric}
                          </span>
                        </div>
                        <p className="text-sm text-muted">{result.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
