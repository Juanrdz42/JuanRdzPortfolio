import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types/portfolio";
import { BackButton, MetricCard, SectionLabel, TechChip } from "../components/shared/PortfolioUI";

export function ProjectPage({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="max-w-[820px] mx-auto px-10 py-9"
    >
      <BackButton onClick={onBack} />

      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden mb-8 border border-[#294F70] bg-[#04111F]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07182C]/80 via-[#07182C]/20 to-transparent" />
        <div className="absolute bottom-6 left-7">
          <h1 className="text-4xl font-semibold text-[#F4F7FB] tracking-tight mb-1">{project.name}</h1>
          <p className="text-[#9EB1C4] text-sm">{project.tagline}</p>
        </div>
      </div>

      {/* Tech + Buttons row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-9">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechChip key={t} label={t} />
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B2740] border border-[#294F70] text-xs font-mono text-[#9EB1C4] hover:text-[#F4F7FB] hover:border-[#0A84FF]/60 transition-all"
          >
            <Github size={13} />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A84FF] text-xs font-mono text-white hover:bg-[#0070d4] transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Content sections */}
      <div className="space-y-9">
        <div>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-[#9EB1C4] leading-relaxed text-sm">{project.overview}</p>
        </div>

        <div>
          <SectionLabel>My Contribution</SectionLabel>
          <p className="text-[#9EB1C4] leading-relaxed text-sm">{project.contribution}</p>
        </div>

        <div>
          <SectionLabel>Architecture</SectionLabel>
          <div className="bg-[#04111F] border border-[#294F70] rounded-xl p-5">
            <p className="text-[#9EB1C4] font-mono text-xs leading-relaxed">{project.architecture}</p>
          </div>
        </div>

        <div>
          <SectionLabel>Key Metrics</SectionLabel>
          <div className="grid grid-cols-4 gap-3">
            {project.metrics.map((m) => (
              <MetricCard key={m.label} label={m.label} value={m.value} />
            ))}
          </div>
        </div>

        <div>
          <SectionLabel>Gallery</SectionLabel>
          <div className="grid grid-cols-3 gap-3">
            {project.gallery.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-[#294F70] bg-[#04111F]">
                <img
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  className="w-full h-36 object-cover opacity-90"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionLabel>Challenges</SectionLabel>
          <p className="text-[#9EB1C4] leading-relaxed text-sm">{project.challenges}</p>
        </div>

        <div className="pb-12">
          <SectionLabel>Lessons Learned</SectionLabel>
          <p className="text-[#9EB1C4] leading-relaxed text-sm">{project.lessons}</p>
        </div>
      </div>
    </motion.div>
  );
}
