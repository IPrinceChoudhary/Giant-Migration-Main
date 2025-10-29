import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, TrendingUp } from 'lucide-react';
import { blogPosts } from '../utils/BlogsData'

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-dark)' }}>Blog Not Found</h2>
          <button 
            onClick={() => navigate('/blogs')}
            className="px-6 py-3 rounded-lg"
            style={{ backgroundColor: 'var(--color-brand)', color: 'white', cursor: "pointer" }}
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', fontFamily: 'var(--font-body)' }}>
      {/* Hero Image */}
      <div 
        className="relative h-[500px] overflow-hidden"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/blogs')}
          className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:gap-3 cursor-pointer"
          style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: 'var(--color-brand)' }}
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </button>

        {/* Category Badge */}
        <div className="absolute top-8 right-8">
          <span 
            className="px-4 py-2 rounded-full text-sm font-semibold uppercase"
            style={{ backgroundColor: 'var(--color-brand)', color: 'white' }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-10">
        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8" style={{ backgroundColor: 'var(--color-surface)' }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--color-text-dark)', fontFamily: 'var(--font-heading)' }}>
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b" style={{ borderColor: 'var(--color-brand-300)' }}>
            <div className="flex items-center gap-2" style={{ color: 'var(--color-muted)' }}>
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: 'var(--color-muted)' }}>
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: 'var(--color-muted)' }}>
              <span>By {post.author}</span>
            </div>
            {post.trending && (
              <div className="flex items-center gap-1 px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--color-maroon)', color: 'white' }}>
                <TrendingUp size={14} />
                <span className="text-sm font-semibold">Trending</span>
              </div>
            )}
          </div>

          {/* Introduction */}
          <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text)' }}>
            {post.content.introduction}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {post.content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-brand-dark)', fontFamily: 'var(--font-heading)' }}>
                  {section.heading}
                </h2>
                {section.content && (
                  <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text)' }}>
                    {section.content}
                  </p>
                )}
                {section.list && (
                  <ul className="space-y-3 ml-6">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-brand)' }}></span>
                        <span style={{ color: 'var(--color-text)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: 'var(--color-brand-50)' }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-brand-dark)', fontFamily: 'var(--font-heading)' }}>
              Conclusion
            </h3>
            <p className="leading-relaxed" style={{ color: 'var(--color-text)' }}>
              {post.content.conclusion}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 p-8 rounded-xl text-center" style={{ backgroundColor: 'var(--color-brand)', color: 'white' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Start Your Immigration Journey?
            </h3>
            <p className="mb-6">
              Contact Giant Migration for expert guidance and personalized consultation.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'white', color: 'var(--color-brand)' }}
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-text-dark)', fontFamily: 'var(--font-heading)' }}>
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <div
                  key={relatedPost.id}
                  onClick={() => {
                    navigate(`/blogs/${relatedPost.slug}`);
                    window.scrollTo(0, 0);
                  }}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  style={{ backgroundColor: 'var(--color-surface)' }}
                >
                  <div className="h-40 overflow-hidden">
                    <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2 line-clamp-2" style={{ color: 'var(--color-text-dark)' }}>
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm line-clamp-2" style={{ color: 'var(--color-text)' }}>
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
