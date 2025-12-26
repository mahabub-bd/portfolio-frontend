import { Briefcase } from "lucide-react";
import { ExperienceCard } from "./experience-card";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Briefcase className="text-primary" size={32} />
          Experience
        </h2>
        <div className="space-y-12">
          <ExperienceCard
            title="Software Engineer"
            company="IT Consultants PLC (Qcash)"
            location="Dhaka, Bangladesh"
            period="Feb 2021 – Present"
            isCurrent={true}
            highlights={[
              "Develop responsive, high-performance web applications using React.js and Next.js",
              "Design scalable, reusable frontend components with clean, maintainable architecture",
              "Build backend services and APIs ensuring secure, efficient data flow",
              "Perform L3 testing for banking and fintech systems with ISO 8583 compliance",
            ]}
          />
          <ExperienceCard
            title="Support Engineer"
            company="IT Consultants PLC (Qcash)"
            location="Dhaka, Bangladesh"
            period="Feb 2016 – Jan 2021"
            isCurrent={false}
            highlights={[
              "Managed CMS (Card Management System) & TranzWare Online operations",
              "Handled dispute management and transaction reconciliation",
              "Performed UAT testing for Mobile Applications & Back-Office Systems",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
