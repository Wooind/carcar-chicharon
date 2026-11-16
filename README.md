# Carcar Chicharon — More Than a Crunch

A digital cultural and promotional platform for Carcar Chicharon. It is the proposed digital output of the study
**"Wika at Kultura ng Chicharon: Sosyo-Kultural na Perspektiba ng mga Mamamayan"** (BSF, Departamento ng Filipino, Cebu Normal University).

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Motion and Lucide icons. Every page is prerendered as static HTML.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run guide      # regenerate IMAGE_PLACEHOLDER_GUIDE.md
```

## Photographs

There are 90 image slots. 63 already show **real photographs of Carcar or the Philippines** (none AI-generated):

- **Wikimedia Commons**: chicharon, the public market, St. Catherine of Alexandria Church, the City Museum, the Silva and Sato houses, the plaza and rotunda, aerial views, the official city seal and a locator map. These are reused under CC0, CC BY, CC BY-SA or public domain. **Their credit lines are required.** They appear as a small chip on each photo and in a table on `/references#photo-credits`.
- **Supplied by the researchers**: the photos the team placed in `public/photos/` (the stall, buyers, plaza, plate, close-up, banana leaf, suka, packs). **Confirm you have the right to publish each one.**
- A few Commons photos were taken elsewhere in the Philippines, for example sun-drying in Camarines Sur and packs at SM City Cebu. Their credit says where they were taken.

Researcher and adviser portraits show initials until real photos are added. Any slot without a photo shows a quiet branded tile, so visitors never see editor notes.

**To add or replace a photo:**

1. Put the file in `public/photos/`.
2. In `src/data/photos.ts`, add it to `photos` with where it was taken, the author and the licence.
3. Map the slot id to it in `assignments`. The ids are listed in `IMAGE_PLACEHOLDER_GUIDE.md`.
4. Update the slot's `alt` text in `src/data/placeholders.ts`.
5. Run `npm run guide` to refresh `IMAGE_PLACEHOLDER_GUIDE.md`.

The **CNU logo** (id `cnu-logo`) should only be published with the university's permission.

## Languages: English · Bisaya · Filipino

The **EN / BIS / FIL** switch in the header (and in the mobile menu) changes every page at once. The choice is remembered in the browser.

- Translations live next to the English text, either as `<T en="…" ceb="…" fil="…" />` in the pages or as `tr(en, ceb, fil)` in data arrays (see `src/lib/i18n.tsx`).
- **Respondent quotes are never translated.** They stay verbatim, in the language they were spoken. The short "EN gist" is a paraphrase.
- The Bisaya and Filipino text is a careful draft. **Have native speakers on the team review it** before the site is presented.

## Filling in text

See `CONTENT_PLACEHOLDER_GUIDE.md`. Text boxed like `[THIS]` still needs verified information.

## Structure

```
src/app/            pages: / story culture how-its-made people vendors discover pasalubong
                    livelihood voices digital-culture explore-carcar about references guide
src/components/     Header, Footer, ImagePlaceholder, ScrollStory, Journey, Gallery (lightbox),
                    VendorDirectory, Ecosystem, StoryTabs, QuoteExplorer, Stepper, Researchers, motion helpers
src/data/           site.ts (names, nav), quotes.ts (verbatim respondent quotes), placeholders.ts,
                    vendors.ts (real Carcar sellers, each with a source), references.ts (works cited in the study)
```

## Design system

- **Colours** (in `src/app/globals.css`): paper `#f7f1e8`, ink `#241811`, primary "crisp" `#a35a17`, secondary brick `#8e3b23`, accent narra `#2e4636`, dark sections night `#1f140d`. Text pairings meet WCAG AA.
- **Type:** Fraunces for display and headings, Inter for body text.
- **Motion:** reveals on scroll, a pinned scroll story, a horizontal pasalubong journey (vertical on mobile) and subtle hero parallax. All motion respects `prefers-reduced-motion`.

## Accessibility

The site includes a skip link, semantic landmarks, visible focus rings, keyboard-operable tabs, menus and the lightbox (Esc and arrow keys), and touch targets of 44px or more.
