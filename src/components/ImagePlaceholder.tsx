import Image from "next/image";
import { LogoMark } from "./Logo";
import { getPlaceholder } from "@/data/placeholders";
import { cn } from "@/lib/cn";

type Props = {
  id: string;
  className?: string;
  /** Fill the parent (parent must be positioned and sized). Otherwise uses the registry aspect ratio. */
  fill?: boolean;
  /** Override aspect ratio, e.g. "4 / 5" for a mobile crop. */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  /** Hide the descriptive text (for very small slots). */
  compact?: boolean;
  imgClassName?: string;
  /** Hide the credit chip (e.g. logos). */
  hideCredit?: boolean;
  /** Where to place the credit chip. */
  creditPosition?: "top" | "bottom";
  /** Initials shown when no photo exists yet (portraits). */
  monogram?: string;
};

/** Stand-alone credit chip, for images whose frame moves (parallax) and would clip an inner chip. */
export function PhotoCredit({ id, className }: { id: string; className?: string }) {
  const c = getPlaceholder(id).credit;
  if (!c) return null;
  return (
    <span className={cn("pointer-events-none absolute z-10 max-w-[85%] truncate rounded-full bg-night/55 px-2 py-0.5 text-[10px] leading-4 text-cream/90 backdrop-blur-sm", className)}>
      <span className="sr-only">Photo credit: </span>
      {c.author === "Supplied by the researchers" ? c.where : `${c.author} · ${c.license}`}
    </span>
  );
}

/**
 * Renders the real photo once `src` is set in src/data/placeholders.ts,
 * otherwise an intentional, labelled placeholder that tells the editor
 * exactly what photo belongs here.
 */
export function ImagePlaceholder({
  id,
  className,
  fill,
  aspect,
  sizes = "100vw",
  priority,
  compact,
  imgClassName,
  hideCredit,
  creditPosition = "top",
  monogram,
}: Props) {
  const entry = getPlaceholder(id);
  const style = fill ? undefined : { aspectRatio: aspect ?? entry.ratio.replace(":", " / ") };

  if (entry.src) {
    return (
      <div className={cn("overflow-hidden", fill ? "absolute inset-0" : "relative", className)} style={style}>
        <Image
          src={entry.src}
          alt={entry.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
        {entry.credit && !hideCredit && !compact && (
          <span
            className={cn(
              "pointer-events-none absolute right-2 z-10 max-w-[85%] truncate rounded-full bg-night/55 px-2 py-0.5 text-[10px] leading-4 text-cream/90 backdrop-blur-sm",
              creditPosition === "top" ? "top-2" : "bottom-2",
            )}
          >
            <span className="sr-only">Photo credit: </span>
            {entry.credit.author === "Supplied by the researchers" ? entry.credit.where : `${entry.credit.author} · ${entry.credit.license}`}
          </span>
        )}
      </div>
    );
  }

  // Production fallback: no photo yet → a quiet, branded tile (no editor text shown to visitors).
  return (
    <div
      role="img"
      aria-label={entry.alt}
      data-placeholder-id={entry.id}
      className={cn(
        "@container isolate overflow-hidden bg-gradient-to-br from-sand via-paper to-crisp/25 [.dark-surface_&]:from-ink [.dark-surface_&]:via-night [.dark-surface_&]:to-crisp/30",
        fill ? "absolute inset-0" : "relative",
        className,
      )}
      style={style}
    >
      {monogram ? (
        <div className="grid h-full w-full place-items-center bg-gradient-to-br from-crisp to-brick">
          <span className="font-display text-[clamp(1rem,22cqi,3.25rem)] font-medium tracking-tight text-white/95">{monogram}</span>
        </div>
      ) : (
        <div className="grid h-full w-full place-items-center">
          <LogoMark className="size-[min(38%,7rem)] opacity-25 grayscale-[30%]" />
        </div>
      )}
    </div>
  );
}
