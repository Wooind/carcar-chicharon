import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ButtonLink, Container, QuoteBlock, SectionHeading, SourceNote } from "@/components/ui";
import { quoteById } from "@/data/quotes";
import { T, tr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "The People Behind the Chicharon",
  description: "Producers, vendors, buyers, the local community and visitors — five perspectives on Carcar chicharon from the study.",
};

const sectors = [
  {
    s: "Mga Manggagawa", en: tr("Producers & workers", "Mga naghimo ug mamumuo", "Mga gumagawa at manggagawa"),
    view: tr("Skill, tradition and quality — careful process, food safety, the right crunch, steady supply of raw skin.", "Kahanas, tradisyon ug kalidad — mainampingong proseso, kaluwasan sa pagkaon, sakto nga kalutong, padayong suplay sa hilaw nga panit.", "Kasanayan, tradisyon at kalidad — maingat na proseso, kaligtasan ng pagkain, tamang lutong, tuloy-tuloy na suplay ng hilaw na balat."),
    core: tr("Craft, cleanliness and integrity of the product", "Arte, kalimpyo ug integridad sa produkto", "Husay, kalinisan at integridad ng produkto"), quote: "r76-livelihood",
  },
  {
    s: "Mga Nagtitinda", en: tr("Vendors", "Mga tindera", "Mga nagtitinda"),
    view: tr("Managing sales, pricing and location; offering trusted brands or free tastes to attract buyers.", "Pagdumala sa halin, presyo ug lugar; pagtanyag og masaligang brand o libreng tilaw aron makadani og mamalitay.", "Pamamahala sa benta, presyo at lokasyon; pag-aalok ng pinagkakatiwalaang brand o libreng tikim upang makaakit ng mamimili."),
    core: tr("Livelihood, income and the reputation of the store", "Panginabuhian, kita ug dungog sa tindahan", "Kabuhayan, kita at reputasyon ng tindahan"), quote: "r23-language",
  },
  {
    s: "Mga Mamimili", en: tr("Buyers", "Mga mamalitay", "Mga mamimili"),
    view: tr("Taste, quality and price; bought daily or for occasions — as ulam, pulutan or meryenda.", "Lami, kalidad ug presyo; gipalit adlaw-adlaw o sa mga okasyon — isip sud-an, pulutan o meryenda.", "Lasa, kalidad at presyo; binibili araw-araw o sa mga okasyon — bilang ulam, pulutan o meryenda."),
    core: tr("Satisfaction, practicality and familiarity", "Katagbawan, praktikalidad ug pagkaila", "Kasiyahan, praktikalidad at pagkapamilyar"), quote: "r87-quality",
  },
  {
    s: "Lokal na Pamayanan", en: tr("Local community", "Lokal nga komunidad", "Lokal na pamayanan"),
    view: tr("Chicharon as part of Carcar's culture and identity, and as work for many families.", "Ang chicharon isip bahin sa kultura ug pagkatawo sa Carcar, ug isip trabaho sa daghang pamilya.", "Ang chicharon bilang bahagi ng kultura at pagkakakilanlan ng Carcar, at bilang hanapbuhay ng maraming pamilya."),
    core: tr("Local identity, heritage and civic pride", "Lokal nga pagkatawo, kabilin ug garbo sa lungsod", "Lokal na pagkakakilanlan, pamana at pagmamalaki sa bayan"), quote: "r89-identity",
  },
  {
    s: "Mga Turista", en: tr("Tourists & visitors", "Mga turista ug bisita", "Mga turista at bisita"),
    view: tr("A local food and the main pasalubong to bring home to family and friends.", "Usa ka lokal nga pagkaon ug ang nag-unang pasalubong nga dad-on pauli sa pamilya ug higala.", "Isang lokal na pagkain at ang pangunahing pasalubong na iuuwi sa pamilya at kaibigan."),
    core: tr("Recognising the local product through experience", "Pag-ila sa lokal nga produkto pinaagi sa kasinatian", "Pagkilala sa lokal na produkto sa pamamagitan ng karanasan"), quote: "r39-identity",
  },
];


export default function PeoplePage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow={<T en="The People" ceb="Ang Katawhan" fil="Ang mga Tao" />}
        imageId="people-hero"
        title={
          <T
            en={<>One product, <span className="italic text-crisp">many hands.</span></>}
            ceb={<>Usa ka produkto, <span className="italic text-crisp">daghang kamot.</span></>}
            fil={<>Iisang produkto, <span className="italic text-crisp">maraming kamay.</span></>}
          />
        }
        intro={<T en="The study compared five groups connected to Carcar chicharon. The same product meant something different to each — a craft, an income, a pleasure, a pride, a memory." ceb="Gitandi sa pagtuon ang lima ka grupo nga konektado sa chicharon sa Carcar. Ang samang produkto adunay lahing kahulogan sa matag usa — arte, kita, kalipay, garbo, panumduman." fil="Inihambing ng pag-aaral ang limang pangkat na kaugnay ng chicharon ng Carcar. Iba-iba ang kahulugan ng iisang produkto sa bawat isa — husay, kita, kasiyahan, pagmamalaki, alaala." />}
      />

      <section className="border-y border-line bg-surface py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Talahanayan 3 · Iba't Ibang Perspektiba" title={<T en="Five perspectives" ceb="Lima ka panglantaw" fil="Limang perspektiba" />} intro={<T en="Hover or focus a card to read a representative quote from each group." ceb="I-hover o i-focus ang usa ka kard aron mabasa ang usa ka representatibong kinutlo gikan sa matag grupo." fil="I-hover o i-focus ang isang kard upang mabasa ang isang kinatawang sipi mula sa bawat pangkat." />} />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {sectors.map((x, i) => (
              <StaggerItem key={x.s} className="h-full">
                <article tabIndex={0} className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-3xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 focus-visible:-translate-y-1">
                  <span className="font-display text-5xl text-crisp/25 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-2xl leading-tight font-medium">
                    <T v={x.en} />
                  </h3>
                  <p className="text-sm italic text-ink-faint">{x.s}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    <T v={x.view} />
                  </p>
                  <div className="mt-auto pt-6">
                    <div className="border-t border-line pt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-crisp">
                        <T en="Central meaning" ceb="Sentral nga kahulogan" fil="Sentral na kahulugan" />
                      </p>
                      <p className="mt-1 font-display text-lg leading-snug">
                        <T v={x.core} />
                      </p>
                    </div>
                  </div>
                  <div className="dark-surface absolute inset-0 flex flex-col justify-end bg-night p-6 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 max-lg:hidden">
                    <QuoteBlock quote={quoteById(x.quote)} showTheme={false} />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-6 text-sm text-ink-faint lg:hidden">
            <T en="Representative quotes for each group appear on the Voices page." ceb="Ang representatibong mga kinutlo sa matag grupo makita sa panid sa Mga Tingog." fil="Makikita sa pahina ng Mga Tinig ang mga kinatawang sipi ng bawat pangkat." />
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/vendors">
              <T en="Find a vendor" ceb="Pangita og tindera" fil="Maghanap ng nagtitinda" />
            </ButtonLink>
            <ButtonLink href="/livelihood" variant="ghost">
              <T en="How it sustains livelihoods" ceb="Giunsa niini pagsuporta sa panginabuhian" fil="Paano nito tinutustusan ang kabuhayan" />
            </ButtonLink>
          </div>
          <SourceNote className="mt-10">
            <T en="Source" ceb="Tinubdan" fil="Sanggunian" />: Kabanata 4 — Iba&apos;t Ibang Perspektiba ng mga Sektor sa Chicharon ng Carcar (Talahanayan 3).</SourceNote>
        </Container>
      </section>
    </>
  );
}
