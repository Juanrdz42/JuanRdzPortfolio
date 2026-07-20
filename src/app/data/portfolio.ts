import type { Project } from "../types/portfolio";

export const projects: Project[] = [
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

export const experiences = [
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

export const leadershipData = {
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
