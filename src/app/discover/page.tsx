import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Store } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ButtonLink, Container, QuoteBlock, SectionHeading, SourceNote } from "@/components/ui";
import { quoteById } from "@/data/quotes";
import { T, tr } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Discover Carcar Chicharon",
  description: "Discover the kinds of Carcar chicharon and the local foods bought alongside it.",
};

const MENTIONED = tr("Mentioned by respondents", "Gihisgutan sa mga tigtubag", "Binanggit ng mga tagatugon");
const CITED = tr("Term cited in the study", "Pulong nga gikutlo sa pagtuon", "Terminong binanggit sa pag-aaral");
const DESCRIBED = tr("Described by respondents", "Gihulagway sa mga tigtubag", "Inilarawan ng mga tagatugon");

const products = [
  { name: tr("Chicharon (panit)", "Chicharon (panit)", "Chicharon (balat)"), note: tr("Skin only — “kung ang panit lang way apil ang unod” (R17).", "Panit ra — “kung ang panit lang way apil ang unod” (R17).", "Balat lamang — “kung ang panit lang way apil ang unod” (R17)."), basis: MENTIONED },
  { name: tr("Chicharon with laman", "Chicharon nga may laman", "Chicharon na may laman"), note: tr("“Laman” — a Cebuano chicharon term the study cites as a marker of quality and identity.", "“Laman” — usa ka Sinugbuanong pulong sa chicharon nga gikutlo sa pagtuon isip timaan sa kalidad ug pagkatawo.", "“Laman” — isang terminong Cebuano sa chicharon na binanggit ng pag-aaral bilang tanda ng kalidad at pagkakakilanlan."), basis: CITED },
  { name: tr("Chicharon with kubal", "Chicharon nga may kubal", "Chicharon na may kubal"), note: tr("“Kubal” — another Cebuano term the study cites from the chicharon trade.", "“Kubal” — laing Sinugbuanong pulong nga gikutlo sa pagtuon gikan sa negosyo sa chicharon.", "“Kubal” — isa pang terminong Cebuano na binanggit ng pag-aaral mula sa kalakalan ng chicharon."), basis: CITED },
  { name: tr("Pasalubong packs", "Mga putos sa pasalubong", "Mga balot ng pasalubong"), note: tr("Packed in plastic in different sizes and prices, sold for travellers.", "Giputos sa plastik sa nagkalain-laing gidak-on ug presyo, gibaligya alang sa mga biyahero.", "Nakabalot sa plastik sa iba't ibang laki at presyo, ibinebenta para sa mga biyahero."), basis: DESCRIBED },
  { name: tr("Freshly cooked, market-bought", "Bag-ong luto, gipalit sa merkado", "Bagong luto, binili sa palengke"), note: tr("Bought “sariwa at bagong luto” at the Carcar palengke.", "Gipalit nga “sariwa at bagong luto” sa merkado sa Carcar.", "Binili nang “sariwa at bagong luto” sa palengke ng Carcar."), basis: DESCRIBED },
];

const alongside = ["Ampao", "Hopia", "Bukarolyo", "Banana chips", "Dried mango", "Lechon / lechon manok", "Tinapay ng Carcar"];

export default function DiscoverPage() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow={<T en="Discover" ceb="Diskobrehi" fil="Tuklasin" />}
        imageId="discover-hero"
        title={
          <T
            en={<>Get to know <span className="italic text-crisp">the product.</span></>}
            ceb={<>Ilaila ang <span className="italic text-crisp">produkto.</span></>}
            fil={<>Kilalanin ang <span className="italic text-crisp">produkto.</span></>}
          />
        }
        intro={<T en="Not a shop — a guide. These are the kinds of chicharon that appear in the study, and the Carcar foods people buy with it." ceb="Dili tindahan — usa ka giya. Kini ang mga klase sa chicharon nga makita sa pagtuon, ug ang mga pagkaon sa Carcar nga gipalit uban niini." fil="Hindi tindahan — isang gabay. Ito ang mga uri ng chicharon na lumitaw sa pag-aaral, at ang mga pagkain ng Carcar na binibili kasama nito." />}
      />

      <section className="pb-20 lg:pb-28">
        <Container>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <StaggerItem key={p.name.en}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                  <div className="relative overflow-hidden">
                    <div className="transition-transform duration-700 group-hover:scale-105">
                      <ImagePlaceholder id={`discover-product-${i + 1}`} sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw" />
                    </div>
                    <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-semibold">
                      <T v={p.basis} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-2xl font-medium">
                      <T v={p.name} />
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      <T v={p.note} />
                    </p>
                    <Link href="/vendors" className="mt-auto flex min-h-11 items-center gap-1.5 pt-5 text-sm font-medium text-crisp">
                      <span className="link-underline">
                        <T en="Find where it's sold" ceb="Pangitaa kon asa gibaligya" fil="Hanapin kung saan ibinebenta" />
                      </span>
                      <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
            <StaggerItem>
              <Link href="/vendors" className="dark-surface group flex h-full min-h-[320px] flex-col justify-between rounded-3xl bg-night p-7 text-cream transition-transform duration-300 hover:-translate-y-1">
                <Store aria-hidden className="size-8 text-crisp-light" />
                <div>
                  <h2 className="font-display text-3xl leading-tight font-medium">
                    <T en="Ready to order?" ceb="Andam na mo-order?" fil="Handa nang umorder?" />
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-cream/75">
                    <T en="See Carcar sellers you can message on Facebook — with where their stores are." ceb="Tan-awa ang mga tindera sa Carcar nga ma-message sa Facebook — uban kon asa ang ilang tindahan." fil="Tingnan ang mga nagtitinda sa Carcar na maaaring i-message sa Facebook — kasama kung nasaan ang kanilang tindahan." />
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-crisp-light">
                    <T en="Find a vendor" ceb="Pangita og tindera" fil="Maghanap ng nagtitinda" />
                    <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow={<T en="Bought alongside" ceb="Gipalit uban niini" fil="Binibili kasabay nito" />}
                title={<T en="More to taste in Carcar" ceb="Daghan pang matilawan sa Carcar" fil="Marami pang matitikman sa Carcar" />}
                intro={<T en="Chicharon is usually first on the list — but respondents named other Carcar foods they bring home too." ceb="Ang chicharon kasagaran una sa lista — apan ang mga tigtubag naghisgot usab og ubang pagkaon sa Carcar nga ilang gidala pauli." fil="Kadalasang una sa listahan ang chicharon — ngunit binanggit din ng mga tagatugon ang iba pang pagkain ng Carcar na iniuuwi nila." />}
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
              {alongside.map((a) => (
                <span key={a} className="rounded-full border border-line bg-paper px-4 py-2 text-sm">{a}</span>
              ))}
            </Reveal>
            <Reveal delay={0.15} className="mt-10">
              <QuoteBlock quote={quoteById("r84-pasalubong")} />
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7">
            <ImagePlaceholder id="explore-foods" className="rounded-[28px]" sizes="(min-width:1024px) 55vw, 92vw" />
          </Reveal>
        </Container>
        <Container className="mt-14 flex flex-wrap gap-3">
          <ButtonLink href="/vendors">
            <T en="Browse vendors" ceb="Tan-awa ang mga tindera" fil="Tingnan ang mga nagtitinda" />
          </ButtonLink>
          <ButtonLink href="/pasalubong" variant="ghost">
            <T en="Why people bring it home" ceb="Nganong gidala kini pauli" fil="Bakit ito iniuuwi" />
          </ButtonLink>
        </Container>
        <Container>
          <SourceNote className="mt-10">
            <T en="Source" ceb="Tinubdan" fil="Sanggunian" />: Kabanata 2 (Blackwood, p. 112 — “kubal”, “laman”), Kabanata 4.
          </SourceNote>
        </Container>
      </section>
    </>
  );
}
