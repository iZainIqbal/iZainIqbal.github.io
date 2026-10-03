// Renders the 1200×630 social preview image into public/og.png.
import { chromium } from "playwright";
import { readFile } from "node:fs/promises";

const photo = (await readFile("src/assets/profilepicture.webp")).toString("base64");
const html = `<!doctype html><html><body style="margin:0">
<div style="width:1200px;height:630px;box-sizing:border-box;padding:72px 80px;background:#f7f6f2;
  font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;color:#15171c;display:flex;gap:56px;align-items:center">
  <div style="flex:1">
    <div style="font:600 22px ui-monospace,Menlo,monospace;letter-spacing:.08em;color:#5f6674;text-transform:uppercase">Full-stack engineer · React, FastAPI, Flutter</div>
    <div style="font-size:76px;font-weight:800;letter-spacing:-.03em;line-height:1.02;margin-top:22px">Zain Iqbal</div>
    <div style="font-size:36px;line-height:1.3;color:#3d434f;margin-top:22px">Web platforms, mobile apps and AI features, built with React, FastAPI and Flutter.</div>
    <div style="font-size:26px;color:#1d4ed8;font-weight:600;margin-top:34px">izainiqbal.github.io</div>
  </div>
  <div style="width:300px;height:300px;border-radius:50%;overflow:hidden;border:2px solid #e2dfd7;flex:none">
    <img src="data:image/webp;base64,${photo}" style="width:100%;height:100%;object-fit:cover;transform:scale(1.12)">
  </div>
</div></body></html>`;

const browser = await chromium.launch({ args: ["--disable-gpu"] });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "load" });
await page.screenshot({ path: "public/og.png" });
await browser.close();
console.log("wrote public/og.png");
