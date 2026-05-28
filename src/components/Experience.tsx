import { WORK_EXPERIENCES } from "../data/developerData";
import { Briefcase, Calendar, MapPin, CheckSquare, Layers, ShieldCheck, Activity } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative"
    >
      {/* Background Radial mesh */}
      <div className="absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/[0.02] blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-zinc-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-black text-blue-500 tracking-[0.3em] uppercase block mb-3">
              // REGISTER_04_EXPERIENCE_LEDGER
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-zinc-100 uppercase">
              PROFESSIONAL EXP
            </h2>
          </div>
          <div className="flex items-center space-x-2 text-zinc-500 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>LAST ACCOUNT RECONCILIATION: ACTIVE 2026</span>
          </div>
        </div>

        {/* Ledger Rows Stack */}
        <div className="space-y-12">
          {WORK_EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative border border-zinc-900 bg-zinc-950 hover:bg-zinc-900/10 hover:border-zinc-800 p-6 md:p-8 transition-all duration-300 rounded-none overflow-hidden"
              id={`experience-block-${exp.id}`}
            >
              {/* Visual Index Block Accent */}
              <div className="absolute top-0 left-0 h-full w-[3px] bg-zinc-800 group-hover:bg-blue-500 transition-colors"></div>

              {/* Top Banner: Role + Company Details */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-900 pb-6 mb-6">
                <div>
                  <div className="flex items-center space-x-2.5">
                    <span className="w-8 h-8 rounded-none border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:border-zinc-700 transition-colors text-[10px] font-mono font-bold">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-black text-zinc-100 tracking-tight uppercase group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-sm font-mono text-zinc-400 font-medium mt-1 pl-10">
                    {exp.company}
                  </div>
                </div>

                {/* Meta Matrix (Date / Locale / Code) */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 pl-10 lg:pl-0">
                  <span className="inline-flex items-center space-x-1.5 font-mono text-[11px] text-zinc-500">
                    <Calendar size={12} className="text-zinc-600" />
                    <span>{exp.timeline}</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 font-mono text-[11px] text-zinc-500">
                    <MapPin size={12} className="text-zinc-600" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Short summary block */}
              <div className="pl-0 md:pl-10 mb-6 font-sans text-sm text-zinc-400 tracking-wide max-w-4xl">
                {exp.summary}
              </div>

              {/* Action Bullets - Precise high-impact action outputs */}
              <div className="pl-0 md:pl-10 space-y-4">
                <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest block mb-1">
                  CORE OUTCOME-BASED DELIVERABLES:
                </span>
                
                <div className="grid grid-cols-1 gap-3.5">
                  {exp.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 text-zinc-300 font-sans text-xs md:text-sm leading-relaxed"
                    >
                      <div className="mt-1 flex-shrink-0">
                        <CheckSquare size={13} className="text-blue-500 uppercase shrink-0" />
                      </div>
                      <div className="hover:text-zinc-100 transition-colors">
                        {renderHighlightedMetric(metric)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row Tag Matrix */}
              <div className="pl-0 md:pl-10 mt-8 pt-6 border-t border-zinc-900/60 flex flex-wrap gap-2">
                <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest flex items-center mr-2">
                  <Layers size={11} className="mr-1.5" /> STACK VERIFIED:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[10px] font-mono bg-zinc-900 border border-zinc-850 hover:border-zinc-700 hover:text-white text-zinc-400 transition-all rounded-none"
                  >
                    {skill.toUpperCase()}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Function to break down strings and visually highlight specialized keywords inside metrics
function renderHighlightedMetric(text: string) {
  // Common core key terms specified in task requirements which should be visually emphasized
  const keywordsToHighlight = [
    "4-node horizontally scaled topology",
    "JVM out-of-memory (OOM) runtime crashes",
    "buffered stream-processing workflows",
    "ActiveMQ clustering bridge",
    "NHCX/FHIR API structures",
    "PanAadhar blockchain validation",
    "OCR claim parsing pipelines",
    "AI/ML language identification systems",
    "spectrogram analytics pipelines",
    "3 hours down to 20 minutes"
  ];

  let highlighted = text;
  
  // Custom tag replacements to hold markup securely
  keywordsToHighlight.forEach((kw) => {
    const regex = new RegExp(kw, "gi");
    highlighted = highlighted.replace(regex, `<strong>${kw}</strong>`);
  });

  return (
    <span 
      dangerouslySetInnerHTML={{ __html: highlighted }}
      className="[&>strong]:text-blue-400 [&>strong]:font-semibold [&>strong]:font-mono"
    />
  );
}
