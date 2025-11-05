import React from 'react';
import type { SocialLinks } from '../types';
import { GitHubIcon, EmailIcon, InstagramIcon } from './icons';

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
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
            <InstagramIcon className="w-8 h-8" />
          </a>
        )}
        <a href="mailto:kuutaiyuu@gmail.com" className="text-slate-400 hover:text-sky-400 transition-colors">
          <EmailIcon className="w-8 h-8" />
        </a>
      </div>
      {socialLinks.telegram && (
        <a 
          href={socialLinks.telegram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-12 block group"
          aria-label="Contact me on Telegram"
        >
          <img 
            src="/telegram.png" 
            alt="Telegram QR Code" 
            className="w-40 h-40 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
          />
        </a>
      )}
    </section>
  );
};

export default Home;