"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { tiktokVideos } from "@/data/tiktokVideos";
import { useTranslation } from "@/i18n/LanguageProvider";
import { AnimatedSection, SectionHeader } from "./AnimatedSection";

function TikTokEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-accent-light">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg"
          >
            <Play className="h-6 w-6 fill-white" />
          </motion.div>
        </div>
      )}
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videoId}?lang=en-US`}
        title={title}
        className="aspect-[9/16] w-full max-h-[580px] border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export function TikTokShowcase() {
  const { t, locale } = useTranslation();

  return (
    <AnimatedSection id="tiktok" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/50 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t.tiktok.label}
          title={t.tiktok.title}
          description={t.tiktok.description}
        />

        {tiktokVideos.length === 0 ? (
          <p className="text-center text-muted">{t.tiktok.noVideos}</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tiktokVideos.map((video, index) => {
              const title =
                locale === "fr" && video.titleFr ? video.titleFr : video.title;

              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <TikTokEmbed videoId={video.videoId} title={title} />
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <h3 className="font-semibold leading-snug">{title}</h3>
                    <a
                      href={`https://www.tiktok.com/video/${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex shrink-0 items-center gap-1 text-sm text-accent transition-colors hover:text-accent-secondary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="hidden sm:inline">{t.tiktok.watchOnTiktok}</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
