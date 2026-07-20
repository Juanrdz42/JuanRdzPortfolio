import type { Page } from "../types/portfolio";
import { projects } from "./portfolio";

export interface NavigationFile {
  label: string;
  page: Page;
}

export interface NavigationGroup {
  id: "projects" | "leadership";
  label: string;
  files: NavigationFile[];
}

export const rootFiles: NavigationFile[] = [
  { label: "Home.tsx", page: "home" },
  { label: "About.tsx", page: "about" },
  { label: "Experience.tsx", page: "experience" },
];

export const navigationGroups: NavigationGroup[] = [
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
    files: [{ label: "SEITC.tsx", page: "leadership" }],
  },
];

export const trailingFiles: NavigationFile[] = [
  { label: "Contact.tsx", page: "contact" },
];

export const topNavigation: Array<{ label: string; page: Page }> = [
  { label: "About", page: "about" },
  { label: "Experience", page: "experience" },
  { label: "Projects", page: "home" },
  { label: "Leadership", page: "leadership" },
  { label: "Contact", page: "contact" },
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
