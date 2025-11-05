import type { ProfileData, Education, SocialLinks, Project } from './types';


export const profileData: ProfileData = {
  name: "zahdehv",
  title: "Developer",
  summary: "Software developer with a foundation in AI, backend systems, and algorithm design. Passionate about creating practical tools and exploring concepts from distributed systems to machine learning and game development.",
  email: "zahdehv@gmail.com"
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/zahdehv",
  telegram: "https://t.me/zahdehv",
  instagram: "https://instagram.com/zahdehv",
};

export const projects: Project[] = [
  {
    title: "Obsidian Importer Plugin",
    description: "A plugin for ObsidianMD that imports and processes audio, video, and documents into structured notes using Google's Generative AI.",
    technologies: ["TypeScript", "Google Generative AI"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
  {
    title: "AI Pokémon Battle Simulator",
    description: "A battle simulator where Pokémon strategies evolve over multiple generations using ES-HyperNEAT evolutionary algorithms.",
    technologies: ["Python", "AI", "NEAT-Python"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
  {
    title: "Moogle Search Engine",
    description: "A custom document search engine built from scratch in C#, featuring file indexing, TF-IDF scoring for relevance, and custom query operators.",
    technologies: ["C#", ".NET", "Data Structures", "Algorithms"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
  {
    title: "Microprocessor Simulator",
    description: "Implemented a processor for a subset of S-MIPS instructions, including a 1KB cache, for a Computer Architecture course.",
    technologies: ["Logisim", "Computer Architecture", "Digital Logic"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
];

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of Havana",
    period: "2022 - 2025"
  }
];

export const skills: string[] = [
  "AI Integration", "Backend Development", "System Design", "Tooling", 
  "C#", "Python", "TypeScript", "AI/ML"
];
