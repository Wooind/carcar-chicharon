import type { Metadata } from "next";
import { QuoteExplorer, FeaturedQuotes } from "@/components/QuoteExplorer";
import { Reveal } from "@/components/motion";
import { Container, Eyebrow, SourceNote } from "@/components/ui";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "What People Say",
  description: "Verified respondent statements from the study on Carcar chicharon — family, pasalubong, identity, livelihood and more.",
};

export default function VoicesPage() {
  return (
    <>
      <section className="pb-12 pt-8 sm:pt-12 lg:pt-16">
        <Container>
          <Reveal>
            <Eyebrow>
              <span className="tabular-nums">09</span> <T en="Voices" ceb="Mga Tingog" fil="Mga Tinig" />
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-4xl font-display text-balance text-[2.6rem] leading-[1.02] font-medium sm:text-6xl lg:text-7xl">
              <T
                en={<>In their <span className="italic text-crisp">own words.</span></>}
                ceb={<>Sa ilang <span className="italic text-crisp">kaugalingong pulong.</span></>}
                fil={<>Sa sarili nilang <span className="italic text-crisp">salita.</span></>}
              />
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              <T
                en="Every statement below is reproduced exactly as transcribed in the study — in Cebuano, Filipino or a mix with English — and labelled with the respondent code used by the researchers. The short English gist under each is a paraphrase written for this site, not part of the quotation."
                ceb="Ang matag pamahayag sa ubos gikopya sama gyud sa pagkatranskrayb sa pagtuon — sa Sinugbuanon, Filipino o sinagol sa Iningles — ug gimarkahan sa code sa tigtubag nga gigamit sa mga tigpanukiduki. Wala gihubad ang mga kinutlo aron mapreserbar ang orihinal nilang pulong; ang mubo nga buod sa Iningles usa ka paraphrase alang niini nga site."
                fil="Ang bawat pahayag sa ibaba ay kinopya nang eksakto gaya ng pagkakatranskrayb sa pag-aaral — sa Cebuano, Filipino o halo sa Ingles — at may markang code ng tagatugon na ginamit ng mga mananaliksik. Hindi isinalin ang mga sipi upang mapanatili ang orihinal nilang salita; ang maikling buod sa Ingles ay paraphrase para sa site na ito."
              />
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <Reveal>
            <FeaturedQuotes />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal>
            <h2 className="mb-8 font-display text-3xl font-medium sm:text-4xl">
              <T en="Browse by research theme" ceb="Susiha sumala sa tema sa panukiduki" fil="Tingnan ayon sa tema ng pananaliksik" />
            </h2>
          </Reveal>
          <QuoteExplorer />
          <SourceNote className="mt-8">
            <T en="Source" ceb="Tinubdan" fil="Sanggunian" />: Kabanata 4 — Paglalahad, Pagsusuri, at Pagpapakahulugan ng mga Datos.</SourceNote>
        </Container>
      </section>
    </>
  );
}
