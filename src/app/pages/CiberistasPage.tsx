import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { ProjectCarousel } from "../components/shared/ProjectCarousel";
import { BackButton, SectionLabel, TechChip } from "../components/shared/PortfolioUI";
import { ciberistasData } from "../data/portfolio";

export function CiberistasPage({ onBack }: { onBack: () => void }) {
  const data = ciberistasData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="mx-auto max-w-[960px] px-6 py-8 sm:px-12 sm:py-11"
    >
      <BackButton onClick={onBack} />
      <div className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--xcode-orange-soft)]">
          Leadership &amp; Outreach
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#F4F7FB]">{data.name}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="mr-2 inline-flex items-center gap-1.5 font-mono text-xs text-[#9EB1C4]">
            <Calendar size={12} /> {data.period}
          </span>
          {["HTML", "CSS", "JavaScript"].map((technology) => <TechChip key={technology} label={technology} />)}
        </div>
      </div>

      <div className="space-y-9 pb-12">
        <section>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-sm leading-relaxed text-[#9EB1C4]">{data.overview}</p>
        </section>

        <div className="glass-card aspect-video overflow-hidden rounded-2xl bg-[#031D31]/70">
          <img src={data.image} alt="Ciberistas" className="h-full w-full object-contain" />
        </div>

        <section>
          <SectionLabel>My Role</SectionLabel>
          <div className="space-y-4">
            {data.role.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-[#9EB1C4]">{paragraph}</p>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>Classes &amp; Workshops</SectionLabel>
          <ProjectCarousel images={data.classGallery} projectName="Ciberistas classes and workshops" />
        </section>

        <section>
          <SectionLabel>Biggest Challenge</SectionLabel>
          <p className="text-sm leading-relaxed text-[#9EB1C4]">{data.challenge}</p>
        </section>

        <section>
          <SectionLabel>Diploma Ceremony</SectionLabel>
          <ProjectCarousel images={data.diplomaGallery} projectName="Ciberistas diploma ceremony" />
        </section>

        <section>
          <SectionLabel>What I Learned</SectionLabel>
          <p className="text-sm leading-relaxed text-[#9EB1C4]">{data.lessons}</p>
        </section>

      </div>
    </motion.div>
  );
}
