import { forwardRef } from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { ciberistasData, experiences, leadershipData, runtimeData } from "../../data/portfolio";
import type { Page } from "../../types/portfolio";

export const ExperienceHighlights = forwardRef<HTMLElement, { onNavigate: (page: Page) => void }>(
  function ExperienceHighlights({ onNavigate }, ref) {
    const experience = experiences[0];
    const items: Array<{
      page: Page;
      eyebrow: string;
      title: string;
      description?: string;
      period?: string;
      image: string;
      alt: string;
      lightBackground?: boolean;
    }> = [
      {
        page: "leadership",
        eyebrow: "Leadership Experience",
        title: `${leadershipData.role}, ${leadershipData.org}`,
        description: leadershipData.overview.split("\n\n")[0],
        period: leadershipData.period,
        image: leadershipData.image,
        alt: "SEITC leadership",
      },
      {
        page: "leadership-ciberistas",
        eyebrow: "Leadership Experience",
        title: "Ciberistas",
        description: ciberistasData.overview,
        period: ciberistasData.period,
        image: "/images/leadership/ciberistas/ciberistas.png",
        alt: "Ciberistas",
      },
      {
        page: "leadership-runtime",
        eyebrow: "Leadership Experience",
        title: "Runtime",
        description: `${runtimeData.subtitle}. ${runtimeData.description}`,
        period: runtimeData.period,
        image: runtimeData.image,
        alt: "Runtime",
      },
      {
        page: "experience",
        eyebrow: "Professional Experience",
        title: experience.role,
        description: experience.description,
        period: experience.period,
        image: "/images/experience/tec.png",
        alt: "Tecnológico de Monterrey",
        lightBackground: true,
      },
    ];

    return (
      <section ref={ref} className="scroll-mt-4 border-b border-[#6AA3D8]/20 px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-7 font-mono text-xs uppercase tracking-[0.15em] text-[var(--xcode-orange-soft)]">
            Work &amp; Leadership
          </p>

          <div className="flex flex-col gap-5">
            {items.map((item) => (
              <button
                key={item.page}
                type="button"
                onClick={() => onNavigate(item.page)}
                className="glass-card glass-card-interactive group overflow-hidden rounded-2xl text-left transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-stretch">
                  <div
                    className={`aspect-video flex-shrink-0 overflow-hidden border-b border-[#6AA3D8]/15 sm:w-[46%] sm:border-b-0 sm:border-r lg:w-[44%] ${
                      item.lightBackground ? "bg-white" : "bg-[#031D31]/70"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={`h-full w-full object-contain opacity-90 transition-all duration-500 group-hover:scale-[1.01] group-hover:opacity-100 ${
                        item.lightBackground ? "p-6 sm:p-8" : ""
                      }`}
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between px-6 py-6 sm:px-8 sm:py-7">
                    <div>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <div>
                          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--xcode-orange-soft)]">
                            {item.eyebrow}
                          </p>
                          <h2 className="text-xl font-semibold tracking-tight text-[#F4F7FB]">{item.title}</h2>
                        </div>
                        <span className="flex items-center gap-1 font-mono text-xs text-[#9EB1C4] opacity-0 transition-opacity group-hover:opacity-100">
                          Open <ChevronRight size={12} />
                        </span>
                      </div>

                      {item.description && (
                        <p className="mb-5 line-clamp-3 max-w-2xl text-sm leading-relaxed text-[#A7BACD]">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {item.period && (
                      <span className="flex items-center gap-2 font-mono text-xs text-[#7897B2]">
                        <Calendar size={13} />
                        {item.period}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  },
);
