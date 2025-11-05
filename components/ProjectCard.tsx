import React from 'react';
import type { Project } from '../types';
import { GitHubIcon } from './icons';

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M19.904 4.096a.75.75 0 01.75.75v8.25a.75.75 0 01-1.5 0V6.56L9.03 17.18a.75.75 0 01-1.06-1.06L18.59 5.5h-6.594a.75.75 0 010-1.5h8.25z" clipRule="evenodd" />
    </svg>
);


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform transform hover:-translate-y-2 duration-300">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs font-semibold bg-sky-900/50 text-sky-300 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-slate-800/50 px-6 py-4 flex justify-between items-center">
         <a href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-sky-400 font-medium transition-colors">
            <GitHubIcon className="w-5 h-5" />
            <span>GitHub Repo</span>
         </a>
         <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-sky-400 font-medium transition-colors">
            <span>Live Demo</span>
            <ExternalLinkIcon className="w-5 h-5" />
         </a>
      </div>
    </div>
  );
};

export default ProjectCard;
