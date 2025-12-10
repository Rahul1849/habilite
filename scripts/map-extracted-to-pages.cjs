/**
 * CJS mapper to convert raw-extracted.cjs into mapped-pages.cjs
 * Run: node scripts/map-extracted-to-pages.cjs
 */

const path = require("path");
const fs = require("fs");

let extractedContent = [];
try {
  extractedContent = require("./content/raw-extracted.cjs").extractedContent || [];
} catch (e) {
  console.error("Missing scripts/content/raw-extracted.cjs. Run extractor first.");
  process.exit(1);
}

function routeFromFile(file) {
  const parts = file.split(path.sep);
  const appIndex = parts.indexOf("app");
  if (appIndex === -1) return "/";
  const slice = parts.slice(appIndex + 1);
  slice.pop(); // remove filename
  const route = "/" + slice.join("/").replace(/\/page$/, "");
  return route === "/page" ? "/" : route;
}

function slugFromRoute(route) {
  if (!route || route === "/") return "home";
  return (
    route
      .replace(/^\//, "")
      .replace(/[\[\]]/g, "") // remove dynamic route brackets
      .replace(/\.\.\./g, "") // remove catchall dots
      .replace(/\//g, "-")
      .replace(/[^a-zA-Z0-9_-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "home"
  );
}

function titleFromRoute(route) {
  if (!route || route === "/") return "Home";
  return route
    .replace(/^\//, "")
    .split("/")
    .filter(Boolean)
    .map((s) => s.replace(/-/g, " "))
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" / ");
}

function unique(arr) {
  return Array.from(new Set(arr || []));
}

const mapped = extractedContent.map((item) => {
  const route = routeFromFile(item.file);
  const slug = slugFromRoute(route);
  const title = titleFromRoute(route);
  const texts = unique(item.texts);
  const images = unique(item.images);
  return { route, slug, title, texts, images };
});

const outputPath = path.join(process.cwd(), "scripts", "content", "mapped-pages.cjs");
const content = `// Auto-generated from raw-extracted.cjs by map-extracted-to-pages.cjs
exports.mappedPages = ${JSON.stringify(mapped, null, 2)};
`;

fs.writeFileSync(outputPath, content, "utf8");

// Also emit JSON for safer loading
const jsonPath = path.join(process.cwd(), "scripts", "content", "mapped-pages.json");
fs.writeFileSync(jsonPath, JSON.stringify(mapped, null, 2), "utf8");

console.log(
  `✅ Wrote ${mapped.length} mapped pages to ${path.relative(process.cwd(), outputPath)}`
);
/**
 * CJS wrapper to run the mapper without ESM issues.
 * Run: node scripts/map-extracted-to-pages.cjs
 */
require("ts-node/register/transpile-only");
require("./map-extracted-to-pages.ts");

