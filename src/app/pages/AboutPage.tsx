import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BackButton, SectionLabel } from "../components/shared/PortfolioUI";

const aboutPhotos = [
  "/images/about/IMG_0513.jpg",
  "/images/about/IMG_0514.jpg",
  "/images/about/IMG_0515.jpg",
  "/images/about/IMG_0516.jpg",
];

const quickInfo = [
  { label: "Location", value: "Monterrey, Mexico" },
  {
    label: "Work Authorization",
    value: "U.S. & Mexican Citizen\nNo sponsorship required",
    featured: true,
  },
  { label: "Languages", value: "Spanish (Native)\nEnglish (Fluent)\nItalian (Professional)" },
  { label: "Currently", value: "B.S. Computer Science & Technology\nPresident @ SEITC" },
];

export function AboutPage({ onBack }: { onBack: () => void }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const reduceMotion = useReducedMotion();

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
          Hello, world.
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#F4F7FB]">About Me</h1>
      </div>

      <div className="mb-12 grid items-start gap-10 sm:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-4 text-base leading-relaxed text-[#9EB1C4]">
          <p>
            Hi! I&apos;m Juan, a Computer Science and Technology student at Tecnológico de Monterrey. I love building things and bringing ideas to life. Whether it&apos;s an app or a project that starts as a random conversation with friends, I enjoy figuring out how to make it real. Most of the experiences I&apos;m proudest of started with me thinking, <em className="text-[#D7E4F0]">&quot;I have no idea how to do this... let&apos;s figure it out.&quot;</em>
          </p>
          <p>
            One thing I didn&apos;t expect when I started college was how much the people would matter. Some of my favorite memories have come from late-night hackathons, teaching workshops, organizing events, and working with teammates who constantly challenged me to think differently. Looking back, those experiences shaped me just as much as the projects themselves.
          </p>
        </div>
        <div className="mx-auto w-full max-w-[340px]">
          <div className="relative aspect-[4/5]" aria-label="Juan's photo collection">
            {aboutPhotos.map((photo, index) => {
              const position = (index - activePhoto + aboutPhotos.length) % aboutPhotos.length;
              const isActive = position === 0;
              const visiblePosition = Math.min(position, 3);
              const rotations = [-1.5, 3, -3.5, 1.5];

              return (
                <motion.button
                  key={photo}
                  type="button"
                  onClick={() => isActive && setActivePhoto((current) => (current + 1) % aboutPhotos.length)}
                  aria-label={isActive ? `Show next photo. Photo ${index + 1} of ${aboutPhotos.length}` : undefined}
                  tabIndex={isActive ? 0 : -1}
                  className={`glass-card absolute inset-0 overflow-hidden rounded-2xl border-2 border-[#6AA3D8]/35 bg-[#07182C] shadow-[0_20px_45px_rgba(0,0,0,0.32)] ${isActive ? "cursor-pointer" : "pointer-events-none"}`}
                  animate={{
                    x: visiblePosition * 5,
                    y: visiblePosition * 7,
                    rotate: rotations[visiblePosition],
                    scale: 1 - visiblePosition * 0.025,
                    opacity: position > 3 ? 0 : 1,
                  }}
                  whileHover={isActive && !reduceMotion ? { y: -5, rotate: 0 } : undefined}
                  whileTap={isActive && !reduceMotion ? { scale: 0.97 } : undefined}
                  transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 240, damping: 24 }}
                  style={{ zIndex: aboutPhotos.length - position }}
                >
                  <img src={photo} alt={`Juan, photo ${index + 1}`} className="h-full w-full object-cover" />
                </motion.button>
              );
            })}
          </div>
          <div className="mt-5 flex justify-center gap-1.5" aria-hidden="true">
            {aboutPhotos.map((photo, index) => (
              <span key={photo} className={`h-1.5 rounded-full transition-all duration-300 ${index === activePhoto ? "w-5 bg-[#0A84FF]" : "w-1.5 bg-[#52718D]"}`} />
            ))}
          </div>
        </div>
      </div>

      <section className="mb-11">
        <SectionLabel>Quick Info</SectionLabel>
        <div className="glass-card overflow-hidden rounded-2xl">
          {quickInfo.map(({ label, value }, index) => (
            <div
              key={label}
              className={`grid gap-2 px-5 py-5 sm:grid-cols-[190px_1fr] sm:items-start sm:gap-8 sm:px-7 sm:py-6 ${index < quickInfo.length - 1 ? "border-b border-[#6AA3D8]/20" : ""}`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--xcode-orange-soft)]">{label}</p>
              <p className="whitespace-pre-line text-sm leading-relaxed text-[#D1DDE8] sm:text-base">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
