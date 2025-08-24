export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  duration: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  highlights: string[];
}

export const experience: Experience[] = [
  {
    id: 1,
    company: "iPlex Pvt. Ltd",
    position: "MERN Stack Developer",
    location: "Rawalpindi, Pakistan",
    duration: "Jan 2022 - Present",
    startDate: "2022-01",
    current: true,
    description: "Leading development of high-performance SaaS and e-commerce solutions using modern technologies. Working with global distributed teams to deliver scalable applications that exceed client expectations.",
    achievements: [
      "Reduced post-release bugs by 35% through implementing scalable architecture and reusable React components",
      "Refactored legacy code, reducing JavaScript codebase by 30% while maintaining business logic",
      "Built a reusable React component system using Atomic CSS principles, cutting development time",
      "Led development of a commercial e-commerce platform from scratch, increasing client revenue",
      "Continuously learned and implemented new technologies, achieving significant cost savings"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Node.js", "Express.js", "NestJS", "MongoDB", "MySQL", "AWS", "Docker", "Nginx"],
    highlights: [
      "Lead developer for SyncMarket.io e-commerce platform",
      "Built TekNuclei IoT Dashboard for network management",
      "Developed scalable commercial e-commerce solutions",
      "Implemented reusable component system",
      "Worked with distributed global teams"
    ]
  },
  {
    id: 2,
    company: "Logic Tech Pvt. Ltd",
    position: "Front-End Developer",
    location: "Peshawar, Pakistan",
    duration: "Jun 2020 - Jul 2021",
    startDate: "2020-06",
    endDate: "2021-07",
    current: false,
    description: "Developed responsive landing pages and optimized application performance. Focused on conversion optimization and modern React architecture implementation.",
    achievements: [
      "Developed 100+ responsive landing pages in React and TypeScript, boosting e-commerce client conversions by 10%",
      "Optimized app performance, reducing load times by 15% through refactoring and architecture improvements",
      "Migrated outdated React code to modern architecture, improving maintainability and speeding project delivery by 20%",
      "Enhanced security by implementing secure API integrations and input validation, reducing vulnerabilities"
    ],
    technologies: ["React", "TypeScript", "SCSS", "JavaScript", "HTML5", "CSS3", "Performance Optimization"],
    highlights: [
      "Created 100+ high-converting landing pages",
      "Improved app performance significantly",
      "Migrated legacy React code to modern architecture",
      "Enhanced security implementations",
      "Optimized for e-commerce conversions"
    ]
  }
];

export default experience;
