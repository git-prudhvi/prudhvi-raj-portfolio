import { ARSENAL_BAND_1, ARSENAL_BAND_2 } from "../data/developerData";
import { Cpu, Binary, Layers } from "lucide-react";

export default function Arsenal() {
  // Helper to safely duplicate list elements to create an absolute seamless marquee alignment
  const renderMarqueeBand = (items: string[], direction: "forward" | "reverse") => {
    // Duplicate array multiple times to ensure width exceeds screen boundary bounds
    const duplicatedItems = [...items, ...items, ...items, ...items];
    const animClass = direction === "forward" ? "animate-marquee" : "animate-marquee-reverse";

    return (
      <div className="w-full overflow-hidden flex relative py-2">
        {/* Visual Fade Out Gradients on Left/Right Edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>

        <div className={`flex whitespace-nowrap gap-4 shrink-0 ${animClass}`}>
          {duplicatedItems.map((tech, idx) => (
            <div
              key={`${tech}-${idx}`}
              className="inline-flex items-center space-x-2 bg-zinc-900/60 border border-zinc-900 hover:border-zinc-700 px-5 py-3 text-xs font-mono font-bold text-zinc-300 transition-colors pointer-events-none select-none rounded-none"
            >
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-none"></div>
              <span>{tech.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="arsenal"
      className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-black text-blue-500 tracking-[0.3em] uppercase block mb-3">
              // TECH_ARSENAL_MATRIX
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-zinc-100 uppercase">
              THE CORE STACK
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-zinc-500 leading-relaxed md:text-right">
            Preloaded framework packages and compiled systems structures optimized for high concurrency, cryptographic security, and sub-millisecond operational performance.
          </p>
        </div>
      </div>

      {/* Double opposing marquee loops */}
      <div className="space-y-4">
        {/* Band 1 - Core Language Suite */}
        <div className="border-y border-zinc-900/80 bg-zinc-950/40 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center space-x-2">
            <Binary size={12} className="text-blue-500" />
            <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
              BAND 01 / CORE LANGUAGES &amp; DISTRIBUTED FRAMEWORKS
            </span>
          </div>
          {renderMarqueeBand(ARSENAL_BAND_1, "forward")}
        </div>

        {/* Band 2 - Databases & Cloud Infra */}
        <div className="border-b border-zinc-900/80 bg-zinc-950/40 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center space-x-2">
            <Layers size={12} className="text-indigo-400" />
            <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
              BAND 02 / STORAGE, MESSAGING, SECURED ENCLAVES
            </span>
          </div>
          {renderMarqueeBand(ARSENAL_BAND_2, "reverse")}
        </div>
      </div>

      {/* Cyber metric panel in bottom margin */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border border-zinc-900 p-4 font-mono">
          <div className="text-[9px] text-zinc-600 uppercase">DECOUPLING STANDARD</div>
          <div className="text-lg font-black text-zinc-300 mt-1 uppercase">SPRING CLOUD</div>
        </div>
        <div className="border border-zinc-900 p-4 font-mono">
          <div className="text-[9px] text-zinc-600 uppercase">LEDGER DESIGN</div>
          <div className="text-lg font-black text-zinc-300 mt-1 uppercase">ERC-721 GAS_OPT</div>
        </div>
        <div className="border border-zinc-900 p-4 font-mono">
          <div className="text-[9px] text-zinc-600 uppercase">INTEG SPECIFICATIONS</div>
          <div className="text-lg font-black text-zinc-300 mt-1 uppercase">NHCX / FHIR APIs</div>
        </div>
        <div className="border border-zinc-900 p-4 font-mono">
          <div className="text-[9px] text-zinc-600 uppercase">CIPHER PIPELINES</div>
          <div className="text-lg font-black text-zinc-300 mt-1 uppercase">LSB FORENSICS</div>
        </div>
      </div>
    </section>
  );
}
