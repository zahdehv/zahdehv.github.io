import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import { profileData, education, skills, socialLinks, projects } from './constants';


const App: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      // When the hash is empty or just '#', it means we are on the main page.
      // We don't want to scroll to top for in-page navigation.
      if (!hash.startsWith('#/')) {
        window.scrollTo(0, 0);
      }
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [hash]);

  const renderContent = () => {
    // All routing logic for the blog has been removed.
    // The app now always renders the main portfolio content.
    return (
      <>
        <Home name={profileData.name} title={profileData.title} socialLinks={socialLinks} />
        <About summary={profileData.summary} skills={skills} education={education} />
        <Portfolio projects={projects} />
        <Contact socialLinks={socialLinks} email={profileData.email} />
      </>
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-20 py-24">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
