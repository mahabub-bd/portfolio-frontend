interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  highlights: string[];
}

export function ExperienceCard({
  title,
  company,
  location,
  period,
  isCurrent,
  highlights,
}: ExperienceCardProps) {
  return (
    <div className="border-l-2 border-primary pl-6 py-4 animate-fade-in-up">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
        </div>
        {isCurrent && (
          <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
            Current
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-3">
        {location} • {period}
      </p>
      <ul className="space-y-2">
        {highlights.map((highlight, idx) => (
          <li key={idx} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-primary">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
