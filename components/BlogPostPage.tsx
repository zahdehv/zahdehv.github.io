import React from 'react';
import type { BlogPost } from '../types';

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  // Simple markdown-like rendering for code blocks and paragraphs
  const renderContent = (content: string) => {
    const blocks = content.trim().split('```');
    return blocks.map((block, index) => {
      if (index % 2 === 1) { // It's a code block
        const [language, ...codeLines] = block.split('\n');
        const code = codeLines.join('\n');
        return (
          <pre key={index} className="bg-slate-800 rounded-lg p-4 my-6 overflow-x-auto">
            <code className="text-sm text-sky-300 font-mono">{code.trim()}</code>
          </pre>
        );
      } else { // It's regular text
        return block.trim().split('\n\n').map((paragraph, pIndex) => (
          <p key={`${index}-${pIndex}`} className="mb-6 text-slate-400 leading-relaxed">{paragraph}</p>
        ));
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <a href="/#/blog" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-8 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
        </svg>
        <span>Back to Blog</span>
      </a>
      <article>
        <header>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">{post.title}</h1>
          <p className="text-slate-400 mb-8">{post.date}</p>
        </header>
        <div className="prose prose-invert">
            {renderContent(post.content)}
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
