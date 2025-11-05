export interface ProfileData {
  name: string;
  title: string;
  summary: string;
  email: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

// Fix: Add missing WorkExperience interface to resolve type error in Experience.tsx.
export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SocialLinks {
  github: string;
  telegram?: string;
  instagram?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubRepoUrl: string;
  liveDemoUrl: string;
}

// Fix: Uncommented BlogPost interface to fix type errors in blog-related components.
export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  content: string;
}