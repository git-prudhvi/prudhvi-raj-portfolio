export interface Project {
  id: string;
  title: string;
  tagline: string;
  focus: string;
  role: string;
  challenge: string;
  solution: string;
  technologies: string[];
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  timeline: string;
  location: string;
  summary: string;
  metrics: string[];
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  code?: string;
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  date: string;
  focus: string;
}
