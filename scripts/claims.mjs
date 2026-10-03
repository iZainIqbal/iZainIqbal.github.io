// Lists projects whose claims still need owner sign-off (verified: false).
import { readdir, readFile } from "node:fs/promises";

const dir = "src/content/projects";
const pending = [];
for (const f of (await readdir(dir)).filter((n) => n.endsWith(".md"))) {
  const text = await readFile(`${dir}/${f}`, "utf8");
  if (!/^verified:\s*true\s*$/m.test(text)) pending.push(f);
}
console.log(pending.length ? `Unverified (${pending.length}):\n- ${pending.join("\n- ")}` : "All projects verified.");
process.exitCode = pending.length ? 1 : 0;
