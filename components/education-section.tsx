import { GraduationCap } from "lucide-react";
import { EducationCard } from "./education-card";

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Science",
      institution: "Fareast International University",
      department: "Electrical and Electronic Engineering",
      location: "Dhaka, Bangladesh",
      period: "2015 – 2018",
    },
    {
      degree: "Diploma in Engineering",
      institution: "Barisal Polytechnic Institute",
      department: "Electronics Engineering",
      location: "Barishal, Bangladesh",
      period: "2005 – 2009",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Patarhat Muslim Secondary School",
      department: "Science Group",
      location: "Barishal, Bangladesh",
      period: "2003 – 2005",
    },
  ];

  return (
    <section id="education" className="border-t border-border py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <GraduationCap className="text-primary" size={32} />
          Education
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
