import type { ReactNode } from "react";
import { ImagePlaceholder, PhotoCredit } from "./ImagePlaceholder";
import { Parallax, Reveal } from "./motion";
import { Container, Eyebrow } from "./ui";

/** Editorial split hero used by inner pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  imageId,
  index,
  children,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  intro: ReactNode;
  imageId: string;
  index?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-14 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>
                {index && <span className="tabular-nums">{index}</span>}
                {eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-balance text-[2.6rem] leading-[1.02] font-medium sm:text-6xl lg:text-[4.6rem]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-ink-soft sm:text-lg">{intro}</div>
            </Reveal>
            {children && <Reveal delay={0.18} className="mt-8">{children}</Reveal>}
          </div>
          <Reveal delay={0.1} className="relative lg:col-span-6">
            <Parallax className="aspect-[4/3] rounded-[28px] lg:aspect-[5/4]" amount={40} overlay={<PhotoCredit id={imageId} className="bottom-3 right-3" />}>
              <ImagePlaceholder id={imageId} fill priority hideCredit sizes="(min-width: 1024px) 50vw, 100vw" />
            </Parallax>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
