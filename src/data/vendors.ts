import { tr, type Tri } from "@/lib/i18n";

/**
 * VENDOR DIRECTORY — real Carcar chicharon sellers that post online.
 *
 * Every field comes from a public source (the vendor's own Facebook page listing,
 * or a published article/listing named in `source`). Nothing was invented:
 * fields that no source gives (hours, prices, exact street numbers) are left out.
 * Details were gathered in November 2026 — re-check them periodically, and
 * remove a listing if the vendor asks.
 */

export const channels = ["Store + online orders", "Online / Facebook"] as const;
export type Channel = (typeof channels)[number];

export type Vendor = {
  id: string;
  name: string;
  channel: Channel;
  /** Barangay or road, as given by the source. */
  area: string;
  /** Where the physical store is, as described by the source (null if not published). */
  address: Tri | null;
  note: Tri;
  phone?: string;
  facebook: string;
  website?: string;
  source: { label: string; url: string };
};

const PF = { label: "Proudly Filipino — Top 10 Best Chicharon in Carcar (2021, upd. 2022)", url: "https://proudlyfilipino.com/22816/top-10-best-chicharon-in-carcar-city/" };
const FB = (url: string) => ({ label: "Vendor's public Facebook page", url });

export const vendors: Vendor[] = [
  {
    id: "luis",
    name: "Luis Chicharon",
    channel: "Store + online orders",
    area: "J. Rizal St.",
    address: tr("J. Rizal Street, Carcar City, Cebu", "J. Rizal Street, Dakbayan sa Carcar, Sugbo", "J. Rizal Street, Lungsod ng Carcar, Cebu"),
    note: tr(
      "Ranked first in Proudly Filipino's list of Carcar chicharon; a long-established Carcar brand with its own production.",
      "Nanguna sa lista sa Proudly Filipino sa chicharon sa Carcar; dugay nang nailhang brand sa Carcar nga adunay kaugalingong produksiyon.",
      "Nangunguna sa listahan ng Proudly Filipino ng chicharon sa Carcar; matagal nang kilalang brand sa Carcar na may sariling produksiyon.",
    ),
    phone: "+63 917 752 5227",
    facebook: "https://www.facebook.com/luischicharon1/",
    source: PF,
  },
  {
    id: "juans",
    name: "Juan's Special Chicharon",
    channel: "Store + online orders",
    area: "Ocaña",
    address: tr(
      "Ocaña, Carcar — between San Isidro Labrador Chapel and the PhilHealth Regional Office VII, on the national highway",
      "Ocaña, Carcar — tunga-tunga sa San Isidro Labrador Chapel ug PhilHealth Regional Office VII, sa nasyonal nga haywey",
      "Ocaña, Carcar — sa pagitan ng San Isidro Labrador Chapel at PhilHealth Regional Office VII, sa pambansang highway",
    ),
    note: tr(
      "Described as an original maker of hot-and-spicy chicharon; has a small restaurant beside the store where you can eat and buy delicacies.",
      "Gihulagway nga orihinal nga naghimo sa hot-and-spicy nga chicharon; adunay gamay nga restawran tupad sa tindahan diin makakaon ug makapalit og delicacies.",
      "Inilarawan bilang orihinal na gumagawa ng hot-and-spicy na chicharon; may maliit na restawran sa tabi ng tindahan kung saan maaaring kumain at bumili ng delicacies.",
    ),
    facebook: "https://www.facebook.com/Juans-Special-Chicharon-145633566012268/",
    source: { label: "Queen City Cebu; Proudly Filipino", url: "https://queencitycebu.com/?p=2403" },
  },
  {
    id: "arvin",
    name: "Arvin Crispy Chicharon",
    channel: "Store + online orders",
    area: "Guadalupe",
    address: tr("Campo Guadalupe, along the Carcar–Barili Road, Carcar City", "Campo Guadalupe, daplin sa Carcar–Barili Road, Dakbayan sa Carcar", "Campo Guadalupe, sa tabi ng Carcar–Barili Road, Lungsod ng Carcar"),
    note: tr(
      "Crispy chicharon served with spicy vinegar. Takes online orders through Facebook; free delivery within Carcar was reported.",
      "Malutong nga chicharon nga may halang nga suka. Modawat og online nga order pinaagi sa Facebook; gitaho nga libre ang delivery sulod sa Carcar.",
      "Malutong na chicharon na may maanghang na suka. Tumatanggap ng online na order sa Facebook; iniulat na libre ang delivery sa loob ng Carcar.",
    ),
    facebook: "https://www.facebook.com/Arvincharon/",
    source: PF,
  },
  {
    id: "jason-ruby",
    name: "Jason Ruby Special Chicharon",
    channel: "Store + online orders",
    area: "Perrelos",
    address: tr("Katugasan, Barangay Perrelos, Carcar City", "Katugasan, Barangay Perrelos, Dakbayan sa Carcar", "Katugasan, Barangay Perrelos, Lungsod ng Carcar"),
    note: tr(
      "Named among Carcar's chicharon producers in the CSIRO/ACIAR chicharon value-chain study.",
      "Gihisgutan isip usa sa mga naghimo og chicharon sa Carcar sa CSIRO/ACIAR nga pagtuon sa value chain sa chicharon.",
      "Binanggit bilang isa sa mga gumagawa ng chicharon sa Carcar sa pag-aaral ng CSIRO/ACIAR sa value chain ng chicharon.",
    ),
    phone: "+63 915 961 5489",
    facebook: "https://www.facebook.com/yburuser/",
    source: { label: "CSIRO — Chicharon Value Chain module", url: "https://research.csiro.au/inclusivechains/wp-content/uploads/sites/330/2019/12/AMC-Module-1-Chicharon-Value-Chain.pdf" },
  },
  {
    id: "angels",
    name: "Angel's Pork Chicharon, Ampao & Delicacies",
    channel: "Store + online orders",
    area: "Valladolid",
    address: tr("Valladolid, Carcar City, Cebu", "Valladolid, Dakbayan sa Carcar, Sugbo", "Valladolid, Lungsod ng Carcar, Cebu"),
    note: tr("Pork chicharon, ampao and other Carcar delicacies.", "Chicharon sa baboy, ampao ug ubang delicacies sa Carcar.", "Chicharon ng baboy, ampao at iba pang delicacies ng Carcar."),
    phone: "+63 975 317 3450",
    facebook: "https://www.facebook.com/p/Angels-PORK-Chicharon-Ampao-Delicacies-Carcar-City-Cebu-61556285738867/",
    source: FB("https://www.facebook.com/p/Angels-PORK-Chicharon-Ampao-Delicacies-Carcar-City-Cebu-61556285738867/"),
  },
  {
    id: "carcar-city-delicacies",
    name: "CarCar City Chicharon and Delicacies",
    channel: "Store + online orders",
    area: "Valladolid",
    address: tr("Valladolid, Carcar City, Cebu", "Valladolid, Dakbayan sa Carcar, Sugbo", "Valladolid, Lungsod ng Carcar, Cebu"),
    note: tr("Chicharon and Carcar delicacies; lists itself as a distributor.", "Chicharon ug delicacies sa Carcar; nagpaila isip distributor.", "Chicharon at delicacies ng Carcar; nagpapakilala bilang distributor."),
    phone: "+63 922 929 7323",
    facebook: "https://www.facebook.com/CarCarCityChicharonDelicacies/",
    source: FB("https://www.facebook.com/CarCarCityChicharonDelicacies/"),
  },
  {
    id: "carmen-otic",
    name: "Carmen Otic Crispy Chicharon",
    channel: "Online / Facebook",
    area: "Carcar City",
    address: null,
    note: tr(
      "Moved to online selling during the pandemic and takes orders through its Facebook page.",
      "Mibalhin sa online nga pagbaligya panahon sa pandemya ug modawat og order pinaagi sa Facebook page niini.",
      "Lumipat sa online na pagbebenta noong pandemya at tumatanggap ng order sa Facebook page nito.",
    ),
    facebook: "https://www.facebook.com/Carmen-Otic-Crispy-Chicharon-217322584990059/",
    source: PF,
  },
  {
    id: "yoyen",
    name: "Yoyen Special Chicharon",
    channel: "Online / Facebook",
    area: "Carcar City",
    address: null,
    note: tr(
      "Reported to use fresh pork belly fat, follow City Health Office standards and keep only about a week's supply for freshness.",
      "Gitaho nga mogamit og presko nga tambok sa tiyan sa baboy, mosunod sa sumbanan sa City Health Office ug motipig og mga usa ka semana nga suplay aron presko.",
      "Iniulat na gumagamit ng sariwang taba ng liempo, sumusunod sa pamantayan ng City Health Office at nag-iimbak lamang ng halos isang linggong suplay para sa pagkasariwa.",
    ),
    facebook: "https://www.facebook.com/Yoyens-Special-Chicharon-106329721171408/",
    source: PF,
  },
  {
    id: "earl-john",
    name: "Earl John Special Chicharon",
    channel: "Online / Facebook",
    area: "Carcar City",
    address: null,
    note: tr("Sold by the kilo, in spicy or special flavours, alongside other delicacies.", "Gibaligya matag kilo, halang o special nga lami, uban sa ubang delicacies.", "Ibinebenta bawat kilo, maanghang o special na lasa, kasama ng iba pang delicacies."),
    facebook: "https://www.facebook.com/EarlJohn-Special-Chicharon-585924221770456/",
    source: PF,
  },
  {
    id: "stephanies",
    name: "Stephanie's Special Crispy Chicharon",
    channel: "Online / Facebook",
    area: "Carcar City",
    address: null,
    note: tr("Crispy Carcar chicharon; orders through the Facebook page.", "Malutong nga chicharon sa Carcar; order pinaagi sa Facebook page.", "Malutong na chicharon ng Carcar; mag-order sa Facebook page."),
    phone: "+63 906 045 8736",
    facebook: "https://www.facebook.com/StpehaniesSpecialChicharon/",
    source: FB("https://www.facebook.com/StpehaniesSpecialChicharon/"),
  },
  {
    id: "carcar-crispy",
    name: "Carcar Cebu Crispy Chicharon",
    channel: "Online / Facebook",
    area: "Carcar City",
    address: null,
    note: tr(
      "Sells original Carcar crispy chicharon online; its posts say it also ships to the USA.",
      "Nagbaligya og orihinal nga crispy chicharon sa Carcar online; matod sa ilang mga post, mopadala usab sa USA.",
      "Nagbebenta ng orihinal na crispy chicharon ng Carcar online; ayon sa kanilang mga post, nagpapadala rin sa USA.",
    ),
    phone: "+63 968 695 5214",
    facebook: "https://www.facebook.com/CarcarCrispyChicharon/",
    website: "https://crispycharon.com/contact/",
    source: FB("https://www.facebook.com/CarcarCrispyChicharon/"),
  },
];

export const areas = Array.from(new Set(vendors.map((v) => v.area)));
