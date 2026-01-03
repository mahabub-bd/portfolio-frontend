"use client";

import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import "./hero-section.css";
import AnimatedText from "./animated-text";
import TypewriterText from "./typewriter-text";

export function HeroSection() {
  const descriptionText =
    "Architect and deploy scalable web and mobile applications with";

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-125 h-125 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className=" mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hero-animate-fade-in-up shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow cursor-default">
              <Sparkles size={14} className="hero-animate-spin-slow" />
              <span>Available for opportunities</span>
            </div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base font-medium text-muted-foreground uppercase tracking-widest hero-animate-fade-in-up hero-delay-200">
                Mahabub Hossain
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="block hero-animate-fade-in-up hero-delay-300">
                  Full-Stack
                </span>
                <span className="block bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent hero-animate-gradient hero-animate-fade-in-up hero-delay-400">
                  Developer
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <AnimatedText text={descriptionText} delay={500} />
              <span
                className="font-semibold text-foreground hero-animate-fade-in-up"
                style={{ animationDelay: "900ms" }}
              >
                4+ years
              </span>{" "}
              <span
                className="hero-animate-fade-in-up"
                style={{ animationDelay: "1000ms" }}
              >
                of
              </span>{" "}
              <span
                className="hero-animate-fade-in-up"
                style={{ animationDelay: "1100ms" }}
              >
                expertise in
              </span>{" "}
              <span
                className="font-semibold text-foreground hero-animate-fade-in-up"
                style={{ animationDelay: "1200ms" }}
              >
                React, Next.js, NestJS, and Native Android with Java
              </span>
              <span
                className="hero-animate-fade-in-up"
                style={{ animationDelay: "1300ms" }}
              >
                .
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 sm:gap-8">
              <Link
                href="#contact"
                className="group hero-animate-fade-in-up inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-1 hover:scale-105 text-sm sm:text-base flex-1"
                style={{ animationDelay: "1400ms" }}
              >
                Contacts
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group hero-animate-fade-in-up inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border hover:bg-card hover:border-primary/50 rounded-xl font-semibold transition-all hover:-translate-y-1 hover:scale-105 text-sm sm:text-base flex-1"
                style={{ animationDelay: "1500ms" }}
              >
                <Download size={16} className="group-hover:animate-bounce" />
                CV
              </Link>
            </div>

            {/* Social Links */}
            <div
              className="pt-6 sm:pt-8 border-t border-border/50 hero-animate-fade-in-up"
              style={{ animationDelay: "1700ms" }}
            >
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Connect with me
              </p>
              <div className="flex gap-3">
                <Link
                  href="https://github.com/mahabub-bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border/50 hover:border-primary/50 hover:bg-card hover:text-primary rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://linkedin.com/in/mahabub-hossain-86b24558"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border/50 hover:border-blue-500/50 hover:bg-card hover:text-blue-500 rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://www.facebook.com/mahabub.bio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border/50 hover:border-blue-600/50 hover:bg-card hover:text-blue-600 rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-600/20"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="fill-current"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="https://wa.me/8801711852202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border/50 hover:border-green-500/50 hover:bg-card hover:text-green-500 rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </Link>
                <Link
                  href="mailto:contact@mahabub.me"
                  className="p-3 border border-border/50 hover:border-primary/50 hover:bg-card hover:text-primary rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Visual - Code Editor & Terminal */}
          <div className="relative w-full space-y-6">
            <div
              className="relative hero-animate-fade-in-up w-full"
              style={{ animationDelay: "800ms" }}
            >
              {/* Code Editor Window */}
              <div className="relative bg-linear-to-br from-[#252526] to-[#1e1e1e] rounded-2xl shadow-2xl border border-border/50 w-full overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#323233] border-b border-border/50 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-muted-foreground/80 font-mono tracking-wide">
                      Portfolio.tsx
                    </span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-3 sm:p-4 font-mono text-[10px] sm:text-xs leading-tight overflow-x-auto max-h-70 sm:max-h-80">
                  <pre className="text-[#d4d4d4]">
                    <code>
                      <span className="text-[#c586c0]">import</span>{" "}
                      <span className="text-[#9cdcfe]">React</span>,{" "}
                      <span className="text-[#9cdcfe]">{"{ useState }"}</span>{" "}
                      <span className="text-[#c586c0]">from</span>{" "}
                      <span className="text-[#ce9178]">{`'react'`}</span>;{"\n"}
                      {"\n"}
                      <span className="text-[#c586c0]">const</span>{" "}
                      <span className="text-[#dcdcaa]">Developer</span>:{" "}
                      <span className="text-[#4ec9b0]">React.FC</span>{" "}
                      <span className="text-[#d4d4d4]">=</span>{" "}
                      <span className="text-[#569cd6]">async</span>{" "}
                      <span className="text-[#d4d4d4]">()</span>{" "}
                      <span className="text-[#d4d4d4]">{" => "}</span>
                      <span className="text-[#d4d4d4]">{"{"}</span>
                      {"\n"}
                      {"  "}
                      <span className="text-[#d4d4d4]">{"  "}</span>
                      <span className="text-[#9cdcfe]">name</span>:{" "}
                      <span className="text-[#ce9178]">{`'Mahabub Hossain'`}</span>
                      ,{"\n"}
                      {"  "}
                      <span className="text-[#d4d4d4]">{"  "}</span>
                      <span className="text-[#9cdcfe]">role</span>:{" "}
                      <span className="text-[#ce9178]">{`'Full-Stack Developer'`}</span>
                      ,{"\n"}
                      {"  "}
                      <span className="text-[#d4d4d4]">{"  "}</span>
                      <span className="text-[#9cdcfe]">stack</span>:{" "}
                      <span className="text-[#569cd6]">[</span>
                      {"\n"}
                      {"    "}
                      <span className="text-[#ce9178]">{`'React ⚛️'`}</span>,{" "}
                      <span className="text-[#ce9178]">{`'Next.js ▲'`}</span>,
                      {"\n"}
                      {"    "}
                      <span className="text-[#ce9178]">{`'TypeScript 📘'`}</span>
                      , <span className="text-[#ce9178]">{`'NestJS 🦁'`}</span>,
                      {"\n"}
                      {"    "}
                      <span className="text-[#ce9178]">{`'Node.js 🚀'`}</span>,{" "}
                      <span className="text-[#ce9178]">{`'Java ☕'`}</span>
                      {"\n"}
                      {"  "}
                      <span className="text-[#569cd6]">]</span>
                      <span className="text-[#d4d4d4]">{","}</span>
                      {"\n"}
                      {"  "}
                      <span className="text-[#d4d4d4]">{"  "}</span>
                      <span className="text-[#9cdcfe]">experience</span>:{" "}
                      <span className="text-[#b5cea8]">{`'4+ years'`}</span>,
                      {"\n"}
                      {"  "}
                      <span className="text-[#d4d4d4]">{"  "}</span>
                      <span className="text-[#9cdcfe]">passion</span>:{" "}
                      <span className="text-[#ce9178]">{`'∞'`}</span>
                      {"\n"}
                      {"  "}
                      <span className="text-[#569cd6]">{"}"}</span>
                      <span className="text-[#d4d4d4]">{");"}</span>
                      {"\n"}
                      {"\n"}
                      {"  "}
                      <span className="text-[#c586c0]">return</span>{" "}
                      <span className="text-[#d4d4d4]">(</span>
                      <span className="text-[#569cd6]">await</span>{" "}
                      <span className="text-[#dcdcaa]">buildAwesomeThings</span>
                      <span className="text-[#d4d4d4]">());</span>
                      {"\n"}
                      {"\n"}
                      {"\n"}
                      <span className="text-[#6a9955]">{`// Let's create something amazing together! 🚀`}</span>
                    </code>
                  </pre>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-primary/5 via-transparent to-transparent" />
              </div>
            </div>

            {/* Terminal Window */}
            <div
              className="relative hero-animate-fade-in-up"
              style={{ animationDelay: "1000ms" }}
            >
              <div className="relative bg-[#0c0c0c] rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1c1c1c] border-b border-border/50 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-muted-foreground/80 font-mono tracking-wide">
                      mahabub@devportfolio:~
                    </span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-3 sm:p-4 font-mono text-[10px] sm:text-xs leading-tight">
                  <div className="space-y-1.5">
                    <div className="text-[#4ec9b0]">
                      <span className="text-[#569cd6]">$</span>{" "}
                      <TypewriterText
                        text="pnpm install skills"
                        typingSpeed={50}
                        startDelay={1000}
                      />
                    </div>
                    <div
                      className="text-[#d4d4d4] opacity-0 hero-animate-fade-in-up"
                      style={{ animationDelay: "2500ms" }}
                    >
                      installing skills...{"\n"}added 20+ packages in 4 years
                    </div>
                    <div
                      className="text-[#4ec9b0] mt-2 opacity-0 hero-animate-fade-in-up"
                      style={{ animationDelay: "3500ms" }}
                    >
                      <span className="text-[#569cd6]">$</span>{" "}
                      <TypewriterText
                        text='git commit -m "Ready to build amazing things"'
                        typingSpeed={50}
                        startDelay={4000}
                      />
                    </div>
                    <div
                      className="text-[#6a9955] opacity-0 hero-animate-fade-in-up"
                      style={{ animationDelay: "7000ms" }}
                    >
                      [main 8a3f2c1] Ready to build amazing things{"\n"} 3 files
                      changed, 100+ insertions(+)
                    </div>
                    <div
                      className="text-[#4ec9b0] mt-2 opacity-0 hero-animate-fade-in-up"
                      style={{ animationDelay: "8000ms" }}
                    >
                      <span className="text-[#569cd6]">$</span>{" "}
                      <TypewriterText
                        text='npx portfolio:start --project="your-idea"'
                        typingSpeed={50}
                        startDelay={8500}
                      />
                    </div>
                  </div>
                </div>

                {/* Terminal Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent to-[#0c0c0c]/50" />
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div
              className="relative hero-animate-fade-in-up"
              style={{ animationDelay: "1200ms" }}
            >
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {[
                  {
                    name: "React",
                    icon: "⚛️",
                    color: "from-[#61DAFB] to-[#61DAFB]/20",
                  },
                  {
                    name: "Next.js",
                    icon: "▲",
                    color: "from-white to-white/20",
                  },
                  {
                    name: "TypeScript",
                    icon: "📘",
                    color: "from-[#3178C6] to-[#3178C6]/20",
                  },
                  {
                    name: "NestJS",
                    icon: "🦁",
                    color: "from-[#E0234E] to-[#E0234E]/20",
                  },
                  {
                    name: "Node.js",
                    icon: "🚀",
                    color: "from-[#339933] to-[#339933]/20",
                  },
                  {
                    name: "Java",
                    icon: "☕",
                    color: "from-[#007396] to-[#007396]/20",
                  },
                ].map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group inline-flex items-center gap-1.5 px-3 py-2 bg-linear-to-r dark:bg-linear-to-r border border-border/50 rounded-xl hover:border-primary/50 transition-all hover:scale-105 cursor-default"
                    style={{
                      animationDelay: `${1200 + index * 100}ms`,
                      background: `linear-gradient(to right, ${tech.color
                        .split(" to ")[0]
                        .replace("from-", "")}15, transparent)`,
                    }}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
