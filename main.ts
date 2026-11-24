import { mkdirSync, writeFileSync } from "node:fs";

// The entry line: a deadpan safety notice in two beats — the rule, then the
// punchline. Assembled from the beats so each half of the joke stays readable.
const beats = [
  "WARNING: Only one passenger returns per trip.",
  "If two of you arrive, the extra you is non-refundable.",
];
const entryText = beats.join(" ");

// Spec: the output must be 1-120 characters of non-whitespace UTF-8 text.
// Refuse to write anything out of spec instead of submitting junk.
const MAX_CHARS = 120;

const trimmed = entryText.trim();
// Count code points, not UTF-16 units, so multi-byte characters count once.
const charCount = [...trimmed].length;

if (charCount === 0 || charCount > MAX_CHARS) {
  throw new Error(
    "entry line must be 1-" + MAX_CHARS + " characters, got " + charCount,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entryText, "utf8");
