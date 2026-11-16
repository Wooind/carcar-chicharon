"use client";

import { AnimatePresence, motion } from "motion/react";
import { Beef, Flame, Store, Repeat, Users, Landmark, ArrowRight, ArrowDown } from "lucide-react";
import { Fragment, useState, type ComponentType } from "react";
import { quoteById } from "@/data/quotes";
import { cn } from "@/lib/cn";
import { easeOut } from "./motion";
import { QuoteBlock } from "./ui";
import { T, tr, type Tri } from "@/lib/i18n";

type Node = {
  key: string;
  title: Tri;
  who: Tri;
  role: Tri;
  quote: string;
  Icon: ComponentType<{ className?: string }>;
};

const nodes: Node[] = [
  {
    key: "supply",
    title: tr("Suppliers", "Mga Supplier", "Mga Supplier"),
    who: tr("Local butchers and pork suppliers in the market", "Lokal nga mangangatay ug supplier sa baboy sa merkado", "Mga lokal na magkakatay at supplier ng baboy sa palengke"),
    role: tr("Provide the pork skin. Respondents note that producers source directly from local suppliers in their own market — money that stays in the community.", "Sila ang mohatag sa panit sa baboy. Matod sa mga tigtubag, direkta nga mokuha ang mga naghimo gikan sa lokal nga supplier sa ilang kaugalingong merkado — kuwarta nga magpabilin sa komunidad.", "Sila ang nagbibigay ng balat ng baboy. Ayon sa mga tagatugon, direktang kumukuha ang mga gumagawa sa mga lokal na supplier sa sarili nilang palengke — perang nananatili sa komunidad."),
    quote: "r88-livelihood",
    Icon: Beef,
  },
  {
    key: "make",
    title: tr("Producers & workers", "Mga naghimo ug mamumuo", "Mga gumagawa at manggagawa"),
    who: tr("Those who butcher, clean the skin, dry, season and cook", "Ang mangatay, maglimpyo sa panit, mobulad, motimpla ug moluto", "Ang mga nagkakatay, naglilinis ng balat, nagpapatuyo, nagtitimpla at nagluluto"),
    role: tr("Each stage of production is someone's job. Respondents describe a chain of work from butchering to cleaning to cooking.", "Matag ang-ang sa produksiyon trabaho sa usa ka tawo. Gihulagway sa mga tigtubag ang kadena sa trabaho gikan sa pagkatay, paglimpyo hangtod sa pagluto.", "Bawat yugto ng produksiyon ay trabaho ng isang tao. Inilarawan ng mga tagatugon ang kadena ng trabaho mula sa pagkakatay, paglilinis hanggang sa pagluluto."),
    quote: "r76-livelihood",
    Icon: Flame,
  },
  {
    key: "sell",
    title: tr("Vendors", "Mga tindera", "Mga nagtitinda"),
    who: tr("Shops, pasalubong centers, market stalls, roadside and bus vendors", "Mga tindahan, pasalubong center, puwesto sa merkado, sa daplin sa dalan ug sa bus", "Mga tindahan, pasalubong center, puwesto sa palengke, sa tabi ng daan at sa bus"),
    role: tr("Sales are the daily income of many households. The study also found growing competition as more people make and sell chicharon.", "Ang halin mao ang adlaw-adlaw nga kita sa daghang panimalay. Nakaplagan usab sa pagtuon ang nagkadako nga kompetisyon samtang nagkadaghan ang naghimo ug nagbaligya og chicharon.", "Ang benta ang pang-araw-araw na kita ng maraming sambahayan. Natuklasan din ng pag-aaral ang lumalaking kompetisyon habang dumarami ang gumagawa at nagbebenta ng chicharon."),
    quote: "r2-livelihood",
    Icon: Store,
  },
  {
    key: "resell",
    title: tr("Resellers", "Mga mamaligya-usab", "Mga muling nagbebenta"),
    who: tr("Buyers who purchase in bulk and sell elsewhere", "Mga mopalit og daghan ug mobaligya sa laing lugar", "Mga bumibili nang maramihan at nagbebenta sa ibang lugar"),
    role: tr("Some respondents describe people buying in bulk to resell in other places — even as far as Lapu-Lapu and Cebu City — widening the market.", "Ang pipila ka tigtubag naghulagway sa mga tawo nga mopalit og daghan aron ibaligya sa laing lugar — bisan hangtod sa Lapu-Lapu ug Dakbayan sa Sugbo — nga nagpalapad sa merkado.", "May mga tagatugong naglarawan ng mga taong bumibili nang maramihan upang muling ibenta sa ibang lugar — hanggang Lapu-Lapu at Lungsod ng Cebu — na nagpapalawak sa pamilihan."),
    quote: "r34-livelihood",
    Icon: Repeat,
  },
  {
    key: "buy",
    title: tr("Consumers & families", "Mga konsumidor ug pamilya", "Mga mamimili at pamilya"),
    who: tr("Locals, travellers, families receiving pasalubong", "Mga lokal, biyahero, pamilya nga makadawat og pasalubong", "Mga lokal, biyahero, pamilyang tumatanggap ng pasalubong"),
    role: tr("Every purchase supports the chain. Some respondents buy deliberately to support small local businesses rather than mall products.", "Matag palit nagsuporta sa kadena. Ang pipila ka tigtubag tinuyo nga mopalit aron suportahan ang gagmay nga lokal nga negosyo imbes nga mga produkto sa mall.", "Bawat pagbili ay sumusuporta sa kadena. May mga tagatugong sadyang bumibili upang suportahan ang maliliit na lokal na negosyo sa halip na mga produkto sa mall."),
    quote: "r89-support",
    Icon: Users,
  },
  {
    key: "city",
    title: tr("Carcar & tourism", "Carcar ug turismo", "Carcar at turismo"),
    who: tr("The city, its reputation and its visitors", "Ang dakbayan, ang dungog niini ug ang mga bisita", "Ang lungsod, ang reputasyon nito at ang mga bisita"),
    role: tr("Chicharon draws visitors who pass through or come on purpose to taste it, linking food, trade and tourism.", "Ang chicharon makadani sa mga bisita nga moagi o tinuyo nga moanha aron motilaw niini, nga nagdugtong sa pagkaon, negosyo ug turismo.", "Umaakit ang chicharon ng mga bisitang dumaraan o sadyang pumupunta upang tikman ito, na nag-uugnay sa pagkain, kalakalan at turismo."),
    quote: "r37-livelihood",
    Icon: Landmark,
  },
];

export function Ecosystem() {
  const [active, setActive] = useState(0);
  const node = nodes[active];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        <div role="tablist" aria-label="Livelihood ecosystem" aria-orientation="vertical" className="flex flex-col">
          {nodes.map((n, i) => {
            const isActive = i === active;
            return (
              <Fragment key={n.key}>
                <button
                  role="tab"
                  type="button"
                  id={`eco-tab-${n.key}`}
                  aria-selected={isActive}
                  aria-controls="eco-panel"
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative flex min-h-[76px] items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300",
                    "sm:w-[78%]",
                    i % 2 === 1 && "sm:ml-auto",
                    isActive ? "border-crisp bg-crisp text-white shadow-lg shadow-crisp/25" : "border-line bg-surface hover:border-crisp/50 hover:-translate-y-0.5",
                  )}
                >
                  <span className={cn("grid size-11 shrink-0 place-items-center rounded-xl transition-colors", isActive ? "bg-white/15" : "bg-sand text-crisp")}>
                    <n.Icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={cn("block text-[10px] font-semibold uppercase tracking-[0.2em]", isActive ? "text-white/75" : "text-ink-faint")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="block font-display text-lg leading-tight font-medium"><T v={n.title} /></span>
                    <span className={cn("mt-0.5 block text-[13px] leading-snug", isActive ? "text-white/85" : "text-ink-soft")}><T v={n.who} /></span>
                  </span>
                  <ArrowRight aria-hidden className={cn("size-4 shrink-0 transition-transform", isActive ? "translate-x-0.5" : "opacity-40 group-hover:translate-x-1")} />
                </button>
                {i < nodes.length - 1 && (
                  <span aria-hidden className="flex justify-center py-2 text-crisp/70">
                    <ArrowDown className="size-5" />
                  </span>
                )}
              </Fragment>
            );
          })}
        </div>
        <p className="mt-6 flex items-start gap-2 text-sm text-ink-soft">
          <Repeat className="mt-0.5 size-4 shrink-0 text-crisp" aria-hidden />
          <T en="The chain loops: satisfied buyers recommend chicharon to family and friends, sending new buyers back to Carcar." ceb="Ang kadena molibot: ang kontento nga mamalitay morekomendar sa chicharon sa pamilya ug higala, ug mopadala og bag-ong mamalitay balik sa Carcar." fil="Umiikot ang kadena: inirerekomenda ng nasiyahang mamimili ang chicharon sa pamilya at kaibigan, at nagpapadala ng mga bagong mamimili pabalik sa Carcar." />
        </p>
      </div>

      <div className="lg:col-span-5">
        <div id="eco-panel" role="tabpanel" aria-labelledby={`eco-tab-${node.key}`} className="rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div key={node.key} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: easeOut }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crisp"><T v={node.who} /></p>
              <h3 className="mt-2 font-display text-3xl font-medium"><T v={node.title} /></h3>
              <p className="mt-4 text-pretty leading-relaxed text-ink-soft"><T v={node.role} /></p>
              <div className="mt-8 border-t border-line pt-8">
                <QuoteBlock quote={quoteById(node.quote)} showTheme={false} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
