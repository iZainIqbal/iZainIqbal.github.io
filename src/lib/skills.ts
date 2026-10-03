import type { CollectionEntry } from "astro:content";
import type { Layer } from "./format";

type Project = CollectionEntry<"projects">;

// Skills a visitor can click on the home page. Each one is proven by the
// projects that match it, using only fields already in the project files, so
// the "Used in N projects" counts stay true when projects change.
export interface Skill {
  key: string;
  label: string;
  matches: (p: Project) => boolean;
}

const hasLayer = (layer: Layer) => (p: Project) =>
  p.data.layers.includes(layer);
const inStack = (re: RegExp) => (p: Project) =>
  p.data.stack.some((s) => re.test(s));

// Keys that equal a layer reuse that layer's filter button on the Work page.
export const SPECIALITIES: Skill[] = [
  { key: "web", label: "Web platforms", matches: hasLayer("web") },
  { key: "api", label: "Backends & APIs", matches: hasLayer("api") },
  { key: "mobile", label: "Mobile apps", matches: hasLayer("mobile") },
  {
    key: "payments",
    label: "Payments & sign-in",
    matches: hasLayer("payments"),
  },
  { key: "ai", label: "AI features", matches: hasLayer("ai") },
  {
    key: "seo",
    label: "Technical SEO",
    matches: (p) => /\bSEO\b/.test(`${p.data.role} ${p.data.myWork.join(" ")}`),
  },
];

export const STACK: Skill[] = [
  { key: "react", label: "React", matches: inStack(/^React$/i) },
  { key: "typescript", label: "TypeScript", matches: inStack(/^TypeScript$/i) },
  { key: "fastapi", label: "FastAPI", matches: inStack(/^FastAPI$/i) },
  // FastAPI and pandas only run on Python, so those projects count as Python.
  {
    key: "python",
    label: "Python",
    matches: inStack(/^(Python|FastAPI|pandas)$/i),
  },
  { key: "flutter", label: "Flutter", matches: inStack(/^Flutter$/i) },
  { key: "postgresql", label: "PostgreSQL", matches: inStack(/^PostgreSQL$/i) },
  { key: "strapi", label: "Strapi", matches: inStack(/^Strapi/i) },
  {
    key: "firebase",
    label: "Firebase",
    matches: inStack(/Firebase|Firestore|FCM|Realtime Database/i),
  },
];

export const SKILLS = [...SPECIALITIES, ...STACK];

export function skillKeys(p: Project): string[] {
  return SKILLS.filter((s) => s.matches(p)).map((s) => s.key);
}
