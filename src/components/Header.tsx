import { useState, useEffect } from "react";
import { Terminal, Shield, Menu, X } from "lucide-react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "arsenal", label: "ARSENAL" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "interactive", label: "SANDBOX" },
    { id: "validations", label: "CREDENTIALS" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Identity Token */}
        <button 
          onClick={() => scrollToSection("home")}
          className="flex items-center space-x-2.5 group cursor-pointer text-left"
        >
          <div className="w-8 h-8 rounded-none border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-100 group-hover:border-blue-500 transition-colors">
            <Terminal size={14} className="text-zinc-400 group-hover:text-blue-400 transition-colors" />
          </div>
          <div>
            <div className="text-sm font-black tracking-widest text-zinc-100 font-display">
              CPR // ARCHITECT
            </div>
            <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
              Securing Distributed Workloads
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1.5 text-xs font-mono font-bold tracking-widest transition-all cursor-pointer rounded-sm ${
                activeTab === item.id
                  ? "bg-zinc-900 border border-zinc-850 text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-4 w-[1px] bg-zinc-800 mx-2"></div>
          <a
            href="mailto:chennaboinaprudhviraj@gmail.com"
            className="px-3.5 py-1.5 text-[10px] font-mono font-black tracking-widest bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-none transition-all duration-200"
          >
            PING SERVER
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-900 shadow-2xl overflow-hidden py-4 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`py-2 text-left text-xs font-mono font-bold tracking-widest transition-all ${
                  activeTab === item.id 
                    ? "text-blue-400 pl-2 border-l-2 border-blue-500" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-[1px] bg-zinc-900 my-2"></div>
            <a
              href="mailto:chennaboinaprudhviraj@gmail.com"
              className="py-3 text-center text-xs font-mono font-black tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-none"
            >
              PING SERVER (SECURE EMAIL)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
