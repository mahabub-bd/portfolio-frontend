import { Award } from "lucide-react";
import { CertificateCard } from "./certificate-card";

export function CertificateSection() {
  const certificates = [
    {
      name: "Meta Front-End Developer  Certificate",
      issuer: "Meta",
      issueDate: "2023",
      credentialUrl:
        "https://coursera.org/share/08a6e8e0e5fbc4054077716224d8fa4f",
      credentialId: "4WZU6DW2RA3Q",
    },
    {
      name: "NestJS Masterclass - NodeJS Framework ",
      issuer: "Udemy",
      issueDate: "2024",
      credentialUrl: "https://ude.my/UC-3677ea56-bb31-4ecd-873b-0944a152f6dc",
      credentialId: "UC-3677ea56-bb31-4ecd-873b-0944a152f6dc",
    },
    {
      name: "Reactive Accelerator - Batch 1",
      issuer: "Learn with Sumit",
      issueDate: "2024",
      credentialUrl:
        "https://learnwithsumit.com/certificates/verify/LWSCTXN-914NTSA7",
      credentialId: "LWSCTXN-914NTSA7",
    },
  ];

  return (
    <section id="certificates" className="border-t border-border py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Award className="text-primary" size={32} />
          Certificates
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
