import React from 'react';
import { profileData, socialLinks, skills, projects } from './constants';
import { GitHubIcon, EmailIcon, InstagramIcon, TelegramIcon } from './components/icons';

const App: React.FC = () => {
  // Select the first 3 projects to display on the card
  const displayedProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 antialiased">
      <div className="w-full max-w-lg bg-slate-800 rounded-2xl shadow-2xl p-8 space-y-6 text-slate-300 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-sky-500/20">
        
        {/* Header Section */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white tracking-tight">{profileData.name}</h1>
          <p className="text-lg text-sky-400 font-medium">{profileData.title}</p>
          <div className="pt-2 flex items-center justify-center space-x-5">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="GitHub">
              <GitHubIcon className="w-6 h-6" />
            </a>
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6" />
              </a>
            )}
            {socialLinks.telegram && (
              <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="Telegram">
                <TelegramIcon className="w-6 h-6" />
              </a>
            )}
            <a href={`mailto:${profileData.email}`} className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="Email">
              <EmailIcon className="w-6 h-6" />
            </a>
          </div>
        </header>

        <hr className="border-slate-700" />

        {/* Summary Section */}
        <section>
          <p className="text-center text-slate-400 text-sm leading-relaxed">{profileData.summary}</p>
        </section>
        
        {/* Skills Section */}
        <section>
           <h2 className="text-center text-sm font-semibold text-sky-300 uppercase tracking-wider mb-3">Core Skills</h2>
           <div className="flex flex-wrap justify-center gap-2">
            {skills.map(skill => (
              <span key={skill} className="bg-slate-700 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
           </div>
        </section>
        
        <hr className="border-slate-700" />

        {/* Projects Section */}
        <section>
          <h2 className="text-center text-sm font-semibold text-sky-300 uppercase tracking-wider mb-3">Key Projects</h2>
          <ul className="space-y-2 text-center">
            {displayedProjects.map(project => (
              <li key={project.title}>
                <a href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors font-medium text-sm group">
                  {project.title} <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sky-400">&rarr;</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-xs pt-4">
          &copy; {new Date().getFullYear()} zahdehv. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
