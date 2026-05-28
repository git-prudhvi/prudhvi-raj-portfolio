import { useState, useEffect, useRef } from "react";
import { Boxes, Sliders, Play, RefreshCw, Lock, Unlock, Hash, Eye, Signal, Terminal } from "lucide-react";

export default function EasterEggs() {
  // Widget A: Voxel Grid States
  const gridSize = 10;
  const [voxelGrid, setVoxelGrid] = useState<boolean[][]>(
    Array(gridSize).fill(null).map(() => Array(gridSize).fill(false))
  );
  const [activePreset, setActivePreset] = useState("custom");
  const [activeCount, setActiveCount] = useState(0);
  const [fps, setFps] = useState(60);
  const [renderCount, setRenderCount] = useState(0);

  // Widget B: Forensic Crypto Scrambler States
  const [payloadText, setPayloadText] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [activeAxiomIdx, setActiveAxiomIdx] = useState<number | null>(null);

  const axioms = [
    "PERFORMANCE IS A FEATURE. WRITE CODE FOR THE CPU AND RAM FIRST, PIXEL STYLE SECOND.",
    "DECOUPLE ALL CRITICAL SYSTEM BOUNDARIES, CONTAIN OUTAGES SECURELY, AND SANITIZE BYTES.",
    "CRYPTOGRAPHY IS NOT AN ADD-ON. SOLID CYBER-SOCIETY RESTS ON INVIOLABLE MATHEMATICAL ENCLAVES."
  ];

  // Simulated FPS fluctuation
  useEffect(() => {
    const fpsTimer = setInterval(() => {
      setFps(Math.floor(Math.random() * (62 - 58) + 58));
    }, 1200);

    // Bootstrap initial Voxel layout (centered block)
    const initialGrid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));
    initialGrid[3][3] = true; initialGrid[3][4] = true; initialGrid[3][5] = true;
    initialGrid[4][3] = true; initialGrid[4][5] = true;
    initialGrid[5][3] = true; initialGrid[5][4] = true; initialGrid[5][5] = true;
    setVoxelGrid(initialGrid);
    setActiveCount(8);

    return () => clearInterval(fpsTimer);
  }, []);

  // Update voxel tracking metrics
  useEffect(() => {
    let count = 0;
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (voxelGrid[r][c]) count++;
      }
    }
    setActiveCount(count);
  }, [voxelGrid]);

  // Voxel Toggler
  const toggleVoxel = (r: number, c: number) => {
    const nextGrid = voxelGrid.map((row, rowIdx) =>
      row.map((cell, cellIdx) => (rowIdx === r && cellIdx === c ? !cell : cell))
    );
    setVoxelGrid(nextGrid);
    setRenderCount((prev) => prev + 1);
  };

  // Preset Spawners
  const loadPreset = (preset: string) => {
    setActivePreset(preset);
    const nextGrid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));
    
    if (preset === "glider") {
      nextGrid[2][4] = true;
      nextGrid[3][5] = true;
      nextGrid[4][3] = true;
      nextGrid[4][4] = true;
      nextGrid[4][5] = true;
    } else if (preset === "cube") {
      nextGrid[3][3] = true; nextGrid[3][4] = true; nextGrid[3][5] = true;
      nextGrid[4][3] = true; nextGrid[4][4] = true; nextGrid[4][5] = true;
      nextGrid[5][3] = true; nextGrid[5][4] = true; nextGrid[5][5] = true;
    } else if (preset === "cross") {
      for (let i = 0; i < gridSize; i++) {
        nextGrid[i][5] = true;
        nextGrid[5][i] = true;
      }
    }
    setVoxelGrid(nextGrid);
    setRenderCount((prev) => prev + 1);
  };

  // Clear Grid Buffer
  const clearGrid = () => {
    setActivePreset("custom");
    setVoxelGrid(Array(gridSize).fill(null).map(() => Array(gridSize).fill(false)));
    setRenderCount((prev) => prev + 1);
  };

  // Forensic Code Decryptor animation runner
  const triggerForensicDecrypter = (axiomIdx: number) => {
    if (isDecrypting) return;
    setIsDecrypting(true);
    setActiveAxiomIdx(axiomIdx);
    
    const targetStr = axioms[axiomIdx];
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%_#@*&!$+=-?[]";
    let iterations = 0;
    
    const interval = setInterval(() => {
      const currentProgress = targetStr
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iterations) return targetStr[index];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");
        
      setPayloadText(currentProgress);
      
      if (iterations >= targetStr.length) {
        clearInterval(interval);
        setIsDecrypting(false);
      }
      
      // Speed up resolution slightly over time
      iterations += 2;
    }, 45);
  };

  return (
    <section
      id="interactive"
      className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-zinc-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-black text-blue-500 tracking-[0.3em] uppercase block mb-3">
              // SANDBOX_06_EASTER_EGGS
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-zinc-100 uppercase">
              INTERACTIVE CRAFT
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-zinc-500 leading-relaxed md:text-right">
            Practical demonstrations of client-side web capabilities, pixel matrix manipulations, and mathematical array structures executed without external physics wrappers.
          </p>
        </div>

        {/* Modular Grid Panel Containers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Concept A: Voxel Rendering Simulation Sandbox */}
          <div className="border border-zinc-900 bg-zinc-955 p-6 md:p-8 space-y-6 relative rounded-none">
            <div className="absolute top-0 right-0 border-l border-b border-zinc-900 bg-zinc-950 px-3 py-1 font-mono text-[9px] text-zinc-600">
              MODULE_01_GRAPHICS_GRID
            </div>

            <div className="flex items-center space-x-2">
              <Boxes size={16} className="text-blue-500" />
              <h3 className="text-md font-mono font-bold tracking-widest text-zinc-200 uppercase">
                3D VOXEL PREVIEW INTERFACES
              </h3>
            </div>

            <p className="text-xs font-sans text-zinc-400 leading-relaxed">
              Below is an interactive mathematical render grid representing the cell coordinates of Prudhvi&apos;s <strong>Meta3 3D Engine</strong> design. Click cell pathways to instantiate coordinates and watch active system calculations scale real-time.
            </p>

            {/* Grid Presets Trigger selectors */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              <button
                onClick={() => loadPreset("glider")}
                className={`px-3 py-1 text-[10px] font-mono border transition-all cursor-pointer ${
                  activePreset === "glider"
                    ? "bg-blue-500/10 border-blue-500/40 text-blue-400 font-bold"
                    : "border-zinc-900 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800"
                }`}
              >
                PROX_GLIDER
              </button>
              <button
                onClick={() => loadPreset("cube")}
                className={`px-3 py-1 text-[10px] font-mono border transition-all cursor-pointer ${
                  activePreset === "cube"
                    ? "bg-blue-500/10 border-blue-500/40 text-blue-400 font-bold"
                    : "border-zinc-900 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800"
                }`}
              >
                SOLID_3D_CUBE
              </button>
              <button
                onClick={() => loadPreset("cross")}
                className={`px-3 py-1 text-[10px] font-mono border transition-all cursor-pointer ${
                  activePreset === "cross"
                    ? "bg-blue-500/10 border-blue-500/40 text-blue-400 font-bold"
                    : "border-zinc-900 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800"
                }`}
              >
                AXIS_SPLIT
              </button>
              <button
                onClick={clearGrid}
                className="px-3 py-1 text-[10px] font-mono border border-zinc-900 bg-red-950/20 text-red-400 hover:bg-red-950/40 hover:border-red-500/30 font-bold ml-auto transition-all cursor-pointer"
              >
                FLUSH_BUFFER
              </button>
            </div>

            {/* Simulated Canvas Layout View */}
            <div className="relative border border-zinc-900 bg-zinc-950 p-4 flex items-center justify-center">
              <div 
                className="grid gap-[2px] w-full max-w-[340px] aspect-square"
                style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}
              >
                {voxelGrid.map((row, rIdx) =>
                  row.map((cell, cIdx) => (
                    <button
                      key={`${rIdx}-${cIdx}`}
                      onClick={() => toggleVoxel(rIdx, cIdx)}
                      className={`w-full h-full aspect-square transition-all duration-150 cursor-pointer ${
                        cell
                          ? "bg-blue-500 border border-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                          : "bg-zinc-900 hover:bg-zinc-800 border border-zinc-950"
                      }`}
                      aria-label={`Toggle voxel coordinate Row ${rIdx} Column ${cIdx}`}
                    />
                  ))
                )}
              </div>
            </div>

            {/* High fidelity Live graphics telemetry block */}
            <div className="grid grid-cols-3 gap-3 bg-zinc-950 border border-zinc-900 p-4">
              <div className="font-mono">
                <div className="text-[8px] text-zinc-650 uppercase">ACTIVE_VOXELS</div>
                <div className="text-sm font-black text-zinc-200 mt-0.5">{activeCount} / 100</div>
              </div>
              <div className="font-mono">
                <div className="text-[8px] text-zinc-655 uppercase">POLYGON_FOOTPRINT</div>
                <div className="text-sm font-black text-zinc-200 mt-0.5">{activeCount * 24} vert_points</div>
              </div>
              <div className="font-mono">
                <div className="text-[8px] text-zinc-650 uppercase">RENDER_CLOCK_EST</div>
                <div className="text-sm font-black text-blue-400 mt-0.5">{fps} FPS</div>
              </div>
              <div className="font-mono border-t border-zinc-900 pt-2 col-span-2">
                <div className="text-[8px] text-zinc-660 uppercase">DENSE_CALCULATIONS_TOTAL</div>
                <div className="text-xs text-zinc-400 mt-0.5 uppercase tracking-tighter">
                  {renderCount} redraws &bull; (0.{renderCount * 17}ms tick cycles)
                </div>
              </div>
              <div className="font-mono border-t border-zinc-900 pt-2 text-right">
                <span className="inline-block px-1.5 py-0.5 bg-zinc-900 border border-zinc-800 text-[8px] text-emerald-400 font-bold uppercase rounded-none">
                  GPU_STABLE
                </span>
              </div>
            </div>
          </div>

          {/* Concept B: Forensic Cryptography Decryption Widget */}
          <div className="border border-zinc-900 bg-zinc-955 p-6 md:p-8 space-y-6 relative rounded-none">
            <div className="absolute top-0 right-0 border-l border-b border-zinc-900 bg-zinc-950 px-3 py-1 font-mono text-[9px] text-zinc-600">
              MODULE_02_CYBER_ENCRYPT
            </div>

            <div className="flex items-center space-x-2">
              <Lock size={16} className="text-blue-500" />
              <h3 className="text-md font-mono font-bold tracking-widest text-zinc-200 uppercase">
                LSB FORENSIC CRYPTO EXTRACTOR
              </h3>
            </div>

            <p className="text-xs font-sans text-zinc-400 leading-relaxed">
              Demonstrates an active payload de-obfuscator derived from Prudhvi&apos;s custom <strong>LSB (Least Significant Bit) Image Steganography Pipeline</strong>. Select a forensic index packet below to decrypt underlying design philosophies.
            </p>

            {/* Embedded LSB Pixel Buffer mockup visualization */}
            <div className="bg-zinc-950 border border-zinc-900 p-4 font-mono space-y-3">
              <div className="flex justify-between items-center text-[9px] text-zinc-500 border-b border-zinc-900 pb-2">
                <span className="flex items-center space-x-1">
                  <Signal size={10} className="text-emerald-500" />
                  <span>PIXEL_HEX_ARRAY_LSB_CARRIER</span>
                </span>
                <span>SECURE CHANNELS</span>
              </div>

              {/* Bit representation visualizers */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 text-[10px] text-zinc-500">
                <div className="bg-zinc-900 border border-zinc-850 p-1.5 text-center">
                  <span className="text-zinc-600 block text-[8px]">PX[0,0]_RGB</span>
                  <span className="text-zinc-300 font-bold text-[10px]">#F402B1</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-850 p-1.5 text-center">
                  <span className="text-zinc-600 block text-[8px]">PX[0,1]_RGB</span>
                  <span className="text-zinc-300 font-bold text-[10px]">#0C89FA</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-850 p-1.5 text-center">
                  <span className="text-zinc-600 block text-[8px]">PX[0,2]_LSB</span>
                  <span className="text-blue-400 font-bold text-[10px]">10110001</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-850 p-1.5 text-center">
                  <span className="text-zinc-600 block text-[8px]">PX[0,3]_LSB</span>
                  <span className="text-blue-400 font-bold text-[10px]">01101100</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-850 p-1.5 text-center hidden sm:block">
                  <span className="text-zinc-600 block text-[8px]">PX[0,4]_RGB</span>
                  <span className="text-zinc-300 font-bold text-[10px]">#0D0D11</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-850 p-1.5 text-center hidden sm:block">
                  <span className="text-zinc-600 block text-[8px]">PX[0,5]_RGB</span>
                  <span className="text-zinc-100 font-bold text-[10px]">#04F4BB</span>
                </div>
              </div>
            </div>

            {/* Select payloads options UI buttons */}
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-zinc-650 uppercase tracking-widest block mb-1">
                SELECT ENCRYPTED FILE PACKETS TO EXTRACT:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => triggerForensicDecrypter(idx)}
                    disabled={isDecrypting}
                    className={`p-3 text-left font-mono border text-[10px] transition-all flex items-center justify-between cursor-pointer ${
                      activeAxiomIdx === idx
                        ? "bg-blue-500/10 border-blue-500/40 text-blue-400"
                        : "border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800 disabled:opacity-50"
                    }`}
                  >
                    <div>
                      <span className="text-zinc-600 block text-[7px]">PACKET_0{idx + 1}</span>
                      <span>IN_STECO_0{idx + 1}.PNG</span>
                    </div>
                    {activeAxiomIdx === idx && isDecrypting ? (
                      <RefreshCw size={12} className="animate-spin text-blue-500 shrink-0 ml-1" />
                    ) : activeAxiomIdx === idx ? (
                      <Unlock size={12} className="text-emerald-500 shrink-0 ml-1" />
                    ) : (
                      <Lock size={12} className="text-zinc-650 shrink-0 ml-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Decoder Textbox with custom Scrambler Matrix animations */}
            <div className="bg-zinc-950 border border-zinc-900 p-4 font-mono space-y-2">
              <div className="flex items-center justify-between text-[9px] text-zinc-600 uppercase">
                <span>EXTRACTED PAYLOAD DECIPHER OUTPUT:</span>
                <span>CIPHER: COMPLETED</span>
              </div>
              <div className="min-h-[4.5rem] bg-zinc-900/40 p-3.5 border border-zinc-900 rounded-sm flex items-center">
                {payloadText ? (
                  <p className="text-xs text-zinc-300 font-bold tracking-tight leading-relaxed select-all">
                    {payloadText}
                  </p>
                ) : (
                  <span className="text-zinc-600 text-xs italic">
                    Select a secure forensic PNG packet block above to initiate cryptographic LSB extraction...
                  </span>
                )}
              </div>
              {payloadText && (
                <div className="flex items-center space-x-1.5 text-zinc-500 text-[9px] uppercase tracking-widest pt-1 justify-end font-bold">
                  <Terminal size={11} className="text-blue-500" />
                  <span>DENSE PHILOSOPHY VALIDATED</span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
