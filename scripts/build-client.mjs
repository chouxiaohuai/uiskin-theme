// uiskin-theme build script — inlines the raster assets as base64 data URIs
// into scripts/client.template.js and writes lib/client.js (self-contained,
// no filesystem access at runtime, no absolute paths).
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const ASSETS = {
  BG_URI: { file: "assets/bg_1600_q60.jpg", mime: "image/jpeg" },
  STICKER_URI: { file: "assets/sticker2.png", mime: "image/png" },
  SETTINGS_DECOR_URI: { file: "assets/settings_decor.png", mime: "image/png" },
  SETTINGS_DIVIDER_URI: { file: "assets/settings_divider.png", mime: "image/png" },
  NEW_SESSION_SKIN_URI: { file: "assets/new_session_skin_clean.png", mime: "image/png" },
};

const templatePath = join(ROOT, "scripts", "client.template.js");
const outputPath = join(ROOT, "lib", "client.js");

let source = readFileSync(templatePath, "utf8");

for (const [placeholder, { file, mime }] of Object.entries(ASSETS)) {
  const abs = join(ROOT, file);
  if (!existsSync(abs)) {
    console.error(`uiskin-theme: missing asset ${file} — copy the images into assets/ first`);
    process.exit(1);
  }
  const dataUri = `data:${mime};base64,${readFileSync(abs).toString("base64")}`;
  const token = `__${placeholder}__`;
  if (!source.includes(token)) {
    console.error(`uiskin-theme: placeholder ${token} not found in ${templatePath}`);
    process.exit(1);
  }
  source = source.split(token).join(dataUri);
}

const leftovers = source.match(/__[A-Z_]+__/g);
if (leftovers) {
  console.error(`uiskin-theme: unresolved placeholders: ${[...new Set(leftovers)].join(", ")}`);
  process.exit(1);
}

writeFileSync(outputPath, source);
const kb = (Buffer.byteLength(source, "utf8") / 1024).toFixed(1);
console.log(`uiskin-theme: wrote ${outputPath} (${kb} KiB)`);
