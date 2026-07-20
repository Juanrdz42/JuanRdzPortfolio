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
          <span className="text-[var(--xcode-orange-soft)]">const</span>{" "}
          <span className="text-[#46C9D7]">juan</span>{" = {"}
        </Line>
        <Line number={2}>
          {"  "}<span className="text-[#B8C9DA]">role</span>: <span className="text-[#FF7AB2]">&quot;{personal.role}&quot;</span>,
        </Line>
        <Line number={3}>{"  "}<span className="text-[#B8C9DA]">interests</span>: [</Line>
        {personal.interests.map((interest, index) => (
          <Line key={interest} number={index + 4}>
            {"    "}<span className="text-[#FF7AB2]">&quot;{interest}&quot;</span>,
          </Line>
        ))}
        <Line number={8}>{"  "}],</Line>
        <Line number={9}>
          {"  "}<span className="text-[#B8C9DA]">location</span>: <span className="text-[#FF7AB2]">&quot;{personal.location}&quot;</span>,
        </Line>
        <Line number={10}>{"};"}</Line>
      </div>
    </motion.aside>
  );
}
