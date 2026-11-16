"use client";

import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, Globe, MapPin, Phone, Search, SlidersHorizontal, Store, Wifi, X } from "lucide-react";
import { useMemo, useState } from "react";
import { areas, channels, vendors, type Vendor } from "@/data/vendors";
import { cn } from "@/lib/cn";
import { easeOut } from "./motion";
import { T, type Tri } from "@/lib/i18n";
import { useT } from "@/lib/useLang";

const optionLabels: Record<string, Tri> = {
  All: { en: "All", ceb: "Tanan", fil: "Lahat" },
  "Store + online orders": { en: "Store + online orders", ceb: "Tindahan + online nga order", fil: "Tindahan + online na order" },
  "Online / Facebook": { en: "Online / Facebook only", ceb: "Online / Facebook ra", fil: "Online / Facebook lamang" },
  "Carcar City": { en: "Carcar City (no store address listed)", ceb: "Dakbayan sa Carcar (walay adres sa tindahan)", fil: "Lungsod ng Carcar (walang address ng tindahan)" },
};
const label = (o: string): Tri => optionLabels[o] ?? { en: o, ceb: o, fil: o };

export function VendorDirectory() {
  const t = useT();
  const [q, setQ] = useState("");
  const [channel, setChannel] = useState<string>("All");
  const [area, setArea] = useState<string>("All");
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return vendors.filter(
      (v) =>
        (channel === "All" || v.channel === channel) &&
        (area === "All" || v.area === area) &&
        (!term || [v.name, v.area, v.address?.en ?? "", v.note.en].join(" ").toLowerCase().includes(term)),
    );
  }, [q, channel, area]);

  const activeCount = (channel !== "All" ? 1 : 0) + (area !== "All" ? 1 : 0);

  return (
    <div>
      <div className="sticky top-16 z-20 -mx-4 border-b border-line bg-paper/95 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6 lg:static lg:mx-0 lg:rounded-2xl lg:border lg:px-5 lg:shadow-sm">
        <div className="flex gap-3">
          <label className="relative flex-1">
            <span className="sr-only">{t({ en: "Search vendors", ceb: "Pangitaa ang mga tindera", fil: "Hanapin ang mga nagtitinda" })}</span>
            <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t({ en: "Search by name or place", ceb: "Pangitaa ang tindera o lugar", fil: "Hanapin ang tindahan o lugar" })}
              className="h-12 w-full rounded-full border border-line bg-surface pl-11 pr-4 text-[15px] placeholder:text-ink-faint focus:border-crisp focus:outline-none"
            />
          </label>
          <button
            type="button"
            onClick={() => setShowFilters((v) => !v)}
            aria-expanded={showFilters}
            aria-controls="vendor-filters"
            className="relative flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium md:hidden"
          >
            <SlidersHorizontal className="size-4" aria-hidden />
            <T en="Filters" ceb="Mga salaan" fil="Mga filter" />
            {activeCount > 0 && <span className="grid size-5 place-items-center rounded-full bg-crisp text-[11px] text-white">{activeCount}</span>}
          </button>
        </div>

        <div id="vendor-filters" className={cn("mt-4 space-y-3 md:block", showFilters ? "block" : "hidden")}>
          <FilterRow label={{ en: "How they sell", ceb: "Unsaon nila pagbaligya", fil: "Paano sila nagbebenta" }} options={["All", ...channels]} value={channel} onChange={setChannel} />
          <FilterRow label={{ en: "Area", ceb: "Dapit", fil: "Lugar" }} options={["All", ...areas]} value={area} onChange={setArea} />
        </div>

        <div className="mt-3 flex min-h-8 items-center justify-between border-t border-line pt-3 text-sm text-ink-soft" aria-live="polite">
          <p>
            <T en="Showing" ceb="Gipakita" fil="Ipinapakita" /> <strong className="text-ink">{results.length}</strong> / {vendors.length}
          </p>
          {(activeCount > 0 || q) && (
            <button
              type="button"
              onClick={() => {
                setQ("");
                setChannel("All");
                setArea("All");
              }}
              className="inline-flex items-center gap-1 font-medium text-crisp"
            >
              <X className="size-4" aria-hidden /> <T en="Clear" ceb="Hawani" fil="Burahin" />
            </button>
          )}
        </div>
      </div>

      <motion.ul layout className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {results.map((v) => (
            <motion.li
              key={v.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <VendorCard v={v} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {results.length === 0 && (
        <div className="mt-10 rounded-3xl border border-dashed border-line p-10 text-center">
          <p className="font-display text-2xl"><T en="No listings match." ceb="Walay nakit-an." fil="Walang tumugma." /></p>
          <p className="mt-2 text-sm text-ink-soft"><T en="Try a different search or clear the filters." ceb="Sulayi ang laing pangita o hawani ang mga salaan." fil="Subukan ang ibang paghahanap o burahin ang mga filter." /></p>
        </div>
      )}
    </div>
  );
}

function FilterRow({ label: l, options, value, onChange }: { label: Tri; options: readonly string[]; value: string; onChange: (v: string) => void }) {
  const t = useT();
  return (
    <fieldset className="flex flex-col gap-2 md:flex-row md:items-center">
      <legend className="sr-only">{t(l)}</legend>
      <span aria-hidden className="shrink-0 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint md:w-44">
        <T v={l} />
      </span>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:px-0">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className={cn(
              "min-h-10 shrink-0 rounded-full border px-4 text-[13px] font-medium transition-colors",
              value === o ? "border-ink bg-ink text-paper" : "border-line bg-surface text-ink-soft hover:border-ink/40 hover:text-ink",
            )}
          >
            <T v={label(o)} />
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function initials(name: string) {
  return name
    .replace(/['’]s\b/g, "")
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w) && !/^(and|chicharon|special|crispy|pork|city|cebu|&)$/i.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function VendorCard({ v }: { v: Vendor }) {
  const t = useT();
  const hasStore = v.channel === "Store + online orders";
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
      <div className="relative flex items-center gap-4 overflow-hidden bg-gradient-to-br from-crisp to-brick px-5 py-5 text-white">
        <span aria-hidden className="pointer-events-none absolute -right-6 -top-8 size-28 rounded-full bg-white/10" />
        <span aria-hidden className="pointer-events-none absolute -bottom-10 right-10 size-20 rounded-full bg-white/5" />
        <span aria-hidden className="relative grid size-14 shrink-0 place-items-center rounded-2xl bg-white/15 font-display text-2xl ring-1 ring-white/25">
          {initials(v.name)}
        </span>
        <div className="relative min-w-0">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold">
            {hasStore ? <Store className="size-3.5" aria-hidden /> : <Wifi className="size-3.5" aria-hidden />}
            <T v={label(v.channel)} />
          </span>
          <h3 className="mt-2 font-display text-xl leading-tight font-medium">{v.name}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[15px] leading-relaxed text-ink-soft">
          <T v={v.note} />
        </p>

        <dl className="mt-5 space-y-3 border-t border-line pt-4 text-sm">
          <div className="flex gap-3">
            <dt className="mt-0.5 text-crisp">
              <MapPin className="size-4" aria-hidden />
              <span className="sr-only">{t({ en: "Store location", ceb: "Lokasyon sa tindahan", fil: "Lokasyon ng tindahan" })}</span>
            </dt>
            <dd className="text-ink">
              {v.address ? (
                <T v={v.address} />
              ) : (
                <span className="text-ink-faint">
                  <T en="Carcar City — no store address published; order via Facebook." ceb="Dakbayan sa Carcar — walay gipublikar nga adres; order pinaagi sa Facebook." fil="Lungsod ng Carcar — walang nailathalang address; mag-order sa Facebook." />
                </span>
              )}
            </dd>
          </div>
          {v.phone && (
            <div className="flex gap-3">
              <dt className="mt-0.5 text-crisp">
                <Phone className="size-4" aria-hidden />
                <span className="sr-only">{t({ en: "Phone", ceb: "Telepono", fil: "Telepono" })}</span>
              </dt>
              <dd>
                <a href={`tel:${v.phone.replace(/\s/g, "")}`} className="font-medium tabular-nums text-ink hover:text-crisp">
                  {v.phone}
                </a>
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <a
            href={v.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1877F2] px-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <FacebookIcon className="size-4" />
            <T en="Facebook page" ceb="Facebook page" fil="Facebook page" />
          </a>
          {v.phone && (
            <a href={`tel:${v.phone.replace(/\s/g, "")}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium hover:border-crisp hover:text-crisp">
              <Phone className="size-4" aria-hidden />
              <T en="Call" ceb="Tawag" fil="Tumawag" />
            </a>
          )}
          {v.website && (
            <a href={v.website} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium hover:border-crisp hover:text-crisp">
              <Globe className="size-4" aria-hidden />
              <T en="Website" ceb="Website" fil="Website" />
            </a>
          )}
        </div>
        <p className="mt-4 text-[11px] leading-snug text-ink-faint">
          <T en="Source:" ceb="Tinubdan:" fil="Sanggunian:" />{" "}
          <a href={v.source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 underline-offset-2 hover:underline">
            {v.source.label}
            <ExternalLink className="size-3" aria-hidden />
          </a>
        </p>
      </div>
    </article>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}
