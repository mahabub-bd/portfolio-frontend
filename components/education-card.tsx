import { Calendar, MapPin } from "lucide-react";

export interface Education {
  degree: string;
  institution: string;
  department: string;
  location: string;
  period: string;
}

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  const { degree, institution, department, location, period } = education;

  return (
    <article className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
          {degree}
        </h3>
        <p className="text-base font-medium text-primary">{institution}</p>
      </div>

      {/* Details */}
      <div className="space-y-3">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin size={16} className="mt-0.5 shrink-0" />
          <span>{department}</span>
        </div>

        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin size={16} className="mt-0.5 shrink-0" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar size={16} className="shrink-0" />
          <span>{period}</span>
        </div>
      </div>

      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </article>
  );
}
