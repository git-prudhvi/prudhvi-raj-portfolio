import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Arsenal from "./components/Arsenal";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EasterEggs from "./components/EasterEggs";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-blue-500/30 selection:text-white">
      {/* Persistant Top Navigator bar */}
      <Header />

      {/* Main Container Sections Layout block */}
      <main className="relative flex flex-col w-full">
        {/* Section 1: Hero Cover Header */}
        <Hero />

        {/* Section 2: Narrative About Block wrapper */}
        <About />

        {/* Section 3: Opposing Arsenal Marquee */}
        <Arsenal />

        {/* Section 4: Experience Professional Ledger */}
        <Experience />

        {/* Section 5: Expandable Tabular Projects */}
        <Projects />

        {/* Section 6: Double Interactive Sandboxes Easter Eggs */}
        <EasterEggs />

        {/* Section 7: Validations credentials, journal & Footer CTA */}
        <Certifications />
      </main>
    </div>
  );
}

