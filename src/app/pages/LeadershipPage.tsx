import { motion, useReducedMotion } from "motion/react";
import { Calendar } from "lucide-react";
import { leadershipData } from "../data/portfolio";
import { BackButton, SectionLabel } from "../components/shared/PortfolioUI";
import { ProjectCarousel } from "../components/shared/ProjectCarousel";

export function LeadershipPage({ onBack }: { onBack: () => void }) {
  const ld = leadershipData;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="mx-auto max-w-[960px] px-6 py-8 sm:px-12 sm:py-11"
    >
      <BackButton onClick={onBack} />
      <div className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--xcode-orange-soft)]">Leadership &amp; Outreach</p>
        <h1 className="text-4xl font-semibold text-[#F4F7FB] tracking-tight">{ld.org}</h1>
        <p className="mt-2 text-base text-[#A7BACD]">{ld.role}, {ld.fullName}</p>
        <p className="mt-4 flex items-center gap-2 font-mono text-xs text-[#9EB1C4]"><Calendar size={12} />{ld.period}</p>
        <div className="glass-inset mt-5 inline-flex items-center gap-3 rounded-lg border border-dashed border-[#6AA3D8]/30 px-4 py-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--xcode-orange)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--xcode-orange-soft)]">More coming soon</span>
          <span className="hidden text-xs text-[#9EB1C4] sm:inline">Our term is just getting started.</span>
        </div>
      </div>

      <div className="mb-9">
        <SectionLabel>Overview</SectionLabel>
        <p className="whitespace-pre-line text-sm leading-relaxed text-[#9EB1C4]">{ld.overview}</p>
      </div>

      <div className="glass-card relative mb-8 aspect-video overflow-hidden rounded-2xl bg-[#031D31]/70">
        <img
          src={ld.image}
          alt="Portada de SEITC"
          className="h-full w-full object-contain opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07182C]/85 via-[#07182C]/20 to-transparent" />
        <div className="absolute bottom-6 left-7">
          <p className="text-[10px] font-mono text-[var(--xcode-orange-soft)] uppercase tracking-[0.15em] mb-1">{ld.role}</p>
          <h2 className="text-2xl font-semibold text-[#F4F7FB] tracking-tight">{ld.org}</h2>
          <p className="text-[#9EB1C4] text-xs font-mono mt-0.5">{ld.fullName}</p>
        </div>
      </div>

      <div className="space-y-9 pb-12">
        <div>
          <SectionLabel>My Journey</SectionLabel>
          <JourneyTimeline journey={ld.journey} />
          <p className="mt-6 text-sm leading-relaxed text-[#9EB1C4]">{ld.journeySummary}</p>
        </div>

        <div>
          <SectionLabel>What We're Building</SectionLabel>
          <ul className="space-y-3">
            {ld.bullets.map((b, i) => (
              <li key={i} className="text-sm text-[#9EB1C4] flex gap-3 leading-relaxed">
                <span className="text-[#0A84FF] flex-shrink-0 mt-0.5">›</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionLabel>Why It Matters</SectionLabel>
          <p className="text-sm leading-relaxed text-[#9EB1C4]">{ld.whyItMatters}</p>
        </div>

        {ld.gallery.length > 0 && (
          <div>
            <SectionLabel>Gallery</SectionLabel>
            {ld.gallery.length > 1 ? (
              <ProjectCarousel images={ld.gallery} projectName={ld.org} />
            ) : (
              <div className="glass-card aspect-video overflow-hidden rounded-xl bg-[#031D31]/70">
                <img src={ld.gallery[0]} alt={`${ld.org} team`} className="h-full w-full object-contain" />
              </div>
            )}
          </div>
        )}

      </div>
    </motion.div>
  );
}

function JourneyTimeline({ journey }: { journey: Array<{ year: string; role: string }> }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="glass-inset relative overflow-hidden rounded-xl px-5 py-6 sm:px-7 sm:py-7">
      <motion.div
        className="absolute bottom-8 left-[27px] top-8 w-px origin-top bg-gradient-to-b from-[#0A84FF] via-[#35A8FF] to-[var(--xcode-orange-soft)] sm:hidden"
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="absolute left-[16.66%] right-[16.66%] top-[42px] hidden h-px origin-left bg-gradient-to-r from-[#0A84FF] via-[#35A8FF] to-[var(--xcode-orange-soft)] sm:block"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut" }}
      />

      <div className="relative grid gap-7 sm:grid-cols-3 sm:gap-4">
        {journey.map((stage, index) => (
          <motion.div
            key={stage.year}
            className="grid grid-cols-[16px_1fr] items-start gap-4 sm:flex sm:flex-col sm:items-center sm:text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : 0.18 + index * 0.2 }}
          >
            <motion.span
              className="relative z-10 mt-1 block h-4 w-4 rounded-full border-2 border-[#07182C] bg-[#31A5FF] shadow-[0_0_0_3px_rgba(10,132,255,0.22),0_0_18px_rgba(10,132,255,0.45)] sm:mt-1.5"
              initial={reduceMotion ? false : { scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: reduceMotion ? 0 : 0.22 + index * 0.2 }}
            />
            <div>
              <p className="font-mono text-xs font-semibold text-[var(--xcode-orange-soft)]">{stage.year}</p>
              <p className="mt-1 text-sm font-medium leading-snug text-[#E4EDF6]">{stage.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
