"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { T } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { easeOut } from "./motion";

export type Step = { title: ReactNode; sub: ReactNode; body: ReactNode };

/** Horizontal step selector (wraps to a swipe row on mobile) with an animated detail panel. */
export function Stepper({ steps, label }: { steps: Step[]; label: string }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div role="tablist" aria-label={label} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:grid sm:px-0" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0,1fr))` }}>
        {steps.map((s, n) => (
          <button
            key={n}
            role="tab"
            aria-selected={n === i}
            onClick={() => setI(n)}
            className={cn(
              "relative min-h-16 shrink-0 rounded-2xl border px-4 py-3 text-left transition-colors duration-200",
              n === i ? "border-crisp bg-crisp text-white" : n < i ? "border-crisp/40 bg-crisp/10" : "border-line bg-surface hover:border-crisp/40",
            )}
          >
            <span className={cn("block text-[10px] font-semibold uppercase tracking-[0.2em]", n === i ? "text-white/75" : "text-ink-faint")}><T en="Stage" ceb="Ang-ang" fil="Yugto" /> {n + 1}</span>
            <span className="block font-display text-lg leading-tight">{s.title}</span>
          </button>
        ))}
      </div>
      <div className="mt-6 h-1 overflow-hidden rounded-full bg-line">
        <motion.div className="h-full origin-left bg-crisp" animate={{ scaleX: (i + 1) / steps.length }} transition={{ duration: 0.45, ease: easeOut }} />
      </div>
      <div role="tabpanel" className="mt-8 min-h-[8rem]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: easeOut }} className="grid gap-4 md:grid-cols-[14rem_1fr]">
            <p className="font-display text-2xl italic text-crisp">{steps[i].sub}</p>
            <p className="text-pretty text-lg leading-relaxed text-ink-soft">{steps[i].body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
