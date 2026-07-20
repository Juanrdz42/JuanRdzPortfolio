export type Page =
  | "home"
  | "about"
  | "experience"
  | "leadership"
  | "contact"
  | "project-oasis"
  | "project-ensenname"
  | "project-awaq";

export interface Project {
  id: Page;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  overview: string;
  contribution: string;
  architecture: string;
  metrics: { label: string; value: string }[];
  gallery: string[];
  challenges: string;
  lessons: string;
  github: string;
  demo?: string;
}
