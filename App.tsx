import React from 'react';
import { profileData, socialLinks, skills, projects } from './constants';
import { GitHubIcon, EmailIcon, InstagramIcon, TelegramIcon } from './components/icons';

const App: React.FC = () => {
  // Select the first 3 projects to display on the card
  const displayedProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 lg:p-8 antialiased">
      <div className="w-full max-w-5xl bg-slate-800 rounded-2xl shadow-2xl p-8 lg:p-12 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-sky-500/20">
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column: Profile Info */}
          <div className="lg:col-span-1 flex flex-col text-center lg:text-left">
            <header className="space-y-2">
              <h1 className="text-4xl font-bold text-white tracking-tight">{profileData.name}</h1>
              <p className="text-lg text-sky-400 font-medium">{profileData.title}</p>
            </header>
            <section className="mt-6">
              <p className="text-slate-400 text-sm leading-relaxed">{profileData.summary}</p>
            </section>
            <div className="mt-6 pt-2 flex items-center justify-center lg:justify-start space-x-5">
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
             <footer className="text-center lg:text-left text-slate-500 text-xs pt-8 mt-auto">
              &copy; {new Date().getFullYear()} zahdehv. All Rights Reserved.
            </footer>
          </div>
          
          {/* Right Column: Skills & Projects */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Section */}
            <section className="bg-slate-900/50 p-6 rounded-lg">
               <h2 className="text-sm font-semibold text-sky-300 uppercase tracking-wider mb-4">Core Skills</h2>
               <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="bg-slate-700 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
               </div>
            </section>
            
            {/* Projects Section */}
            <section className="bg-slate-900/50 p-6 rounded-lg">
              <h2 className="text-sm font-semibold text-sky-300 uppercase tracking-wider mb-4">Key Projects</h2>
              <ul className="space-y-4">
                {displayedProjects.map(project => (
                  <li key={project.title}>
                    <a href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer" className="group block p-3 -m-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                        <h3 className="text-slate-300 group-hover:text-sky-400 transition-colors font-medium text-sm">
                          {project.title} <span className="inline-block transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">&rarr;</span>
                        </h3>
                        <p className="text-slate-500 text-xs mt-1">{project.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

        </main>
      </div>
    </div>
  );
};

export default App;
