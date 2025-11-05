import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import BlogIndexPage from './components/Blog';
// import BlogPostPage from './components/BlogPostPage';

import { profileData, education, skills, /* blogPosts, */ socialLinks, projects } from './constants';

const App: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      window.scrollTo(0, 0);
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    // const path = hash.replace(/^#\/?/, '');

    // if (path.startsWith('blog/')) {
    //   const slug = path.replace('blog/', '');
    //   const post = blogPosts.find(p => p.slug === slug);
    //   if (post) {
    //     return <BlogPostPage post={post} />;
    //   }
    // }
    
    // if (path === 'blog') {
    //   return <BlogIndexPage posts={blogPosts} />;
    // }

    // Default to main portfolio page
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