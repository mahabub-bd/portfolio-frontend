import { FolderOpen } from "lucide-react";
import ProjectCard, { Project } from "./project-card";

const projects: Project[] = [
  {
    title: "Smart Sale POS",
    description: "Sales, Inventory & Accounting Solution",
    tech: ["React", "TypeScript", "Redux", "NestJS", "PostgreSQL"],
    github: "https://github.com/mahabub-bd/smart-salepos-frontend",
    githubBackend: "https://github.com/mahabub-bd/smart-salepos-backend",
    live: "https://smartsalepos.shop",
    featured: true,
  },
  {
    title: "German Butcher",
    description: "Modern E-commerce with Secure Online Payments",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "SSL Payment",
    ],
    github: "https://github.com/mahabub-bd/germanbutcher-frontend",
    githubBackend: "https://github.com/mahabub-bd/germanbutcher-backend",
    live: "https://germanbutcherbd.com",
    featured: true,
  },
  {
    title: "Nayanagor Somity",
    description: "Micro Credit Management System",
    tech: ["React", "Redux", "TypeScript", "NestJS", "PostgreSQL"],
    live: "https://www.nayanagorsomity.org",
  },
  {
    title: "Sawari",
    description: "Bike Inventory & Document Management Application",
    tech: ["Next.js", "TypeScript", "NestJS", "MongoDB"],
    github: "https://github.com/mahabub-bd/sawaribd-frontend",
    githubBackend: "https://github.com/mahabub-bd/sawaribd-backend",
    live: "https://doc.sawaribd.com",
  },
  {
    title: "Greenpac Energy",
    description: "Energy Solutions & Management Platform",
    tech: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
    github: "https://github.com/mahabub-bd/greenpac",
    live: "https://www.greenpacbd.org",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FolderOpen className="text-primary" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground mt-1">
                A selection of projects I've worked on
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
