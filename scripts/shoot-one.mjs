import puppeteer from "puppeteer-core";
const [w, h, scrollExtra, out] = [1440, 900, parseInt(process.argv[2] || "900"), process.argv[3] || "portfolio-lower"];
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new", args: ["--no-first-run", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: w, height: h });
await page.goto("http://localhost:5175/", { waitUntil: "networkidle0", timeout: 30000 });
await new Promise((r) => setTimeout(r, 1500));
await page.evaluate((extra) => {
  const el = document.getElementById("portfolio");
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + extra, behavior: "instant" });
}, scrollExtra);
await new Promise((r) => setTimeout(r, 2000));
await page.screenshot({ path: `/tmp/shot-${out}.jpg`, type: "jpeg", quality: 70 });
await browser.close();
