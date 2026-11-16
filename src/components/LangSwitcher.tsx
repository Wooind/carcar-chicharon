"use client";

import { Languages } from "lucide-react";
import { motion } from "motion/react";
import { LANGS } from "@/lib/i18n";
import { useLang } from "@/lib/useLang";
import { cn } from "@/lib/cn";

/** Segmented EN / Bisaya / Filipino toggle. */
export function LangSwitcher({ className, size = "sm", id = "lang" }: { className?: string; size?: "sm" | "lg"; id?: string }) {
  const [lang, setLang] = useLang();
  return (
    <div role="radiogroup" aria-label="Language / Pinulongan / Wika" className={cn("flex items-center gap-1.5", className)}>
      <Languages aria-hidden className={cn("shrink-0 text-ink-faint", size === "lg" ? "size-5" : "size-4")} />
      <div className="relative flex rounded-full border border-line bg-surface p-0.5">
        {LANGS.map((l) => {
          const active = lang === l.code;
          return (
            <button
              key={l.code}
              type="button"
              role="radio"
              aria-checked={active}
              aria-label={l.label}
              title={l.label}
              onClick={() => setLang(l.code)}
              className={cn(
                "relative z-10 rounded-full font-semibold tracking-wide transition-colors duration-200",
                size === "lg" ? "min-h-11 px-4 text-sm" : "min-h-8 px-2.5 text-[11px]",
                active ? "text-white" : "text-ink-soft hover:text-ink",
              )}
            >
              {active && (
                <motion.span layoutId={`${id}-pill`} className="absolute inset-0 -z-10 rounded-full bg-crisp" transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }} />
              )}
              {size === "lg" ? l.label : l.short}
            </button>
          );
        })}
      </div>
    </div>
  );
}
