import { useState, type ReactNode } from "react";
import { Download, FileCode2, Folder, Github, Linkedin, Menu } from "lucide-react";
import { clsx } from "clsx";
import { RESUME_PATH, SOCIAL_LINKS } from "../../config/site";
import {
  navigationGroups,
  rootFiles,
  topNavigation,
  trailingFiles,
  type NavigationFile,
} from "../../data/navigation";
import type { Page } from "../../types/portfolio";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";

export function Toolbar({
  currentPage,
  onNavigate,
}: {
  currentPage: Page | null;
  onNavigate: (page: Page) => void;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        <span className="toolbar-brand-label text-[13px] font-semibold text-[#C1D3E4] transition-colors group-hover:text-[#D8ECFF]">
          jarr.portfolio
        </span>
      </button>

      <span className="h-3.5 w-px bg-[#294F70]" />

      <nav className="toolbar-navigation xcode-segmented hidden items-center overflow-x-auto rounded-lg p-0.5 [scrollbar-width:none] sm:flex">
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

      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="xcode-tool-button inline-flex h-9 items-center gap-2 rounded-lg px-3 font-mono text-xs sm:hidden"
          aria-label="Open navigation"
        >
          <Menu size={16} />
          Menu
        </button>
        <SheetContent
          side="right"
          className="w-[min(88vw,360px)] gap-0 border-[#376B99]/35 bg-[#071D35] p-0 text-[#D7E7F6]"
        >
          <SheetHeader className="border-b border-[#376B99]/25 px-5 py-5 text-left">
            <SheetTitle className="font-mono text-base text-[#F4F7FB]">Project Navigator</SheetTitle>
            <SheetDescription className="font-mono text-xs text-[#7897B2]">
              Choose a file to explore
            </SheetDescription>
          </SheetHeader>

          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <div className="space-y-1">
              {rootFiles.map((file) => (
                <MobileNavigationItem
                  key={file.page}
                  file={file}
                  currentPage={currentPage}
                  onNavigate={(page) => {
                    onNavigate(page);
                    setIsMobileMenuOpen(false);
                  }}
                />
              ))}
            </div>

            {navigationGroups.map((group) => (
              <div key={group.id} className="mt-5">
                <div className="mb-2 flex items-center gap-2 px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#6887A2]">
                  <Folder size={13} className="text-[#168FEA]" />
                  {group.label}
                </div>
                <div className="space-y-1">
                  {group.files.map((file) => (
                    <MobileNavigationItem
                      key={file.page}
                      file={file}
                      currentPage={currentPage}
                      onNavigate={(page) => {
                        onNavigate(page);
                        setIsMobileMenuOpen(false);
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-5 space-y-1 border-t border-[#376B99]/20 pt-4">
              {trailingFiles.map((file) => (
                <MobileNavigationItem
                  key={file.page}
                  file={file}
                  currentPage={currentPage}
                  onNavigate={(page) => {
                    onNavigate(page);
                    setIsMobileMenuOpen(false);
                  }}
                />
              ))}
            </div>
          </nav>

          <div className="grid grid-cols-3 gap-2 border-t border-[#376B99]/25 p-4">
            <MobileLink href={RESUME_PATH} label="Resume" icon={<Download size={14} />} />
            <MobileLink href={SOCIAL_LINKS.github} label="GitHub" icon={<Github size={14} />} />
            <MobileLink href={SOCIAL_LINKS.linkedin} label="LinkedIn" icon={<Linkedin size={14} />} />
          </div>
        </SheetContent>
      </Sheet>

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

function MobileNavigationItem({
  file,
  currentPage,
  onNavigate,
}: {
  file: NavigationFile;
  currentPage: Page | null;
  onNavigate: (page: Page) => void;
}) {
  const isActive = currentPage === file.page;

  return (
    <button
      type="button"
      onClick={() => onNavigate(file.page)}
      className={clsx(
        "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left font-mono text-sm transition-colors",
        isActive
          ? "bg-[#1A4F7E] text-[#F4F7FB] shadow-[inset_2px_0_0_#0A84FF]"
          : "text-[#9AB0C4] hover:bg-white/[0.05] hover:text-[#DCEBFA]",
      )}
    >
      <FileCode2 size={15} className={isActive ? "text-[#2CA4FF]" : "text-[#587792]"} />
      <span className="truncate">{file.label}</span>
    </button>
  );
}

function MobileLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="xcode-tool-button flex flex-col items-center gap-1.5 rounded-lg px-2 py-2.5 font-mono text-[10px]"
    >
      {icon}
      {label}
    </a>
  );
}
