"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Code2 } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection } from "./AnimatedSection";
import { ContactForm } from "./ContactForm";

export function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <AnimatedSection id="contact" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-accent/20 bg-accent-light px-4 py-1.5 text-sm font-medium text-accent">
              {t.contact.label}
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              {t.contact.titleLine1}
              <br />
              <span className="gradient-text">{t.contact.titleHighlight}</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              {t.contact.description}
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm md:p-8">
                <h3 className="mb-6 text-xl font-semibold">{t.contact.getInTouch}</h3>
                <ContactForm />
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-2">
              <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-card-border p-4 transition-all hover:border-accent/40 hover:bg-accent-light"
                >
                  <ExternalLink className="h-5 w-5 text-accent" />
                  <div>
                    <div className="font-medium">{t.contact.linkedin}</div>
                    <div className="text-sm text-muted">linkedin.com</div>
                  </div>
                </a>
              </div>

              <div className="space-y-4 rounded-2xl border border-card-border bg-accent-light/50 p-6">
                <span className="flex items-center gap-2 text-sm text-muted">
                  <MapPin className="h-4 w-4 text-accent" />
                  {t.contact.availableWorldwide}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted">
                  <Code2 className="h-4 w-4 text-accent-secondary" />
                  {t.contact.openSource}
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <footer className="border-t border-card-border bg-card py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="text-sm text-muted">
            &copy; {new Date().getFullYear()} MI-TIC. {t.contact.copyright}
          </div>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#projects" className="transition-colors hover:text-accent">
              {t.contact.footerLinks.projects}
            </a>
            <a href="#architecture" className="transition-colors hover:text-accent">
              {t.contact.footerLinks.architecture}
            </a>
            <a href="#devops" className="transition-colors hover:text-accent">
              {t.contact.footerLinks.devops}
            </a>
            <a href="#contact" className="transition-colors hover:text-accent">
              {t.contact.footerLinks.contact}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
