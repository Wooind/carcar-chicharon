import { createElement, type ReactNode } from "react";

/**
 * Three-language support: English (en), Bisaya / Cebuano (ceb), Filipino (fil).
 *
 * <T en="…" ceb="…" fil="…" /> renders all three versions; CSS (globals.css) shows
 * only the active one based on <html data-lang>. A tiny inline script in the root
 * layout restores the visitor's choice before first paint (no flash, fully static).
 * Client components that need a plain string (aria-labels, placeholders) use useT().
 */

export type Lang = "en" | "ceb" | "fil";
export type Tri = { en: string; ceb: string; fil: string };

export const LANGS: { code: Lang; short: string; label: string; htmlLang: string }[] = [
  { code: "en", short: "EN", label: "English", htmlLang: "en" },
  { code: "ceb", short: "BIS", label: "Bisaya", htmlLang: "ceb" },
  { code: "fil", short: "FIL", label: "Filipino", htmlLang: "fil" },
];

export const tr = (en: string, ceb: string, fil: string): Tri => ({ en, ceb, fil });

type TProps = { en: ReactNode; ceb?: ReactNode; fil?: ReactNode } | { v: Tri };

/** Renders all languages; CSS reveals the active one. Safe in server components. */
export function T(props: TProps) {
  const v = "v" in props ? props.v : props;
  const ceb = v.ceb ?? v.en;
  const fil = v.fil ?? v.en;
  return (
    <>
      {createElement("span", { "data-l": "en", lang: "en" }, v.en)}
      {createElement("span", { "data-l": "ceb", lang: "ceb" }, ceb)}
      {createElement("span", { "data-l": "fil", lang: "fil" }, fil)}
    </>
  );
}

/** Inline script for <head>: apply saved language before paint. */
export const langBootScript = `try{var l=localStorage.getItem("lang");if(l==="ceb"||l==="fil"){var h=document.documentElement;h.dataset.lang=l;h.lang=l;}}catch(e){}`;
