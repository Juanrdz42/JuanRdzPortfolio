import { motion } from "motion/react";
import { Calendar, ExternalLink, Github } from "lucide-react";
import type { Project } from "../types/portfolio";
import { BackButton, MetricCard, SectionLabel, TechChip } from "../components/shared/PortfolioUI";
import { ProjectCarousel } from "../components/shared/ProjectCarousel";

export function ProjectPage({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="mx-auto max-w-[960px] px-6 py-8 sm:px-12 sm:py-11"
    >
      <BackButton onClick={onBack} />

      <div className="mb-8">
        <h1 className="text-[42px] font-semibold tracking-tight text-[#F4F7FB]">{project.name}</h1>
        <p className="mt-1 text-base text-[#9EB1C4]">{project.tagline}</p>
        {project.nameExplanation && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#7897B2]">{project.nameExplanation}</p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.period && (
            <span className="mr-2 inline-flex items-center gap-1.5 font-mono text-xs text-[#9EB1C4]">
              <Calendar size={12} /> {project.period}
            </span>
          )}
          {project.tech.map((technology) => <TechChip key={technology} label={technology} />)}
        </div>
      </div>

      <div className="mb-9">
        <SectionLabel>Overview</SectionLabel>
        <p className="text-sm leading-relaxed text-[#9EB1C4]">{project.overview}</p>
      </div>

      <div className="glass-card relative mb-8 aspect-video overflow-hidden rounded-2xl bg-[#031D31]/70">
        <img
          src={project.image}
          alt={`Portada del proyecto ${project.name}`}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Project links */}
      {(project.github || project.demo) && <div className="mb-9 flex flex-wrap justify-end gap-2">
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="xcode-secondary-button inline-flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-xs transition-colors"
            >
              <Github size={13} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="xcode-primary-button inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>}

      {project.features && project.features.length > 0 && (
        <div className="mb-9">
          <SectionLabel>Features</SectionLabel>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <div key={feature} className="glass-inset flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-[#C1D1E0]">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0A84FF]" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content sections */}
      <div className="space-y-9">
        <div>
          <SectionLabel>{project.contributionLabel ?? "My Contribution"}</SectionLabel>
          <p className="text-[#9EB1C4] leading-relaxed text-sm">{project.contribution}</p>
        </div>

        {project.architecture && (
          <div>
            <SectionLabel>Architecture</SectionLabel>
            <div className="glass-inset rounded-xl p-5">
              <p className="font-mono text-xs leading-relaxed text-[#9EB1C4]">{project.architecture}</p>
            </div>
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div>
            <SectionLabel>Key Metrics</SectionLabel>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
              {project.metrics.map((metric) => (
                <MetricCard key={metric.label} label={metric.label} value={metric.value} />
              ))}
            </div>
          </div>
        )}

        {project.challenges && (
          <div>
            <SectionLabel>{project.challengesLabel ?? "Challenges"}</SectionLabel>
            <p className="text-sm leading-relaxed text-[#9EB1C4]">{project.challenges}</p>
          </div>
        )}

        {project.gallery.length > 1 && (
          <div>
            <SectionLabel>{project.galleryLabel ?? "Gallery"}</SectionLabel>
            <ProjectCarousel
              images={project.gallery}
              projectName={project.name}
              labels={project.galleryLabels}
            />
          </div>
        )}

        {project.lessons && (
          <div>
            <SectionLabel>{project.lessonsLabel ?? "Lessons Learned"}</SectionLabel>
            <p className="text-sm leading-relaxed text-[#9EB1C4]">{project.lessons}</p>
          </div>
        )}

        {project.video && (
          <div>
            <SectionLabel>{project.videoLabel ?? "Game Demo"}</SectionLabel>
            <div className="glass-card overflow-hidden rounded-xl bg-black">
              <video
                className="aspect-video w-full"
                controls
                preload="metadata"
                poster={project.image}
                playsInline
                aria-label={`Video demo de ${project.name}`}
              >
                <source src={project.video} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}
