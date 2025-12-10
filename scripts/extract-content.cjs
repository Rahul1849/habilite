/**
 * CJS wrapper to run the extractor without ESM issues.
 * Run: node scripts/extract-content.cjs
 */
require("ts-node/register/transpile-only");
require("./extract-content.ts");

