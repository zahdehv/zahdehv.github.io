import React from 'react';
import Section from './Section';
import type { Project } from '../types';
import { GitHubIcon } from './icons';

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M19.904 4.096a.75.75 0 01.75.75v8.25a.75.75 0 01-1.5 0V6.56L9.03 17.18a.75.75 0 01-1.06-1.06L18.59 5.5h-6.594a.75.75 0 010-1.5h8.25z" clipRule="evenodd" />
    </svg>
);

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <Section id="portfolio" title="Projects">
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-12">
          {projects.map((project, index) => {
            const projectUrl = project.liveDemoUrl !== '#' ? project.liveDemoUrl : project.githubRepoUrl;
            const hasLink = projectUrl !== '#';

            return (
              <li key={index} className="p-1 rounded-lg transition-all duration-300 group">
                <div className="p-4 rounded-lg group-hover:bg-slate-800/50">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400">
                      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        {project.title}
                        {hasLink && <ExternalLinkIcon className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />}
                      </a>
                    </h3>
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs font-semibold bg-sky-900/50 text-sky-300 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center space-x-4">
                      {project.githubRepoUrl !== '#' && (
                        <a href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-sky-400 font-medium transition-colors text-sm">
                          <GitHubIcon className="w-5 h-5" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.liveDemoUrl !== '#' && (
                        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-sky-400 font-medium transition-colors text-sm">
                          <span>Live Demo</span>
                          <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Portfolio;