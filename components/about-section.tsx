import { Briefcase, Code2, Trophy } from "lucide-react";
import { ExpertiseCard } from "./expertise-card";
import { SkillCard } from "./skill-card";
import { skillsData } from "./skills-data";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Briefcase className="text-primary" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-16 max-w-4xl">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm an accomplished full-stack developer with{" "}
            <span className="font-semibold text-foreground">4+ years</span> of
            experience architecting and deploying scalable web and mobile
            applications. I specialize in the JavaScript/TypeScript ecosystem
            and{" "}
            <span className="font-semibold text-foreground">
              Native Android development with Java
            </span>
            , with deep expertise in system design, clean architecture, and
            optimizing complex databases. I'm passionate about writing
            maintainable code and mentoring teams to deliver high-performance
            enterprise solutions.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Trophy className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Technical Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 2xl:grid-cols-2 gap-6">
            {skillsData.map((category, index) => (
              <SkillCard
                key={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Trophy className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Domain Expertise</h3>
          </div>
          <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-6">
            <ExpertiseCard
              title="Fintech & Banking"
              description="Payment processing, card management systems, transaction reconciliation, dispute management, POS terminal operations"
              competencies={[
                "Payment Gateway",
                "Card Management",
                "POS Systems",
                "Transaction Security",
              ]}
              color="primary"
            />
            <ExpertiseCard
              title="E-commerce"
              description="Online payment gateways, inventory management, product catalogs, secure transactions"
              competencies={[
                "Online Payments",
                "Inventory Systems",
                "Product Catalogs",
                "Secure Checkout",
              ]}
              color="blue"
            />
            <ExpertiseCard
              title="Enterprise Systems"
              description="ERP solutions, POS systems, inventory & accounting, microservice architectures"
              competencies={[
                "ERP Solutions",
                "Microservices",
                "Accounting Systems",
                "Business Logic",
              ]}
              color="purple"
            />
          </div>
        </div>

        {/* Key Competencies */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Key Competencies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Full-Stack Development",
              "System Design",
              "Performance Optimization",
              "Code Architecture",
              "Team Leadership",
              "Problem Solving",
              "Technical Documentation",
              "Agile Development",
              "Cross-functional Collaboration",
              "API Design",
              "Mobile Development",
              "Database Optimization",
            ].map((competency) => (
              <span
                key={competency}
                className="px-4 py-2 bg-card border border-border hover:border-primary/50 hover:bg-primary/5 text-primary rounded-full text-sm font-medium transition-all hover:scale-110 cursor-default"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
