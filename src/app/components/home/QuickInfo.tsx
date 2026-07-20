import { Code2, GraduationCap, Languages, MapPin } from "lucide-react";
import { personal } from "../../data/personal";

const items = [
  { icon: MapPin, label: personal.location },
  { icon: GraduationCap, label: personal.university },
  { icon: Code2, label: personal.specialization },
  { icon: Languages, label: personal.languages },
];

export function QuickInfo() {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2.5" aria-label="Professional information">
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2 text-xs text-[#91A9BF]">
          <Icon size={14} className="text-[var(--xcode-orange-soft)]" aria-hidden="true" />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
