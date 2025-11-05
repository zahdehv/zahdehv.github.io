import React from 'react';
import Section from './Section';
import type { WorkExperience, Education } from '../types';

interface ExperienceProps {
  workExperience: WorkExperience[];
  education: Education[];
}

const Experience: React.FC<ExperienceProps> = ({ workExperience, education }) => {
  return (
    <Section id="experience" title="Experience">
      <p className="text-center text-slate-500 mb-12 -mt-8 italic">
        Note: The projects listed below are representative examples of my work.
      </p>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Work Experience / Projects */}
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div key={index} className="p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/50 group">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400">
                  {job.role}
                </h3>
                <p className="text-sky-300 text-sm md:text-right">{job.period}</p>
              </div>
              <p className="text-slate-400 mb-3">{job.company}</p>
              <ul className="list-disc list-inside text-slate-400 space-y-1">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
               <div key={index} className="p-6 rounded-lg transition-all duration-300 hover:bg-slate-800/50 group">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                   <h3 className="text-xl font-bold text-white group-hover:text-sky-400">
                     {edu.degree}
                   </h3>
                   <p className="text-sky-300 text-sm md:text-right">{edu.period}</p>
                </div>
                 <p className="text-slate-400">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;