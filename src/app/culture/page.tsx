import type { Metadata } from "next";
import { Home as HomeIcon, Languages, Repeat2, Share2, Smartphone, Bus, Users, Utensils } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { StoryTabs, type StoryTab } from "@/components/StoryTabs";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ButtonLink, Container, QuoteBlock, SectionHeading, SourceNote } from "@/components/ui";
import { quoteById } from "@/data/quotes";
import { T, tr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Culture & Identity",
  description: "How knowledge of Carcar chicharon is passed through family, friends, social media and travelling vendors — and how it became part of Carcar's identity.",
};

const values = [
  {
    Icon: Share2,
    fil: "Pagpapasa at Pagpapalaganap ng Kultural na Kaalaman",
    title: tr("Passing on cultural knowledge", "Pagpasa sa kahibalo sa kultura", "Pagpapasa ng kultural na kaalaman"),
    themes: [
      tr("Family as first introduction", "Pamilya isip unang pagpaila", "Pamilya bilang unang pagpapakilala"),
      tr("Friends and acquaintances", "Mga higala ug kaila", "Mga kaibigan at kakilala"),
      tr("Social media and community popularity", "Social media ug kabantog sa komunidad", "Social media at katanyagan sa komunidad"),
      tr("Travelling vendors, bus trips and roadside stores", "Mga tindera nga nagbiyahe, biyahe sa bus ug tindahan sa daplin sa dalan", "Mga naglalakbay na nagtitinda, biyahe sa bus at tindahan sa tabi ng daan"),
    ],
  },
  {
    Icon: Repeat2,
    fil: "Tradisyon ng Pasalubong at Pagbabahagi",
    title: tr("The tradition of pasalubong and sharing", "Ang tradisyon sa pasalubong ug pagpaambit", "Ang tradisyon ng pasalubong at pagbabahagi"),
    themes: [
      tr("Pasalubong culture during travel", "Kultura sa pasalubong sa pagbiyahe", "Kultura ng pasalubong sa paglalakbay"),
      tr("Trips south, outings and family requests", "Biyahe sa habagatan, lakaw ug hangyo sa pamilya", "Biyahe patimog, pamamasyal at hiling ng pamilya"),
      tr("The main pasalubong and favourite product", "Ang nag-unang pasalubong ug paboritong produkto", "Ang pangunahing pasalubong at paboritong produkto"),
      tr("Other kakanin, lechon and products bought in Carcar", "Ubang kakanin, lechon ug produkto nga gipalit sa Carcar", "Iba pang kakanin, lechon at produktong binibili sa Carcar"),
    ],
  },
  {
    Icon: Utensils,
    fil: "Integrasyon sa Pang-araw-araw na Pamumuhay",
    title: tr("Integration into everyday life", "Pagkahiusa sa adlaw-adlaw nga kinabuhi", "Integrasyon sa pang-araw-araw na pamumuhay"),
    themes: [tr("Domestication and integration into the ordinary family table", "Pagkahimong bahin sa ordinaryong lamesa sa pamilya", "Pagiging bahagi ng karaniwang hapag ng pamilya")],
  },
];

/** "Circles of knowledge" — how people come to know chicharon, from the closest circle outward. */
const circles = [
  { Icon: HomeIcon, label: tr("Family", "Pamilya", "Pamilya") },
  { Icon: Users, label: tr("Friends", "Mga higala", "Mga kaibigan") },
  { Icon: Smartphone, label: tr("Social media", "Social media", "Social media") },
  { Icon: Bus, label: tr("The road", "Ang dalan", "Ang daan") },
];

const tabs: StoryTab[] = [
  {
    key: "family",
    label: tr("Family", "Pamilya", "Pamilya"),
    filipino: "Pamilya Bilang Unang Daan sa Pagkakakilala",
    title: tr("The first introduction happens at home", "Ang unang pagpaila mahitabo sa balay", "Ang unang pagpapakilala ay nangyayari sa tahanan"),
    body: [
      tr(
        "Many respondents first met chicharon as children — through parents, grandparents, siblings and relatives who bought it, brought it home, served it and shared it.",
        "Daghang tigtubag ang unang nakaila sa chicharon sa bata pa — pinaagi sa ginikanan, apohan, igsoon ug paryente nga mipalit, midala sa balay, misilbi ug mipaambit niini.",
        "Maraming tagatugon ang unang nakakilala sa chicharon noong bata pa — sa pamamagitan ng mga magulang, lolo at lola, kapatid at kamag-anak na bumili, nag-uwi, naghain at nagbahagi nito.",
      ),
      tr(
        "In this way chicharon becomes part of a family's collective memory. Its value lies not only in its taste, but in the people who introduced it and the moments it was shared.",
        "Niining paagiha ang chicharon nahimong bahin sa kolektibong panumduman sa pamilya. Ang bili niini dili lang sa lami, kondili sa mga tawo nga nagpaila niini ug sa mga higayon nga kini gipaambit.",
        "Sa ganitong paraan nagiging bahagi ang chicharon ng kolektibong alaala ng pamilya. Ang halaga nito ay wala lamang sa lasa, kundi sa mga taong nagpakilala nito at sa mga sandaling ito ay pinagsaluhan.",
      ),
    ],
    imageId: "culture-family",
    quoteIds: ["r3-family", "r36-family"],
  },
  {
    key: "friends",
    label: tr("Friends", "Mga higala", "Mga kaibigan"),
    filipino: "Impluwensiya ng Kakilala at Kaibigan",
    title: tr("Recommended by people we trust", "Girekomendar sa mga tawo nga among gisaligan", "Inirekomenda ng mga taong pinagkakatiwalaan"),
    body: [
      tr(
        "Beyond the family, friends, classmates, co-workers and neighbours played a role. A personal recommendation — often from someone from Carcar — sparked interest and a first purchase.",
        "Gawas sa pamilya, ang mga higala, klasmeyt, kauban sa trabaho ug silingan adunay papel. Ang personal nga rekomendasyon — kasagaran gikan sa taga-Carcar — nakapukaw sa interes ug sa unang palit.",
        "Bukod sa pamilya, may papel din ang mga kaibigan, kaklase, katrabaho at kapitbahay. Ang personal na rekomendasyon — kadalasan mula sa taga-Carcar — ang pumukaw ng interes at unang pagbili.",
      ),
      tr(
        "Even an ordinary conversation at work could become a channel for introducing a local product.",
        "Bisan ang ordinaryong istoryahanay sa trabaho mahimong agianan sa pagpaila sa usa ka lokal nga produkto.",
        "Kahit ang karaniwang kuwentuhan sa trabaho ay maaaring maging daan sa pagpapakilala ng isang lokal na produkto.",
      ),
    ],
    imageId: "culture-friends",
    quoteIds: ["r59-friends", "w54-friends"],
  },
  {
    key: "social",
    label: tr("Social media", "Social media", "Social media"),
    filipino: "Social Media at Katanyagan sa Komunidad",
    title: tr("Seen online before it is tasted", "Makita online sa dili pa matilawan", "Nakikita online bago pa matikman"),
    body: [
      tr(
        "Photos, videos, posts and recommendations on digital platforms let people learn about chicharon even before tasting it.",
        "Ang mga litrato, bidyo, post ug rekomendasyon sa digital nga plataporma nagtugot sa mga tawo nga makahibalo bahin sa chicharon bisan sa dili pa nila kini matilawan.",
        "Ang mga larawan, bidyo, post at rekomendasyon sa mga digital na plataporma ay nagbibigay-daan sa mga tao na makilala ang chicharon bago pa man ito matikman.",
      ),
      tr(
        "Online visibility and personal recommendation often work together: interest may begin with a post and be confirmed by a friend.",
        "Ang pagkakita online ug personal nga rekomendasyon kasagaran nagtinabangay: ang interes mahimong magsugod sa usa ka post ug mapamatud-an sa usa ka higala.",
        "Madalas magkasamang gumagana ang pagiging nakikita online at personal na rekomendasyon: maaaring magsimula ang interes sa isang post at mapatunayan ng isang kaibigan.",
      ),
    ],
    imageId: "culture-social",
    quoteIds: ["w75-social", "r42-social"],
  },
  {
    key: "road",
    label: tr("On the road", "Sa dalan", "Sa daan"),
    filipino: "Mga Naglalakbay na Tindera, Byahe sa Bus, at Tindahan sa Daan",
    title: tr("Vendors who name the place", "Mga tindera nga mohisgot sa lugar", "Mga nagtitindang bumabanggit sa lugar"),
    body: [
      tr(
        "Vendors who board buses and sell at roadside stores introduce chicharon to travellers — and always mention that it comes from Carcar.",
        "Ang mga tindera nga mosakay sa bus ug mobaligya sa daplin sa dalan nagpaila sa chicharon sa mga biyahero — ug kanunay nilang isulti nga kini gikan sa Carcar.",
        "Ipinakikilala ng mga nagtitindang sumasakay sa bus at nagbebenta sa tabi ng daan ang chicharon sa mga biyahero — at lagi nilang binabanggit na ito ay mula sa Carcar.",
      ),
      tr(
        "The study treats them as informal carriers of cultural knowledge: they spread both the product and the reputation of its place.",
        "Gitan-aw sila sa pagtuon isip dili pormal nga tigdala sa kahibalo sa kultura: ilang gikaylap ang produkto ug ang dungog sa lugar niini.",
        "Itinuturing sila ng pag-aaral bilang di-pormal na tagapagdala ng kultural na kaalaman: ikinakalat nila ang produkto at ang reputasyon ng lugar nito.",
      ),
    ],
    imageId: "culture-road",
    quoteIds: ["r16-roadside", "r27-roadside"],
  },
];

const words = [
  ["lami", tr("delicious", "lami", "masarap")],
  ["malutong / crispy", tr("crunchy", "malutong", "malutong")],
  ["presko", tr("fresh", "presko", "sariwa")],
  ["bag-ong luto", tr("newly cooked", "bag-ong luto", "bagong luto")],
  ["kubal", tr("term cited in the study", "pulong nga gikutlo sa pagtuon", "terminong binanggit sa pag-aaral")],
  ["laman", tr("term cited in the study", "pulong nga gikutlo sa pagtuon", "terminong binanggit sa pag-aaral")],
] as const;

export default function CulturePage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow={<T en="Culture & Identity" ceb="Kultura ug Pagkatawo" fil="Kultura at Pagkakakilanlan" />}
        imageId="culture-hero"
        title={
          <T
            en={<>Passed from hand <span className="italic text-crisp">to hand.</span></>}
            ceb={<>Gipasa gikan sa kamot <span className="italic text-crisp">ngadto sa kamot.</span></>}
            fil={<>Ipinasa mula kamay <span className="italic text-crisp">hanggang kamay.</span></>}
          />
        }
        intro={
          <T
            en="The study found that people don't simply discover chicharon — they are introduced to it, by family, friends, the road, and now the screen. That is how a food becomes culture."
            ceb="Nakaplagan sa pagtuon nga ang mga tawo dili lang makadiskobre sa chicharon — gipaila kini kanila, sa pamilya, higala, sa dalan, ug karon sa screen. Ingon niana ang pagkaon mahimong kultura."
            fil="Natuklasan ng pag-aaral na hindi basta natutuklasan ng mga tao ang chicharon — ipinakikilala ito sa kanila ng pamilya, kaibigan, ng daan, at ngayon ng screen. Ganito nagiging kultura ang isang pagkain."
          />
        }
      />

      {/* The three cultural values */}
      <section className="border-y border-line bg-surface py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Talahanayan 1 · Kultural na Pagpapahalaga"
              title={<T en="Three cultural values" ceb="Tulo ka kultural nga bili" fil="Tatlong kultural na pagpapahalaga" />}
              intro={
                <T
                  en="From the respondents' accounts, the study identified three cultural values attached to Carcar chicharon, each with its own themes."
                  ceb="Gikan sa mga asoy sa mga tigtubag, giila sa pagtuon ang tulo ka kultural nga bili nga nalambigit sa chicharon sa Carcar, matag usa adunay kaugalingong mga tema."
                  fil="Mula sa salaysay ng mga tagatugon, tinukoy ng pag-aaral ang tatlong kultural na pagpapahalaga na nakakabit sa chicharon ng Carcar, bawat isa ay may sariling mga tema."
                />
              }
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
            {values.map((v, i) => (
              <StaggerItem key={v.fil} className="h-full">
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-crisp/50 hover:shadow-xl hover:shadow-ink/5">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-crisp/10 text-crisp transition-transform duration-300 group-hover:rotate-[-6deg]">
                      <v.Icon className="size-5" />
                    </span>
                    <span className="font-display text-4xl text-crisp/25 tabular-nums">{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl leading-tight font-medium">
                    <T v={v.title} />
                  </h3>
                  <p className="mt-1 text-sm italic text-ink-faint">{v.fil}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-5 text-sm text-ink-soft">
                    {v.themes.map((t) => (
                      <li key={t.en} className="flex gap-2.5">
                        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-crisp" />
                        <span>
                          <T v={t} />
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

      {/* Knowledge transmission: circles + tabs */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                eyebrow={<T en="Value 1 · Passing on knowledge" ceb="Bili 1 · Pagpasa sa kahibalo" fil="Halaga 1 · Pagpapasa ng kaalaman" />}
                title={<T en="Four ways people come to know it" ceb="Upat ka paagi nga mailhan kini sa mga tawo" fil="Apat na paraan upang makilala ito ng mga tao" />}
                intro={
                  <T
                    en="Knowledge travels outward — from the family table to friends, to the screen, to the road. Select a theme below to read what the study found and what respondents said."
                    ceb="Ang kahibalo mobiyahe pagawas — gikan sa lamesa sa pamilya ngadto sa mga higala, sa screen, ug sa dalan. Pili og tema sa ubos aron mabasa ang nakaplagan sa pagtuon ug ang giingon sa mga tigtubag."
                    fil="Naglalakbay palabas ang kaalaman — mula sa hapag ng pamilya patungo sa mga kaibigan, sa screen, at sa daan. Pumili ng tema sa ibaba upang mabasa ang natuklasan ng pag-aaral at ang sinabi ng mga tagatugon."
                  />
                }
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <CirclesOfKnowledge />
            </Reveal>
          </div>
          <div className="mt-14">
            <StoryTabs tabs={tabs} />
          </div>
        </Container>
      </section>

      {/* Identity */}
      <section className="dark-surface bg-night py-20 text-cream lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionHeading
                  eyebrow={<T en="Local identity" ceb="Lokal nga pagkatawo" fil="Lokal na pagkakakilanlan" />}
                  title={<>“Mahimo siyang <em className="text-crisp-light">trademark</em> sa Carcar.”</>}
                  intro={
                    <T
                      en="Respondents used words like identity and trademark for chicharon. The study notes this is built through repeated buying, recommending and storytelling — while reminding us that Carcar's identity is not limited to one product."
                      ceb="Gigamit sa mga tigtubag ang mga pulong sama sa pagkatawo ug trademark alang sa chicharon. Matod sa pagtuon, kini natukod pinaagi sa balik-balik nga pagpalit, pagrekomendar ug pag-asoy — samtang nagpahinumdom nga ang pagkatawo sa Carcar dili limitado sa usa ka produkto."
                      fil="Gumamit ang mga tagatugon ng mga salitang gaya ng pagkakakilanlan at trademark para sa chicharon. Ayon sa pag-aaral, nabubuo ito sa paulit-ulit na pagbili, pagrerekomenda at pagkukuwento — habang ipinapaalala na hindi limitado sa iisang produkto ang pagkakakilanlan ng Carcar."
                    />
                  }
                />
              </Reveal>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <Reveal>
                  <QuoteBlock quote={quoteById("r87-identity")} showTheme={false} />
                </Reveal>
                <Reveal delay={0.08}>
                  <QuoteBlock quote={quoteById("r88-identity")} showTheme={false} />
                </Reveal>
              </div>
            </div>
            <ImageReveal className="rounded-[28px] lg:col-span-6">
              <ImagePlaceholder id="culture-identity" aspect="4 / 3" sizes="(min-width:1024px) 50vw, 92vw" />
            </ImageReveal>
          </div>
        </Container>
      </section>

      {/* Pasalubong + everyday */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crisp">
              <T en="Value 2 · Pasalubong & sharing" ceb="Bili 2 · Pasalubong ug pagpaambit" fil="Halaga 2 · Pasalubong at pagbabahagi" />
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight font-medium">
              <T en="Bringing Carcar home" ceb="Pagdala sa Carcar pauli" fil="Pag-uwi ng Carcar" />
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              <T
                en="Buying chicharon to bring home expresses remembrance and care for those who did not travel. It is also how the product, and Carcar's name, reach new homes."
                ceb="Ang pagpalit og chicharon aron dad-on pauli nagpahayag sa paghinumdom ug pag-atiman sa mga wala mobiyahe. Mao usab kini ang paagi nga ang produkto, ug ang ngalan sa Carcar, makaabot sa bag-ong mga panimalay."
                fil="Ang pagbili ng chicharon upang iuwi ay pagpapahayag ng pag-alala at malasakit sa mga hindi nakasama sa biyahe. Ito rin ang paraan upang ang produkto, at ang pangalan ng Carcar, ay makarating sa mga bagong tahanan."
              />
            </p>
            <div className="mt-8">
              <QuoteBlock quote={quoteById("r35-pasalubong")} showTheme={false} />
            </div>
            <div className="mt-8">
              <ButtonLink href="/pasalubong" variant="ghost">
                <T en="Chicharon as pasalubong" ceb="Chicharon isip pasalubong" fil="Chicharon bilang pasalubong" />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crisp">
              <T en="Value 3 · Everyday life" ceb="Bili 3 · Adlaw-adlaw nga kinabuhi" fil="Halaga 3 · Pang-araw-araw na buhay" />
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight font-medium">
              <T en="At the ordinary table" ceb="Sa ordinaryong lamesa" fil="Sa karaniwang hapag" />
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              <T
                en="Eaten as meryenda, paired with rice and vinegar, or bought after Sunday Mass — and for some, eaten less often for health reasons. Valuing a local food, the study notes, does not require eating it all the time."
                ceb="Gikaon isip meryenda, giubanan og kan-on ug suka, o gipalit human sa Misa sa Domingo — ug alang sa uban, dili kanunay gikaon tungod sa panglawas. Matod sa pagtuon, ang pagpabili sa lokal nga pagkaon dili kinahanglan nga kanunay kini kaonon."
                fil="Kinakain bilang meryenda, sinasabayan ng kanin at suka, o binibili pagkatapos ng Misa tuwing Linggo — at para sa ilan, mas madalang kainin dahil sa kalusugan. Ayon sa pag-aaral, hindi kailangang palaging kainin ang isang lokal na pagkain upang pahalagahan ito."
              />
            </p>
            <div className="mt-8">
              <QuoteBlock quote={quoteById("r12-everyday")} showTheme={false} />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Language */}
      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow={<T en="Language & everyday culture" ceb="Pinulongan ug adlaw-adlaw nga kultura" fil="Wika at pang-araw-araw na kultura" />}
                  title={<span className="inline-flex items-center gap-3">Wika sa tindahan <Languages aria-hidden className="size-8 text-crisp" /></span>}
                  intro={
                    <T
                      en="Language is part of the transaction. Vendors speak Sebwano (Bisaya) with locals and shift to Filipino or English for tourists — a deliberate strategy to sell and to connect."
                      ceb="Ang pinulongan bahin sa transaksiyon. Ang mga tindera mosulti og Sinugbuanon (Bisaya) sa mga lokal ug mobalhin sa Filipino o Iningles alang sa mga turista — usa ka tinuyo nga estratehiya sa pagbaligya ug pagdugtong."
                      fil="Bahagi ng transaksiyon ang wika. Sebwano (Bisaya) ang gamit ng mga nagtitinda sa mga lokal at lumilipat sa Filipino o Ingles para sa mga turista — isang sinadyang estratehiya upang makabenta at makaugnay."
                    />
                  }
                />
              </Reveal>
              <Reveal delay={0.1} className="mt-8">
                <ImagePlaceholder id="culture-language" className="rounded-3xl" sizes="(min-width:1024px) 40vw, 92vw" />
              </Reveal>
            </div>
            <div className="space-y-10 lg:col-span-7 lg:pl-8">
              <Reveal>
                <h3 className="font-display text-2xl font-medium">
                  <T en="Words that describe quality" ceb="Mga pulong nga naghulagway sa kalidad" fil="Mga salitang naglalarawan ng kalidad" />
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {words.map(([w, g]) => (
                    <span key={w} className="rounded-2xl border border-line bg-paper px-4 py-2.5">
                      <span className="font-display text-lg italic">{w}</span>
                      <span className="ml-2 text-xs text-ink-faint">
                        <T v={g} />
                      </span>
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-ink-soft">
                  <T
                    en="The study observes that these Cebuano words act as a “seal of quality” and a marker of Cebuano identity."
                    ceb="Naobserbahan sa pagtuon nga kining mga pulong nga Sinugbuanon nagsilbing “selyo sa kalidad” ug timaan sa pagkatawo nga Sugbuanon."
                    fil="Napansin ng pag-aaral na nagsisilbing “tatak ng kalidad” at palatandaan ng pagkakakilanlang Cebuano ang mga salitang ito."
                  />
                </p>
              </Reveal>
              <Reveal>
                <QuoteBlock quote={quoteById("r23-language")} />
              </Reveal>
              <Reveal>
                <QuoteBlock quote={quoteById("r25-language")} />
              </Reveal>
              <Reveal>
                <QuoteBlock quote={quoteById("r78-roadside")} />
              </Reveal>
            </div>
          </div>
          <SourceNote className="mt-14">
            <T en="Source" ceb="Tinubdan" fil="Sanggunian" />: Kabanata 4 (Talahanayan 1; Nagbebenta — Wika, Kabuhayan, at Pakikipag-ugnayan) at Kabanata 2 (Blackwood, p. 112).
          </SourceNote>
        </Container>
      </section>
    </>
  );
}

/** Concentric-ring diagram: knowledge spreading from family outward. Purely illustrative ordering (no counts). */
function CirclesOfKnowledge() {
  const rings = ["inset-[33%]", "inset-[22%]", "inset-[11%]", "inset-0"];
  return (
    <figure className="mx-auto w-full max-w-[440px]">
      <div className="relative aspect-square">
        {circles.map((c, i) => (
          <div
            key={c.label.en}
            className={`absolute ${rings[i]} rounded-full border border-crisp/30`}
            style={{ background: `color-mix(in oklab, var(--color-crisp) ${18 - i * 4}%, transparent)` }}
          >
            <span className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-surface px-3 py-1.5 text-[12px] font-medium shadow-sm sm:text-[13px]">
              <c.Icon className="size-3.5 text-crisp" aria-hidden />
              <T v={c.label} />
            </span>
          </div>
        ))}
        <div className="absolute inset-[42%] grid place-items-center rounded-full bg-crisp text-white shadow-lg shadow-crisp/30">
          <Utensils className="size-6" aria-hidden />
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-ink-faint">
        <T
          en="Illustration of the four channels named in Talahanayan 1 — from the closest circle outward. Not to scale."
          ceb="Ilustrasyon sa upat ka agianan nga gihisgutan sa Talahanayan 1 — gikan sa pinakaduol nga lingin pagawas. Dili sumala sa sukod."
          fil="Ilustrasyon ng apat na daluyang binanggit sa Talahanayan 1 — mula sa pinakamalapit na bilog palabas. Hindi ayon sa sukat."
        />
      </figcaption>
    </figure>
  );
}
