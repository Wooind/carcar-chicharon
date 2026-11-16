import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ImageReveal, ReadingProgress, Reveal } from "@/components/motion";
import { ButtonLink, Container, QuoteBlock, SourceNote, TextLink } from "@/components/ui";
import { quoteById } from "@/data/quotes";
import { cn } from "@/lib/cn";
import { T, tr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "The Story",
  description: "How Carcar Chicharon became part of Carcar's identity, family life, pasalubong culture and everyday life — told through the study's findings.",
};

const chapters = [
  {
    n: "01",
    kicker: tr("Carcar", "Carcar", "Carcar"),
    title: tr("A city people name by its chicharon", "Usa ka dakbayan nga gitawag sa iyang chicharon", "Isang lungsod na kinikilala sa chicharon nito"),
    body: [
      tr("Carcar is known as the “Heritage City of the South,” and the study chose it because it remains an important centre for the production, trade and tradition of chicharon in Cebu.",
        "Ang Carcar nailhan isip “Heritage City of the South,” ug gipili kini sa pagtuon kay nagpabilin kini nga importanteng sentro sa produksiyon, pamaligya ug tradisyon sa chicharon sa Sugbo.",
        "Kilala ang Carcar bilang “Heritage City of the South,” at pinili ito ng pag-aaral dahil nananatili itong mahalagang sentro ng produksiyon, kalakalan at tradisyon ng chicharon sa Cebu."),
      tr("Respondents said the link is immediate: mention Carcar, and people think of chicharon.",
        "Matod sa mga tigtubag, diha-diha ang koneksiyon: hisgoti ang Carcar, ug chicharon ang mahunahunaan sa mga tawo.",
        "Ayon sa mga tagatugon, agad-agad ang ugnayan: banggitin ang Carcar, at chicharon ang naiisip ng mga tao."),
    ],
    img: "story-carcar",
    quote: "r12-identity",
    href: "/explore-carcar",
    link: tr("Explore Carcar", "Libota ang Carcar", "Libutin ang Carcar"),
  },
  {
    n: "02",
    kicker: tr("Chicharon", "Chicharon", "Chicharon"),
    title: tr("Made with patience and practised hands", "Gihimo nga may pailob ug batid nga mga kamot", "Ginawa nang may tiyaga at sanay na mga kamay"),
    body: [
      tr("Respondents described pork skin that is cleaned, boiled, dried under the sun, seasoned and fried — sometimes more than once — until it puffs and crackles.",
        "Gihulagway sa mga tigtubag ang panit sa baboy nga gilimpyohan, gilaswa, gibulad sa adlaw, gitimplahan ug giprito — usahay kapila — hangtod mobukad ug molutok.",
        "Inilarawan ng mga tagatugon ang balat ng baboy na nililinis, pinakukuluan, pinatutuyo sa araw, tinitimplahan at piniprito — minsan higit sa isang beses — hanggang lumobo at lumutong."),
      tr("They also stressed that knowing exactly when it is done comes from experience, not from a recipe.",
        "Gihatagan usab nila og gibug-aton nga ang pagkahibalo kon kanus-a kini luto na gikan sa kasinatian, dili sa resipe.",
        "Binigyang-diin din nila na ang pagkaalam kung kailan ito luto na ay nagmumula sa karanasan, hindi sa resipe."),
    ],
    img: "made-step-5",
    quote: "r89-production",
    href: "/how-its-made",
    link: tr("From production to table", "Gikan sa paghimo hangtod sa lamesa", "Mula paggawa hanggang hapag"),
  },
  {
    n: "03",
    kicker: tr("Family", "Pamilya", "Pamilya"),
    title: tr("First tasted at home", "Unang natilawan sa balay", "Unang natikman sa tahanan"),
    body: [
      tr("For many respondents, the first encounter happened in childhood — a grandparent stopping in Carcar, a parent bringing some home, chicharon dipped in vinegar with chili at the table.",
        "Alang sa daghang tigtubag, ang unang engkwentro nahitabo sa pagkabata — usa ka apohan nga mihunong sa Carcar, usa ka ginikanan nga midala pauli, chicharon nga gitusmaw sa suka nga may sili sa lamesa.",
        "Para sa maraming tagatugon, nangyari ang unang pagkikita noong pagkabata — isang lolo o lola na huminto sa Carcar, isang magulang na nag-uwi, chicharong isinawsaw sa suka na may sili sa hapag."),
      tr("The study reads this through Vygotsky's socio-cultural theory: knowledge first forms socially, within the family, before it becomes one's own.",
        "Gibasa kini sa pagtuon pinaagi sa sosyo-kultural nga teorya ni Vygotsky: ang kahibalo unang maporma sa sosyal, sulod sa pamilya, sa dili pa kini mahimong kaugalingon.",
        "Binasa ito ng pag-aaral sa lente ng sosyo-kultural na teorya ni Vygotsky: unang nabubuo ang kaalaman sa lipunan, sa loob ng pamilya, bago ito maging sariling kaalaman."),
    ],
    img: "story-family",
    quote: "r2-family",
    href: "/culture",
    link: tr("Culture & identity", "Kultura ug pagkatawo", "Kultura at pagkakakilanlan"),
  },
  {
    n: "04",
    kicker: tr("The road", "Ang dalan", "Ang daan"),
    title: tr("Heard before it is tasted", "Nadungog sa dili pa matilawan", "Narinig bago pa natikman"),
    body: [
      tr("Others met it on the road. Vendors boarding buses at Carcar call out their goods and always say it comes from Carcar — so travellers learn both the food and the place.",
        "Ang uban nakaila niini sa dalan. Ang mga tindera nga mosakay sa bus sa Carcar mosinggit sa ilang baligya ug kanunay moingon nga gikan kini sa Carcar — busa mahibal-an sa mga biyahero ang pagkaon ug ang lugar.",
        "Ang iba ay nakakilala nito sa daan. Isinisigaw ng mga nagtitindang sumasakay sa bus sa Carcar ang kanilang paninda at lagi nilang sinasabing mula ito sa Carcar — kaya nakikilala ng mga biyahero ang pagkain at ang lugar."),
      tr("Trips south, such as to Simala, become chances to stop and buy.",
        "Ang mga biyahe sa habagatan, sama sa Simala, nahimong higayon sa paghunong ug pagpalit.",
        "Ang mga biyahe patimog, gaya ng sa Simala, ay nagiging pagkakataon upang huminto at bumili."),
    ],
    img: "story-road",
    quote: "r4-roadside",
    href: "/pasalubong",
    link: tr("The pasalubong journey", "Ang panaw sa pasalubong", "Ang paglalakbay ng pasalubong"),
  },
  {
    n: "05",
    kicker: tr("Pasalubong", "Pasalubong", "Pasalubong"),
    title: tr("Carried home, shared, remembered", "Gidala pauli, gipaambit, gihinumdoman", "Iniuwi, ibinahagi, inalala"),
    body: [
      tr("Chicharon is bought not only to eat but to bring home. Respondents called it the number-one pasalubong — given to family as a sign of love and remembrance.",
        "Ang chicharon gipalit dili lang aron kaonon kondili aron dad-on pauli. Gitawag kini sa mga tigtubag nga numero unong pasalubong — gihatag sa pamilya isip timaan sa gugma ug paghinumdom.",
        "Binibili ang chicharon hindi lamang upang kainin kundi upang iuwi. Tinawag ito ng mga tagatugon na numero unong pasalubong — ibinibigay sa pamilya bilang tanda ng pagmamahal at pag-alala."),
    ],
    img: "pasalubong-5",
    quote: "w41-pasalubong",
    href: "/pasalubong",
    link: tr("Chicharon as pasalubong", "Chicharon isip pasalubong", "Chicharon bilang pasalubong"),
  },
  {
    n: "06",
    kicker: tr("Everyday life", "Adlaw-adlaw nga kinabuhi", "Pang-araw-araw na buhay"),
    title: tr("Snack, ulam, Sunday tradition", "Meryenda, sud-an, tradisyon sa Domingo", "Meryenda, ulam, tradisyon tuwing Linggo"),
    body: [
      tr("Some eat it almost daily as a snack; others with rice and vinegar, or with family after Sunday Mass. Some now eat less for health reasons — yet still value it.",
        "Ang uban mokaon niini halos adlaw-adlaw isip meryenda; ang uban uban sa kan-on ug suka, o uban sa pamilya human sa Misa sa Domingo. Ang pipila mokaon na og gamay tungod sa panglawas — apan nagpabili gihapon niini.",
        "Halos araw-araw itong kinakain ng ilan bilang meryenda; ang iba ay may kasamang kanin at suka, o kasama ang pamilya pagkatapos ng Misa tuwing Linggo. Ang ilan ay kumakain na nang mas kaunti dahil sa kalusugan — ngunit pinahahalagahan pa rin ito."),
      tr("The study frames this as habitus (Bourdieu): practices repeated until they become part of ordinary life.",
        "Gihulma kini sa pagtuon isip habitus (Bourdieu): mga binuhatan nga gibalik-balik hangtod mahimong bahin sa ordinaryong kinabuhi.",
        "Inilalarawan ito ng pag-aaral bilang habitus (Bourdieu): mga gawing paulit-ulit hanggang maging bahagi ng karaniwang buhay."),
    ],
    img: "story-table",
    quote: "r90-everyday",
    href: "/culture",
    link: tr("Everyday culture", "Adlaw-adlaw nga kultura", "Pang-araw-araw na kultura"),
  },
];

export default function StoryPage() {
  return (
    <>
      <ReadingProgress />
      <PageHero
        index="01"
        eyebrow={<T en="The Story" ceb="Ang Istorya" fil="Ang Kuwento" />}
        imageId="story-hero"
        title={
          <T
            en={<>The story behind <span className="italic text-crisp">the crunch.</span></>}
            ceb={<>Ang istorya sa luyo sa <span className="italic text-crisp">langutngot.</span></>}
            fil={<>Ang kuwento sa likod ng <span className="italic text-crisp">lutong.</span></>}
          />
        }
        intro={<T en="Six chapters, drawn from the voices of 100 residents and visitors, on how a fried pork-skin snack became a symbol of a city." ceb="Unom ka kapitulo, gikan sa mga tingog sa 100 ka residente ug bisita, bahin sa kon giunsa sa usa ka pinritong panit sa baboy nga meryenda nahimong simbolo sa usa ka dakbayan." fil="Anim na kabanata, mula sa tinig ng 100 residente at bisita, kung paano naging simbolo ng isang lungsod ang isang meryendang piniritong balat ng baboy." />}
      />

      <Container className="pb-12">
        <nav aria-label="Chapters" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {chapters.map((c) => (
            <a key={c.n} href={`#ch-${c.n}`} className="shrink-0 rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-ink-soft transition-colors hover:border-crisp hover:text-ink">
              <span className="mr-2 tabular-nums text-crisp">{c.n}</span>
              <T v={c.kicker} />
            </a>
          ))}
        </nav>
      </Container>

      {chapters.map((c, i) => (
        <section key={c.n} id={`ch-${c.n}`} className="scroll-mt-24 py-14 lg:py-24">
          <Container>
            <div className={cn("grid items-center gap-10 lg:grid-cols-12 lg:gap-16")}>
              <ImageReveal className={cn("rounded-[28px] lg:col-span-6", i % 2 === 1 && "lg:order-2")}>
                <ImagePlaceholder id={c.img} aspect="4 / 3" sizes="(min-width:1024px) 50vw, 92vw" />
              </ImageReveal>
              <div className="lg:col-span-6">
                <Reveal>
                  <p className="flex items-baseline gap-4">
                    <span className="font-display text-6xl leading-none text-crisp/30 tabular-nums sm:text-7xl">{c.n}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crisp"><T v={c.kicker} /></span>
                  </p>
                  <h2 className="mt-4 font-display text-balance text-[2rem] leading-[1.05] font-medium sm:text-5xl"><T v={c.title} /></h2>
                </Reveal>
                <Reveal delay={0.08} className="mt-6 space-y-4 text-pretty text-[17px] leading-relaxed text-ink-soft">
                  {c.body.map((b) => (
                    <p key={b.en}>
                      <T v={b} />
                    </p>
                  ))}
                </Reveal>
                <Reveal delay={0.14} className="mt-9 border-l-2 border-crisp pl-6">
                  <QuoteBlock quote={quoteById(c.quote)} showTheme={false} />
                </Reveal>
                <Reveal delay={0.18} className="mt-8">
                  <TextLink href={c.href}>
                    <T v={c.link} />
                  </TextLink>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="dark-surface bg-night py-20 text-cream lg:py-28">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <p className="font-display text-balance text-3xl leading-tight italic sm:text-5xl">
              “Ang chicharon ay ang mukha at puso ng Lungsod ng Carcar.”
            </p>
            <p className="mt-4 text-cream/70">
              <T en="Respondent R87 — “Chicharon is the face and heart of the City of Carcar.”" ceb="Tigtubag R87 — “Ang chicharon mao ang nawong ug kasingkasing sa Dakbayan sa Carcar.”" fil="Tagatugon R87" />
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/culture">
              <T en="Culture & identity" ceb="Kultura ug pagkatawo" fil="Kultura at pagkakakilanlan" />
            </ButtonLink>
            <ButtonLink href="/people" variant="light">
              <T en="Meet the people" ceb="Ilaila ang katawhan" fil="Kilalanin ang mga tao" />
            </ButtonLink>
          </Reveal>
          <SourceNote className="mt-10">
            <T en="Source" ceb="Tinubdan" fil="Sanggunian" />: Kabanata 3 (Lugar ng Pag-aaral) at Kabanata 4.
          </SourceNote>
        </Container>
      </section>
    </>
  );
}
