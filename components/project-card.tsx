import { ExternalLink, Github, Sparkles } from "lucide-react";
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
  const { title, description, tech, github, githubBackend, live, featured } = project;

  return (
    <article className="group relative bg-linear-to-br from-card to-card/50 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-primary to-primary/80 text-primary-foreground rounded-full text-xs font-semibold shadow-lg">
            <Sparkles size={12} className="animate-pulse" />
            Featured
          </div>
        </div>
      )}

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Content */}
      <div className="relative p-8">
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-2xl font-bold mb-3 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((t, index) => (
            <span
              key={t}
              className="px-3 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-medium rounded-lg hover:bg-primary/15 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-3 flex-wrap">
          {live && (
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary to-primary/90 text-primary-foreground rounded-xl text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <ExternalLink size={16} />
              Live Demo
            </Link>
          )}

          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-border/50 hover:border-primary/50 bg-card/50 hover:bg-card rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              aria-label="View frontend code on GitHub"
            >
              <Github size={16} />
              Frontend
            </Link>
          )}

          {githubBackend && (
            <Link
              href={githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-border/50 hover:border-primary/50 bg-card/50 hover:bg-card rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              aria-label="View backend code on GitHub"
            >
              <Github size={16} />
              Backend
            </Link>
          )}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-primary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </article>
  );
}