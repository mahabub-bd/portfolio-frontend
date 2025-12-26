import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  githubBackend?: string;
  live?: string;
  image?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tech, github, githubBackend, live } = project;

  return (
    <article className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md hover:bg-primary/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-2 flex-wrap">
          {live && (
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              <ExternalLink size={14} />
              Live Demo
            </Link>
          )}

          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border hover:bg-card rounded-lg text-sm font-medium transition-all hover:scale-105"
              aria-label="View frontend code on GitHub"
            >
              <Github size={14} />
              Frontend
            </Link>
          )}

          {githubBackend && (
            <Link
              href={githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border hover:bg-card rounded-lg text-sm font-medium transition-all hover:scale-105"
              aria-label="View backend code on GitHub"
            >
              <Github size={14} />
              Backend
            </Link>
          )}
        </div>
      </div>

      {/* Subtle gradient border on hover */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </article>
  );
}
