"use client";

import { useCallback, useSyncExternalStore } from "react";
import { LANGS, type Lang, type Tri } from "./i18n";

const EVENT = "langchange";

function read(): Lang {
  const l = document.documentElement.dataset.lang;
  return l === "ceb" || l === "fil" ? l : "en";
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}

export function useLang(): [Lang, (l: Lang) => void] {
  const lang = useSyncExternalStore(subscribe, read, () => "en" as Lang);
  const set = useCallback((l: Lang) => {
    const html = document.documentElement;
    html.dataset.lang = l;
    html.lang = LANGS.find((x) => x.code === l)!.htmlLang;
    try {
      localStorage.setItem("lang", l);
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  }, []);
  return [lang, set];
}

/** For plain strings in client components (aria-label, placeholder, etc.). */
export function useT() {
  const [lang] = useLang();
  return (v: Tri) => v[lang];
}

