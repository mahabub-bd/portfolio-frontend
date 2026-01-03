import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  link: string;
  date: string;
  tags: string[];
}

export function BlogCard({
  title,
  description,
  link,
  date,
  tags,
}: BlogCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition hover:shadow-lg hover:scale-105 transform animate-fade-in-up">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-balance">{title}</h3>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-primary hover:scale-110 transition"
          aria-label={`Read ${title}`}
        >
          <ExternalLink size={18} />
        </Link>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-1 bg-primary/10 text-primary text-xs rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4">{date}</p>
    </div>
  );
}
