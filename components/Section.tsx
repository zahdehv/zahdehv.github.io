import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-400">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
