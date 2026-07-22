export const personal = {
  name: "Juan Antonio Rodríguez Reyna",
  degree: "B.S. in Computer Science and Technology",
  description:
    "Hi! I'm a Computer Science student at Tecnológico de Monterrey who believes the best way to learn is by building. Whether I'm developing software, experimenting with AI, prototyping hardware, or leading technical initiatives, I'm always looking for opportunities to solve meaningful problems and create products people can use.",
  location: "Monterrey, Nuevo León, Mexico",
  university: "Tecnológico de Monterrey",
  specialization: "Computer Science & Technology",
  languages: "Spanish / English / Italian",
  drivenBy: ["Building Products", "Growing Tech Communities", "Learning by Doing"],
  openTo: ["Software Engineering Internships", "Project Management Internships"],
  email: "juanrodriguez2135@gmail.com",
} as const;

export const skillGroups = [
  { category: "Languages", skills: ["Python", "C++", "C#", "JavaScript", "SQL", "Swift"] },
  {
    category: "Technologies",
    skills: [
      "React",
      "FastAPI",
      "ASP.NET Core",
      "MySQL",
      "Snowflake",
      "Vision Framework",
      "Core ML",
      "Unity",
      "MQTT",
      "Git",
    ],
  },
] as const;

export const education = {
  institution: "Tecnológico de Monterrey, Campus Monterrey (ITESM)",
  degree: "B.S. in Computer Science and Technology",
  semester: "5th semester",
  graduation: "Expected June 2028",
  gpa: "92 / 100",
  certification: "Snowflake SnowPro Core Certification (2025)",
  distinction: "Bilingual IB Diploma",
} as const;
