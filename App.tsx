import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';

import { profileData, workExperience, education, skills, blogPosts, socialLinks, projects } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-20 py-24">
        <Home name={profileData.name} title={profileData.title} socialLinks={socialLinks} />
        <About summary={profileData.summary} skills={skills} />
        <Experience workExperience={workExperience} education={education} />
        <Portfolio projects={projects} />
        <Blog posts={blogPosts} />
        <Contact socialLinks={socialLinks} email={profileData.email} />
      </main>
    </div>
  );
};

export default App;