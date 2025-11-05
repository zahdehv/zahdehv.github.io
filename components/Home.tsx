import React from 'react';
import type { SocialLinks } from '../types';
import { GitHubIcon, EmailIcon, InstagramIcon, TelegramIcon } from './icons';

interface HomeProps {
  name: string;
  title: string;
  socialLinks: SocialLinks;
  email: string;
}

const Home: React.FC<HomeProps> = ({ name, title, socialLinks, email }) => {
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
      <div className="mt-8 flex items-center justify-center space-x-6">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="GitHub">
          <GitHubIcon className="w-8 h-8" />
        </a>
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="Instagram">
            <InstagramIcon className="w-8 h-8" />
          </a>
        )}
        {socialLinks.telegram && (
          <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="Telegram">
            <TelegramIcon className="w-8 h-8" />
          </a>
        )}
        <a href={`mailto:${email}`} className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="Email">
          <EmailIcon className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Home;