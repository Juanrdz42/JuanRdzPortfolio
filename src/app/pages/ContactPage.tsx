import { motion } from "motion/react";
import { SOCIAL_LINKS } from "../config/site";
import { personal } from "../data/personal";

const contactItems = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  {
    label: "LinkedIn",
    value: "juan-antonio-rodriguez-reyna",
    href: SOCIAL_LINKS.linkedin,
  },
  { label: "GitHub", value: "github.com/Juanrdz42", href: SOCIAL_LINKS.github },
  { label: "Location", value: personal.location, href: null },
];

export function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="mx-auto max-w-[960px] px-12 py-11"
    >
      <div className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--xcode-orange-soft)]">
          Get in touch
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#F4F7FB]">Contact</h1>
      </div>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#9EB1C4]">
        The best way to contact me is by email or LinkedIn. I am based in Monterrey, Nuevo León, Mexico.
      </p>

      <div className="mb-12 max-w-2xl space-y-2">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className="glass-card glass-card-interactive flex items-center gap-5 rounded-xl px-5 py-3.5 transition-all duration-300"
          >
            <span className="w-20 flex-shrink-0 font-mono text-xs text-[#9EB1C4]">{item.label}</span>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-xs text-[#0A84FF] transition-colors hover:text-[#F4F7FB]"
              >
                {item.value}
              </a>
            ) : (
              <span className="font-mono text-xs text-[#F4F7FB]">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
