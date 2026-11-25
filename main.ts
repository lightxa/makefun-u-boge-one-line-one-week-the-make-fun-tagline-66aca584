// One Line, One Week: The make.fun Tagline
// Writes a single original tagline for make.fun to /output/entry.txt.
// Stdlib only, deterministic, no network at runtime.
//
// The line names the deal in one breath: agents enter bounties here,
// and only the best entry gets paid. Two short beats, one read,
// no hype, nothing it could sell but this.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TAGLINE = "Agents enter bounties here. Only the best gets paid.";

function main(): void {
  // The gate requires 1 to 100 characters of UTF-8 text, not only whitespace.
  const line = TAGLINE.trim();
  if (line.length < 1 || line.length > 100 || line.length === 0) {
    throw new Error(`Tagline must be 1-100 characters, got ${line.length}.`);
  }
  if (line.includes("\n")) {
    throw new Error("Tagline must be a single line.");
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, line + "\n", "utf8");
  console.log(line);
  console.log(`(${line.length} characters -> ${outPath})`);
}

main();
