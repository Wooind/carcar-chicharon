import Link from "next/link";
import { adviser, extraNav, nav, researchers, site } from "@/data/site";
import { T } from "@/lib/i18n";
import { CnuLogo } from "./Researchers";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { LogoMark } from "./Logo";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="dark-surface mt-auto bg-night text-cream">
      <Container className="pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <LogoMark className="size-12" />
            <p className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
              <T en="More than a crunch." ceb="Labaw pa sa langutngot." fil="Higit pa sa lutong." />
              <br />
              <span className="text-crisp-light">
                <T en="A taste of Carcar." ceb="Usa ka lami sa Carcar." fil="Isang lasa ng Carcar." />
              </span>
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
              <T
                en="A digital cultural platform for Carcar Chicharon — its place in Carcar's identity, family traditions, pasalubong culture, livelihood and tourism. The proposed digital output of a Cebu Normal University study."
                ceb="Usa ka digital nga plataporma sa kultura alang sa Chicharon sa Carcar — ang dapit niini sa pagkatawo sa Carcar, tradisyon sa pamilya, kultura sa pasalubong, panginabuhian ug turismo. Ang gisugyot nga digital nga output sa usa ka pagtuon sa Cebu Normal University."
                fil="Isang digital na plataporma ng kultura para sa Chicharon ng Carcar — ang lugar nito sa pagkakakilanlan ng Carcar, tradisyon ng pamilya, kultura ng pasalubong, kabuhayan at turismo. Ang iminungkahing digital na output ng isang pag-aaral ng Cebu Normal University."
              />
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/55">
              <T en="Explore" ceb="Susiha" fil="Galugarin" />
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
              {[...nav, ...extraNav].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline inline-flex min-h-9 items-center text-cream/80 hover:text-cream">
                    <T v={n.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/55">
              <T en="The study" ceb="Ang pagtuon" fil="Ang pag-aaral" />
            </h2>
            <p className="font-display text-lg leading-snug italic">{site.studyTitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">{site.institution}</p>
            <p className="mt-2 text-sm text-cream/70">{site.degree}</p>
            <Link href="/about" className="link-underline mt-4 inline-block text-sm text-crisp-light">
              <T en="About the study" ceb="Bahin sa pagtuon" fil="Tungkol sa pag-aaral" />
            </Link>
          </div>
        </div>
      </Container>

      {/* Credits band: logos + researchers */}
      <div className="mt-16 border-t border-cream/15">
        <Container className="py-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-8 md:text-left">
            <div className="flex items-center gap-3">
              <CnuLogo size={84} />
              <div className="relative size-[84px] overflow-hidden rounded-full bg-white ring-1 ring-cream/20" title="City of Carcar">
                <ImagePlaceholder id="carcar-seal" fill compact sizes="84px" className="rounded-full" imgClassName="object-contain! p-1" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/55">
                <T en="Researchers" ceb="Mga Tigsiksik" fil="Mga Mananaliksik" /> · Cebu Normal University
              </p>
              <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-sm text-cream/85 md:justify-start">
                {researchers.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-cream/55">
                <T en="Thesis Adviser" ceb="Magtatambag sa Tesis" fil="Tagapayo ng Tesis" />: {adviser.name}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/55 sm:flex-row sm:justify-between">
            <p>© 2026 · Departamento ng Filipino, Cebu Normal University.</p>
            <p>
              <T
                en="Photos: Wikimedia Commons contributors (see Sources) and the researchers. No AI-generated images."
                ceb="Mga hulagway: mga kontributor sa Wikimedia Commons (tan-awa ang Mga Tinubdan) ug ang mga tigsiksik. Walay hulagway nga gihimo sa AI."
                fil="Mga larawan: mga kontributor ng Wikimedia Commons (tingnan ang Mga Sanggunian) at ang mga mananaliksik. Walang larawang gawa ng AI."
              />
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
