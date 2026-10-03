// Identity facts used across pages. Project/role facts live in src/content/.
export const profile = {
  name: "Zain Iqbal",
  headline: "Full-stack engineer: React, FastAPI, Flutter",
  location: "Pakistan · open to remote roles",
  email: "appdev.zain@gmail.com",
  linkedin: "https://www.linkedin.com/in/zain-iqbal-devs/",
  github: "https://github.com/iZainIqbal",
  flutterSince: "2023-09",
  cvPdf: "/Zain_Iqbal_CV.pdf",
} as const;

export const education = [
  {
    degree: "BS Computer Science",
    school: "University of Gujrat, Pakistan",
    start: "2021-11",
    end: "2025-05",
    note: undefined,
  },
] as const;

export const certifications = [
  "Introduction to Cloud Computing (IBM, 2024)",
  "Introduction to DevOps (IBM, 2024)",
  "Agile Development and Scrum (IBM, 2024)",
  "Python for Data Science, AI and Development (IBM, 2024)",
  "Fundamentals of Unity Android Game Development (2023)",
] as const;

export const nav = [
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/cv/", label: "CV" },
] as const;
