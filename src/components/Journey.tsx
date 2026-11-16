"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./motion";

export type JourneyStep = { kicker: ReactNode; title: ReactNode; text: ReactNode; imageId: string; note?: ReactNode };

/**
 * Desktop (lg+): the section pins and the steps slide horizontally as you scroll.
 * Mobile/tablet: a vertical timeline with a connecting line.
 */
export function Journey({ steps, label }: { steps: JourneyStep[]; label: string }) {
  return (
    <section aria-label={label}>
      <HorizontalJourney steps={steps} />
      <VerticalJourney steps={steps} />
    </section>
  );
}

function HorizontalJourney({ steps }: { steps: JourneyStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div ref={ref} className="relative hidden lg:block" style={{ height: `${steps.length * 75}vh` }}>
      <div className="sticky top-0 flex h-dvh flex-col justify-center overflow-hidden">
        <motion.div ref={track} style={{ x }} className="flex gap-8 pl-10 pr-[18vw] will-change-transform xl:pl-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))]">
          {steps.map((s, i) => (
            <article key={s.imageId} className="flex w-[min(42vw,560px)] shrink-0 flex-col">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-6xl leading-none text-crisp/30 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crisp">{s.kicker}</p>
                  <h3 className="font-display text-4xl font-medium">{s.title}</h3>
                </div>
              </div>
              <div className="relative mt-6 h-[42vh] max-h-[460px] overflow-hidden rounded-3xl">
                <ImagePlaceholder id={s.imageId} fill sizes="45vw" />
              </div>
              <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
              {s.note && <p className="mt-2 max-w-md text-xs text-ink-faint">{s.note}</p>}
            </article>
          ))}
        </motion.div>
        <div className="mx-auto mt-10 w-full max-w-[1320px] px-10">
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-line">
            <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-crisp" />
          </div>
          <div className="mt-3 flex justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
            {steps.map((s) => (
              <span key={s.imageId}>{s.title}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalJourney({ steps }: { steps: JourneyStep[] }) {
  return (
    <ol className="relative mx-auto max-w-xl px-4 sm:px-6 lg:hidden">
      <span aria-hidden className="absolute bottom-6 left-[calc(1rem+15px)] top-6 w-px bg-line sm:left-[calc(1.5rem+15px)]" />
      {steps.map((s, i) => (
        <Reveal as="li" key={s.imageId} className="relative pb-12 pl-12 last:pb-0">
          <span className="absolute left-0 top-0 grid size-8 place-items-center rounded-full bg-crisp text-xs font-semibold text-white tabular-nums">
            {i + 1}
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crisp">{s.kicker}</p>
          <h3 className="mt-1 font-display text-3xl font-medium">{s.title}</h3>
          <div className="relative mt-4 overflow-hidden rounded-2xl">
            <ImagePlaceholder id={s.imageId} aspect="4 / 3" sizes="90vw" />
          </div>
          <p className="mt-4 text-pretty text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
          {s.note && <p className="mt-2 text-xs text-ink-faint">{s.note}</p>}
        </Reveal>
      ))}
    </ol>
  );
}
