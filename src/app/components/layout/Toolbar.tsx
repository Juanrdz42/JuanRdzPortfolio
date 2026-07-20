import { Download, Github, Linkedin } from "lucide-react";
import { clsx } from "clsx";
import { RESUME_PATH, SOCIAL_LINKS } from "../../config/site";
import { topNavigation } from "../../data/navigation";
import type { Page } from "../../types/portfolio";

export function Toolbar({
  currentPage,
  onNavigate,
}: {
  currentPage: Page | null;
  onNavigate: (page: Page) => void;
}) {
  const isProjectPage = currentPage?.startsWith("project-") ?? false;
  const activeNavPage =
    isProjectPage ? "home" : currentPage;

  return (
    <header className="xcode-titlebar relative z-10 col-span-2 h-14 flex-shrink-0 flex items-center px-5 gap-3.5">
      {/* Traffic lights */}
      <div className="toolbar-traffic-lights mr-1 flex items-center gap-[5px]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>

      <button type="button" onClick={() => onNavigate("home")} className="toolbar-brand group flex items-center gap-2">
        <span className="xcode-app-icon grid h-7 w-7 place-items-center rounded-md">
          <span className="font-mono text-[10px] font-bold tracking-[-0.08em]">JR</span>
        </span>
        <span className="text-[13px] font-semibold text-[#C1D3E4] group-hover:text-[#D8ECFF] transition-colors">
          jarr.portfolio
        </span>
      </button>

      <span className="h-3.5 w-px bg-[#294F70]" />

      <nav className="toolbar-navigation xcode-segmented flex items-center overflow-x-auto rounded-lg p-0.5 [scrollbar-width:none]">
        {topNavigation.map((item) => (
          <button
            key={item.page}
            type="button"
            onClick={() => onNavigate(item.page)}
            className={clsx(
              "px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors",
              activeNavPage === item.page
                ? "xcode-segment-active"
                : "text-[#829CB4] hover:text-[#B6D5EF] hover:bg-[#183D63]/45"
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex-1" />

      <div className="toolbar-actions flex items-center gap-1.5">
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="xcode-tool-button inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors"
        >
          <Download size={11} />
          Resume
        </a>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="xcode-tool-button inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors"
        >
          <Github size={11} />
          GitHub
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="xcode-tool-button inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors"
        >
          <Linkedin size={11} />
          LinkedIn
        </a>
      </div>
    </header>
  );
}
