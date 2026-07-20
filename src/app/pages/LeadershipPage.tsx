import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { leadershipData } from "../data/portfolio";
import { MetricCard, SectionLabel } from "../components/shared/PortfolioUI";

export function LeadershipPage() {
  const ld = leadershipData;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="max-w-[960px] mx-auto px-12 py-11"
    >
      <div className="mb-8">
        <p className="text-xs font-mono text-[var(--xcode-orange-soft)] uppercase tracking-[0.15em] mb-2">Involvement</p>
        <h1 className="text-4xl font-semibold text-[#F4F7FB] tracking-tight">Leadership</h1>
      </div>

      <div className="glass-card relative rounded-2xl overflow-hidden mb-8">
        <img
          src={ld.image}
          alt="Temporary placeholder for SEITC leadership"
          className="w-full h-56 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07182C]/85 via-[#07182C]/20 to-transparent" />
        <div className="absolute bottom-6 left-7">
          <p className="text-[10px] font-mono text-[var(--xcode-orange-soft)] uppercase tracking-[0.15em] mb-1">{ld.role}</p>
          <h2 className="text-2xl font-semibold text-[#F4F7FB] tracking-tight">{ld.org}</h2>
          <p className="text-[#9EB1C4] text-xs font-mono mt-0.5">{ld.fullName}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-mono text-[#9EB1C4] mb-7">
        <Calendar size={12} />
        {ld.period}
      </div>

      <div className="grid grid-cols-4 gap-3 mb-9">
        {ld.metrics.map((m) => (
          <MetricCard key={m.label} label={m.label} value={m.value} />
        ))}
      </div>

      <div className="space-y-8 pb-12">
        <div>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-[#9EB1C4] leading-relaxed text-sm">{ld.overview}</p>
        </div>

        <div>
          <SectionLabel>Impact & Initiatives</SectionLabel>
          <ul className="space-y-3">
            {ld.bullets.map((b, i) => (
              <li key={i} className="text-sm text-[#9EB1C4] flex gap-3 leading-relaxed">
                <span className="text-[#0A84FF] flex-shrink-0 mt-0.5">›</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
