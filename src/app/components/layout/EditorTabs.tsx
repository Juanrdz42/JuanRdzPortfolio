import { FileCode2, X } from "lucide-react";
import { clsx } from "clsx";
import type { EditorTab } from "../../hooks/useEditorTabs";
import type { Page } from "../../types/portfolio";

interface EditorTabsProps {
  tabs: EditorTab[];
  activePage: Page | null;
  isContentScrolled: boolean;
  onActivate: (page: Page) => void;
  onClose: (page: Page) => void;
}

export function EditorTabs({ tabs, activePage, isContentScrolled, onActivate, onClose }: EditorTabsProps) {
  return (
    <div
      className={clsx(
        "editor-tabs relative z-10 flex h-10 min-w-0 items-end overflow-x-auto border-b border-[#376B99]/25 transition-shadow duration-200 [scrollbar-width:none]",
        isContentScrolled && "editor-tabs-scrolled",
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.page === activePage;

        return (
          <div
            key={tab.page}
            className={clsx(
              "group flex h-9 min-w-[132px] max-w-[190px] items-center gap-2 border-r border-[#376B99]/20 px-3 font-mono text-xs transition-colors",
              isActive
                ? "bg-[#173B61] text-[#D7E7F6] shadow-[inset_0_2px_0_#0A84FF]"
                : "bg-[#0A2542]/55 text-[#7894AD] hover:bg-[#123453]/70 hover:text-[#ABC4DA]",
            )}
          >
            <button
              type="button"
              onClick={() => onActivate(tab.page)}
              className="flex min-w-0 flex-1 items-center gap-2 self-stretch text-left"
            >
              <FileCode2 size={13} className={isActive ? "text-[#26A1FF]" : "text-[#54738F]"} />
              <span className="min-w-0 flex-1 truncate">{tab.label}</span>
            </button>
            <button
              type="button"
              aria-label={`Close ${tab.label}`}
              onClick={(event) => {
                event.stopPropagation();
                onClose(tab.page);
              }}
              className={clsx(
                "grid h-5 w-5 place-items-center rounded transition-colors hover:bg-white/10 hover:text-white",
                isActive ? "opacity-70" : "opacity-0 group-hover:opacity-60 group-focus-visible:opacity-60",
              )}
            >
              <X size={12} />
            </button>
          </div>
        );
      })}

      {tabs.length === 0 && (
        <span className="flex h-9 items-center px-4 font-mono text-xs text-[#607D97]">No Open Editors</span>
      )}
    </div>
  );
}
