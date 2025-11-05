import React from 'react';
import Section from './Section';
import type { Education } from '../types';

interface AboutProps {
  summary: string;
  skills: string[];
  education: Education[];
}

const About: React.FC<AboutProps> = ({ summary, skills, education }) => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-slate-400 mb-12">
          {summary}
        </p>
        
        <h3 className="text-2xl font-semibold text-white mb-6">My Skills</h3>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skills.map((skill) => (
            <span key={skill} className="bg-slate-800 text-sky-300 text-sm font-medium px-4 py-2 rounded-full">
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
        <div className="space-y-8 max-w-2xl mx-auto">
          {education.map((edu, index) => (
              <div key={index} className="p-6 rounded-lg bg-slate-800/50 group text-left">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-sky-300 text-sm md:text-right">{edu.period}</p>
              </div>
                <p className="text-slate-400">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
