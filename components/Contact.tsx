import React from 'react';
import Section from './Section';
import type { SocialLinks } from '../types';
import { GitHubIcon, EmailIcon, InstagramIcon } from './icons';

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
        {socialLinks.telegram && (
          <a 
            href={socialLinks.telegram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mb-12 group"
            aria-label="Contact me on Telegram"
          >
            <img 
              src="/telegram.png" 
              alt="Telegram QR Code" 
              className="w-40 h-40 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 object-contain" 
            />
          </a>
        )}
        <div className="flex justify-center space-x-6 mb-8">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-sky-400 transition-colors">
            <GitHubIcon className="w-8 h-8" />
          </a>
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