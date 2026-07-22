import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "project-oasis",
    name: "Oasis",
    tagline: "IoT smart hydration monitoring system",
    description:
      "An IoT hydration monitoring platform that combines embedded sensors, an Android application, SQL data storage, and AI-powered recommendations.",
    image: "/images/projects/oasis/jess.png",
    tech: ["ESP32", "MQTT", "SQL", "Android", "Gemini AI", "HX711", "BNO055"],
    overview:
      "Oasis started with a simple idea: helping people build healthier hydration habits through technology. What began as a concept gradually became a complete product as we designed multiple hardware prototypes, developed an IoT system around an ESP32, built a cloud-connected backend, and created an Android application that tracked water intake and generated AI-powered recommendations. The final project was selected from more than 100 engineering teams to be showcased at Expo Ingenierías at Tec de Monterrey.",
    contribution:
      "I worked across almost every part of the project. I contributed to hardware prototyping, designed the SQL database and backend architecture, implemented the data pipeline connecting the ESP32 with the Android application through MQTT, and contributed to the embedded software and AI recommendation system. One of my favorite moments was seeing data collected by the bottle successfully travel through the entire system and appear in the mobile application. It was the first time I had built an end-to-end IoT product, and seeing data travel from a sensor inside the bottle all the way to the mobile app was one of the most rewarding parts of the project.",
    contributionLabel: "My Role",
    challenges:
      "This project challenged me in a completely different way than traditional software projects. Every change to the hardware affected the embedded software, which often required updates to the backend and mobile application as well. Unlike software, fixing a problem wasn't as simple as changing a few lines of code. We often had to redesign parts of the bottle, wait for new 3D prints, reassemble the electronics, and test everything again before moving forward. It made me appreciate how iterative product development really is and taught me that building reliable systems requires patience just as much as technical knowledge.",
    challengesLabel: "Biggest Challenge",
    lessons:
      "Oasis changed the way I think about engineering. Before this project, I mostly focused on writing software. Building Oasis showed me that creating a successful product requires much more than that. It takes prototyping, testing, collaboration, and a willingness to keep improving the design until everything works together. Watching an idea evolve into a product that people could actually interact with was one of the most satisfying experiences I've had as an engineer.",
    lessonsLabel: "What I Learned",
    metrics: [
      { label: "Measurement Error", value: "< 5%" },
      { label: "Detection Accuracy", value: "~ 90%" },
      { label: "End-to-End Latency", value: "210–300 ms" },
      { label: "Expo Selection", value: "100+ teams" },
    ],
    gallery: [
      "/images/projects/oasis/xime.png",
      "/images/projects/oasis/juan.png",
      "/images/projects/oasis/jessy.png",
      "/images/projects/oasis/xime (2).png",
    ],
    galleryLabels: [
      "Expo Ingenierías Team",
      "Concept to Final Prototype",
      "Hardware",
      "End-to-End Platform",
    ],
  },
  {
    id: "project-ensenname",
    name: "EnSéñame",
    tagline: "AI-assisted Mexican Sign Language learning app",
    nameExplanation:
      "The name combines seña (sign) and enséñame (\"teach me\"), reflecting the goal of learning Mexican Sign Language through practice.",
    description:
      "An iOS application that teaches Mexican Sign Language through real-time hand gesture recognition, interactive lessons, and AI-assisted feedback.",
    image: "/images/projects/ensenname/ensename.png",
    tech: ["Swift", "Vision Framework", "Core ML"],
    features: ["Guided Lessons", "Practice Mode", "Sign Dictionary", "AI Feedback", "Real-Time Recognition"],
    overview:
      "Learning a Sign Language often means memorizing static images or videos, making it difficult to practice and receive immediate feedback. During a 48-hour hackathon, our team built EnSéñame, an iOS application that turns sign language practice into an interactive learning experience using real-time hand pose detection, guided lessons, and instant feedback. Our goal was to make learning LSM (Mexican Sign Language) feel closer to Duolingo than to a dictionary.",
    contribution:
      "I developed the computer vision pipeline using Apple's Vision Framework and Core ML to recognize Mexican Sign Language gestures in real time. Besides building the computer vision pipeline, I also helped design the learning experience by implementing guided lessons, practice challenges, and a sign dictionary, making the application feel more like an educational platform than a simple gesture classifier.",
    contributionLabel: "My Role",
    challenges:
      "One of the biggest challenges was balancing accuracy with the limited time of a 48-hour hackathon. We quickly realized that training a single model to recognize every sign produced inconsistent results, so we changed our approach and trained separate models for different lesson categories. That decision significantly improved recognition accuracy and allowed us to deliver a much more reliable experience before the deadline.",
    challengesLabel: "Biggest Challenge",
    lessons:
      "Before this hackathon, I had never trained a computer vision model or built an iOS app. In 48 hours, I learned both. More importantly, I learned that the first solution is rarely the right one, and sometimes changing direction completely is what makes a project work.",
    lessonsLabel: "What I Learned",
    gallery: ["/images/projects/ensenname/ensename.png"],
  },
  {
    id: "project-awaq",
    name: "AWAQ",
    tagline: "Unity WebGL and ASP.NET Core MVC platform",
    description:
      "A full-stack platform that integrates a Unity WebGL game with ASP.NET Core MVC, persistent player progress, authentication, and SQL-backed administration.",
    image: "/images/projects/awaq/1.png",
    tech: ["ASP.NET Core MVC", "Unity", "C#", "SQL"],
    overview:
      "This was my first software project developed for a real client. Over ten weeks, our team partnered with AWAQ ONGD to build a platform that teaches environmental field monitoring through a gamified Unity WebGL experience and a companion web application where users could track their learning progress while administrators monitored their activity through a companion dashboard.",
    contribution:
      "I was responsible for integrating the Unity WebGL game with the web platform by designing and developing the ASP.NET Core MVC backend and SQL database. I implemented authentication, player progress tracking, and the APIs that synchronized gameplay data with the admin dashboard, ensuring gameplay progress remained synchronized between the game and the web dashboard.",
    contributionLabel: "My Role",
    challenges:
      "To be honest, this was the most challenging project I had worked on at the time because of the number of technologies I had to learn in a short period to deliver a functional product. I had to learn Unity, ASP.NET Core MVC, SQL, authentication, REST APIs, and how to integrate all of them into a single application. It pushed me far outside my comfort zone and taught me how to quickly learn unfamiliar technologies while collaborating with a team to build software for a real client.",
    challengesLabel: "Biggest Challenge",
    lessons:
      "This project changed the way I viewed software engineering. Until then, most of my assignments ended once the code worked. AWAQ taught me that building software means understanding users, collaborating with a team, and creating systems that people can actually rely on. It was the project that made me realize I wanted to pursue software engineering professionally.",
    lessonsLabel: "What I Learned",
    gallery: [
      "/images/projects/awaq/5.png",
      "/images/projects/awaq/6.png",
      "/images/projects/awaq/2.png",
      "/images/projects/awaq/4.png",
      "/images/projects/awaq/3.png",
      "/images/projects/awaq/1.png",
    ],
    galleryLabels: ["Gameplay", "Gameplay", "Equipo", "Dashboard", "Login", "Admin panel"],
    galleryLabel: "Gallery",
    video: "/images/projects/awaq/awaq_demo.mp4",
    videoLabel: "Game Demo",
  },
];

export const experiences = [
  {
    role: "Data Engineer Specialist",
    company: "ITESM",
    period: "Sep 2025 – Dec 2025",
    location: "Monterrey, Nuevo León, Mexico",
    description:
      "Building production data pipelines that supported academic and administrative operations at Tecnológico de Monterrey.",
    overview:
      "Joining Tecnológico de Monterrey as a Data Engineer Specialist was my first experience working on production software used beyond the classroom. I worked on institutional data pipelines that processed thousands of student records and supported academic and administrative reporting across the university. It gave me a completely different perspective on software engineering, where reliability, data quality, and maintainability mattered just as much as writing new code.",
    responsibilities:
      "I maintained and optimized Python and SQL data pipelines that processed institutional data from multiple sources. I automated validation and transformation workflows, improved data quality, and collaborated with analysts and stakeholders to ensure reliable reporting across the university. Working on production systems also taught me how important it is to write code that other engineers can understand and maintain.",
    challenge:
      "The biggest adjustment was shifting from academic projects to production systems. In school, mistakes usually affected only my team. Here, every change had the potential to impact thousands of records and the people who relied on that information every day. It taught me to slow down, validate every change carefully, and think about long-term reliability before writing code.",
    lessons:
      "This experience completely changed the way I approach software development. I learned that good engineering isn't only about building new features. It's also about creating systems that people can trust, writing maintainable code, and understanding the impact that even small changes can have in production. It gave me my first experience working as part of a professional engineering team and strengthened my interest in building reliable software at scale.",
    bullets: [
      "Maintained and optimized pipelines processing thousands of student records, improving data reliability for academic and administrative reporting",
      "Automated data validation and transformation workflows using Python, R, and SQL, ensuring high data accuracy across multiple institutional sources",
      "Collaborated with cross-functional teams to translate complex analyses into actionable insights supporting operational decision-making across the university",
    ],
    tech: ["Python", "SQL", "R", "Data Pipelines", "Data Validation", "ETL"],
    metric: "Thousands of records",
  },
];

export const leadershipData = {
  org: "SEITC",
  fullName: "Computer Science Student Society, ITESM",
  role: "President",
  period: "May 2026 – Present",
  image: "/images/leadership/seitc/seitc.png",
  gallery: [
    "/images/leadership/seitc/seitc1.png",
  ],
  overview:
    "Ever since I started my Computer Science degree, I knew I wanted to be part of SEITC. As a freshman, I looked up to the students organizing technical workshops, networking events, and activities that brought our community together. I wanted to contribute to that same mission someday.\n\nI joined as Social Responsibility Coordinator during my first year, later served as Finance Coordinator, and today I have the privilege of leading the organization as President. Looking back, it's incredible to realize that I went from attending SEITC events as a new student to helping shape the experience for the next generation of Computer Science students.",
  journey: [
    { year: "2024", role: "Social Responsibility Coordinator" },
    { year: "2025", role: "Finance Coordinator" },
    { year: "2026", role: "President" },
  ],
  journeySummary:
    "Each role taught me something different. Social Responsibility introduced me to organizing initiatives with purpose, Finance taught me how to manage resources and make decisions that affected the entire organization, and becoming President has challenged me to think beyond individual events and focus on building a long-term vision for our community.",
  bullets: [
    "Expand technical workshops led by students and industry professionals.",
    "Strengthen internship and interview preparation initiatives.",
    "Build stronger relationships with technology companies.",
    "Create more opportunities for students to connect, learn, and grow together.",
    "Make Computer Science more accessible through outreach activities for younger students.",
  ],
  whyItMatters:
    "SEITC means much more to me than a leadership position. It's a chance to give back to the community that has shaped my college experience since my first semester. Our executive board has only recently started its term, so many of our biggest goals are still ahead of us, and that's exactly what excites me the most. I'm looking forward to spending the next year building opportunities that I hope future students will enjoy just as much as I once did.",
  metrics: [
    { label: "Student Community", value: "700+" },
    { label: "Executive Board", value: "8 members" },
    { label: "Applicants Interviewed", value: "20+" },
    { label: "Campus Workshop", value: "4 hours" },
  ],
};

export const ciberistasData = {
  name: "Ciberistas",
  period: "July 2026",
  image: "/images/leadership/ciberistas/ciberistas.png",
  overview:
    "I've always enjoyed building software, but teaching it turned out to be just as rewarding. Joining Ciberistas gave me the opportunity to introduce elementary and middle school students to programming through hands-on HTML, CSS, and JavaScript workshops. Many of them had never written code before or even used a computer before, so it was really fun watching them build their first webpage and realize they could create something on their own. Watching students realize they could actually build something instead of just using technology made every workshop worth it.",
  role: [
    "I helped prepare the lessons, design the exercises, and teach the workshops. Since every student learned at a different pace, I was constantly answering questions, helping students debug their code, and finding new ways to explain concepts that I normally took for granted.",
    "One thing I cared about was making every class practical. Rather than spending hours explaining theory, I wanted students to leave with something they had actually built and understand what they did. Whether it was their first webpage or a small interactive project with JavaScript, I wanted them to finish the day thinking, \"I made this.\"",
  ],
  challenge:
    "The biggest challenge wasn't teaching HTML or JavaScript. It was learning how to see programming from the perspective of someone who had never done it before. And yes, keeping a classroom full of kids focused was an adventure on its own. There were moments when I realized I was moving too fast because something that felt obvious to me was completely new for the students. Sometimes the challenge wasn't even the code. It was learning how folders worked, understanding what a browser actually does, or figuring out why a file wasn't saving where they expected. That experience taught me to slow down, adapt my explanations, and focus less on covering as much content as possible and more on making sure everyone understood what they were building.",
  lessons:
    "Looking back, Ciberistas gave me a completely different perspective on programming. It reminded me that not everyone starts from the same place, and that explaining an idea clearly can sometimes be harder than implementing it. It's also one of the reasons I enjoy organizing workshops through SEITC today. Seeing someone build their first project is still just as satisfying.",
  classGallery: [
    "/images/leadership/ciberistas/IMG_0246.jpg",
    "/images/leadership/ciberistas/IMG_0249.jpg",
    "/images/leadership/ciberistas/IMG_0256.jpg",
    "/images/leadership/ciberistas/IMG_0280.jpg",
    "/images/leadership/ciberistas/IMG_0314.jpg",
    "/images/leadership/ciberistas/IMG_0329.jpg",
    "/images/leadership/ciberistas/IMG_0344.jpg",
    "/images/leadership/ciberistas/IMG_9386.JPG",
    "/images/leadership/ciberistas/IMG_9389.JPG",
    "/images/leadership/ciberistas/IMG_9390.JPG",
    "/images/leadership/ciberistas/IMG_9394.JPG",
    "/images/leadership/ciberistas/IMG_9400.JPG",
  ],
  diplomaGallery: [
    "/images/leadership/ciberistas/IMG_9401.JPG",
    "/images/leadership/ciberistas/IMG_9403.JPG",
    "/images/leadership/ciberistas/IMG_9404.JPG",
    "/images/leadership/ciberistas/IMG_9415.JPG",
    "/images/leadership/ciberistas/IMG_9416.JPG",
    "/images/leadership/ciberistas/IMG_9417.JPG",
  ],
};

export const runtimeData = {
  name: "Runtime",
  subtitle: "The campaign behind becoming SEITC President",
  description:
    "Together with my vice president, Iván, I built a multi-week campaign from the ground up. We developed our proposals, prepared for the debate, connected with students, and worked to earn their trust before being elected to lead SEITC for the 2026–2027 term.",
  period: "2026 SEITC Election",
  image: "/images/leadership/runtime/Runtime_PropuestasDeCandidatura (1).png",
  overview:
    "Most people only see the title, but becoming President of SEITC was a process that lasted several weeks. Together with my vice president, Iván, we built our campaign from the ground up, preparing presentations, organizing our proposals, designing campaign materials, and spending countless hours thinking about what we wanted the next year of SEITC to look like. We weren't the only team running. Another candidacy, Ascend, was competing for the same position, which made every event feel that much more important.",
  stages: [
    {
      title: "Integration Day",
      text: "Integration Day was our first opportunity to meet students outside the classroom and share what Runtime stood for. We set up our table, handed out notebooks, brownies and cookies, but those were really just conversation starters. The best part of the day was talking to people about their ideas, answering questions, and hearing what they felt SEITC was missing. By the end of the afternoon I had probably repeated our proposal dozens of times, but every conversation was a little different.",
    },
    {
      title: "Debate",
      text: "If there was one moment that made me nervous, it was the debate. Both candidacies answered questions from students and the moderator about our plans, leadership, and the future of the organization. There wasn't much time to think before answering, so the only option was to trust the work we had done preparing the campaign. Looking back, it ended up being one of my favorite parts because it pushed us to explain not only what we wanted to do, but why we believed it would make a difference.",
    },
    {
      title: "Campaign Closing",
      text: "The last day before voting had a completely different atmosphere. Every candidacy was out talking with students one final time, giving out campaign materials and answering last-minute questions. By then, most people already knew who we were, so the conversations felt much more personal. Instead of introducing ourselves, we spent the day listening, thanking people for their support, and hoping we had earned their trust.",
    },
    {
      title: "Defense Meeting",
      text: "Before the election results became official, every candidacy had the opportunity to respond to observations submitted during the electoral process. Ascend presented their defense, while Runtime received no observations, so we simply waited for the final vote count. It was probably the quietest part of the campaign, but also one of the most nerve-racking because everything was already out of our hands.",
    },
    {
      title: "Election Results",
      text: "When the results were announced, Runtime received the majority of votes and we were elected to lead SEITC for the 2026–2027 term. Winning was an incredible feeling, but what stayed with me the most wasn't the result itself. It was realizing how many people had trusted our vision enough to vote for us. That responsibility mattered a lot more than the title.",
    },
  ],
  reflection:
    "The campaign taught me lessons that I don't think I would have learned anywhere else. I learned how to explain ideas to very different audiences, answer difficult questions without a script, work closely with a teammate under pressure, and accept that not every decision is in your control. More than anything, it reminded me that leadership starts long before you're elected. It starts with listening, showing up consistently, and following through on the promises you make.",
};
