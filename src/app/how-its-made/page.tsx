import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ButtonLink, Container, QuoteBlock, SectionHeading, SourceNote } from "@/components/ui";
import { quoteById } from "@/data/quotes";
import { T, tr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "From Production to Table",
  description: "How Carcar chicharon is made, sold and eaten — as described by respondents in the study.",
};

const stages = [
  tr("Production", "Produksiyon", "Produksiyon"),
  tr("Preparation", "Pagpangandam", "Paghahanda"),
  tr("Selling", "Pagbaligya", "Pagbebenta"),
  tr("Buying", "Pagpalit", "Pagbili"),
  tr("Traveling", "Pagbiyahe", "Paglalakbay"),
  tr("Eating", "Pagkaon", "Pagkain"),
  tr("Sharing", "Pagpaambit", "Pagbabahagi"),
];

const steps = [
  {
    n: 1,
    title: "Paglalaga at pagtatabas",
    en: tr("Cleaning, trimming & boiling", "Paglimpyo, pagputol ug paglaswa", "Paglilinis, pagtatabas at pagpapakulo"),
    text: tr("The pork skin is cleaned and trimmed, then boiled with salt, garlic and seasoning so it softens and absorbs the first layer of flavour.",
      "Ang panit sa baboy gilimpyohan ug giputlan, dayon gilaswa uban sa asin, ahos ug panimpla aron mohumok ug mosuhop sa unang lami.",
      "Nililinis at tinatabas ang balat ng baboy, saka pinakukuluan kasama ng asin, bawang at pampalasa upang lumambot at sumipsip ng unang patong ng lasa."),
    img: "made-step-1",
    said: [{ c: "R3", t: "Una, pakuluan at lagyan ng pampalasa tapos hiwain at ilagay sa mainit na mantika." }],
  },
  {
    n: 2,
    title: "Pagpapatuyo sa araw",
    en: tr("Sun-drying", "Pagbulad sa adlaw", "Pagpapatuyo sa araw"),
    text: tr("The boiled skin is laid out under the sun to remove moisture so it puffs properly in oil. Respondents did not specify how long — the study notes this varies.",
      "Ang nalaswang panit gibulad sa adlaw aron mawala ang kaumog ug mobukad og maayo sa mantika. Wala gitino sa mga tigtubag kon unsa kadugay — matod sa pagtuon, magkalahi kini.",
      "Ibinibilad sa araw ang pinakuluang balat upang maalis ang halumigmig at lumobo nang maayos sa mantika. Hindi tinukoy ng mga tagatugon kung gaano katagal — ayon sa pag-aaral, nag-iiba ito."),
    img: "made-step-2",
    said: [
      { c: "R8", t: "I-dried daan ang panit." },
      { c: "R9", t: "ibuwad sa init para pa ughon." },
    ],
  },
  {
    n: 3,
    title: "Pagtitimpla",
    en: tr("Seasoning", "Pagtimpla", "Pagtitimpla"),
    text: tr("Seasoning such as salt and garlic is applied. Respondents credit Carcar's particular timpla for its distinct taste — though the study found no single ‘secret formula’ shared by all makers.",
      "Butangan og panimpla sama sa asin ug ahos. Gipasidungog sa mga tigtubag ang talagsaong timpla sa Carcar sa lahi niining lami — bisan wala makaplagi sa pagtuon ang usa ka ‘sekretong pormula’ nga gigamit sa tanang naghimo.",
      "Nilalagyan ng pampalasa gaya ng asin at bawang. Iniuugnay ng mga tagatugon ang natatanging lasa sa kakaibang timpla ng Carcar — bagaman walang natuklasang iisang ‘lihim na pormula’ na ginagamit ng lahat ng gumagawa."),
    img: "made-step-3",
    said: [
      { c: "R20", t: "pabukalan, ifry sa mantika, butngan og asin ug bawang, ihaon and paughon, ang lutuon balik kaduha sa mantika." },
      { c: "R90", t: "Ang nagpapabukod-tangi sa gawang Carcar ay ang kanilang kakaibang timpla ng mga pampalasa bago ito prituhin na nagbibigay ng kakaibang linamnam." },
    ],
  },
  {
    n: 4,
    title: "Unang yugto ng pagprito",
    en: tr("First, slower frying", "Una, hinay nga pagprito", "Una, mabagal na pagprito"),
    text: tr("A first cooking in oil, sometimes followed by a rest of several hours before the skin is fried again.",
      "Unang pagluto sa mantika, usahay sundan og pahulay sulod sa pipila ka oras sa dili pa iprito pag-usab ang panit.",
      "Unang pagluluto sa mantika, minsan sinusundan ng pahinga nang ilang oras bago muling iprito ang balat."),
    img: "made-step-4",
    said: [
      { c: "R10", t: "Lapwaan, half cook, timing pabutok." },
      { c: "R21", t: "bago iprito ang balat, pinakuluan muna ito at pinapahinga nang ilang oras bago simulan ang paulit-ulit na pagprito hanggang maging malutong." },
    ],
  },
  {
    n: 5,
    title: "Ikalawang yugto ng pagprito",
    en: tr("Second frying — the crunch", "Ikaduhang pagprito — ang langutngot", "Ikalawang pagprito — ang lutong"),
    text: tr("Returned to very hot oil, the skin puffs, turns golden and crisp. Knowing exactly when to lift it from the pan comes with years of experience.",
      "Ibalik sa init kaayong mantika, ang panit mobukad, mobulawan ug moluto og malutong. Ang pagkahibalo kon kanus-a kini haw-on gikan sa kalaha moabot uban sa katuigan sa kasinatian.",
      "Ibinabalik sa napakainit na mantika, lumolobo ang balat, nagiging ginintuan at malutong. Ang pagkaalam kung kailan ito iaahon sa kawali ay dumarating sa maraming taon ng karanasan."),
    img: "made-step-5",
    said: [
      { c: "R36", t: "Balik-balikon pana siya ug lunod sa mantika until makuha na ang sakto." },
      { c: "R37", t: "Lat-an daan human ilunod sa init kaayong mantika pila ka times para ma crispy." },
    ],
  },
];

export default function MadePage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow={<T en="How It's Made" ceb="Unsaon Paghimo" fil="Paano Ginagawa" />}
        imageId="made-hero"
        title={
          <T
            en={<>From production <span className="italic text-crisp">to table.</span></>}
            ceb={<>Gikan sa paghimo <span className="italic text-crisp">hangtod sa lamesa.</span></>}
            fil={<>Mula paggawa <span className="italic text-crisp">hanggang hapag.</span></>}
          />
        }
        intro={
          <T
            en="Making, selling and eating are not separate activities, the study concludes — they are linked practices that give chicharon its value as a product, a livelihood and a culinary heritage."
            ceb="Ang paghimo, pagbaligya ug pagkaon dili managlahing kalihokan, matod sa konklusyon sa pagtuon — kini mga nagdugtong nga binuhatan nga naghatag sa chicharon sa bili niini isip produkto, panginabuhian ug kabilin sa pagluto."
            fil="Hindi magkakahiwalay na gawain ang paggawa, pagbebenta at pagkain, ayon sa konklusyon ng pag-aaral — magkakaugnay na gawi ang mga ito na nagbibigay sa chicharon ng halaga bilang produkto, kabuhayan at pamanang pangkusina."
          />
        }
      />

      {/* stage strip */}
      <section aria-label="Stages / Mga ang-ang / Mga yugto" className="border-y border-line bg-surface">
        <Container className="py-6">
          <ol className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 sm:mx-0 sm:justify-between sm:px-0">
            {stages.map((s, i) => (
              <li key={s.en} className="flex shrink-0 items-center gap-2">
                <span className="grid size-7 place-items-center rounded-full bg-crisp text-[11px] font-semibold text-white">{i + 1}</span>
                <span className="text-sm font-medium">
                  <T v={s} />
                </span>
                {i < stages.length - 1 && <span aria-hidden className="mx-1 h-px w-6 bg-line lg:w-10" />}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Production */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Paggawa · Production" title={<T en="Five steps, as respondents describe them" ceb="Lima ka lakang, sumala sa paghulagway sa mga tigtubag" fil="Limang hakbang, ayon sa paglalarawan ng mga tagatugon" />} />
          </Reveal>
          <Reveal delay={0.08} className="mt-6 flex max-w-3xl gap-3 rounded-2xl border border-crisp/30 bg-crisp/5 p-5 text-sm leading-relaxed text-ink-soft">
            <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-crisp" />
            <p>
              <T
                en="Not every respondent had direct knowledge of production; some described it from observation. The study states its data cannot establish exact temperatures, durations or number of fryings used by every Carcar maker. Details below are limited to what respondents reported."
                ceb="Dili tanang tigtubag adunay direktang kahibalo sa produksiyon; ang uban naghulagway niini gikan sa obserbasyon. Matod sa pagtuon, ang datos niini dili makatino sa eksaktong temperatura, gidugayon o kapila ang pagprito sa matag naghimo sa Carcar. Ang mga detalye sa ubos limitado sa gitaho sa mga tigtubag."
                fil="Hindi lahat ng tagatugon ay may tuwirang kaalaman sa produksiyon; inilarawan ito ng ilan batay sa obserbasyon. Ayon sa pag-aaral, hindi matitiyak ng datos nito ang eksaktong temperatura, tagal o dami ng pagprito ng bawat gumagawa sa Carcar. Limitado ang mga detalye sa ibaba sa iniulat ng mga tagatugon."
              />
            </p>
          </Reveal>

          <ol className="relative mt-16 space-y-16 lg:space-y-24">
            <span aria-hidden className="absolute bottom-0 left-[19px] top-0 w-px bg-line lg:left-1/2" />
            {steps.map((s, i) => (
              <li key={s.n} className="relative grid gap-8 pl-14 lg:grid-cols-2 lg:gap-20 lg:pl-0">
                <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full bg-crisp font-display text-lg text-white lg:left-1/2 lg:-translate-x-1/2">
                  {s.n}
                </span>
                <ImageReveal className={`rounded-3xl ${i % 2 ? "lg:order-2" : ""}`}>
                  <ImagePlaceholder id={s.img} sizes="(min-width:1024px) 45vw, 85vw" />
                </ImageReveal>
                <Reveal className={i % 2 ? "lg:text-right" : ""}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crisp">Hakbang {s.n}</p>
                  <h3 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
                    <T v={s.en} />
                  </h3>
                  <p className="mt-1 italic text-ink-faint">{s.title}</p>
                  <p className="mt-5 text-pretty leading-relaxed text-ink-soft">
                    <T v={s.text} />
                  </p>
                  <div className="mt-6 space-y-3">
                    {s.said.map((q) => (
                      <figure key={q.c} className="rounded-2xl bg-surface p-4 text-left">
                        <blockquote className="font-display text-[15px] leading-snug italic">“{q.t}”</blockquote>
                        <figcaption className="mt-2 text-xs text-ink-faint">
                          <T en="Respondent" ceb="Tigtubag" fil="Tagatugon" /> {q.c}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal className="mt-16 max-w-3xl">
            <QuoteBlock quote={quoteById("r74-production")} />
          </Reveal>
        </Container>
      </section>

      {/* Selling */}
      <section className="dark-surface bg-night py-20 text-cream lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Pagbebenta · Selling"
                  title={<T en="Where and how it is sold" ceb="Asa ug unsaon kini pagbaligya" fil="Saan at paano ito ibinebenta" />}
                  intro={<T en="Two practices dominate: selling where people pass, and packing and talking to buyers well." ceb="Duha ka binuhatan ang nagpatigbabaw: pagbaligya diin moagi ang mga tawo, ug maayong pagputos ug pakigsulti sa mga mamalitay." fil="Dalawang gawi ang nangingibabaw: pagbebenta kung saan dumaraan ang mga tao, at maayos na pagbabalot at pakikipag-usap sa mamimili." />}
                />
              </Reveal>
              <ImageReveal className="mt-10 rounded-3xl">
                <ImagePlaceholder id="made-selling" sizes="(min-width:1024px) 40vw, 92vw" />
              </ImageReveal>
            </div>
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:pl-6">
              {[
                { t: tr("Strategic locations", "Estratehikong lugar", "Estratehikong lokasyon"), d: tr("Shops, pasalubong centers, the palengke, the roadside, bus terminals and inside buses — wherever travellers and shoppers pass.", "Mga tindahan, pasalubong center, merkado, daplin sa dalan, terminal sa bus ug sulod sa bus — bisan asa moagi ang mga biyahero ug mamalitay.", "Mga tindahan, pasalubong center, palengke, tabi ng daan, terminal ng bus at loob ng bus — saanman dumaraan ang mga biyahero at mamimili.") },
                { t: tr("Many sizes, many prices", "Daghang gidak-on, daghang presyo", "Iba't ibang laki, iba't ibang presyo"), d: tr("Packed in plastic in various sizes and prices so buyers can choose by need and budget.", "Giputos sa plastik sa nagkalain-laing gidak-on ug presyo aron makapili ang mamalitay sumala sa panginahanglan ug badyet.", "Nakabalot sa plastik sa iba't ibang laki at presyo upang makapili ang mamimili ayon sa pangangailangan at badyet.") },
                { t: tr("Sales talk & free tasting", "Pagdani ug libreng tilaw", "Pang-akit at libreng tikim"), d: tr("Vendors describe how delicious and crispy their chicharon is, and some let buyers taste first.", "Ihulagway sa mga tindera kon unsa ka lami ug kalutong ang ilang chicharon, ug ang uban motugot nga motilaw una ang mamalitay.", "Inilalarawan ng mga nagtitinda kung gaano kasarap at kalutong ang kanilang chicharon, at pinatitikim muna ng ilan ang mamimili.") },
                { t: tr("Speaking the buyer's language", "Pagsulti sa pinulongan sa mamalitay", "Pagsasalita sa wika ng mamimili"), d: tr("Bisaya with locals; Filipino or English with tourists.", "Bisaya sa mga lokal; Filipino o Iningles sa mga turista.", "Bisaya sa mga lokal; Filipino o Ingles sa mga turista.") },
                { t: tr("Social media", "Social media", "Social media"), d: tr("Some sellers also reach buyers online.", "Ang pipila ka tindera makaabot usab sa mamalitay online.", "Naaabot din ng ilang nagtitinda ang mamimili online.") },
                { t: tr("Resellers & distributors", "Mamaligya-usab ug distributor", "Muling nagbebenta at distributor"), d: tr("Some buy in bulk to sell in other cities; pasalubong centers have grown.", "Ang uban mopalit og daghan aron ibaligya sa laing dakbayan; midaghan ang mga pasalubong center.", "Bumibili nang maramihan ang ilan upang ibenta sa ibang lungsod; dumami ang mga pasalubong center.") },
              ].map((c) => (
                <StaggerItem key={c.t.en}>
                  <div className="h-full rounded-3xl border border-cream/15 p-6 transition-colors hover:border-crisp-light/60">
                    <h3 className="font-display text-xl font-medium">
                      <T v={c.t} />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/75">
                      <T v={c.d} />
                    </p>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem className="sm:col-span-2">
                <QuoteBlock quote={quoteById("r39-selling")} showTheme={false} />
              </StaggerItem>
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Consumption */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <ImageReveal className="rounded-[28px] lg:col-span-6">
              <ImagePlaceholder id="made-eating" sizes="(min-width:1024px) 50vw, 92vw" />
            </ImageReveal>
            <div className="lg:col-span-6">
              <Reveal>
                <SectionHeading eyebrow="Pagkonsumo · Eating & sharing" title="Meryenda, ulam, pulutan, pasalubong" />
              </Reveal>
              <Reveal delay={0.08} className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  [tr("Eaten on its own", "Kaonon nga ingon niana", "Kinakain nang mag-isa"), tr("as a snack, at home, at work or on the bus", "isip meryenda, sa balay, sa trabaho o sa bus", "bilang meryenda, sa bahay, sa trabaho o sa bus")],
                  [tr("With rice", "Uban sa kan-on", "Kasama ng kanin"), tr("as an ulam or side to a meal", "isip sud-an o kauban sa pagkaon", "bilang ulam o kasama sa pagkain")],
                  [tr("Dipped", "Gitusmaw", "Isinasawsaw"), tr("in vinegar, often with chili", "sa suka, kasagaran may sili", "sa suka, kadalasan may sili")],
                  [tr("Brought home", "Gidala pauli", "Iniuuwi"), tr("as pasalubong for family and friends", "isip pasalubong sa pamilya ug higala", "bilang pasalubong sa pamilya at kaibigan")],
                ].map(([a, b]) => (
                  <div key={a.en} className="rounded-2xl border border-line bg-surface p-5">
                    <p className="font-display text-lg font-medium">
                      <T v={a} />
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">
                      <T v={b} />
                    </p>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={0.12} className="mt-8">
                <QuoteBlock quote={quoteById("r43-everyday")} />
              </Reveal>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/pasalubong">
              <T en="Follow it home" ceb="Sunda kini pauli" fil="Sundan ito pauwi" />
            </ButtonLink>
            <ButtonLink href="/vendors" variant="ghost">
              <T en="Where to find it" ceb="Asa kini makit-an" fil="Saan ito mahahanap" />
            </ButtonLink>
          </div>
          <SourceNote className="mt-10">
            <T en="Source" ceb="Tinubdan" fil="Sanggunian" />: Kabanata 4 — Talahanayan 4 (Paggawa, Pagbebenta, Pagkonsumo).
          </SourceNote>
        </Container>
      </section>
    </>
  );
}
