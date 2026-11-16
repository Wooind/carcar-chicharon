"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { extraNav, nav, primaryNav } from "@/data/site";
import { T } from "@/lib/i18n";
import { useT } from "@/lib/useLang";
import { cn } from "@/lib/cn";
import { easeOut } from "./motion";
import { LogoMark } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";

const isActive = (path: string, href: string) => (href === "/" ? path === "/" : path.startsWith(href));

export function Header() {
  const pathname = usePathname();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close menus on route change (render-time state adjustment)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setMore(false);
  }

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!more) return;
    const onDown = (e: MouseEvent) => {
      if (!moreRef.current?.contains(e.target as Node)) setMore(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMore(false);
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [more]);

  const primary = nav.filter((n) => primaryNav.includes(n.href));
  const secondary = nav.filter((n) => n.href !== "/" && !primaryNav.includes(n.href));
  const moreActive = secondary.some((n) => isActive(pathname, n.href));

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
          scrolled || open ? "bg-paper/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-paper/0",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-3 px-4 sm:px-6 lg:h-[72px] lg:gap-6 lg:px-10">
          <Link href="/" className="group flex min-w-0 items-center gap-2.5" aria-label="Carcar Chicharon">
            <LogoMark className="size-8 transition-transform duration-300 group-hover:rotate-[-10deg] sm:size-9" />
            <span className="min-w-0 leading-none">
              <span className="block font-display text-[15px] leading-[1.05] font-semibold tracking-tight whitespace-nowrap sm:text-[17px] sm:leading-none">
                Carcar
                <br className="min-[440px]:hidden" />
                <span className="max-[439px]:hidden"> </span>Chicharon
              </span>
              <span className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint sm:block">Wika at Kultura</span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
            {primary.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn("relative rounded-full px-3 py-2 text-[14px] font-medium transition-colors", active ? "text-ink" : "text-ink-soft hover:text-ink")}
                >
                  <T v={item.label} />
                  {active && (
                    <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-crisp" transition={{ duration: 0.35, ease: easeOut }} />
                  )}
                </Link>
              );
            })}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                aria-expanded={more}
                aria-haspopup="true"
                onClick={() => setMore((v) => !v)}
                className={cn("relative flex items-center gap-1 rounded-full px-3 py-2 text-[14px] font-medium transition-colors", moreActive || more ? "text-ink" : "text-ink-soft hover:text-ink")}
              >
                <T en="More" ceb="Uban pa" fil="Iba pa" />
                <ChevronDown aria-hidden className={cn("size-4 transition-transform duration-200", more && "rotate-180")} />
                {moreActive && <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-crisp" />}
              </button>
              <AnimatePresence>
                {more && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-line bg-surface p-2 shadow-xl shadow-ink/10"
                  >
                    {[...secondary, ...extraNav].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive(pathname, item.href) ? "page" : undefined}
                        className={cn(
                          "block rounded-xl px-3.5 py-2.5 text-[14px] transition-colors hover:bg-sand",
                          isActive(pathname, item.href) ? "bg-sand font-semibold text-ink" : "text-ink-soft",
                        )}
                      >
                        <T v={item.label} />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <LangSwitcher id="lang-header" className="[&>svg]:hidden sm:[&>svg]:block" />
            <button
              ref={menuBtn}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t({ en: "Close menu", ceb: "Isira ang menu", fil: "Isara ang menu" }) : t({ en: "Open menu", ceb: "Ablihi ang menu", fil: "Buksan ang menu" })}
              className="grid size-11 place-items-center rounded-full border border-ink/15 bg-surface/70 xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col bg-paper lg:top-[72px] xl:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-end overflow-y-auto px-4 pb-6 sm:px-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
                {[...nav, ...extraNav].map((item, i) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.02 * i, duration: 0.3, ease: easeOut }}
                      className="border-b border-line"
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn("flex min-h-[50px] items-center justify-between font-display text-[21px]", active ? "text-crisp" : "text-ink")}
                      >
                        <T v={item.label} />
                        <span aria-hidden className="font-sans text-xs tabular-nums text-ink-faint">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-6 rounded-2xl border border-line bg-surface p-4">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                  <T en="Language" ceb="Pinulongan" fil="Wika" />
                </p>
                <LangSwitcher id="lang-drawer" size="lg" className="[&>svg]:hidden [&>div]:w-full [&_button]:flex-1" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
