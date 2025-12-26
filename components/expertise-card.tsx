interface ExpertiseCardProps {
  title: string;
  description: string;
  competencies?: string[];
  color?: string;
}

export function ExpertiseCard({
  title,
  description,
  competencies = [],
  color = "primary",
}: ExpertiseCardProps) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary group-hover:bg-primary/20",
    blue: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20",
    purple: "bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20",
    green: "bg-green-500/10 text-green-500 group-hover:bg-green-500/20",
  };

  return (
    <article className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Icon */}
      <div className="mb-5">
        <div
          className={`p-3 rounded-xl ${
            colorClasses[color as keyof typeof colorClasses]
          } transition-colors`}
        ></div>
      </div>

      {/* Content */}
      <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>

      {/* Competencies/Tags */}
      {competencies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {competencies.map((competency, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-muted/50 text-xs font-medium rounded-md border border-border"
            >
              {competency}
            </span>
          ))}
        </div>
      )}

      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </article>
  );
}
