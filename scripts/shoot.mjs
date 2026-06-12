// Dev-only helper: screenshots the local dev server section by section.
// Usage: node scripts/shoot.mjs [width] [height] [outPrefix]
import puppeteer from "puppeteer-core";

const width = parseInt(process.argv[2] || "1440", 10);
const height = parseInt(process.argv[3] || "900", 10);
const prefix = process.argv[4] || "desktop";

const browser = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-first-run", "--hide-scrollbars"],
});

const page = await browser.newPage();
await page.setViewport({ width, height, deviceScaleFactor: 1 });

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto("http://localhost:5175/", { waitUntil: "networkidle0", timeout: 30000 });
await new Promise((r) => setTimeout(r, 1500));

const sections = ["home", "about", "skills", "experience", "portfolio", "contact"];
for (const s of sections) {
  await page.evaluate((id) => {
    const el = document.getElementById(id) || document.getElementsByName(id)[0];
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "instant" });
  }, s);
  await new Promise((r) => setTimeout(r, 1800));
  await page.screenshot({ path: `/tmp/shot-${prefix}-${s}.jpg`, type: "jpeg", quality: 70 });
}

console.log("console errors:", JSON.stringify(errors, null, 2));
await browser.close();
