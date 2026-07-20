import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

export function TechChip({ label }: { label: string }) {
  return (
    <span className="glass-inset inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-medium text-[#B6C8DA] tracking-wide">
      {label}
    </span>
  );
}
export function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card rounded-xl p-5 flex flex-col gap-1.5">
      <span className="text-[28px] font-semibold text-[var(--xcode-orange-soft)] tracking-tight">{value}</span>
      <span className="text-[11px] font-mono text-[#9EB1C4] tracking-widest uppercase">{label}</span>
    </div>
  );
}

export function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 text-xs font-mono text-[#9EB1C4] hover:text-[#F4F7FB] transition-colors mb-7 group"
    >
      <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform duration-150" />
      ../index
    </button>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="h-px w-5 bg-[var(--xcode-orange)] flex-shrink-0 shadow-[0_0_8px_rgba(255,159,10,0.3)]" />
      <h2 className="text-[11px] font-mono font-medium text-[var(--xcode-orange-soft)] uppercase tracking-[0.15em]">
        {children}
      </h2>
    </div>
  );
}
