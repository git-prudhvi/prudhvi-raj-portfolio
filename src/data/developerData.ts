import { Experience, Project, Certification, Publication } from "../types";

export const DEVELOPER_INFO = {
  fullName: "Chennaboina Prudhvi Raj",
  title: "Full-Stack Developer / Software Engineer",
  subTitle: "High-Throughput Distributed Systems & Securing Enterprise Pipelines",
  location: "Hyderabad, India",
  email: "chennaboinaprudhviraj@gmail.com",
  github: "https://github.com/git-prudhvi/",
  linkedin: "https://www.linkedin.com/in/dev-prudhviraj/",
  resumeLink: "#", // Direct download triggers resume generation or download
  philosophy: "I treat performance as a core feature. Under the hood, this means writing gas-optimized smart contracts, profiling JVM memory streams to eliminate OOM failures, and engineering razor-sharp interfaces to coordinate robust backend architectures.",
  aboutNarrative: {
    academic: "My academic path at KL University, Hyderabad, earned me a B.Tech in Computer Science Engineering with a focus in Cyber Security & Blockchain Technology, culminating in an elegant CGPA of 9.19/10. Here, I developed a strong foundation in low-level systems, cryptographic fundamentals, data structures, and computer organization.",
    experience: "Upon transitioning to industry, I joined Tata Consultancy Services (TCS) within the high-stakes BFSI unit under the BaNCS product team. Partnering with Generali Central Insurance, I expanded my focus to enterprise-grade architectures, managing petabyte transactional payloads, orchestrating server resilience, and handling strict regulatory conditions.",
    philosophy: "Believing that modern engineering must bridge the gap between heavy systems logic and fluid user interfaces, I spend my time decoupling monolithic backends, tuning database tables, and building highly responsive client-side engines that deliver speed, clarity, and security."
  }
};

export const ARSENAL_BAND_1 = [
  "Java (OOP)", "Spring Boot", "Microservices", "Spring Batch", "Next.js", 
  "AngularJS", "JavaScript", "Python", "Solidity", "TypeScript", 
  "Distributed Systems", "Web Performance", "API Design"
];

export const ARSENAL_BAND_2 = [
  "Oracle PL/SQL", "ActiveMQ", "AWS Suite", "Web Application Firewall (WAF)", 
  "Cryptographical Hashing", "Horizontal Scaling", "NHCX/FHIR Standards", 
  "Digital Forensics", "Docker", "Git", "Security Auditing", "Azure Cloud"
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    id: "tcs",
    company: "Tata Consultancy Services (TCS)",
    role: "Software Developer (BFSI Unit - BaNCS Product Group)",
    timeline: "Aug 2023 – Present",
    location: "Hyderabad, India | Client: Generali Central Insurance",
    summary: "Architected enterprise core middleware, hardened transaction flows under strict BFSI regulations, and spearheaded horizontal modernization efforts.",
    metrics: [
      "Redesigned legacy BFSI systems into a 4-node horizontally scaled topology, optimizing cloud resource allocation and completely eliminating monthly peak-traffic production outages.",
      "Identified and mitigated severe JVM out-of-memory (OOM) runtime crashes during large file transfers (1GB+) by restructuring file pipelines to use low-footprint buffered stream-processing workflows.",
      "Orchestrated a highly resilient ActiveMQ clustering bridge to securely manage bulk outbound events, eliminating cascading rate-limit failures when exchanging data with third-party microservices.",
      "Designed and integrated NHCX/FHIR API structures alongside automatic PanAadhar blockchain validation and advanced OCR claim parsing pipelines, slashing manual claim audit times from 3 hours down to 20 minutes."
    ],
    skills: ["Java", "Spring Boot", "Spring Batch", "ActiveMQ", "Oracle PL/SQL", "NHCX/FHIR", "WAF", "Horizontal Scaling"]
  },
  {
    id: "samsung",
    company: "Samsung Research India (SRI-B)",
    role: "Research Intern (Samsung PRISM Program)",
    timeline: "Jul 2021 – Mar 2023",
    location: "Bangalore, India",
    summary: "Researched advanced acoustic audio analytics and language identification mapping algorithms directly under leading research mentors.",
    metrics: [
      "Co-engineered robust machine learning language identification systems leveraging custom spectrogram analytics pipelines in PyTorch.",
      "Optimized digital signal pre-processing utilities, which increased audio classifier training speeds and enhanced system acoustic pattern accuracy.",
      "Participated in deep-dive multi-lingual signal parsing sprints, resolving edge-case phoneme acoustic anomalies across layered data inputs."
    ],
    skills: ["Python", "Machine Learning", "Digital Signal Processing", "Acoustic Modeling", "PyTorch"]
  }
];

export const HIGHLIGHTED_PROJECTS: Project[] = [
  {
    id: "meta3",
    title: "Meta3 | 3D Voxel Engine",
    tagline: "High-Performance Browser-Based Render Engine",
    focus: "Optimum Frame Rates & Render Calculations",
    role: "Lead Graphics Engineer",
    challenge: "Garbage collection blocks and high memory limits triggered noticeable frame rate drop-offs when storing individual coordinate structures on high-density grids.",
    solution: "Wrote a custom sparse octree spatial index structure and bypassed external heavy engines. Layered dynamic instanced rendering elements and custom matrix formulas to support stable 60FPS loops in low-end browsers.",
    technologies: ["JavaScript", "WebGL", "HTML5 Canvas", "Linear Algebra"],
    // No direct URL requested, but we provide voxel drawing sandbox inside standard widget!
  },
  {
    id: "agricrop",
    title: "AgriCrop | Blockchain NFT Marketplace",
    tagline: "Tokenization & Secured Trading of Physical Agricultural Assets",
    focus: "Gas Optimization & Smart Contract Integrity",
    role: "Smart Contract Developer",
    challenge: "Excessive smart-contract gas usage during state modifications on-chain deterred small agricultural vendors from creating micro-fractional entries.",
    solution: "Developed optimized ERC-721 ledger scripts during the ETHERNALS hackathon. Implemented cryptographic signature offloading, batch verification schemes, and external state storage to decrease transaction fees.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "Truffle", "Metamask"],
    link: "https://devfolio.co/projects/agricrop-3807"
  },
  {
    id: "stego",
    title: "Image Steganography Suite",
    tagline: "Pixel-Level Digital Forensics Cryptography Tool",
    focus: "Payload Packaging & Stealth Ingestion",
    role: "Forensic Software Engineer",
    challenge: "Securing secret data structures within standard picture files without causing visual changes or inflating file size limits, which would expose the package to forensic analysis scanners.",
    solution: "Engineered an LSB (Least Significant Bit) payload packer that embeds encrypted bytes across RGB channels. Combined AES-256 pre-encryption with adaptive channel weighting to maintain perfect SSIM visual fidelity indexes.",
    technologies: ["Python", "Cryptography", "NumPy", "OpenCV", "Digital Forensics"],
    link: "https://cpr-encryption.vercel.app/"
  },
  {
    id: "crime",
    title: "Predictive Crime Analysis Pipeline",
    tagline: "End-to-End Regional Data Mining & Security Analytics",
    focus: "Data Aggregation & Spatial Hotspot Clustering",
    role: "Data Pipeline Engineer",
    challenge: "Consolidating large volumes of dirty regional police records, containing up to 45% null counts, into interactive visualization interfaces.",
    solution: "Designed strict pandas ETL processes to clean geographic entries, and trained a spatial K-means model to identify high-density municipal hubs to accurately predict patrol priorities.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Folium", "ETL Systems"],
    link: "https://github.com/git-prudhvi/Crime-Analysis"
  },
  {
    id: "galaxy",
    title: "Galaxy Technocom Corporate Portal",
    tagline: "High-Performance B2B Media Platform",
    focus: "Optimized Load Paths & Layout Stability",
    role: "Frontend Architect",
    challenge: "Slow asset load routes and excessive third-party scripts on standard B2B networks created Cumulative Layout Shifts (CLS) and loaded slowly.",
    solution: "Refactored the core markup to use lightweight responsive blocks, pre-loaded vector modules, and lazy-evaluated heavy assets, yielding excellent initial paint parameters.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vercel", "Performance Profiling"],
    link: "https://galaxytechnocom.vercel.app/"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: "ceh", name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council (Digital Security)" },
  { id: "azure", name: "Certified Azure Fundamentals", issuer: "Microsoft" },
  { id: "aviatrix", name: "Certified Engineer — Multi-Cloud Network Associate", issuer: "Aviatrix" },
  { id: "python", name: "PCAP: Python Essentials Certificate", issuer: "Python Institute" },
  { id: "rpa", name: "Automation Anywhere RPA Professional", issuer: "Automation Anywhere" }
];

export const PUBLICATION: Publication = {
  id: "forensics",
  title: "Relevance of Computer Forensics in Security",
  journal: "International Journal of All Research Education and Scientific Methods (IJARESM)",
  date: "April 2022",
  focus: "Investigative processes, cryptographic integrity loops, digital trace protection, and ledger verification."
};
