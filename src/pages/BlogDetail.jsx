import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost || null);
    const others = blogPosts.filter(p => p.slug !== slug).slice(0, 2);
    setRelatedPosts(others);
    setLoaded(true);
  }, [slug]);

  // Show nothing while loading to avoid crash
  if (!loaded) return null;

  if (!post) {
    return (
      <div className="py-24 text-center px-4">
        <h2 className="text-3xl font-bold font-display text-brand-black mb-4">Article Not Found</h2>
        <p className="font-body text-brand-gray text-base mb-8">The blog article you are looking for does not exist.</p>
        <Button variant="primary" to="/blog">Return to Technical Blog</Button>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white">
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-green hover:text-brand-green-hover transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Publications
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Column */}
          <article className="lg:col-span-8">
            
            {/* Header Metadata */}
            <div className="mb-6">
              <Badge type="category" className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl md:text-5xl font-bold font-display text-brand-black leading-tight mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-brand-gray font-body border-y border-brand-border/60 py-4 mt-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-brand-green" />
                  <span>Published on {post.date}</span>
                </div>
                <div className="hidden sm:block text-brand-border">•</div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-brand-green" />
                  <span>Written by {post.author} ({post.authorRole})</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-[300px] md:h-[420px] rounded-xl overflow-hidden shadow-sm border border-brand-border/80 mb-10">
              <img 
                src={post.thumbnail} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Injected HTML Body */}
            <div 
              className="blog-content font-body text-brand-gray text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

          </article>

          {/* Sidebar Info Column */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            {/* Author Profile */}
            <Card hoverEffect={false} className="bg-brand-bg/50 border border-brand-border/60 p-6">
              <h3 className="text-base font-bold font-display text-brand-black mb-4 border-b border-brand-border/50 pb-2">
                About the Author
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                  <User size={24} className="text-brand-green" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm text-brand-black">{post.author}</span>
                  <span className="font-body text-xs text-brand-green font-semibold">{post.authorRole}</span>
                  <p className="font-body text-[11px] text-brand-gray mt-2 leading-relaxed">
                    Senior Director at Om Seva Design & Build, overseeing public transport engineering and municipal compliance studies.
                  </p>
                </div>
              </div>
            </Card>

            {/* Share Post */}
            <Card hoverEffect={false} className="border border-brand-border/60 p-6 flex flex-col gap-4">
              <h3 className="text-base font-bold font-display text-brand-black border-b border-brand-border/50 pb-2">
                Share this Publication
              </h3>
              <div className="flex gap-3">
                <button 
                  onClick={() => alert("Link copied to clipboard!")}
                  className="flex items-center justify-center gap-2 border border-brand-border rounded-lg px-4 py-2 font-body text-xs font-semibold hover:bg-brand-bg text-brand-black transition-colors w-full cursor-pointer"
                >
                  <Share2 size={14} className="text-brand-green" />
                  Copy Article Link
                </button>
              </div>
            </Card>
          </aside>

        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-brand-border/60 mt-16 pt-16">
            <h2 className="text-2xl font-bold font-display text-brand-black mb-8">Related Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {relatedPosts.map((related) => (
                <Card key={related.slug} className="flex flex-col md:flex-row h-full p-0 overflow-hidden" hoverEffect={true}>
                  <div className="w-full md:w-1/3 h-40 md:h-full bg-brand-bg overflow-hidden relative shrink-0">
                    <img 
                      src={related.thumbnail} 
                      alt={related.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider block mb-1">
                        {related.category}
                      </span>
                      <h4 className="font-display font-bold text-sm text-brand-black mb-2 line-clamp-2 hover:text-brand-green transition-colors">
                        <Link to={`/blog/${related.slug}`}>{related.title}</Link>
                      </h4>
                    </div>
                    <Link 
                      to={`/blog/${related.slug}`}
                      className="font-body text-xs font-semibold text-brand-green hover:text-brand-green-hover inline-flex items-center gap-1 mt-3"
                    >
                      Read Article
                      <ArrowLeft size={12} className="rotate-180" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
export default BlogDetail;
