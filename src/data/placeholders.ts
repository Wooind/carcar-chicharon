/**
 * IMAGE PLACEHOLDER REGISTRY — single source of truth.
 *
 * To replace a placeholder with a real photograph:
 *   1. Put the photo in `public/photos/` (e.g. public/photos/home-hero.jpg)
 *   2. Set `src: "/photos/home-hero.jpg"` on the matching entry below
 *   3. Update `alt` so it describes what is actually in your photo
 *
 * The placeholder box is then replaced by your photo everywhere it is used.
 * Run `npm run guide` afterwards to refresh IMAGE_PLACEHOLDER_GUIDE.md.
 *
 * Photos are assigned to slots in src/data/photos.ts (`assignments`), with credits.
 * An explicit `src` on an entry here still wins over the assignment.
 */

import { assignments, photos, type Photo } from "./photos.ts";

export type PlaceholderEntry = {
  id: string;
  label: string; // shown on the placeholder box
  page: string;
  section: string;
  photo: string; // what photo should be inserted
  width: number;
  height: number;
  ratio: string; // e.g. "16:9"
  composition: string;
  alt: string; // alt text to use once replaced (edit to match your photo)
  src?: string; // set to "/photos/<file>" once you have the photo
  credit?: Photo; // filled automatically from photos.ts
};

const R = {
  "16:9": [1920, 1080],
  "21:9": [2100, 900],
  "3:2": [1800, 1200],
  "4:3": [1600, 1200],
  "4:5": [1200, 1500],
  "3:4": [1200, 1600],
  "1:1": [1200, 1200],
} as const;

type Ratio = keyof typeof R;

function p(
  id: string,
  label: string,
  page: string,
  section: string,
  ratio: Ratio,
  photo: string,
  composition: string,
  alt: string,
  src?: string,            // 1) new 9th parameter
): PlaceholderEntry {
  const [width, height] = R[ratio];
  return { id, label, page, section, ratio, width, height, photo, composition, alt, src }; // 2) add src
}

const researcherNames = [
  "Princess Nicole V. Barateria",
  "Rhea Jean V. Barateria",
  "Sharlyn Corbeta",
  "Erika Galarce",
  "Kathleen C. Manos",
  "Mary Crystal Ann Obiedo",
  "Ara Maurin Reces",
  "Sheila C. Soronio",
];

const entries: PlaceholderEntry[] = [
  // ───────────────────────── HOME
  p("home-hero", "Carcar Chicharon — Hero", "Home", "Hero", "4:5",
    "Authentic close-up of freshly cooked Carcar chicharon, ideally at a real Carcar stall or market table.",
    "Portrait frame beside the headline (4:5 on desktop and phones, 4:3 on tablets). Keep the chicharon centred; the bottom-left corner is covered by a small quote card, so keep it simple there.",
    "Freshly cooked Carcar chicharon piled on a market table", "/photos/carcar-chicharon-hero.jpg" ),
  p("home-why-culture", "Culture", "Home", "Why Chicharon Matters — Culture card", "4:5",
    "A cultural scene: chicharon on a home table, beside other Carcar foods, or at a heritage setting in Carcar.",
    "Vertical frame. Leave the bottom 30% fairly simple — the card title overlays it.",
    "Chicharon served on a home table in Carcar", "/photos/first.jpg"),
  p("home-why-family", "Family", "Home", "Why Chicharon Matters — Family card", "4:5",
    "A family (with consent) sharing chicharon, e.g. parents and children at the table.",
    "Focus on hands and the food if faces cannot be shown. Keep the lower third simple for the overlay text.",
    "A family sharing chicharon at home", "/photos/second.webp"),
  p("home-why-pasalubong", "Pasalubong", "Home", "Why Chicharon Matters — Pasalubong card", "4:5",
    "Bags or packs of chicharon being bought or carried as pasalubong.",
    "Show packaging and hands; avoid readable brand names unless you have permission.",
    "Packs of chicharon carried home as pasalubong", "/photos/3.jpg"),
  p("home-why-community", "Community", "Home", "Why Chicharon Matters — Community card", "4:5",
    "Friends, neighbours or co-workers sharing and talking over chicharon.",
    "Candid moment; people in the upper half, food in the middle.",
    "Friends sharing chicharon and talking", "/photos/4.jpg"),
  p("home-why-livelihood", "Livelihood", "Home", "Why Chicharon Matters — Livelihood card", "4:5",
    "A vendor or cook at work — frying, packing, or selling (with consent).",
    "Hands and process in focus; keep the lower third simple.",
    "A Carcar vendor packing chicharon for sale", "/photos/5.jpg"),
  p("home-why-tourism", "Tourism", "Home", "Why Chicharon Matters — Tourism card", "4:5",
    "Visitors buying chicharon at a Carcar shop or roadside stall.",
    "Show the shop front and the buying moment; vertical crop.",
    "Visitors buying chicharon at a Carcar shop", "/photos/6.jpg"),
  p("home-taste-1", "Chicharon close-up", "Home", "A Taste of Carcar — gallery", "4:5",
    "Macro shot showing the crisp, bubbled texture of the chicharon.",
    "Shallow depth of field; light from the side to show texture.",
    "Close-up of crisp chicharon texture", "/photos/closeup.jpg"),
  p("home-taste-2", "With suka at sili", "Home", "A Taste of Carcar — gallery", "1:1",
    "Chicharon with vinegar and chili (suka at sili) — the dipping practice mentioned by respondents.",
    "Square, top-down or 45°. Dip bowl in one corner, chicharon filling the rest.",
    "Chicharon beside a small bowl of spiced vinegar", "/photos/suka.jpg"),
  p("home-taste-3", "On the market table", "Home", "A Taste of Carcar — gallery", "3:4",
    "Chicharon displayed for sale at a Carcar palengke or shop.",
    "Vertical; show the display and depth of the stall.",
    "Chicharon on display at a Carcar market stall", "/photos/marketable.jpg"),
  p("home-taste-4", "Packed for the road", "Home", "A Taste of Carcar — gallery", "4:3",
    "Chicharon in plastic packs of different sizes, as described in the study.",
    "Arrange several pack sizes in one frame; neutral background.",
    "Chicharon packed in plastic bags of different sizes", "/photos/packed.jpg"),
  p("home-people-1", "Vendor portrait", "Home", "The People Behind the Product", "3:4",
    "Portrait of a Carcar chicharon vendor at their stall (with written consent).",
    "Eye-level, subject slightly off-centre, stall visible behind.",
    "Portrait of a Carcar chicharon vendor"),
  p("home-people-2", "Cook / producer portrait", "Home", "The People Behind the Product", "3:4",
    "Portrait of someone who cooks or prepares chicharon (with consent).",
    "Include the work environment (kawali, drying trays) if possible.",
    "Portrait of a chicharon cook at work"),
  p("home-people-3", "Bus / terminal vendor portrait", "Home", "The People Behind the Product", "3:4",
    "Portrait of a vendor who sells at terminals or on buses (with consent).",
    "Show the basket or tray they carry.",
    "Portrait of a chicharon vendor at a bus terminal"),
  p("home-discover-carcar", "Carcar streetscape", "Home", "Discover Carcar", "21:9",
    "A wide view of Carcar — a street, heritage building or the market area.",
    "Wide panoramic; keep the left half calmer for the overlaid text.",
    "Wide view of a street in Carcar, Cebu"),
  ...researcherNames.map((name, i) =>
    p(`researcher-${i + 1}`, `Researcher photo — ${name}`, "Home", "Meet the Researchers", "1:1",
      `Formal or semi-formal portrait of ${name}.`,
      "Square, head-and-shoulders, plain light background, same lighting/background for all eight researchers so the grid looks consistent.",
      `Portrait of ${name}, researcher`),
  ),
  p("researcher-adviser", "Thesis adviser photo", "Home", "Meet the Researchers — Adviser", "1:1",
    "Portrait of the thesis adviser, Trina Marie A. Catipay, DA (only with her permission).",
    "Square head-and-shoulders matching the researcher portraits.",
    "Portrait of the thesis adviser, Trina Marie A. Catipay"),

  p("cnu-logo", "CNU logo", "All pages", "Footer + Meet the Researchers (circular logo)", "1:1",
    "Official Cebu Normal University seal/logo (PNG with transparent background, used with the university's permission).",
    "Square file; the site crops it into a circle, so keep the seal centred with even padding on all sides. Minimum 600×600.",
    "Cebu Normal University logo"),

  p("carcar-seal", "Official seal of the City of Carcar", "Explore Carcar + Footer", "Logos", "1:1",
    "Official seal of the City of Carcar.",
    "Square, transparent or white background; shown in a circle.",
    "Official seal of the City of Carcar, Cebu"),
  p("carcar-locator", "Map — where Carcar is", "Explore Carcar", "Where is Carcar", "4:5",
    "Locator map of Cebu Province with Carcar highlighted.",
    "Keep the whole island visible.",
    "Map of Cebu Province with Carcar highlighted"),

  // ───────────────────────── STORY
  p("story-hero", "The Story — opening image", "The Story", "Hero", "21:9",
    "Atmospheric wide image of Carcar or a chicharon stall.",
    "Panoramic; important content in the centre third so mobile crops still work.",
    "A chicharon stall in Carcar"),
  p("story-carcar", "Carcar, Heritage City of the South", "The Story", "Chapter 1 — Carcar", "3:2",
    "A recognisable Carcar heritage scene.",
    "Horizontal; leading lines toward the subject.",
    "Heritage scene in Carcar, Cebu"),
  p("story-family", "Learned at home", "The Story", "Chapter 3 — Family", "4:5",
    "A child or young person being given chicharon by a parent/grandparent (with consent).",
    "Vertical; hands passing the food is enough if faces can't be shown.",
    "A parent giving chicharon to a child"),
  p("story-road", "On the road south", "The Story", "Chapter 4 — The road", "3:2",
    "A bus or the highway passing through Carcar, ideally with roadside stalls.",
    "Horizontal; show motion or the line of stalls.",
    "Bus passing roadside chicharon stalls in Carcar"),
  p("story-table", "At the table", "The Story", "Chapter 6 — Everyday life", "3:2",
    "Chicharon served with rice and vinegar at a family meal.",
    "Top-down or 45°; warm natural light.",
    "Chicharon served with rice and vinegar at a family meal"),

  // ───────────────────────── CULTURE
  p("culture-hero", "Culture & Identity — opening", "Culture & Identity", "Hero", "16:9",
    "Chicharon among people — a market crowd, a family table, or friends sharing.",
    "Keep the left side calmer for text.",
    "People sharing chicharon in Carcar"),
  p("culture-family", "Family", "Culture & Identity", "Theme — Family as first introduction", "4:3",
    "Family moment with chicharon (with consent).",
    "Warm, candid.",
    "Family members sharing chicharon"),
  p("culture-friends", "Friends & acquaintances", "Culture & Identity", "Theme — Friends and acquaintances", "4:3",
    "Friends or co-workers sharing a pack of chicharon.",
    "Candid group moment.",
    "Co-workers sharing a pack of chicharon"),
  p("culture-social", "Social media", "Culture & Identity", "Theme — Social media", "4:3",
    "A phone showing a social-media post about Carcar chicharon (use your own post or one you have permission to show).",
    "Phone in hand, screen readable; blur names of other people.",
    "A phone showing a social-media post about Carcar chicharon"),
  p("culture-road", "Roadside & bus vendors", "Culture & Identity", "Theme — Travelling vendors", "4:3",
    "A vendor offering chicharon on a bus or at a terminal (with consent).",
    "Show the vendor and the passengers' side.",
    "A vendor offering chicharon to bus passengers"),
  p("culture-identity", "Local identity", "Culture & Identity", "Local identity", "3:2",
    "A Carcar landmark with chicharon in the foreground, or signage that says Carcar.",
    "Product foreground, place background.",
    "Chicharon with a Carcar landmark in the background"),
  p("culture-language", "Language at the stall", "Culture & Identity", "Language & everyday culture", "3:2",
    "A conversation between vendor and buyer at a stall.",
    "Two people in frame, mid-conversation.",
    "A vendor and buyer talking at a chicharon stall"),

  // ───────────────────────── HOW IT'S MADE
  p("made-hero", "From production to table — opening", "How It's Made", "Hero", "16:9",
    "Chicharon being cooked in a large kawali.",
    "Steam/oil movement adds life; keep left side calmer.",
    "Chicharon being cooked in a large pan"),
  p("made-step-1", "Step 1 — Cleaning & boiling", "How It's Made", "Production step 1", "4:3",
    "Pork skin being cleaned, trimmed or boiled (paglalaga at pagtatabas).",
    "Process in focus; hands visible.",
    "Pork skin being cleaned and boiled"),
  p("made-step-2", "Step 2 — Sun-drying", "How It's Made", "Production step 2", "4:3",
    "Pork skin laid out to dry under the sun (pagpapatuyo sa araw).",
    "Show the trays/bilao and sunlight.",
    "Pork skin drying under the sun"),
  p("made-step-3", "Step 3 — Seasoning", "How It's Made", "Production step 3", "4:3",
    "Seasoning (asin, bawang) being applied — no need to reveal any family recipe.",
    "Ingredients and hands; do not show anything the producer considers a secret.",
    "Seasoning being applied to pork skin"),
  p("made-step-4", "Step 4 — First frying", "How It's Made", "Production step 4", "4:3",
    "Pork skin in oil during the first, slower frying.",
    "Close on the pan; safe distance shot.",
    "Pork skin during the first frying"),
  p("made-step-5", "Step 5 — Second frying / crisping", "How It's Made", "Production step 5", "4:3",
    "Chicharon puffing up and turning golden in hot oil.",
    "Capture the puffing moment if possible.",
    "Chicharon puffing up in hot oil"),
  p("made-selling", "Selling", "How It's Made", "Selling", "3:2",
    "A stall or shop selling chicharon in packs.",
    "Show displayed packs and the vendor.",
    "A stall selling packs of chicharon"),
  p("made-eating", "Eating & sharing", "How It's Made", "Consumption", "3:2",
    "People eating chicharon as meryenda or with rice.",
    "Warm, candid.",
    "People eating chicharon as a snack"),

  // ───────────────────────── PEOPLE
  p("people-hero", "The people behind the chicharon", "People", "Hero", "21:9",
    "A wide shot of a working stall or kitchen with people (with consent).",
    "Wide; people in the centre third.",
    "People working at a chicharon stall"),
  ...[1, 2, 3, 4, 5, 6].map((n) =>
    p(`people-profile-${n}`, `Profile portrait ${n}`, "People", `Profile ${n}`, "3:4",
      "Portrait of a vendor, producer, family member or community member who agreed to be featured.",
      "Vertical portrait, subject in their work environment. Get written consent before publishing.",
      `Portrait of a featured community member (profile ${n})`),
  ),

  // ───────────────────────── VENDORS
  ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) =>
    p(`vendor-${String(n).padStart(2, "0")}`, `Vendor ${n} — shop photo`, "Where to Find", `Vendor directory card ${n}`, "4:3",
      "Storefront or stall photo of a real vendor who agreed to be listed.",
      "Horizontal; shop sign or stall clearly visible.",
      `Storefront of vendor ${n}`),
  ),

  // ───────────────────────── DISCOVER
  p("discover-hero", "Discover — opening", "Discover", "Hero", "16:9",
    "An overhead spread of different chicharon types and pack sizes.",
    "Flat-lay; even spacing; leave the left calmer for text.",
    "An overhead spread of different chicharon types"),
  ...[1, 2, 3, 4, 5, 6].map((n) =>
    p(`discover-product-${n}`, `Product photo ${n}`, "Discover", `Product card ${n}`, "1:1",
      "Clean product photo of the chicharon type named on the card.",
      "Square; product centred on a neutral, consistent background across all cards.",
      `Product photo ${n}`),
  ),

  // ───────────────────────── PASALUBONG
  p("pasalubong-hero", "Pasalubong — opening", "Pasalubong", "Hero", "16:9",
    "Someone carrying bags of chicharon home.",
    "Keep the left side calm for text.",
    "A traveller carrying bags of chicharon"),
  p("pasalubong-1", "Carcar", "Pasalubong", "Journey — Carcar", "4:5",
    "A Carcar street or shop front.",
    "Vertical.",
    "A Carcar shop front"),
  p("pasalubong-2", "Buy", "Pasalubong", "Journey — Buy", "4:5",
    "The moment of buying: vendor handing over a pack.",
    "Vertical; hands and pack in focus.",
    "A vendor handing a pack of chicharon to a buyer"),
  p("pasalubong-3", "Travel", "Pasalubong", "Journey — Travel", "4:5",
    "Chicharon on a bus seat or in a bag during travel.",
    "Vertical.",
    "Chicharon carried during a bus trip"),
  p("pasalubong-4", "Arrive home", "Pasalubong", "Journey — Arrive home", "4:5",
    "Arriving home with pasalubong; door or welcome moment.",
    "Vertical.",
    "Arriving home with pasalubong"),
  p("pasalubong-5", "Share", "Pasalubong", "Journey — Share", "4:5",
    "Family opening and sharing the chicharon.",
    "Vertical; many hands reaching in works well.",
    "Family sharing chicharon brought home"),
  p("pasalubong-6", "Remember Carcar", "Pasalubong", "Journey — Remember", "4:5",
    "A quiet still life: empty pack, a Carcar keepsake, or a family photo moment.",
    "Vertical; reflective mood.",
    "A keepsake moment after sharing pasalubong"),

  // ───────────────────────── LIVELIHOOD
  p("livelihood-hero", "Livelihood — opening", "Livelihood", "Hero", "16:9",
    "A busy row of chicharon shops in Carcar.",
    "Wide; show multiple stalls.",
    "A row of chicharon shops in Carcar"),
  p("livelihood-1", "Supply — pork skin", "Livelihood", "Ecosystem story card — Supply", "4:3",
    "Raw pork skin at the market from local suppliers.",
    "Horizontal; hygienic, clean presentation.",
    "Raw pork skin at the market"),
  p("livelihood-2", "Work — cooking", "Livelihood", "Ecosystem story card — Work", "4:3",
    "Workers cleaning, drying or cooking.",
    "Horizontal; people at work.",
    "Workers preparing chicharon"),
  p("livelihood-3", "Trade — selling", "Livelihood", "Ecosystem story card — Trade", "4:3",
    "Selling at a shop, palengke, terminal or bus.",
    "Horizontal; buyer–seller exchange.",
    "A chicharon sale at a Carcar shop"),

  // ───────────────────────── DIGITAL CULTURE
  p("digital-hero", "Digital culture — opening", "Digital Culture", "Hero", "16:9",
    "A person photographing chicharon with a phone at a Carcar stall.",
    "Phone and product both visible.",
    "A person photographing chicharon with a phone"),
  p("digital-post", "Social post example", "Digital Culture", "From word-of-mouth to posts", "4:5",
    "A screenshot or photo of a real social-media post about Carcar chicharon (with permission).",
    "Crop to the post; blur other people's names and faces.",
    "Packs of Carcar chicharon, the kind sellers photograph and post online"),

  // ───────────────────────── EXPLORE CARCAR
  p("explore-hero", "Explore Carcar — opening", "Explore Carcar", "Hero", "21:9",
    "A wide, inviting view of Carcar.",
    "Panoramic; centre-weighted for mobile.",
    "Wide view of Carcar City"),
  p("explore-market", "Carcar public market", "Explore Carcar", "The palengke", "3:2",
    "The Carcar public market (palengke), mentioned by respondents as a place to buy fresh chicharon.",
    "Horizontal; activity and stalls.",
    "The Carcar public market"),
  p("explore-foods", "Other Carcar foods", "Explore Carcar", "More to taste", "3:2",
    "Other foods respondents named: ampao, hopia, bukarolyo, banana chips, dried mango, lechon.",
    "Flat-lay of several items together.",
    "Assorted Carcar pasalubong foods"),
  ...[1, 2, 3, 4].map((n) =>
    p(`explore-place-${n}`, `Verified place ${n}`, "Explore Carcar", `Place card ${n}`, "4:5",
      "Photo of a real, verified Carcar place you choose to feature.",
      "Vertical; the place should be recognisable.",
      `Verified Carcar place ${n}`),
  ),

  // ───────────────────────── ABOUT
  p("about-fieldwork", "Fieldwork documentation", "About the Study", "Fieldwork", "3:2",
    "A documentation photo from the study's interviews in Carcar (Appendix E — Dokumentasyon).",
    "Use only photos where respondents consented to being photographed; blur faces otherwise.",
    "Carcar City New Public Market, one of the places where respondents buy chicharon"),
];

for (const e of entries) {
  const key = assignments[e.id];
  if (key) {
    e.credit = photos[key];
    e.src = photos[key].src; // curated, credited photo always wins over an older hand-set src
  }
}

export const placeholders: Record<string, PlaceholderEntry> = Object.fromEntries(
  entries.map((e) => [e.id, e]),
);

export const placeholderList = entries;

export function getPlaceholder(id: string): PlaceholderEntry {
  const entry = placeholders[id];
  if (!entry) throw new Error(`Unknown image placeholder id: ${id}`);
  return entry;
}
