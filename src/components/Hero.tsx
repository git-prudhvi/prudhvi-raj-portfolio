import { DEVELOPER_INFO } from "../data/developerData";
import { Github, Linkedin, Mail, FileDown, Activity, ChevronDown } from "lucide-react";

export default function Hero() {
  const triggerResumeDownload = () => {
    // Generates a structured print layout or simple markdown resume for the user
    const resumeText = `
CHENNABOINA PRUDHVI RAJ
=======================
Role: Full-Stack Developer / Software Engineer
Email: chennaboinaprudhviraj@gmail.com
GitHub: https://github.com/git-prudhvi/
LinkedIn: https://www.linkedin.com/in/dev-prudhviraj/

SUMMARY
=======
High-performance backend logic integrated with fluid visual clients. B.Tech Computer Science Engineering with a specialization in Cyber Security & Blockchain Technology (CGPA 9.19/10). Experienced in horizontal server scaling, optimizing OOM transfer pipelines, orchestrating message queues, and smart contract execution.

EXPERIENCE
==========
Tata Consultancy Services (TCS) | Software Developer (BFSI Unit - BaNCS Product Group)
Timeline: Aug 2023 – Present
Client: Generali Central Insurance
- Redesigned systemic architecture into a 4-node horizontally scaled topology, eliminating critical peak-load server failures.
- Mitigated severe JVM out-of-memory (OOM) memory leaks during large file transfers (1GB+) by structuring buffered stream-processing workflows.
- Orchestrated resilient ActiveMQ clustering boundaries, eliminating API rate throttling and cascading service drops.
- Integrated National Healthcare Standards via NHCX/FHIR API structures, automated blockchain-based fraud verification, and integrated OCR claim processing, slashing validation cycles from 3 hours to 20 minutes.

Samsung Research India (SRI-B) | Research Intern (Samsung PRISM Program)
Timeline: Jul 2021 – Mar 2023
- Co-engineered deep spectrogram-driven voice recognition classifiers.
- Optimized mathematical audio signal pipelines, enhancing performance speeds.

EDUCATION
=========
KL University, Hyderabad (2019 – 2023)
B.Tech in Computer Science Engineering | Specialization: Cyber Security & Blockchain Technology
CGPA: 9.19/10

CERTIFICATIONS
==============
- CEH (Certified Ethical Hacker) | EC-Council
- Microsoft Certified Azure Fundamentals
- Aviatrix Certified Engineer - Multicloud Network Associate
- PCAP: Python Essentials | Python Institute
- Robotic Process Automation Professional | Automation Anywhere

PUBLICATIONS
============
- "Relevance of Computer Forensics in Security" (Published: IJARESM Journal, April 2022)
    `;
    
    const blob = new Blob([resumeText.trim()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Chennaboina_Prudhvi_Raj_Systems_Engineer_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 md:pt-32"
    >
      {/* Visual Radial Glow Mesh Accents */}
      <div className="absolute top-[30%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-blue-500/5 blur-[100px] md:blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>

      {/* Cyber Background Grid Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10 flex flex-col justify-between flex-grow">
        {/* Top telemetry panel */}
        <div className="flex items-center space-x-2 text-zinc-600 font-mono text-[10px] uppercase tracking-widest pt-4">
          <Activity size={12} className="text-blue-500 animate-pulse" />
          <span>LATENCY: LOCALHOST</span>
          <span className="text-zinc-800">|</span>
          <span>ESTABLISHED: 2026_SESSION</span>
          <span className="text-zinc-800">|</span>
          <span className="text-blue-400">STATUS: CORE_STABLE</span>
        </div>

        {/* Hero Brutalist Heading Block */}
        <div className="my-auto py-10 md:py-16">
          <div className="overflow-hidden mb-3">
            <span className="inline-block text-xs md:text-sm font-mono font-black text-blue-400 uppercase tracking-[0.3em] uppercase">
              // RECONSTRUCTING DATA FLOWS
            </span>
          </div>

          <h1 className="flex flex-col text-left text-zinc-100 font-display font-black tracking-tighter uppercase leading-[0.88]">
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] text-zinc-100 block transition-transform duration-300">
              PRUDHVI RAJ
            </span>
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 block mt-2 filter drop-shadow-sm font-black">
              SCALES DISTRIBUTED BACKENDS
            </span>
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-zinc-500 block mt-2 font-bold tracking-tight lowercase">
              &gt;_ in high-performance visual wrappers.
            </span>
          </h1>

          {/* Core Philosophy Copy */}
          <div className="mt-8 max-w-2xl border-l border-zinc-700 pl-6 py-1">
            <p className="font-mono text-xs md:text-sm text-zinc-400 leading-relaxed">
              {DEVELOPER_INFO.philosophy}
            </p>
          </div>

          {/* Social Hooks & Interactive Action Panel */}
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            {/* Primary Action Button */}
            <button
              onClick={triggerResumeDownload}
              className="px-5 py-3 border border-zinc-500 bg-zinc-900 text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-zinc-100 hover:text-zinc-950 transition-all cursor-pointer flex items-center space-x-2.5 rounded-none"
            >
              <FileDown size={14} className="animate-bounce" />
              <span>DOWNLOAD RESUME ledger.txt</span>
            </button>

            {/* Anchors */}
            <div className="flex space-x-2">
              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-11 h-11 border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all rounded-none"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-11 h-11 border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all rounded-none"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="w-11 h-11 border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all rounded-none"
                aria-label="Email Endpoint"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex gap-4 items-center justify-between border-t border-zinc-900 py-6 text-zinc-600 font-mono text-[9px] uppercase tracking-widest mt-auto">
          <div className="flex items-center space-x-3">
            <span>ENGINEERING PORTFOLIO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
            <span className="text-[10px] text-zinc-500 font-bold lowercase">v2.6_live</span>
          </div>
          
          <button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center space-x-1.5 hover:text-zinc-300 transition-colors animate-bounce cursor-pointer group"
          >
            <span>DISPATCH SCROLL</span>
            <ChevronDown size={11} className="text-zinc-400 group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
