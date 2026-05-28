# Personal Developer Portfolio & Digital Identity

### Chennaboina Prudhvi Raj — Full-Stack Software Engineer
A performance-first personal developer portfolio designed to showcase high-throughput, low-latency distributed systems logic wrapped inside fluid, responsive visual clients. Built with a modern, technical design system to serve interactive sandboxes, cryptographic simulations, and system architecture ledgers.

---

## Key Capabilities & Features

- **Performance-Driven Craft**: A dark, Brutalist-leaning aesthetic emphasizing information density, monospace clarity, and smooth, responsive interaction patterns.
- **Infinite Marquee Tech Banners**: Smooth, looping tech stack banners running via hardware-accelerated animations to showcase technical capabilities cleanly.
- **Interactive Experience Ledger**: A polished, hover-active timeline presenting outcome-first milestones utilizing the *Action -> Technical Implementation -> Quantifiable Impact* framework.
- **Expandable Project Matrix**: Tabular project rows displaying architectural challenges alongside custom, engineered resolutions and production URLs.
- **Interactive Engineering Sandboxes**: 
  - *Voxel Engine Preview*: Real-time mathematical grid rendering tracking polygon count and render latency.
  - *LSB Forensic Crypto Extractor*: A client-side decryption simulator that unpacks secret data payload packets using Least Significant Bit image steganography principles.
- **Comprehensive Verifications**: Modular credential vault highlighting security certifications (CEH, Azure) and scientific publication details in a highly readable format.

---

## Tech Stack & Tooling

- **Core Framework**: React 19 (designed with Next.js App Router architectural semantics in mind)
- **Styling & Layout**: Tailwind CSS v4 utilizing display typography pairing (Space Grotesk & Inter) alongside smooth custom animations
- **Animation Motion**: Motion library driving physical transitions and frame calculations
- **Semantic Iconography**: Lucide React providing precise engineering icons
- **Static Compilation**: TypeScript v5 for complete compile-time type safety

---

## Local Development / Getting Started

Follow these steps to spin up the portfolio locally to perform code audits or tweak design parameters.

### Prerequisites
Ensure you have the following runtime environment tools installed:
- **Node.js** (v18.x or higher recommended)
- **npm** (v9.x or higher)

### Step 1: Clone the Repository
```bash
git clone https://github.com/git-prudhvi/portfolio.git
cd portfolio
```

### Step 2: Install Base Dependencies
```bash
npm install
```

### Step 3: Spin Up local Development Servers
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser to view the live responsive interface.

---

## Architecture / Project Structure

A clean, human-designed directory map displaying separation of concerns across core modules:

```text
├── src/
│   ├── components/            # Isolated interactive UI modules
│   │   ├── About.tsx          # Engineering narrative & bio block
│   │   ├── Arsenal.tsx        # Seamless opposing looping marquees
│   │   ├── Certifications.tsx # Validation grid & call-to-actions
│   │   ├── EasterEggs.tsx     # Graphic sandboxes & crypto decryptors
│   │   ├── Experience.tsx     # BFSI systems ledger timelines
│   │   ├── Header.tsx         # Sticky glassmorphism navigator
│   │   ├── Hero.tsx           # Oversized typographic introductory block
│   │   └── Projects.tsx       # Interactive project matrix drawers
│   ├── data/
│   │   └── developerData.ts   # Unified central developer records
│   ├── App.tsx                # Base layouts & component orchestrator
│   ├── index.css              # Custom Tailwind theme definitions & global resets
│   ├── main.tsx               # Production bootstrap entry point
│   └── types.ts               # Strict TS interface structures
├── index.html                 # Parent DOM injection element
├── package.json               # System configuration & dependencies ledger
└── tsconfig.json              # Strict TypeScript compiler options
```

---

## Deployment

This repository is structured for seamless automated integration. Pushing commits directly to the production branch triggers automated atomic deployments via **Vercel** with global CDN caching and instantaneous rollbacks.
