import Link from "next/link";
import { ArrowRight, ArrowUpRight, ClipboardList, Landmark, MapPin, MonitorSmartphone, Users } from "lucide-react";
import { ImagePlaceholder, PhotoCredit } from "@/components/ImagePlaceholder";
import { ImageReveal, Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ScrollStory } from "@/components/ScrollStory";
import { Gallery } from "@/components/Gallery";
import { FeaturedQuotes } from "@/components/QuoteExplorer";
import { CnuLogo, ResearchersSection } from "@/components/Researchers";
import { CountUp } from "@/components/CountUp";
import { ButtonLink, Container, Eyebrow, QuoteBlock, SectionHeading, TextLink } from "@/components/ui";
import { quoteById } from "@/data/quotes";
import { site } from "@/data/site";
import { T, tr } from "@/lib/i18n";

const why = [
  { title: tr("Culture", "Kultura", "Kultura"), fil: "Kultural na pagpapahalaga", img: "home-why-culture", href: "/culture",
    text: tr("Chicharon carries social and cultural meanings passed on over time — a sagisag (symbol) of local identity and pride.",
      "Ang chicharon nagdala og sosyal ug kultural nga kahulogan nga gipasa sa paglabay sa panahon — usa ka simbolo sa lokal nga pagkatawo ug garbo.",
      "Nagdadala ang chicharon ng mga kahulugang panlipunan at kultural na naipapasa sa paglipas ng panahon — sagisag ng lokal na pagkakakilanlan at pagmamalaki.") },
  { title: tr("Family", "Pamilya", "Pamilya"), fil: "Pamilya bilang unang daan", img: "home-why-family", href: "/culture",
    text: tr("Many respondents first tasted it as children — brought home, served and shared by parents and grandparents.",
      "Daghang tigtubag ang unang nakatilaw niini sa bata pa — gidala sa balay, gisilbi ug gipaambit sa mga ginikanan ug apohan.",
      "Maraming tagatugon ang unang nakatikim nito noong bata pa — iniuwi, inihain at ibinahagi ng mga magulang at lolo at lola.") },
  { title: tr("Pasalubong", "Pasalubong", "Pasalubong"), fil: "Tradisyon ng pasalubong", img: "home-why-pasalubong", href: "/pasalubong",
    text: tr("Bought on the way home and shared — a way of showing you remembered the people waiting for you.",
      "Ginapalit sa pagpauli ug ginapaambit — paagi sa pagpakita nga nahinumdoman nimo ang mga naghulat kanimo.",
      "Binibili pauwi at ibinabahagi — paraan ng pagpapakitang naalala mo ang mga naghihintay sa iyo.") },
  { title: tr("Community", "Komunidad", "Komunidad"), fil: "Kakilala at kaibigan", img: "home-why-community", href: "/culture",
    text: tr("Friends, co-workers and neighbours spread the word through recommendations and everyday conversation.",
      "Ang mga higala, kauban sa trabaho ug silingan mokaylap sa balita pinaagi sa rekomendasyon ug adlaw-adlaw nga istoryahanay.",
      "Ikinakalat ng mga kaibigan, katrabaho at kapitbahay ang balita sa pamamagitan ng rekomendasyon at pang-araw-araw na kuwentuhan.") },
  { title: tr("Livelihood", "Panginabuhian", "Kabuhayan"), fil: "Kabuhayan", img: "home-why-livelihood", href: "/livelihood",
    text: tr("From suppliers and cooks to shops and bus vendors, the industry supports the daily needs of many families.",
      "Gikan sa mga supplier ug magluluto hangtod sa mga tindahan ug tindera sa bus, ang industriya nagsuporta sa adlaw-adlaw nga panginahanglan sa daghang pamilya.",
      "Mula sa mga supplier at tagaluto hanggang sa mga tindahan at nagtitinda sa bus, tinutugunan ng industriya ang pang-araw-araw na pangangailangan ng maraming pamilya.") },
  { title: tr("Tourism", "Turismo", "Turismo"), fil: "Turismo", img: "home-why-tourism", href: "/explore-carcar",
    text: tr("Visitors pass through — or come on purpose — to taste it. For many, a visit isn't complete without it.",
      "Ang mga bisita moagi — o tinuyo nga moanha — aron motilaw niini. Para sa kadaghanan, dili kompleto ang pagbisita kon wala kini.",
      "Dumaraan ang mga bisita — o sadyang pumupunta — upang tikman ito. Para sa marami, hindi kumpleto ang pagbisita kung wala ito.") },
];

const findings = [
  { n: "01", title: "Kultural na pagpapahalaga", en: tr("Cultural value", "Kultural nga bili", "Kultural na pagpapahalaga"), href: "/culture",
    text: tr("Three cultural values emerged: passing on cultural knowledge, the tradition of pasalubong and sharing, and integration into everyday life.",
      "Tulo ka kultural nga bili ang mitungha: pagpasa sa kahibalo sa kultura, ang tradisyon sa pasalubong ug pagpaambit, ug ang pagkahiusa niini sa adlaw-adlaw nga kinabuhi.",
      "Tatlong kultural na pagpapahalaga ang lumitaw: pagpapasa ng kultural na kaalaman, tradisyon ng pasalubong at pagbabahagi, at integrasyon sa pang-araw-araw na pamumuhay.") },
  { n: "02", title: "Impluwensiya sa pangkabuhayan", en: tr("Livelihood", "Panginabuhian", "Kabuhayan"), href: "/livelihood",
    text: tr("The industry supports workers, vendors, suppliers and resellers — while facing competition and changing prices.",
      "Ang industriya nagsuporta sa mga mamumuo, tindera, supplier ug mamaligya-usab — samtang nag-atubang sa kompetisyon ug nag-usab-usab nga presyo.",
      "Sinusuportahan ng industriya ang mga manggagawa, nagtitinda, supplier at muling nagbebenta — habang humaharap sa kompetisyon at nagbabagong presyo.") },
  { n: "03", title: "Iba't ibang perspektiba", en: tr("Sector perspectives", "Panglantaw sa mga sektor", "Perspektiba ng mga sektor"), href: "/people",
    text: tr("Makers value skill and tradition; vendors, income; buyers, taste and price; the community, identity; tourists, the experience.",
      "Ang mga naghimo nagpabili sa kahanas ug tradisyon; ang mga tindera, sa kita; ang mga mamalitay, sa lami ug presyo; ang komunidad, sa pagkatawo; ang mga turista, sa kasinatian.",
      "Pinahahalagahan ng mga gumagawa ang kasanayan at tradisyon; ng mga nagtitinda, ang kita; ng mga mamimili, ang lasa at presyo; ng komunidad, ang pagkakakilanlan; ng mga turista, ang karanasan.") },
  { n: "04", title: "Paggawa, pagbebenta, pagkonsumo", en: tr("Making, selling, eating", "Paghimo, pagbaligya, pagkaon", "Paggawa, pagbebenta, pagkonsumo"), href: "/how-its-made",
    text: tr("Cleaning, boiling, sun-drying, seasoning and repeated frying; selling in shops, markets, terminals and buses; eaten as snack, ulam and pasalubong.",
      "Paglimpyo, paglaswa, pagbulad, pagtimpla ug balik-balik nga pagprito; gibaligya sa tindahan, merkado, terminal ug bus; gikaon isip meryenda, sud-an ug pasalubong.",
      "Paglilinis, pagpapakulo, pagpapatuyo sa araw, pagtitimpla at paulit-ulit na pagprito; ibinebenta sa tindahan, palengke, terminal at bus; kinakain bilang meryenda, ulam at pasalubong.") },
  { n: "05", title: "Digital na kagamitan", en: tr("Digital tool", "Digital nga himan", "Digital na kagamitan"), href: "/digital-culture",
    text: tr("Six features were proposed for a digital commerce tool — this website is the platform built from them.",
      "Unom ka bahin ang gisugyot alang sa usa ka digital nga himan sa pagnegosyo — kini nga website ang plataporma nga gihimo gikan niini.",
      "Anim na tampok ang iminungkahi para sa isang digital na kagamitan sa pagkokomersyo — ang website na ito ang platapormang nabuo mula rito.") },
];

const journey = [
  { t: tr("Carcar", "Carcar", "Carcar"), d: tr("Passing through on the road south", "Moagi sa dalan paingon sa habagatan", "Dumaraan sa daan patimog"), img: "pasalubong-1" },
  { t: tr("Purchase", "Palit", "Pagbili"), d: tr("Tasting, choosing, buying", "Motilaw, mopili, mopalit", "Pagtikim, pagpili, pagbili"), img: "pasalubong-2" },
  { t: tr("Travel", "Biyahe", "Biyahe"), d: tr("Carried on the bus home", "Gidala sa bus pauli", "Bitbit sa bus pauwi"), img: "pasalubong-3" },
  { t: tr("Home", "Balay", "Tahanan"), d: tr("Awaited by family", "Gihulat sa pamilya", "Hinihintay ng pamilya"), img: "pasalubong-4" },
  { t: tr("Share", "Paambit", "Pagbabahagi"), d: tr("Opened and shared together", "Giablihan ug gipaambit", "Binubuksan at pinagsasaluhan"), img: "pasalubong-5" },
];

const stats = [
  { v: 100, Icon: Users, l: tr("Respondents — locals and tourists in Carcar", "Mga tigtubag — lokal ug turista sa Carcar", "Mga tagatugon — lokal at turista sa Carcar") },
  { v: 5, Icon: ClipboardList, l: tr("Research objectives, from culture to a digital tool", "Mga tumong sa panukiduki, gikan sa kultura hangtod sa digital nga himan", "Mga layunin ng pananaliksik, mula kultura hanggang digital na kagamitan") },
  { v: 5, Icon: Landmark, l: tr("Sectors compared: makers, vendors, buyers, community, tourists", "Mga sektor nga gitandi: naghimo, tindera, mamalitay, komunidad, turista", "Mga sektor na inihambing: gumagawa, nagtitinda, mamimili, komunidad, turista") },
  { v: 6, Icon: MonitorSmartphone, l: tr("Features proposed for the digital commerce tool", "Mga bahin nga gisugyot alang sa digital nga himan", "Mga tampok na iminungkahi para sa digital na kagamitan") },
];

export default function Home() {
  return (
    <>
      {/* ───────────── HERO */}
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-10 pb-16 pt-6 sm:pt-10 lg:min-h-[calc(100dvh-72px)] lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-6">
          <div className="relative z-10 lg:col-span-6">
            <Reveal>
              <Eyebrow>
                <T en="Carcar City, Cebu · Heritage City of the South" ceb="Dakbayan sa Carcar, Sugbo · Heritage City of the South" fil="Lungsod ng Carcar, Cebu · Heritage City of the South" />
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 font-display text-balance text-[2.8rem] leading-[0.98] font-medium tracking-tight sm:text-7xl lg:text-[5.2rem] xl:text-[5.8rem]">
                <T en="More than a crunch." ceb="Labaw pa sa langutngot." fil="Higit pa sa lutong." />
                <span className="block italic text-crisp">
                  <T en="A taste of Carcar." ceb="Usa ka lami sa Carcar." fil="Isang lasa ng Carcar." />
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-7 max-w-xl text-pretty text-[17px] leading-relaxed text-ink-soft sm:text-lg">
                <T
                  en={<>Carcar Chicharon is not only food or merchandise. Our study of 100 residents and visitors found it woven into Carcar&apos;s <strong className="font-semibold text-ink">identity</strong>, its <strong className="font-semibold text-ink">family traditions</strong>, the <strong className="font-semibold text-ink">pasalubong</strong> people carry home, the <strong className="font-semibold text-ink">livelihood</strong> of many households, and everyday life.</>}
                  ceb={<>Ang Chicharon sa Carcar dili lang pagkaon o baligya. Ang among pagtuon sa 100 ka residente ug bisita nakakaplag nga kini nahilambigit sa <strong className="font-semibold text-ink">pagkatawo</strong> sa Carcar, sa <strong className="font-semibold text-ink">tradisyon sa pamilya</strong>, sa <strong className="font-semibold text-ink">pasalubong</strong> nga gidala pauli, sa <strong className="font-semibold text-ink">panginabuhian</strong> sa daghang panimalay, ug sa adlaw-adlaw nga kinabuhi.</>}
                  fil={<>Ang Chicharon ng Carcar ay hindi lamang pagkain o paninda. Natuklasan ng aming pag-aaral sa 100 residente at bisita na nakaugnay ito sa <strong className="font-semibold text-ink">pagkakakilanlan</strong> ng Carcar, sa <strong className="font-semibold text-ink">tradisyon ng pamilya</strong>, sa <strong className="font-semibold text-ink">pasalubong</strong> na iniuuwi, sa <strong className="font-semibold text-ink">kabuhayan</strong> ng maraming sambahayan, at sa pang-araw-araw na buhay.</>}
                />
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/story">
                <T en="Explore the Story" ceb="Susiha ang Istorya" fil="Tuklasin ang Kuwento" />
              </ButtonLink>
              <ButtonLink href="/discover" variant="ghost">
                <T en="Discover Carcar Chicharon" ceb="Diskobrehi ang Chicharon sa Carcar" fil="Tuklasin ang Chicharon ng Carcar" />
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.26} className="mt-10 flex items-center gap-3 border-t border-line pt-6">
              <CnuLogo size={44} />
              <p className="text-xs leading-snug text-ink-faint">
                <T en="A research output of" ceb="Usa ka output sa panukiduki sa" fil="Isang output ng pananaliksik ng" />{" "}
                <span className="font-medium text-ink-soft">Departamento ng Filipino, Cebu Normal University</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative lg:col-span-6">
            <Parallax className="aspect-[4/5] rounded-[32px] shadow-2xl shadow-ink/15 sm:aspect-[4/3] lg:aspect-[4/5] lg:max-h-[78dvh]" amount={50} overlay={<PhotoCredit id="home-hero" className="right-3 top-3" />}>
              <ImagePlaceholder id="home-hero" fill priority hideCredit sizes="(min-width:1024px) 50vw, 100vw" />
            </Parallax>
            <div className="absolute -bottom-5 left-4 max-w-[78%] rounded-2xl border border-line bg-surface/95 p-4 shadow-xl shadow-ink/10 backdrop-blur sm:left-6 sm:p-5 lg:-left-10">
              <p className="font-display text-[15px] leading-snug italic sm:text-base">“Ang tinuod nga chicharon, sa Carcar ra gyud.”</p>
              <p className="mt-1.5 text-xs text-ink-faint">
                <T en="Respondent R42 · “The real chicharon is only in Carcar.”" ceb="Tigtubag R42" fil="Tagatugon R42 · “Ang tunay na chicharon ay nasa Carcar lamang.”" />
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ───────────── STUDY AT A GLANCE */}
      <section aria-labelledby="glance" className="border-y border-line bg-surface">
        <Container className="py-14 lg:py-16">
          <h2 id="glance" className="sr-only">
            <T en="The study at a glance" ceb="Ang pagtuon sa usa ka pagtan-aw" fil="Ang pag-aaral sa isang sulyap" />
          </h2>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((x) => (
              <div key={x.l.en} className="group">
                <dt className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-crisp/10 text-crisp transition-transform duration-300 group-hover:-rotate-6">
                    <x.Icon className="size-5" aria-hidden />
                  </span>
                  <CountUp to={x.v} className="block font-display text-5xl leading-none font-medium sm:text-6xl" />
                </dt>
                <dd className="mt-3 text-sm leading-snug text-ink-soft">
                  <T v={x.l} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-xs text-ink-faint">
            <T
              en="Descriptive design with a qualitative approach · semi-structured interviews · convenience sampling (Kabanata 3)."
              ceb="Deskriptibong disenyo nga adunay kwalitatibong pamaagi · semi-structured nga interbyu · convenience sampling (Kabanata 3)."
              fil="Deskriptibong disenyo na may kwalitatibong dulog · semi-structured na panayam · convenience sampling (Kabanata 3)."
            />
          </p>
        </Container>
      </section>

      {/* ───────────── WHY IT MATTERS */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                eyebrow={<T en="Why chicharon matters" ceb="Nganong importante ang chicharon" fil="Bakit mahalaga ang chicharon" />}
                title={<T en={<>A food that holds a <em className="text-crisp">city&apos;s story</em></>} ceb={<>Pagkaon nga nagdala sa <em className="text-crisp">istorya sa dakbayan</em></>} fil={<>Pagkaing nagtataglay ng <em className="text-crisp">kuwento ng lungsod</em></>} />}
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-pretty leading-relaxed text-ink-soft">
                <T
                  en="Respondents described chicharon through six connected lenses. Hover or tap a card to see what the study found — then follow it deeper."
                  ceb="Gihulagway sa mga tigtubag ang chicharon pinaagi sa unom ka nagdugtong nga lente. I-hover o i-tap ang usa ka kard aron makita ang nakaplagan sa pagtuon."
                  fil="Inilarawan ng mga tagatugon ang chicharon sa anim na magkakaugnay na lente. I-hover o i-tap ang isang kard upang makita ang natuklasan ng pag-aaral."
                />
              </p>
            </Reveal>
          </div>

          <Stagger className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3 lg:gap-6">
            {why.map((w, i) => (
              <StaggerItem key={w.img} className="w-[80%] shrink-0 snap-center sm:w-[55%] md:w-auto">
                <Link href={w.href} className="group relative block aspect-[4/5] overflow-hidden rounded-[28px]">
                  <div className="absolute inset-0 transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105">
                    <ImagePlaceholder id={w.img} fill compact sizes="(min-width:1024px) 30vw, (min-width:768px) 45vw, 80vw" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" />
                  <div className="dark-surface absolute inset-x-0 bottom-0 p-6 text-cream">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-crisp-light">
                      {String(i + 1).padStart(2, "0")} · {w.fil}
                    </p>
                    <h3 className="mt-2 flex items-center justify-between font-display text-3xl font-medium">
                      <T v={w.title} />
                      <ArrowUpRight aria-hidden className="size-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/85 transition-all duration-500 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-48 lg:group-hover:opacity-100 lg:group-focus-visible:max-h-48 lg:group-focus-visible:opacity-100">
                      <T v={w.text} />
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ───────────── SCROLL STORY */}
      <ScrollStory />

      {/* ───────────── A TASTE OF CARCAR */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-6">
              <SectionHeading eyebrow={<T en="A taste of Carcar" ceb="Lami sa Carcar" fil="Lasa ng Carcar" />} title="Lami, malutong, presko." />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <p className="text-pretty leading-relaxed text-ink-soft">
                <T
                  en={<>Delicious, crisp, fresh — the words respondents used most. They prized chicharon that is newly cooked, “not hard on the teeth,” with the right saltiness, best dipped in <em>suka na may sili</em>.</>}
                  ceb={<>Lami, malutong, presko — ang mga pulong nga kanunay gigamit sa mga tigtubag. Gipabilhan nila ang chicharon nga bag-ong luto, “dili gahi sa ngipon,” husto ang kaparat, ug labing lami kon itusmaw sa <em>suka nga may sili</em>.</>}
                  fil={<>Masarap, malutong, sariwa — ang mga salitang madalas gamitin ng mga tagatugon. Pinahahalagahan nila ang chicharong bagong luto, “hindi matigas sa ngipin,” sakto ang alat, at pinakamasarap kapag isinawsaw sa <em>suka na may sili</em>.</>}
                />
              </p>
            </Reveal>
          </div>
          <Reveal className="mt-12">
            <Gallery
              items={[
                { id: "home-taste-1", caption: tr("“Laman” — chicharon with meat, a Cebuano term cited in the study.", "“Laman” — chicharon nga may unod, usa ka pulong nga gikutlo sa pagtuon.", "“Laman” — chicharon na may laman, isang terminong binanggit sa pag-aaral.") },
                { id: "home-taste-2", caption: tr("Dipped in suka na may sili — how many first learned to eat it.", "Gitusmaw sa suka nga may sili — sama sa unang pagkat-on sa kadaghanan.", "Isinawsaw sa suka na may sili — kung paano ito unang natutunang kainin ng marami.") },
                { id: "home-taste-3", caption: tr("Displayed for sale by the basket.", "Gibaligya nga nakabutang sa basket.", "Ibinebenta nang nakalagay sa basket.") },
                { id: "home-taste-4", caption: tr("Packed in different sizes at a Carcar shop.", "Giputos sa nagkalain-laing gidak-on sa usa ka tindahan sa Carcar.", "Nakabalot sa iba't ibang laki sa isang tindahan sa Carcar.") },
              ]}
            />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <QuoteBlock quote={quoteById("r87-quality")} />
            </Reveal>
            <Reveal delay={0.08}>
              <QuoteBlock quote={quoteById("r42-quality")} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ───────────── KEY FINDINGS */}
      <section className="border-y border-line bg-surface py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={<T en="What the study found" ceb="Unsay nakaplagan sa pagtuon" fil="Ang natuklasan ng pag-aaral" />}
              title={<T en="Five questions, five answers" ceb="Lima ka pangutana, lima ka tubag" fil="Limang tanong, limang sagot" />}
              intro={
                <T
                  en="The study set out to describe the socio-cultural perspective of citizens on Carcar chicharon. Here is what each objective revealed."
                  ceb="Ang tumong sa pagtuon mao ang paghulagway sa sosyo-kultural nga panglantaw sa mga lumulupyo bahin sa chicharon sa Carcar. Ania ang gipadayag sa matag tumong."
                  fil="Layunin ng pag-aaral na ilarawan ang sosyo-kultural na perspektiba ng mga mamamayan tungkol sa chicharon ng Carcar. Narito ang inilantad ng bawat layunin."
                />
              }
            />
          </Reveal>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {findings.map((f, i) => (
              <Reveal as="li" key={f.n} delay={i * 0.04}>
                <Link href={f.href} className="group grid gap-3 py-7 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-8 lg:grid-cols-[5rem_22rem_1fr_auto]">
                  <span className="font-display text-3xl text-crisp/50 tabular-nums transition-colors group-hover:text-crisp">{f.n}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium">
                      <T v={f.en} />
                    </h3>
                    <p className="text-sm italic text-ink-faint">{f.title}</p>
                  </div>
                  <p className="text-pretty leading-relaxed text-ink-soft sm:col-start-2 lg:col-start-auto">
                    <T v={f.text} />
                  </p>
                  <span className="hidden size-11 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-crisp group-hover:bg-crisp group-hover:text-white sm:col-start-3 sm:row-start-1 sm:grid lg:col-start-4">
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* ───────────── WHERE IS CARCAR */}
      <section className="py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-[28px] border border-line bg-surface p-6 shadow-xl shadow-ink/5">
              <div className="relative aspect-[6/7] overflow-hidden rounded-2xl bg-[#cfe6f4]">
                <ImagePlaceholder id="carcar-locator" fill sizes="380px" imgClassName="object-contain!" creditPosition="bottom" />
              </div>
              <div className="absolute -right-4 -top-4 size-20 overflow-hidden rounded-full bg-white shadow-lg ring-4 ring-paper sm:-right-6 sm:-top-6 sm:size-24">
                <ImagePlaceholder id="carcar-seal" fill compact sizes="96px" imgClassName="object-contain! p-1" />
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                eyebrow={<T en="Where it comes from" ceb="Asa kini gikan" fil="Saan ito nagmula" />}
                title={<T en="Carcar, Cebu" ceb="Carcar, Sugbo" fil="Carcar, Cebu" />}
                intro={
                  <T
                    en="The study was conducted in the City of Carcar, chosen because it remains an important centre of the production, trade and tradition of chicharon in Cebu. It sits on the road to southern Cebu — which is why so many travellers stop here."
                    ceb="Ang pagtuon gihimo sa Dakbayan sa Carcar, gipili kay kini nagpabilin nga importanteng sentro sa produksiyon, pamaligya ug tradisyon sa chicharon sa Sugbo. Naa kini sa dalan paingon sa habagatang Sugbo — mao nga daghang biyahero ang mohunong dinhi."
                    fil="Isinagawa ang pag-aaral sa Lungsod ng Carcar, na pinili dahil nananatili itong mahalagang sentro ng produksiyon, kalakalan at tradisyon ng chicharon sa Cebu. Nasa daan ito patungong timog Cebu — kaya maraming biyahero ang humihinto rito."
                  />
                }
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { Icon: MapPin, a: tr("Locale of the study", "Dapit sa pagtuon", "Lugar ng pag-aaral"), b: tr("City of Carcar, Province of Cebu", "Dakbayan sa Carcar, Probinsya sa Sugbo", "Lungsod ng Carcar, Lalawigan ng Cebu") },
                { Icon: Landmark, a: tr("Known as", "Nailhan isip", "Kilala bilang"), b: tr("Heritage City of the South", "Heritage City of the South", "Heritage City of the South") },
              ].map((x) => (
                <div key={x.a.en} className="flex gap-4 rounded-2xl border border-line bg-surface p-5">
                  <x.Icon className="mt-0.5 size-5 shrink-0 text-crisp" aria-hidden />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                      <T v={x.a} />
                    </p>
                    <p className="mt-1 font-display text-lg">
                      <T v={x.b} />
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <TextLink href="/explore-carcar">
                <T en="Explore Carcar" ceb="Libota ang Carcar" fil="Libutin ang Carcar" />
              </TextLink>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ───────────── FROM CARCAR TO HOME */}
      <section className="border-t border-line bg-surface py-20 lg:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                eyebrow={<T en="From Carcar to home" ceb="Gikan sa Carcar pauli" fil="Mula Carcar pauwi" />}
                title={<T en="Every pack has a journey" ceb="Matag putos adunay panaw" fil="Bawat balot ay may paglalakbay" />}
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="leading-relaxed text-ink-soft">
                “Chicharon gyud ang number one nga pillion sa mga tao isip pasalubong.” —{" "}
                <T en="R35: chicharon is people's number-one pasalubong." ceb="R35" fil="R35: ang chicharon ang numero unong pasalubong ng mga tao." />
              </p>
            </Reveal>
          </div>
          <ol className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0">
            {journey.map((j, i) => (
              <Reveal as="li" key={j.img} delay={i * 0.07} className="w-[62%] shrink-0 snap-center sm:w-[38%] lg:w-auto">
                <div className="group">
                  <div className="relative overflow-hidden rounded-3xl">
                    <div className="transition-transform duration-700 group-hover:scale-105">
                      <ImagePlaceholder id={j.img} aspect="3 / 4" compact sizes="(min-width:1024px) 20vw, 60vw" />
                    </div>
                    <span className="absolute left-3 top-3 grid size-9 place-items-center rounded-full bg-paper text-sm font-semibold text-ink tabular-nums">{i + 1}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <h3 className="font-display text-2xl font-medium">
                      <T v={j.t} />
                    </h3>
                    {i < journey.length - 1 && <span aria-hidden className="hidden h-px flex-1 bg-line lg:block" />}
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">
                    <T v={j.d} />
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10">
            <TextLink href="/pasalubong">
              <T en="Follow the full pasalubong journey" ceb="Sunda ang tibuok panaw sa pasalubong" fil="Sundan ang buong paglalakbay ng pasalubong" />
            </TextLink>
          </Reveal>
        </Container>
      </section>

      {/* ───────────── VOICES */}
      <section className="py-20 lg:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={<T en="In their own words" ceb="Sa ilang kaugalingong pulong" fil="Sa sarili nilang salita" />}
              title={<T en="Voices from the study" ceb="Mga tingog gikan sa pagtuon" fil="Mga tinig mula sa pag-aaral" />}
              className="mb-10"
            />
          </Reveal>
          <Reveal>
            <FeaturedQuotes />
          </Reveal>
          <Reveal className="mt-8">
            <TextLink href="/voices">
              <T en="Read all verified statements" ceb="Basaha ang tanang beripikadong pamahayag" fil="Basahin ang lahat ng beripikadong pahayag" />
            </TextLink>
          </Reveal>
        </Container>
      </section>

      {/* ───────────── PEOPLE */}
      <section className="dark-surface bg-night py-20 text-cream lg:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                eyebrow={<T en="The people behind the product" ceb="Ang katawhan sa luyo sa produkto" fil="Ang mga tao sa likod ng produkto" />}
                title={<T en="Hands that make, sell and share it" ceb="Mga kamot nga naghimo, nagbaligya ug nagpaambit" fil="Mga kamay na gumagawa, nagbebenta at nagbabahagi" />}
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="leading-relaxed text-cream/75">
                “Nakinabang kay ang owner, ang maker, ang mga taw, ang lungsod, sila gyud tanan.” — R37.{" "}
                <T en="Everyone benefits: the owner, the maker, the people, the city." ceb="" fil="Lahat ay nakikinabang: ang may-ari, ang gumagawa, ang mga tao, ang lungsod." />
              </p>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { id: "home-people-1", r: tr("Vendors", "Mga tindera", "Mga nagtitinda"), d: tr("Shops, pasalubong centers and market stalls", "Mga tindahan, pasalubong center ug puwesto sa merkado", "Mga tindahan, pasalubong center at puwesto sa palengke") },
              { id: "home-people-2", r: tr("Producers", "Mga naghimo", "Mga gumagawa"), d: tr("Those who clean, dry, season and fry", "Ang mga maglimpyo, mobulad, motimpla ug moprito", "Ang mga naglilinis, nagpapatuyo, nagtitimpla at nagpiprito") },
              { id: "home-people-3", r: tr("Food workers of Carcar", "Mga mamumuo sa pagkaon sa Carcar", "Mga manggagawa sa pagkain ng Carcar"), d: tr("Cooks behind Carcar's food trade, from lechon to chicharon", "Mga magluluto sa luyo sa negosyo sa pagkaon sa Carcar, gikan sa lechon hangtod sa chicharon", "Mga tagaluto sa likod ng kalakalan ng pagkain sa Carcar, mula lechon hanggang chicharon") },
            ].map((p) => (
              <StaggerItem key={p.id}>
                <Link href="/people" className="group block">
                  <div className="overflow-hidden rounded-3xl">
                    <div className="transition-transform duration-700 group-hover:scale-105">
                      <ImagePlaceholder id={p.id} sizes="(min-width:640px) 30vw, 92vw" />
                    </div>
                  </div>
                  <h3 className="mt-5 flex items-center gap-2 font-display text-2xl font-medium">
                    <T v={p.r} />
                    <ArrowRight aria-hidden className="size-5 text-crisp-light transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="mt-1 text-sm text-cream/70">
                    <T v={p.d} />
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ───────────── DISCOVER CARCAR */}
      <section className="py-20 lg:py-32">
        <Container>
          <ImageReveal className="relative rounded-[32px]">
            <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]">
              <ImagePlaceholder id="home-discover-carcar" fill sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/45 to-night/5" />
              <div className="dark-surface absolute inset-0 flex items-end p-6 text-cream sm:p-10 lg:items-center lg:p-16">
                <div className="max-w-lg">
                  <Eyebrow>
                    <T en="Discover Carcar" ceb="Diskobrehi ang Carcar" fil="Tuklasin ang Carcar" />
                  </Eyebrow>
                  <h2 className="mt-4 font-display text-4xl leading-[1.02] font-medium sm:text-5xl lg:text-6xl">
                    <T en="Come for the chicharon. Stay for Carcar." ceb="Anhi alang sa chicharon. Pabilin alang sa Carcar." fil="Pumunta para sa chicharon. Manatili para sa Carcar." />
                  </h2>
                  <p className="mt-4 text-cream/85">
                    “Dili ka tinuod nga niadto sa Carcar kung wala kay dang chicharon.” — R44.{" "}
                    <T en="You haven't truly been to Carcar without bringing some home." ceb="" fil="Hindi ka tunay na nakapunta sa Carcar kung wala kang iniuwing chicharon." />
                  </p>
                  <div className="mt-7">
                    <ButtonLink href="/explore-carcar" variant="light">
                      <T en="Explore Carcar" ceb="Libota ang Carcar" fil="Libutin ang Carcar" />
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </ImageReveal>
        </Container>
      </section>

      {/* ───────────── RESEARCHERS */}
      <section id="researchers" className="scroll-mt-20 border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <ResearchersSection />
        </Container>
      </section>

      {/* ───────────── CLOSING CTA */}
      <section className="py-24 lg:py-36">
        <Container className="text-center">
          <Reveal>
            <p className="mx-auto max-w-4xl font-display text-balance text-[2.3rem] leading-[1.04] font-medium sm:text-6xl lg:text-7xl">
              <T
                en={<>Discover the story behind <span className="italic text-crisp">Carcar Chicharon.</span></>}
                ceb={<>Diskobrehi ang istorya sa luyo sa <span className="italic text-crisp">Chicharon sa Carcar.</span></>}
                fil={<>Tuklasin ang kuwento sa likod ng <span className="italic text-crisp">Chicharon ng Carcar.</span></>}
              />
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/story">
              <T en="Start the story" ceb="Sugdi ang istorya" fil="Simulan ang kuwento" />
            </ButtonLink>
            <ButtonLink href="/vendors" variant="ghost">
              <T en="Where to find it" ceb="Asa kini makit-an" fil="Saan ito mahahanap" />
            </ButtonLink>
          </Reveal>
          <p className="mx-auto mt-14 max-w-xl text-xs text-ink-faint">{site.studyTitle}</p>
        </Container>
      </section>
    </>
  );
}
