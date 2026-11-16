import { tr } from "@/lib/i18n";

export const site = {
  name: "Carcar Chicharon",
  tagline: "More than a crunch. A taste of Carcar.",
  description:
    "A digital cultural platform for Carcar Chicharon — its place in Carcar's identity, family traditions, pasalubong culture, livelihood, tourism and digital life. The proposed digital output of the study “Wika at Kultura ng Chicharon: Sosyo-Kultural na Perspektiba ng mga Mamamayan.”",
  studyTitle:
    "Wika at Kultura ng Chicharon: Sosyo-Kultural na Perspektiba ng mga Mamamayan",
  institution:
    "Departamento ng Filipino · Kolehiyo ng Kultura, Sining, at Isports · Cebu Normal University, Cebu City",
  degree: "Batsilyer ng Sining sa Filipino (BSF)",
};

export const nav = [
  { href: "/", label: tr("Home", "Sugod", "Tahanan") },
  { href: "/story", label: tr("Story", "Istorya", "Kuwento") },
  { href: "/culture", label: tr("Culture", "Kultura", "Kultura") },
  { href: "/how-its-made", label: tr("How It's Made", "Unsaon Paghimo", "Paano Ginagawa") },
  { href: "/people", label: tr("People", "Katawhan", "Mga Tao") },
  { href: "/vendors", label: tr("Vendors", "Mga Tindera", "Mga Nagtitinda") },
  { href: "/discover", label: tr("Discover", "Diskobrehi", "Tuklasin") },
  { href: "/pasalubong", label: tr("Pasalubong", "Pasalubong", "Pasalubong") },
  { href: "/livelihood", label: tr("Livelihood", "Panginabuhian", "Kabuhayan") },
  { href: "/voices", label: tr("Voices", "Mga Tingog", "Mga Tinig") },
  { href: "/digital-culture", label: tr("Digital Culture", "Digital nga Kultura", "Kulturang Digital") },
  { href: "/explore-carcar", label: tr("Explore Carcar", "Libota ang Carcar", "Libutin ang Carcar") },
  { href: "/about", label: tr("About", "Bahin sa Pagtuon", "Tungkol sa Pag-aaral") },
];

export const extraNav = [
  { href: "/references", label: tr("Sources", "Mga Tinubdan", "Mga Sanggunian") },
];

/** Desktop header shows the primary set; the rest live under "More". */
export const primaryNav = ["/story", "/culture", "/how-its-made", "/people", "/pasalubong", "/vendors"];

export const researchers = [
  "Princess Nicole V. Barateria",
  "Rhea Jean V. Barateria",
  "Sharlyn Corbeta",
  "Erika Galarce",
  "Kathleen C. Manos",
  "Mary Crystal Ann Obiedo",
  "Ara Maurin Reces",
  "Sheila C. Soronio",
];

export const adviser = { name: "Trina Marie A. Catipay, DA", role: "Thesis Adviser" };

export const panel = [
  { name: "Elsie T. Alvarado, DA, PhD", role: "Chairman" },
  { name: "Rowena C. Largo, EdD", role: "Data Analyst" },
  { name: "Lita A. Bacalla, DA, PhD", role: "External Expert / Member" },
];
