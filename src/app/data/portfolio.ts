import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "project-oasis",
    name: "Oasis",
    tagline: "IoT smart hydration monitoring system",
    description:
      "An IoT hydration monitoring platform that combines embedded sensors, an Android application, SQL data storage, and AI-powered recommendations.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=520&fit=crop&auto=format",
    tech: ["ESP32", "MQTT", "SQL", "Android", "Gemini AI", "HX711", "BNO055"],
    overview:
      "Oasis is a smart hydration system designed to monitor water consumption through connected embedded devices and an Android application. It was selected from more than 100 engineering teams to present at Expo Ingenierías.",
    contribution:
      "I designed the data architecture, implemented the SQL database and backend logic, and contributed software across the embedded system, mobile application, and AI-powered recommendation pipeline. The system achieved less than 5% measurement error, approximately 90% drinking-event detection accuracy, and 210–300 ms end-to-end latency.",
    architecture:
      "ESP32 devices use HX711 and BNO055 sensors to capture measurements, MQTT supports device communication, SQL stores hydration data, and the Android application presents synchronized information and Gemini AI-powered recommendations.",
    metrics: [
      { label: "Measurement Error", value: "< 5%" },
      { label: "Detection Accuracy", value: "~ 90%" },
      { label: "End-to-End Latency", value: "210–300 ms" },
      { label: "Expo Selection", value: "100+ teams" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop&auto=format",
    ],
  },
  {
    id: "project-ensenname",
    name: "EnSéñame",
    tagline: "AI-assisted Mexican Sign Language learning app",
    description:
      "An iOS application that teaches Mexican Sign Language through real-time hand gesture recognition, interactive lessons, and AI-assisted feedback.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&h=520&fit=crop&auto=format",
    tech: ["Swift", "Vision Framework", "Core ML", "Gemini AI"],
    overview:
      "EnSéñame is an AI-powered iOS application designed to help users practice Mexican Sign Language through real-time hand gesture recognition.",
    contribution:
      "I engineered the application using Vision Framework and Core ML and designed a gamified learning experience with interactive lessons, AI-assisted feedback, and a sign dictionary.",
    architecture:
      "The Swift iOS application uses Vision Framework and Core ML for real-time hand gesture recognition, while Gemini AI supports assisted feedback within the learning experience.",
    gallery: [
      "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format",
    ],
  },
  {
    id: "project-awaq",
    name: "AWAQ",
    tagline: "Unity WebGL and ASP.NET Core MVC platform",
    description:
      "A full-stack platform that integrates a Unity WebGL game with ASP.NET Core MVC, persistent player progress, authentication, and SQL-backed administration.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=520&fit=crop&auto=format",
    tech: ["ASP.NET Core MVC", "Unity", "C#", "SQL"],
    overview:
      "AWAQ integrates a Unity WebGL game with an ASP.NET Core MVC platform so player activity can persist beyond individual gameplay sessions.",
    contribution:
      "I integrated the Unity WebGL game with the web platform, enabling persistent player progress and seamless synchronization between gameplay and web services. I also architected the backend services and SQL data model for authentication, progress tracking, and administrative management.",
    architecture:
      "A Unity WebGL client communicates with ASP.NET Core MVC web services, while a SQL data model stores authentication, player progress, and administration data.",
    gallery: [
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=400&fit=crop&auto=format",
    ],
  },
];

export const experiences = [
  {
    role: "Data Engineer Specialist",
    company: "ITESM",
    period: "Sep 2025 – Dec 2025",
    location: "Monterrey, Nuevo León, Mexico",
    description:
      "Maintained and optimized institutional data pipelines supporting academic and administrative reporting at Tecnológico de Monterrey.",
    bullets: [
      "Maintained and optimized pipelines processing thousands of student records, improving data reliability for academic and administrative reporting",
      "Automated data validation and transformation workflows using Python, R, and SQL, ensuring high data accuracy across multiple institutional sources",
      "Collaborated with cross-functional teams to translate complex analyses into actionable insights supporting operational decision-making across the university",
    ],
    tech: ["Python", "R", "SQL", "Data Pipelines", "Data Validation"],
    metric: "Thousands of records",
  },
];

export const leadershipData = {
  org: "SEITC",
  fullName: "Computer Science Student Society, ITESM",
  role: "President",
  period: "May 2026 – Present",
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=500&fit=crop&auto=format",
  overview:
    "As elected President of the Computer Science Student Society, I lead an eight-member executive board responsible for academic, professional, and community initiatives serving more than 700 Computer Science and prospective computing students at Tecnológico de Monterrey.",
  bullets: [
    "Directed the organization’s annual technical strategy through workshops, interview preparation programs, networking events, and industry collaborations",
    "Designed a multi-stage recruitment process, interviewed more than 20 applicants, and restructured the organization by introducing new executive roles in Education and Industry Relations",
    "Launched a web development outreach program teaching HTML, CSS, and JavaScript through hands-on workshops",
    "Expanded access to introductory computer science education through practical Python workshops for middle and high school students",
    "Led a four-hour Monterrey Campus introduction workshop",
  ],
  metrics: [
    { label: "Student Community", value: "700+" },
    { label: "Executive Board", value: "8 members" },
    { label: "Applicants Interviewed", value: "20+" },
    { label: "Campus Workshop", value: "4 hours" },
  ],
};
