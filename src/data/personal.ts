export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  timezone: string;
  availability: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    duration: string;
    description?: string;
  };
  languages: string[];
  interests: string[];
  certifications?: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Atta Ur Rahman",
  title: "Senior MERN Stack Developer",
  subtitle: "React | Next.js | Node.js | NestJS",
  location: "Islamabad, Pakistan",
  email: "attakhandev@gmail.com",
  phone: "+92 316 1217056",
  linkedin: "http://www.linkedin.com/in/atta-ur-rahman-ak",
  github: "https://github.com/DevAttaKhan",
  timezone: "PKT (UTC+5)",
  availability: "Open to US/EU/Remote Roles",
  summary: "I'm a MERN Stack Developer with 4+ years of experience helping companies build and launch high-performance SaaS and e-commerce solutions. I have a proven track record of developing scalable applications using React, Next.js, NestJS, AWS, and Docker, leading to measurable business improvements such as increased revenue and faster deployment cycles. I work seamlessly with global, distributed teams, leveraging Agile processes, CI/CD automation, and async communication to ensure projects are delivered on time and exceed expectations. I take pride in delivering clean, maintainable code that stands the test of time.",
  education: {
    degree: "BS in Computer Science",
    institution: "Abasyn University",
    duration: "Aug 2021",
    description: "Graduated with focus on software engineering and web development"
  },
  languages: ["English", "Urdu", "Pashto"],
  interests: [
    "Full-stack web development",
    "E-commerce solutions",
    "Performance optimization",
    "Modern web technologies",
    "Open source contribution",
    "Technical writing",
    "Team collaboration",
    "Continuous learning"
  ],
  certifications: [
    "MongoDB Developer Certification",
    "AWS Cloud Practitioner",
    "React Developer Certification"
  ]
};

export default personalInfo;
