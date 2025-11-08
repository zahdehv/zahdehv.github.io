import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import { profileData, education, skills, socialLinks, projects } from './constants';


const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-6 md:px-12 lg:px-20">
        <Home name={profileData.name} title={profileData.title} socialLinks={socialLinks} email={profileData.email} />
        <About summary={profileData.summary} skills={skills} education={education} />
        <Portfolio projects={projects} githubUrl={socialLinks.github} />
        <Contact socialLinks={socialLinks} email={profileData.email} />
      </main>
    </div>
  );
};

export default App;