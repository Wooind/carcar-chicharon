import { adviser, researchers } from "@/data/site";
import { T } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Stagger, StaggerItem } from "./motion";

/** Circular university logo (cnu-logo in placeholders/photos). */
export function CnuLogo({ size = 96, className }: { size?: number; className?: string }) {
  return (
    <div
      className={cn("relative shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-line [.dark-surface_&]:ring-cream/20", className)}
      style={{ width: size, height: size }}
      title="Cebu Normal University"
    >
      <ImagePlaceholder id="cnu-logo" fill compact sizes={`${size}px`} className="rounded-full" imgClassName="object-contain!" />
    </div>
  );
}

/** Researcher portraits with names below. */
export function ResearchersSection() {
  return (
    <div>
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <CnuLogo size={88} />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crisp">
            <T en="Meet the researchers" ceb="Ilaila ang mga tigsiksik" fil="Kilalanin ang mga mananaliksik" />
          </p>
          <h2 className="mt-2 font-display text-[2rem] leading-[1.05] font-medium sm:text-5xl">
            <T en="The team behind the study" ceb="Ang grupo sa luyo sa pagtuon" fil="Ang pangkat sa likod ng pag-aaral" />
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-ink-soft">
            <T
              en="Bachelor of Arts in Filipino (BSF) researchers of the Departamento ng Filipino — Cebu Normal University, Cebu City."
              ceb="Mga tigsiksik sa Batsilyer sa Arte sa Filipino (BSF) sa Departamento ng Filipino — Cebu Normal University, Dakbayan sa Sugbo."
              fil="Mga mananaliksik ng Batsilyer ng Sining sa Filipino (BSF) ng Departamento ng Filipino — Cebu Normal University, Lungsod ng Cebu."
            />
          </p>
        </div>
      </div>

      <Stagger className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
        {researchers.map((name, i) => (
          <StaggerItem key={name}>
            <figure className="group text-center">
              <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-full ring-1 ring-line transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-ink/10">
                <ImagePlaceholder id={`researcher-${i + 1}`} fill compact monogram={initials(name)} sizes="(min-width:1024px) 220px, 45vw" className="rounded-full" />
              </div>
              <figcaption className="mt-4">
                <p className="font-display text-[17px] leading-snug font-medium sm:text-lg">{name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-faint">
                  <T en="Researcher" ceb="Tigsiksik" fil="Mananaliksik" />
                </p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-line bg-surface p-6 text-center sm:flex-row sm:text-left">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
          <ImagePlaceholder id="researcher-adviser" fill compact monogram={initials(adviser.name)} sizes="80px" className="rounded-full" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">
            <T en="Thesis Adviser" ceb="Magtatambag sa Tesis" fil="Tagapayo ng Tesis" />
          </p>
          <p className="font-display text-xl font-medium">{adviser.name}</p>
          <p className="mt-1 text-sm text-ink-soft">Departamento ng Filipino, Cebu Normal University</p>
        </div>
      </div>
    </div>
  );
}

function initials(name: string) {
  const parts = name.replace(/,.*$/, "").split(/\s+/).filter((w) => /^[A-Z]/.test(w) && !/^[A-Z]\.$/.test(w));
  return ((parts[0]?.[0] ?? "") + (parts.at(-1)?.[0] ?? "")).toUpperCase();
}
