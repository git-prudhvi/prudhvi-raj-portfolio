import { useState } from "react";
import { HIGHLIGHTED_PROJECTS } from "../data/developerData";
import { ArrowUpRight, Plus, Minus, ExternalLink, Code2, AlertTriangle, Cpu } from "lucide-react";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>("meta3"); // default expanded

  const handleToggle = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-zinc-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-black text-blue-500 tracking-[0.3em] uppercase block mb-3">
              // REPOSITORY_05_DESIGN_MATRIX
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-zinc-100 uppercase">
              SELECTED WORK
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-zinc-500 leading-relaxed md:text-right">
            A registry of personal builds, digital forensics software, smart contract scripts, and responsive graphics systems engineered to demonstrate structural problem-solving.
          </p>
        </div>

        {/* Tabular Rows List */}
        <div className="border-t border-zinc-900 divide-y divide-zinc-900">
          {HIGHLIGHTED_PROJECTS.map((project) => {
            const isExpanded = expandedId === project.id;
            
            return (
              <div
                key={project.id}
                className="group relative transition-all duration-300"
                id={`project-ledger-row-${project.id}`}
              >
                {/* Visual glow overlay behind row */}
                {isExpanded && (
                  <div className="absolute inset-0 bg-zinc-900/10 -z-10 pointer-events-none"></div>
                )}

                {/* Main Interactive Header Row */}
                <button
                  onClick={() => handleToggle(project.id)}
                  onMouseEnter={() => setExpandedId(project.id)}
                  className="w-full text-left py-6 px-4 md:px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors group-hover:bg-zinc-900/10"
                >
                  <div className="flex items-center space-x-4 md:space-x-8">
                    {/* Index or Monospace tag */}
                    <span className="font-mono text-xs text-zinc-600 group-hover:text-blue-500 transition-colors hidden md:inline-block">
                      CODE_SUB_{project.id.toUpperCase()}
                    </span>

                    {/* Left: Title + Tagline */}
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-black tracking-tight text-zinc-100 group-hover:text-zinc-200 transition-colors uppercase">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-500 mt-1 uppercase">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: Focused Tech + Expander Indicator */}
                  <div className="flex items-center space-x-6">
                    <span className="hidden lg:inline-block font-mono text-xs text-zinc-500 bg-zinc-900/60 border border-zinc-900 px-3 py-1 uppercase tracking-wider">
                      {project.focus}
                    </span>
                    <div className="w-8 h-8 rounded-none border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:border-zinc-600 transition-colors">
                      {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </div>
                </button>

                {/* Sub Detail Panel drawer content */}
                {isExpanded && (
                  <div className="px-4 md:px-12 pb-8 pt-2 overflow-hidden animate-slideDown">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-zinc-900/60 pt-6">
                      
                      {/* Left Block Challenge Details */}
                      <div className="lg:col-span-6 space-y-4">
                        <div className="flex items-center space-x-2 text-red-400/80 font-mono text-[10px] uppercase tracking-wider">
                          <AlertTriangle size={12} />
                          <span>THE SYSTEM CHALLENGE_</span>
                        </div>
                        <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                          {project.challenge}
                        </p>
                      </div>

                      {/* Right Block Solution details */}
                      <div className="lg:col-span-6 space-y-4">
                        <div className="flex items-center space-x-2 text-emerald-400/80 font-mono text-[10px] uppercase tracking-wider">
                          <Cpu size={12} />
                          <span>ENGINEERED RESOLUTION_</span>
                        </div>
                        <p className="font-sans text-xs md:text-sm text-zinc-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* bottom action row within panel */}
                    <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-zinc-900/40 pt-6">
                      
                      {/* Badge compilation list */}
                      <div className="flex flex-wrap gap-1.5 items-center">
                        <Code2 size={12} className="text-zinc-600 mr-2" />
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[9px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-900 rounded-none uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Explicit readable outbound hyperlink */}
                      {project.link ? (
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest block mb-1">
                            PRODUCTION STAGED URL:
                          </span>
                          <a
                            href={project.link}
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="inline-flex items-center space-x-1.5 font-mono text-xs text-blue-400 hover:text-blue-300 border-b border-blue-500/30 hover:border-blue-500 pb-0.5 transition-colors cursor-pointer group/link"
                          >
                            <span className="break-all">{project.link}</span>
                            <ArrowUpRight size={12} className="text-blue-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0" />
                          </a>
                        </div>
                      ) : (
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest block">
                            PROPRIETARY SYSTEM / HOSTED LOCALLY
                          </span>
                          <span className="text-xs font-mono text-zinc-500 mt-1 italic">
                            Drawing matrix simulation embedded in sandbox section below.
                          </span>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
