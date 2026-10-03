import { defineCollection, reference } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

// Every layer a visitor can filter by. Order here is the column order of the
// contribution matrix on the home page.
export const LAYERS = [
  "mobile",
  "api",
  "web",
  "payments",
  "ai",
  "data",
  "infra",
] as const;

const yearMonth = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, "use YYYY-MM");

const link = z.object({
  label: z.string(),
  url: z.url().or(z.string().startsWith("/")),
  kind: z.enum(["live", "case-study", "code", "store", "video", "post"]),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(140),
      kind: z.enum(["client", "personal", "course", "internship", "academic"]),
      org: z.string().optional(),
      role: z.string(),
      start: yearMonth,
      end: yearMonth.or(z.literal("present")),
      team: z.string().optional(),
      // Layers Zain personally wrote code in.
      layers: z.array(z.enum(LAYERS)).min(1),
      myWork: z.array(z.string()).min(1).max(5),
      teamWork: z.string().optional(),
      results: z.array(z.string()).default([]),
      stack: z.array(z.string()),
      links: z.array(link).default([]),
      cover: image().optional(),
      screens: z.array(image()).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      // false = claim comes from Zain's own CV and still needs owner sign-off.
      verified: z.boolean().default(false),
    }),
});

const experience = defineCollection({
  loader: file("./src/content/experience.json"),
  schema: z.object({
    org: z.string(),
    title: z.string(),
    place: z.string(),
    start: yearMonth,
    end: yearMonth.or(z.literal("present")),
    summary: z.string(),
    projects: z.array(reference("projects")).default([]),
  }),
});

const skills = defineCollection({
  loader: file("./src/content/skills.json"),
  schema: z.object({
    group: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        evidence: z.array(reference("projects")).default([]),
      }),
    ),
  }),
});

export const collections = { projects, experience, skills };
