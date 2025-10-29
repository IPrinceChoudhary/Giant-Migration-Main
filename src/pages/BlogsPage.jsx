import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, TrendingUp, Filter } from 'lucide-react';
import { blogPosts, categories } from '../utils/BlogsData';

export default function BlogsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', fontFamily: 'var(--font-body)' }}>
      {/* Hero Section */}
      <div 
        className="relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px'
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(100, 54, 30, 0.85)' }}></div>
        <div className="absolute inset-0 opacity-10">

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Immigration Insights & Updates
            </h1>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--color-brand-50)' }}>
              Stay informed with the latest immigration news, expert guides, and success strategies for your journey abroad.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Article */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={24} style={{ color: 'var(--color-brand)' }} />
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-dark)', fontFamily: 'var(--font-heading)' }}>
              Featured Article
            </h2>
          </div>
          
          <div 
            className="grid md:grid-cols-2 gap-8 rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <div className="relative h-80 md:h-auto overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide"
                  style={{ 
                    backgroundColor: 'var(--color-brand)',
                    color: 'white'
                  }}
                >
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 text-sm" style={{ color: 'var(--color-muted)' }}>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {featuredPost.readTime}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-dark)', fontFamily: 'var(--font-heading)' }}>
                {featuredPost.title}
              </h3>
              
              <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text)' }}>
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  By {featuredPost.author}
                </span>
                <button 
                  onClick={() => navigate(`/blogs/${featuredPost.slug}`)}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:gap-4 cursor-pointer"
                  style={{ 
                    backgroundColor: 'var(--color-brand)',
                    color: 'white'
                  }}
                >
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter size={24} style={{ color: 'var(--color-brand)' }} />
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-dark)', fontFamily: 'var(--font-heading)' }}>
              Browse by Category
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                style={{
                  backgroundColor: activeCategory === cat.id ? 'var(--color-brand)' : 'var(--color-surface)',
                  color: activeCategory === cat.id ? 'white' : 'var(--color-text)',
                  border: activeCategory === cat.id ? 'none' : '2px solid var(--color-brand-300)',
                }}
              >
                {cat.label}
                <span 
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{
                    backgroundColor: activeCategory === cat.id ? 'rgba(255,255,255,0.2)' : 'var(--color-brand-300)',
                    color: activeCategory === cat.id ? 'white' : 'var(--color-brand-dark)'
                  }}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs" style={{ color: 'var(--color-muted)' }}>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-2" style={{ color: 'var(--color-text-dark)', fontFamily: 'var(--font-heading)' }}>
                  {post.title}
                </h3>
                
                <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--color-text)' }}>
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--color-brand-300)' }}>
                  <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
                    By {post.author}
                  </span>
                  <button 
                    onClick={() => navigate(`/blogs/${post.slug}`)}
                    className="flex items-center gap-1 text-sm font-semibold transition-all duration-300 hover:gap-2 cursor-pointer"
                    style={{ color: 'var(--color-brand)' }}
                  >
                    Read
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}