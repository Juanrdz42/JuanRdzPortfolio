import { ChevronRight, Download } from "lucide-react";
import { RESUME_PATH } from "../../config/site";
import { personal } from "../../data/personal";
import { CodePreview } from "./CodePreview";
import { QuickInfo } from "./QuickInfo";

export function Hero({ onViewProjects }: { onViewProjects: () => void }) {
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

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onViewProjects}
              className="xcode-primary-button inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-mono text-sm font-medium transition-colors"
            >
              View Projects
              <ChevronRight size={15} />
            </button>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="xcode-secondary-button inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-mono text-sm transition-colors"
            >
              <Download size={15} />
              Resume
            </a>
          </div>
        </div>

        <CodePreview />
      </div>
    </section>
  );
}
