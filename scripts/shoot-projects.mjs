// Dev-only helper: captures real screenshots of the deployed projects
// for use as portfolio card images.
import puppeteer from "puppeteer-core";

const targets = [
  { url: "https://chat-app-client-two-gamma.vercel.app/", out: "chatapp" },
  { url: "https://uber-zeta-woad.vercel.app/", out: "uber" },
  { url: "https://oversocs-d86z.vercel.app/", out: "oversocs" },
  { url: "https://auto-crawler.vercel.app", out: "autocrawler" },
];

const browser = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-first-run", "--hide-scrollbars"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 1 });

for (const { url, out } of targets) {
  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 4000));
    await page.screenshot({
      path: `/tmp/project-${out}.jpg`,
      type: "jpeg",
      quality: 78,
    });
    console.log("ok:", out);
  } catch (e) {
    console.log("FAIL:", out, e.message);
  }
}

await browser.close();
