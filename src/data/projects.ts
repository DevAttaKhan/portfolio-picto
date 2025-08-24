export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tech: string[];
  image: string;
  slug: string;
  duration: string;
  team: string;
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
  company?: string;
  role?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SyncMarket.io",
    subtitle: "Subscription-based e-commerce platform with Shopify integration",
    description: "A comprehensive subscription-based e-commerce platform that seamlessly integrates Shopify with local brands, featuring real-time inventory synchronization, affiliate tracking, and cross-platform mobile applications.",
    category: "E-Commerce Platform",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Laravel", "MySQL", "React Native", "Shopify API"],
    image: "/images/syncmarket-preview.jpg",
    slug: "syncmarket-io",
    duration: "6 months",
    team: "Solo Developer + 2 Backend Developers",
    role: "Lead Frontend Developer",
    company: "iPlex Pvt. Ltd",
    challenge: "Building a complex e-commerce platform that needed to integrate multiple systems (Shopify, local inventory, affiliate tracking) while maintaining real-time synchronization and providing a seamless user experience across web and mobile platforms.",
    solution: "Developed a modern Next.js frontend with TypeScript and Redux Toolkit for state management. Implemented real-time inventory syncing using WebSocket connections, created responsive dashboards with Recharts for analytics, and built cross-platform mobile apps using React Native for consistent UX.",
    features: [
      "Subscription-based e-commerce platform",
      "Shopify integration with local brands",
      "Real-time inventory synchronization",
      "Affiliate tracking system",
      "CSV import with live progress tracking",
      "Responsive analytics dashboards",
      "Cross-platform mobile apps (iOS/Android)",
      "Real-time notifications",
      "Payment processing integration",
      "Admin panel for inventory management"
    ],
    results: [
      "Successfully launched commercial e-commerce platform",
      "Increased client revenue through improved user experience",
      "Reduced inventory management time by 40%",
      "Achieved 99.9% uptime for critical e-commerce operations",
      "Mobile app downloads exceeded 10,000+ users"
    ],
    liveUrl: "https://syncmarket.io",
    githubUrl: "https://github.com/DevAttaKhan/syncmarket-platform"
  },
  {
    id: 2,
    title: "TekNuclei IoT Dashboard",
    subtitle: "Real-time IoT monitoring dashboard for network management",
    description: "A responsive IoT monitoring dashboard designed for network tower management, featuring real-time data updates, hardware location visualization using Leaflet maps, and comprehensive analytics for decision-making.",
    category: "IoT Dashboard",
    tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "NestJS", "MongoDB", "RTK Query", "TanStack Tables", "Leaflet Maps"],
    image: "/images/teknuclei-preview.jpg",
    slug: "teknuclei-iot-dashboard",
    duration: "2 months",
    team: "Solo Developer + 1 Backend Developer",
    role: "Frontend Developer",
    company: "iPlex Pvt. Ltd",
    challenge: "Creating a real-time IoT monitoring system that could handle multiple data streams, provide instant updates for network tower management, and visualize hardware locations geographically for better decision-making.",
    solution: "Built a React-based dashboard using TypeScript and Redux Toolkit for state management. Implemented RTK Query for efficient data fetching and caching, used TanStack Tables for data display, and integrated Leaflet maps for hardware location visualization with real-time updates.",
    features: [
      "Real-time IoT monitoring dashboard",
      "Hardware location visualization with Leaflet maps",
      "Real-time data updates using RTK Query",
      "Responsive design for all devices",
      "Data tables with TanStack Tables",
      "Network tower management interface",
      "Real-time notifications and alerts",
      "Performance analytics and reporting",
      "User authentication and role management",
      "Export functionality for reports"
    ],
    results: [
      "Improved network tower management efficiency by 35%",
      "Reduced response time to hardware issues by 50%",
      "Enhanced decision-making through visual data representation",
      "Successfully deployed across multiple network locations",
      "Achieved 99.5% system reliability"
    ],
    liveUrl: "https://dashboard.teknuclei.com",
    githubUrl: "https://github.com/DevAttaKhan/teknuclei-dashboard"
  },
  {
    id: 3,
    title: "Commercial E-commerce Platform",
    subtitle: "Scalable e-commerce solution with advanced features",
    description: "A high-performance commercial e-commerce platform built from scratch, featuring scalable architecture, reusable React components, and advanced business logic that significantly increased client revenue.",
    category: "E-Commerce Platform",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "SCSS", "AWS", "Docker", "Nginx"],
    image: "/images/ecommerce-platform-preview.jpg",
    slug: "commercial-ecommerce-platform",
    duration: "8 months",
    team: "Lead Developer + 3 Developers",
    role: "Lead MERN Stack Developer",
    company: "iPlex Pvt. Ltd",
    challenge: "Building a commercial e-commerce platform from scratch that needed to handle high traffic, complex business logic, and provide a scalable foundation for future growth while maintaining excellent performance.",
    solution: "Developed a scalable MERN stack application with reusable React components using Atomic CSS principles. Implemented clean architecture patterns, optimized database queries, and used AWS with Docker for deployment. Created a component system that reduced development time and ensured UI consistency.",
    features: [
      "Scalable e-commerce architecture",
      "Reusable React component system",
      "Advanced product management",
      "Shopping cart and checkout system",
      "User authentication and profiles",
      "Order management and tracking",
      "Payment gateway integration",
      "Inventory management system",
      "Admin dashboard",
      "Analytics and reporting",
      "Mobile-responsive design",
      "SEO optimization"
    ],
    results: [
      "Reduced post-release bugs by 35% through scalable architecture",
      "Refactored legacy code, reducing JavaScript codebase by 30%",
      "Built reusable component system cutting development time by 40%",
      "Significantly increased client revenue",
      "Achieved 99.9% uptime during peak traffic periods"
    ],
    liveUrl: "https://ecommerce-client.com",
    githubUrl: "https://github.com/DevAttaKhan/commercial-ecommerce"
  },
  {
    id: 4,
    title: "100+ Landing Pages",
    subtitle: "High-converting responsive landing pages for e-commerce",
    description: "Developed over 100 responsive landing pages using React and TypeScript, focusing on conversion optimization and performance improvements that boosted client conversions significantly.",
    category: "Landing Pages",
    tech: ["React", "TypeScript", "SCSS", "JavaScript", "HTML5", "CSS3", "Performance Optimization"],
    image: "/images/landing-pages-preview.jpg",
    slug: "landing-pages-collection",
    duration: "14 months",
    team: "Solo Developer",
    role: "Front-End Developer",
    company: "Logic Tech Pvt. Ltd",
    challenge: "Creating 100+ high-converting landing pages that needed to be responsive, performant, and optimized for different e-commerce niches while maintaining consistent quality and meeting tight deadlines.",
    solution: "Developed a systematic approach using React and TypeScript for type safety. Implemented performance optimization techniques, created reusable components, and used modern CSS practices to ensure fast loading times and excellent user experience across all devices.",
    features: [
      "100+ responsive landing pages",
      "E-commerce conversion optimization",
      "Performance optimization",
      "Mobile-first responsive design",
      "SEO optimization",
      "A/B testing implementation",
      "Fast loading times",
      "Cross-browser compatibility",
      "Accessibility compliance",
      "Analytics integration"
    ],
    results: [
      "Boosted e-commerce client conversions by 10%",
      "Optimized app performance, reducing load times by 15%",
      "Migrated outdated React code to modern architecture",
      "Improved project delivery speed by 20%",
      "Enhanced security through secure API integrations"
    ],
    liveUrl: "https://landing-pages-portfolio.com",
    githubUrl: "https://github.com/DevAttaKhan/landing-pages"
  },
  {
    id: 5,
    title: "Reusable Component System",
    subtitle: "Atomic CSS-based React component library",
    description: "A comprehensive reusable React component system built using Atomic CSS principles, designed to accelerate development, ensure UI consistency, and reduce code duplication across multiple projects.",
    category: "Component Library",
    tech: ["React", "TypeScript", "Atomic CSS", "SCSS", "Storybook", "Jest", "Testing Library"],
    image: "/images/component-system-preview.jpg",
    slug: "reusable-component-system",
    duration: "3 months",
    team: "Solo Developer",
    role: "Frontend Developer",
    company: "iPlex Pvt. Ltd",
    challenge: "Creating a comprehensive component system that could be used across multiple projects while maintaining consistency, reducing development time, and ensuring high code quality and reusability.",
    solution: "Developed a component library using Atomic CSS principles for consistent styling. Built components with TypeScript for type safety, created comprehensive documentation with Storybook, and implemented thorough testing with Jest and Testing Library to ensure reliability.",
    features: [
      "Atomic CSS-based design system",
      "Reusable React components",
      "TypeScript implementation",
      "Comprehensive documentation",
      "Storybook integration",
      "Unit testing with Jest",
      "Component testing with Testing Library",
      "Responsive design components",
      "Accessibility features",
      "Performance optimization",
      "Theme customization",
      "Version control and updates"
    ],
    results: [
      "Cut development time by 40% through reusable components",
      "Ensured UI consistency across all projects",
      "Reduced code duplication by 60%",
      "Improved development team productivity",
      "Enhanced code maintainability and quality"
    ],
    liveUrl: "https://components.attakhan.dev",
    githubUrl: "https://github.com/DevAttaKhan/component-system"
  },
  {
    id: 6,
    title: "Legacy Code Migration",
    subtitle: "Modern React architecture implementation",
    description: "Successfully migrated outdated React code to modern architecture, improving maintainability, performance, and development speed while maintaining all existing business logic and functionality.",
    category: "Code Migration",
    tech: ["React", "TypeScript", "Modern React Hooks", "Performance Optimization", "Code Refactoring", "Legacy Code Migration"],
    image: "/images/legacy-migration-preview.jpg",
    slug: "legacy-code-migration",
    duration: "4 months",
    team: "Solo Developer",
    role: "Frontend Developer",
    company: "Logic Tech Pvt. Ltd",
    challenge: "Migrating large amounts of outdated React code to modern architecture while ensuring no business logic is lost, improving performance, and making the codebase more maintainable for future development.",
    solution: "Systematically refactored legacy React code to use modern hooks, functional components, and TypeScript. Implemented performance optimizations, improved code structure, and created comprehensive documentation for the new architecture.",
    features: [
      "Legacy React code migration",
      "Modern React hooks implementation",
      "TypeScript integration",
      "Performance optimization",
      "Code refactoring",
      "Business logic preservation",
      "Improved maintainability",
      "Enhanced development speed",
      "Better error handling",
      "Comprehensive documentation",
      "Testing implementation",
      "Performance monitoring"
    ],
    results: [
      "Reduced JavaScript codebase by 30%",
      "Improved app performance by 15%",
      "Enhanced code maintainability",
      "Sped up project delivery by 20%",
      "Reduced technical debt significantly"
    ],
    liveUrl: "https://migrated-app.com",
    githubUrl: "https://github.com/DevAttaKhan/legacy-migration"
  }
];

export default projects;
