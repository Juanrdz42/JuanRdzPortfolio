import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ArrowLeft,
  Calendar,
  MapPin,
  Download,
  FileCode,
  FolderOpen,
  Folder,
} from "lucide-react";
import { clsx } from "clsx";

// ─── Types ────────────────────────────────────────────────────────────────────

type Page =
  | "home"
  | "about"
  | "experience"
  | "leadership"
  | "contact"
  | "project-oasis"
  | "project-ensenname"
  | "project-awaq";

interface Project {
  id: Page;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  overview: string;
  contribution: string;
  architecture: string;
  metrics: { label: string; value: string }[];
  gallery: string[];
  challenges: string;
  lessons: string;
  github: string;
  demo?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: "project-oasis",
    name: "Oasis",
    tagline: "AI-powered mental wellness companion for college students",
    description:
      "A mobile-first platform combining GPT-4 conversation therapy, mood tracking, and personalized wellness recommendations. Built for the college mental health gap.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=520&fit=crop&auto=format",
    tech: ["React Native", "Node.js", "OpenAI API", "MongoDB", "AWS Lambda", "Expo"],
    overview:
      "Oasis was born from a hackathon prompt about mental health accessibility. College students face unique stressors but rarely seek traditional therapy. Oasis bridges that gap with conversational AI, structured check-ins, and evidence-based CBT exercises delivered through a calm, minimal interface.",
    contribution:
      "I led the full-stack architecture — designing the Express API, integrating GPT-4 with custom system prompts for safe therapeutic dialogue, building the React Native UI with animated mood wheels, and deploying the backend as serverless functions on AWS Lambda to keep costs near zero.",
    architecture:
      "Client (React Native/Expo) → API Gateway → Lambda functions → OpenAI API. MongoDB Atlas stores conversation threads and mood logs. Pinecone vector DB enables semantic search over a user's history for context-aware responses. All LLM output passes through a safety classifier before delivery.",
    metrics: [
      { label: "Active Users", value: "500+" },
      { label: "App Store Rating", value: "4.8 ★" },
      { label: "Sessions Logged", value: "12,400+" },
      { label: "Avg. Session", value: "8.3 min" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop&auto=format",
    ],
    challenges:
      "The hardest challenge was ensuring AI responses never substitute for real therapy. We built a safety classifier that detects crisis language and routes users to human resources before GPT-4 responds. Balancing response warmth with clinical guardrails took three iterations of prompt engineering.",
    lessons:
      "Prompt engineering is an engineering discipline, not a hack. Investing time in a structured system prompt — with explicit personas, boundaries, and fallback behaviors — was more impactful than any model upgrade.",
    github: "https://github.com",
    demo: "https://oasis-app.demo",
  },
  {
    id: "project-ensenname",
    name: "EnSeñame",
    tagline: "Gamified Spanish learning for K–12 classrooms",
    description:
      "A web platform adapting Duolingo-style gamification to classroom-aligned Spanish curricula. Used by teachers across three school districts with 1,200+ student accounts.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&h=520&fit=crop&auto=format",
    tech: ["Next.js 14", "TypeScript", "Django REST", "PostgreSQL", "Tailwind CSS", "Vercel"],
    overview:
      "EnSeñame (\"Teach Me\" in Spanish) is a platform co-designed with public school Spanish teachers to improve student engagement. It maps lessons to Common Core language standards and gives teachers a real-time dashboard of class progress.",
    contribution:
      "I architected the full frontend in Next.js 14 with App Router, designed the gamification engine (XP, streaks, badges), built the teacher dashboard with Recharts analytics, and co-wrote the Django API for lesson sequencing and progress tracking.",
    architecture:
      "Next.js frontend on Vercel with SSR for lesson pages and CSR for the game engine. Django REST API handles content delivery and progress persistence. PostgreSQL with partitioned tables for per-student event logs. Redis for leaderboard ranking.",
    metrics: [
      { label: "Schools Using", value: "3 Districts" },
      { label: "Student Accounts", value: "1,200+" },
      { label: "Engagement Rate", value: "85%" },
      { label: "Weekly Sessions", value: "4.2 avg" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format",
    ],
    challenges:
      "Getting teachers to actually adopt a new tool was harder than building it. We ran three rounds of classroom pilots, iterating on the teacher dashboard based on direct feedback. The biggest friction point was the grade export flow — teachers needed it to integrate with their existing gradebooks.",
    lessons:
      "Build for the person who has to justify the tool to their administration, not just the person using it daily. Teacher buy-in required making reporting effortless and defensible.",
    github: "https://github.com",
    demo: "https://ensenname.vercel.app",
  },
  {
    id: "project-awaq",
    name: "AWAQ",
    tagline: "IoT environmental monitoring for field researchers",
    description:
      "A distributed sensor network and real-time dashboard for tracking temperature, humidity, and air quality in remote ecosystems using LoRa mesh networking.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=520&fit=crop&auto=format",
    tech: ["Raspberry Pi", "Python", "MQTT", "React", "InfluxDB", "Grafana", "Docker"],
    overview:
      "AWAQ (named after a Quechua word for weaver) was built for field ecology researchers who need reliable sensor data without cellular connectivity. The system uses a mesh of Raspberry Pi Zero nodes communicating over LoRa radio, syncing to a base station that pushes data to a cloud dashboard when internet is available.",
    contribution:
      "I wrote the Python firmware running on each Pi node — sensor polling, local buffering with SQLite, LoRa packet encoding — and built the React dashboard with real-time InfluxDB queries, threshold alerts, and CSV export for research workflows.",
    architecture:
      "Pi nodes (Python firmware) → LoRa mesh → Base station Pi → MQTT broker → Telegraf → InfluxDB → React dashboard. Docker Compose orchestrates the stack. Node-RED handles alert routing to email and SMS.",
    metrics: [
      { label: "Sensors Deployed", value: "15 Nodes" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Data Points/Day", value: "86,400" },
      { label: "Battery Life", value: "72 hrs" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=400&fit=crop&auto=format",
    ],
    challenges:
      "LoRa packet loss in dense forest canopy was consistently 15% higher than in open terrain. We solved it by implementing a store-and-forward protocol with per-node sequence numbers and adaptive retransmission intervals based on RSSI readings.",
    lessons:
      "Offline-first architecture is not optional in field research — it is the baseline assumption. Every component had to function for 48+ hours without cloud connectivity and reconcile state gracefully when connectivity resumed.",
    github: "https://github.com",
  },
];

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Cisco Systems",
    period: "May 2024 – Aug 2024",
    location: "San Jose, CA",
    description:
      "Worked on the Webex collaboration platform team, building real-time features for the meeting analytics dashboard. Shipped three features to production serving 500K+ daily active users.",
    bullets: [
      "Reduced dashboard load time by 38% by migrating REST polling to GraphQL subscriptions",
      "Built an automated testing pipeline with Playwright that cut regression detection time from 4 days to 6 hours",
      "Mentored two junior interns on TypeScript patterns and code review culture",
    ],
    tech: ["TypeScript", "React", "GraphQL", "Playwright", "Java"],
    metric: "38% faster load",
  },
  {
    role: "Undergraduate Research Assistant",
    company: "University AI & Society Lab",
    period: "Jan 2024 – Present",
    location: "Remote",
    description:
      "Assisting Prof. Dr. Maria González in studying algorithmic bias in NLP systems used in K–12 educational software. Building evaluation pipelines to audit large language model outputs for demographic fairness.",
    bullets: [
      "Developed a fairness evaluation framework in Python used to benchmark 6 commercial LLMs",
      "Co-authored a paper under review at FAccT 2025 on bias propagation in adaptive learning systems",
      "Built a web scraper and annotation tool handling 50K+ student response samples",
    ],
    tech: ["Python", "HuggingFace", "pandas", "scikit-learn", "FastAPI"],
    metric: "6 LLMs evaluated",
  },
  {
    role: "Teaching Assistant — Data Structures",
    company: "Dept. of Computer Science",
    period: "Aug 2023 – Dec 2023",
    location: "On-campus",
    description:
      "Led weekly lab sections for CS 201 (Data Structures & Algorithms) for 45 students. Held office hours, graded assignments, and designed two new programming projects adopted by the course coordinator.",
    bullets: [
      "Improved section pass rate from 71% to 89% through targeted lab curriculum redesign",
      "Created interactive visualizations of tree traversal algorithms used by 300+ students",
      "Received 4.9/5.0 student evaluation — highest in the department for that semester",
    ],
    tech: ["Java", "Python", "Algorithm Design"],
    metric: "4.9 / 5.0 rating",
  },
];

const leadershipData = {
  org: "SEITC",
  fullName: "Society of Engineering & Information Technology Champions",
  role: "President",
  period: "Aug 2023 – Present",
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=500&fit=crop&auto=format",
  overview:
    "SEITC is a student-led organization at the intersection of engineering, computer science, and community impact. As president, I lead a 40-member chapter focused on technical mentorship, industry networking, and inclusive STEM outreach across the university.",
  bullets: [
    "Grew membership from 14 to 40 active members in two semesters",
    "Organized Tech Summit 2024 — a 300-attendee event with speakers from Google, Microsoft, and Cisco",
    "Launched a peer mentorship program pairing 25 underclassmen with upperclassmen mentors",
    "Secured $12,000 in sponsorship from four corporate partners for chapter activities",
    "Ran biweekly technical workshops covering system design, LeetCode, and resume reviews",
  ],
  metrics: [
    { label: "Active Members", value: "40" },
    { label: "Events Hosted", value: "18" },
    { label: "Sponsorship", value: "$12K" },
    { label: "Mentorship Pairs", value: "25" },
  ],
};

// ─── Shared Components ────────────────────────────────────────────────────────

function TechChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#07182C] border border-[#294F70] text-[#9EB1C4] tracking-wide">
      {label}
    </span>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#04111F] border border-[#294F70] rounded-xl p-5 flex flex-col gap-1.5">
      <span className="text-2xl font-semibold text-[#F4F7FB] tracking-tight">{value}</span>
      <span className="text-[10px] font-mono text-[#9EB1C4] tracking-widest uppercase">{label}</span>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="h-px w-5 bg-[#0A84FF] flex-shrink-0" />
      <h2 className="text-[10px] font-mono font-medium text-[#0A84FF] uppercase tracking-[0.15em]">
        {children}
      </h2>
    </div>
  );
}

// ─── Project Detail Page ──────────────────────────────────────────────────────

function ProjectPage({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="max-w-[820px] mx-auto px-10 py-9"
    >
      <BackButton onClick={onBack} />

      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden mb-8 border border-[#294F70] bg-[#04111F]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07182C]/80 via-[#07182C]/20 to-transparent" />
        <div className="absolute bottom-6 left-7">
          <h1 className="text-4xl font-semibold text-[#F4F7FB] tracking-tight mb-1">{project.name}</h1>
          <p className="text-[#9EB1C4] text-sm">{project.tagline}</p>
        </div>
      </div>

      {/* Tech + Buttons row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-9">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechChip key={t} label={t} />
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B2740] border border-[#294F70] text-xs font-mono text-[#9EB1C4] hover:text-[#F4F7FB] hover:border-[#0A84FF]/60 transition-all"
          >
            <Github size={13} />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A84FF] text-xs font-mono text-white hover:bg-[#0070d4] transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Content sections */}
      <div className="space-y-9">
        <div>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-[#9EB1C4] leading-relaxed text-sm">{project.overview}</p>
        </div>

        <div>
          <SectionLabel>My Contribution</SectionLabel>
          <p className="text-[#9EB1C4] leading-relaxed text-sm">{project.contribution}</p>
        </div>

        <div>
          <SectionLabel>Architecture</SectionLabel>
          <div className="bg-[#04111F] border border-[#294F70] rounded-xl p-5">
            <p className="text-[#9EB1C4] font-mono text-xs leading-relaxed">{project.architecture}</p>
          </div>
        </div>

        <div>
          <SectionLabel>Key Metrics</SectionLabel>
          <div className="grid grid-cols-4 gap-3">
            {project.metrics.map((m) => (
              <MetricCard key={m.label} label={m.label} value={m.value} />
            ))}
          </div>
        </div>

        <div>
          <SectionLabel>Gallery</SectionLabel>
          <div className="grid grid-cols-3 gap-3">
            {project.gallery.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-[#294F70] bg-[#04111F]">
                <img
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  className="w-full h-36 object-cover opacity-90"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionLabel>Challenges</SectionLabel>
          <p className="text-[#9EB1C4] leading-relaxed text-sm">{project.challenges}</p>
        </div>

        <div className="pb-12">
          <SectionLabel>Lessons Learned</SectionLabel>
          <p className="text-[#9EB1C4] leading-relaxed text-sm">{project.lessons}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Experience Page ──────────────────────────────────────────────────────────

function ExperiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="max-w-[820px] mx-auto px-10 py-9"
    >
      <div className="mb-8">
        <p className="text-[10px] font-mono text-[#0A84FF] uppercase tracking-[0.15em] mb-2">Career</p>
        <h1 className="text-3xl font-semibold text-[#F4F7FB] tracking-tight">Experience</h1>
      </div>

      <div className="rounded-2xl overflow-hidden border border-[#294F70] mb-10 bg-[#04111F]">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=280&fit=crop&auto=format"
          alt="Professional workspace"
          className="w-full h-44 object-cover opacity-80"
        />
      </div>

      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[#294F70]" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute left-[11px] top-1.5 w-2 h-2 rounded-full bg-[#0A84FF] ring-[3px] ring-[#07182C]" />

              <div className="bg-[#0B2740] border border-[#294F70] rounded-2xl p-6 hover:border-[#0A84FF]/40 transition-colors duration-300">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-semibold text-[#F4F7FB] text-sm">{exp.role}</h3>
                    <p className="text-[#0A84FF] text-xs font-mono mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-mono text-[#0A84FF] bg-[#0A84FF]/8 border border-[#0A84FF]/20 px-2.5 py-1 rounded-md flex-shrink-0">
                    {exp.metric}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-[#9EB1C4] font-mono mb-4 mt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={10} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={10} />
                    {exp.location}
                  </span>
                </div>

                <p className="text-[#9EB1C4] text-xs mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-xs text-[#9EB1C4] flex gap-2.5 leading-relaxed">
                      <span className="text-[#0A84FF] flex-shrink-0 mt-[1px]">›</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <TechChip key={t} label={t} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Leadership Page ──────────────────────────────────────────────────────────

function LeadershipPage() {
  const ld = leadershipData;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="max-w-[820px] mx-auto px-10 py-9"
    >
      <div className="mb-8">
        <p className="text-[10px] font-mono text-[#0A84FF] uppercase tracking-[0.15em] mb-2">Involvement</p>
        <h1 className="text-3xl font-semibold text-[#F4F7FB] tracking-tight">Leadership</h1>
      </div>

      <div className="relative rounded-2xl overflow-hidden border border-[#294F70] mb-8 bg-[#04111F]">
        <img
          src={ld.image}
          alt="SEITC leadership"
          className="w-full h-56 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07182C]/85 via-[#07182C]/20 to-transparent" />
        <div className="absolute bottom-6 left-7">
          <p className="text-[10px] font-mono text-[#0A84FF] uppercase tracking-[0.15em] mb-1">{ld.role}</p>
          <h2 className="text-2xl font-semibold text-[#F4F7FB] tracking-tight">{ld.org}</h2>
          <p className="text-[#9EB1C4] text-xs font-mono mt-0.5">{ld.fullName}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-mono text-[#9EB1C4] mb-7">
        <Calendar size={12} />
        {ld.period}
      </div>

      <div className="grid grid-cols-4 gap-3 mb-9">
        {ld.metrics.map((m) => (
          <MetricCard key={m.label} label={m.label} value={m.value} />
        ))}
      </div>

      <div className="space-y-8 pb-12">
        <div>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-[#9EB1C4] leading-relaxed text-sm">{ld.overview}</p>
        </div>

        <div>
          <SectionLabel>Impact & Initiatives</SectionLabel>
          <ul className="space-y-3">
            {ld.bullets.map((b, i) => (
              <li key={i} className="text-sm text-[#9EB1C4] flex gap-3 leading-relaxed">
                <span className="text-[#0A84FF] flex-shrink-0 mt-0.5">›</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="max-w-[820px] mx-auto px-10 py-9"
    >
      <div className="mb-8">
        <p className="text-[10px] font-mono text-[#0A84FF] uppercase tracking-[0.15em] mb-2">Hello, world.</p>
        <h1 className="text-3xl font-semibold text-[#F4F7FB] tracking-tight">About Me</h1>
      </div>

      <div className="grid grid-cols-[1fr_200px] gap-8 mb-10">
        <div className="space-y-4 text-[#9EB1C4] text-sm leading-relaxed">
          <p>
            {"I'm Juan Antonio Rodríguez, a Computer Science student and software engineer passionate about building products at the intersection of AI, IoT, and human-centered design. I thrive in full-stack environments — equally comfortable writing Python firmware for embedded hardware and architecting scalable cloud APIs."}
          </p>
          <p>
            My work spans mobile apps, web platforms, and distributed sensor networks. I am drawn to projects with real-world impact: improving mental health access, making language learning more effective, and connecting field researchers to live data.
          </p>
          <p>
            {"When I'm not coding, I'm leading SEITC, mentoring underclassmen, or obsessing over clean system design and the aesthetics of developer tooling."}
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-[#294F70] bg-[#04111F]" style={{ aspectRatio: "3/4" }}>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format"
            alt="Juan Antonio Rodríguez"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mb-9">
        <SectionLabel>Technical Skills</SectionLabel>
        <div className="space-y-3">
          {[
            { category: "Languages", skills: ["TypeScript", "Python", "Java", "C", "SQL"] },
            { category: "Frontend", skills: ["React", "Next.js", "React Native", "Tailwind CSS"] },
            { category: "Backend", skills: ["Node.js", "Django", "FastAPI", "GraphQL", "REST"] },
            { category: "Infra", skills: ["AWS", "Docker", "PostgreSQL", "MongoDB", "Redis", "InfluxDB"] },
            { category: "AI / ML", skills: ["OpenAI API", "HuggingFace", "LangChain", "scikit-learn"] },
          ].map((group) => (
            <div key={group.category} className="flex gap-5 items-start">
              <span className="text-[11px] font-mono text-[#9EB1C4] w-20 flex-shrink-0 pt-0.5">{group.category}</span>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <TechChip key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-12">
        <SectionLabel>Education</SectionLabel>
        <div className="bg-[#0B2740] border border-[#294F70] rounded-xl p-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[#F4F7FB] text-sm font-medium">B.S. Computer Science</h3>
              <p className="text-[#0A84FF] text-xs font-mono mt-0.5">
                University of Puerto Rico, Río Piedras
              </p>
              <p className="text-[#9EB1C4] text-xs mt-1.5">Expected May 2026 · GPA 3.87</p>
            </div>
            <span className="text-[11px] font-mono text-[#9EB1C4] bg-[#04111F] border border-[#294F70] px-2.5 py-1 rounded-md flex-shrink-0">
              {"Dean's List"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Contact Page ─────────────────────────────────────────────────────────────

function ContactPage() {
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

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
    >
      {/* Hero */}
      <div
        className="px-10 pt-14 pb-12 border-b border-[#294F70]/50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(41,79,112,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(41,79,112,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <p className="text-[10px] font-mono text-[#0A84FF] tracking-[0.18em] uppercase mb-4">
          Software Engineer
        </p>
        <h1 className="text-[52px] font-semibold text-[#F4F7FB] leading-[1.1] mb-4 tracking-tight">
          Juan Antonio
          <br />
          Rodríguez
        </h1>
        <p className="text-[#9EB1C4] text-base max-w-md leading-relaxed">
          Building AI, IoT, and Full-Stack products
          <br />
          that work in the real world.
        </p>

        <div className="flex gap-3 mt-8">
          <button
            onClick={() => onNavigate("about")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A84FF] text-white text-xs font-mono font-medium hover:bg-[#0070d4] transition-colors"
          >
            View Work
            <ChevronRight size={13} />
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B2740] border border-[#294F70] text-[#9EB1C4] text-xs font-mono hover:text-[#F4F7FB] hover:border-[#0A84FF]/50 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Projects */}
      <div className="px-10 py-9">
        <p className="text-[10px] font-mono text-[#9EB1C4] uppercase tracking-[0.15em] mb-6">
          Selected Projects
        </p>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => onNavigate(project.id)}
              className="group text-left bg-[#0B2740] border border-[#294F70] rounded-2xl overflow-hidden hover:border-[#0A84FF]/50 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(10,132,255,0.06)]"
            >
              <div className="flex">
                <div className="w-64 flex-shrink-0 bg-[#04111F] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                    style={{ minHeight: "160px" }}
                  />
                </div>
                <div className="flex-1 px-7 py-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-[#F4F7FB] tracking-tight">{project.name}</h3>
                      <span className="text-[10px] font-mono text-[#9EB1C4] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        Open
                        <ChevronRight size={10} />
                      </span>
                    </div>
                    <p className="text-[#9EB1C4] text-xs leading-relaxed mb-5 max-w-md">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 5).map((t) => (
                        <TechChip key={t} label={t} />
                      ))}
                      {project.tech.length > 5 && (
                        <span className="text-[10px] font-mono text-[#9EB1C4] self-center ml-0.5">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}) {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [leadershipOpen, setLeadershipOpen] = useState(true);

  const fileItem = (label: string, page: Page, depth = 0) => (
    <button
      key={page}
      onClick={() => onNavigate(page)}
      className={clsx(
        "w-full flex items-center gap-2 px-2.5 py-[5px] rounded text-left transition-colors duration-150",
        depth === 1 && "pl-7",
        currentPage === page
          ? "bg-[#0A84FF]/12 text-[#F4F7FB]"
          : "text-[#9EB1C4] hover:text-[#F4F7FB] hover:bg-white/[0.04]"
      )}
    >
      <FileCode
        size={12}
        className={clsx("flex-shrink-0", currentPage === page ? "text-[#0A84FF]" : "opacity-40")}
      />
      <span className="text-[11px] font-mono truncate">{label}</span>
    </button>
  );

  return (
    <aside className="border-r border-[#294F70] bg-[#04111F] flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto [scrollbar-width:none] py-3.5 px-2">
        {/* Root folder */}
        <div className="flex items-center gap-1.5 px-2.5 mb-3">
          <FolderOpen size={12} className="text-[#0A84FF] flex-shrink-0" />
          <span className="text-[11px] font-mono text-[#9EB1C4] font-medium truncate">
            juan-antonio
          </span>
        </div>

        <div className="space-y-0.5">
          {fileItem("About.tsx", "about")}
          {fileItem("Experience.tsx", "experience")}

          {/* Projects folder */}
          <button
            onClick={() => setProjectsOpen((v) => !v)}
            className="w-full flex items-center gap-1.5 px-2.5 py-[5px] rounded text-xs text-[#9EB1C4] hover:text-[#F4F7FB] transition-colors hover:bg-white/[0.04]"
          >
            {projectsOpen ? (
              <ChevronDown size={10} className="flex-shrink-0" />
            ) : (
              <ChevronRight size={10} className="flex-shrink-0" />
            )}
            <Folder size={12} className="text-[#0A84FF]/60 flex-shrink-0" />
            <span className="text-[11px] font-mono">Projects</span>
          </button>

          {projectsOpen && (
            <div className="space-y-0.5">
              {fileItem("Oasis.tsx", "project-oasis", 1)}
              {fileItem("EnSeñame.tsx", "project-ensenname", 1)}
              {fileItem("AWAQ.tsx", "project-awaq", 1)}
            </div>
          )}

          {/* Leadership folder */}
          <button
            onClick={() => setLeadershipOpen((v) => !v)}
            className="w-full flex items-center gap-1.5 px-2.5 py-[5px] rounded text-xs text-[#9EB1C4] hover:text-[#F4F7FB] transition-colors hover:bg-white/[0.04]"
          >
            {leadershipOpen ? (
              <ChevronDown size={10} className="flex-shrink-0" />
            ) : (
              <ChevronRight size={10} className="flex-shrink-0" />
            )}
            <Folder size={12} className="text-[#0A84FF]/60 flex-shrink-0" />
            <span className="text-[11px] font-mono">Leadership</span>
          </button>

          {leadershipOpen && (
            <div className="space-y-0.5">
              {fileItem("SEITC.tsx", "leadership", 1)}
            </div>
          )}

          {fileItem("Contact.tsx", "contact")}
        </div>
      </div>

      {/* Status bar */}
      <div className="border-t border-[#294F70] px-3 py-2 flex-shrink-0">
        <p className="text-[10px] font-mono text-[#9EB1C4]/50 truncate">
          TypeScript JSX · UTF-8
        </p>
      </div>
    </aside>
  );
}

// ─── Toolbar ─────────────────────────────────────────────────────────────────

function Toolbar({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}) {
  const navItems: { label: string; page: Page }[] = [
    { label: "About", page: "about" },
    { label: "Experience", page: "experience" },
    { label: "Projects", page: "home" },
    { label: "Leadership", page: "leadership" },
    { label: "Contact", page: "contact" },
  ];

  const isProjectPage = currentPage.startsWith("project-");
  const activeNavPage =
    isProjectPage ? "home" : currentPage;

  return (
    <header className="col-span-2 h-10 flex-shrink-0 border-b border-[#294F70] bg-[#04111F] flex items-center px-4 gap-3">
      {/* Traffic lights */}
      <div className="flex items-center gap-[5px] mr-1">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>

      <button
        onClick={() => onNavigate("home")}
        className="text-[11px] font-mono text-[#F4F7FB]/70 hover:text-[#0A84FF] transition-colors"
      >
        jar.portfolio
      </button>

      <span className="h-3.5 w-px bg-[#294F70]" />

      <nav className="flex items-center gap-0.5">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={clsx(
              "px-3 py-1 rounded text-[11px] font-mono transition-colors",
              activeNavPage === item.page
                ? "text-[#0A84FF] bg-[#0A84FF]/10"
                : "text-[#9EB1C4] hover:text-[#F4F7FB]"
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex-1" />

      <div className="flex items-center gap-1.5">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-mono text-[#9EB1C4] hover:text-[#F4F7FB] border border-[#294F70] hover:border-[#0A84FF]/40 transition-colors"
        >
          <Download size={11} />
          Resume
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-mono text-[#9EB1C4] hover:text-[#F4F7FB] border border-[#294F70] hover:border-[#0A84FF]/40 transition-colors"
        >
          <Github size={11} />
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-mono bg-[#0A84FF] text-white hover:bg-[#0070d4] transition-colors"
        >
          <Linkedin size={11} />
          LinkedIn
        </a>
      </div>
    </header>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const mainRef = useRef<HTMLElement>(null);

  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={navigate} />;
      case "about":
        return <AboutPage />;
      case "experience":
        return <ExperiencePage />;
      case "leadership":
        return <LeadershipPage />;
      case "contact":
        return <ContactPage />;
      case "project-oasis":
      case "project-ensenname":
      case "project-awaq": {
        const project = projects.find((p) => p.id === currentPage);
        if (!project) return <HomePage onNavigate={navigate} />;
        return <ProjectPage project={project} onBack={() => navigate("home")} />;
      }
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden"
      style={{
        display: "grid",
        gridTemplateRows: "40px 1fr",
        gridTemplateColumns: "216px 1fr",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Toolbar currentPage={currentPage} onNavigate={navigate} />
      <Sidebar currentPage={currentPage} onNavigate={navigate} />
      <main
        ref={mainRef}
        className="overflow-y-auto bg-[#07182C] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {renderPage()}
      </main>
    </div>
  );
}
