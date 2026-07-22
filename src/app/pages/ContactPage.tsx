import { motion } from "motion/react";
import { Send } from "lucide-react";
import { SOCIAL_LINKS } from "../config/site";
import { personal } from "../data/personal";
import { BackButton, SectionLabel } from "../components/shared/PortfolioUI";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

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

export function ContactPage({ onBack }: { onBack: () => void }) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const body = `${message}\n\n— ${name}\n${email}`;

    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="mx-auto max-w-[960px] px-6 py-8 sm:px-12 sm:py-11"
    >
      <BackButton onClick={onBack} />
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

      <div className="max-w-2xl">
        <SectionLabel>Send a Message</SectionLabel>
        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="font-mono text-xs text-[#9EB1C4]">Name</span>
              <Input
                name="name"
                autoComplete="name"
                required
                placeholder="Your name"
                className="h-11 border-[#6AA3D8]/25 bg-[#061C30]/70 text-[#F4F7FB] placeholder:text-[#58758E] focus-visible:border-[#0A84FF] focus-visible:ring-[#0A84FF]/20"
              />
            </label>
            <label className="space-y-2">
              <span className="font-mono text-xs text-[#9EB1C4]">Email</span>
              <Input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="h-11 border-[#6AA3D8]/25 bg-[#061C30]/70 text-[#F4F7FB] placeholder:text-[#58758E] focus-visible:border-[#0A84FF] focus-visible:ring-[#0A84FF]/20"
              />
            </label>
          </div>

          <label className="mt-4 block space-y-2">
            <span className="font-mono text-xs text-[#9EB1C4]">Subject</span>
            <Input
              name="subject"
              required
              placeholder="What would you like to talk about?"
              className="h-11 border-[#6AA3D8]/25 bg-[#061C30]/70 text-[#F4F7FB] placeholder:text-[#58758E] focus-visible:border-[#0A84FF] focus-visible:ring-[#0A84FF]/20"
            />
          </label>

          <label className="mt-4 block space-y-2">
            <span className="font-mono text-xs text-[#9EB1C4]">Message</span>
            <Textarea
              name="message"
              required
              rows={6}
              placeholder="Write your message here..."
              className="min-h-36 resize-y border-[#6AA3D8]/25 bg-[#061C30]/70 text-[#F4F7FB] placeholder:text-[#58758E] focus-visible:border-[#0A84FF] focus-visible:ring-[#0A84FF]/20"
            />
          </label>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-[#7897B2]">Opens your default email app to send the message.</p>
            <button type="submit" className="xcode-primary-button inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-mono text-sm font-medium">
              Send Message
              <Send size={14} />
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
