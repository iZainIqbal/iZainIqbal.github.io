import type { CollectionEntry } from "astro:content";
import { LAYERS } from "../content.config";

export type Layer = (typeof LAYERS)[number];

export const LAYER_LABEL: Record<Layer, string> = {
  mobile: "Mobile app",
  api: "Backend / API",
  web: "Web frontend",
  payments: "Payments",
  ai: "AI features",
  data: "Data & ETL",
  infra: "DevOps",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatMonth(ym: string): string {
  const [y, m] = ym.split("-");
  return `${MONTHS[Number(m) - 1]} ${y}`;
}

export function formatPeriod(start: string, end: string): string {
  // Something that hasn't begun yet reads as "Starting ...", never "... to Present".
  const now = new Date().toISOString().slice(0, 7);
  if (start > now) return `Starting ${formatMonth(start)}`;
  const to = end === "present" ? "Present" : formatMonth(end);
  return start === end ? formatMonth(start) : `${formatMonth(start)} - ${to}`;
}

// Sort key: ongoing work first, then most recent end date.
export function recency(p: CollectionEntry<"projects">): string {
  return p.data.end === "present" ? "9999-99" : p.data.end;
}

export function byOrder(a: CollectionEntry<"projects">, b: CollectionEntry<"projects">): number {
  return a.data.order - b.data.order || recency(b).localeCompare(recency(a));
}

// Skill groups in reading order: what employers ask about first.
const SKILL_ORDER = ["web", "backend", "mobile", "payments", "ai", "data"];
export function sortSkills<T extends { id: string }>(groups: T[]): T[] {
  return [...groups].sort((a, b) => SKILL_ORDER.indexOf(a.id) - SKILL_ORDER.indexOf(b.id));
}
