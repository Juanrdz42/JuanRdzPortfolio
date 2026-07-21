import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "../data/portfolio";
import { SectionLabel, TechChip } from "../components/shared/PortfolioUI";

export function ExperiencePage() {
  const experience = experiences[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="mx-auto max-w-[960px] px-6 py-8 sm:px-12 sm:py-11"
    >
      <div className="mb-8">
        <p className="text-xs font-mono text-[var(--xcode-orange-soft)] uppercase tracking-[0.15em] mb-2">Career</p>
        <h1 className="text-4xl font-semibold text-[#F4F7FB] tracking-tight">Experience</h1>
      </div>

      <div className="glass-card mb-8 overflow-hidden rounded-2xl">
        <div className="bg-white">
          <img
            src="/images/experience/tec.png"
            alt="Logotipo del Tecnológico de Monterrey"
            className="h-48 w-full object-contain p-6 sm:h-64 sm:p-10"
          />
        </div>
        <div className="border-t border-[#6AA3D8]/20 bg-[#07182C]/95 px-6 py-5 sm:px-7">
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--xcode-orange-soft)]">
            {experience.company}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-[#F4F7FB]">{experience.role}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#A7BACD]">{experience.description}</p>
        </div>
      </div>

      <div className="mb-9 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] text-[#9EB1C4]">
        <span className="flex items-center gap-1.5"><Calendar size={11} />{experience.period}</span>
        <span className="flex items-center gap-1.5"><MapPin size={11} />{experience.location}</span>
      </div>

      <div className="space-y-9 pb-12">
        <div>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-sm leading-relaxed text-[#9EB1C4]">{experience.overview}</p>
        </div>
        <div>
          <SectionLabel>My Responsibilities</SectionLabel>
          <p className="text-sm leading-relaxed text-[#9EB1C4]">{experience.responsibilities}</p>
        </div>
        <div>
          <SectionLabel>Biggest Challenge</SectionLabel>
          <p className="text-sm leading-relaxed text-[#9EB1C4]">{experience.challenge}</p>
        </div>
        <div>
          <SectionLabel>What I Learned</SectionLabel>
          <p className="text-sm leading-relaxed text-[#9EB1C4]">{experience.lessons}</p>
        </div>
        <div>
          <SectionLabel>Skills</SectionLabel>
          <div className="flex flex-wrap gap-1.5">
            {experience.tech.map((technology) => <TechChip key={technology} label={technology} />)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
