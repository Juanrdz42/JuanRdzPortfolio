import { Download, Github, Linkedin } from "lucide-react";
import { clsx } from "clsx";
import type { Page } from "../../types/portfolio";

export function Toolbar({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}) {
  const navItems: { label: string; page: Page }[] = [
    { label: "About", page: "about" },
    { label: "Experience", page: "experience" },
    { label: "Projects", page: "home" },
    { label: "Leadership", page: "leadership" },
    { label: "Contact", page: "contact" },
  ];

  const isProjectPage = currentPage.startsWith("project-");
  const activeNavPage =
    isProjectPage ? "home" : currentPage;

  return (
    <header className="col-span-2 h-10 flex-shrink-0 border-b border-[#294F70] bg-[#04111F] flex items-center px-4 gap-3">
      {/* Traffic lights */}
      <div className="flex items-center gap-[5px] mr-1">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>

      <button
        onClick={() => onNavigate("home")}
        className="text-[11px] font-mono text-[#F4F7FB]/70 hover:text-[#0A84FF] transition-colors"
      >
        jar.portfolio
      </button>

      <span className="h-3.5 w-px bg-[#294F70]" />

      <nav className="flex items-center gap-0.5">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={clsx(
              "px-3 py-1 rounded text-[11px] font-mono transition-colors",
              activeNavPage === item.page
                ? "text-[#0A84FF] bg-[#0A84FF]/10"
                : "text-[#9EB1C4] hover:text-[#F4F7FB]"
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex-1" />

      <div className="flex items-center gap-1.5">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-mono text-[#9EB1C4] hover:text-[#F4F7FB] border border-[#294F70] hover:border-[#0A84FF]/40 transition-colors"
        >
          <Download size={11} />
          Resume
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-mono text-[#9EB1C4] hover:text-[#F4F7FB] border border-[#294F70] hover:border-[#0A84FF]/40 transition-colors"
        >
          <Github size={11} />
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-mono bg-[#0A84FF] text-white hover:bg-[#0070d4] transition-colors"
        >
          <Linkedin size={11} />
          LinkedIn
        </a>
      </div>
    </header>
  );
}
