import {
  BrainCircuit,
  Database,
  Hash,
  ScanEye,
  type LucideIcon,
} from "lucide-react";
import {
  siCplusplus,
  siDotnet,
  siFastapi,
  siGit,
  siJavascript,
  siMqtt,
  siMysql,
  siPython,
  siReact,
  siSnowflake,
  siSwift,
  siUnity,
  type SimpleIcon,
} from "simple-icons";
import { skillGroups } from "../../data/personal";

const brandIcons: Partial<Record<string, SimpleIcon>> = {
  Python: siPython,
  "C++": siCplusplus,
  JavaScript: siJavascript,
  Swift: siSwift,
  React: siReact,
  FastAPI: siFastapi,
  Git: siGit,
  "ASP.NET Core": siDotnet,
  Unity: siUnity,
  MySQL: siMysql,
  Snowflake: siSnowflake,
  MQTT: siMqtt,
};

const lineIcons: Partial<Record<string, LucideIcon>> = {
  "C#": Hash,
  SQL: Database,
  "Vision Framework": ScanEye,
  "Core ML": BrainCircuit,
  "Create ML": BrainCircuit,
};

function TechnologyIcon({ name }: { name: string }) {
  const LineIcon = lineIcons[name];
  if (LineIcon) return <LineIcon size={21} strokeWidth={1.8} aria-hidden="true" />;

  const icon = brandIcons[name];
  if (!icon) return <Database size={21} strokeWidth={1.8} aria-hidden="true" />;

  return (
    <svg viewBox="0 0 24 24" className="h-[21px] w-[21px] fill-current" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}

function SkillItem({ name }: { name: string }) {
  return (
    <li className="skill-item flex items-center gap-3 rounded-2xl px-3 py-2.5">
      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-[#3979B2]/45 bg-[#0B2948] text-[#F4F7FB] shadow-[inset_0_1px_0_rgba(111,174,230,0.1)]">
        <TechnologyIcon name={name} />
      </span>
      <span className="text-sm font-medium text-[#D4E1EC]">{name}</span>
    </li>
  );
}

export function SkillsOverview() {
  return (
    <section className="border-b border-[#6AA3D8]/20 px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1180px] space-y-12">
        {skillGroups.map((group, index) => (
          <div key={group.category}>
            <div className="mb-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[#F4F7FB]">{group.category}</h2>
              <span
                className={`mt-2 block h-0.5 w-20 rounded-full ${
                  index === 0 ? "bg-[var(--xcode-orange)]" : "bg-[#0A84FF]"
                }`}
              />
            </div>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] gap-3">
              {group.skills.map((skill) => <SkillItem key={skill} name={skill} />)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
