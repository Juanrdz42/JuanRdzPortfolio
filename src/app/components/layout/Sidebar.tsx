import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, ChevronRight, FileCode, Folder, FolderOpen } from "lucide-react";
import { clsx } from "clsx";
import {
  navigationGroups,
  rootFiles,
  trailingFiles,
  type NavigationFile,
} from "../../data/navigation";
import type { Page } from "../../types/portfolio";

export function Sidebar({
  currentPage,
  onNavigate,
}: {
  currentPage: Page | null;
  onNavigate: (page: Page) => void;
}) {
  const reduceMotion = useReducedMotion();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    experience: true,
    projects: true,
    leadership: true,
  });

  const toggleGroup = (groupId: string) => {
    setOpenGroups((current) => ({ ...current, [groupId]: !current[groupId] }));
  };

  const renderFile = (file: NavigationFile, nested = false) => {
    const isActive = currentPage === file.page;

    return (
      <button
        key={file.page}
        type="button"
        onClick={() => onNavigate(file.page)}
        className={clsx(
          "relative flex w-full items-center gap-2.5 rounded-md px-3 py-[7px] text-left transition-colors duration-150",
          nested && "pl-8",
          isActive
            ? "xcode-selection text-[#F4F7FB]"
            : "text-[#8FA7BC] hover:bg-white/[0.04] hover:text-[#D5E5F3]",
        )}
      >
        {isActive && <span className="absolute bottom-1.5 left-0 top-1.5 w-0.5 rounded-full bg-[#0A84FF]" />}
        <FileCode
          size={14}
          className={clsx("flex-shrink-0", isActive ? "text-[#22A0FF]" : "text-[#526F88]")}
        />
        <span className="truncate font-mono text-[13px]">{file.label}</span>
      </button>
    );
  };

  return (
    <aside className="glass-sidebar relative z-[1] flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto px-2.5 py-4 [scrollbar-width:none]">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="mb-3.5 flex w-full items-center gap-2 rounded-md px-3 py-1 text-left text-[#A6BACD] transition-colors hover:text-white"
        >
          <FolderOpen size={14} className="flex-shrink-0 text-[#0A84FF]" />
          <span className="truncate font-mono text-[13px] font-medium">juan-antonio</span>
        </button>

        <div className="space-y-0.5">
          {rootFiles.map((file) => renderFile(file))}

          {navigationGroups.map((group) => {
            const isOpen = openGroups[group.id];

            return (
              <div key={group.id}>
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-2 rounded-md px-3 py-[7px] text-left text-[13px] text-[#8FA7BC] transition-colors hover:bg-white/[0.04] hover:text-[#D5E5F3]"
                >
                  {isOpen ? <ChevronDown size={11} /> : <ChevronRight size={11} />}
                  <Folder size={14} className="flex-shrink-0 text-[#168FEA]" />
                  <span className="font-mono">{group.label}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-0.5">{group.files.map((file) => renderFile(file, true))}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {trailingFiles.map((file) => renderFile(file))}
        </div>
      </div>

      <div className="flex-shrink-0 border-t border-[#376B99]/25 px-3 py-2.5">
        <p className="truncate font-mono text-[11px] text-[#7892AA]">TypeScript JSX · UTF-8</p>
      </div>
    </aside>
  );
}
