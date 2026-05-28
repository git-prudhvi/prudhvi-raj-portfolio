import { DEVELOPER_INFO } from "../data/developerData";
import { ShieldAlert, Cpu, Lock } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-20 md:py-32 bg-zinc-950 overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
        
        {/* Asymmetric Grids: Left title block, Right paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (35% scale index) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <span className="text-xs font-mono font-black text-blue-500 tracking-[0.3em] uppercase block">
              // LOG_01_NARRATIVE
            </span>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tighter text-zinc-100 uppercase leading-[0.9]">
              ENGINEERING<br/>
              <span className="text-zinc-500">SYSTEMS AT</span><br/>
              SCALE
            </h2>

            {/* Quick Metadata Matrix Grid */}
            <div className="border-t border-zinc-900 pt-6 mt-8 space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-zinc-900">
                <span className="font-mono text-[10px] text-zinc-600 uppercase">ACADEMIC CREDENTIALS</span>
                <span className="font-mono text-xs text-zinc-300 font-bold">CGPA: 9.19 / 10</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-zinc-900">
                <span className="font-mono text-[10px] text-zinc-600 uppercase">ACADEMIC INSTITUTION</span>
                <span className="font-mono text-xs text-zinc-300 font-bold">KL University</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-zinc-900">
                <span className="font-mono text-[10px] text-zinc-600 uppercase">SPECIALIZATION HUB</span>
                <span className="font-mono text-xs text-zinc-400 font-bold flex items-center space-x-1">
                  <Lock size={10} className="text-blue-500" />
                  <span>Cybersecurity / Blockchain</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (65% scale index) - Narrative Paragraphs */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Paragraph 1: Academic Pedigree */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-zinc-500">
                <span className="h-[1px] w-6 bg-zinc-800"></span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-blue-500">01 / ACADEMIC FOUNDATION</span>
              </div>
              <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
                {DEVELOPER_INFO.aboutNarrative.academic}
              </p>
              <div className="bg-zinc-900/40 border border-zinc-900 p-4 font-mono text-xs text-zinc-400 flex items-start space-x-3.5 mt-2 rounded-sm">
                <Cpu size={16} className="text-zinc-500 mt-0.5" />
                <div>
                  <span className="text-zinc-100 font-bold block mb-1">Low-Level System Design Specialties:</span>
                  Acquired deep proficiency in core cryptographic protocols, memory profiling rules, distributed ledgers, solid data-hiding matrices, and high-performance algorithms inside computational environments.
                </div>
              </div>
            </div>

            {/* Paragraph 2: Enterprise Scaling at TCS */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-zinc-500">
                <span className="h-[1px] w-6 bg-zinc-800"></span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-blue-500">02 / ENTERPRISE DEPLOYMENTS</span>
              </div>
              <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
                {DEVELOPER_INFO.aboutNarrative.experience}
              </p>
              <div className="bg-zinc-900/40 border border-zinc-900 p-4 font-mono text-xs text-zinc-400 flex items-start space-x-3.5 mt-2 rounded-sm">
                <ShieldAlert size={16} className="text-zinc-500 mt-0.5" />
                <div>
                  <span className="text-zinc-100 font-bold block mb-1">BFSI Mission-Critical Directives:</span>
                  Assigned to design secure, ultra-reliable integrations, resolve JVM memory leaks, implement cluster brokers using ActiveMQ, and comply with strict national health specifications under massive real-time concurrency.
                </div>
              </div>
            </div>

            {/* Paragraph 3: Front-Backend Convergence Philosophy */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-zinc-500">
                <span className="h-[1px] w-6 bg-zinc-800"></span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-blue-500">03 / ARCHITECTURAL PHILOSOPHY</span>
              </div>
              <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
                {DEVELOPER_INFO.aboutNarrative.philosophy}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
