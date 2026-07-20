import { motion } from "motion/react";

export function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="max-w-[820px] mx-auto px-10 py-9"
    >
      <div className="mb-8">
        <p className="text-[10px] font-mono text-[#0A84FF] uppercase tracking-[0.15em] mb-2">Get in touch</p>
        <h1 className="text-3xl font-semibold text-[#F4F7FB] tracking-tight">Contact</h1>
      </div>

      <p className="text-[#9EB1C4] text-sm mb-8 leading-relaxed max-w-lg">
        Open to internship and new grad opportunities, research collaborations, and interesting side projects. The best way to reach me is email — I typically respond within 24 hours.
      </p>

      <div className="space-y-2 mb-12 max-w-lg">
        {[
          { label: "Email", value: "juan.rodriguez@upr.edu", href: "mailto:juan.rodriguez@upr.edu" },
          { label: "LinkedIn", value: "linkedin.com/in/jantrodriguez", href: "#" },
          { label: "GitHub", value: "github.com/jantrodriguez", href: "#" },
          { label: "Location", value: "San Juan, Puerto Rico", href: null },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-5 bg-[#0B2740] border border-[#294F70] rounded-xl px-5 py-3.5"
          >
            <span className="text-[11px] font-mono text-[#9EB1C4] w-16 flex-shrink-0">{item.label}</span>
            {item.href ? (
              <a
                href={item.href}
                className="text-xs font-mono text-[#0A84FF] hover:text-[#F4F7FB] transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-xs font-mono text-[#F4F7FB]">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
