import type { Metadata } from "next";
import { Info } from "lucide-react";
import { VendorDirectory } from "@/components/VendorDirectory";
import { Reveal } from "@/components/motion";
import { Container, Eyebrow, SourceNote } from "@/components/ui";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Where to Find Carcar Chicharon",
  description: "A directory of Carcar chicharon vendors — shops, pasalubong centers, market stalls, roadside, terminal and online sellers.",
};

export default function VendorsPage() {
  return (
    <>
      <section className="pb-10 pt-8 sm:pt-12 lg:pt-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>
                  <span className="tabular-nums">05</span> <T en="Vendors" ceb="Mga Tindera" fil="Mga Nagtitinda" />
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 font-display text-balance text-[2.6rem] leading-[1.02] font-medium sm:text-6xl lg:text-7xl">
                  <T
                    en={<>Where to find <span className="italic text-crisp">Carcar chicharon.</span></>}
                    ceb={<>Asa makit-an ang <span className="italic text-crisp">chicharon sa Carcar.</span></>}
                    fil={<>Saan mahahanap ang <span className="italic text-crisp">chicharon ng Carcar.</span></>}
                  />
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                <T
                  en="Respondents buy in shops and pasalubong centers, at the palengke, at roadside stalls, at bus terminals, from vendors who board buses — and increasingly online. Below are Carcar sellers you can reach on Facebook, with where their store is."
                  ceb="Ang mga tigtubag mopalit sa mga tindahan ug pasalubong center, sa merkado, sa daplin sa dalan, sa terminal sa bus, gikan sa mga tindera nga mosakay sa bus — ug nagkadaghan online. Sa ubos mao ang mga tindera sa Carcar nga maabot sa Facebook, uban kon asa ang ilang tindahan."
                  fil="Bumibili ang mga tagatugon sa mga tindahan at pasalubong center, sa palengke, sa tabi ng daan, sa terminal ng bus, sa mga nagtitindang sumasakay sa bus — at dumarami online. Nasa ibaba ang mga nagtitinda sa Carcar na maaabot sa Facebook, kasama kung nasaan ang kanilang tindahan."
                />
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mt-8 flex gap-3 rounded-2xl border border-line bg-surface p-5 text-sm leading-relaxed text-ink-soft">
            <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-crisp" />
            <p>
              <T
                en="Listings are real Carcar sellers who take orders online, compiled from their public Facebook pages and published guides (sources shown on each card, checked November 2026). Details can change — message the vendor to confirm stock, prices and pickup or delivery before you go. This is not a paid or ranked list."
                ceb="Ang mga listahan tinuod nga mga tindera sa Carcar nga modawat og online nga order, gikuha gikan sa ilang publikong Facebook page ug mga gipatik nga giya (ang tinubdan makita sa matag kard, gisusi Nobyembre 2026). Mahimong mausab ang detalye — mensaheha ang tindera aron kumpirmahon ang stock, presyo ug pickup o delivery sa dili pa moadto. Dili kini bayad o ranggo nga lista."
                fil="Mga tunay na nagtitinda sa Carcar na tumatanggap ng online na order ang mga nakalista, mula sa kanilang pampublikong Facebook page at mga nailathalang gabay (makikita ang sanggunian sa bawat kard, sinuri Nobyembre 2026). Maaaring magbago ang detalye — mag-message sa nagtitinda upang kumpirmahin ang stock, presyo at pickup o delivery bago pumunta. Hindi ito bayad o niranggong listahan."
              />
            </p>
          </Reveal>
        </Container>
      </section>
      <section className="pb-24">
        <Container>
          <VendorDirectory />
          <SourceNote className="mt-14">
            <T en="Vendor details come from each seller's public Facebook page and the published guides cited on each card. Vendors who wish to update or remove a listing may contact the researchers." ceb="Ang detalye sa tindera gikan sa publikong Facebook page sa matag usa ug sa gipatik nga mga giya nga gikutlo sa matag kard. Ang mga tindera nga gustong mag-update o magpatangtang sa listahan mahimong mokontak sa mga tigpanukiduki." fil="Ang detalye ng nagtitinda ay mula sa pampublikong Facebook page ng bawat isa at sa mga nailathalang gabay na binanggit sa bawat kard. Maaaring makipag-ugnayan sa mga mananaliksik ang mga nagtitindang nais mag-update o magpatanggal ng listahan." />
          </SourceNote>
        </Container>
      </section>
    </>
  );
}
