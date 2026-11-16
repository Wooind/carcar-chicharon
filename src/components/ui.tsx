import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { Quote } from "@/data/quotes";
import { themes } from "@/data/quotes";
import { T } from "@/lib/i18n";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-crisp [.dark-surface_&]:text-crisp-light", className)}>
      <span aria-hidden className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  as: H = "h2",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center [&_p:first-child]:justify-center", className)}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <H className="font-display text-balance text-[2rem] leading-[1.05] font-medium sm:text-5xl lg:text-[3.5rem]">{title}</H>
      {intro && <div className="mt-5 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg [.dark-surface_&]:text-cream/75">{intro}</div>}
    </div>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "ghost" | "light"; className?: string };

/** Button-style link with the arrow nudge micro-interaction. */
export function ButtonLink({ href, children, variant = "primary", className }: BtnProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-colors duration-200",
        variant === "primary" && "bg-crisp text-white hover:bg-crisp-deep",
        variant === "ghost" && "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
        variant === "light" && "border border-cream/40 text-cream hover:bg-cream hover:text-night",
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-1.5 font-medium text-crisp [.dark-surface_&]:text-crisp-light", className)}>
      <span className="link-underline">{children}</span>
      <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

/** A verbatim respondent quotation with its code and an English paraphrase. */
export function QuoteBlock({ quote, size = "md", className, showTheme = true }: { quote: Quote; size?: "md" | "lg"; className?: string; showTheme?: boolean }) {
  return (
    <figure className={cn("relative", className)}>
      <span aria-hidden className="font-display absolute -top-6 -left-1 text-7xl leading-none text-crisp/25 select-none">“</span>
      <blockquote lang={quote.lang.startsWith("Filipino") ? "fil" : "ceb"}>
        <p className={cn("font-display text-pretty italic", size === "lg" ? "text-2xl leading-snug sm:text-[2rem]" : "text-lg leading-snug sm:text-xl")}>
          {quote.text}
        </p>
      </blockquote>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft [.dark-surface_&]:text-cream/70">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-ink-faint [.dark-surface_&]:text-cream/50">
          <T en="EN gist" ceb="Buod (EN)" fil="Buod (EN)" />
        </span>
        {quote.gist}
      </p>
      <figcaption className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
        <span className="rounded-full bg-ink px-2.5 py-1 font-semibold tracking-wide text-paper [.dark-surface_&]:bg-cream [.dark-surface_&]:text-night">
          <T en="Respondent" ceb="Tigtubag" fil="Tagatugon" /> {quote.code}
        </span>
        <span className="text-ink-soft [.dark-surface_&]:text-cream/60">{quote.lang}</span>
        {showTheme && (
          <span className="text-ink-soft [.dark-surface_&]:text-cream/60">
            · <T en={themes[quote.theme].label} ceb={themes[quote.theme].filipino} fil={themes[quote.theme].filipino} />
          </span>
        )}
      </figcaption>
    </figure>
  );
}

/** Visible marker for content the researchers still need to supply. */
export function ContentPlaceholder({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-block rounded-md border border-dashed border-brick/50 bg-brick/5 px-2 py-0.5 font-mono text-[12px] text-brick", className)}>
      {children}
    </span>
  );
}

export function SourceNote({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-xs leading-relaxed text-ink-faint [.dark-surface_&]:text-cream/50", className)}>{children}</p>;
}
