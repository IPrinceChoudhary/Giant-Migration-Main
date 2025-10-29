// Testimonials.jsx
import { Quote, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Testimonials = () => {
  // Replace these with your actual client testimonials
  const testimonials = [
    {
      id: 1,
      name: "Diksha Bhardwaj",
      country: "Canada",
      rating: 5,
      text: "Outstanding consultation - swift, informative, and highly valuable.",
      visa: "PR Visa"
    },
    {
      id: 2,
      name: "Vaishnavi Rastogi",
      country: "Australia",
      rating: 5,
      text: "I had a great counselling session with the team and i have not come across such professionals with deep knowledge in immigration.",
      visa: "Skilled Migration"
    },
    {
      id: 3,
      name: "Mukul Goswami",
      country: "Canada",
      rating: 5,
      text: "I have started my process for Canada Lmia with them and I'm so excited that i got my Lmia within a week. They stand onto their commitments for sure",
      visa: "Student Visa"
    },
  ];

  const stats = [
    { value: "2500+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "100%", label: "Satisfaction" },
    { value: "10+", label: "Countries" },
    { value: "200+", label: "Students Assisted" },
    { value: "180+", label: "Universities" }
  ];

  return (
    <section className="py-16 lg:py-24 lg:px-20 bg-[#FAF8F7] overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >

        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-maroon-dark via-brand to-maroon-dark bg-clip-text text-transparent font-heading">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center">
            See why our clients recommend us for stress-free migration. Join thousands of happy clients who trusted us with their dreams.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-brand-100 hover:border-brand-300 group"
            >
              <div className="text-2xl lg:text-3xl font-bold text-brand-dark mb-1 font-heading group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm text-muted font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-brand-100 hover:border-brand-300 transition-all duration-300 h-full flex flex-col hover:shadow-2xl overflow-hidden">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/5 to-brand/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

                {/* Quote Icon */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-dark rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="relative flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="relative flex-1 mb-6">
                  <p className="text-text text-sm lg:text-base leading-relaxed font-body italic group-hover:text-brand-dark transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="relative border-t border-brand-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base lg:text-lg font-semibold text-brand-dark font-heading">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs lg:text-sm text-muted font-body">
                        {testimonial.visa} • {testimonial.country}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-50 to-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-dark font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-brand/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Testimonials Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-base lg:text-lg text-text font-body mb-4">
            Read more success stories from our satisfied clients
          </p>
          <Link
            to="/testimonials"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand to-brand-dark text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-heading group"
          >
            <span>View All Testimonials</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
