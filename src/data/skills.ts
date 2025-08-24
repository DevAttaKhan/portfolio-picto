export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
  description?: string;
}

export const skills: Skill[] = [
  // Frontend Skills
  {
    name: "React",
    level: "Expert",
    category: "Frontend",
    description: "4+ years of experience building scalable applications with modern React patterns"
  },
  {
    name: "Next.js",
    level: "Advanced",
    category: "Frontend",
    description: "Building full-stack applications with SSR/SSG and API routes"
  },
  {
    name: "TypeScript",
    level: "Advanced",
    category: "Frontend",
    description: "Type-safe development for large-scale applications"
  },
  {
    name: "Redux Toolkit",
    level: "Advanced",
    category: "Frontend",
    description: "State management and RTK Query for efficient data fetching"
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    category: "Frontend",
    description: "Utility-first CSS framework for rapid UI development"
  },
  {
    name: "SCSS",
    level: "Advanced",
    category: "Frontend",
    description: "Advanced CSS preprocessing and organization"
  },

  // Backend Skills
  {
    name: "Node.js",
    level: "Advanced",
    category: "Backend",
    description: "Server-side JavaScript development and API creation"
  },
  {
    name: "Express.js",
    level: "Advanced",
    category: "Backend",
    description: "Fast, unopinionated web framework for Node.js"
  },
  {
    name: "NestJS",
    level: "Intermediate",
    category: "Backend",
    description: "Progressive Node.js framework for building efficient applications"
  },
  {
    name: "TypeORM",
    level: "Intermediate",
    category: "Backend",
    description: "Object-Relational Mapping for TypeScript and JavaScript"
  },

  // Database Skills
  {
    name: "MongoDB",
    level: "Advanced",
    category: "Database",
    description: "NoSQL database design and optimization"
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    category: "Database",
    description: "Relational database management and SQL optimization"
  },
  {
    name: "MySQL",
    level: "Intermediate",
    category: "Database",
    description: "Relational database design and administration"
  },

  // DevOps & Tools
  {
    name: "AWS",
    level: "Intermediate",
    category: "DevOps",
    description: "Cloud infrastructure and deployment management"
  },
  {
    name: "Docker",
    level: "Intermediate",
    category: "DevOps",
    description: "Containerization and deployment automation"
  },
  {
    name: "Nginx",
    level: "Intermediate",
    category: "DevOps",
    description: "Web server configuration and reverse proxy setup"
  },
  {
    name: "Git",
    level: "Advanced",
    category: "DevOps",
    description: "Version control and collaborative development"
  },
  {
    name: "GitHub Actions",
    level: "Intermediate",
    category: "DevOps",
    description: "CI/CD automation and deployment pipelines"
  },

  // Other Skills
  {
    name: "Agile/Scrum",
    level: "Advanced",
    category: "Methodology",
    description: "Project management and team collaboration"
  },
  {
    name: "Remote Collaboration",
    level: "Advanced",
    category: "Methodology",
    description: "Distributed team coordination and async communication"
  },
  {
    name: "Performance Optimization",
    level: "Advanced",
    category: "Frontend",
    description: "App speed optimization and user experience improvement"
  },
  {
    name: "SEO Optimization",
    level: "Intermediate",
    category: "Frontend",
    description: "Search engine optimization and technical SEO"
  }
];

export const skillCategories = [
  {
    name: "Frontend",
    description: "Modern web development technologies and frameworks",
    skills: skills.filter(skill => skill.category === "Frontend")
  },
  {
    name: "Backend",
    description: "Server-side development and API creation",
    skills: skills.filter(skill => skill.category === "Backend")
  },
  {
    name: "Database",
    description: "Data management and optimization",
    skills: skills.filter(skill => skill.category === "Database")
  },
  {
    name: "DevOps",
    description: "Deployment, infrastructure, and automation",
    skills: skills.filter(skill => skill.category === "DevOps")
  },
  {
    name: "Methodology",
    description: "Development processes and team collaboration",
    skills: skills.filter(skill => skill.category === "Methodology")
  }
];

export default skills;
