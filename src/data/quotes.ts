/**
 * VERIFIED RESPONDENT STATEMENTS
 * Every `text` below is copied verbatim (including original spelling) from
 * Kabanata 4 of "Wika at Kultura ng Chicharon: Sosyo-Kultural na Perspektiba ng mga Mamamayan".
 * `code` is the respondent code used in the study (R = respondent; W = as labelled in the study).
 * `gist` is a short English paraphrase written for this website — it is NOT a quotation.
 */

export type ThemeKey =
  | "family"
  | "friends"
  | "social"
  | "roadside"
  | "pasalubong"
  | "travel"
  | "everyday"
  | "quality"
  | "identity"
  | "habit"
  | "value"
  | "support"
  | "livelihood"
  | "tourism"
  | "competition"
  | "language"
  | "production"
  | "selling";

export const themes: Record<ThemeKey, { label: string; filipino: string; group: string }> = {
  family: { label: "Family as first introduction", filipino: "Pamilya Bilang Unang Daan sa Pagkakakilala", group: "Cultural knowledge" },
  friends: { label: "Friends & acquaintances", filipino: "Impluwensiya ng Kakilala at Kaibigan", group: "Cultural knowledge" },
  social: { label: "Social media & popularity", filipino: "Social Media at Katanyagan sa Komunidad", group: "Cultural knowledge" },
  roadside: { label: "Bus, terminal & roadside vendors", filipino: "Mga Naglalakbay na Tindera, Byahe sa Bus, at Tindahan sa Daan", group: "Cultural knowledge" },
  pasalubong: { label: "Pasalubong culture", filipino: "Kultura ng Pasalubong sa Biyahe", group: "Pasalubong & sharing" },
  travel: { label: "Travel south & family requests", filipino: "Pagbiyahe sa South, Gumala, at Pakiusap sa Pamilya", group: "Pasalubong & sharing" },
  everyday: { label: "Everyday life", filipino: "Integrasyon sa Pang-araw-araw na Pamumuhay", group: "Everyday life" },
  quality: { label: "Taste & quality", filipino: "Natatanging Lasa at Kalidad ng Produkto", group: "Livelihood" },
  identity: { label: "Carcar identity", filipino: "Orihinalidad at Pagkakakilanlan ng Carcar", group: "Identity" },
  habit: { label: "Buying traditions", filipino: "Kultura at Kasanayan sa Pagbili", group: "Livelihood" },
  value: { label: "Value & trust", filipino: "Presyong Abot-Kaya / Pagtitiwala at Kasiyahan", group: "Livelihood" },
  support: { label: "Supporting local", filipino: "Pagtataguyod ng mga Produktong Lokal", group: "Livelihood" },
  livelihood: { label: "Livelihood & work", filipino: "Ambag ng Industriya sa Kabuhayan", group: "Livelihood" },
  tourism: { label: "Economy & tourism", filipino: "Pag-unlad ng Ekonomiya at Turismo", group: "Livelihood" },
  competition: { label: "Change & competition", filipino: "Kompetisyon at mga Hamon sa Industriya", group: "Livelihood" },
  language: { label: "Language at the stall", filipino: "Wika, Kabuhayan, at Pakikipag-ugnayan", group: "Language" },
  production: { label: "How it is made", filipino: "Paggawa", group: "Production" },
  selling: { label: "How it is sold", filipino: "Pagbebenta", group: "Selling" },
};

export type Quote = {
  id: string;
  code: string;
  text: string;
  lang: "Cebuano" | "Filipino" | "Cebuano–English" | "Filipino–English";
  gist: string;
  theme: ThemeKey;
};

export const quotes: Quote[] = [
  // Family
  { id: "r2-family", code: "R2", theme: "family", lang: "Cebuano",
    text: "Kanang mangadto mi ug Carcar kay mo ana mana akong lola ug lolo nga manghapit tag chicharon sa Carcar.",
    gist: "Whenever we went to Carcar, my grandparents would say we should stop by for chicharon." },
  { id: "r3-family", code: "R3", theme: "family", lang: "Filipino",
    text: "Unang nakilala ko ang chicharon ng Carcar dahil sa pamilya. Taga Carcar mismo kami kaya bata pa lang ako, lagi na itong pasalubong. Yung mga magulang ko ang unang nagpakilala sa akin, sinasawsaw sa suka na may sili.",
    gist: "I first knew Carcar chicharon through my family — my parents introduced it to me as a child, dipped in vinegar with chili." },
  { id: "r15-family", code: "R15", theme: "family", lang: "Cebuano",
    text: "Nahibaw-an na nako tung bata pa lang ko nga gihatagan ni mama ug papa unya pagkaon nako mao na diay tu ang chicharon.",
    gist: "As a child, my mother and father gave me some — that is how I learned what chicharon was." },
  { id: "r36-family", code: "R36", theme: "family", lang: "Cebuano",
    text: "Una nakong nakaila ang chicharon kay mga elementary pako, kung wala ko masayop kay nasa mga grade 4. Ang nagpaila-ila nako sa chicharon kay akong papa.",
    gist: "I first came to know chicharon in elementary school, around grade 4. It was my father who introduced it to me." },
  // Friends
  { id: "r18-friends", code: "R18", theme: "friends", lang: "Cebuano",
    text: "Tungod sa naa koy kaila nga taga Carcar.",
    gist: "Because I know someone from Carcar." },
  { id: "w54-friends", code: "W54", theme: "friends", lang: "Cebuano–English",
    text: "Nailhan nakoo siya sa akong mga friends nga mga taga Carcar.",
    gist: "I came to know it through my friends who are from Carcar." },
  { id: "r59-friends", code: "R59", theme: "friends", lang: "Cebuano–English",
    text: "Katong na nailhan nako ang chicharon sa Carcar kay katong nagkuan si sakong mga kaila. Workmate kay naagian na namo siya n'ya mao to nahisgot nila na lami kuno ang Chicharon sa Carcar.",
    gist: "My workmates and I passed by Carcar, and they mentioned that Carcar chicharon is delicious." },
  // Social
  { id: "r25-social", code: "R25", theme: "social", lang: "Cebuano–English",
    text: "Through social media ra siya.",
    gist: "Only through social media." },
  { id: "r69-social", code: "R69", theme: "social", lang: "Cebuano–English",
    text: "Viral, makit an sa social media.",
    gist: "It's viral — you see it on social media." },
  { id: "r42-social", code: "R42", theme: "social", lang: "Cebuano–English",
    text: "Usahay pud makakita pud ko sa post sa social media about sa chicharon daghan jud ang mamalit. Ipasigarbo gyud nila ilahang chicharon.",
    gist: "Sometimes I see social-media posts about chicharon with many buyers. They really show off their chicharon." },
  { id: "w75-social", code: "W75", theme: "social", lang: "Cebuano–English",
    text: "Nakita nako sa social media, akong ameygo sad nag recommend.",
    gist: "I saw it on social media, and my friend also recommended it." },
  // Roadside
  { id: "r4-roadside", code: "R4", theme: "roadside", lang: "Cebuano",
    text: "Kanang mo uli kog negros nya maka agi kog Carcar naa may mo saka sa bus nya mamaligya ug chicharon mao na ilang e ingun permi nga gikan sa Carcar.",
    gist: "Going home to Negros, passing Carcar, vendors board the bus selling chicharon — always saying it comes from Carcar." },
  { id: "r16-roadside", code: "R16", theme: "roadside", lang: "Cebuano–English",
    text: "Tungod kay kinang mosakay ko naay mosaka sa bus unya mamaligya og ampao ug chicharon gyud ang mostandout.",
    gist: "When I ride, vendors board the bus selling ampao — but chicharon is what stands out." },
  { id: "r27-roadside", code: "R27", theme: "roadside", lang: "Cebuano",
    text: "Katong ga edad ko ug dose na kabaw nako mo byahe tapos sa bus kay naa manay mosakay para mamaligya didto nako nailhan.",
    gist: "When I was twelve and starting to travel, vendors would board the bus — that's where I came to know it." },
  { id: "r78-roadside", code: "R78", theme: "roadside", lang: "Filipino–English",
    text: "tanda ko usually everytime bumabyahe i was little back then this is what i hear if the bus stops at carcar i hear them chicharon mo diha itlog init.",
    gist: "As a child, every time the bus stopped at Carcar, I heard the vendors calling out: chicharon, hot eggs." },
  // Pasalubong
  { id: "r35-pasalubong", code: "R35", theme: "pasalubong", lang: "Cebuano–English",
    text: "Chicharon gyud ang number one nga pillion sa mga tao isip pasalubong.",
    gist: "Chicharon is really people's number-one choice for pasalubong." },
  { id: "r42-pasalubong", code: "R42", theme: "pasalubong", lang: "Cebuano",
    text: "Permi jud na ang Carcar chicharon ang ilang unang gipangita.",
    gist: "Carcar chicharon is always the first thing they look for." },
  { id: "r41-pasalubong", code: "R41", theme: "pasalubong", lang: "Cebuano–English",
    text: "Chicharon ang ipapalit kay mao ang known, usa sad sa ni sikat sa Carcar and maoy lami.",
    gist: "They ask for chicharon because it's what's known — one of Carcar's famous products, and it's delicious." },
  { id: "w39-pasalubong", code: "W39", theme: "pasalubong", lang: "Filipino",
    text: "Chicharon ang pangunahing binibili at dinala nila pauwi. Minsan kasama na rin ang lechon, ampao at tinapay ng Carcar.",
    gist: "Chicharon is the main thing bought and brought home — sometimes with lechon, ampao and Carcar bread." },
  { id: "r84-pasalubong", code: "R84", theme: "pasalubong", lang: "Cebuano",
    text: "Chicharon, ampaw, mga hopia, mango dried ug uban pa kay mao mana ang mga lami mani sila labi nag pasalubong. Ug nindot siya na lugar.",
    gist: "Chicharon, ampaw, hopia, dried mango and more — they're delicious, especially as pasalubong. And it's a lovely place." },
  { id: "r7-pasalubong", code: "R7", theme: "pasalubong", lang: "Cebuano–English",
    text: "Syempre Ma'am, wanay lain, chicharon gyud na Ma'am. Kay mao man gyud na Ma'am, for me lang Ma'am mao gyud na akong ganahan ipasalubong nila Ma'am kay lamian gyud sila and also ganahan pod akong mga amigo ug mga kaila.",
    gist: "Of course, nothing else — chicharon. It's what I like to bring as pasalubong; it's delicious and my friends and acquaintances like it too." },
  { id: "w41-pasalubong", code: "W41", theme: "pasalubong", lang: "Cebuano",
    text: "Mo palit kog chicharon inig-uli gikan sa siyudad padulong sa among probinsya ug ihatag ni nko isip regalo sa akong pamilya aron makita nila ang paghigugma ug importante nko sila.",
    gist: "I buy chicharon when going home from the city to the province and give it to my family, so they see my love and that they matter to me." },
  { id: "w36-pasalubong", code: "W36", theme: "pasalubong", lang: "Cebuano",
    text: "Dili kumpleto akong semana unya mo biyahe ko para mo palit ug chicharon kay amo jud ning g isip ug gi-ila namo nga pang regalo unya nakita ang paghinighugmaay.",
    gist: "My week isn't complete without travelling to buy chicharon — we see it as a gift through which love is shown." },
  // Travel
  { id: "r13-travel", code: "R13", theme: "travel", lang: "Cebuano",
    text: "Makapalit mig chicharon sa Carcar kung malaag mi sa Simala.",
    gist: "We get to buy chicharon in Carcar whenever we go on trips to Simala." },
  { id: "r26-travel", code: "R26", theme: "travel", lang: "Cebuano–English",
    text: "Ang akong parents every time molaag sila sa city kay taga-uli gyud nila sa province kay magdala gyud sila og chicharon.",
    gist: "Every time my parents go to the city and come home to the province, they always bring chicharon." },
  { id: "r40-travel", code: "R40", theme: "travel", lang: "Cebuano–English",
    text: "Once nakaadto mig Simala, nakaagi mig Carcar ang paliton kay ilang lechon manok and ilang chicharon.",
    gist: "Once, going to Simala, we passed Carcar and bought their lechon manok and chicharon." },
  { id: "r95-travel", code: "R95", theme: "travel", lang: "Cebuano",
    text: "Usahay kay pasalubong ra bsta naay kaila maagi ug carcar magpahapit gyud kog chicharon.",
    gist: "Sometimes, whenever someone I know is passing Carcar, I ask them to stop and buy chicharon for me." },
  // Everyday
  { id: "r3-everyday", code: "R3", theme: "everyday", lang: "Filipino",
    text: "Halos araw-araw akong bumibili ng chicharon dahil ito ang aking ginawang snacks.",
    gist: "I buy chicharon almost every day because it's my snack." },
  { id: "r5-everyday", code: "R5", theme: "everyday", lang: "Filipino",
    text: "Paminsan-minsan akong bumibili at kumakain nito kasama ang pamilya bilang meryenda.",
    gist: "Now and then I buy it and eat it with my family as a snack." },
  { id: "r90-everyday", code: "R90", theme: "everyday", lang: "Filipino",
    text: "May tradisyon kami sa pamilya na tuwing magsisimba kami tuwing Linggo sa Carcar, dadaan muna kami sa palengke upang bumili ng sariwa at bagong lutong chicharon na baon namin pauwi.",
    gist: "Our family tradition: after Sunday Mass in Carcar, we pass by the market for fresh, newly cooked chicharon to take home." },
  { id: "r43-everyday", code: "R43", theme: "everyday", lang: "Cebuano–English",
    text: "2-3 times kay usahay mag cravings lang ko, usahay ganahan ko mokaon nga isuwa sa kan-on or butangan lang og suka.",
    gist: "Two to three times — sometimes I just crave it; sometimes I like it with rice, or just with vinegar." },
  { id: "r12-everyday", code: "R12", theme: "everyday", lang: "Cebuano–English",
    text: "Sauna katong taga diri pako sige gyud kog kaon kay ihas paman ko, pero karon kay healthy living na raba ta so mas less nalang gyud ang pagkaon sa chicharon, pero kong mag crave gyud ara ko mo palit.",
    gist: "I used to eat it a lot, but now with healthy living I eat less — though when I crave it, I still buy some." },
  // Quality
  { id: "r42-quality", code: "R42", theme: "quality", lang: "Cebuano",
    text: "Lami jud ug mas malutong, mas presko, bag-o pa gihimo kung sa Carcar ka mopalit",
    gist: "It's delicious and crispier, fresher, newly made when you buy it in Carcar." },
  { id: "r87-quality", code: "R87", theme: "quality", lang: "Filipino",
    text: "Mas pinipili ko ang chicharon sa Carcar dahil kakaiba ang lutong nito at hindi matigas sa ngipin, bukod pa roon ay sakto ang alat at lasa ng karne.",
    gist: "I prefer Carcar chicharon: a distinctive crunch that isn't hard on the teeth, with the right saltiness and meat flavour." },
  { id: "r92-habit", code: "R92", theme: "habit", lang: "Cebuano",
    text: "Mao nay naandan nako na timpla, lahi ra jud sya sa uban, maoy naandan mao to gisuli nalang nako",
    gist: "That's the seasoning I'm used to — it's different from others, so I keep coming back." },
  // Identity
  { id: "r12-identity", code: "R12", theme: "identity", lang: "Cebuano–English",
    text: "Ang chicharon kay nag serve na sya as identity sa Carcar basta mo ingon tag Carcar makaingon gyud tag chicharon gyud",
    gist: "Chicharon has become Carcar's identity — say \"Carcar\" and you'll say \"chicharon\"." },
  { id: "r17-identity", code: "R17", theme: "identity", lang: "Cebuano–English",
    text: "mahimo siyang trademark sa carcar",
    gist: "It can be Carcar's trademark." },
  { id: "r87-identity", code: "R87", theme: "identity", lang: "Filipino",
    text: "Ang chicharon ay ang mukha at puso ng Lungsod ng Carcar; kapag binanggit ang Carcar, awtomatikong pumapasok sa isip ng mga tao ang chicharon.",
    gist: "Chicharon is the face and heart of Carcar; mention Carcar and people automatically think of chicharon." },
  { id: "r88-identity", code: "R88", theme: "identity", lang: "Filipino",
    text: "Isa itong mahalagang pamanang kultural na nagpapakita ng kasipagan, kasanayan, at tradisyon sa pagluluto ng mga Carcaranon na naipasa mula sa mga naunang henerasyon hanggang sa kasalukuyan.",
    gist: "It is an important cultural heritage showing the industry, skill and cooking tradition of Carcaranons, passed down through generations." },
  { id: "r83-identity", code: "R83", theme: "identity", lang: "Cebuano–English",
    text: "Ang nausab, nailhan na pag ayo ang Carcar when you say 'Chicharon'.",
    gist: "What changed: Carcar became well known when you say \"chicharon\"." },
  { id: "r39-identity", code: "R39", theme: "identity", lang: "Filipino",
    text: "Hindi kompleto ang pagbisita sa Carcar kung walang pasalubong na chicharon.",
    gist: "A visit to Carcar isn't complete without chicharon as pasalubong." },
  { id: "r42-identity", code: "R42", theme: "identity", lang: "Cebuano",
    text: "Ang tinuod nga chicharon, sa Carcar ra gyud.",
    gist: "The real chicharon is only in Carcar." },
  { id: "r44-identity", code: "R44", theme: "identity", lang: "Cebuano",
    text: "Dili ka tinuod nga niadto sa Carcar kung wala kay dang chicharon.",
    gist: "You haven't truly been to Carcar if you didn't bring home chicharon." },
  { id: "r89-identity", code: "R89", theme: "identity", lang: "Filipino",
    text: "Malaki ang papel nito sa aming pagmamalaki bilang mamamayan dahil ipinagmamalaki namin sa mga turista na ang ating chicharon ay may kakaibang linamnam na hindi matatagpuan sa iba.",
    gist: "It plays a big part in our pride as residents — we proudly tell tourists our chicharon has a flavour found nowhere else." },
  // Value / trust
  { id: "r43-value", code: "R43", theme: "value", lang: "Cebuano–English",
    text: "Trust lang gyud. Alam ko nga diri gyud gikan, fresh, ug dili makahadlok kung baho-baho or what dili ma worry og dili magduha-duha. Quality gyud ang kalainan, worth it ang presyo.",
    gist: "It's trust. I know it really comes from here, it's fresh, so I don't worry or hesitate. Quality is the difference — worth the price." },
  { id: "r40-value", code: "R40", theme: "value", lang: "Cebuano–English",
    text: "Usa ang mosuporta sa lokal, ikaduha ang quality og ang good pud siya sa iyahang pricing.",
    gist: "First, to support local; second, the quality — and its pricing is good too." },
  // Support
  { id: "r38-support", code: "R38", theme: "support", lang: "Filipino",
    text: "Sa pagbili nito, nakatutulong din ako sa mga lokal na negosyante.",
    gist: "By buying it, I'm also helping local entrepreneurs." },
  { id: "r89-support", code: "R89", theme: "support", lang: "Filipino",
    text: "Nais kong suportahan ang mga maliit na negosyante at mag-uuling sa Carcar upang mapanatili ang kanilang kabuhayan sa halip na bumili sa mga komersyal na produkto sa mall.",
    gist: "I want to support small businesses in Carcar to sustain their livelihood, instead of buying commercial products at the mall." },
  // Livelihood
  { id: "r2-livelihood", code: "R2", theme: "livelihood", lang: "Cebuano–English",
    text: "Of course ma apektohan ilang daily needs kay dira man gagikan ilahang source of income.",
    gist: "Of course it affects their daily needs — that's where their income comes from." },
  { id: "r33-livelihood", code: "R33", theme: "livelihood", lang: "Cebuano–English",
    text: "daghang pamilya ang nabuhi sa pagluto og pagbaligya chicharon gikan sa baboy hangtod sa tindahan sa highway.",
    gist: "Many families live by cooking and selling chicharon — from the pig all the way to the shop on the highway." },
  { id: "r76-livelihood", code: "R76", theme: "livelihood", lang: "Cebuano",
    text: "Ang paghimo sa chicharon kay naghatag og daghang panginabuhi sa mga trabahante gikan sa mokatay sa baboy, tagalimpyo sa panit, og sa taga-luto sa chicharon og sa mga tindera niini.",
    gist: "Making chicharon gives livelihood to many — those who butcher, those who clean the skin, the cooks, and the vendors." },
  { id: "r37-livelihood", code: "R37", theme: "livelihood", lang: "Cebuano–English",
    text: "Nakinabang kay ang owner, ang maker, ang mga taw, ang lungsod, sila gyud tanan.",
    gist: "Everyone benefits — the owner, the maker, the people, the city." },
  { id: "r88-livelihood", code: "R88", theme: "livelihood", lang: "Filipino",
    text: "Sigurado akong sariwa ang ginagamit nilang karne ng baboy dahil direktang kinukuha ito sa mga lokal na mag-uuling at nagpapatay ng baboy sa kanilang sariling pamilihan.",
    gist: "I'm sure the pork they use is fresh, because it comes directly from local suppliers and butchers in their own market." },
  { id: "r34-livelihood", code: "R34", theme: "livelihood", lang: "Cebuano–English",
    text: "dili ra man gud sila namaligya chicharon dihang ha gud, kay naa man siguro na silay kanang naay, mo-palit daghan ba mangangkat ang uban tawo tas ibaligya sa laing lugar, Makatabang gyud na sila sa ilahang business.",
    gist: "They don't only sell chicharon there — some people buy in bulk and resell it in other places, which really helps their business." },
  // Tourism
  { id: "r1-tourism", code: "R1", theme: "tourism", lang: "Cebuano–English",
    text: "Daghan tuod kay apil mana sa ilang negosyo plus torismo pud sa carcar.",
    gist: "A lot — it's part of their business, plus tourism in Carcar." },
  { id: "r36-tourism", code: "R36", theme: "tourism", lang: "Cebuano",
    text: "daghan man gud ang moagi didto, or motuyo lag adto para makapalit ug makatilaw sa chicharon.",
    gist: "Many pass through, or go there on purpose to buy and taste chicharon." },
  { id: "r11-tourism", code: "R11", theme: "tourism", lang: "Cebuano–English",
    text: "Dako siya ikatabang kay na known siya kay maoy pangitaon kung naay modayo.",
    gist: "It helps a lot because it's well known — it's what visitors look for." },
  { id: "r90-tourism", code: "R90", theme: "tourism", lang: "Filipino",
    text: "Nagsisilbi itong pangunahing makina ng turismo sa Carcar kung saan dumarayo ang libu-libong tao hindi lamang para mamasyal kundi para tikman ang ating sikat na lokal na produkto.",
    gist: "It serves as a main engine of tourism in Carcar, where people come not only to stroll but to taste our famous local product." },
  // Competition / change
  { id: "r35-competition", code: "R35", theme: "competition", lang: "Cebuano",
    text: "Ang kalisud nga akong nakita kay daghan na silag kompetensya kay daghan na ang nanghimo ug naninda sa Carcar ug chicharon.",
    gist: "The difficulty I see is competition — many now make and sell chicharon in Carcar." },
  { id: "r39-competition", code: "R39", theme: "competition", lang: "Filipino",
    text: "Minsan mahal ang presyo ng baboy, at marami na rin ibang nagtitinda na gumagaya.",
    gist: "Sometimes pork is expensive, and many other sellers now imitate the product." },
  { id: "r89-competition", code: "R89", theme: "competition", lang: "Filipino",
    text: "Sa nakalipas na mga taon, nakita ko ang pag-unlad ng mga simpleng tindahan na ngayon ay naging mga kilalang pasilidad o tatak na may sarili na ring mga pwesto sa mall at highway.",
    gist: "Over the years I've seen simple shops grow into known brands with their own spots in malls and on the highway." },
  // Language
  { id: "r18-language", code: "R18", theme: "language", lang: "Cebuano–English",
    text: "Bisaya, depende if naay turista nga lain ig dayalekto kay moadjust sa customer nga language.",
    gist: "Bisaya — but if a tourist speaks another language, we adjust to the customer's language." },
  { id: "r23-language", code: "R23", theme: "language", lang: "Cebuano–English",
    text: "Bisaya, Tagalog, English flexible aron mahalin makadagit og customers.",
    gist: "Bisaya, Tagalog, English — flexible, so it sells and attracts customers." },
  { id: "r25-language", code: "R25", theme: "language", lang: "Cebuano–English",
    text: "Naa depende, depende sa kung knsay mamalit, basta turista, English, or tagalog, depende. Pero kung local lang pareha nato, Bisaya gyud.",
    gist: "It depends on who's buying — tourists get English or Tagalog, but locals like us, it's Bisaya." },
  // Production
  { id: "r74-production", code: "R74", theme: "production", lang: "Cebuano–English",
    text: "Una no kay panit na siya sa baboy, unya limpyuhan jud maayu ang panit sa baboy emarenate na siya ug pila ka oras unya human kay ibulad na siya sa init ug pila ka adlaw then lutuon na siya sa init kaayu na mantika human patuluon usa ibaligya, mao rana ako nahibaw an, ma'am.",
    gist: "First it's pork skin, cleaned well, marinated for some hours, then sun-dried for some days, then cooked in very hot oil and drained before selling — that's what I know." },
  { id: "r89-production", code: "R89", theme: "production", lang: "Filipino",
    text: "Kailangan ng mahabang taon ng karanasan upang malaman kung kailan eksaktong hanguin ang chicharon mula sa kawali upang makuha ang perpektong lutong.",
    gist: "It takes long years of experience to know exactly when to lift the chicharon from the pan for the perfect crunch." },
  // Selling
  { id: "r79-selling", code: "R79", theme: "selling", lang: "Filipino",
    text: "Karaniwan kong nakikita ang chicharon na ibinebenta sa palengke, sari-sari store, at mga tindahan sa tabi ng kalsada. Nakabalot ito sa plastik at may iba't ibang laki at presyo. Sa aking karanasan, mababait at madaling lapitan ang mga nagtitinda.",
    gist: "I usually see it sold at the market, sari-sari stores and roadside shops — packed in plastic in various sizes and prices. Vendors are kind and approachable." },
  { id: "r39-selling", code: "R39", theme: "selling", lang: "Cebuano",
    text: "Naa say mga tindera nga usa ka mamalit kay patilawon ka sa ilang baligya",
    gist: "Some vendors let you taste their product before you buy." },
  { id: "r42-selling", code: "R42", theme: "selling", lang: "Cebuano",
    text: "Chicharon! Presko nga Carcar chicharon!",
    gist: "A vendor's call: \"Chicharon! Fresh Carcar chicharon!\"" },
];

export const quoteById = (id: string) => {
  const q = quotes.find((x) => x.id === id);
  if (!q) throw new Error(`Unknown quote id: ${id}`);
  return q;
};
