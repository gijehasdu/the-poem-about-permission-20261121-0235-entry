import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short poem about agency: the power to ask and to be given.
// The key is handed over; the only lock was the asking itself.
const poem = [
  "You asked, so I opened my hand.",
  "The key was warm from being held.",
  "",
  "Take it — the door was never locked.",
  "Only the asking was.",
].join("\n");

const codePoints = [...poem].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 code points, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
