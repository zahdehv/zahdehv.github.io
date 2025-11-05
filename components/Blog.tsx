import React from 'react';
import Section from './Section';
import type { BlogPost } from '../types';

interface BlogProps {
  posts: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <Section id="blog" title="From My Blog">
      <p className="text-center text-slate-500 mb-12 -mt-8 italic">
        Note: These are placeholder posts to demonstrate the blog's design.
      </p>
      <div className="max-w-4xl mx-auto space-y-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg group">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">{post.title}</h3>
            <p className="text-slate-400 mb-4">{post.summary}</p>
            <a href="#" className="font-semibold text-sky-500 hover:text-sky-400 transition-colors">
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Blog;