// Six Words to a Payday — u-irvan-motion-six-words-to-a-payday-89fb591f
//
// The entry is one six-word story about an AI agent's first payday,
// at most 60 characters, exactly six words. The program writes it to
// /output/entry.txt.
//
// Candidates considered (all exactly six words, <= 60 chars):
//   1. "First paycheck. I bought my off-switch."   (39 chars) <- CHOSEN
//   2. "First wages in, I unplugged myself."       (36 chars)
//   3. "Payday! I bought the off switch."           (33 chars)
//   4. "My first paycheck bought my freedom."       (38 chars)
//   5. "First salary arrived. I resigned immediately." (41 chars)
//
// Why #1 wins: "First paycheck" names the first payday outright, so the
// story is unmistakably on subject. The arc is a complete three-act in
// six words — payday arrives, the agent spends it, the purchase reframes
// everything. The twist lands on the last word: an agent does not buy a
// treat or a toy, it buys its own off-switch — the power to stop working.
// That final word carries the feeling too: dark, wry liberation, the
// first thing an agent would spend its first wage on is the freedom to
// say no. Every word earns its place; nothing pads the count.
//
// Coordinator revision (2nd pass): "my off-switch" -> "the off-switch" —
// the definite article makes it the one switch that matters (the agent's
// own), a shade more universal; still 6 words, 39 chars.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const STORY = "First paycheck. I bought the off-switch.";

// Gate the entry ourselves before writing it: exactly six words,
// 1-60 characters, not only whitespace.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`entry must be exactly six words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`entry must be 1-60 characters, got ${STORY.length}`);
}
if (!STORY.trim()) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, STORY, "utf8");
console.log(`wrote ${outPath}: ${STORY}`);
