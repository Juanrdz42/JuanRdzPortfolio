import { skillGroups } from "../../data/personal";

const languages = skillGroups.find((group) => group.category === "Languages")?.skills ?? [];
const technologies = skillGroups
  .filter((group) => group.category !== "Languages")
  .flatMap((group) => group.skills);

const shortLabels: Record<string, string> = {
  Python: "Py",
  "C++": "C++",
  "C#": "C#",
  JavaScript: "JS",
  SQL: "SQL",
  Swift: "S",
  R: "R",
  MATLAB: "MAT",
  "ASP.NET Core MVC": ".NET",
  FastAPI: "API",
  React: "Re",
  "Vision Framework": "Vi",
  "Core ML": "ML",
  MQTT: "MQ",
  "REST APIs": "REST",
  MySQL: "DB",
  Snowflake: "❄",
  Git: "Git",
  GitHub: "GH",
  "VS Code": "VS",
  Xcode: "X",
  Unity: "U",
  "Arduino IDE": "Ar",
};

function SkillItem({ name, compact = false }: { name: string; compact?: boolean }) {
  return (
    <li className="skill-item flex items-center gap-3 rounded-2xl px-3 py-2.5">
      <span
        className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-[#3979B2]/45 bg-[#0B2948] font-mono text-[11px] font-semibold text-[var(--xcode-orange-soft)] shadow-[inset_0_1px_0_rgba(111,174,230,0.1)]"
        aria-hidden="true"
      >
        {shortLabels[name] ?? name.slice(0, 2)}
      </span>
      <span className={compact ? "text-sm text-[#C0D1E0]" : "text-[15px] font-medium text-[#D4E1EC]"}>
        {name}
      </span>
    </li>
  );
}

export function SkillsOverview() {
  return (
    <section className="border-b border-[#6AA3D8]/20 px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1180px] space-y-14">
        <div>
          <div className="mb-7">
            <h2 className="text-2xl font-semibold tracking-tight text-[#F4F7FB]">Programming Languages</h2>
            <span className="mt-2 block h-0.5 w-20 rounded-full bg-[var(--xcode-orange)]" />
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
            {languages.map((language) => (
              <SkillItem key={language} name={language} />
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-7">
            <h2 className="text-2xl font-semibold tracking-tight text-[#F4F7FB]">Technologies &amp; Tools</h2>
            <span className="mt-2 block h-0.5 w-20 rounded-full bg-[#0A84FF]" />
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(155px,1fr))] gap-3">
            {technologies.map((technology) => (
              <SkillItem key={technology} name={technology} compact />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
