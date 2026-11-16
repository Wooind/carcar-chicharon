"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { T, type Tri } from "@/lib/i18n";
import { useT } from "@/lib/useLang";

export type GalleryItem = { id: string; caption: Tri };

/**
 * Editorial gallery. Desktop: asymmetric grid. Mobile: swipeable row.
 * Tap any image to open a fullscreen lightbox with captions and keyboard control.
 */
export function Gallery({ items, className }: { items: GalleryItem[]; className?: string }) {
  const t = useT();
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen((cur) => {
      if (cur !== null) requestAnimationFrame(() => triggers.current[cur]?.focus());
      return null;
    });
  }, []);
  const step = useCallback((d: number) => setOpen((cur) => (cur === null ? cur : (cur + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    closeBtn.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const layout = ["lg:col-span-5 lg:row-span-2", "lg:col-span-4", "lg:col-span-3", "lg:col-span-7"];

  return (
    <>
      <div
        className={cn(
          "no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2",
          "sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-12 lg:gap-5 lg:overflow-visible lg:px-0",
          className,
        )}
      >
        {items.map((item, i) => (
          <figure key={item.id} className={cn("flex w-[78%] shrink-0 snap-center flex-col sm:w-[46%] lg:w-auto", layout[i % layout.length])}>
            <button
              ref={(el) => {
                triggers.current[i] = el;
              }}
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-3xl text-left lg:min-h-0 lg:flex-1"
              aria-label={t(item.caption)}
            >
              <div className="relative aspect-[4/5] w-full transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.04] lg:aspect-auto lg:h-full lg:min-h-[260px]">
                <ImagePlaceholder id={item.id} fill sizes="(min-width:1024px) 40vw, 80vw" />
              </div>
              <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-paper/85 text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand className="size-4" aria-hidden />
              </span>
            </button>
            <figcaption className="mt-3 shrink-0 text-sm leading-snug text-ink-soft"><T v={item.caption} /></figcaption>
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="dark-surface fixed inset-0 z-[80] flex flex-col bg-night/95 text-cream backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <p className="text-sm tabular-nums text-cream/60">
                {open + 1} / {items.length}
              </p>
              <button ref={closeBtn} type="button" onClick={close} aria-label={t({ en: "Close image viewer", ceb: "Isira ang hulagway", fil: "Isara ang larawan" })} className="grid size-11 place-items-center rounded-full bg-cream/10 hover:bg-cream/20">
                <X className="size-5" />
              </button>
            </div>
            <div className="relative flex flex-1 items-center justify-center px-4 sm:px-16" onClick={(e) => e.target === e.currentTarget && close()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={open}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-5xl"
                >
                  <div className="relative mx-auto max-h-[70dvh] w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "4 / 3" }}>
                    <ImagePlaceholder id={items[open].id} fill sizes="90vw" imgClassName="object-contain!" creditPosition="bottom" />
                  </div>
                  <p className="mt-4 text-center text-sm text-cream/80 sm:text-base"><T v={items[open].caption} /></p>
                </motion.div>
              </AnimatePresence>
              <button type="button" onClick={() => step(-1)} aria-label={t({ en: "Previous image", ceb: "Miaging hulagway", fil: "Nakaraang larawan" })} className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 hover:bg-cream/20 sm:left-4">
                <ChevronLeft className="size-5" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label={t({ en: "Next image", ceb: "Sunod nga hulagway", fil: "Susunod na larawan" })} className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 hover:bg-cream/20 sm:right-4">
                <ChevronRight className="size-5" />
              </button>
            </div>
            <div className="h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
