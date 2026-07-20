export const personal = {
  name: "Juan Antonio Rodríguez Reyna",
  degree: "B.S. in Computer Science and Technology",
  role: "Software Engineer",
  description:
    "Computer Science and Technology student with experience building institutional data pipelines, full-stack platforms, IoT systems, and AI-assisted applications. I also lead initiatives that support the academic and professional growth of computing students.",
  location: "Monterrey, Nuevo León, Mexico",
  university: "Tecnológico de Monterrey",
  specialization: "Computer Science & Technology",
  languages: "Spanish / English / Italian",
  interests: ["Full-Stack", "Data Engineering", "IoT", "Leadership"],
  email: "juanrodriguez2135@gmail.com",
} as const;

export const skillGroups = [
  { category: "Languages", skills: ["Python", "C++", "C#", "JavaScript", "SQL", "Swift", "R", "MATLAB"] },
  {
    category: "Frameworks",
    skills: ["ASP.NET Core MVC", "FastAPI", "React", "Vision Framework", "Core ML", "MQTT", "REST APIs"],
  },
  { category: "Databases", skills: ["MySQL", "Snowflake"] },
  { category: "Tools", skills: ["Git", "GitHub", "VS Code", "Xcode", "Unity", "Arduino IDE"] },
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
