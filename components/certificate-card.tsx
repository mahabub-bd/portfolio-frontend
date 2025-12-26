import { Calendar, ExternalLink } from "lucide-react";

export interface Certificate {
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const { name, issuer, issueDate, credentialUrl, credentialId } = certificate;

  return (
    <article className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-base font-medium text-primary">{issuer}</p>
      </div>

      {/* Details */}
      <div className="space-y-3">
        {credentialId && (
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="font-medium">Credential ID:</span>
            <span>{credentialId}</span>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar size={16} className="shrink-0" />
          <span>{issueDate}</span>
        </div>

        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
          >
            <span>View Credential</span>
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </article>
  );
}
