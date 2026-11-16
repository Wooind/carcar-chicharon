import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CnuLogo, ResearchersSection } from "@/components/Researchers";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { panel, site } from "@/data/site";
import { T, tr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About the Study",
  description: "Wika at Kultura ng Chicharon: Sosyo-Kultural na Perspektiba ng mga Mamamayan — purpose, method, findings and how this website serves as its digital output.",
};

const objectives = [
  ["Kultural na pagpapahalaga ng chicharon", tr("Cultural value of chicharon", "Kultural nga bili sa chicharon", "Kultural na pagpapahalaga ng chicharon")],
  ["Impluwensiya ng lokal na produkto sa pangkabuhayan", tr("Influence of the local product on livelihood", "Impluwensiya sa lokal nga produkto sa panginabuhian", "Impluwensiya ng lokal na produkto sa kabuhayan")],
  ["Iba't ibang perspektiba ng mga sektor", tr("Perspectives of different sectors", "Panglantaw sa nagkalain-laing sektor", "Perspektiba ng iba't ibang sektor")],
  ["Mailarawan ang paggawa, pagbebenta, at pagkonsumo", tr("Describe making, selling and consumption", "Ihulagway ang paghimo, pagbaligya ug pagkonsumo", "Ilarawan ang paggawa, pagbebenta at pagkonsumo")],
  ["Pagbuo ng digital na kagamitan sa pagkokomersyo", tr("Develop a digital commerce tool", "Paghimo og digital nga himan sa pamaligya", "Bumuo ng digital na kagamitan sa pagkokomersyo")],
] as const;

const method = [
  [tr("Design", "Disenyo", "Disenyo"), tr("Descriptive design with a qualitative approach", "Deskriptibong disenyo nga adunay kwalitatibong pamaagi", "Deskriptibong disenyo na may kwalitatibong dulog")],
  [tr("Locale", "Dapit", "Lugar"), tr("Carcar City, Cebu — the “Heritage City of the South”", "Dakbayan sa Carcar, Sugbo — ang “Heritage City of the South”", "Lungsod ng Carcar, Cebu — ang “Heritage City of the South”")],
  [tr("Respondents", "Mga tigtubag", "Mga tagatugon"), tr("100 local residents and tourists in Carcar", "100 ka lokal nga residente ug turista sa Carcar", "100 lokal na residente at turista sa Carcar")],
  [tr("Sampling", "Sampling", "Sampling"), tr("Convenience sampling at markets and chicharon shops", "Convenience sampling sa mga merkado ug tindahan sa chicharon", "Convenience sampling sa mga palengke at tindahan ng chicharon")],
  [tr("Instrument", "Instrumento", "Instrumento"), tr("Validated semi-structured interview guide and sector table", "Gi-validate nga semi-structured nga giya sa interbyu ug talaan sa sektor", "Na-validate na semi-structured na gabay sa panayam at talahanayan ng sektor")],
  [tr("Ethics", "Etika", "Etika"), tr("Ethics Review Committee clearance, informed consent, anonymised respondent codes", "Clearance sa Ethics Review Committee, informed consent, anonimong code sa tigtubag", "Clearance ng Ethics Review Committee, informed consent, anonimong code ng tagatugon")],
] as const;

const theories = [
  {
    t: "Socio-Cultural Theory", a: "Lev Vygotsky",
    d: tr("Learning happens first between people, then within the person. Chicharon is a “cultural tool”; family and community are where its meaning is learned. A digital platform can act as a modern “more knowledgeable other.”",
      "Ang pagkat-on mahitabo una tali sa mga tawo, dayon sulod sa tawo. Ang chicharon usa ka “cultural tool”; ang pamilya ug komunidad mao ang dapit diin makat-onan ang kahulogan niini. Ang digital nga plataporma mahimong modernong “more knowledgeable other.”",
      "Unang nangyayari ang pagkatuto sa pagitan ng mga tao, saka sa loob ng tao. Ang chicharon ay isang “cultural tool”; sa pamilya at komunidad natututuhan ang kahulugan nito. Maaaring magsilbing modernong “more knowledgeable other” ang isang digital na plataporma."),
  },
  {
    t: "Diffusion of Innovations", a: "Everett Rogers",
    d: tr("Adoption moves through knowledge, persuasion, decision, implementation and confirmation — shaped in Carcar by culture, language and fit with familiar ways of buying.",
      "Ang pagdawat moagi sa kahibalo, pagdani, desisyon, pagpatuman ug kumpirmasyon — gihulma sa Carcar sa kultura, pinulongan ug pagkahaum sa naandang paagi sa pagpalit.",
      "Dumaraan ang pagtanggap sa kaalaman, panghihikayat, pagdedesisyon, pagpapatupad at kumpirmasyon — hinuhubog sa Carcar ng kultura, wika at pagkakatugma sa nakasanayang paraan ng pagbili."),
  },
];

const conclusions = [
  [tr("Socio-cultural significance", "Sosyo-kultural nga kahinungdanon", "Sosyo-kultural na kahalagahan"), tr("Carcar chicharon helps sustain local culture and identity; its value grows from family traditions, social ties, pasalubong and daily eating — part of the community's collective experience and heritage.", "Ang chicharon sa Carcar nagtabang sa pagpadayon sa lokal nga kultura ug pagkatawo; ang bili niini motubo gikan sa tradisyon sa pamilya, sosyal nga relasyon, pasalubong ug adlaw-adlaw nga pagkaon — bahin sa kolektibong kasinatian ug kabilin sa komunidad.", "Tumutulong ang chicharon ng Carcar na mapanatili ang lokal na kultura at pagkakakilanlan; lumalago ang halaga nito mula sa tradisyon ng pamilya, ugnayang panlipunan, pasalubong at pang-araw-araw na pagkain — bahagi ng kolektibong karanasan at pamana ng komunidad.")],
  [tr("Livelihood relevance", "Kahinungdanon sa panginabuhian", "Kahalagahan sa kabuhayan"), tr("It is an important source of livelihood for workers, entrepreneurs, vendors and local suppliers — sustained by good management, quality and adaptability to competition.", "Importante kini nga tinubdan sa panginabuhian sa mga mamumuo, negosyante, tindera ug lokal nga supplier — gipadayon sa maayong pagdumala, kalidad ug abilidad sa pagpahiangay sa kompetisyon.", "Mahalagang pinagkukunan ito ng kabuhayan ng mga manggagawa, negosyante, nagtitinda at lokal na supplier — pinananatili ng mahusay na pamamahala, kalidad at kakayahang umangkop sa kompetisyon.")],
  [tr("Sector perspectives", "Panglantaw sa mga sektor", "Perspektiba ng mga sektor"), tr("Its meaning depends on one's role: skill and tradition for makers, income for vendors, taste and price for buyers, identity for the community, experience for tourists.", "Ang kahulogan niini nagdepende sa papel sa tawo: kahanas ug tradisyon sa naghimo, kita sa tindera, lami ug presyo sa mamalitay, pagkatawo sa komunidad, kasinatian sa turista.", "Nakasalalay ang kahulugan nito sa papel ng isang tao: kasanayan at tradisyon sa gumagawa, kita sa nagtitinda, lasa at presyo sa mamimili, pagkakakilanlan sa komunidad, karanasan sa turista.")],
  [tr("Culture and technology", "Kultura ug teknolohiya", "Kultura at teknolohiya"), tr("A digital commerce tool can link a traditional industry to modern selling — but its effectiveness must still be tested in actual use.", "Ang digital nga himan sa pamaligya makadugtong sa tradisyonal nga industriya ngadto sa modernong pagbaligya — apan ang pagka-epektibo niini kinahanglan pa sulayan sa tinuod nga paggamit.", "Maiuugnay ng isang digital na kagamitan sa komersiyo ang tradisyonal na industriya sa modernong pagbebenta — ngunit kailangan pang subukin ang bisa nito sa aktuwal na paggamit.")],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="pb-16 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow>
                  <span className="tabular-nums">12</span> <T en="About the Study" ceb="Bahin sa Pagtuon" fil="Tungkol sa Pag-aaral" />
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 font-display text-balance text-[2.3rem] leading-[1.05] font-medium sm:text-5xl lg:text-6xl">
                  {site.studyTitle}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg text-ink-soft">
                  {site.degree} · {site.institution}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="flex lg:col-span-4 lg:justify-end">
              <CnuLogo size={140} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading eyebrow={<T en="Purpose" ceb="Katuyoan" fil="Layunin" />} title={<T en="Why this study" ceb="Nganong kini nga pagtuon" fil="Bakit ang pag-aaral na ito" />} />
            </Reveal>
            <Reveal delay={0.08} className="mt-6 space-y-4 text-pretty leading-relaxed text-ink-soft">
              <p>
                <T
                  en="Studies of chicharon often focus on economics or cooking technique. The researchers saw a gap in its socio-cultural side — especially the “language” formed around selling and eating it, and how different sectors see it in daily life."
                  ceb="Ang mga pagtuon bahin sa chicharon kasagaran nagtutok sa ekonomiya o teknik sa pagluto. Nakita sa mga tigpanukiduki ang kakulang sa sosyo-kultural nga bahin niini — labi na ang “pinulongan” nga naporma palibot sa pagbaligya ug pagkaon niini, ug kon giunsa kini pagtan-aw sa nagkalain-laing sektor sa adlaw-adlaw nga kinabuhi."
                  fil="Kadalasang nakatuon sa ekonomiya o teknik ng pagluluto ang mga pag-aaral sa chicharon. Nakita ng mga mananaliksik ang puwang sa sosyo-kultural na aspekto nito — lalo na ang “wika” na nabuo sa pagbebenta at pagkain nito, at kung paano ito tinitingnan ng iba't ibang sektor sa pang-araw-araw na buhay."
                />
              </p>
              <p>
                <T
                  en="The study aimed to describe citizens' socio-cultural perspective on the language and culture of chicharon, examine its influence on livelihood, compare sector views, and use these to build a digital tool for commerce."
                  ceb="Ang tumong sa pagtuon mao ang paghulagway sa sosyo-kultural nga panglantaw sa mga lumulupyo bahin sa pinulongan ug kultura sa chicharon, pagsusi sa impluwensiya niini sa panginabuhian, pagtandi sa panglantaw sa mga sektor, ug paggamit niini aron makahimo og digital nga himan sa pamaligya."
                  fil="Layunin ng pag-aaral na ilarawan ang sosyo-kultural na perspektiba ng mga mamamayan sa wika at kultura ng chicharon, suriin ang impluwensiya nito sa kabuhayan, ihambing ang pananaw ng mga sektor, at gamitin ang mga ito upang bumuo ng digital na kagamitan sa komersiyo."
                />
              </p>
            </Reveal>
          </div>
          <ol className="space-y-3 lg:col-span-7">
            {objectives.map(([fil, en], i) => (
              <Reveal as="li" key={fil} delay={i * 0.05}>
                <div className="flex items-start gap-5 rounded-2xl bg-paper p-5">
                  <span className="font-display text-3xl leading-none text-crisp tabular-nums">{i + 1}</span>
                  <div>
                    <p className="font-display text-xl font-medium">
                      <T v={en} />
                    </p>
                    <p className="text-sm italic text-ink-faint">{fil}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={<T en="Method" ceb="Pamaagi" fil="Metodo" />} title={<T en="How the research was done" ceb="Giunsa paghimo ang panukiduki" fil="Paano isinagawa ang pananaliksik" />} />
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {method.map(([k, v]) => (
              <StaggerItem key={k.en} className="bg-surface p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-crisp">
                  <T v={k} />
                </p>
                <p className="mt-2 font-display text-xl leading-snug">
                  <T v={v} />
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {theories.map((t) => (
              <Reveal key={t.t}>
                <article className="h-full rounded-3xl border border-line p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-crisp">
                    <T en="Theoretical framework" ceb="Teoretikal nga balangkas" fil="Teoretikal na balangkas" />
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium">{t.t}</h3>
                  <p className="text-sm text-ink-faint">{t.a}</p>
                  <p className="mt-4 leading-relaxed text-ink-soft">
                    <T v={t.d} />
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="dark-surface bg-night py-20 text-cream lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Kongklusyon" title={<T en="What the study concludes" ceb="Unsay konklusyon sa pagtuon" fil="Ang kongklusyon ng pag-aaral" />} />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {conclusions.map(([t, d]) => (
              <StaggerItem key={t.en}>
                <div className="h-full rounded-3xl border border-cream/15 p-7">
                  <h3 className="font-display text-2xl">
                    <T v={t} />
                  </h3>
                  <p className="mt-3 leading-relaxed text-cream/75">
                    <T v={d} />
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 max-w-3xl">
            <p className="font-display text-2xl leading-snug italic sm:text-3xl">
              <T
                en="Carcar chicharon is more than a commercial product. It reflects the connection of language, culture, livelihood and identity."
                ceb="Ang chicharon sa Carcar labaw pa sa usa ka komersiyal nga produkto. Nagpakita kini sa koneksiyon sa pinulongan, kultura, panginabuhian ug pagkatawo."
                fil="Higit pa sa isang komersiyal na produkto ang chicharon ng Carcar. Sinasalamin nito ang ugnayan ng wika, kultura, kabuhayan at pagkakakilanlan."
              />
            </p>
            <p className="mt-3 text-sm text-cream/60">
              <T en="Paraphrased from the study's general conclusion (Kabanata 5)." ceb="Gi-paraphrase gikan sa kinatibuk-ang konklusyon sa pagtuon (Kabanata 5)." fil="Hinango mula sa pangkalahatang kongklusyon ng pag-aaral (Kabanata 5)." />
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                eyebrow={<T en="This website" ceb="Kini nga website" fil="Ang website na ito" />}
                title={<T en="The study's digital output" ceb="Ang digital nga output sa pagtuon" fil="Ang digital na output ng pag-aaral" />}
                intro={
                  <T
                    en="This platform is the proposed digital tool for commercialisation arising from the fifth objective. It turns the six recommended features into pages: product introduction, identity and language, quality information, ordering and contact, price and options, and feedback and trust."
                    ceb="Kini nga plataporma mao ang gisugyot nga digital nga himan sa pamaligya gikan sa ikalimang tumong. Gihimo niini nga mga panid ang unom ka girekomendar nga bahin: pagpaila sa produkto, pagkatawo ug pinulongan, impormasyon sa kalidad, pag-order ug kontak, presyo ug kapilian, ug feedback ug pagsalig."
                    fil="Ang platapormang ito ang iminungkahing digital na kagamitan sa pagkokomersyo mula sa ikalimang layunin. Ginagawa nitong mga pahina ang anim na inirekomendang tampok: pagpapakilala sa produkto, pagkakakilanlan at wika, impormasyon sa kalidad, pag-order at pakikipag-ugnayan, presyo at pagpipilian, at pidbak at tiwala."
                  />
                }
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/digital-culture">
                <T en="See the six features" ceb="Tan-awa ang unom ka bahin" fil="Tingnan ang anim na tampok" />
              </ButtonLink>
              <ButtonLink href="/references" variant="ghost">
                <T en="Sources" ceb="Mga tinubdan" fil="Mga sanggunian" />
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6">
            <ImagePlaceholder id="about-fieldwork" className="rounded-[28px]" sizes="(min-width:1024px) 50vw, 92vw" />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <ResearchersSection />
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {panel.map((p) => (
              <div key={p.name} className="rounded-2xl border border-line bg-paper p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">
                  <T en="Thesis panel" ceb="Panel sa tesis" fil="Panel ng tesis" /> · {p.role}
                </p>
                <p className="mt-1 font-display text-lg">{p.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
