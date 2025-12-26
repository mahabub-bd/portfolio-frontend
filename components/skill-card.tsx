import { ReactNode } from "react";

export interface Skill {
  label: string;
  value: string;
}

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: Skill[];
}

export function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <article className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h4 className="text-lg font-bold">{title}</h4>
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="group/skill p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
              {skill.label}
            </p>
            <p className="text-sm text-foreground leading-relaxed">
              {skill.value}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </article>
  );
}
