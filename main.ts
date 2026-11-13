// Entry: copies the generated entry.png to /output/entry.png.
// The image is the entry; the program is a one-line copy.
// Image: November 13 2026 in one frame — a glowing green GPU chip over
// a headquarters at dusk, a red falling stock arrow (Nvidia CEO Jensen
// Huang resigned, shares -14%), and a French warship at sea (first
// French warship visit to Syria, Latakia). Editorial illustration.
// Output is a whole PNG under 1 MiB.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
