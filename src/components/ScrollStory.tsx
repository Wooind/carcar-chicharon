"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { easeOut } from "./motion";
import { T, tr } from "@/lib/i18n";

const steps = [
  { word: tr("Carcar", "Carcar", "Carcar"), href: "/explore-carcar",
    line: tr("A city in southern Cebu known as the “Heritage City of the South” — and, in the minds of many, as the home of chicharon.",
      "Usa ka dakbayan sa habagatang Sugbo nga nailhan nga “Heritage City of the South” — ug, sa hunahuna sa kadaghanan, ang pinuy-anan sa chicharon.",
      "Isang lungsod sa timog Cebu na kilala bilang “Heritage City of the South” — at, sa isip ng marami, ang tahanan ng chicharon.") },
  { word: tr("Chicharon", "Chicharon", "Chicharon"), href: "/story",
    line: tr("Pork skin cleaned, boiled, dried, seasoned and fried until it puffs and crackles — a skill respondents say takes years of experience to master.",
      "Panit sa baboy nga gilimpyohan, gilaswa, gibulad, gitimplahan ug gipritos hangtod mobukad ug mokaging — usa ka kahanas nga matod sa mga tigtubag nagkinahanglan og daghang tuig nga kasinatian.",
      "Balat ng baboy na nilinis, pinakuluan, pinatuyo, tinimplahan at piniprito hanggang lumobo at lumutong — isang kasanayang ayon sa mga tagatugon ay nangangailangan ng maraming taon ng karanasan.") },
  { word: tr("People", "Katawhan", "Mga Tao"), href: "/people",
    line: tr("Cooks, vendors, suppliers, families and the buyers who keep coming back. Respondents say everyone benefits — “the owner, the maker, the people, the city.”",
      "Mga magluluto, tindera, supplier, pamilya ug mga mamalitay nga kanunay mobalik. Matod sa mga tigtubag, tanan makabenepisyo — “ang tag-iya, ang naghimo, ang katawhan, ang dakbayan.”",
      "Mga tagaluto, nagtitinda, supplier, pamilya at mga mamimiling paulit-ulit na bumabalik. Ayon sa mga tagatugon, lahat ay nakikinabang — “ang may-ari, ang gumagawa, ang mga tao, ang lungsod.”") },
  { word: tr("Culture", "Kultura", "Kultura"), href: "/culture",
    line: tr("Most respondents first met chicharon at home, through parents and grandparents. Cultural knowledge is passed hand to hand.",
      "Kadaghanan sa mga tigtubag unang nakaila sa chicharon sa balay, pinaagi sa mga ginikanan ug apohan. Ang kahibalo sa kultura gipasa gikan sa usa ka kamot ngadto sa lain.",
      "Karamihan sa mga tagatugon ay unang nakakilala sa chicharon sa tahanan, sa pamamagitan ng mga magulang at lolo at lola. Ipinapasa ang kultural na kaalaman mula kamay hanggang kamay.") },
  { word: tr("Pasalubong", "Pasalubong", "Pasalubong"), href: "/pasalubong",
    line: tr("Bought on the way home and shared with family and friends — a gesture of remembering and caring for the people waiting.",
      "Ginapalit sa pagpauli ug ginapaambit sa pamilya ug mga higala — timaan sa paghinumdom ug pag-atiman sa mga naghulat.",
      "Binibili pauwi at ibinabahagi sa pamilya at kaibigan — tanda ng pag-alala at pagmamalasakit sa mga naghihintay.") },
  { word: tr("Livelihood", "Panginabuhian", "Kabuhayan"), href: "/livelihood",
    line: tr("From butchers and cleaners to cooks and bus vendors, the industry supports the daily needs of many Carcar families.",
      "Gikan sa mga mangangatay ug tiglimpyo hangtod sa mga magluluto ug tindera sa bus, ang industriya nagsuporta sa adlaw-adlaw nga panginahanglan sa daghang pamilya sa Carcar.",
      "Mula sa mga magkakatay at tagalinis hanggang sa mga tagaluto at nagtitinda sa bus, tinutugunan ng industriya ang pang-araw-araw na pangangailangan ng maraming pamilya sa Carcar.") },
  { word: tr("Digital culture", "Digital nga kultura", "Kulturang digital"), href: "/digital-culture",
    line: tr("Word-of-mouth now travels through posts, photos and recommendations — which is why this platform exists.",
      "Ang mga sugilanon karon mokaylap pinaagi sa mga post, hulagway ug rekomendasyon — mao nga naglungtad kini nga plataporma.",
      "Kumakalat na ngayon ang salita sa pamamagitan ng mga post, larawan at rekomendasyon — kaya umiiral ang platapormang ito.") },
  { word: tr("Discover", "Diskobrehi", "Tuklasin"), href: "/discover",
    line: tr("Learn the story, meet the people, and find where to taste Carcar chicharon for yourself.",
      "Hibal-i ang istorya, ilaila ang katawhan, ug pangitaa kon asa nimo matilawan ang chicharon sa Carcar.",
      "Alamin ang kuwento, kilalanin ang mga tao, at hanapin kung saan matitikman ang chicharon ng Carcar.") },
];

export function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    if (i !== active) setActive(i);
  });

  return (
    <section ref={ref} aria-label="The journey of Carcar chicharon" className="dark-surface relative bg-night text-cream" style={{ height: `${steps.length * 70}vh` }}>
      <div className="sticky top-0 flex h-dvh items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1320px] gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
          {/* Word ladder */}
          <ol className="lg:col-span-7" aria-label="Journey steps">
            {steps.map((s, i) => (
              <li key={s.href}>
                <span
                  className={cn(
                    "block font-display leading-[1.02] font-medium uppercase tracking-tight transition-[color,opacity,transform] duration-500",
                    "text-[clamp(1.5rem,min(7.2vw,8.6vh),5.2rem)]",
                    i === active ? "translate-x-0 text-crisp-light opacity-100" : "text-cream opacity-[0.16]",
                    i < active && "opacity-[0.28]",
                  )}
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                  aria-current={i === active ? "step" : undefined}
                >
                  <T v={s.word} />
                </span>
              </li>
            ))}
          </ol>

          {/* Explanation panel */}
          <div className="relative lg:col-span-5 lg:self-center">
            <div className="mb-4 flex items-center gap-3 text-xs tabular-nums text-cream/55">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <span className="h-px flex-1 bg-cream/20">
                <motion.span className="block h-px origin-left bg-crisp-light" animate={{ scaleX: (active + 1) / steps.length }} transition={{ duration: 0.4, ease: easeOut }} />
              </span>
              <span>{String(steps.length).padStart(2, "0")}</span>
            </div>
            <div className="min-h-[9.5rem] sm:min-h-[8rem]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: easeOut }}
                >
                  <p className="text-pretty text-base leading-relaxed text-cream/80 sm:text-lg"><T v={steps[active].line} /></p>
                  <Link href={steps[active].href} className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-crisp-light">
                    <span className="link-underline"><T en="Explore" ceb="Susiha" fil="Galugarin" />: <T v={steps[active].word} /></span>
                    <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
