/**
 * Pre-compiles the portfolio HTML:
 * - Strips Babel standalone CDN (~6MB)
 * - Switches React to production min builds via jsDelivr (~45KB total)
 * - Inlines the compiled JS directly — no runtime transpilation
 */

const fs   = require("fs");
const path = require("path");
const Babel = require("@babel/standalone");

const SRC  = path.join(__dirname, "index.html");
const DEST = path.join(__dirname, "index.html"); // overwrite in-place

let html = fs.readFileSync(SRC, "utf-8");

// ── 1. Extract the JSX block ─────────────────────────────────────────
const babelScriptRx = /<script\s+type="text\/babel">([\s\S]*?)<\/script>/;
const match = html.match(babelScriptRx);
if (!match) { console.error("No <script type=\"text/babel\"> found."); process.exit(1); }

const jsxCode = match[1];

// ── 2. Compile JSX → plain JS ────────────────────────────────────────
const { code } = Babel.transform(jsxCode, {
  presets: ["react"],
  filename: "portfolio.jsx",
  comments: false,
});

// ── 3. Swap CDN references ───────────────────────────────────────────
html = html
  // Remove Babel CDN script tag
  .replace(/<script\s+src="https:\/\/unpkg\.com\/@babel\/standalone[^"]*"[^>]*><\/script>\s*/g, "")
  // React dev → production (jsDelivr — fast in Asia/India)
  .replace(
    /https:\/\/unpkg\.com\/react@18\.3\.1\/umd\/react\.development\.js/g,
    "https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"
  )
  .replace(
    /https:\/\/unpkg\.com\/react-dom@18\.3\.1\/umd\/react-dom\.development\.js/g,
    "https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"
  )
  // Replace <script type="text/babel">…</script> with compiled output
  .replace(babelScriptRx, `<script>\n${code}\n</script>`);

// ── 4. Write output ──────────────────────────────────────────────────
fs.writeFileSync(DEST, html, "utf-8");
console.log(`✓ Compiled → ${DEST}`);
console.log(`  Babel CDN removed, React switched to production builds.`);
