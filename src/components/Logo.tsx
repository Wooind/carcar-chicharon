import { cn } from "@/lib/cn";

/**
 * Site mark: a puffed chicharon crackling, drawn as an SVG inside a warm disc.
 * Original artwork for this project.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={cn("size-9 shrink-0", className)}>
      <circle cx="24" cy="24" r="24" fill="var(--color-crisp)" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="var(--color-crisp-light)" strokeOpacity=".45" strokeWidth="1" strokeDasharray="2 3" />
      {/* puffed crackling */}
      <path
        d="M13 27.5c-1.8-1.4-1.6-4.6.8-5.4.2-2.6 2.9-4.1 5.2-2.9 1.2-2.1 4.3-2.5 6-.7 2-1.4 5-.6 5.8 1.6 2.6-.3 4.6 2.1 3.8 4.6 2 1.2 2 4.3-.1 5.3.1 2.3-2.4 3.8-4.5 2.9-1.3 1.6-3.9 1.8-5.3.3-1.7 1.3-4.3.9-5.4-.9-2.3.6-4.6-1-4.3-3.4z"
        fill="#f6d9a8"
      />
      <path d="M15.5 26.5c3-1.2 5.5-.4 8 .6s5.6 1.4 8.5-.3" fill="none" stroke="#c98a3e" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="19" cy="22.6" r="1" fill="#c98a3e" />
      <circle cx="25.6" cy="21.4" r=".9" fill="#c98a3e" />
      <circle cx="30.6" cy="23.6" r="1" fill="#c98a3e" />
      <circle cx="22.4" cy="30" r=".8" fill="#c98a3e" />
    </svg>
  );
}
