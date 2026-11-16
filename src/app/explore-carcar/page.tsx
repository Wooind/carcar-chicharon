import type { Metadata } from "next";
import { Church, Compass, Home as HomeIcon, Landmark, MapPin, Navigation } from "lucide-react";
import { ImagePlaceholder, PhotoCredit } from "@/components/ImagePlaceholder";
import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ButtonLink, Container, Eyebrow, QuoteBlock, SectionHeading, SourceNote } from "@/components/ui";
import { quoteById } from "@/data/quotes";
import { T, tr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Explore Carcar",
  description: "Carcar, the Heritage City of the South — where it is, its market, its landmarks and the experiences visitors connect with chicharon.",
};

const moments = [
  {
    t: tr("Stop on the road south", "Hunong sa dalan paingon sa habagatan", "Huminto sa daan patimog"),
    d: tr("Travellers heading south, including trips to Simala, pass through Carcar and stop to buy.", "Ang mga biyahero paingon sa habagatan, apil ang biyahe sa Simala, moagi sa Carcar ug mohunong aron mopalit.", "Dumaraan sa Carcar at humihinto upang bumili ang mga biyaherong patimog, kabilang ang mga biyahe sa Simala."),
    q: "r13-travel",
  },
  {
    t: tr("Sunday at the palengke", "Domingo sa merkado", "Linggo sa palengke"),
    d: tr("Some families buy fresh, newly cooked chicharon at the market after Sunday Mass in Carcar.", "Ang pipila ka pamilya mopalit og presko ug bag-ong lutong chicharon sa merkado human sa Misa sa Domingo sa Carcar.", "Bumibili ang ilang pamilya ng sariwa at bagong lutong chicharon sa palengke pagkatapos ng Misa tuwing Linggo sa Carcar."),
    q: "r90-everyday",
  },
  {
    t: tr("Taste before you buy", "Tilawi una sa dili pa mopalit", "Tikman muna bago bumili"),
    d: tr("Some vendors let you taste first — a small ritual of trust between seller and buyer.", "Ang pipila ka tindera motugot nga motilaw ka una — gamay nga ritwal sa pagsalig tali sa tindera ug mamalitay.", "Pinatitikim ka muna ng ilang nagtitinda — isang munting ritwal ng tiwala sa pagitan ng nagbebenta at mamimili."),
    q: "r39-selling",
  },
];

const places = [
  { id: "explore-place-1", Icon: Church, name: "St. Catherine of Alexandria Church", kind: tr("Parish church", "Simbahan sa parokya", "Simbahang parokya") },
  { id: "explore-place-2", Icon: Landmark, name: "Carcar City Museum", kind: tr("Museum", "Museyo", "Museo") },
  { id: "explore-place-3", Icon: HomeIcon, name: "Silva House", kind: tr("Heritage house", "Karaang balay", "Pamanang bahay") },
  { id: "explore-place-4", Icon: HomeIcon, name: "Sato Ancestral House", kind: tr("Ancestral house", "Balay sa katigulangan", "Bahay ng ninuno") },
];

export default function ExplorePage() {
  return (
    <>
      <section className="relative">
        <Parallax className="h-[78dvh] min-h-[520px]" amount={70} overlay={<PhotoCredit id="explore-hero" className="right-3 top-3" />}>
          <ImagePlaceholder id="explore-hero" fill priority hideCredit sizes="100vw" />
        </Parallax>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
        <div className="dark-surface absolute inset-x-0 bottom-0 text-cream">
          <Container className="pb-12 lg:pb-20">
            <Reveal>
              <Eyebrow>
                <span className="tabular-nums">11</span> <T en="Explore Carcar" ceb="Libota ang Carcar" fil="Libutin ang Carcar" />
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 max-w-4xl font-display text-balance text-[2.6rem] leading-[1.02] font-medium sm:text-6xl lg:text-7xl">
                The Heritage City <span className="italic text-crisp-light">of the South.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg text-cream/80">
                <T
                  en="Come for the chicharon. Stay for the city, its market and its people."
                  ceb="Anhi alang sa chicharon. Pabilin alang sa dakbayan, sa merkado ug sa katawhan niini."
                  fil="Pumunta para sa chicharon. Manatili para sa lungsod, sa palengke at sa mga tao nito."
                />
              </p>
            </Reveal>
          </Container>
        </div>
      </section>

      {/* Where is Carcar */}
      <section className="py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                eyebrow={<T en="Where is Carcar?" ceb="Asa ang Carcar?" fil="Nasaan ang Carcar?" />}
                title={<T en="On the road to southern Cebu" ceb="Sa dalan paingon sa habagatang Sugbo" fil="Sa daan patungong timog Cebu" />}
                intro={
                  <T
                    en="Carcar is a component city in the Province of Cebu, south of Cebu City. Because the main road to the southern towns runs through it, many travellers pass — and stop — here. That is exactly the setting respondents describe."
                    ceb="Ang Carcar usa ka component city sa Probinsya sa Sugbo, habagatan sa Dakbayan sa Sugbo. Tungod kay ang nag-unang dalan paingon sa habagatang mga lungsod moagi niini, daghang biyahero ang moagi — ug mohunong — dinhi. Mao gyud kini ang kahimtang nga gihulagway sa mga tigtubag."
                    fil="Ang Carcar ay isang component city sa Lalawigan ng Cebu, sa timog ng Lungsod ng Cebu. Dahil dumaraan dito ang pangunahing daan patungo sa mga bayan sa timog, maraming biyahero ang dumaraan — at humihinto — rito. Ito mismo ang tagpuang inilalarawan ng mga tagatugon."
                  />
                }
              />
            </Reveal>
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { Icon: MapPin, a: tr("Province", "Probinsya", "Lalawigan"), b: "Cebu" },
                { Icon: Compass, a: tr("Direction", "Direksiyon", "Direksiyon"), b: tr("South of Cebu City", "Habagatan sa Dakbayan sa Sugbo", "Timog ng Lungsod ng Cebu") },
                { Icon: Navigation, a: tr("Known as", "Nailhan isip", "Kilala bilang"), b: "Heritage City of the South" },
              ].map((x, i) => (
                <StaggerItem key={i}>
                  <div className="h-full rounded-2xl border border-line bg-surface p-4">
                    <x.Icon className="size-4 text-crisp" aria-hidden />
                    <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                      <T v={x.a} />
                    </p>
                    <p className="mt-1 text-sm font-medium leading-snug">{typeof x.b === "string" ? x.b : <T v={x.b} />}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="relative mx-auto max-w-md">
              <div className="relative aspect-[6/7] overflow-hidden rounded-[28px] border border-line bg-[#cfe6f4] shadow-xl shadow-ink/5">
                <ImagePlaceholder id="carcar-locator" fill sizes="(min-width:1024px) 440px, 92vw" imgClassName="object-contain!" creditPosition="bottom" />
              </div>
              <div className="absolute -left-4 -top-4 flex items-center gap-3 rounded-2xl border border-line bg-surface p-3 pr-5 shadow-lg sm:-left-8">
                <div className="relative size-14 overflow-hidden rounded-full bg-white">
                  <ImagePlaceholder id="carcar-seal" fill compact sizes="56px" imgClassName="object-contain! p-0.5" />
                </div>
                <div>
                  <p className="font-display text-base leading-tight">City of Carcar</p>
                  <p className="text-[11px] text-ink-faint">
                    <T en="Official seal" ceb="Opisyal nga selyo" fil="Opisyal na selyo" />
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={<T en="Experiences from the study" ceb="Mga kasinatian gikan sa pagtuon" fil="Mga karanasan mula sa pag-aaral" />}
              title={<T en="Ways visitors meet Carcar" ceb="Mga paagi nga mailhan sa bisita ang Carcar" fil="Mga paraan ng pagkilala ng bisita sa Carcar" />}
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {moments.map((m, i) => (
              <StaggerItem key={m.q} className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-line bg-paper p-7">
                  <span className="font-display text-4xl text-crisp/30 tabular-nums">{i + 1}</span>
                  <h2 className="mt-3 font-display text-2xl font-medium">
                    <T v={m.t} />
                  </h2>
                  <p className="mt-2 text-ink-soft">
                    <T v={m.d} />
                  </p>
                  <div className="mt-auto border-t border-line pt-6">
                    <QuoteBlock quote={quoteById(m.q)} showTheme={false} />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <ImagePlaceholder id="explore-market" className="rounded-[28px]" sizes="(min-width:1024px) 55vw, 92vw" />
          </Reveal>
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow={<T en="The palengke" ceb="Ang merkado" fil="Ang palengke" />}
                title={<T en="Carcar public market" ceb="Publikong merkado sa Carcar" fil="Pampublikong palengke ng Carcar" />}
                intro={
                  <T
                    en="Respondents named the market as a place to buy chicharon that is fresh and newly cooked — often compared favourably with chicharon bought elsewhere."
                    ceb="Gihisgutan sa mga tigtubag ang merkado isip lugar sa pagpalit og chicharon nga presko ug bag-ong luto — kasagaran giingon nga mas maayo kaysa chicharon nga gipalit sa laing lugar."
                    fil="Binanggit ng mga tagatugon ang palengke bilang lugar ng pagbili ng chicharong sariwa at bagong luto — madalas ihambing nang mas mabuti kaysa chicharong binili sa ibang lugar."
                  />
                }
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Carcar+City+Public+Market,+Carcar,+Cebu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium hover:border-crisp hover:text-crisp"
              >
                <MapPin className="size-4 text-crisp" aria-hidden />
                <T en="Open in Google Maps" ceb="Ablihi sa Google Maps" fil="Buksan sa Google Maps" />
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={<T en="Heritage landmarks" ceb="Mga landmark sa kabilin" fil="Mga pamanang palatandaan" />}
              title={<T en="Around the city" ceb="Libot sa dakbayan" fil="Sa paligid ng lungsod" />}
              intro={
                <T
                  en="Beyond chicharon, Carcar is known for its heritage architecture. Pair your pasalubong stop with a visit to these landmarks."
                  ceb="Gawas sa chicharon, ang Carcar nailhan sa karaang arkitektura niini. Ubani ang imong pagpalit og pasalubong og pagbisita niining mga landmark."
                  fil="Bukod sa chicharon, kilala ang Carcar sa pamanang arkitektura nito. Isabay ang pamimili ng pasalubong sa pagbisita sa mga palatandaang ito."
                />
              }
            />
          </Reveal>
          <div className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {places.map((pl, n) => (
              <Reveal key={pl.id} delay={n * 0.05} className="w-[72%] shrink-0 snap-center sm:w-[44%] lg:w-auto">
                <article className="group">
                  <div className="overflow-hidden rounded-3xl">
                    <div className="transition-transform duration-700 group-hover:scale-105">
                      <ImagePlaceholder id={pl.id} sizes="(min-width:1024px) 23vw, 70vw" />
                    </div>
                  </div>
                  <p className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-crisp">
                    <pl.Icon className="size-3.5" aria-hidden />
                    <T v={pl.kind} />
                  </p>
                  <h3 className="mt-1 font-display text-xl leading-snug">{pl.name}</h3>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pl.name + ", Carcar, Cebu")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-crisp"
                  >
                    <MapPin className="size-4" aria-hidden />
                    <span className="link-underline">
                      <T en="View on map" ceb="Tan-awa sa mapa" fil="Tingnan sa mapa" />
                    </span>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="dark-surface bg-night py-20 text-cream lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <QuoteBlock quote={quoteById("r36-tourism")} size="lg" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href="/vendors">
              <T en="Where to buy" ceb="Asa mopalit" fil="Saan bibili" />
            </ButtonLink>
            <ButtonLink href="/discover" variant="light">
              <T en="What to try" ceb="Unsay sulayan" fil="Ano ang susubukan" />
            </ButtonLink>
          </Reveal>
        </Container>
        <Container>
          <SourceNote className="mt-12">
            <T en="Source" ceb="Tinubdan" fil="Sanggunian" />: Kabanata 3 (Lugar ng Pag-aaral) at Kabanata 4.{" "}
            <T en="Photo credits are listed on the Sources page." ceb="Ang mga kredito sa litrato makita sa panid sa Mga Tinubdan." fil="Nakalista sa pahina ng Mga Sanggunian ang mga kredito ng larawan." />
          </SourceNote>
        </Container>
      </section>
    </>
  );
}
