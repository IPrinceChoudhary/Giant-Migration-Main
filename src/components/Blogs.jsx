// components/HomeBlogSection.jsx
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../utils/BlogsData";

const Blogs = () => {
  const navigate = useNavigate();

  // Get 4 blogs to display
  const displayBlogs = blogPosts.slice(0, 4);

  return (
    <section className="relative py-16 lg:py-24 lg:px-20 overflow-hidden">
      {/* Multi-layered background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFBF7] via-white to-[#FAF8F7]"></div>

        {/* Diagonal stripes overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #64361E 0, #64361E 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Large decorative shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-brand/10 to-maroon/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-gradient-to-tl from-brand-300/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Top decorative line with gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px]">
        <div className="h-full bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 relative"
        >
          {/* Decorative icon background */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand/5 rounded-full blur-xl"></div>

          <div className="flex items-center justify-center gap-3 mb-4 relative"></div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-maroon-dark via-brand to-maroon-dark bg-clip-text text-transparent font-heading">
              Immigration Resources
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert insights and guides to help you navigate your immigration
            journey
          </p>
        </motion.div>

        {/* Featured Blog (Large Card) - BUTTON ONLY CLICKABLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 relative"
        >
          {/* Glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand/20 via-brand-300/20 to-maroon/20 rounded-2xl blur-xl opacity-50"></div>

          <div className="relative group grid md:grid-cols-2 gap-6 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-brand-100 hover:border-brand-300">
            {/* Image */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={displayBlogs[0].image}
                alt={displayBlogs[0].title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {displayBlogs[0].trending && (
                <div className="absolute top-4 left-4">
                  <span
                    className="flex items-center gap-1 px-3 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-md"
                    style={{
                      backgroundColor: "rgba(139, 69, 19, 0.95)",
                      color: "white",
                    }}
                  >
                    <TrendingUp size={14} />
                    Trending Now
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center relative">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand/5 to-transparent rounded-bl-full"></div>

              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase mb-4 w-fit relative z-10"
                style={{
                  backgroundColor: "var(--color-brand)",
                  color: "white",
                }}
              >
                {displayBlogs[0].category}
              </span>

              <h3
                className="text-2xl lg:text-3xl font-bold mb-4 relative z-10"
                style={{
                  color: "var(--color-text-dark)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {displayBlogs[0].title}
              </h3>

              <p
                className="text-base mb-6 leading-relaxed relative z-10"
                style={{ color: "var(--color-text)" }}
              >
                {displayBlogs[0].excerpt}
              </p>

              <div
                className="flex items-center gap-6 mb-6 text-sm relative z-10"
                style={{ color: "var(--color-muted)" }}
              >
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {displayBlogs[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {displayBlogs[0].readTime}
                </span>
              </div>

              {/* BUTTON - ONLY THIS IS CLICKABLE */}
              <button
                onClick={() => navigate(`/blogs/${displayBlogs[0].slug}`)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:gap-4 w-fit relative z-10 shadow-md hover:shadow-lg"
                style={{
                  backgroundColor: "var(--color-brand)",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Read Full Article
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Card shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Other Blogs (3 Column Grid) - BUTTONS ONLY CLICKABLE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {displayBlogs.slice(1, 4).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-brand-100 hover:border-brand-300"
            >
              {/* Small glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Image gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {post.trending && (
                  <div className="absolute top-3 right-3">
                    <span
                      className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm"
                      style={{
                        backgroundColor: "rgba(139, 69, 19, 0.9)",
                        color: "white",
                      }}
                    >
                      <TrendingUp size={10} />
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 relative">
                <div
                  className="flex items-center gap-3 mb-3 text-xs"
                  style={{ color: "var(--color-muted)" }}
                >
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold mb-2 line-clamp-2"
                  style={{
                    color: "var(--color-text-dark)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {post.title}
                </h3>

                <p
                  className="text-sm mb-4 line-clamp-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {post.excerpt}
                </p>

                {/* BUTTON - ONLY THIS IS CLICKABLE */}
                <button
                  onClick={() => navigate(`/blogs/${post.slug}`)}
                  className="flex items-center gap-1 text-sm font-semibold transition-all duration-300 hover:gap-2 cursor-pointer"
                  style={{ color: "var(--color-brand)" }}
                >
                  Read More
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-brand/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* View All Button with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center relative"
        >
          <p className="text-base lg:text-lg font-body mb-4 relative text-text">
            {blogPosts.length}+ expert guides and success stories
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand to-brand-dark text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-heading group"
          >
            <span>Explore All Blogs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]">
        <div className="h-full bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Blogs;
