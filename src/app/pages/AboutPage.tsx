import { motion } from "motion/react";
import { education, personal, skillGroups } from "../data/personal";
import { SectionLabel, TechChip } from "../components/shared/PortfolioUI";

const coursework = [
  "Business and Management HL",
  "Data Science for Decision-Making",
  "Object-Oriented Programming",
  "Algorithms and Data Structures",
  "Software/Web Development",
  "Advanced Algorithms",
];

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="mx-auto max-w-[960px] px-12 py-11"
    >
      <div className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--xcode-orange-soft)]">
          Hello, world.
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#F4F7FB]">About Me</h1>
      </div>

      <div className="mb-10 grid grid-cols-[1fr_200px] gap-8">
        <div className="space-y-4 text-base leading-relaxed text-[#9EB1C4]">
          <p>
            I&apos;m {personal.name}, a fifth-semester Computer Science and Technology student at Tecnológico de Monterrey. My experience includes institutional data engineering, full-stack development, IoT systems, and machine-learning-assisted applications.
          </p>
          <p>
            I have built projects with ASP.NET Core MVC, Unity, Swift, embedded sensors, SQL databases, and AI services. Professionally, I maintained and automated institutional data pipelines using Python, R, and SQL.
          </p>
          <p>
            As President of SEITC, I lead academic, professional, and outreach initiatives for a community of more than 700 computing students.
          </p>
        </div>
        <div className="glass-card overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format"
            alt="Placeholder portrait for Juan Antonio Rodríguez Reyna"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mb-9">
        <SectionLabel>Technical Skills</SectionLabel>
        <div className="space-y-3">
          {skillGroups.map((group) => (
            <div key={group.category} className="flex items-start gap-5">
              <span className="w-24 flex-shrink-0 pt-1 font-mono text-xs text-[#9EB1C4]">{group.category}</span>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <TechChip key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-9">
        <SectionLabel>Education</SectionLabel>
        <div className="glass-card rounded-xl p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-sm font-medium text-[#F4F7FB]">{education.degree}</h2>
              <p className="mt-0.5 font-mono text-xs text-[#0A84FF]">{education.institution}</p>
              <p className="mt-2 text-xs text-[#9EB1C4]">
                {education.semester} · {education.graduation} · GPA {education.gpa}
              </p>
            </div>
            <span className="glass-inset flex-shrink-0 rounded-md px-2.5 py-1 font-mono text-xs text-[#B6C8DA]">
              {education.distinction}
            </span>
          </div>
          <p className="mt-4 text-xs text-[var(--xcode-orange-soft)]">{education.certification}</p>
        </div>
      </div>

      <div className="pb-12">
        <SectionLabel>Relevant Coursework</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {coursework.map((course) => (
            <TechChip key={course} label={course} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
