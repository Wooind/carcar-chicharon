import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Ecosystem } from "@/components/Ecosystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ButtonLink, Container, QuoteBlock, SectionHeading, SourceNote } from "@/components/ui";
import { quoteById } from "@/data/quotes";
import { T, tr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Chicharon & Livelihood",
  description: "How Carcar chicharon supports suppliers, workers, vendors, resellers, families and tourism — the livelihood findings of the study.",
};

const table2 = [
  {
    cat: tr("Why people choose Carcar chicharon", "Nganong gipili sa mga tawo ang chicharon sa Carcar", "Bakit pinipili ng mga tao ang chicharon ng Carcar"),
    fil: "Mga Salik sa Pagpili at Pagkilala",
    items: [
      tr("Distinct taste and quality", "Lahi nga lami ug kalidad", "Natatanging lasa at kalidad"),
      tr("Originality and Carcar identity", "Orihinalidad ug pagkatawo sa Carcar", "Orihinalidad at pagkakakilanlan ng Carcar"),
      tr("Buying traditions and habits", "Tradisyon ug batasan sa pagpalit", "Tradisyon at gawi sa pagbili"),
      tr("Affordable price and fair value", "Barato nga presyo ug patas nga bili", "Abot-kayang presyo at patas na halaga"),
      tr("Trust and customer satisfaction", "Pagsalig ug katagbawan sa kustomer", "Tiwala at kasiyahan ng mamimili"),
      tr("Supporting local products", "Pagsuporta sa lokal nga produkto", "Pagsuporta sa lokal na produkto"),
    ],
  },
  {
    cat: tr("What the industry gives Carcar", "Unsay gihatag sa industriya sa Carcar", "Ano ang ibinibigay ng industriya sa Carcar"),
    fil: "Ambag ng Industriya sa Kabuhayan",
    items: [
      tr("Source of daily income", "Tinubdan sa adlaw-adlaw nga kita", "Pinagmumulan ng pang-araw-araw na kita"),
      tr("Jobs and livelihood opportunities", "Trabaho ug oportunidad sa panginabuhian", "Trabaho at oportunidad sa kabuhayan"),
      tr("Growth of local and small businesses", "Pag-uswag sa lokal ug gagmay nga negosyo", "Paglago ng lokal at maliliit na negosyo"),
      tr("Economic and tourism growth", "Pag-uswag sa ekonomiya ug turismo", "Paglago ng ekonomiya at turismo"),
      tr("Benefits across community sectors", "Kaayohan sa tanang sektor sa komunidad", "Pakinabang sa iba't ibang sektor ng komunidad"),
    ],
  },
  {
    cat: tr("How buying changes the industry", "Giunsa sa pagpalit pag-usab sa industriya", "Paano binabago ng pagbili ang industriya"),
    fil: "Kontribusyon ng Pagbili at Pagbabago",
    items: [
      tr("A wider market", "Mas lapad nga merkado", "Mas malawak na pamilihan"),
      tr("More businesses, larger production", "Mas daghang negosyo, mas dako nga produksiyon", "Mas maraming negosyo, mas malaking produksiyon"),
      tr("Competition and challenges", "Kompetisyon ug mga hagit", "Kompetisyon at mga hamon"),
      tr("A stronger Carcar identity and reputation", "Mas lig-on nga pagkatawo ug dungog sa Carcar", "Mas matibay na pagkakakilanlan at reputasyon ng Carcar"),
    ],
  },
];

export default function LivelihoodPage() {
  return (
    <>
      <PageHero
        index="08"
        eyebrow={<T en="Livelihood" ceb="Panginabuhian" fil="Kabuhayan" />}
        imageId="livelihood-hero"
        title={
          <T
            en={<>A snack that <span className="italic text-crisp">feeds families.</span></>}
            ceb={<>Usa ka meryenda nga <span className="italic text-crisp">nagpakaon sa mga pamilya.</span></>}
            fil={<>Isang meryendang <span className="italic text-crisp">bumubuhay sa mga pamilya.</span></>}
          />
        }
        intro={<T en="Behind every pack is a chain of work — from the market where skin is bought to the bus where it is sold. The study describes this chain through relationships, not statistics." ceb="Sa luyo sa matag putos adunay kadena sa trabaho — gikan sa merkado diin gipalit ang panit hangtod sa bus diin kini gibaligya. Gihulagway sa pagtuon kini nga kadena pinaagi sa mga relasyon, dili estadistika." fil="Sa likod ng bawat balot ay may kadena ng trabaho — mula sa palengke kung saan binibili ang balat hanggang sa bus kung saan ito ibinebenta. Inilalarawan ng pag-aaral ang kadenang ito sa pamamagitan ng mga ugnayan, hindi estadistika." />}
      />

      <section className="border-y border-line bg-surface py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={<T en="The ecosystem" ceb="Ang ekosistema" fil="Ang ekosistema" />} title={<T en="Follow the chain" ceb="Sunda ang kadena" fil="Sundan ang kadena" />} intro={<T en="Select each link to see who is involved and what respondents said about it." ceb="Pilia ang matag kadugtong aron makita kon kinsa ang apil ug unsay giingon sa mga tigtubag." fil="Piliin ang bawat kawing upang makita kung sino ang kasangkot at ano ang sinabi ng mga tagatugon." />} className="mb-12" />
          </Reveal>
          <Ecosystem />
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Talahanayan 2 · Impluwensiya sa Pangkabuhayan" title={<T en="Three ways chicharon shapes livelihood" ceb="Tulo ka paagi nga ang chicharon naghulma sa panginabuhian" fil="Tatlong paraan ng paghubog ng chicharon sa kabuhayan" />} />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
            {table2.map((t, i) => (
              <StaggerItem key={t.fil} className="h-full">
                <article className="h-full rounded-3xl border border-line bg-surface p-7">
                  <span className="font-display text-4xl text-crisp/30 tabular-nums">{i + 1}</span>
                  <h3 className="mt-3 font-display text-2xl leading-tight font-medium">
                    <T v={t.cat} />
                  </h3>
                  <p className="text-sm italic text-ink-faint">{t.fil}</p>
                  <ul className="mt-6 space-y-3 border-t border-line pt-5">
                    {t.items.map((x) => (
                      <li key={x.en} className="flex gap-3 text-[15px] text-ink-soft">
                        <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-crisp" />
                        <span>
                          <T v={x} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {[
              { id: "livelihood-1", t: tr("Supply", "Suplay", "Suplay"), q: "r88-livelihood" },
              { id: "livelihood-2", t: tr("Work", "Trabaho", "Trabaho"), q: "r33-livelihood" },
              { id: "livelihood-3", t: tr("Trade", "Negosyo", "Kalakalan"), q: "r40-value" },
            ].map((c) => (
              <StaggerItem key={c.id}>
                <article className="group">
                  <div className="overflow-hidden rounded-3xl">
                    <div className="transition-transform duration-700 group-hover:scale-105">
                      <ImagePlaceholder id={c.id} sizes="(min-width:768px) 30vw, 92vw" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium">
                    <T v={c.t} />
                  </h3>
                  <div className="mt-4">
                    <QuoteBlock quote={quoteById(c.q)} showTheme={false} />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="dark-surface bg-night py-20 text-cream lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow={<T en="Challenges" ceb="Mga hagit" fil="Mga hamon" />} title={<T en="Growth brings competition" ceb="Ang pag-uswag nagdala og kompetisyon" fil="Ang paglago ay nagdadala ng kompetisyon" />} intro={<T en="Respondents also named difficulties: many more makers and sellers, imitation, rising pork prices, rainy days and quiet Mondays with few buyers, and other snacks competing for attention." ceb="Gihisgutan usab sa mga tigtubag ang mga kalisdanan: mas daghang naghimo ug tindera, pagsundog, pagsaka sa presyo sa baboy, ting-ulan ug hilom nga mga Lunes nga gamay ra ang mamalitay, ug ubang meryenda nga nakigkompetensya." fil="Binanggit din ng mga tagatugon ang mga kahirapan: mas maraming gumagawa at nagtitinda, panggagaya, pagtaas ng presyo ng baboy, tag-ulan at matumal na mga Lunes, at iba pang meryendang nakikipagkumpitensya." />} />
          </Reveal>
          <div className="space-y-10">
            <Reveal>
              <QuoteBlock quote={quoteById("r35-competition")} />
            </Reveal>
            <Reveal delay={0.08}>
              <QuoteBlock quote={quoteById("r39-competition")} />
            </Reveal>
          </div>
        </Container>
        <Container className="mt-14">
          <Reveal className="rounded-3xl border border-cream/15 p-7">
            <h3 className="font-display text-2xl">
              <T en="What the study recommends" ceb="Unsay girekomendar sa pagtuon" fil="Ang inirerekomenda ng pag-aaral" />
            </h3>
            <p className="mt-3 leading-relaxed text-cream/75">
              <T
                en="Maintain quality, hygiene and fair pricing; train producers and vendors in food safety, packaging and business management; strengthen ties between suppliers, makers and sellers; and use digital platforms to reach buyers beyond Carcar."
                ceb="Padayona ang kalidad, kalimpyo ug patas nga presyo; bansaya ang mga naghimo ug tindera sa kaluwasan sa pagkaon, pagputos ug pagdumala sa negosyo; palig-ona ang relasyon tali sa mga supplier, naghimo ug tindera; ug gamita ang digital nga plataporma aron maabot ang mamalitay gawas sa Carcar."
                fil="Panatilihin ang kalidad, kalinisan at patas na presyo; sanayin ang mga gumagawa at nagtitinda sa kaligtasan ng pagkain, pagbabalot at pamamahala ng negosyo; patatagin ang ugnayan ng mga supplier, gumagawa at nagtitinda; at gamitin ang mga digital na plataporma upang maabot ang mamimili lampas sa Carcar."
              />
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/digital-culture">
              <T en="Digital culture" ceb="Digital nga kultura" fil="Kulturang digital" />
            </ButtonLink>
            <ButtonLink href="/people" variant="light">
              <T en="Meet the people" ceb="Ilaila ang katawhan" fil="Kilalanin ang mga tao" />
            </ButtonLink>
          </div>
          <SourceNote className="mt-10">
            <T en="Source" ceb="Tinubdan" fil="Sanggunian" />: Kabanata 4 — Talahanayan 2; Kabanata 5 — Rekomendasyon.{" "}
            <T en="The study reports no numerical data, so no figures are shown." ceb="Walay numerikal nga datos ang pagtuon, busa walay numero nga gipakita." fil="Walang numerikal na datos ang pag-aaral, kaya walang ipinapakitang bilang." />
          </SourceNote>
        </Container>
      </section>
    </>
  );
}
