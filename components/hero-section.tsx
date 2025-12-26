import {
  ArrowDown,
  ArrowRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import "./hero-section.css";

// Animated Text Component
function AnimatedText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block hero-animate-fade-in-up"
          style={{
            animationDelay: `${delay + index * 100}ms`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const descriptionText =
    "Architect and deploy scalable web and mobile applications with";

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className=" mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hero-animate-fade-in-up hero-delay-100">
              <Sparkles size={14} className="hero-animate-spin-slow" />
              <span>Available for opportunities</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <p className="text-base font-medium text-muted-foreground uppercase tracking-wider hero-animate-fade-in-up hero-delay-200">
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
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="#contact"
                className="group hero-animate-fade-in-up inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                style={{ animationDelay: "1400ms" }}
              >
                Get in Touch
                <ArrowRight
                  size={16}
                  className="sm:size-4.5 group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group hero-animate-fade-in-up inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 border-2 border-border hover:bg-card hover:border-primary/50 rounded-xl font-semibold transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                style={{ animationDelay: "1500ms" }}
              >
                <Download
                  size={16}
                  className="sm:size-4.5 group-hover:animate-bounce"
                />
                Download CV
              </Link>

              <Link
                href="#projects"
                className="hero-animate-fade-in-up inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 border-2 border-border hover:bg-card rounded-xl font-semibold transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                style={{ animationDelay: "1600ms" }}
              >
                <Code2 size={16} className="sm:size-4.5" />
                View Work
              </Link>
            </div>

            {/* Social Links */}
            <div
              className="pt-8 border-t border-border hero-animate-fade-in-up"
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
                  className="p-3 border border-border hover:border-primary/50 hover:bg-card hover:text-primary rounded-xl transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://linkedin.com/in/mahabub-hossain-86b24558"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border hover:border-blue-500/50 hover:bg-card hover:text-blue-500 rounded-xl transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="mailto:contact@mahabub.me"
                  className="p-3 border border-border hover:border-primary/50 hover:bg-card hover:text-primary rounded-xl transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Visual - Code Editor */}
          <div className="relative w-full">
            <div
              className="relative hero-animate-fade-in-up w-full"
              style={{ animationDelay: "800ms" }}
            >
              {/* Code Editor Window */}
              <div className="relative bg-[#1e1e1e] rounded-2xl shadow-2xl border border-border w-full">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-muted-foreground font-mono">
                      Portfolio.tsx
                    </span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                  <pre className="text-[#d4d4d4]">
                    <code>
                      <span className="text-[#569cd6]">import</span>{" "}
                      <span className="text-[#9cdcfe]">React</span>{" "}
                      <span className="text-[#569cd6]">from</span>{" "}
                      <span className="text-[#ce9178]">{`'react'`}</span>;{"\n"}
                      {"\n"}
                      <span className="text-[#569cd6]">interface</span>{" "}
                      <span className="text-[#4ec9b0]">Developer</span> {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-[#9cdcfe]">name</span>:{" "}
                      <span className="text-[#4ec9b0]">string</span>;{"\n"}
                      {"  "}
                      <span className="text-[#9cdcfe]">role</span>:{" "}
                      <span className="text-[#4ec9b0]">string</span>;{"\n"}
                      {"  "}
                      <span className="text-[#9cdcfe]">skills</span>:{" "}
                      <span className="text-[#4ec9b0]">string</span>[];
                      {"\n"}
                      {"}"}
                      {"\n"}
                      {"\n"}
                      <span className="text-[#569cd6]">const</span>{" "}
                      <span className="text-[#dcdcaa]">createPortfolio</span> ={" "}
                      <span className="text-[#569cd6]">async</span> () {" => "}
                      {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-[#569cd6]">const</span>{" "}
                      <span className="text-[#9cdcfe]">developer</span>:{" "}
                      <span className="text-[#4ec9b0]">Developer</span> = {"{"}
                      {"\n"}
                      {"    "}
                      <span className="text-[#9cdcfe]">name</span>:{" "}
                      <span className="text-[#ce9178]">{`'Mahabub Hossain'`}</span>
                      ,{"\n"}
                      {"    "}
                      <span className="text-[#9cdcfe]">role</span>:{" "}
                      <span className="text-[#ce9178]">{`'Full-Stack Developer'`}</span>
                      ,{"\n"}
                      {"    "}
                      <span className="text-[#9cdcfe]">skills</span>: [{"\n"}
                      {"      "}
                      <span className="text-[#ce9178]">{`'React'`}</span>,{" "}
                      <span className="text-[#ce9178]">{`'Next.js'`}</span>,
                      {"\n"}
                      {"      "}
                      <span className="text-[#ce9178]">{`'TypeScript'`}</span>,{" "}
                      <span className="text-[#ce9178]">{`'NestJS'`}</span>,
                      {"\n"}
                      {"      "}
                      <span className="text-[#ce9178]">{`'Node.js'`}</span>,{" "}
                      <span className="text-[#ce9178]">{`'Java'`}</span>
                      {"\n"}
                      {"    "}]{"\n"}
                      {"  "}
                      {"};"}
                      {"\n"}
                      {"\n"}
                      {"  "}
                      <span className="text-[#569cd6]">return</span>{" "}
                      <span className="text-[#569cd6]">await</span>{" "}
                      <span className="text-[#9cdcfe]">developer</span>.
                      <span className="text-[#dcdcaa]">buildAwesomeThings</span>
                      ();
                      {"\n"}
                      {"};"}
                      {"\n"}
                      {"\n"}
                      <span className="text-[#6a9955]">{`// Ready to bring your ideas to life!`}</span>
                    </code>
                  </pre>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-[#1e1e1e] via-transparent to-transparent opacity-50" />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 p-3 bg-[#1e1e1e] rounded-xl shadow-lg hero-animate-float hero-delay-300">
                <svg
                  viewBox="0 0 32 32"
                  className="w-6 h-6"
                  aria-label="React"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                      fill="#53C1DE"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                      fill="#53C1DE"
                    ></path>
                  </g>
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-4 p-3 bg-[#3178C6] rounded-xl shadow-lg hero-animate-float hero-delay-500">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-white"
                  aria-label="TypeScript"
                >
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
              </div>

              <div className="absolute top-1/4 -right-8 p-3 bg-[#E0234E] rounded-xl shadow-lg hero-animate-float hero-delay-700">
                <svg
                  viewBox="0 0 32 32"
                  className="w-6 h-6"
                  aria-label="NestJS"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M18.487,2a1.781,1.781,0,0,0-.564.1c1.615,1.062-.29,2.6.6,3.9A2.235,2.235,0,0,1,19.6,3.765c.285-.237.468-.322.407-.714C19.908,2.409,19.052,2,18.487,2Zm2.3.414c-.223,1.123-.5,1.164-1.323,1.887a1.821,1.821,0,0,0-.527,2.191c-3.4-1.32-7.758-2.118-10.953.166-1.149.821-1.85,2-3.267,2.481-.916.314-1.816.221-2.39,1.129A1.413,1.413,0,0,0,2.383,12.1c.171.175.5.287.636.465.079.1.077.2.152.333a2.6,2.6,0,0,0,.564.828c.147.121.652.239.738.368.108.161-.172.8.063.9.158.073.621-.744.666-.816-.092.643-.213,1.784.51.834.343-.451.364-.6.941-.7a8.2,8.2,0,0,1,1.117-.116,8.362,8.362,0,0,1,8.622,7.622c-.108-.5-.761-1.3-1.369-1.11-.259.08-.355.527-.525.786a3.773,3.773,0,0,1-.785.868,4.687,4.687,0,0,0-.072-1.452c-.182.748-.547,1.989-1.466,1.788a1.652,1.652,0,0,1-1.328-1.142c-.119-.76.684-1.651-.607-1.714-2.59-.127-1.991,3.682-.462,4.675a3.272,3.272,0,0,0-1.015.283,6.893,6.893,0,0,0,10.276-4.922,7.058,7.058,0,0,1-.015,3.085,7.213,7.213,0,0,1-.554,1.559,6.781,6.781,0,0,1-1.3,1.81c-.314.311-.89.624-1.088.941a13.409,13.409,0,0,0,3.52-.968A11.638,11.638,0,0,1,15.1,30a11.589,11.589,0,0,0,9.3-5.909,11.657,11.657,0,0,1-1.945,4.668,11.531,11.531,0,0,0,4.975-7.783,11.622,11.622,0,0,1,.209,3.5A12.418,12.418,0,0,0,29.528,13.91a15.755,15.755,0,0,0-1.689-3.962A14.838,14.838,0,0,0,26.9,8.554c-.133-.173-.844-.806-.844-1q-.009.029-.015,0c0,3.248-3.5,5.333-6.431,4.463A5,5,0,0,0,24.156,7.85,5,5,0,0,0,20.787,2.414Z"
                      fill="white"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>

              {/* Decorative Glow */}
              <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/30 via-accent/20 to-primary/30 blur-3xl rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-medium uppercase tracking-wider">
            Scroll
          </span>
          <ArrowDown size={16} className="hero-animate-bounce" />
        </div>
      </div>
    </section>
  );
}
