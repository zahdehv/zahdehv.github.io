import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
  githubUrl: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ projects, githubUrl }) => {
  const displayedProjects = projects.slice(0, 4);

  return (
    <Section id="portfolio" title="Projects">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-800 text-sky-300 font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
          >
            More Projects
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;