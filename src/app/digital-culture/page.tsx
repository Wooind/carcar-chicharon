import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Stepper } from "@/components/Stepper";
import { ButtonLink, Container, QuoteBlock, SectionHeading, SourceNote } from "@/components/ui";
import { quoteById } from "@/data/quotes";
import { T, tr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Chicharon & Digital Culture",
  description: "How word-of-mouth about Carcar chicharon moved from family to social media — and why this digital platform exists.",
};

const ripple = [
  { t: tr("Family", "Pamilya", "Pamilya"), d: tr("Parents and grandparents introduce it at home.", "Ang ginikanan ug apohan nagpaila niini sa balay.", "Ipinakikilala ito ng mga magulang at lolo at lola sa tahanan.") },
  { t: tr("Friends", "Mga higala", "Mga kaibigan"), d: tr("Classmates, co-workers and neighbours recommend it.", "Ang mga klasmeyt, kauban sa trabaho ug silingan nagrekomendar niini.", "Inirerekomenda ito ng mga kaklase, katrabaho at kapitbahay.") },
  { t: tr("Community", "Komunidad", "Komunidad"), d: tr("Locals take pride and tell visitors about it.", "Ang mga lokal nagpasigarbo ug nagsulti niini sa mga bisita.", "Ipinagmamalaki ito ng mga lokal at ikinukuwento sa mga bisita.") },
  { t: tr("Travellers", "Mga biyahero", "Mga biyahero"), d: tr("Bus and roadside vendors name it as Carcar's.", "Ang mga tindera sa bus ug daplin sa dalan nag-ingon nga kini iya sa Carcar.", "Tinutukoy ito ng mga nagtitinda sa bus at tabi ng daan bilang sa Carcar.") },
  { t: tr("Social media", "Social media", "Social media"), d: tr("Posts, photos and videos make it visible — even viral.", "Ang mga post, litrato ug bidyo naghimo niini nga makita — bisan mag-viral.", "Ginagawa itong nakikita ng mga post, larawan at bidyo — kahit mag-viral.") },
  { t: tr("Digital platforms", "Digital nga plataporma", "Mga digital na plataporma"), d: tr("Sellers can list, describe and take orders online.", "Ang mga tindera makalista, makahulagway ug makadawat og order online.", "Makapaglilista, makapaglalarawan at makatatanggap ng order online ang mga nagtitinda.") },
  { t: tr("Wider audience", "Mas lapad nga mamiminaw", "Mas malawak na madla"), d: tr("People who have never been to Carcar discover it.", "Ang mga tawo nga wala pa makaadto sa Carcar makadiskobre niini.", "Natutuklasan ito ng mga taong hindi pa nakapupunta sa Carcar.") },
];

const features = [
  { t: "Pagpapakilala sa Produkto", en: tr("Product introduction", "Pagpaila sa produkto", "Pagpapakilala sa produkto"), d: tr("A digital catalogue with photos, names, types, sizes and short descriptions.", "Usa ka digital nga katalogo nga adunay litrato, ngalan, klase, gidak-on ug mubo nga paghulagway.", "Isang digital na katalogo na may larawan, pangalan, uri, laki at maikling paglalarawan."), here: "/discover", where: tr("Discover", "Diskobrehi", "Tuklasin") },
  { t: "Pagkakakilanlan at Wika", en: tr("Identity & language", "Pagkatawo ug pinulongan", "Pagkakakilanlan at wika"), d: tr("Sebwano as the main language of introduction, with Filipino and English for others — see the language switch at the top of every page.", "Sinugbuanon isip nag-unang pinulongan sa pagpaila, uban sa Filipino ug Iningles alang sa uban — tan-awa ang switch sa pinulongan sa ibabaw sa matag panid.", "Sebwano bilang pangunahing wika ng pagpapakilala, kasama ang Filipino at Ingles para sa iba — tingnan ang pampalit ng wika sa itaas ng bawat pahina."), here: "/culture", where: tr("Language switch · Culture", "Switch sa pinulongan · Kultura", "Pampalit ng wika · Kultura") },
  { t: "Impormasyon sa Kalidad", en: tr("Quality information", "Impormasyon sa kalidad", "Impormasyon sa kalidad"), d: tr("Origin, production or packing date, storage and freshness details.", "Gigikanan, petsa sa paghimo o pagputos, pagtipig ug detalye sa kapresko.", "Pinagmulan, petsa ng paggawa o pagbabalot, pag-iimbak at detalye ng pagkasariwa."), here: "/how-its-made", where: tr("How It's Made", "Unsaon Paghimo", "Paano Ginagawa") },
  { t: "Pag-order at Pakikipag-ugnayan", en: tr("Ordering & contact", "Pag-order ug kontak", "Pag-order at pakikipag-ugnayan"), d: tr("Order form or chat, store location, hours, pickup/delivery and payment methods.", "Porma sa order o chat, lokasyon sa tindahan, oras, pickup/delivery ug paagi sa pagbayad.", "Form ng order o chat, lokasyon ng tindahan, oras, pickup/delivery at paraan ng pagbabayad."), here: "/vendors", where: tr("Vendors", "Mga Tindera", "Mga Nagtitinda") },
  { t: "Presyo at Pagpipilian", en: tr("Price & options", "Presyo ug kapilian", "Presyo at pagpipilian"), d: tr("Price by pack or weight, minimum orders and delivery fees, so buyers can plan.", "Presyo matag putos o timbang, minimum nga order ug bayad sa delivery, aron makaplano ang mamalitay.", "Presyo bawat balot o timbang, minimum na order at bayad sa delivery, upang makapagplano ang mamimili."), here: "/vendors", where: tr("Vendors (message for prices)", "Mga Tindera (mensahe para sa presyo)", "Mga Nagtitinda (mag-message para sa presyo)") },
  { t: "Pidbak at Tiwala", en: tr("Feedback & trust", "Feedback ug pagsalig", "Pidbak at tiwala"), d: tr("Space for genuine reviews and timely responses to questions and complaints.", "Luna alang sa tinuod nga review ug dali nga tubag sa mga pangutana ug reklamo.", "Puwang para sa tunay na review at napapanahong tugon sa mga tanong at reklamo."), here: "/voices", where: tr("Voices", "Mga Tingog", "Mga Tinig") },
];

export default function DigitalPage() {
  return (
    <>
      <PageHero
        index="10"
        eyebrow={<T en="Digital Culture" ceb="Digital nga Kultura" fil="Kulturang Digital" />}
        imageId="digital-hero"
        title={
          <T
            en={<>From word-of-mouth <span className="italic text-crisp">to word-of-post.</span></>}
            ceb={<>Gikan sa baba ngadto sa baba <span className="italic text-crisp">hangtod sa post.</span></>}
            fil={<>Mula sa salita ng bibig <span className="italic text-crisp">hanggang sa post.</span></>}
          />
        }
        intro={<T en="The study traced how knowledge of Carcar chicharon travels — and found social media alongside family and friends. This website is the digital tool the study proposed in response." ceb="Gisubay sa pagtuon kon giunsa pagbiyahe sa kahibalo bahin sa chicharon sa Carcar — ug nakaplagan ang social media uban sa pamilya ug higala. Kini nga website mao ang digital nga himan nga gisugyot sa pagtuon isip tubag." fil="Tinunton ng pag-aaral kung paano naglalakbay ang kaalaman tungkol sa chicharon ng Carcar — at natagpuan ang social media kasama ng pamilya at kaibigan. Ang website na ito ang digital na kagamitang iminungkahi ng pag-aaral bilang tugon." />}
      />

      {/* Ripple */}
      <section className="border-y border-line bg-surface py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading eyebrow={<T en="How the word spreads" ceb="Giunsa pagkaylap sa balita" fil="Paano kumakalat ang balita" />} title={<T en="Each circle reaches further" ceb="Matag lingin mas layo ang maabot" fil="Mas malayo ang naaabot ng bawat bilog" />} intro={<T en="Respondents described these channels. Digital platforms extend the same chain of recommendation to people the older channels could not reach." ceb="Gihulagway sa mga tigtubag kining mga agianan. Ang digital nga plataporma nagpadayon sa samang kadena sa rekomendasyon ngadto sa mga tawo nga dili maabot sa daan nga mga agianan." fil="Inilarawan ng mga tagatugon ang mga daluyang ito. Pinalalawak ng mga digital na plataporma ang parehong kadena ng rekomendasyon sa mga taong hindi naaabot ng mga lumang daluyan." />} />
            </Reveal>
            <Reveal delay={0.1} className="mt-10 space-y-8">
              <QuoteBlock quote={quoteById("r69-social")} />
              <QuoteBlock quote={quoteById("w75-social")} />
            </Reveal>
          </div>
          <ol className="space-y-3 lg:col-span-7">
            {ripple.map((r, i) => (
              <Reveal as="li" key={r.t.en} delay={i * 0.05}>
                <div
                  className="group flex items-center gap-5 rounded-2xl border border-line bg-paper p-4 transition-colors hover:border-crisp/50 sm:p-5"
                  style={{ marginLeft: `min(${i * 4}%, ${i * 28}px)` }}
                >
                  <span
                    className="grid shrink-0 place-items-center rounded-full font-display text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ width: 36 + i * 4, height: 36 + i * 4, background: `color-mix(in oklab, var(--color-crisp) ${55 + i * 7}%, var(--color-brick))` }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-xl font-medium">
                      <T v={r.t} />
                    </p>
                    <p className="text-sm text-ink-soft">
                      <T v={r.d} />
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Rogers */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Diffusion of Innovations · Everett Rogers"
              title={<T en="How people come to adopt a new tool" ceb="Giunsa pagdawat sa mga tawo ang bag-ong himan" fil="Paano tinatanggap ng mga tao ang bagong kagamitan" />}
              intro={<T en="The study used Rogers' theory to explain why some citizens adopt digital commerce quickly and others slowly — in Carcar, it depends not only on knowledge but on culture, language and fit with familiar ways of buying." ceb="Gigamit sa pagtuon ang teorya ni Rogers aron ipasabot nganong ang uban dali modawat sa digital nga pamaligya ug ang uban hinay — sa Carcar, dili lang kini nagdepende sa kahibalo kondili sa kultura, pinulongan ug kon mohaum ba kini sa naandang paagi sa pagpalit." fil="Ginamit ng pag-aaral ang teorya ni Rogers upang ipaliwanag kung bakit mabilis tumanggap ng digital na komersiyo ang ilan at mabagal ang iba — sa Carcar, nakasalalay ito hindi lamang sa kaalaman kundi sa kultura, wika at pagkakatugma sa nakasanayang paraan ng pagbili." />}
              className="mb-12"
            />
          </Reveal>
          <Stepper
            label="Five stages of adoption / Lima ka ang-ang / Limang yugto"
            steps={[
              { title: <T en="Knowledge" ceb="Kahibalo" fil="Kaalaman" />, sub: "Kaalaman", body: <T en="A person first learns that the innovation exists — for example, that Carcar chicharon can be found and ordered online." ceb="Unang mahibal-an sa usa ka tawo nga anaa ang inobasyon — pananglitan, nga ang chicharon sa Carcar makit-an ug ma-order online." fil="Unang nalalaman ng isang tao na may inobasyon — halimbawa, na mahahanap at maoorder online ang chicharon ng Carcar." /> },
              { title: <T en="Persuasion" ceb="Pagdani" fil="Panghihikayat" />, sub: "Panghihikayat", body: <T en="Interest and opinion form through information from others and from experience — a friend's post, a family recommendation." ceb="Ang interes ug opinyon maporma pinaagi sa impormasyon gikan sa uban ug sa kasinatian — post sa usa ka higala, rekomendasyon sa pamilya." fil="Nabubuo ang interes at opinyon sa pamamagitan ng impormasyon mula sa iba at sa karanasan — post ng kaibigan, rekomendasyon ng pamilya." /> },
              { title: <T en="Decision" ceb="Desisyon" fil="Pagdedesisyon" />, sub: "Pagdedesisyon", body: <T en="The person chooses to accept or reject it — shaped by trust, language and whether it fits how they usually buy." ceb="Mopili ang tawo kon dawaton o isalikway kini — gihulma sa pagsalig, pinulongan ug kon mohaum ba kini sa ilang naandang pagpalit." fil="Pinipili ng tao kung tatanggapin o tatanggihan ito — hinuhubog ng tiwala, wika at kung tugma ito sa karaniwan nilang pagbili." /> },
              { title: <T en="Implementation" ceb="Pagpatuman" fil="Pagpapatupad" />, sub: "Pagpapatupad", body: <T en="They actually use it in real situations and daily tasks." ceb="Gamiton gyud nila kini sa tinuod nga sitwasyon ug adlaw-adlaw nga buluhaton." fil="Aktuwal nila itong ginagamit sa totoong sitwasyon at pang-araw-araw na gawain." /> },
              { title: <T en="Confirmation" ceb="Kumpirmasyon" fil="Kumpirmasyon" />, sub: "Kumpirmasyon", body: <T en="They judge whether the change was good and useful for them — and whether to keep using it." ceb="Ilang hukman kon maayo ba ug mapuslanon ang kausaban alang kanila — ug kon padayonon ba ang paggamit niini." fil="Hinuhusgahan nila kung mabuti at kapaki-pakinabang ang pagbabago para sa kanila — at kung ipagpapatuloy ang paggamit nito." /> },
            ]}
          />
        </Container>
      </section>

      {/* Six features */}
      <section className="dark-surface bg-night py-20 text-cream lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <SectionHeading eyebrow="Ikalimang Layunin" title={<T en="Six features the study proposed — and where to find them here" ceb="Unom ka bahin nga gisugyot sa pagtuon — ug asa kini makita dinhi" fil="Anim na tampok na iminungkahi ng pag-aaral — at kung saan makikita rito" />} />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="leading-relaxed text-cream/75">
                <T
                  en="The study is careful: these features are based on its findings and the literature, and still need real-world testing to judge their effectiveness. This site is that first prototype."
                  ceb="Mainampingon ang pagtuon: kining mga bahin gibase sa nakaplagan niini ug sa literatura, ug kinahanglan pa sulayan sa tinuod nga kalibutan aron mahukman ang pagka-epektibo. Kini nga site mao ang unang prototype."
                  fil="Maingat ang pag-aaral: batay ang mga tampok na ito sa mga natuklasan nito at sa literatura, at kailangan pang subukin sa totoong mundo upang mahusgahan ang bisa. Ang site na ito ang unang prototype."
                />
              </p>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <StaggerItem key={f.t} className="h-full">
                <Link href={f.here} className="group flex h-full flex-col rounded-3xl border border-cream/15 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-crisp-light/60 hover:bg-cream/[0.03]">
                  <span className="font-display text-4xl text-crisp-light/40 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-2xl leading-tight font-medium">
                    <T v={f.en} />
                  </h3>
                  <p className="text-sm italic text-cream/55">{f.t}</p>
                  <p className="mt-4 text-sm leading-relaxed text-cream/75">
                    <T v={f.d} />
                  </p>
                  <p className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-crisp-light">
                    <Check aria-hidden className="size-4 shrink-0" /> <T en="On this site:" ceb="Niini nga site:" fil="Sa site na ito:" />{" "}
                    <span className="link-underline">
                      <T v={f.where} />
                    </span>
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <ImagePlaceholder id="digital-post" className="rounded-[28px]" sizes="(min-width:1024px) 40vw, 92vw" />
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading eyebrow={<T en="Why a digital platform" ceb="Nganong digital nga plataporma" fil="Bakit digital na plataporma" />} title={<T en="Keeping the personal in online buying" ceb="Pagpabilin sa personal sa online nga pagpalit" fil="Pagpapanatili ng personal sa online na pagbili" />} />
            </Reveal>
            <Reveal delay={0.08} className="mt-6 space-y-4 text-pretty leading-relaxed text-ink-soft">
              <p>
                <T
                  en="The literature reviewed by the study warns that online buyers worry about quality they cannot see or taste. Its answer is to bring culture into the platform: describe how it is made, show the real stalls, and let people speak in their own language."
                  ceb="Ang literatura nga gisusi sa pagtuon nagpasidaan nga ang mga online nga mamalitay nabalaka sa kalidad nga dili nila makita o matilawan. Ang tubag niini mao ang pagdala sa kultura ngadto sa plataporma: ihulagway kon giunsa kini paghimo, ipakita ang tinuod nga mga tindahan, ug tugoti ang mga tawo nga mosulti sa ilang kaugalingong pinulongan."
                  fil="Nagbababala ang literaturang sinuri ng pag-aaral na nag-aalala ang mga online na mamimili sa kalidad na hindi nila nakikita o natitikman. Ang sagot nito ay dalhin ang kultura sa plataporma: ilarawan kung paano ito ginagawa, ipakita ang tunay na mga tindahan, at hayaang magsalita ang mga tao sa sarili nilang wika."
                />
              </p>
              <p>
                <T
                  en="Through Vygotsky's lens, a digital tool can act as a modern “more knowledgeable other” — scaffolding small local producers into a wider market, without erasing the tradition behind the product."
                  ceb="Pinaagi sa lente ni Vygotsky, ang digital nga himan mahimong modernong “more knowledgeable other” — nagtabang sa gagmay nga lokal nga naghimo nga makasulod sa mas lapad nga merkado, nga dili mapapas ang tradisyon sa luyo sa produkto."
                  fil="Sa lente ni Vygotsky, maaaring magsilbing modernong “more knowledgeable other” ang isang digital na kagamitan — gumagabay sa maliliit na lokal na gumagawa patungo sa mas malawak na pamilihan, nang hindi binubura ang tradisyon sa likod ng produkto."
                />
              </p>
            </Reveal>
            <Reveal delay={0.12} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/about">
                <T en="About the study" ceb="Bahin sa pagtuon" fil="Tungkol sa pag-aaral" />
              </ButtonLink>
              <ButtonLink href="/vendors" variant="ghost">
                <T en="The vendor directory" ceb="Ang direktoryo sa tindera" fil="Ang direktoryo ng nagtitinda" />
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
        <Container>
          <SourceNote className="mt-12">
            <T en="Sources" ceb="Mga tinubdan" fil="Mga sanggunian" />: Kabanata 1 (Kaligirang Teoretikal), Kabanata 2 (Bagni et al.; Porras et al.; Lara and Villamor), Kabanata 4 (Social Media
            at Katanyagan), Kabanata 5 (Pagbuo ng Digital na Kagamitan).
          </SourceNote>
        </Container>
      </section>
    </>
  );
}
