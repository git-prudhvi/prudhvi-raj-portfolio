import { CERTIFICATIONS, PUBLICATION, DEVELOPER_INFO } from "../data/developerData";
import { Award, BookOpen, ExternalLink, Github, Linkedin, Mail, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  const socialActions = [
    {
      id: "github",
      label: "CONNECT_ON_GITHUB",
      value: "github.com/git-prudhvi",
      href: DEVELOPER_INFO.github,
      icon: <Github size={16} />
    },
    {
      id: "linkedin",
      label: "CONNECT_ON_LINKEDIN",
      value: "linkedin.com/in/dev-prudhviraj",
      href: DEVELOPER_INFO.linkedin,
      icon: <Linkedin size={16} />
    },
    {
      id: "email",
      label: "DISPATCH_DIRECT_EMAIL",
      value: DEVELOPER_INFO.email,
      href: `mailto:${DEVELOPER_INFO.email}`,
      icon: <Mail size={16} />
    }
  ];

  return (
    <section
      id="validations"
      className="py-24 bg-zinc-950 border-t border-zinc-900 pb-0 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        
        {/* Asymmetrical layout: Left Certifications Grid, Right Publication Citations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Block (Grid of 5 core certifications) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono font-black text-blue-500 tracking-[0.3em] uppercase block mb-3">
                // MODULE_07_CERTIFICATION_VAULT
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-zinc-100 uppercase">
                VALIDATIONS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="group relative border border-zinc-900 bg-zinc-950/40 p-5 hover:border-zinc-700 transition-all duration-200"
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-none border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:text-blue-400 group-hover:border-zinc-700 transition-all">
                      <Award size={15} />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs font-black text-zinc-200 uppercase leading-snug group-hover:text-white transition-colors">
                        {cert.name}
                      </h4>
                      <p className="font-mono text-[9px] text-zinc-500 uppercase mt-1">
                        ISSUER: {cert.issuer}
                      </p>
                    </div>
                  </div>
                  {/* Subtle checklist validation light */}
                  <div className="absolute top-2 right-2 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="text-[7px] font-mono text-zinc-650 font-bold uppercase">SEC_OK</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block (Publication details) */}
          <div className="lg:col-span-5 space-y-8 lg:border-l lg:border-zinc-900 lg:pl-12">
            <div>
              <span className="text-xs font-mono font-black text-blue-500 tracking-[0.3em] uppercase block mb-3">
                // CITATION_07_IJARESM_JOURNAL
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-zinc-100 uppercase">
                PUBLICATIONS
              </h2>
            </div>

            <div className="group border border-zinc-900 bg-zinc-950/40 p-6 space-y-4 hover:border-zinc-800 transition-colors relative">
              <div className="flex items-center space-x-2.5 text-zinc-550 border-b border-zinc-900 pb-3">
                <BookOpen size={14} className="text-blue-500" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                  ACADEMIC JOURNAL RECORD_
                </span>
              </div>

              <h3 className="text-xl font-display font-black text-zinc-100 uppercase leading-snug tracking-tight group-hover:text-blue-400 transition-colors">
                &ldquo;{PUBLICATION.title}&rdquo;
              </h3>

              <div className="space-y-2 text-xs font-mono text-zinc-400">
                <div>
                  <span className="text-zinc-600 uppercase text-[9px]">JOURNAL:</span>{" "}
                  <span className="text-zinc-300">{PUBLICATION.journal}</span>
                </div>
                <div>
                  <span className="text-zinc-600 uppercase text-[9px]">DATE OF PUBLICATION:</span>{" "}
                  <span className="text-zinc-300">{PUBLICATION.date}</span>
                </div>
                <div>
                  <span className="text-zinc-600 uppercase text-[9px]">ANALYTICAL FOCUS:</span>{" "}
                  <p className="text-zinc-400 font-sans mt-1 text-xs leading-relaxed font-light">
                    {PUBLICATION.focus}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Massive Brutalist REACH OUT Scrolling Typography Marquee */}
      <div className="relative border-y border-zinc-900 bg-zinc-950/30 py-6 overflow-hidden select-none">
        <div className="flex whitespace-nowrap gap-8 animate-marquee font-display font-black text-5xl sm:text-7xl md:text-8xl text-zinc-900 uppercase tracking-tighter opacity-15">
          <span>&bull; DISPATCH INTERVIEW INVITATION &bull; SCALE INFRASTRUCTURE &bull; HARDEN SECURE PIPELINES &bull; DECOUPLE SYSTEM ARCHITECTURES </span>
          <span>&bull; DISPATCH INTERVIEW INVITATION &bull; SCALE INFRASTRUCTURE &bull; HARDEN SECURE PIPELINES &bull; DECOUPLE SYSTEM ARCHITECTURES </span>
        </div>
      </div>

      {/* Final Call to Action Center Column Panel */}
      <div className="max-w-3xl mx-auto px-4 py-20 text-center relative z-10 space-y-8">
        <h3 className="text-3xl sm:text-5xl font-display font-black text-zinc-100 uppercase tracking-tight">
          BUILD RESILIENT SOLUTIONS. <span className="text-blue-500">TOGETHER.</span>
        </h3>
        <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto font-light">
          Welcoming technical leaders, engineering directors, and pioneering startup founders to resolve scaling issues, automate integration layers, and maintain absolute systemic security.
        </p>

        {/* Big Buttons grid with explicit clickable URLs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 text-left">
          {socialActions.map((act) => (
            <a
              key={act.id}
              href={act.href}
              target="_blank"
              referrerPolicy="no-referrer"
              className="group border border-zinc-900 bg-zinc-950 p-4 hover:border-zinc-700 transition-all flex flex-col justify-between cursor-pointer rounded-none relative"
            >
              <div className="flex justify-between items-start">
                <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {act.icon}
                </div>
                <ExternalLink size={12} className="text-zinc-650 group-hover:text-zinc-400 transition-colors" />
              </div>
              <div className="mt-8">
                <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest block">
                  {act.label}
                </span>
                <span className="font-mono text-xs text-zinc-300 font-bold block mt-1 truncate group-hover:text-blue-400 transition-colors">
                  {act.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Copyright Footer line */}
      <div className="border-t border-zinc-900/60 bg-zinc-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-650 font-mono text-[9px] uppercase tracking-widest">
          <div>
            &copy; 2026 CHENNABOINA PRUDHVI RAJ. ALL SYSTEMS ACTIVE.
          </div>
          <div>
            COMPILED IN GOOGLE AI STUDIO &bull; LOCAL_HOST:3000
          </div>
        </div>
      </div>

    </section>
  );
}
