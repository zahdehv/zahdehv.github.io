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

// FIX: Add BlogPost interface to resolve compilation errors in blog-related components.
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}
