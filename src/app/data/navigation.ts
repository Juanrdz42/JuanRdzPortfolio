import type { Page } from "../types/portfolio";
import { projects } from "./portfolio";

export interface NavigationFile {
  label: string;
  page: Page;
}

export interface NavigationGroup {
  id: "experience" | "projects" | "leadership";
  label: string;
  files: NavigationFile[];
}

export const rootFiles: NavigationFile[] = [
  { label: "Home.tsx", page: "home" },
  { label: "About.tsx", page: "about" },
];

export const navigationGroups: NavigationGroup[] = [
  {
    id: "experience",
    label: "Experience",
    files: [{ label: "DataEngineer.tsx", page: "experience" }],
  },
  {
    id: "projects",
    label: "Projects",
    files: projects.map((project) => ({
      label: `${project.name}.tsx`,
      page: project.id,
    })),
  },
  {
    id: "leadership",
    label: "Leadership",
    files: [
      { label: "SEITC.tsx", page: "leadership" },
      { label: "Ciberistas.tsx", page: "leadership-ciberistas" },
      { label: "Runtime.tsx", page: "leadership-runtime" },
    ],
  },
];

export const trailingFiles: NavigationFile[] = [
  { label: "Contact.tsx", page: "contact" },
];

const pageLabels = new Map<Page, string>([
  ...rootFiles.map((file) => [file.page, file.label] as const),
  ...navigationGroups.flatMap((group) =>
    group.files.map((file) => [file.page, file.label] as const),
  ),
  ...trailingFiles.map((file) => [file.page, file.label] as const),
]);

export function getPageLabel(page: Page) {
  return pageLabels.get(page) ?? "Home.tsx";
}
