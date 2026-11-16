/**
 * PHOTO LIBRARY + CREDITS (dependency-free; also read by scripts/generate-image-guide.mts)
 *
 * Commons photos are openly licensed (CC0 / CC BY / CC BY-SA / public domain) and
 * MUST keep their credit line. "Researchers" photos were supplied by the team in
 * public/photos/ — confirm you have the right to publish each one.
 * No AI-generated images are used.
 */
export type Photo = {
  src: string;
  where: string; // where the photo was taken, as stated by its source
  author: string;
  license: string;
  url?: string; // source page
};

const C = (file: string, where: string, author: string, license: string, commonsFile: string): Photo => ({
  src: `/photos/site/${file}`,
  where,
  author,
  license,
  url: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(commonsFile.replace(/ /g, "_"))}`,
});
const U = (file: string, where: string): Photo => ({
  src: `/photos/site/${file}`,
  where,
  author: "Supplied by the researchers",
  license: "Source to be confirmed by the researchers",
});

export const photos = {
  // ── Wikimedia Commons (Carcar)
  "carcar-chicharon": C("carcar-chicharon.webp", "Carcar, Cebu", "LadyPinayForever", "CC0", "CarCar Chicharon.jpg"),
  "chicharon-sa-carcar": C("chicharon-sa-carcar.webp", "Carcar, Cebu", "Bim24", "CC BY 4.0", "Chicharon sa Carcar.jpg"),
  "chicharon-sa-carcar-2": C("chicharon-sa-carcar-2.webp", "Carcar, Cebu", "Bim24", "CC BY 4.0", "Chicharon sa Carcar 1.jpg"),
  "chicharon-vendor": C("chicharon-vendor.webp", "Carcar, Cebu", "Bim24", "CC BY 4.0", "Chicharon Vendor.jpg"),
  "ampao-carcar": C("ampao-carcar.webp", "Carcar, Cebu", "Obsidian Soul", "CC0", "Ampao from Carcar, Cebu.jpg"),
  "carcar-public-market": C("carcar-public-market.webp", "Carcar City New Public Market", "QueenCityCebu", "CC BY-SA 4.0", "Carcar City New Public Market.jpg"),
  "carcar-public-market-old": C("carcar-public-market-old.webp", "Carcar City Public Market", "Constantine Agustin", "CC BY-SA 2.0", "Carcar City Cebu Public Market - Flickr.jpg"),
  "carcar-lechon": C("carcar-lechon.webp", "Carcar, Cebu", "Ronald Tagra", "CC BY 2.0", "Carcar City lechóns - Flickr.jpg"),
  "carcar-rotunda-portrait": C("carcar-rotunda-portrait.webp", "Carcar Rotunda", "A.C.T. Alejandre", "CC BY-SA 4.0", "Carcar Rotunda, Aug 2026.jpg"),
  "carcar-church": C("carcar-church.webp", "St. Catherine of Alexandria Church, Carcar", "Patrickroque01", "CC BY-SA 4.0", "Saint Catherine of Alexandria Church Carcar (Santa Catalina, Carcar, Cebu; 01-18-2024).jpg"),
  "carcar-museum": C("carcar-museum.webp", "Carcar City Museum", "Patrickroque01", "CC BY-SA 4.0", "Carcar City Museum (Santa Catalina, Carcar, Cebu; 01-18-2024).jpg"),
  "silva-house": C("silva-house.webp", "Silva House, Carcar", "Ara Mae Nacario", "CC BY-SA 3.0", "Silva House.jpg"),
  "sato-house": C("sato-house.webp", "Sato Ancestral House, Carcar", "A.C.T. Alejandre", "CC BY-SA 4.0", "Sato Ancestral House, Carcar, Cebu, Aug 2026.jpg"),
  "carcar-plaza": C("carcar-plaza.webp", "Carcar City Plaza", "Joannerfabregas", "CC BY-SA 4.0", "Carcar City Plaza.jpg"),
  "carcar-town-plaza": C("carcar-town-plaza.webp", "Carcar town plaza, Santa Catalina", "Patrickroque01", "CC BY-SA 4.0", "Carcar town plaza (Santa Catalina, Carcar, Cebu; 01-18-2023).jpg"),
  "carcar-street": C("carcar-street.webp", "Cebu South Road, Carcar city proper", "Patrickroque01", "CC BY-SA 4.0", "Carcar City proper, Cebu South Road-Santa Catalina (Carcar, Cebu; 01-18-2024).jpg"),
  "carcar-street-2": C("carcar-street-2.webp", "Cebu South Road, Carcar city proper", "Patrickroque01", "CC BY-SA 4.0", "Carcar city proper, Cebu South Road-Santa Catalina (Carcar, Cebu; 09-07-2022).jpg"),
  "carcar-aerial": C("carcar-aerial.webp", "Carcar, Cebu", "dbgg1979", "CC BY 2.0", "Carcar Cebu.jpg"),
  "carcar-seal": C("carcar-seal.png", "Official seal of the City of Carcar", "City of Carcar, Cebu", "Public domain", "Carcar seal.jpg"),
  "carcar-locator": C("carcar-locator.png", "Map of Cebu showing Carcar", "Mike Gonzalez (TheCoffee)", "CC BY-SA 3.0", "Ph locator cebu carcar.png"),
  // ── Wikimedia Commons (Philippines, not Carcar — labelled as such)
  "chicharon-laman": C("chicharon-laman.webp", "Philippines (not Carcar)", "Shubert Ciencia", "CC BY 2.0", "Chicharon Baboy (S. Ciencia) - Flickr.jpg"),
  "chicharon-baskets": C("chicharon-baskets.webp", "Philippines (not Carcar)", "PaulGorduiz106", "CC BY-SA 4.0", "Chicharon (12-08-2022).jpg"),
  "chicharon-pack-hand": C("chicharon-pack-hand.webp", "SM City Cebu (not Carcar)", "Wide Awake!", "CC BY 4.0", "Pack of chicharons at SM City Cebu (2024-06-17).jpg"),
  "sun-drying": C("sun-drying.webp", "Camarines Sur (not Carcar)", "Irvin Parco Sto. Tomas", "CC BY-SA 4.0", "Chicharon being sun-dried in Camarines Sur.jpg"),
  "skins-drying": C("skins-drying.webp", "Camarines Sur (not Carcar)", "Irvin Parco Sto. Tomas", "CC BY-SA 4.0", "Chicharon left to dry in Camarines Sur.jpg"),
  "man-drying": C("man-drying.webp", "Camarines Sur (not Carcar)", "Irvin Parco Sto. Tomas", "CC BY-SA 4.0", "A man dries chicharon in Camarines Sur.jpg"),
  // ── Supplied by the researchers (public/photos)
  "u-stall": U("u-stall.webp", "Pasalubong stall"),
  "u-buyers": U("u-buyers.webp", "Buyers at a pasalubong stall"),
  "u-plaza": U("u-plaza.webp", "Carcar plaza"),
  "u-rotunda-aerial": U("u-rotunda-aerial.webp", "Carcar Rotunda"),
  "u-plate": U("u-plate.webp", "Chicharon"),
  "u-closeup": U("u-closeup.webp", "Chicharon close-up"),
  "u-banana-leaf": U("u-banana-leaf.webp", "Chicharon on banana leaf"),
  "u-suka": U("u-suka.webp", "Chicharon dipped in spiced vinegar"),
  "u-packs": U("u-packs.webp", "Packed chicharon"),
  "cnu-logo": { src: "/photos/site/cnu-logo.png", where: "Cebu Normal University", author: "Cebu Normal University", license: "Official logo — used with the university's permission" },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Which photo fills which placeholder slot. Slots not listed stay as placeholders. */
export const assignments: Record<string, PhotoKey> = {
  "home-hero": "carcar-chicharon",
  "home-why-culture": "carcar-church",
  "home-why-family": "u-suka",
  "home-why-pasalubong": "chicharon-sa-carcar",
  "home-why-community": "u-buyers",
  "home-why-livelihood": "chicharon-vendor",
  "home-why-tourism": "carcar-rotunda-portrait",
  "home-taste-1": "chicharon-laman",
  "home-taste-2": "u-suka",
  "home-taste-3": "chicharon-baskets",
  "home-taste-4": "chicharon-sa-carcar-2",
  "home-people-1": "chicharon-vendor",
  "home-people-2": "man-drying",
  "home-people-3": "carcar-lechon",
  "home-discover-carcar": "carcar-town-plaza",
  "cnu-logo": "cnu-logo",
  "story-hero": "carcar-street",
  "story-carcar": "carcar-church",
  "story-family": "u-banana-leaf",
  "story-road": "carcar-street-2",
  "story-table": "u-plate",
  "culture-hero": "u-buyers",
  "culture-family": "u-suka",
  "culture-friends": "chicharon-vendor",
  "culture-social": "chicharon-pack-hand",
  "culture-road": "carcar-street-2",
  "culture-identity": "carcar-plaza",
  "culture-language": "chicharon-sa-carcar",
  "made-hero": "sun-drying",
  "made-step-1": "skins-drying",
  "made-step-2": "sun-drying",
  "made-step-3": "man-drying",
  "made-step-4": "u-closeup",
  "made-step-5": "u-plate",
  "made-selling": "chicharon-sa-carcar",
  "made-eating": "u-suka",
  "people-hero": "chicharon-vendor",
  "discover-hero": "chicharon-laman",
  "discover-product-1": "u-closeup",
  "discover-product-2": "chicharon-laman",
  "discover-product-4": "chicharon-sa-carcar-2",
  "discover-product-5": "chicharon-baskets",
  "pasalubong-hero": "chicharon-sa-carcar",
  "pasalubong-1": "carcar-rotunda-portrait",
  "pasalubong-2": "u-buyers",
  "pasalubong-3": "carcar-street",
  "pasalubong-4": "chicharon-pack-hand",
  "pasalubong-5": "u-suka",
  "pasalubong-6": "ampao-carcar",
  "livelihood-hero": "carcar-public-market",
  "livelihood-1": "carcar-public-market-old",
  "livelihood-2": "man-drying",
  "livelihood-3": "chicharon-vendor",
  "digital-hero": "chicharon-pack-hand",
  "digital-post": "u-packs",
  "about-fieldwork": "carcar-public-market",
  "explore-hero": "carcar-aerial",
  "explore-market": "carcar-public-market",
  "explore-foods": "ampao-carcar",
  "explore-place-1": "carcar-church",
  "explore-place-2": "carcar-museum",
  "explore-place-3": "silva-house",
  "explore-place-4": "sato-house",
  "carcar-seal": "carcar-seal",
  "carcar-locator": "carcar-locator",
};
