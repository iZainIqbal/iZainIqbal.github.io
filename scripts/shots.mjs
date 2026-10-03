// Screenshot every page at desktop + mobile width, light + dark, for visual review.
// Usage: node scripts/shots.mjs [baseUrl] [pathFilter]
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = process.argv[2] ?? "http://localhost:4321";
const filter = process.argv[3] ?? "";
const pages = ["/", "/work/", "/work/field-service-marketplace/", "/work/mindmemo/", "/work/ecommerce-app/", "/about/", "/hire/", "/cv/", "/404"].filter((p) =>
  p.includes(filter),
);
const viewports = [
  { name: "desktop", width: 1366, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

await mkdir("shots", { recursive: true });
// GPU compositing hangs full-page screenshots on this Intel Mac.
const browser = await chromium.launch({ args: ["--disable-gpu"] });
const problems = [];
for (const scheme of ["light", "dark"]) {
  for (const vp of viewports) {
    // Reduced motion so scroll-reveal content is visible in full-page captures.
    const ctx = await browser.newContext({ viewport: vp, colorScheme: scheme, deviceScaleFactor: 1, reducedMotion: "reduce" });
    const page = await ctx.newPage();
    page.on("console", (m) => m.type() === "error" && problems.push(`console ${vp.name} ${m.text()}`));
    page.on("pageerror", (e) => problems.push(`pageerror ${e.message}`));
    for (const path of pages) {
      const res = await page.goto(base + path, { waitUntil: "load" });
      if (!res || (res.status() >= 400 && path !== "/404")) problems.push(`HTTP ${res?.status()} ${path}`);
      // Horizontal overflow is the most common mobile layout bug.
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 1) problems.push(`overflow ${overflow}px ${vp.name} ${path}`);
      const slug = path === "/" ? "home" : path.replaceAll("/", "_").replace(/^_|_$/g, "");
      const file = `shots/${slug}-${vp.name}-${scheme}.png`;
      // Headless screenshots hang intermittently on this machine; retry once, then report.
      let shot = false;
      for (let attempt = 0; attempt < 2 && !shot; attempt++) {
        try {
          await page.screenshot({ path: file, fullPage: true, timeout: 60000 });
          shot = true;
        } catch {
          await page.reload({ waitUntil: "load" });
        }
      }
      if (!shot) problems.push(`screenshot failed ${file}`);
      console.log(`${shot ? "ok  " : "FAIL"} ${file}`);
    }
    await ctx.close();
  }
}
await browser.close();
console.log(problems.length ? problems.join("\n") : "no problems detected");
