// components/FAQ.jsx
import { useState, useEffect } from "react";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCountry } from "../context/CountryContext";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { currentCountry } = useCountry();
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Dynamically import country-specific FAQs
    const loadFaqs = async () => {
      try {
        const contentModule = await import(
          `../utils/countryContent/${currentCountry.code}Content.json`
        );
        setFaqs(contentModule.default.faqs);
      } catch (error) {
        console.error("Error loading FAQs:", error);
      }
    };

    loadFaqs();
  }, [currentCountry]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-maroon-dark via-brand to-maroon-dark bg-clip-text text-transparent font-heading">
              Frequently Asked Questions - {currentCountry.name}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            Find answers to common immigration questions for {currentCountry.name} residents
          </p>
        </motion.div>

        {/* FAQ Grid - 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: "easeOut" 
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative"
            >
              {/* Glow effect on active */}
              {openIndex === index && (
                <motion.div
                  layoutId="activeGlow"
                  className="absolute inset-0 bg-gradient-to-r from-brand/20 via-brand-300/20 to-brand/20 rounded-2xl blur-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                ></motion.div>
              )}

              <div 
                className={`relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-md transition-all duration-300 border-2 overflow-hidden cursor-pointer ${
                  openIndex === index 
                    ? 'border-brand shadow-xl' 
                    : 'border-brand-100 hover:border-brand-300 hover:shadow-lg'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {/* Question Header */}
                <div className="p-6 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-gradient-to-br from-brand to-brand-dark shadow-lg' 
                        : 'bg-brand/10'
                    }`}>
                      <MessageCircle size={20} className={openIndex === index ? 'text-white' : 'text-brand'} />
                    </div>

                    {/* Question Text */}
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${
                      openIndex === index ? 'text-brand-dark' : 'text-text-dark'
                    }`} style={{ fontFamily: 'var(--font-heading)' }}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron Icon */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 transition-colors duration-300 ${
                      openIndex === index ? 'text-brand' : 'text-muted'
                    }`}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </div>

                {/* Answer Content with Animation */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-14">
                          {/* Decorative line */}
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="h-[2px] bg-gradient-to-r from-brand/50 to-transparent mb-4 rounded-full"
                          ></motion.div>

                          <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                            className="text-base leading-relaxed text-text"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom shimmer effect on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand/0 to-transparent group-hover:via-brand/50 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-brand-300/10 to-maroon/10 rounded-3xl blur-2xl"></div>

          <div className="relative bg-gradient-to-br from-white to-brand-50/50 rounded-3xl p-8 lg:p-12 shadow-xl border-2 border-brand-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-brand-dark font-heading">
                  Still Have Questions?
                </h3>
                <p className="text-base text-text mb-6 leading-relaxed">
                  Our expert immigration consultants in {currentCountry.name} are ready to provide personalized guidance for your unique situation. Get in touch for a free consultation.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { value: '2500+', label: 'Happy Clients' },
                    { value: '10+', label: 'Years Experience' },
                    { value: '100%', label: 'Satisfaction' }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-brand-dark font-heading">{stat.value}</div>
                      <div className="text-xs text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA Buttons */}
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-brand to-brand-dark text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                >
                  {/* Button shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  
                  <MessageCircle size={24} className="relative" />
                  <span className="relative">Get Free Consultation</span>
                </Link>

                <a
                  href={`tel:${currentCountry.phone.replace(/\s/g, '')}`}
                  className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-white border-2 border-brand text-brand rounded-xl font-semibold text-lg shadow-md hover:shadow-lg hover:bg-brand hover:text-white transition-all duration-300"
                >
                  <Phone size={24} />
                  <span>Call: {currentCountry.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
