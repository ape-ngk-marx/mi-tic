"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/types";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center rounded-lg border border-card-border bg-card p-0.5">
      {(["en", "fr"] as Locale[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`rounded-md px-3 py-1.5 text-xs font-semibold uppercase transition-all ${
            locale === lang
              ? "bg-accent text-white shadow-sm"
              : "text-muted hover:text-foreground"
          }`}
          aria-label={lang === "en" ? "English" : "Français"}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
