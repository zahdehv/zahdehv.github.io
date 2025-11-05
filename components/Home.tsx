import React from 'react';
import type { SocialLinks } from '../types';
import { GitHubIcon, EmailIcon, TelegramIcon, InstagramIcon } from './icons';

interface HomeProps {
  name: string;
  title: string;
  socialLinks: SocialLinks;
}

const Home: React.FC<HomeProps> = ({ name, title, socialLinks }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center -mt-20">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-sky-400 font-medium">
          {title}
        </p>
        <p className="max-w-2xl mx-auto text-slate-400 pt-2">
          I build practical tools and explore concepts from distributed systems to machine learning.
        </p>
      </div>
      <div className="mt-8 flex space-x-6">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
          <GitHubIcon className="w-8 h-8" />
        </a>
        {socialLinks.telegram && (
          <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
            <TelegramIcon className="w-8 h-8" />
          </a>
        )}
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
            <InstagramIcon className="w-8 h-8" />
          </a>
        )}
        <a href="mailto:kuutaiyuu@gmail.com" className="text-slate-400 hover:text-sky-400 transition-colors">
          <EmailIcon className="w-8 h-8" />
        </a>
      </div>
      <a
        href="#contact"
        className="mt-12 px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all transform hover:scale-105"
      >
        Get In Touch
      </a>
    </section>
  );
};

export default Home;