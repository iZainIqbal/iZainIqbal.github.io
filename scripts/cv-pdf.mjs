// Renders /cv from a running preview server into public/Zain_Iqbal_CV.pdf.
// Usage: npm run preview (in another terminal), then node scripts/cv-pdf.mjs
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:4321";
const browser = await chromium.launch({ args: ["--disable-gpu"] });
const page = await browser.newPage();
await page.emulateMedia({ colorScheme: "light", media: "print" });
await page.goto(`${base}/cv/`, { waitUntil: "load" });
await page.pdf({ path: "public/Zain_Iqbal_CV.pdf", format: "A4", printBackground: false, preferCSSPageSize: true });
await browser.close();
console.log("wrote public/Zain_Iqbal_CV.pdf");
