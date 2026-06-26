"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection, SectionHeader } from "./AnimatedSection";

function CloudInfraIllustration() {
  return (
    <motion.svg
      viewBox="0 0 200 160"
      className="h-full w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.ellipse
        cx="100" cy="80" rx="70" ry="40"
        fill="#588c7e" fillOpacity="0.15"
        animate={{ rx: [70, 75, 70], ry: [40, 42, 40] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect
        x="60" y="60" width="80" height="50" rx="8"
        fill="#005151" fillOpacity="0.2"
        animate={{ y: [60, 55, 60] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle cx="75" cy="75" r="6" fill="#005151"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle cx="100" cy="75" r="6" fill="#588c7e"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle cx="125" cy="75" r="6" fill="#005151"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      {[40, 100, 160].map((x, i) => (
        <motion.line
          key={x}
          x1={x} y1="120" x2={x} y2="145"
          stroke="#588c7e" strokeWidth="2"
          animate={{ strokeOpacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </motion.svg>
  );
}

function CodeWorkflowIllustration() {
  return (
    <motion.svg viewBox="0 0 200 160" className="h-full w-full">
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x="30" y={30 + i * 28} width={120 - i * 10} height="18" rx="4"
          fill={i % 2 === 0 ? "#005151" : "#588c7e"}
          fillOpacity="0.2"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 120 - i * 10, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
        />
      ))}
      <motion.path
        d="M155 50 L175 65 L155 80"
        stroke="#005151" strokeWidth="3" fill="none"
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle cx="175" cy="65" r="4" fill="#588c7e"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

function PipelineIllustration() {
  return (
    <motion.svg viewBox="0 0 200 160" className="h-full w-full">
      {[20, 70, 120, 170].map((x, i) => (
        <g key={x}>
          <motion.rect
            x={x - 15} y="60" width="30" height="40" rx="6"
            fill={i % 2 === 0 ? "#005151" : "#588c7e"}
            fillOpacity="0.25"
            animate={{ y: [60, 55, 60] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
          {i < 3 && (
            <motion.line
              x1={x + 15} y1="80" x2={x + 55} y2="80"
              stroke="#588c7e" strokeWidth="2"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </g>
      ))}
    </motion.svg>
  );
}

function ScaleIllustration() {
  return (
    <motion.svg viewBox="0 0 200 160" className="h-full w-full">
      <motion.path
        d="M100 30 L100 130"
        stroke="#005151" strokeWidth="2" strokeOpacity="0.3"
      />
      {[0, 1, 2].map((i) => (
        <motion.g key={i}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        >
          <rect
            x={50 + i * 30} y={90 - i * 20} width="40" height="30" rx="4"
            fill={i === 0 ? "#005151" : "#588c7e"}
            fillOpacity={0.15 + i * 0.1}
          />
          <text
            x={70 + i * 30} y={108 - i * 20}
            textAnchor="middle" fontSize="10" fill="#005151"
          >
            {["1x", "10x", "100x"][i]}
          </text>
        </motion.g>
      ))}
    </motion.svg>
  );
}

const illustrations = [
  { component: CloudInfraIllustration, gradient: "from-accent/10 to-accent-secondary/10" },
  { component: CodeWorkflowIllustration, gradient: "from-accent-secondary/10 to-accent/10" },
  { component: PipelineIllustration, gradient: "from-accent/10 to-accent-secondary/15" },
  { component: ScaleIllustration, gradient: "from-accent-secondary/10 to-accent/10" },
];

export function AnimatedImages() {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="gallery" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t.gallery.label}
          title={t.gallery.title}
          description={t.gallery.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {illustrations.map((item, index) => {
            const Illustration = item.component;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group overflow-hidden rounded-2xl border border-card-border bg-gradient-to-br ${item.gradient} bg-card shadow-sm transition-shadow hover:shadow-lg hover:shadow-accent/10`}
              >
                <div className="relative h-48 p-6">
                  <Illustration />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <div className="border-t border-card-border bg-card p-4">
                  <p className="text-sm font-medium text-foreground">
                    {t.gallery.captions[index]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
