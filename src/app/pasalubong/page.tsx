import type { Metadata } from "next";
import { Heart, Gift, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Journey, type JourneyStep } from "@/components/Journey";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ButtonLink, Container, QuoteBlock, SectionHeading, SourceNote } from "@/components/ui";
import { quoteById } from "@/data/quotes";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Chicharon as Pasalubong",
  description: "Why chicharon is Carcar's number-one pasalubong — the journey from a Carcar stall to a family table.",
};

const steps: JourneyStep[] = [
  {
    imageId: "pasalubong-1",
    kicker: <T en="Begin" ceb="Sugod" fil="Simula" />,
    title: "Carcar",
    text: <T en="Carcar sits on the road south. Trips to places like Simala, or simply heading home to the province, take travellers through the city." ceb="Ang Carcar naa sa dalan paingon sa habagatan. Ang mga biyahe paingon sa Simala, o pagpauli lang sa probinsya, moagi sa dakbayan." fil="Nasa daan patimog ang Carcar. Ang mga biyahe sa mga lugar gaya ng Simala, o simpleng pag-uwi sa probinsya, ay dumaraan sa lungsod." />,
  },
  {
    imageId: "pasalubong-2",
    kicker: <T en="Choose" ceb="Pili" fil="Pumili" />,
    title: <T en="Buy" ceb="Palit" fil="Bumili" />,
    text: <T en="Buyers taste, compare and choose. Chicharon is usually the first thing they look for — often with ampao, hopia or lechon alongside." ceb="Ang mga mamalitay motilaw, motandi ug mopili. Ang chicharon kasagaran ang unang pangitaon — kasagaran uban sa ampao, hopia o lechon." fil="Tumitikim, naghahambing at pumipili ang mga mamimili. Kadalasang chicharon ang unang hinahanap — madalas kasama ang ampao, hopia o lechon." />,
  },
  {
    imageId: "pasalubong-3",
    kicker: <T en="Carry" ceb="Dala" fil="Bitbit" />,
    title: <T en="Travel" ceb="Biyahe" fil="Biyahe" />,
    text: <T en="Packs ride home on buses and in cars. Some buy because a relative asked them to — “magpahapit” — stop by Carcar for chicharon." ceb="Ang mga putos mosakay pauli sa bus ug sa sakyanan. Ang uban mopalit kay gihangyo sa paryente — “magpahapit” — nga mohapit sa Carcar para sa chicharon." fil="Sumasakay pauwi ang mga balot sa bus at sa kotse. May bumibili dahil hiniling ng kamag-anak — “magpahapit” — na dumaan sa Carcar para sa chicharon." />,
  },
  {
    imageId: "pasalubong-4",
    kicker: <T en="Return" ceb="Pauli" fil="Pagbalik" />,
    title: <T en="Arrive home" ceb="Abot sa balay" fil="Pagdating sa bahay" />,
    text: <T en="Family is waiting. Bringing pasalubong is an expected part of coming home, a practice many respondents learned from their own parents." ceb="Naghulat ang pamilya. Ang pagdala og pasalubong gilauman nga bahin sa pagpauli, usa ka batasan nga nakat-onan sa daghang tigtubag gikan sa ilang kaugalingong ginikanan." fil="Naghihintay ang pamilya. Inaasahang bahagi ng pag-uwi ang pagdadala ng pasalubong, isang gawing natutuhan ng maraming tagatugon mula sa sarili nilang mga magulang." />,
  },
  {
    imageId: "pasalubong-5",
    kicker: <T en="Give" ceb="Hatag" fil="Bigay" />,
    title: <T en="Share" ceb="Paambit" fil="Pagbabahagi" />,
    text: <T en="The pack is opened and shared with parents, relatives, friends and acquaintances — a concrete expression of care." ceb="Ablihan ang putos ug ipaambit sa ginikanan, paryente, higala ug kaila — usa ka konkretong pagpahayag sa pag-atiman." fil="Binubuksan ang balot at ibinabahagi sa mga magulang, kamag-anak, kaibigan at kakilala — isang kongkretong pagpapahayag ng malasakit." />,
  },
  {
    imageId: "pasalubong-6",
    kicker: <T en="Keep" ceb="Tipig" fil="Itago" />,
    title: <T en="Remember Carcar" ceb="Hinumdomi ang Carcar" fil="Alalahanin ang Carcar" />,
    text: <T en="Through what is shared, Carcar's name travels too. The product becomes a memory of the trip and of the place." ceb="Pinaagi sa gipaambit, mobiyahe usab ang ngalan sa Carcar. Ang produkto mahimong panumduman sa biyahe ug sa lugar." fil="Sa pamamagitan ng ibinahagi, naglalakbay din ang pangalan ng Carcar. Nagiging alaala ng biyahe at ng lugar ang produkto." />,
  },
];

export default function PasalubongPage() {
  return (
    <>
      <PageHero
        index="07"
        eyebrow="Pasalubong"
        imageId="pasalubong-hero"
        title={
          <T
            en={<>Bringing a piece of <span className="italic text-crisp">Carcar home.</span></>}
            ceb={<>Pagdala og bahin sa <span className="italic text-crisp">Carcar pauli.</span></>}
            fil={<>Pag-uwi ng bahagi ng <span className="italic text-crisp">Carcar.</span></>}
          />
        }
        intro={<T en="In Filipino culture, pasalubong is something you bring back from a trip for those who stayed. The study found chicharon at the centre of this practice for Carcar — bought to share, not just to eat." ceb="Sa kultura sa Pilipino, ang pasalubong mao ang imong dad-on gikan sa biyahe alang sa mga nagpabilin. Nakaplagan sa pagtuon nga ang chicharon anaa sa sentro niini nga batasan sa Carcar — gipalit aron ipaambit, dili lang aron kaonon." fil="Sa kulturang Pilipino, ang pasalubong ay ang iniuuwi mula sa biyahe para sa mga naiwan. Natuklasan ng pag-aaral na nasa sentro ng gawing ito sa Carcar ang chicharon — binibili upang ibahagi, hindi lamang upang kainin." />}
      />

      <section className="border-y border-line bg-surface py-20 lg:py-24">
        <Container>
          <Stagger className="grid gap-5 md:grid-cols-3">
            {[
              { k: "r", Icon: Heart, t: <T en="Remembrance" ceb="Paghinumdom" fil="Pag-alala" />, d: <T en="Pasalubong shows you remembered and cared for the people who did not travel with you." ceb="Ang pasalubong nagpakita nga nahinumdoman ug giatiman nimo ang mga tawo nga wala mouban kanimo sa biyahe." fil="Ipinapakita ng pasalubong na naalala at pinahalagahan mo ang mga taong hindi mo nakasama sa biyahe." /> },
              { k: "f", Icon: Users, t: <T en="Family ties" ceb="Relasyon sa pamilya" fil="Ugnayang pampamilya" />, d: <T en="It keeps family relationships close, especially for those who rarely get to go home." ceb="Nagpabilin niini nga suod ang relasyon sa pamilya, labi na sa mga talagsa ra makapauli." fil="Pinananatili nitong malapit ang ugnayan ng pamilya, lalo na sa mga bihirang makauwi." /> },
              { k: "s", Icon: Gift, t: <T en="Spreading Carcar" ceb="Pagkaylap sa Carcar" fil="Pagpapalaganap ng Carcar" />, d: <T en="Each shared pack introduces Carcar chicharon — and Carcar — to someone new." ceb="Matag putos nga gipaambit nagpaila sa chicharon sa Carcar — ug sa Carcar — sa usa ka bag-ong tawo." fil="Bawat balot na ibinahagi ay nagpapakilala ng chicharon ng Carcar — at ng Carcar — sa isang bagong tao." /> },
            ].map((c) => (
              <StaggerItem key={c.k}>
                <div className="group h-full rounded-3xl bg-paper p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-crisp/10 text-crisp transition-transform duration-300 group-hover:scale-110">
                    <c.Icon className="size-5" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-medium">{c.t}</h2>
                  <p className="mt-2 leading-relaxed text-ink-soft">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="pt-20 lg:pt-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={<T en="The journey" ceb="Ang panaw" fil="Ang paglalakbay" />} title={<T en="From a stall to a family table" ceb="Gikan sa tindahan hangtod sa lamesa sa pamilya" fil="Mula sa tindahan hanggang sa hapag ng pamilya" />} intro={<T en="Scroll through the six moments of a pasalubong." ceb="I-scroll ang unom ka higayon sa usa ka pasalubong." fil="I-scroll ang anim na sandali ng isang pasalubong." />} className="mb-12 lg:mb-0" />
          </Reveal>
        </Container>
        <div className="py-8 lg:py-0">
          <Journey steps={steps} label="Pasalubong journey" />
        </div>
      </section>

      <section className="dark-surface bg-night py-20 text-cream lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={<T en="In their words" ceb="Sa ilang pulong" fil="Sa kanilang salita" />} title="“Nakita nila ang paghigugma.”" intro={<T en="They see the love — respondents describe pasalubong as a way to show family they matter." ceb="Makita nila ang gugma — gihulagway sa mga tigtubag ang pasalubong isip paagi sa pagpakita sa pamilya nga importante sila." fil="Nakikita nila ang pagmamahal — inilalarawan ng mga tagatugon ang pasalubong bilang paraan upang ipakita sa pamilya na mahalaga sila." />} />
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {["w41-pasalubong", "r26-travel", "r7-pasalubong", "r95-travel"].map((id, i) => (
              <Reveal key={id} delay={i * 0.06}>
                <QuoteBlock quote={quoteById(id)} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-balance text-4xl leading-tight font-medium sm:text-5xl">
              “Hindi kompleto ang pagbisita sa Carcar kung walang pasalubong na chicharon.”
            </h2>
            <p className="mt-4 text-ink-soft">
              <T en="Respondent R39 — A visit to Carcar isn't complete without chicharon as pasalubong." ceb="Tigtubag R39 — Dili kompleto ang pagbisita sa Carcar kon walay chicharon nga pasalubong." fil="Tagatugon R39" />
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <ButtonLink href="/vendors">
              <T en="Find a vendor" ceb="Pangita og tindera" fil="Maghanap ng nagtitinda" />
            </ButtonLink>
            <ButtonLink href="/explore-carcar" variant="ghost">
              <T en="Plan a visit" ceb="Plano og pagbisita" fil="Magplano ng pagbisita" />
            </ButtonLink>
          </Reveal>
        </Container>
        <Container>
          <SourceNote className="mt-12">
            <T en="Source" ceb="Tinubdan" fil="Sanggunian" />: Kabanata 4 — Tradisyon ng Pasalubong at Pagbabahagi Bilang Pagpapahalagang Pampamilya at Panlipunan.</SourceNote>
        </Container>
      </section>
    </>
  );
}
