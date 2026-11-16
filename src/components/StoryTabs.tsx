"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { quoteById } from "@/data/quotes";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { easeOut } from "./motion";
import { QuoteBlock } from "./ui";
import { T, type Tri } from "@/lib/i18n";

export type StoryTab = {
  key: string;
  label: Tri;
  filipino: string;
  title: Tri;
  body: Tri[];
  imageId: string;
  quoteIds: string[];
};

/** Tabbed theme explorer: swipeable tab row on mobile, side list on desktop. */
export function StoryTabs({ tabs }: { tabs: StoryTab[] }) {
  const [i, setI] = useState(0);
  const uid = useId();
  const t = tabs[i];

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setI((c) => (c + 1) % tabs.length);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setI((c) => (c - 1 + tabs.length) % tabs.length);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div
        role="tablist"
        aria-label="Themes"
        onKeyDown={onKey}
        className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0"
      >
        {tabs.map((tab, n) => (
          <button
            key={tab.key}
            role="tab"
            id={`${uid}-tab-${n}`}
            aria-selected={n === i}
            aria-controls={`${uid}-panel`}
            tabIndex={n === i ? 0 : -1}
            onClick={() => setI(n)}
            className={cn(
              "group relative shrink-0 rounded-full border px-5 py-3 text-left text-sm font-medium transition-colors lg:rounded-2xl lg:border-0 lg:px-5 lg:py-4",
              n === i ? "border-ink bg-ink text-paper lg:bg-surface lg:text-ink lg:shadow-sm" : "border-line text-ink-soft hover:text-ink lg:hover:bg-surface/60",
            )}
          >
            {n === i && <motion.span layoutId={`${uid}-bar`} className="absolute inset-y-3 left-0 hidden w-[3px] rounded-full bg-crisp lg:block" />}
            <span className="hidden text-[11px] tabular-nums text-ink-faint lg:mr-3 lg:inline">{String(n + 1).padStart(2, "0")}</span>
            <span className="lg:font-display lg:text-xl"><T v={tab.label} /></span>
            <span className="mt-1 hidden text-xs font-normal italic text-ink-faint lg:block">{tab.filipino}</span>
          </button>
        ))}
      </div>

      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${i}`} className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div key={t.key} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: easeOut }}>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-3xl">
                <ImagePlaceholder id={t.imageId} aspect="4 / 5" sizes="(min-width:768px) 35vw, 92vw" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crisp">{t.filipino}</p>
                <h3 className="mt-3 font-display text-3xl leading-tight font-medium sm:text-4xl"><T v={t.title} /></h3>
                <div className="mt-5 space-y-4 text-pretty leading-relaxed text-ink-soft">
                  {t.body.map((b) => (
                    <p key={b.en}>
                      <T v={b} />
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 grid gap-8 border-t border-line pt-10 md:grid-cols-2">
              {t.quoteIds.map((id) => (
                <QuoteBlock key={id} quote={quoteById(id)} showTheme={false} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
