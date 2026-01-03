import { Code2, Database, Server, Zap } from "lucide-react";

export interface Skill {
  label: string;
  value: string;
}

export interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    icon: <Code2 className="text-primary" size={24} />,
    title: "Frontend Development",
    skills: [
      {
        label: "Core Technologies",
        value: "JavaScript, TypeScript, React.js, Next.js",
      },
      {
        label: "Styling & UI",
        value: "Tailwind CSS, shadcn/ui, CSS Modules, Figma",
      },
      {
        label: "State Management",
        value: "Redux, Redux Toolkit, Zustand, Context API",
      },
    ],
  },
  {
    icon: <Server className="text-primary" size={24} />,
    title: "Backend Development",
    skills: [
      {
        label: "Runtime & Frameworks",
        value: "Node.js, NestJS, Express.js",
      },
      {
        label: "API Development",
        value: "RESTful APIs, GraphQL, gRPC, WebSocket",
      },
      {
        label: "Mobile & Payment",
        value: "Android (Java), React Native, Payment Gateways",
      },
    ],
  },
  {
    icon: <Database className="text-primary" size={24} />,
    title: "Database & Caching",
    skills: [
      {
        label: "Databases",
        value: "PostgreSQL, MySQL, MongoDB, Redis",
      },
      {
        label: "Optimization",
        value: "Query Optimization, Indexing, Caching Strategies",
      },
      {
        label: "Data Management",
        value: "Database Design, Performance Tuning",
      },
    ],
  },
  {
    icon: <Zap className="text-primary" size={24} />,
    title: "DevOps & Cloud",
    skills: [
      {
        label: "CI/CD & Automation",
        value: "GitHub Actions, GitLab CI, Docker, PM2",
      },
      {
        label: "Cloud Platforms",
        value: "AWS (S3, EC2), Azure, OVH Cloud, Hetzner",
      },
      {
        label: "Infrastructure",
        value: "Nginx, SSH, VPS Management, Dokploy, SSL/TLS",
      },
    ],
  },
  {
    icon: <Code2 className="text-primary" size={24} />,
    title: "Architecture & Design",
    skills: [
      {
        label: "Architecture Patterns",
        value: "Clean Architecture, MVC, Microservices, Monorepo",
      },
      {
        label: "Design Tools",
        value: "Figma, UI/UX Prototyping",
      },
      {
        label: "Best Practices",
        value: "Design Patterns, Code Organization",
      },
    ],
  },
  {
    icon: <Code2 className="text-primary" size={24} />,
    title: "Testing & Quality",
    skills: [
      {
        label: "Testing",
        value: "UAT, TDD, L3 Testing",
      },
      {
        label: "Compliance",
        value: "ISO 8583 Compliance, Security Standards",
      },
      {
        label: "Code Quality",
        value: "Code Review, Documentation, Best Practices",
      },
    ],
  },
];
