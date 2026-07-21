import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Braces, MoreHorizontal } from "lucide-react";
import { personal } from "../../data/personal";

function Line({ number, children }: { number: number; children?: ReactNode }) {
  return (
    <div className="grid grid-cols-[24px_1fr] gap-4 leading-7">
      <span className="select-none text-right text-[#54718C]">{number}</span>
      <code className="whitespace-pre-wrap">{children}</code>
    </div>
  );
}

export function CodePreview() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
      className="code-preview min-w-0 overflow-hidden rounded-2xl"
      aria-label="Profile shown as TypeScript code"
    >
      <div className="flex h-10 items-center justify-between border-b border-[#376B99]/25 bg-[#0B2746]/75 px-3.5">
        <div className="flex items-center gap-2 text-xs font-mono text-[#A8BCD0]">
          <Braces size={14} className="text-[#1C9BFF]" />
          Profile.ts
        </div>
        <MoreHorizontal size={16} className="text-[#67839D]" aria-hidden="true" />
      </div>

      <div className="overflow-x-auto px-4 py-5 font-mono text-[13px] text-[#D5DEE8] [scrollbar-width:none]">
        <Line number={1}>
          <span className="text-[var(--xcode-orange-soft)]">export</span>{" "}
          <span className="text-[var(--xcode-orange-soft)]">const</span>{" "}
          <span className="text-[#46C9D7]">profile</span>{" = {"}
        </Line>
        <Line number={2}>
          {"  "}<span className="text-[#B8C9DA]">university</span>: <span className="text-[#FF7AB2]">&quot;{personal.university}&quot;</span>,
        </Line>
        <Line number={3}>
          {"  "}<span className="text-[#B8C9DA]">major</span>: <span className="text-[#FF7AB2]">&quot;{personal.degree}&quot;</span>,
        </Line>
        <Line number={4} />
        <Line number={5}>{"  "}<span className="text-[#B8C9DA]">drivenBy</span>: [</Line>
        {personal.drivenBy.map((passion, index) => (
          <Line key={passion} number={index + 6}>
            {"    "}<span className="text-[#FF7AB2]">&quot;{passion}&quot;</span>,
          </Line>
        ))}
        <Line number={9}>{"  "}],</Line>
        <Line number={10} />
        <Line number={11}>{"  "}<span className="text-[#B8C9DA]">openTo</span>: [</Line>
        {personal.openTo.map((opportunity, index) => (
          <Line key={opportunity} number={index + 12}>
            {"    "}<span className="text-[#FF7AB2]">&quot;{opportunity}&quot;</span>,
          </Line>
        ))}
        <Line number={14}>{"  "}]</Line>
        <Line number={15}>{"};"}</Line>
      </div>
    </motion.aside>
  );
}
