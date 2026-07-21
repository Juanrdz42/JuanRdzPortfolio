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
  contributionLabel?: string;
  architecture?: string;
  metrics?: { label: string; value: string }[];
  gallery: string[];
  galleryLabel?: string;
  galleryLabels?: string[];
  video?: string;
  videoLabel?: string;
  challenges?: string;
  challengesLabel?: string;
  lessons?: string;
  lessonsLabel?: string;
  github?: string;
  demo?: string;
}
