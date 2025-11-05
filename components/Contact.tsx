import React from 'react';
import Section from './Section';
import type { SocialLinks } from '../types';
import { GitHubIcon, EmailIcon, TelegramIcon, InstagramIcon } from './icons';

interface ContactProps {
  socialLinks: SocialLinks;
  email: string;
}

const Contact: React.FC<ContactProps> = ({ socialLinks, email }) => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-xl mx-auto">
        <p className="text-lg text-slate-400 mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
        </p>
        <a 
          href={`mailto:${email}`}
          className="inline-block mb-12 px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all transform hover:scale-105"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-6 mb-8">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-sky-400 transition-colors">
            <GitHubIcon className="w-8 h-8" />
          </a>
          {socialLinks.telegram && (
             <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-slate-400 hover:text-sky-400 transition-colors">
              <TelegramIcon className="w-8 h-8" />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-sky-400 transition-colors">
              <InstagramIcon className="w-8 h-8" />
            </a>
          )}
          <a href={`mailto:${email}`} aria-label="Email" className="text-slate-400 hover:text-sky-400 transition-colors">
            <EmailIcon className="w-8 h-8" />
          </a>
        </div>
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} zahdehv. All Rights Reserved.
        </div>
      </div>
    </Section>
  );
};

export default Contact;