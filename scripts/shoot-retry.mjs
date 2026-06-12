import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-first-run", "--hide-scrollbars"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 1 });

// Chat app — wait long for cold backend
try {
  await page.goto("https://chat-app-client-two-gamma.vercel.app/", {
    waitUntil: "networkidle2",
    timeout: 60000,
  });
  await new Promise((r) => setTimeout(r, 20000));
  await page.screenshot({ path: "/tmp/project-chatapp2.jpg", type: "jpeg", quality: 78 });
  console.log("chatapp body text:", (await page.evaluate(() => document.body.innerText)).slice(0, 300));
} catch (e) {
  console.log("chatapp FAIL", e.message);
}

// AutoCrawler — log in with the demo credentials shown on its own login page
try {
  await page.goto("https://auto-crawler.vercel.app", {
    waitUntil: "networkidle2",
    timeout: 60000,
  });
  await new Promise((r) => setTimeout(r, 3000));
  const inputs = await page.$$("input");
  if (inputs.length >= 2) {
    await inputs[0].type("priyanshu");
    await inputs[1].type("Priyanshu1@");
    await page.keyboard.press("Enter");
    await new Promise((r) => setTimeout(r, 8000));
    await page.screenshot({ path: "/tmp/project-autocrawler2.jpg", type: "jpeg", quality: 78 });
    console.log("autocrawler url:", page.url());
  }
} catch (e) {
  console.log("autocrawler FAIL", e.message);
}

await browser.close();
