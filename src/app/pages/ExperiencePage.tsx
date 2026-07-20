import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "../data/portfolio";
import { TechChip } from "../components/shared/PortfolioUI";

export function ExperiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="max-w-[960px] mx-auto px-12 py-11"
    >
      <div className="mb-8">
        <p className="text-xs font-mono text-[var(--xcode-orange-soft)] uppercase tracking-[0.15em] mb-2">Career</p>
        <h1 className="text-4xl font-semibold text-[#F4F7FB] tracking-tight">Experience</h1>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden mb-10">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=280&fit=crop&auto=format"
          alt="Temporary placeholder for work experience"
          className="w-full h-44 object-cover opacity-80"
        />
      </div>

      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[#294F70]" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute left-[11px] top-1.5 w-2 h-2 rounded-full bg-[#0A84FF] ring-[3px] ring-[#07182C]" />

              <div className="glass-card glass-card-interactive rounded-2xl p-6 transition-all duration-300">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-semibold text-[#F4F7FB] text-sm">{exp.role}</h3>
                    <p className="text-[#0A84FF] text-xs font-mono mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--xcode-orange-soft)] bg-[#FF9F0A]/8 border border-[#FF9F0A]/20 px-2.5 py-1 rounded-md flex-shrink-0">
                    {exp.metric}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-[#9EB1C4] font-mono mb-4 mt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={10} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={10} />
                    {exp.location}
                  </span>
                </div>

                <p className="text-[#9EB1C4] text-xs mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-xs text-[#9EB1C4] flex gap-2.5 leading-relaxed">
                      <span className="text-[#0A84FF] flex-shrink-0 mt-[1px]">›</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <TechChip key={t} label={t} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
