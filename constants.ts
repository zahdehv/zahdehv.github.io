import type { ProfileData, WorkExperience, Education, SocialLinks, BlogPost, Project } from './types';

export const profileData: ProfileData = {
  name: "zahdehv",
  title: "Developer",
  summary: "Software developer with a foundation in AI, backend systems, and algorithm design. Passionate about creating practical tools and exploring concepts from distributed systems to machine learning and game development.",
  email: "kuutaiyuu@gmail.com"
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/maritzuo",
  telegram: "https://t.me/zahdehv",
  instagram: "https://instagram.com/zahdehv",
};

export const workExperience: WorkExperience[] = [
  {
    role: "Importer (Thesis Project)",
    company: "TypeScript, Google Generative AI",
    period: "2025",
    description: [
      "Developed an Obsidian plugin to process audio, video, and documents, automatically converting them into structured notes using the Google Generative AI API.",
    ]
  },
  {
    role: "Pokemon Battle Simulator",
    company: "Python, AI",
    period: "2024",
    description: [
      "Created a battle simulator where Pokémon evolve their combat strategies over time using evolutionary algorithms (ES-HyperNEAT).",
    ]
  },
  {
    role: "Microprocessor Simulator",
    company: "Logisim",
    period: "2023",
    description: [
        "Implemented a processor for a subset of S-MIPS instructions, including a 1KB cache, for a Computer Architecture course.",
    ]
  },
  {
    role: "Moogle",
    company: "C#",
    period: "2022",
    description: [
        "Built a custom search engine. Implemented file indexing, TF-IDF for scoring, and custom operators for query processing to rank and retrieve relevant documents.",
    ]
  },
  // FIX: This object was updated to match the 'WorkExperience' interface to resolve type errors.
  {
    role: "Distributed Tag Filesystem",
    company: "Course Project",
    period: "2022",
    description: ["Developed a distributed filesystem project for a course on Distributed Systems."],
  },
  // FIX: This object was updated to match the 'WorkExperience' interface to resolve type errors.
  {
    role: "Concurrent Linked List",
    company: "Course Project",
    period: "2021",
    description: ["Implemented a thread-safe linked list structure in C capable of performing atomic operations to handle concurrent function calls."],
  },
  // FIX: This object was updated to match the 'WorkExperience' interface to resolve type errors.
  {
    role: "Battle Cards Game",
    company: "Course Project",
    period: "2021",
    description: ["Created a collectible card game that simulates a battle between two fantasy armies."],
  }
];

export const projects: Project[] = [
  {
    title: "Obsidian Importer Plugin",
    description: "A plugin for ObsidianMD that imports and processes audio, video, and documents into structured notes using Google's Generative AI.",
    technologies: ["TypeScript", "Google Generative AI", "Obsidian API", "Vite"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
  {
    title: "AI Pokémon Battle Simulator",
    description: "A battle simulator where Pokémon strategies evolve over multiple generations using ES-HyperNEAT evolutionary algorithms.",
    technologies: ["Python", "AI", "NEAT-Python", "Pygame"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
  {
    title: "Moogle Search Engine",
    description: "A custom document search engine built from scratch in C#, featuring file indexing, TF-IDF scoring for relevance, and custom query operators.",
    technologies: ["C#", ".NET", "Data Structures", "Algorithms"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  }
];

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of Havana",
    period: "Est. 2025"
  }
];

export const skills: string[] = [
  "AI Integration", "Backend Development", "System Design", "Tooling", 
  "C#", "Python", "TypeScript", "AI/ML", "Plugin Dev.", "TeX", "C"
];

export const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with AI Integration",
    summary: "A beginner's guide to integrating Google's Generative AI into your TypeScript projects, based on my thesis experience.",
  },
  {
    title: "Evolutionary Algorithms in Game AI",
    summary: "Exploring how ES-HyperNEAT can be used to create evolving combat strategies in a Pokémon battle simulator.",
  },
];