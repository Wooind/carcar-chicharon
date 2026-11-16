# CONTENT PLACEHOLDER GUIDE

Every piece of text on the site that still needs **verified** information. On the website these appear as dashed brick-red boxes like `[THIS]`. Nothing in these slots was invented: fill them only with information you have verified, and get consent from any person or business you name.

| # | What to fill in | File to edit | Where it shows | Source / rule |
|---|---|---|---|---|
| 1 | **Vendor directory** (11 real sellers, filled Nov 2026) | `src/data/vendors.ts` | /vendors | Each listing comes from the vendor's public Facebook page or a published guide, named in `source`. Re-check phone numbers and addresses before the defense, and remove a listing if a vendor asks. |
| 2 | **People profiles** (optional, removed for launch) | `src/app/people/page.tsx` | /people | Re-add only for people who agreed to be featured, in their own words. |
| 3 | **Discover**: 6th product name and description; "Vendor / source" and "Location" on each card | `src/app/discover/page.tsx` (`products` array) | /discover | From vendors. |
| 4 | **Explore Carcar**: a one-line history for each of the 4 landmarks (St. Catherine of Alexandria Church, Carcar City Museum, Silva House, Sato Ancestral House), plus the market address or map link | `src/app/explore-carcar/page.tsx` | /explore-carcar | Verified facts only, each with a source (for example the LGU, tourism office or an NHCP marker). The study itself lists no tourist sites. The landmark names come from the credited Commons photos. |
| 5 | **Extra production detail** (optional) | `src/app/how-its-made/page.tsx` (bottom dashed box) | /how-its-made | Only from a consenting producer. Do not publish family "secret" recipes. |
| 6 | **Footer**: Facebook page, Instagram/TikTok, contact email | `src/components/Footer.tsx` | Every page | Official project accounts only. |
| 7 | **Full bibliography** | `src/data/references.ts` | /references | Copy the MLA entries from "Mga Babasahing Tinutukoy". The site currently lists works as they are cited in-text. |
| 8 | **More respondent quotes** (optional) | `src/data/quotes.ts` | /voices and throughout | Copy them word for word from the transcriptions (Apendiks F), with the respondent code. The `gist` field is an English paraphrase; label it as such. |
| 9 | **Translation review** | `<T en ceb fil />` in each page and `tr()` in data arrays | Every page | Have native Bisaya and Filipino speakers check the drafts. Do not translate respondent quotes. |
| 10 | **Photo rights** | `src/data/photos.ts` (entries "Supplied by the researchers") and `cnu-logo` | Throughout | Confirm the source of every photo you supplied and get permission for the CNU logo. Keep all Wikimedia credit lines. |

## Verified content already in the site (for reviewers)

- **Study title, institution, degree, researchers, adviser and panel**: from the title page and the Dahon ng Pagpapatibay.
- **Objectives, method, 100 respondents, theories**: from Kabanata 1 and 3.
- **Themes, tables 1–4, production steps, selling practices, consumption**: from Kabanata 4.
- **The six digital-tool features, conclusions and recommendations**: from Kabanata 5.
- **All respondent quotations** are reproduced verbatim from Kabanata 4, including the original spelling. The English "EN gist" under each one is a paraphrase written for the site and is not a quotation.
- **No statistics, prices, dates, historical claims, vendor names or tourist sites were created.** The only numbers shown (100 respondents, 5 objectives, 5 sectors, 6 features) are stated in the study.

## Images

See `IMAGE_PLACEHOLDER_GUIDE.md` (90 slots, 63 already filled, each with its credit) Every photo credit is also listed at **/references#photo-credits**.
