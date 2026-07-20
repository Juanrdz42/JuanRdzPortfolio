import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { projects } from "../data/portfolio";
import type { Page } from "../types/portfolio";
import { TechChip } from "../components/shared/PortfolioUI";

export function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
    >
      {/* Hero */}
      <div
        className="px-10 pt-14 pb-12 border-b border-[#294F70]/50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(41,79,112,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(41,79,112,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <p className="text-[10px] font-mono text-[#0A84FF] tracking-[0.18em] uppercase mb-4">
          Software Engineer
        </p>
        <h1 className="text-[52px] font-semibold text-[#F4F7FB] leading-[1.1] mb-4 tracking-tight">
          Juan Antonio
          <br />
          Rodríguez
        </h1>
        <p className="text-[#9EB1C4] text-base max-w-md leading-relaxed">
          Building AI, IoT, and Full-Stack products
          <br />
          that work in the real world.
        </p>

        <div className="flex gap-3 mt-8">
          <button
            onClick={() => onNavigate("about")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A84FF] text-white text-xs font-mono font-medium hover:bg-[#0070d4] transition-colors"
          >
            View Work
            <ChevronRight size={13} />
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B2740] border border-[#294F70] text-[#9EB1C4] text-xs font-mono hover:text-[#F4F7FB] hover:border-[#0A84FF]/50 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Projects */}
      <div className="px-10 py-9">
        <p className="text-[10px] font-mono text-[#9EB1C4] uppercase tracking-[0.15em] mb-6">
          Selected Projects
        </p>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => onNavigate(project.id)}
              className="group text-left bg-[#0B2740] border border-[#294F70] rounded-2xl overflow-hidden hover:border-[#0A84FF]/50 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(10,132,255,0.06)]"
            >
              <div className="flex">
                <div className="w-64 flex-shrink-0 bg-[#04111F] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                    style={{ minHeight: "160px" }}
                  />
                </div>
                <div className="flex-1 px-7 py-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-[#F4F7FB] tracking-tight">{project.name}</h3>
                      <span className="text-[10px] font-mono text-[#9EB1C4] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        Open
                        <ChevronRight size={10} />
                      </span>
                    </div>
                    <p className="text-[#9EB1C4] text-xs leading-relaxed mb-5 max-w-md">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 5).map((t) => (
                        <TechChip key={t} label={t} />
                      ))}
                      {project.tech.length > 5 && (
                        <span className="text-[10px] font-mono text-[#9EB1C4] self-center ml-0.5">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
