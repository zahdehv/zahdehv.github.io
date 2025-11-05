export interface ProfileData {
  name: string;
  title: string;
  summary: string;
  email: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SocialLinks {
  github: string;
  telegram?: string;
  instagram?: string;
}

// FIX: Add Project interface. This type is imported and used in components/Portfolio.tsx and components/ProjectCard.tsx but was not defined.
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubRepoUrl: string;
  liveDemoUrl: string;
}

// FIX: Add BlogPost interface. This type is imported and used in components/Blog.tsx but was not defined.
export interface BlogPost {
  title: string;
  summary: string;
}