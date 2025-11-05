import React from 'react';
import Section from './Section';
import type { BlogPost } from '../types';

interface BlogIndexPageProps {
  posts: BlogPost[];
}

const BlogIndexPage: React.FC<BlogIndexPageProps> = ({ posts }) => {
  return (
    <Section id="blog" title="From My Blog">
      <div className="max-w-4xl mx-auto space-y-8">
        {posts.map((post) => (
          <a key={post.slug} href={`/#/blog/${post.slug}`} className="block p-6 rounded-lg bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300 group">
            <p className="text-sm text-slate-400 mb-1">{post.date}</p>
            <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">{post.title}</h3>
            <p className="text-slate-400 mb-4">{post.summary}</p>
            <span className="font-semibold text-sky-500 group-hover:text-sky-400 transition-colors">
              Read More &rarr;
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default BlogIndexPage;
