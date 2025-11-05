import React from 'react';
import Section from './Section';

interface AboutProps {
  summary: string;
  skills: string[];
}

const About: React.FC<AboutProps> = ({ summary, skills }) => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-slate-400 mb-12">
          {summary}
        </p>
        <h3 className="text-2xl font-semibold text-white mb-6">My Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill} className="bg-slate-800 text-sky-300 text-sm font-medium px-4 py-2 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
