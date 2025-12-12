// pages/TestimonialsPage.jsx
import { useState } from "react";
import { Star, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaGoogle, FaYoutube } from "react-icons/fa";

const TestimonialsPage = () => {
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);

  // YouTube videos data
  const successVideos = [
    {
      id: 1,
      videoId: "4de7CHTQ8dY",
      title: "Express Entry Success - Canada",
      description: "Fast-tracked PR approval story"
    },
    {
      id: 2,
      videoId: "bj_MUkOxm0E",
      title: "Student Visa Success - Australia",
      description: "From application to approval - A successful journey"
    },
    {
      id: 3,
      videoId: "0yaWMy-MR4A",
      title: "Work Permit Approval - USA",
      description: "Professional guidance leading to visa success"
    },
    {
      id: 4,
      videoId: "TvLmrov4Gwc",
      title: "Client Success Story - Canada PR",
      description: "Watch how we helped this family achieve their Canadian dream",
    },
    {
      id: 5,
      videoId: "CiXkPiHKGDw",
      title: "Family Migration - Australia",
      description: "Complete family successfully migrated together"
    }
  ];

  // Testimonials data (keeping existing testimonials)
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      text: "Giant Migration helped me with my Canadian PR process and I couldn't be happier! Their team was professional, responsive, and guided me through every step. They prepared all my documents perfectly and I got my approval within 8 months. Highly recommend their services!",
      visa: "Canada PR",
      date: "2 months ago",
      verified: true
    },
    {
      id: 2,
      name: "Sarah Williams",
      rating: 5,
      text: "Exceptional service from start to finish! I was applying for an Australian skilled migration visa and the team at Giant Migration made the entire process stress-free. They were always available to answer my questions and their expertise really showed. My visa was approved in just 6 months!",
      visa: "Australia Skilled Migration",
      date: "3 months ago",
      verified: true
    },
    {
      id: 3,
      name: "Amit Sharma",
      rating: 5,
      text: "I want to thank the entire Giant Migration team for helping me secure my student visa for Canada. The process was smooth and their guidance was invaluable. They helped me choose the right university and prepared my SOP perfectly. Got my visa approved without any issues!",
      visa: "Canada Student Visa",
      date: "1 month ago",
      verified: true
    },
    {
      id: 4,
      name: "Priya Patel",
      rating: 5,
      text: "Best immigration consultancy I've worked with! They handled my Australian partner visa application with such care and professionalism. The team was always prompt in their responses and kept me updated throughout. I'm now happily living in Australia with my spouse. Thank you Giant Migration!",
      visa: "Australia Partner Visa",
      date: "4 months ago",
      verified: true
    },
    {
      id: 5,
      name: "Mohammed Al-Rashid",
      rating: 5,
      text: "Giant Migration made my dream of studying in the USA come true! Their counselors helped me get admission to a top university and guided me through the F-1 visa process. Everything was handled professionally and efficiently. I highly recommend their services to anyone planning to study abroad.",
      visa: "USA Student Visa",
      date: "2 months ago",
      verified: true
    },
    {
      id: 6,
      name: "Jessica Thompson",
      rating: 5,
      text: "I cannot thank Giant Migration enough for their excellent service. They helped me with my UK work visa and the entire process was seamless. Their team is knowledgeable, professional, and genuinely cares about their clients. My visa was approved faster than expected!",
      visa: "UK Work Visa",
      date: "5 months ago",
      verified: true
    },
    {
      id: 7,
      name: "Vikram Singh",
      rating: 5,
      text: "Outstanding service! I was struggling with my Australian PR application and Giant Migration took over the case. They identified issues with my previous application and resubmitted it correctly. Within 9 months, I received my PR approval. Their expertise saved my dream of living in Australia!",
      visa: "Australia PR",
      date: "6 months ago",
      verified: true
    },
    {
      id: 8,
      name: "Emily Chen",
      rating: 5,
      text: "Giant Migration is the best! They helped my entire family with our Canadian immigration process. From Express Entry to receiving our PRs, they guided us every step of the way. The team was patient, professional, and always available. We're now happily settled in Canada!",
      visa: "Canada Family Immigration",
      date: "3 months ago",
      verified: true
    },
    {
      id: 9,
      name: "Aisha Khan",
      rating: 5,
      text: "I had a wonderful experience with Giant Migration. They helped me prepare for my IELTS exam and then guided me through my Australian student visa application. Their coaching was excellent and I scored 7.5 bands! My visa was also approved without any complications. Thank you so much!",
      visa: "Australia Student Visa + IELTS",
      date: "2 months ago",
      verified: true
    },
    {
      id: 10,
      name: "David Martinez",
      rating: 5,
      text: "Highly professional and reliable immigration consultancy! Giant Migration handled my employer-sponsored work visa for Australia and they were amazing. They coordinated with my employer, prepared all documents, and ensured everything was perfect. My visa was approved in record time!",
      visa: "Australia TSS 482 Visa",
      date: "4 months ago",
      verified: true
    },
    {
      id: 11,
      name: "Neha Gupta",
      rating: 5,
      text: "I'm so grateful to Giant Migration for helping me achieve my Canadian dream! Their team is incredibly knowledgeable about immigration laws and they made my Provincial Nominee Program application flawless. Communication was excellent throughout and I got my nomination approved. Highly recommended!",
      visa: "Canada PNP",
      date: "5 months ago",
      verified: true
    },
    {
      id: 12,
      name: "James Anderson",
      rating: 5,
      text: "Giant Migration exceeded all my expectations! I needed urgent help with my US H-1B visa and they delivered. Their team worked efficiently, prepared all documents quickly, and guided me through the interview preparation. My visa was approved and I'm now working in the USA. Thank you!",
      visa: "USA H-1B Work Visa",
      date: "1 month ago",
      verified: true
    },
    {
      id: 13,
      name: "Fatima Abdullah",
      rating: 5,
      text: "Excellent immigration consultancy service! Giant Migration helped me with my UK spouse visa and the process was smooth from start to finish. They were very thorough with documentation and their guidance was invaluable. My visa got approved without any issues. Thank you team!",
      visa: "UK Spouse Visa",
      date: "3 months ago",
      verified: true
    },
    {
      id: 14,
      name: "Sandeep Reddy",
      rating: 5,
      text: "I highly recommend Giant Migration to anyone looking for immigration services. They helped me with my New Zealand skilled migration visa and their expertise was evident. The team was professional, transparent about the process, and always kept me informed. My visa was approved in 10 months!",
      visa: "New Zealand Skilled Migration",
      date: "6 months ago",
      verified: true
    },
    {
      id: 15,
      name: "Lisa Robinson",
      rating: 5,
      text: "Giant Migration provided outstanding support throughout my Australian business visa application. Their knowledge of business migration requirements is exceptional. They prepared a solid business plan and ensured all documentation was perfect. My visa was approved and I'm now running my business in Australia!",
      visa: "Australia Business Visa",
      date: "4 months ago",
      verified: true
    }
  ];

  // Video slider navigation
  const nextVideo = () => {
    setCurrentVideoSlide((prev) => (prev + 1) % successVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideoSlide((prev) => (prev - 1 + successVideos.length) % successVideos.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#64361E] to-[#8B4513] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Client Success Stories
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-2">
              Real reviews from real clients on Google
            </p>
            <p className="text-base text-white/80">
              Join thousands of satisfied clients who trusted Giant Migration with their dreams
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Google Reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left: iPhone Frame with Video (Sticky) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="lg:sticky lg:top-24">
              {/* iPhone Mockup */}
              <div className="relative mx-auto" style={{ maxWidth: '320px' }}>
                {/* iPhone Outer Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* iPhone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                  
                  {/* iPhone Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                    {/* Video Container */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/TvLmrov4Gwc?si=h2KEH-7I4RB__lJl"
                        title="Giant Migration Success Stories"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  
                  {/* iPhone Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
                </div>

                {/* Decorative Background */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#64361E]/5 rounded-full blur-3xl"></div>
              </div>

              {/* Video Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#64361E] to-[#8B4513] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Play className="w-5 h-5 text-white" fill="white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#64361E] mb-1">
                      Real Success Stories
                    </h3>
                    <p className="text-sm text-gray-600">
                      Watch how we've transformed dreams into reality for clients worldwide
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Google Reviews Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <FaGoogle className="w-8 h-8 text-[#4285F4]" />
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#64361E]">4.9</div>
                    <div className="flex items-center gap-1 justify-end">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 text-center">
                  Based on <span className="font-semibold text-[#64361E]">500+</span> Google Reviews
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Testimonials Grid */}
          <div className="lg:col-span-2">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-[#64361E] mb-2">
                What Our Clients Say
              </h2>
              <p className="text-gray-600">
                Showing <span className="font-semibold text-[#64361E]">{testimonials.length}</span> verified Google reviews
              </p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 + index * 0.05,
                  }}
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-[#8B4513]/30 transition-all duration-300 h-full flex flex-col">
                    
                    {/* Header with Google Icon and Stars */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#64361E] to-[#8B4513] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-[#64361E]">
                            {testimonial.name}
                          </h4>
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <FaGoogle className="w-5 h-5 text-[#4285F4] flex-shrink-0" />
                    </div>

                    {/* Testimonial Text */}
                    <div className="flex-1 mb-4">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-[#8B4513]">
                          {testimonial.visa}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {testimonial.date}
                        </p>
                      </div>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Verified
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Success Stories Section */}
      <div className="bg-gradient-to-br from-[#64361E]/5 to-[#8B4513]/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaYoutube className="w-10 h-10 text-[#FF0000]" />
              <div className="w-1 h-8 bg-[#64361E]"></div>
              <Play className="w-8 h-8 text-[#64361E]" fill="#64361E" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#64361E] via-[#8B4513] to-[#64361E] bg-clip-text text-transparent">
                Video Success Stories
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch real clients share their immigration journey and success stories with Giant Migration
            </p>
          </motion.div>

          {/* Video Slider */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Main Video Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
              
              {/* Video Iframe */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${successVideos[currentVideoSlide].videoId}`}
                  title={successVideos[currentVideoSlide].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-xl font-bold text-[#64361E] mb-2">
                  {successVideos[currentVideoSlide].title}
                </h3>
                <p className="text-gray-600">
                  {successVideos[currentVideoSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevVideo}
              className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 p-3 md:p-4 cursor-pointer bg-white hover:bg-[#64361E] text-[#64361E] hover:text-white rounded-full shadow-2xl transition-all duration-300 z-10 border-2 border-[#64361E] group"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 p-3 md:p-4 cursor-pointer bg-white hover:bg-[#64361E] text-[#64361E] hover:text-white rounded-full shadow-2xl transition-all duration-300 z-10 border-2 border-[#64361E] group"
              aria-label="Next video"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Slider Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {successVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentVideoSlide
                      ? 'w-12 bg-[#64361E]'
                      : 'w-3 bg-gray-300 hover:bg-[#8B4513]'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>

            {/* Video Counter */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Video <span className="font-bold text-[#64361E]">{currentVideoSlide + 1}</span> of <span className="font-bold text-[#64361E]">{successVideos.length}</span>
              </p>
            </div>
          </motion.div>

          {/* Video Thumbnails Preview (Optional) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-12 hidden md:grid md:grid-cols-5 gap-4"
          >
            {successVideos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setCurrentVideoSlide(index)}
                className={`relative group rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentVideoSlide
                    ? 'ring-4 ring-[#64361E] scale-105'
                    : 'ring-2 ring-gray-200 hover:ring-[#8B4513] opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" fill="white" />
                </div>
                {index === currentVideoSlide && (
                  <div className="absolute top-2 right-2 bg-[#64361E] text-white text-xs font-bold px-2 py-1 rounded">
                    Playing
                  </div>
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
