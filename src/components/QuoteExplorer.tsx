"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { quotes, themes, type ThemeKey } from "@/data/quotes";
import { cn } from "@/lib/cn";
import { easeOut } from "./motion";
import { QuoteBlock } from "./ui";
import { T, type Tri } from "@/lib/i18n";
import { useT } from "@/lib/useLang";

const groupLabels: Record<string, Tri> = {
  All: { en: "All", ceb: "Tanan", fil: "Lahat" },
  "Cultural knowledge": { en: "Cultural knowledge", ceb: "Kahibalo sa kultura", fil: "Kultural na kaalaman" },
  "Pasalubong & sharing": { en: "Pasalubong & sharing", ceb: "Pasalubong ug pagpaambit", fil: "Pasalubong at pagbabahagi" },
  "Everyday life": { en: "Everyday life", ceb: "Adlaw-adlaw nga kinabuhi", fil: "Pang-araw-araw na buhay" },
  Livelihood: { en: "Livelihood", ceb: "Panginabuhian", fil: "Kabuhayan" },
  Identity: { en: "Identity", ceb: "Pagkatawo", fil: "Pagkakakilanlan" },
  Language: { en: "Language", ceb: "Pinulongan", fil: "Wika" },
  Production: { en: "Production", ceb: "Paghimo", fil: "Paggawa" },
  Selling: { en: "Selling", ceb: "Pagbaligya", fil: "Pagbebenta" },
};

const featuredIds = ["r87-identity", "r3-family", "w41-pasalubong", "r90-everyday", "r37-livelihood", "r78-roadside", "r44-identity"];

export function FeaturedQuotes() {
  const featured = featuredIds.map((id) => quotes.find((q) => q.id === id)!);
  const [i, setI] = useState(0);
  const q = featured[i];
  const go = (d: number) => setI((c) => (c + d + featured.length) % featured.length);
  const tt = useT();

  return (
    <div className="dark-surface relative overflow-hidden rounded-[32px] bg-night px-6 py-12 text-cream sm:px-12 sm:py-16 lg:px-20 lg:py-20">
      <div className="min-h-[300px] sm:min-h-[260px]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={q.id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.4, ease: easeOut }}>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-crisp-light">{themes[q.theme].filipino}</p>
            <QuoteBlock quote={q} size="lg" showTheme={false} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-10 flex items-center justify-between gap-4">
        <div className="flex gap-1.5" role="tablist" aria-label="Featured quotes">
          {featured.map((f, n) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={n === i}
              aria-label={`${n + 1} — ${f.code}`}
              onClick={() => setI(n)}
              className="grid h-11 w-6 place-items-center"
            >
              <span className={cn("block h-1.5 rounded-full transition-all duration-300", n === i ? "w-6 bg-crisp-light" : "w-1.5 bg-cream/30")} />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(-1)} aria-label={tt({ en: "Previous quote", ceb: "Miaging kinutlo", fil: "Nakaraang sipi" })} className="grid size-11 place-items-center rounded-full border border-cream/25 hover:bg-cream/10">
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label={tt({ en: "Next quote", ceb: "Sunod nga kinutlo", fil: "Susunod na sipi" })} className="grid size-11 place-items-center rounded-full border border-cream/25 hover:bg-cream/10">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function QuoteExplorer() {
  const groups = useMemo(() => ["All", ...Array.from(new Set(Object.values(themes).map((t) => t.group)))], []);
  const t = useT();
  const [group, setGroup] = useState("All");
  const [theme, setTheme] = useState<ThemeKey | "all">("all");

  const themeOptions = (Object.keys(themes) as ThemeKey[]).filter((k) => group === "All" || themes[k].group === group);
  const list = quotes.filter((q) => (group === "All" || themes[q.theme].group === group) && (theme === "all" || q.theme === theme));

  return (
    <div>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label={t({ en: "Filter by research area", ceb: "Salaa sumala sa bahin sa panukiduki", fil: "Salain ayon sa bahagi ng pananaliksik" })}>
        {groups.map((g) => (
          <button
            key={g}
            type="button"
            aria-pressed={group === g}
            onClick={() => {
              setGroup(g);
              setTheme("all");
            }}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition-colors",
              group === g ? "border-ink bg-ink text-paper" : "border-line bg-surface text-ink-soft hover:text-ink",
            )}
          >
            <T v={groupLabels[g] ?? { en: g, ceb: g, fil: g }} />
          </button>
        ))}
      </div>
      {group !== "All" && themeOptions.length > 1 && (
        <div className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label={t({ en: "Filter by theme", ceb: "Salaa sumala sa tema", fil: "Salain ayon sa tema" })}>
          {[{ k: "all" as const, l: { en: "All themes", ceb: "Tanang tema", fil: "Lahat ng tema" } }, ...themeOptions.map((k) => ({ k, l: { en: themes[k].label, ceb: themes[k].filipino, fil: themes[k].filipino } }))].map((o) => (
            <button
              key={o.k}
              type="button"
              aria-pressed={theme === o.k}
              onClick={() => setTheme(o.k)}
              className={cn(
                "min-h-10 shrink-0 rounded-full px-4 text-[13px] transition-colors",
                theme === o.k ? "bg-crisp text-white" : "bg-sand text-ink-soft hover:text-ink",
              )}
            >
              <T v={o.l} />
            </button>
          ))}
        </div>
      )}

      <p className="mt-6 text-sm text-ink-soft" aria-live="polite">
        {list.length} <T en="verified statements" ceb="beripikadong pamahayag" fil="beripikadong pahayag" />
      </p>

      <motion.ul layout className="mt-6 columns-1 gap-6 md:columns-2 xl:columns-3">
        <AnimatePresence mode="popLayout">
          {list.map((q) => (
            <motion.li
              key={q.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="mb-6 break-inside-avoid rounded-3xl border border-line bg-surface p-6 pt-9"
            >
              <QuoteBlock quote={q} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
