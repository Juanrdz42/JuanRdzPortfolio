import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Hero } from "../components/home/Hero";
import { ExperienceHighlights } from "../components/home/ExperienceHighlights";
import { SkillsOverview } from "../components/home/SkillsOverview";
import { TechChip } from "../components/shared/PortfolioUI";
import { projects } from "../data/portfolio";
import type { Page } from "../types/portfolio";

export function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
    >
      <Hero onViewProjects={scrollToProjects} onViewExperience={scrollToExperience} />
      <SkillsOverview />
      <ExperienceHighlights ref={experienceRef} onNavigate={onNavigate} />

      <section ref={projectsRef} className="scroll-mt-4 px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-7 font-mono text-xs uppercase tracking-[0.15em] text-[var(--xcode-orange-soft)]">
            Projects
          </p>

          <div className="flex flex-col gap-5">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => onNavigate(project.id)}
                className="glass-card glass-card-interactive group overflow-hidden rounded-2xl text-left transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-stretch">
                  <div className="aspect-video flex-shrink-0 overflow-hidden border-b border-[#6AA3D8]/15 bg-[#031D31]/70 sm:w-[46%] sm:border-b-0 sm:border-r lg:w-[44%]">
                    <img
                      src={project.image}
                      alt={`Portada del proyecto ${project.name}`}
                      className="h-full w-full object-contain opacity-90 transition-all duration-500 group-hover:scale-[1.01] group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between px-6 py-6 sm:px-8 sm:py-7">
                    <div>
                      <div className="mb-2 flex items-start justify-between">
                        <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FB]">{project.name}</h2>
                        <span className="flex items-center gap-1 font-mono text-xs text-[#9EB1C4] opacity-0 transition-opacity group-hover:opacity-100">
                          Open
                          <ChevronRight size={12} />
                        </span>
                      </div>
                      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-[#A7BACD]">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 5).map((technology) => (
                          <TechChip key={technology} label={technology} />
                        ))}
                        {project.tech.length > 5 && (
                          <span className="ml-0.5 self-center font-mono text-xs text-[#9EB1C4]">
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
      </section>
    </motion.div>
  );
}
