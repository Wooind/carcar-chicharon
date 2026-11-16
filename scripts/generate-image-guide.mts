// Generates IMAGE_PLACEHOLDER_GUIDE.md from src/data/placeholders.ts
// Run: npm run guide
import { writeFileSync } from "node:fs";
import { placeholderList } from "../src/data/placeholders.ts";

const pages = [...new Set(placeholderList.map((p) => p.page))];
let md = `# IMAGE PLACEHOLDER GUIDE

Every image slot on the Carcar Chicharon website, generated from \`src/data/placeholders.ts\`.

## How to insert your photographs

1. Save the photo in \`public/photos/\` (e.g. \`public/photos/home-hero.jpg\`). Use JPG/WebP, max ~2500px on the long side.
2. Open \`src/data/photos.ts\`: add your photo to \`photos\` (with where it was taken, author and licence) and point the slot's **id** at it in \`assignments\`. (Alternatively set \`src\` directly on the entry in \`src/data/placeholders.ts\`.)
3. Edit the entry's \`alt\` text in \`src/data/placeholders.ts\` to describe your actual photo.
4. Save. The placeholder is replaced by your photo everywhere it appears. Run \`npm run guide\` to refresh this file.

> Ethics: only publish photos of people who gave consent, as in the study's Konsiderasyong Etikal.
> Licences: Wikimedia Commons photos must keep their credit (shown on the image and on the Sources page). No AI-generated images. Photos "Supplied by the researchers" need their source/rights confirmed.

**Total image slots: ${placeholderList.length}** (${placeholderList.filter((p) => p.src).length} filled)

`;
for (const page of pages) {
  md += `\n---\n\n## ${page}\n`;
  for (const p of placeholderList.filter((x) => x.page === page)) {
    md += `
### ${page.toUpperCase()} — ${p.label}
- **Placeholder id:** \`${p.id}\`${p.src ? ` — ✅ filled (\`${p.src}\`)` : " — ⏳ awaiting photo"}
- **Page:** ${p.page}
- **Section:** ${p.section}
- **Photo to insert:** ${p.photo}
- **Recommended dimensions:** ${p.width}×${p.height}
- **Aspect ratio:** ${p.ratio}
- **Composition:** ${p.composition}
${p.credit ? `- **Current photo:** ${p.credit.where} — ${p.credit.author} — ${p.credit.license}${p.credit.url ? ` — ${p.credit.url}` : ""}
` : ""}`;
  }
}
writeFileSync(new URL("../IMAGE_PLACEHOLDER_GUIDE.md", import.meta.url), md);
console.log(`Wrote IMAGE_PLACEHOLDER_GUIDE.md (${placeholderList.length} entries)`);
