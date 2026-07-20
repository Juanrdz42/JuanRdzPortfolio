import { useState } from "react";
import { ChevronDown, ChevronRight, FileCode, Folder, FolderOpen } from "lucide-react";
import { clsx } from "clsx";
import type { Page } from "../../types/portfolio";

export function Sidebar({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}) {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [leadershipOpen, setLeadershipOpen] = useState(true);

  const fileItem = (label: string, page: Page, depth = 0) => (
    <button
      key={page}
      onClick={() => onNavigate(page)}
      className={clsx(
        "w-full flex items-center gap-2 px-2.5 py-[5px] rounded text-left transition-colors duration-150",
        depth === 1 && "pl-7",
        currentPage === page
          ? "bg-[#0A84FF]/12 text-[#F4F7FB]"
          : "text-[#9EB1C4] hover:text-[#F4F7FB] hover:bg-white/[0.04]"
      )}
    >
      <FileCode
        size={12}
        className={clsx("flex-shrink-0", currentPage === page ? "text-[#0A84FF]" : "opacity-40")}
      />
      <span className="text-[11px] font-mono truncate">{label}</span>
    </button>
  );

  return (
    <aside className="border-r border-[#294F70] bg-[#04111F] flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto [scrollbar-width:none] py-3.5 px-2">
        {/* Root folder */}
        <div className="flex items-center gap-1.5 px-2.5 mb-3">
          <FolderOpen size={12} className="text-[#0A84FF] flex-shrink-0" />
          <span className="text-[11px] font-mono text-[#9EB1C4] font-medium truncate">
            juan-antonio
          </span>
        </div>

        <div className="space-y-0.5">
          {fileItem("About.tsx", "about")}
          {fileItem("Experience.tsx", "experience")}

          {/* Projects folder */}
          <button
            onClick={() => setProjectsOpen((v) => !v)}
            className="w-full flex items-center gap-1.5 px-2.5 py-[5px] rounded text-xs text-[#9EB1C4] hover:text-[#F4F7FB] transition-colors hover:bg-white/[0.04]"
          >
            {projectsOpen ? (
              <ChevronDown size={10} className="flex-shrink-0" />
            ) : (
              <ChevronRight size={10} className="flex-shrink-0" />
            )}
            <Folder size={12} className="text-[#0A84FF]/60 flex-shrink-0" />
            <span className="text-[11px] font-mono">Projects</span>
          </button>

          {projectsOpen && (
            <div className="space-y-0.5">
              {fileItem("Oasis.tsx", "project-oasis", 1)}
              {fileItem("EnSeñame.tsx", "project-ensenname", 1)}
              {fileItem("AWAQ.tsx", "project-awaq", 1)}
            </div>
          )}

          {/* Leadership folder */}
          <button
            onClick={() => setLeadershipOpen((v) => !v)}
            className="w-full flex items-center gap-1.5 px-2.5 py-[5px] rounded text-xs text-[#9EB1C4] hover:text-[#F4F7FB] transition-colors hover:bg-white/[0.04]"
          >
            {leadershipOpen ? (
              <ChevronDown size={10} className="flex-shrink-0" />
            ) : (
              <ChevronRight size={10} className="flex-shrink-0" />
            )}
            <Folder size={12} className="text-[#0A84FF]/60 flex-shrink-0" />
            <span className="text-[11px] font-mono">Leadership</span>
          </button>

          {leadershipOpen && (
            <div className="space-y-0.5">
              {fileItem("SEITC.tsx", "leadership", 1)}
            </div>
          )}

          {fileItem("Contact.tsx", "contact")}
        </div>
      </div>

      {/* Status bar */}
      <div className="border-t border-[#294F70] px-3 py-2 flex-shrink-0">
        <p className="text-[10px] font-mono text-[#9EB1C4]/50 truncate">
          TypeScript JSX · UTF-8
        </p>
      </div>
    </aside>
  );
}
