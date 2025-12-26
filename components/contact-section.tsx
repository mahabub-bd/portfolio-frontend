import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <MessageCircle className="text-primary" size={32} />
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <Link
                  href="mailto:contact@mahabub.me"
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition hover:scale-105 transform"
                >
                  <Mail className="text-primary" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">contact@mahabub.me</p>
                  </div>
                </Link>
                <Link
                  href="tel:+8801711852202"
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition hover:scale-105 transform"
                >
                  <Phone className="text-primary" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+880 171 1852 202</p>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/mahabub-bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:scale-110 transition transform"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com/in/mahabub-hossain-86b24558"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:scale-110 transition transform"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.636h3.554v1.364c.429-.663 1.194-1.608 2.905-1.608 2.12 0 3.708 1.388 3.708 4.368v5.512zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.768-1.71 1.959-1.71 1.188 0 1.915.754 1.929 1.71 0 .951-.741 1.71-1.973 1.71zm1.582 11.019H3.727V9.816h3.192v10.636zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
