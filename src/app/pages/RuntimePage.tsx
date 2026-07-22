import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { BackButton, SectionLabel } from "../components/shared/PortfolioUI";
import { runtimeData } from "../data/portfolio";

export function RuntimePage({ onBack }: { onBack: () => void }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="mx-auto max-w-[960px] px-6 py-8 sm:px-12 sm:py-11"
    >
      <BackButton onClick={onBack} />

      <header className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--xcode-orange-soft)]">
          Leadership &amp; Outreach
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#F4F7FB]">{runtimeData.name}</h1>
        <p className="mt-2 text-base text-[#A7BACD]">{runtimeData.subtitle}</p>
        <p className="mt-4 flex items-center gap-2 font-mono text-xs text-[#9EB1C4]">
          <Calendar size={12} /> {runtimeData.period}
        </p>
      </header>

      <section className="mb-9">
        <SectionLabel>Overview</SectionLabel>
        <p className="text-sm leading-relaxed text-[#9EB1C4]">{runtimeData.overview}</p>
      </section>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {[
          { src: "/images/leadership/runtime/IMG_0531.jpg", name: "Juan Rodríguez", role: "Presidential Candidate" },
          { src: "/images/leadership/runtime/IMG_0532.jpg", name: "Iván Espinosa", role: "Vice Presidential Candidate" },
        ].map((candidate) => (
          <figure key={candidate.name} className="glass-card overflow-hidden rounded-2xl bg-[#031D31]/70">
            <img src={candidate.src} alt={`${candidate.name}, ${candidate.role}`} className="aspect-[3/4] w-full object-cover" />
            <figcaption className="border-t border-[#6AA3D8]/15 px-5 py-4">
              <p className="text-sm font-semibold text-[#EAF2FA]">{candidate.name}</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--xcode-orange-soft)]">{candidate.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <section className="mb-10">
        <SectionLabel>Campaign Log</SectionLabel>
        <div className="relative mt-5 space-y-4 before:absolute before:bottom-8 before:left-[42px] before:top-8 before:w-px before:bg-gradient-to-b before:from-[#0A84FF] before:via-[#35A8FF] before:to-[var(--xcode-orange-soft)]">
          {runtimeData.stages.map((stage, index) => (
            <motion.article
              key={stage.title}
              initial={reduceMotion ? false : { opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduceMotion ? 0 : 0.38, delay: reduceMotion ? 0 : index * 0.07 }}
              className="glass-card relative grid grid-cols-[86px_1fr] gap-4 rounded-xl p-4 sm:gap-6 sm:p-5"
            >
              <motion.div
                className="relative z-10 mt-1 h-8 w-[86px] overflow-hidden rounded-md border border-[#0A84FF]/55 bg-[#061E34] shadow-[0_0_18px_rgba(10,132,255,0.16)]"
                initial={reduceMotion ? false : { scale: 0.75, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 19, delay: reduceMotion ? 0 : 0.08 + index * 0.07 }}
              >
                <span className="relative flex h-full items-center justify-center gap-1.5 font-mono uppercase tracking-[0.1em]">
                  <span className="text-[8px] text-[#7897B2]">Stage</span>
                  <motion.span
                    className="text-[11px] font-semibold text-[#58B9FF]"
                    initial={reduceMotion ? false : { y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: reduceMotion ? 0 : 0.18 + index * 0.07 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>
                </span>
              </motion.div>
              <div className="pt-1 sm:pt-2">
                <h2 className="mb-2 text-lg font-semibold tracking-tight text-[#EAF2FA]">{stage.title}</h2>
                <p className="text-sm leading-relaxed text-[#9EB1C4]">{stage.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="pb-12">
        <SectionLabel>Promotional Stories</SectionLabel>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[#9EB1C4]">
          Short-form stories helped us introduce the campaign, share our ideas, and keep students informed as election day approached.
        </p>
        <VideoCarousel />
      </section>

      <section className="pb-12">
        <SectionLabel>Looking Back</SectionLabel>
        <p className="text-sm leading-relaxed text-[#9EB1C4]">{runtimeData.reflection}</p>
      </section>

      <section className="pb-16">
        <SectionLabel>Runtime on Instagram</SectionLabel>
        <div className="grid items-center gap-10 sm:grid-cols-[minmax(0,1fr)_230px] sm:gap-12 lg:gap-16">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#FF9F0A]">@runtime_itc</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#F4F7FB]">The campaign, one post at a time.</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#9EB1C4]">
              Our Instagram gave students a place to follow the campaign from our first introductions to the final event before voting.
            </p>

            <div className="mt-7">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#7897B2]">Campaign Highlights</p>
              <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {["Candidate Introductions", "Campaign Proposals", "Debate Announcement", "Integration Day", "Closing Event"].map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2.5 text-sm text-[#C1D1E0]">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full border border-[#FF9F0A]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 border-l border-[#FF9F0A]/60 pl-4 text-sm leading-relaxed text-[#9EB1C4]">
              Every post followed the same visual identity, making the campaign instantly recognizable.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-3 font-mono">
              <div className="border-l border-[#0A84FF]/55 pl-4">
                <span className="block text-lg font-semibold text-[#E4EDF6]">12 posts</span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-[#7897B2]">Campaign timeline</span>
              </div>
              <div className="border-l border-[var(--xcode-orange)]/60 pl-4">
                <span className="block text-lg font-semibold text-[#E4EDF6]">3 weeks</span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-[#7897B2]">Documented</span>
              </div>
              <div className="border-l border-[#0A84FF]/55 pl-4">
                <span className="block text-lg font-semibold text-[#E4EDF6]">Election won</span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-[#7897B2]">2026–2027 term</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
            className="relative w-full max-w-[230px] overflow-hidden rounded-[38px] border border-white/15 bg-[#050709] p-[7px] shadow-[0_28px_70px_rgba(0,0,0,0.48),0_0_0_2px_rgba(90,125,155,0.18)]"
          >
            <div className="relative h-[430px] overflow-hidden rounded-[31px] bg-[#0B1014] sm:h-[440px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-[#0B1014]"
              />
              <img
                src="/images/leadership/runtime/Experience.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-20 block h-auto w-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[7px] z-30 h-5 w-[68px] -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.035)]"
              />
              <div
                tabIndex={0}
                aria-label="Scrollable recreation of the Runtime Instagram profile"
                className="h-full touch-pan-y overflow-x-hidden overflow-y-auto overscroll-x-none overscroll-y-contain bg-[#0B1014] [scrollbar-width:none] focus:outline-none [&::-webkit-scrollbar]:hidden"
              >
                <img
                  src="/images/leadership/runtime/6.png"
                  alt="Runtime candidacy Instagram profile and campaign posts"
                  draggable={false}
                  className="block h-auto w-full max-w-full select-none"
                />
              </div>
            </div>
          </motion.div>

        
          </div>
        </div>
      </section>
    </motion.div>
  );
}

const promotionalVideos = [
  "/images/leadership/runtime/0cc11ea50ca64b51abb59911aec4a8d2.MOV",
  "/images/leadership/runtime/3146ed432f3c494a813377c9cd660a52.MOV",
  "/images/leadership/runtime/33f4dca6fba040fcb53976ee3ed30210.MOV",
];

function VideoCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const video = promotionalVideos[activeSlide];

  const move = (direction: number) => {
    setActiveSlide((current) => (current + direction + promotionalVideos.length) % promotionalVideos.length);
  };

  return (
    <div className="mx-auto w-full max-w-[320px]">
      <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-[#6AA3D8]/25 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
        <motion.video
          key={video}
          src={video}
          controls
          playsInline
          preload="metadata"
          aria-label={`Runtime promotional story ${activeSlide + 1} of ${promotionalVideos.length}`}
          initial={{ opacity: 0.25, scale: 1.015 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28 }}
          className="h-full w-full object-contain"
        />

        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous promotional story"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#07182C]/80 text-white backdrop-blur-sm transition-colors hover:bg-[#0B2944]"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next promotional story"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#07182C]/80 text-white backdrop-blur-sm transition-colors hover:bg-[#0B2944]"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {promotionalVideos.map((item, index) => (
          <button
            key={item}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show promotional story ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all ${index === activeSlide ? "w-6 bg-[#62B0F4]" : "w-1.5 bg-[#6AA3D8]/35 hover:bg-[#6AA3D8]/65"}`}
          />
        ))}
      </div>
    </div>
  );
}
