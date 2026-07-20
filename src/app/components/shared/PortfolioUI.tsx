import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

export function TechChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#07182C] border border-[#294F70] text-[#9EB1C4] tracking-wide">
      {label}
    </span>
  );
}
export function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#04111F] border border-[#294F70] rounded-xl p-5 flex flex-col gap-1.5">
      <span className="text-2xl font-semibold text-[#F4F7FB] tracking-tight">{value}</span>
      <span className="text-[10px] font-mono text-[#9EB1C4] tracking-widest uppercase">{label}</span>
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
      <span className="h-px w-5 bg-[#0A84FF] flex-shrink-0" />
      <h2 className="text-[10px] font-mono font-medium text-[#0A84FF] uppercase tracking-[0.15em]">
        {children}
      </h2>
    </div>
  );
}
