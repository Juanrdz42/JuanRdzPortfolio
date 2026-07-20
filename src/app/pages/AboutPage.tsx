import { motion } from "motion/react";
import { SectionLabel, TechChip } from "../components/shared/PortfolioUI";

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="max-w-[820px] mx-auto px-10 py-9"
    >
      <div className="mb-8">
        <p className="text-[10px] font-mono text-[#0A84FF] uppercase tracking-[0.15em] mb-2">Hello, world.</p>
        <h1 className="text-3xl font-semibold text-[#F4F7FB] tracking-tight">About Me</h1>
      </div>

      <div className="grid grid-cols-[1fr_200px] gap-8 mb-10">
        <div className="space-y-4 text-[#9EB1C4] text-sm leading-relaxed">
          <p>
            {"I'm Juan Antonio Rodríguez, a Computer Science student and software engineer passionate about building products at the intersection of AI, IoT, and human-centered design. I thrive in full-stack environments — equally comfortable writing Python firmware for embedded hardware and architecting scalable cloud APIs."}
          </p>
          <p>
            My work spans mobile apps, web platforms, and distributed sensor networks. I am drawn to projects with real-world impact: improving mental health access, making language learning more effective, and connecting field researchers to live data.
          </p>
          <p>
            {"When I'm not coding, I'm leading SEITC, mentoring underclassmen, or obsessing over clean system design and the aesthetics of developer tooling."}
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-[#294F70] bg-[#04111F]" style={{ aspectRatio: "3/4" }}>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format"
            alt="Juan Antonio Rodríguez"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mb-9">
        <SectionLabel>Technical Skills</SectionLabel>
        <div className="space-y-3">
          {[
            { category: "Languages", skills: ["TypeScript", "Python", "Java", "C", "SQL"] },
            { category: "Frontend", skills: ["React", "Next.js", "React Native", "Tailwind CSS"] },
            { category: "Backend", skills: ["Node.js", "Django", "FastAPI", "GraphQL", "REST"] },
            { category: "Infra", skills: ["AWS", "Docker", "PostgreSQL", "MongoDB", "Redis", "InfluxDB"] },
            { category: "AI / ML", skills: ["OpenAI API", "HuggingFace", "LangChain", "scikit-learn"] },
          ].map((group) => (
            <div key={group.category} className="flex gap-5 items-start">
              <span className="text-[11px] font-mono text-[#9EB1C4] w-20 flex-shrink-0 pt-0.5">{group.category}</span>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <TechChip key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-12">
        <SectionLabel>Education</SectionLabel>
        <div className="bg-[#0B2740] border border-[#294F70] rounded-xl p-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[#F4F7FB] text-sm font-medium">B.S. Computer Science</h3>
              <p className="text-[#0A84FF] text-xs font-mono mt-0.5">
                University of Puerto Rico, Río Piedras
              </p>
              <p className="text-[#9EB1C4] text-xs mt-1.5">Expected May 2026 · GPA 3.87</p>
            </div>
            <span className="text-[11px] font-mono text-[#9EB1C4] bg-[#04111F] border border-[#294F70] px-2.5 py-1 rounded-md flex-shrink-0">
              {"Dean's List"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
