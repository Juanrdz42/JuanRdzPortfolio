import { ChevronRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { RESUME_PATH, SOCIAL_LINKS } from "../../config/site";
import { personal } from "../../data/personal";
import { CodePreview } from "./CodePreview";
import { QuickInfo } from "./QuickInfo";

export function Hero({
  onViewProjects,
  onViewExperience,
}: {
  onViewProjects: () => void;
  onViewExperience: () => void;
}) {
  return (
    <section
      className="relative overflow-hidden border-b border-[#6AA3D8]/20 px-6 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(41,79,112,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(41,79,112,0.07) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] xl:gap-16">
        <div className="min-w-0">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-[var(--xcode-orange-soft)]">
            {personal.degree}
          </p>

          <h1 className="mb-5 max-w-3xl text-[clamp(2.75rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-[#F4F7FB] transition-colors duration-300 hover:text-[#DCEEFF]">
            {personal.name}
          </h1>

          <p className="mb-6 max-w-[680px] text-base leading-7 text-[#A7BACD] sm:text-[17px]">
            {personal.description}
          </p>

          <QuickInfo />

          <div className="mt-8 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onViewProjects}
                className="xcode-primary-button inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-mono text-sm font-medium transition-colors"
              >
                View Projects
                <ChevronRight size={15} />
              </button>
              <button
                type="button"
                onClick={onViewExperience}
                className="xcode-secondary-button inline-flex h-11 items-center gap-2 rounded-lg px-5 font-mono text-sm transition-colors"
              >
                Work &amp; Leadership
                <ChevronRight size={15} />
              </button>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-resume-button inline-flex h-11 items-center gap-3 rounded-full px-6 text-sm font-semibold transition-colors"
              >
                Resume
                <Download size={17} />
              </a>
            </div>

            <div className="flex items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="hero-social-button grid h-11 w-11 place-items-center rounded-full transition-colors"
              aria-label="Send Juan an email"
              title="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-button grid h-11 w-11 place-items-center rounded-full transition-colors"
              aria-label="Open Juan's LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-button grid h-11 w-11 place-items-center rounded-full transition-colors"
              aria-label="Open Juan's GitHub profile"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            </div>
          </div>
        </div>

        <CodePreview />
      </div>
    </section>
  );
}
