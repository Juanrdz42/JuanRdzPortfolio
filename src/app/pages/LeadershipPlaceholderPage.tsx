import { motion } from "motion/react";
import { BackButton } from "../components/shared/PortfolioUI";

export function LeadershipPlaceholderPage({ name, onBack }: { name: string; onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="mx-auto max-w-[960px] px-6 py-8 sm:px-12 sm:py-11"
    >
      <BackButton onClick={onBack} />
      <div>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--xcode-orange-soft)]">
          Leadership &amp; Outreach
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#F4F7FB]">{name}</h1>
      </div>
    </motion.div>
  );
}
