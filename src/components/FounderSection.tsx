"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Code2, Briefcase } from "lucide-react";
import { founder, getExperiences } from "@/data/company";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection, SectionHeader } from "./AnimatedSection";

export function FounderSection() {
  const { t, locale } = useTranslation();
  const experiences = getExperiences(locale);

  return (
    <AnimatedSection id="founder" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/60 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t.founder.label}
          title={t.founder.title}
          description={t.founder.description}
        />

        <div className="mb-16 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-card-border bg-card p-8 shadow-sm">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent text-3xl font-bold text-white">
                MN
              </div>
              <h3 className="mb-1 text-2xl font-bold">{founder.name}</h3>
              <p className="mb-4 font-medium text-accent-secondary">{t.founder.founderTitle}</p>
              <p className="mb-6 text-sm leading-relaxed text-muted">{t.founder.bio}</p>

              <div className="mb-6 flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                {founder.location}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-secondary"
                >
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-card-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <Code2 className="h-4 w-4" />
                  GitHub
                </a>
              </div>

              <div className="mt-6 rounded-xl border border-accent/20 bg-accent-light p-4">
                <p className="text-sm font-medium text-accent">{t.founder.remoteMissions}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <Briefcase className="h-5 w-5 text-accent" />
              {t.founder.experienceTitle}
            </h4>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-xl border border-card-border bg-card p-5 shadow-sm transition-all hover:border-accent/30 hover:shadow-md"
                >
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h5 className="font-semibold text-accent">{exp.company}</h5>
                      <p className="text-sm font-medium">{exp.role}</p>
                    </div>
                    <div className="text-right text-xs text-muted">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <p className="mb-3 text-sm text-muted">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
