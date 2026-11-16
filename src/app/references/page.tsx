import type { Metadata } from "next";
import { ExternalLink, ImageIcon } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Container, Eyebrow } from "@/components/ui";
import { placeholderList } from "@/data/placeholders";
import type { Photo } from "@/data/photos";
import { referenceGroups } from "@/data/references";
import { site } from "@/data/site";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Sources",
  description: "Works cited in the study Wika at Kultura ng Chicharon, which this website draws on, and credits for every photograph used.",
};

/** Every distinct photo actually used on the site, with the slots it fills. */
function usedPhotos() {
  const map = new Map<string, { photo: Photo; slots: string[] }>();
  for (const e of placeholderList) {
    if (!e.credit) continue;
    const cur = map.get(e.credit.src) ?? { photo: e.credit, slots: [] };
    cur.slots.push(e.id);
    map.set(e.credit.src, cur);
  }
  return [...map.values()].sort((a, b) => Number(!a.photo.url) - Number(!b.photo.url) || a.photo.where.localeCompare(b.photo.where));
}

export default function ReferencesPage() {
  const credits = usedPhotos();
  return (
    <section className="pb-24 pt-8 sm:pt-12 lg:pt-16">
      <Container className="max-w-5xl">
        <Reveal>
          <Eyebrow>
            <T en="Sources" ceb="Mga Tinubdan" fil="Mga Sanggunian" />
          </Eyebrow>
          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.02] font-medium sm:text-6xl">
            <T en="Sources & references" ceb="Mga tinubdan ug reperensiya" fil="Mga sanggunian at reperensiya" />
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            <T
              en={<>The primary source of this website is the study <em>{site.studyTitle}</em> and its interview data. Below are the works it cites, listed as they appear in the study&apos;s in-text citations. No sources have been added.</>}
              ceb={<>Ang nag-unang tinubdan niini nga website mao ang pagtuon nga <em>{site.studyTitle}</em> ug ang datos sa interbyu niini. Sa ubos mao ang mga obra nga gikutlo niini, sumala sa pagpakita sa in-text citation sa pagtuon. Walay gidugang nga tinubdan.</>}
              fil={<>Ang pangunahing sanggunian ng website na ito ay ang pag-aaral na <em>{site.studyTitle}</em> at ang datos ng panayam nito. Nasa ibaba ang mga akdang binanggit nito, ayon sa pagkakalitaw sa in-text citation ng pag-aaral. Walang idinagdag na sanggunian.</>}
            />
          </p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {referenceGroups.map((g) => (
            <Reveal key={g.title}>
              <h2 className="border-b border-line pb-3 font-display text-2xl font-medium">{g.title}</h2>
              <ul className="divide-y divide-line">
                {g.items.map((r) => (
                  <li key={r.author + (r.work ?? "")} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
                    <div>
                      <p className="font-medium">{r.author}</p>
                      {r.work && <p className="text-[15px] italic text-ink-soft">{r.work}</p>}
                    </div>
                    <p className="text-sm text-ink-faint sm:text-right">
                      {r.cited !== "—" && <span>{r.cited} · </span>}
                      {r.where}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Photo credits */}
        <Reveal className="mt-20" >
          <div id="photo-credits" className="scroll-mt-24">
            <h2 className="flex items-center gap-3 border-b border-line pb-3 font-display text-2xl font-medium">
              <ImageIcon className="size-5 text-crisp" aria-hidden />
              <T en="Photo credits" ceb="Mga kredito sa litrato" fil="Mga kredito ng larawan" />
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
              <T
                en="No AI-generated images are used. Photographs from Wikimedia Commons are reused under their open licences (CC0, CC BY, CC BY-SA or public domain); the credit line must stay with each image. Photos marked “Supplied by the researchers” were provided by the research team."
                ceb="Walay AI-generated nga hulagway nga gigamit. Ang mga litrato gikan sa Wikimedia Commons gigamit pag-usab ubos sa ilang bukas nga lisensya (CC0, CC BY, CC BY-SA o public domain); kinahanglan magpabilin ang kredito uban sa matag hulagway. Ang mga litrato nga gimarkahan og “Supplied by the researchers” gihatag sa grupo sa panukiduki."
                fil="Walang ginamit na larawang gawa ng AI. Muling ginamit ang mga larawan mula sa Wikimedia Commons sa ilalim ng kanilang bukas na lisensya (CC0, CC BY, CC BY-SA o public domain); kailangang manatili ang kredito sa bawat larawan. Ang mga larawang may markang “Supplied by the researchers” ay ibinigay ng pangkat ng pananaliksik."
              />
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="bg-surface text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold"><T en="Photo" ceb="Litrato" fil="Larawan" /></th>
                    <th scope="col" className="px-4 py-3 font-semibold"><T en="Author" ceb="Tagsulat" fil="May-akda" /></th>
                    <th scope="col" className="px-4 py-3 font-semibold"><T en="Licence" ceb="Lisensya" fil="Lisensya" /></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {credits.map(({ photo }) => (
                    <tr key={photo.src} className="align-top">
                      <td className="px-4 py-3">
                        <div className="flex items-start gap-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={photo.src} alt="" loading="lazy" className="size-12 shrink-0 rounded-lg bg-sand object-cover" />
                          <div>
                            <p className="font-medium leading-snug">{photo.where}</p>
                            {photo.url && (
                              <a href={photo.url} target="_blank" rel="noreferrer" className="mt-0.5 inline-flex items-center gap-1 text-xs text-crisp hover:underline">
                                Wikimedia Commons <ExternalLink className="size-3" aria-hidden />
                              </a>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-ink-soft">{photo.author}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-ink-soft">{photo.license}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
