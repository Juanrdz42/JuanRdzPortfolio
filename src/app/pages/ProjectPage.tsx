import { motion } from "motion/react";
import { Calendar, ExternalLink, Github } from "lucide-react";
import type { Project } from "../types/portfolio";
import { BackButton, MetricCard, SectionLabel, TechChip } from "../components/shared/PortfolioUI";
import { ProjectCarousel } from "../components/shared/ProjectCarousel";

function ArchitectureNode({
  step,
  eyebrow,
  title,
  detail,
  accent = "blue",
}: {
  step: string;
  eyebrow: string;
  title: string;
  detail: string;
  accent?: "blue" | "orange" | "pink";
}) {
  const accents = {
    blue: "border-[#0A84FF]/35 bg-[#0A84FF]/8 text-[#62B0F4]",
    orange: "border-[#FF9F0A]/35 bg-[#FF9F0A]/8 text-[#FFB340]",
    pink: "border-[#FF69A9]/35 bg-[#FF69A9]/8 text-[#FF83B8]",
  };

  return (
    <div className={`rounded-xl border p-4 text-center ${accents[accent]}`}>
      <span className="mb-3 inline-block border-b border-current/40 pb-1 font-mono text-[11px] tracking-[0.18em] opacity-80">{step}</span>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-75">{eyebrow}</p>
      <h3 className="mt-1 text-sm font-semibold text-[#E7F0F8]">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-[#8FA7BC]">{detail}</p>
    </div>
  );
}

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-2 text-[#4E8FC7]">
      {label && <span className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#7897B2]">{label}</span>}
      <span className="h-4 w-px bg-[#4E8FC7]/70" />
      <span className="h-2 w-2 rotate-45 border-b border-r border-[#4E8FC7]" />
    </div>
  );
}

function AwaqArchitecture() {
  return (
    <div className="glass-inset overflow-hidden rounded-2xl p-5 sm:p-7">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFB340]">Integrated ecosystem</p>
          <h3 className="mt-1 text-lg font-semibold text-[#F4F7FB]">AWAQ Learning Platform</h3>
        </div>

        <div className="mx-auto max-w-xs">
          <ArchitectureNode step="01" eyebrow="Entry point" title="User Login" detail="One account for the entire platform" />
          <FlowArrow label="Session" />
          <ArchitectureNode step="02" eyebrow="Central application" title="ASP.NET Core MVC" detail="Authentication · Business logic · REST API endpoints" accent="pink" />
          <FlowArrow label="CRUD" />
          <ArchitectureNode step="03" eyebrow="Persistence layer" title="SQL Database" detail="Users, achievements & progress" accent="orange" />
        </div>

        <div className="relative mx-auto mt-2 grid gap-4 pt-8 sm:grid-cols-2 sm:gap-8">
          <div className="absolute left-1/2 top-0 hidden h-5 w-px -translate-x-1/2 bg-[#4E8FC7]/60 sm:block" />
          <div className="absolute left-1/4 right-1/4 top-5 hidden h-px bg-[#4E8FC7]/60 sm:block" />
          <div className="absolute left-1/4 top-5 hidden h-3 w-px bg-[#4E8FC7]/60 sm:block" />
          <div className="absolute right-1/4 top-5 hidden h-3 w-px bg-[#4E8FC7]/60 sm:block" />

          <ArchitectureNode step="04A" eyebrow="REST client" title="Unity WebGL" detail="Consumes backend APIs" accent="pink" />
          <ArchitectureNode step="04B" eyebrow="Dashboard" title="Web Platform" detail="Statistics & progress" />
        </div>

        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-[#6AA3D8]/25 bg-[#061C30]/75 p-5 sm:p-6">
          <div className="mb-5 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFB340]">Progress synchronization</p>
            <h4 className="mt-1 text-base font-semibold text-[#F4F7FB]">How data moves through the platform</h4>
          </div>

          <div className="rounded-xl bg-[#FF69A9]/10 px-4 py-3 text-center">
            <p className="text-sm font-medium text-[#E7F0F8]">Player completes a level</p>
            <p className="mt-1 text-xs text-[#8FA7BC]">Unity WebGL</p>
          </div>
          <FlowArrow label="POST /progress" />
          <div className="rounded-xl bg-[#0A84FF]/10 px-4 py-3 text-center">
            <p className="text-sm font-medium text-[#E7F0F8]">Backend validates the request</p>
            <p className="mt-1 text-xs text-[#8FA7BC]">ASP.NET Core MVC</p>
          </div>
          <FlowArrow label="UPDATE UserProgress" />
          <div className="rounded-xl bg-[#FF9F0A]/10 px-4 py-3 text-center">
            <p className="text-sm font-medium text-[#E7F0F8]">SQL persists the new state</p>
            <p className="mt-1 text-xs text-[#8FA7BC]">Single source of truth</p>
          </div>
          <FlowArrow label="GET /progress" />
          <div className="rounded-xl border border-[#62B0F4]/30 bg-[#62B0F4]/10 px-4 py-3 text-center">
            <p className="text-sm font-medium text-[#E7F0F8]">Dashboard refreshes automatically</p>
            <p className="mt-1 text-xs text-[#8FA7BC]">Updated progress becomes visible</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnsennameArchitecture() {
  return (
    <div className="glass-inset overflow-hidden rounded-2xl p-5 sm:p-7">
      <div className="mx-auto max-w-md">
        <div className="mb-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFB340]">On-device computer vision</p>
          <h3 className="mt-1 text-lg font-semibold text-[#F4F7FB]">Sign Recognition Pipeline</h3>
        </div>

        <ArchitectureNode step="01" eyebrow="Live input" title="iPhone Camera" detail="Captures the user's hand in real time" />
        <FlowArrow label="Video frames" />
        <ArchitectureNode step="02" eyebrow="Vision Framework" title="Hand Pose Detection" detail="Extracts 21 hand landmarks from each frame" accent="orange" />
        <FlowArrow label="21 landmark coordinates" />
        <ArchitectureNode step="03" eyebrow="Core ML model" title="Gesture Classification" detail="Runs on-device inference for the active lesson" accent="pink" />
        <FlowArrow label="Predicted sign" />
        <ArchitectureNode step="04" eyebrow="Learning logic" title="Lesson Engine" detail="Evaluates the prediction as correct or incorrect" />
        <FlowArrow label="Recognition result" />
        <ArchitectureNode step="05" eyebrow="Immediate response" title="Feedback & Next Lesson" detail="Updates the interface and advances the learning flow" accent="orange" />

        <div className="mt-5 rounded-xl border border-[#62B0F4]/25 bg-[#62B0F4]/8 px-4 py-3 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#62B0F4]">Entire pipeline runs locally</p>
          <p className="mt-1 text-xs leading-relaxed text-[#8FA7BC]">No network round trip during live sign recognition</p>
        </div>
      </div>
    </div>
  );
}

function OasisArchitecture() {
  return (
    <div className="glass-inset overflow-hidden rounded-2xl p-5 sm:p-7">
      <div className="mb-6 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFB340]">End-to-end IoT system</p>
        <h3 className="mt-1 text-lg font-semibold text-[#F4F7FB]">From the bottle to personalized feedback</h3>
      </div>

      <div className="grid items-stretch gap-3 md:grid-cols-[1fr_28px_1.15fr_28px_1fr] md:gap-2">
        <div className="rounded-xl border border-[#62B0F4]/25 bg-[#071E33]/75 p-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#62B0F4]">01 · Device</p>
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-[#E7F0F8]">Smart Bottle</h4>
              <p className="mt-1 text-xs text-[#7897B2]">HX711 weight sensor + BNO055 motion sensor</p>
            </div>
            <div className="border-t border-[#6AA3D8]/15 pt-3">
              <h4 className="text-sm font-semibold text-[#E7F0F8]">ESP32 Firmware</h4>
              <p className="mt-1 text-xs text-[#7897B2]">Collects and transmits sensor readings</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-[#4E8FC7]">
          <span className="font-mono text-[9px] uppercase tracking-wider md:hidden">MQTT ↓</span>
          <div className="hidden w-full items-center md:flex">
            <span className="h-px flex-1 bg-[#4E8FC7]/60" />
            <span className="h-2 w-2 -translate-x-1 rotate-45 border-r border-t border-[#4E8FC7]" />
          </div>
        </div>

        <div className="rounded-xl border border-[#FF9F0A]/25 bg-[#FF9F0A]/[0.04] p-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#FFB340]">02 · Cloud</p>
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-[#E7F0F8]">MQTT Broker</h4>
              <p className="mt-1 text-xs text-[#7897B2]">Lightweight real-time transport</p>
            </div>
            <div className="border-t border-[#FF9F0A]/15 pt-3">
              <h4 className="text-sm font-semibold text-[#E7F0F8]">Backend + SQL</h4>
              <p className="mt-1 text-xs text-[#7897B2]">Processes readings and stores user history</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-[#4E8FC7]">
          <span className="font-mono text-[9px] uppercase tracking-wider md:hidden">API ↓</span>
          <div className="hidden w-full items-center md:flex">
            <span className="h-px flex-1 bg-[#4E8FC7]/60" />
            <span className="h-2 w-2 -translate-x-1 rotate-45 border-r border-t border-[#4E8FC7]" />
          </div>
        </div>

        <div className="rounded-xl border border-[#FF69A9]/25 bg-[#FF69A9]/[0.04] p-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#FF83B8]">03 · Experience</p>
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-[#E7F0F8]">Android App</h4>
              <p className="mt-1 text-xs text-[#7897B2]">Tracks intake and hydration history</p>
            </div>
            <div className="border-t border-[#FF69A9]/15 pt-3">
              <h4 className="text-sm font-semibold text-[#E7F0F8]">Gemini AI</h4>
              <p className="mt-1 text-xs text-[#7897B2]">Generates personalized recommendations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#7897B2]">
        <span>Sensor data</span><span className="text-[#4E8FC7]">→ MQTT →</span><span>Cloud processing</span><span className="text-[#4E8FC7]">→ API →</span><span>User feedback</span>
      </div>
    </div>
  );
}

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

        {project.architecture && (
          <div>
            <SectionLabel>{project.id === "project-oasis" ? "System Architecture" : "Architecture"}</SectionLabel>
            {project.id === "project-awaq" ? (
              <AwaqArchitecture />
            ) : project.id === "project-ensenname" ? (
              <EnsennameArchitecture />
            ) : project.id === "project-oasis" ? (
              <OasisArchitecture />
            ) : (
              <div className="glass-inset overflow-x-auto rounded-xl p-5">
                <pre className="min-w-max font-mono text-xs leading-6 text-[#9EB1C4]">{project.architecture}</pre>
              </div>
            )}
          </div>
        )}

        {project.technicalDecisions && project.technicalDecisions.length > 0 && (
          <div>
            <SectionLabel>Technical Decisions</SectionLabel>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.technicalDecisions.map((decision) => (
                <div key={decision.title} className="glass-inset rounded-xl p-5">
                  <h3 className="mb-2 text-sm font-semibold text-[#D7E4F0]">{decision.title}</h3>
                  <p className="text-sm leading-relaxed text-[#9EB1C4]">{decision.text}</p>
                </div>
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

        {project.video && (
          <div>
            <SectionLabel>{project.videoLabel ?? "Game Demo"}</SectionLabel>
            {project.id === "project-ensenname" ? (
              <div className="flex justify-center py-4">
                <div className="relative w-[min(290px,78vw)] rounded-[2.75rem] border-[7px] border-[#111318] bg-[#111318] p-[3px] shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
                  <span className="absolute -left-[10px] top-24 h-14 w-[3px] rounded-l bg-[#272A31]" aria-hidden="true" />
                  <span className="absolute -left-[10px] top-44 h-20 w-[3px] rounded-l bg-[#272A31]" aria-hidden="true" />
                  <span className="absolute -right-[10px] top-36 h-24 w-[3px] rounded-r bg-[#272A31]" aria-hidden="true" />
                  <span className="pointer-events-none absolute -inset-[5px] z-10 rounded-[2.9rem] border border-white/20 shadow-[inset_1px_1px_0_rgba(255,255,255,0.22),inset_-1px_-1px_0_rgba(0,0,0,0.7)]" aria-hidden="true" />
                  <div className="overflow-hidden rounded-[2.15rem] bg-black">
                    <video
                      className="block h-auto w-full"
                      controls
                      preload="metadata"
                      playsInline
                      aria-label={`Video demo de ${project.name}`}
                    >
                      <source src={project.video} type={project.video.endsWith(".m4v") ? "video/x-m4v" : "video/mp4"} />
                      Tu navegador no soporta la reproducción de video.
                    </video>
                  </div>
                  <span
                    className="pointer-events-none absolute inset-[10px] z-10 rounded-[2.1rem] bg-[linear-gradient(118deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.045)_18%,transparent_38%,transparent_72%,rgba(255,255,255,0.035)_100%)] mix-blend-screen"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ) : (
              <div className="glass-card overflow-hidden rounded-xl bg-black">
                <video
                  className="aspect-video w-full"
                  controls
                  preload="metadata"
                  poster={project.image}
                  playsInline
                  aria-label={`Video demo de ${project.name}`}
                >
                  <source src={project.video} type={project.video.endsWith(".m4v") ? "video/x-m4v" : "video/mp4"} />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
            )}
          </div>
        )}

        {project.gallery.length > 1 && (
          <div>
            <SectionLabel>{project.galleryLabel ?? "Gallery"}</SectionLabel>
            <ProjectCarousel
              images={project.gallery}
              projectName={project.name}
              labels={project.galleryLabels}
              transparent={project.galleryTransparent}
            />
          </div>
        )}

        {project.lessons && (
          <div>
            <SectionLabel>{project.lessonsLabel ?? "Lessons Learned"}</SectionLabel>
            <p className="text-sm leading-relaxed text-[#9EB1C4]">{project.lessons}</p>
          </div>
        )}

      </div>
    </motion.div>
  );
}
