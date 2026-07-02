import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export function Blog() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Blog Hero Header */}
      <section className="relative py-20 bg-brand-black text-white text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=1600&h=400')` }}
        />
        <div className="relative z-10 px-4 md:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold font-display mb-4">Technical Publications</h1>
          <p className="font-body text-base text-gray-300 max-w-xl mx-auto">
            Insights on Indian highway designs, hydraulic modeling systems, and structural auditing practices.
          </p>
        </div>
      </section>

      {/* 2. Blog Posts Listing */}
      <section className="py-16 md:py-24">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col h-full p-0 overflow-hidden" hoverEffect={true}>
                {/* Thumbnail */}
                <div className="relative h-48 w-full bg-brand-bg overflow-hidden border-b border-brand-border/40">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge type="category">{post.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-grow flex-col">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-brand-gray font-body mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-brand-green" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={12} className="text-brand-green" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-display text-brand-black mb-3 line-clamp-2 hover:text-brand-green transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="font-body text-xs md:text-sm text-brand-gray leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="border-t border-brand-border/40 pt-4 mt-auto">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="font-body text-xs font-bold text-brand-green hover:text-brand-green-hover inline-flex items-center gap-1 group"
                    >
                      Read Full Article
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Blog;
